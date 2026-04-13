import { i18n } from '../../i18n.js'
import { getFeeds } from '../helpers/dom.js'

const buildPostItem = ({ title, link, id }) => {
  const li = document.createElement('li')
  li.className =
    'list-group-item d-flex justify-content-between align-items-start border-0 border-end-0'

  const a = document.createElement('a')
  a.className = 'fw-bold'
  a.href = link
  a.dataset.id = id
  a.target = '_blank'
  a.rel = 'noopener noreferrer'
  a.textContent = title

  const button = document.createElement('button')
  button.className = 'btn btn-outline-primary btn-sm js-modal-btn'
  button.type = 'button'
  button.dataset.id = id
  button.dataset.bsToggle = 'modal'
  button.dataset.bsTarget = '#modal'
  button.textContent = i18n.t('feeds.viewButton')

  li.append(a, button)
  return li
}

export const renderPosts = posts => {
  const section = getFeeds()
  if (!section || posts.length === 0) return

  const cardBody = section.querySelector('.posts-card-body')
  const list = section.querySelector('.list-group-posts')
  if (!cardBody || !list) return

  if (!cardBody.querySelector('h2')) {
    const h2 = document.createElement('h2')
    h2.className = 'card-title h4'
    h2.textContent = i18n.t('feeds.postsTitle')
    cardBody.appendChild(h2)
  }

  list.innerHTML = ''
  posts.forEach(post => list.appendChild(buildPostItem(post)))
}
