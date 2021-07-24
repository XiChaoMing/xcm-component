import { App } from 'vue'
import Uploader from './Uploader.vue'

Uploader.install = (app: App) => {
  app.component(Uploader.name, Uploader)
}

export default Uploader
