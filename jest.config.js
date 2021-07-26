module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  // 用来处理 jest 不能处理的 esm，将 esm 转化为 commonjs
  transformIgnorePatterns: ['/!node_modules\\/lodash-es/'],
}
