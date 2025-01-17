# IndexBar 索引栏

---

## 按需引入

::: CopyCode

```JavaScript
import { createApp } from 'vue'
import App from './App.vue'
import { MeIndexBar } from 'mine-h5-ui'
import 'mine-h5-ui/lib/theme-default/MeIndexBar.css'

const app = createApp(App)
app.use(MeIndexBar)
app.mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `list` 属性来设置索引栏数据，默认为国家数据。
- 注意：如果要使用自定义数据，则必需按照固定的数据格式。

::: CopyCode

```Vue
<template>
  <me-index-bar @click="onClick"></me-index-bar>
</template>
<script lang="ts" setup>
// 点击内容列表
const onClick = item => {
  console.log(item)
}
</script>
```

:::

#### 数据格式

- 此数据为必需的，你可以在此基础上加其它的属性。

::: CopyCode

```JavaScript
[
  {
    name: 'A',
    cities: [{ code: 'AR', cn: '阿根廷' }]
  }
]
```

:::

## API

### 参数

| 参数       | 说明         | 类型   | 可选值 | 默认值     | 版本 |
| ---------- | ------------ | ------ | ------ | ---------- | ---- |
| list       | 列表数据     | Array  | --     | "国家数据" | --   |
| top-height | 顶部定位高度 | string | --     | 50px       | --   |

### 方法

| 方法名 | 说明                     | 回调参数     | 版本  |
| ------ | ------------------------ | ------------ | ----- |
| click  | 点击具体国家项触发的事件 | item: Object | 2.3.5 |
