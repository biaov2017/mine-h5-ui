/* eslint-disable no-unused-vars */
// 子列表项
export interface ChildrenListItem {
  id?: number;
  src?: string;
  width?: string;
  height?: string;
  fill?: string;
  radius?: string;
}
// 列表项
export interface ListItem {
  id?: number;
  label?: string;
  list: ChildrenListItem[];
}