import { getModalBody, getModalLink, getModalTitle, getPostItem } from '../helpers/dom.js'

export const renderModal = (post, id) => {
  if (!post) return

  getModalBody().innerHTML = post.description
  getModalTitle().textContent = post.title
  getModalLink().href = post.link
  getPostItem(id).classList.remove('fw-bold')
  getPostItem(id).classList.add('fw-normal', 'link-secondary')
}
