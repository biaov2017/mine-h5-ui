# Screenshot 截长图

---

## 按需引入

::: CopyCode

```JavaScript
import { createApp } from 'vue'
import App from './App.vue'
import { MeScreenshot } from 'mine-h5-ui'
import 'mine-h5-ui/lib/theme-default/MeScreenshot.css'

const app = createApp(App)
app.use(MeScreenshot)
app.mount('#app')
```

:::

## 复制

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过属性 `start` 来设置组件开始截图状态。

::: CopyCode

```Vue
<template>
  <me-screenshot v-bind="{ start }">
    <p @click="onClick">点击截图</p>
  </me-screenshot>
</template>
<script lang="ts" setup>
let start = $ref(false) // 截图状态
// 点击截图
const onClick = () => {
  start = true
}
</script>
```

:::

### 允许下载

- 通过属性 `allow-down` 来设置组件允许下载状态。

::: CopyCode

```Vue
<template>
  <me-screenshot v-bind="{ start }" allow-down>
    <p @click="onClick">点击截图</p>
  </me-screenshot>
</template>
<script lang="ts" setup>
let start = $ref(false) // 截图状态
// 点击截图
const onClick = () => {
  start = true
}
</script>
```

:::

## API

### 参数

| 参数       | 说明         | 类型    | 可选值       | 默认值     | 版本 |
| ---------- | ------------ | ------- | ------------ | ---------- | ---- |
| start      | 开始截图状态 | boolean | true / false | false      | --   |
| allow-down | 允许下载状态 | boolean | true / false | false      | --   |
| image-name | 下载图片名称 | string  | --           | screenshot | --   |

### 方法

| 方法名 | 说明             | 回调参数                                | 版本  |
| ------ | ---------------- | --------------------------------------- | ----- |
| click  | 当点击组件时触发 | e: PointerEvent                         | 2.3.5 |
| end    | 当截图结束时触发 | data: string, canvas: HTMLCanvasElement | 2.3.5 |
