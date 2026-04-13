import { getInput } from '../helpers/dom.js'

export const renderLoading = (isLoading) => {
  const button = document.querySelector('button[type="submit"]')
  const input = getInput()
  if (button) button.disabled = isLoading
  if (input) input.disabled = isLoading
}
