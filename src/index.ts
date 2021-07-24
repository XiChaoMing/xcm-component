import { App } from 'vue'

import LText from './components/LText'
import LImage from './components/LImage'
import Uploader from './components/Uploader'

const components = [LText, LImage, Uploader]

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

// 支持单个组件的 import 导入使用
export { LText, LImage, Uploader, install }

// 支持 app.use 的形式全部引入使用
export default {
  install,
}
