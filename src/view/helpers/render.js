// --- Render helpers ---

import { i18n } from '../../i18n.js'

export const applyI18nTexts = () => 
{
  document.querySelectorAll('[data-i18n]').forEach((el) => 
{
    const key = el.getAttribute('data-i18n')
    const text = i18n.t(key)
    // Only overwrite when a real translation exists (key !== resolved text)
    if (text !== key) el.textContent = text
  })
}
