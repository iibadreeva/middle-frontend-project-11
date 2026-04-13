import { i18n } from '../../i18n.js'
import { getFeedback } from '../helpers/dom.js'

export const renderUpdateError = (updateError) => {
  const feedback = getFeedback()
  if (!feedback) return

  if (updateError) {
    feedback.textContent = i18n.t(`errors.${updateError}`)
    feedback.dataset.errorSource = 'network'
  }
 else {
    if (feedback.dataset.errorSource === 'network') {
      feedback.textContent = ''
      delete feedback.dataset.errorSource
    }
  }
}
