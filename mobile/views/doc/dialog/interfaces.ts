/* eslint-disable no-unused-vars */
// 子选项
export interface ChildListItem {
  id: number
  value: string
  visible: boolean
}
// 列表项
export interface ListDataItem {
  id: number
  label: string
  list: ChildListItem[]
}
