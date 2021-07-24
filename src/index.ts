import { App } from 'vue'

import LText from './components/LText'

const components = [LText]

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

// 支持单个组件的 import 导入使用
export { LText, install }

// 支持 app.use 的形式全部引入使用
export default {
  install
}
