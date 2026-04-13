import { v4 as uuid } from 'uuid'

import { getElementText } from './get-element-text.js'
import { getPostsFromElements } from './get-posts-from-elements.js'

export const getFeedAndPostsFromRssDocument = (rssXmlDOM, url) => {
  const itemElements = rssXmlDOM.querySelectorAll('item')
  const feedId = uuid()
  return {
    feed: {
      feedId,
      feedTitle: getElementText('title', rssXmlDOM),
      feedDescription: getElementText('description', rssXmlDOM),
    },
    posts: getPostsFromElements(itemElements, feedId),
    url,
  }
}
