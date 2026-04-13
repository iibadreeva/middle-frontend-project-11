import { startAutoUpdate } from './controller.js'
import { initI18n } from './i18n.js'
import { initView } from './view/view.js'

import 'bootstrap/dist/css/bootstrap.min.css'

initI18n().then(() => 
{
  initView()
  startAutoUpdate()
})
