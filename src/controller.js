import axios from 'axios'
import { Modal } from 'bootstrap'

import { addFeed, clearForm, state } from './model.js'
import { getFeedAndPostsFromRssDocument } from './utils/get-feed-and-posts-from-rss-document.js'
import { parseXmlDocument } from './utils/parse-xml-document.js'
import { FETCH_TIMEOUT, buildApiUrl, AUTO_UPDATE_INTERVAL } from './api/index.js'
import { validateSchema } from './utils/validate-schema.js'

const checkDuplicate = url =>
  state.links.includes(url) ? Promise.reject(new Error('duplicate')) : Promise.resolve(url)

const fetchFeed = url =>
  axios
    .get(buildApiUrl(url), { timeout: FETCH_TIMEOUT })
    .then((response) => {
      if (!response.data?.contents) {
        return Promise.reject(new Error('networkError'))
      }

      try {
          return parseXmlDocument(response.data.contents)
      }
      catch {
        return Promise.reject(new Error('xmlError'))
      }
    })
    .then((xmlDoc) => {
        try {
            return getFeedAndPostsFromRssDocument(xmlDoc, url)
        }
        catch {
            return Promise.reject(new Error('xmlError'))
        }
    })
    .catch((err) => {
      if (err.message === 'networkError' || err.message === 'xmlError') {
        return Promise.reject(err)
      }

      return Promise.reject(new Error('networkError'))
    })

const handleSubmit = (e) => {
  e.preventDefault()
  const { inputValue } = state

  state.errors = {}
  state.isLoading = true
  state.formState = 'neutral'

  validateSchema(inputValue)
    .then(checkDuplicate)
    .then(fetchFeed)
    .then(addFeed)
    .then(clearForm)
    .catch((err) => {
      state.errors = { url: err.message }
      state.formState = 'error'
    })
    .finally(() => {
      state.isLoading = false
    })
}

// --- Auto-update ---

const isPostNew = post =>
  !state.posts.some(existing => existing.link === post.link && existing.title === post.title)

const fetchNewPosts = url =>
  axios
    .get(buildApiUrl(url), { timeout: FETCH_TIMEOUT })
    .then((response) => {
      if (!response.data?.contents) return null
      return parseXmlDocument(response.data.contents)
    })
    .then(xmlDoc => getFeedAndPostsFromRssDocument(xmlDoc, url))
    .then(({ posts }) => posts.filter(isPostNew))
    .catch((err) => {
      if (err.message === 'networkError' || err.message === 'xmlError') {
        return Promise.reject(err)
      }

      return Promise.reject(new Error('networkError'))
    })

const checkForNewPosts = () =>
  Promise.all(state.links.map(fetchNewPosts)).then((results) => {
    const hadError = results.some(r => r === null)
    const newPosts = results.filter(Boolean).flat()

    if (newPosts.length > 0) {
      state.posts = [...newPosts, ...state.posts]
    }

    state.updateError = hadError ? 'networkError' : null
  })

const startAutoUpdate = () => {
  const tick = () => {
    checkForNewPosts().finally(() => setTimeout(tick, AUTO_UPDATE_INTERVAL))
  }
  setTimeout(tick, AUTO_UPDATE_INTERVAL)
}

// --- modal (show - hide) ---

const handlePostClick = (element, config = {}) => {
  const modal = Modal.getOrCreateInstance(element, config)
  modal.show()
}

const handleCloseModal = (element, config = {}) => {
  const modal = Modal.getOrCreateInstance(element, config)
  modal.hide()
}

export { handleSubmit, startAutoUpdate, handlePostClick, handleCloseModal }
