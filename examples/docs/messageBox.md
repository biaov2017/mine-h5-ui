# MessageBox 弹出框

---

## 按需引入

::: CopyCode

```JavaScript
import { createApp } from 'vue'
import App from './App.vue'
import { MeMessageBox } from 'mine-h5-ui'
import 'mine-h5-ui/lib/theme-default/MeMessageBox.css'

const app = createApp(App)
app.use(MeMessageBox)
app.mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 API 直接调用即可。
- 通过 `type` 参数来设置弹出框的类型，可选值有 `MeMessageBox.alert`，`MeMessageBox.confirm`，`MeMessageBox.prompt`，`MeMessageBox.custom`，默认值为 alert。

::: CopyCode

```JavaScript
import { MeMessageBox } from 'mine-h5-ui'

MeMessageBox.alert('至于未来会怎样，要走下去才知道，反正路还很长，天总会亮！')
```

:::

### 确认弹出框

- 直接调用确认弹出框的 API 即可。

::: CopyCode

```JavaScript
import { MeMessageBox, MeToast } from 'mine-h5-ui'

MeMessageBox.prompt({
  message: '你认为作者帅吗？',
  cancelButtonText: '看不清',
  confirmButtonText: '作者真帅',
  onOk() {
    MeToast('你点击了确认按钮')
  },
  onOff() {
    MeToast('你点击了取消按钮')
  }
})
```

:::

### 输入弹出框

- 直接调用输入弹出框的 API 即可。

::: CopyCode

```JavaScript
import { MeMessageBox, MeToast } from 'mine-h5-ui'

MeMessageBox.prompt({
  message: '请输入你的手机号码',
  onOk(value) {
    MeToast(value) // 手机号码
  },
  onOff() {
    MeToast('你点击了取消按钮')
  }
})
```

:::

### 自定义弹出框

- 直接调用自定义弹出框的 API 即可。

::: CopyCode

```Vue
<template>
  <div @click="handleClick">点击弹出自义定弹出框</div>
</template>
<script lang="ts" setup>
import { MeMessageBox, MeToast } from 'mine-h5-ui'

// 点击文本
const handleClick = () => {
  // 弹出模态框
  MeMessageBox.custom({
    html: `<div class="message-cont">健康的身体是实现目标的基石</div>`,
    onOk() {
      MeToast('你点击了确认按钮')
    },
    onOff() {
      MeToast('你点击了取消按钮')
    }
  })
}
</script>

<style lang="less">
// 自定义模态框内容
.message-cont {
  padding: 0 15px 20px 15px;
  -webkit-line-clamp: 2;
  background: linear-gradient(90deg, #00aeff, #3369e7);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  color: #494949;
  font-size: 14px;
}
</style>
```

:::

## API

### 方法

| 方法名               | 说明             | 参数            | 返回值 | 版本               |
| -------------------- | ---------------- | --------------- | ------ | ------------------ |
| MeMessageBox         | 展示弹出框       | Option          | --     | --                 |
| MeMessageBox.alert   | 展示警告弹出框   | string / Option | --     | string 类型 v2.4.1 |
| MeMessageBox.confirm | 展示确认弹出框   | string / Option | --     | string 类型 v2.4.1 |
| MeMessageBox.prompt  | 展示输入弹出框   | string / Option | --     | string 类型 v2.4.1 |
| MeMessageBox.custom  | 展示自定义弹出框 | Option          | --     | --                 |

#### Option

| 参数              | 说明                                                              | 类型                     | 可选值                            | 默认值 | 版本 |
| ----------------- | ----------------------------------------------------------------- | ------------------------ | --------------------------------- | ------ | ---- |
| type              | 弹出框类型                                                        | string                   | alert / confirm / prompt / custom | alert  | --   |
| tips              | 提示文本                                                          | string                   | --                                | 提示   | --   |
| message           | 弹出框内容，此参数在 `custom` 弹出框中不起作用                    | string                   | --                                | --     | --   |
| html              | 自定义 HTML，此参数只有在 `custom` 弹出框中才起作用               | string                   | --                                | --     | --   |
| cancelButtonText  | 取消按钮内容                                                      | string                   | --                                | 取消   | --   |
| confirmButtonText | 确认按钮内容                                                      | string                   | --                                | 确认   | --   |
| onOk              | 点击确认按钮回调函数，在 `prompt` 弹出框中接收输入框的 `value` 值 | (value?: string) => void | --                                | --     | --   |
| onOff             | 点击取消按钮回调函数                                              | () => void               | --                                | --     | --   |
