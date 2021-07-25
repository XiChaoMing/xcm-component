import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { name } from '../package.json'

const file = (type) => `dist/${name}.${type}.js`
// 用来覆盖 tsconfig.json 中的配置
const overrides = {
  compilerOptions: {
    declaration: true, // 生成 .d.ts 文件
  },
  exclude: ['node_modules', 'src/App.vue', 'src/main.ts'],
}

export { name, file }

export default {
  input: 'src/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'es',
  },
  plugins: [
    // 处理引入的第三方包，比如 import xxx from 'lodash-es'
    nodeResolve(),
    typescript({
      tsconfigOverride: overrides,
    }),
    vue(),
    css({
      output: 'bundle.css',
    }),
  ],
  external: ['vue', 'lodash-es'],
}
