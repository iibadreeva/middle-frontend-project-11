import { i18n } from '../../i18n.js'
import { state } from '../../model.js'
import { getFeedback, getInput } from '../helpers/dom.js'

export const renderError = (errors) => {
  // Successful template has its own baked-in success text — don't overwrite it
  if (state.formState === 'successful') return

  const feedback = getFeedback()
  const input = getInput()
  if (!feedback) return

  if (errors?.url) {
    feedback.textContent = i18n.t(`errors.${errors.url}`)
    feedback.dataset.errorSource = 'form'
    input?.classList.add('is-invalid')
  } else {
    if (feedback.dataset.errorSource === 'form') {
      feedback.textContent = ''
      delete feedback.dataset.errorSource
    }
    input?.classList.remove('is-invalid')
  }
}
