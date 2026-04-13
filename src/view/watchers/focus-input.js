import { getInput } from '../helpers/dom.js'

export const focusInput = () => 
{
  const input = getInput()
  if (input) 
{
    input.value = ''
    input.focus()
  }
}
