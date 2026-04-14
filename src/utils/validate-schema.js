import { getSchema } from './get-schema.js'

export const validateSchema = url =>
  getSchema()
    .validate({ url }, { abortEarly: true })
    .then(() => url)
    .catch(err => Promise.reject(new Error(err.message)))
