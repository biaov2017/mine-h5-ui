import { ref, onMounted, onUnmounted } from 'vue'
import { Props, ListItem } from './types'

// 显示操作
export const useShowAction = (props: Readonly<Props>) => {
  const isShow = ref(false) // 显示状态

  // 点击框
  const onClickFrame = () => {
    isShow.value = !isShow.value
  }

  // 增加点击
  const addClick = () => {
    isShow.value = false
  }

  // 点击 dropdown 的 item
  const onClickItem = ({ href, version }: ListItem) => {
    version !== props.list[1]?.version && (globalThis.location.href = href)
  }

  onMounted(() => {
    document.addEventListener('click', addClick)
  })

  onUnmounted(() => {
    document.removeEventListener('click', addClick)
  })

  return { isShow, onClickFrame, onClickItem }
}
