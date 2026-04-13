import axios from 'axios'
import * as yup from 'yup'
import { clearForm, state } from './model.js'

const buildApiUrl = (url) =>
  `https://allorigins.hexlet.app/get?disableCache=true&url=${encodeURIComponent(url)}`

// Returns a schema that yields error *codes* (set via yup.setLocale in i18n.js)
const getSchema = () => yup.object({ url: yup.string().required().url() })

const validateSchema = (url) =>
  getSchema()
    .validate({ url }, { abortEarly: true })
    .then(() => url)
    .catch((err) => Promise.reject(new Error(err.message)))

const checkDuplicate = (url) =>
  state.feeds.includes(url)
    ? Promise.reject(new Error('duplicate'))
    : Promise.resolve(url)

const fetchFeed = (url) =>
  axios
    .get(buildApiUrl(url))
    .then((response) => {
      if (!response.data?.contents) return Promise.reject(new Error('networkError'))
      return url
    })
    .catch((err) => {
      if (err.message === 'networkError') return Promise.reject(err)
      return Promise.reject(new Error('networkError'))
    })

const addFeed = (url) => {
  state.feeds = [...state.feeds, url]
  return url
}

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

export { handleSubmit }
