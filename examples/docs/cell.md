# Cell 单元格

---

## 按需引入

::: CopyCode

```JavaScript
import { createApp } from 'vue'
import App from './App.vue'
import { MeCell } from 'mine-h5-ui'
import 'mine-h5-ui/lib/theme-default/MeCell.css'

const app = createApp(App)
app.use(MeCell)
app.mount('#app')
```

:::

## 提示

- 如果你觉得重新编写 HTML 结构麻烦，可以直接复制下面的代码。

## 代码演示

### 基础用法

- 通过 `title` 属性来设置左侧内容。
- 通过 `value` 属性来设置右侧内容。

::: CopyCode

```HTML
<me-cell title="标题" value="内容"></me-cell>
```

### 显示占位符

- 通过 `placeholder` 属性来设置占位符。

::: CopyCode

```HTML
<me-cell title="昵称" placeholder="请输入昵称"></me-cell>
```

### 显示图标

- 通过 `icon` 属性来设置图标。
- 通过 `icon-color` 属性来设置图标颜色，默认为 #494949。

::: CopyCode

```HTML
<me-cell title="相机" icon="icon-xiangji" icon-color="#409eff"></me-cell>
```

### 显示箭头

- 通过 `arrow` 属性来设置箭头的显示，默认为 false。

::: CopyCode

```HTML
<me-cell title="生日" arrow></me-cell>
```

### 显示下边框

- 通过 `bottom` 属性来设置下边框的显示，默认为 false。

::: CopyCode

```HTML
<me-cell title="服务" arrow bottom></me-cell>
```

### 使用插槽

- 通过插槽来自定义内容。

::: CopyCode

```HTML
<me-cell>
  <template #left>左侧内容</template>
  <template #right>右侧内容</template>
</me-cell>
```

:::

## API

### 参数

| 参数        | 说明               | 类型            | 可选值       | 默认值 | 版本  |
| ----------- | ------------------ | --------------- | ------------ | ------ | ----- |
| title       | 标题               | string          | --           | --     | 2.3.5 |
| value       | 内容               | string / number | --           | --     | 2.3.5 |
| icon        | 图标名称           | string          | --           | --     | 2.3.5 |
| icon-color  | 图标颜色           | string          | --           | --     | 2.3.5 |
| placeholder | 占位符             | string          | --           | --     | 2.3.5 |
| arrow       | 箭头的显示状态     | boolean         | true / false | false  | 2.3.5 |
| height      | 高度               | string          | --           | --     | 2.3.5 |
| bottom      | 底部边框的显示状态 | boolean         | true / false | false  | 2.3.5 |

#### Slots

| 具名插槽 | 说明     | scopedSlots | 版本  |
| -------- | -------- | ----------- | ----- |
| left     | 左侧内容 | --          | 2.3.5 |
| right    | 右侧内容 | --          | 2.3.5 |

### 方法

| 方法名 | 说明               | 回调参数      | 版本  |
| ------ | ------------------ | ------------- | ----- |
| click  | 点击组件的时候触发 | e: MouseEvent | 2.3.5 |
