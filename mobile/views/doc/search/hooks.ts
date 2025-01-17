import { getCurrentInstance, ref } from 'vue'
import initData from './data'
import { ListDataItem } from './types'

// 操作
export const useHandle = () => {
  const { $MeToast } = getCurrentInstance()!.appContext.config.globalProperties
  const listData = ref<ListDataItem[]>(initData) // 列表数据

  // 点击键盘搜索或者回车按钮
  const onSearch = () => {
    $MeToast('搜索中...')
  }

  // 点击右侧按钮
  const onClick = () => {
    $MeToast('点击了取消按钮')
  }

  return { listData, onSearch, onClick }
}
