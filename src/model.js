import { proxy } from 'valtio/vanilla'

// State stores error codes, not translated text.
// View translates codes via i18n.t(`errors.${code}`)
const state = proxy({
  inputValue: '',
  errors: {},
  isLoading: false,
  feeds: [],
  formState: 'neutral', // 'neutral' | 'error' | 'successful'
})

const clearForm = () => {
  state.inputValue = ''
  state.errors = {}
  state.formState = 'successful'
}

export { state, clearForm }
