# Toast 消息提示

---

## 按需引入

::: CopyCode

```JavaScript
import { createApp } from 'vue'
import App from './App.vue'
import { MeToast } from 'mine-h5-ui'
import 'mine-h5-ui/lib/theme-default/MeToast.css'

const app = createApp(App)
app.use(MeToast)
app.mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 API 直接调用即可。

::: CopyCode

```JavaScript
import { MeToast } from 'mine-h5-ui'

MeToast('显示信息')
```

:::

## API

### 参数

| 参数    | 说明               | 类型            | 可选值 | 默认值 | 版本 |
| ------- | ------------------ | --------------- | ------ | ------ | ---- |
| message | 需要提示的信息内容 | string / Option | --     | --     | --   |

### Option

| 参数     | 说明               | 类型    | 可选值       | 默认值 | 版本 |
| -------- | ------------------ | ------- | ------------ | ------ | ---- |
| message  | 需要提示的信息内容 | string  | --           | --     | --   |
| isShow   | 是否显示消息组件   | boolean | true / false | false  | --   |
| bgColor  | 消息组件背景颜色   | string  | --           | --     | --   |
| icon     | 图标               | string  | --           | --     | --   |
| durction | 延迟时间，单位 ms  | number  | --           | 1000   | --   |
