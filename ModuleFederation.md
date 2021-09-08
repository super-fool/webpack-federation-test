# 模块联邦

## Module, Bundle, Chunk

### Chunk, Bundle, Module

[什么是 webpack 中的 module?](https://webpack.js.org/concepts/modules/#what-is-a-webpack-module)

> webpack 中的模块就是通过引入的方式将各种类型的文件转换成有效(JS/JSON 文件)的依赖文件(即模块), 引入方式如下:

- import
- require
- define
- url(...) or <img src=...>

在 webpack 配置中, module 字段下的 rules 代表着[处理模块的规则](https://webpack.js.org/concepts/#loaders).

```js
// webpack.config.js
export default {
  module: {
    rules: [{ test: /\.txt$/, use: "raw-loader" }],
  },
};
```


`Module`以对象的形式存在,流转, 解析处理. `Chunk`是输出产物过程中的集合, `Bundle`是最终输出的物理产物.

```js
export default {
  entry: {
    main: "./src/main.js",
  },
  output: {
    filename: "[name].js",
  },
  devtool: "source-map",
};
```

webpack会产两个文件: `main.js`, `main.js.map`. 这两个文件都会属于同一个`Chunk`, 而这两个文件代表着两个`Bundle`

下面是一段webpack的[源码](https://github.com/webpack/webpack/blob/main/lib/Chunk.js):
```js
/**
 * A Chunk is a unit of encapsulation for Modules.
 * Chunks are "rendered" into bundles that get emitted when the build completes.
 */
class Chunk {
  /** ... */
}
```

注释也说明了Chunk是Module封装后的单元, 当Chunk最终呈现方式以Bundle