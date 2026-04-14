import * as yup from 'yup'

// Returns a schema that yields error *codes* (set via yup.setLocale in i18n.js)
export const getSchema = () => yup.object({ url: yup.string().required().url() })
