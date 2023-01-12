import type { App } from 'vue'
import { anu } from 'anu-vue'

// anu styles
import 'anu-vue/dist/style.css'

// default theme styles
import '@anu-vue/preset-theme-default/dist/style.css'

export default (app: App) => {
  app.use(anu)
}
