# Getting Started

```js
npm run initialize
npm run start
```

## 简单介绍整体 Apps:

- layout-app: 可以理解为微前端的基座应用
- main-app: 基于基座应用的微应用

layout-app 向 main-app 暴露出**布局模块**, 以及**同步加载的 Footer 组件**
main-app 向 layout-app 暴露出**异步加载的页面模块-Home**
