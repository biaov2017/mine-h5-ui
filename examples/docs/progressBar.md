# ProgressBar 进度条

---

## 按需引入

::: CopyCode

```JavaScript
import { createApp } from 'vue'
import App from './App.vue'
import { MeProgressBar } from 'mine-h5-ui'
import 'mine-h5-ui/lib/theme-default/MeProgressBar.css'

const app = createApp(App)
app.use(MeProgressBar)
app.mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `v-model` 来设置进度条的进度。
- 通过属性 `type` 来设置进度条的类型，默认为 line。

::: CopyCode

```HTML
<template>
  <me-progress-bar v-model="progress" type="line"></me-progress-bar>
</template>
<script lang="ts" setup>
const progress = $ref(0) // 进度条值
</script>
```

:::

### 圆点使用

- 通过属性 `text-show` 来设置文本的显示状态，默认为 true。
- 文本和圆点相对。

::: CopyCode

```Vue
<template>
  <me-progress-bar v-model="progress" type="line" :size="10" :text-show="false"></me-progress-bar>
</template>
<script lang="ts" setup>
const progress = $ref(0) // 进度条值
</script>
```

:::

### 自定义使用

- 通过属性 `backgorund` 来设置进度条的默认背景色，默认为 #ccc。
- 通过属性 `activeColor` 来设置进度条的活动颜色，默认为 #409eff。

::: CopyCode

```Vue
<template>
  <me-progress-bar v-model="progress" type="line" background="linear-gradient(90deg, #8af2ba, #1e57f5)" active-color="#f66" padding="0 25px"></me-progress-bar>
</template>
<script lang="ts" setup>
const progress = $ref(0) // 进度条值
</script>

```

:::

## API

### 参数

| 参数                | 说明                                         | 类型    | 可选值        | 默认值  | 版本 |
| ------------------- | -------------------------------------------- | ------- | ------------- | ------- | ---- |
| modelValue(v-model) | 双向绑定进度值，0-100 的整数                 | number  | --            | --      | --   |
| type                | 进度条类型                                   | string  | line / circle | line    | --   |
| text                | 自定义文本，可通过 `$default` 设置默认进度条 | string  | --            | --      | --   |
| textShow            | 文本显示状态,，设置为 `false` 时显示圆点     | boolean | true / false  | true    | --   |
| width               | 进度条宽度                                   | string  | --            | 100px   | --   |
| borderRadius        | 线性进度条倒角                               | string  | --            | 8px     | --   |
| size                | 进度条粗细                                   | number  | --            | 4       | --   |
| textColor           | 文本颜色                                     | string  | --            | --      | --   |
| activeColor         | 进度条活动色                                 | string  | --            | #409eff | --   |
| backgorund          | 进度条背景色                                 | string  | --            | #ccc    | --   |
| padding             | 整体边距，只对 `line` 有效                   | string  | --            | 0 10px  | --   |

### 方法

| 方法名 | 说明 | 回调参数 | 版本 |
| ------ | ---- | -------- | ---- |
| --     | --   | --       | --   |
