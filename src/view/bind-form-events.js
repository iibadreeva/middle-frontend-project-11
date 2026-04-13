import { handleCloseModal, handlePostClick, handleSubmit } from '../controller.js'
import { state } from '../model.js'
import { getInput } from './helpers/dom.js'

let isDocumentClickBound = false

export const bindFormEvents = () => 
{
  const form = document.querySelector('.rss-form')
  const input = getInput()
  if (form) form.addEventListener('submit', handleSubmit)

  if (input) 
{
    input.addEventListener('input', (e) => 
{
      state.inputValue = e.target.value.trim()
    })
    // Restore current value after template swap
    input.value = state.inputValue
  }

  if (isDocumentClickBound) return
  isDocumentClickBound = true

  document.addEventListener('click', (event) => 
{
    const btn = event.target.closest('.js-modal-btn')
    const closeBtn = event.target.closest('.js-close-modal')

    if (btn) 
{
      handlePostClick(btn)
      return
    }

    if (closeBtn) 
{
      handleCloseModal()
    }
  })
}
