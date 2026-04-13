import { v4 as uuid } from 'uuid'

import { getElementText } from './get-element-text.js'

export const getPostsFromElements = (elements, feedId) => 
{
  const elementsArray = Array.from(elements)

  return elementsArray.map((item) => 
{
    const title = getElementText('title', item)
    const description = getElementText('description', item)
    const link = getElementText('link', item)
    return {
      id: uuid(),
      feedId,
      title,
      description,
      link,
    }
  })
}
