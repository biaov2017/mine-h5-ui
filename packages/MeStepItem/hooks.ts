import { ref, inject, watch } from 'vue'
import { MeStepKey } from '../MeStep/token'
import { Props, StepContext } from './types'

// 操作
export const useHandler = (props: Readonly<Props>) => {
  const { parentProps } = inject(MeStepKey, {} as StepContext) // 父组件参数
  const isActive = ref(false) // 激活状态

  // 监听父组件传参
  watch(
    parentProps,
    () => {
      isActive.value = parentProps.value.active.includes(props.name)
    },
    { immediate: true, deep: true }
  )

  return { isActive, parentProps }
}
