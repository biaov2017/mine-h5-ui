/* eslint-disable no-unused-vars */

// 子列表项
export interface ChildrenListItem {
  id: number;
  value: string;
  isFocus: boolean;
  keyboardValue: boolean;
  skinType?: string;
  keyboardskinType?: string;
  num?: number;
  type?: string;
}
// 列表项
export interface ListDataItem {
  id: number;
  label: string;
  list: ChildrenListItem[];
}