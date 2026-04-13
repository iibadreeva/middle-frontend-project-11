import { i18n } from '../../i18n.js'
import { getFeeds } from '../helpers/dom.js'

const buildFeedItem = ({ feedTitle, feedDescription }) => {
  const li = document.createElement('li')
  li.className = 'list-group-item border-0 border-end-0'

  const h3 = document.createElement('h3')
  h3.className = 'h6 m-0'
  h3.textContent = feedTitle

  const p = document.createElement('p')
  p.className = 'feed-description m-0 small text-black-50'
  p.textContent = feedDescription

  li.append(h3, p)
  return li
}

export const renderFeeds = (feeds) => {
  const section = getFeeds()
  if (!section || feeds.length === 0) return

  const cardBody = section.querySelector('.feeds-card-body')
  const list = section.querySelector('.list-group-feeds')
  if (!cardBody || !list) return

  if (!cardBody.querySelector('h2')) {
    const h2 = document.createElement('h2')
    h2.className = 'card-title h4'
    h2.textContent = i18n.t('feeds.title')
    cardBody.appendChild(h2)
  }

  list.innerHTML = ''
  feeds.forEach(feed => list.appendChild(buildFeedItem(feed)))
}
