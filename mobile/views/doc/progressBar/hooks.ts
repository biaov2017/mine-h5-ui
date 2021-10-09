import { ref } from "vue";
import { ListDataItem } from "./interfaces";

// 点击项
export const useHandlerClick = () => {
  const listData = ref<ListDataItem[]>([
    {
      label: "基础用法",
      value: 0,
      type: "line",
      width: "100%",
      start: undefined
    },
    {
      label: "圆点使用",
      value: 0,
      type: "line",
      size: 10,
      width: "100%",
      textShow: false,
      start: undefined
    },
    {
      label: "自定义使用",
      value: 0,
      type: "line",
      width: "100%",
      start: undefined,
      text: "进度：$default",
      padding: "0 25px",
      backgorund: "linear-gradient(90deg, #8af2ba, #1e57f5)",
      activeColor: "#f66"
    },
    {
      label: "圆环使用",
      value: 0,
      type: "circle",
      width: "100px",
      start: undefined
    },
    {
      label: "修改大小",
      value: 0,
      type: "circle",
      width: "100px",
      size: 10,
      start: undefined
    }
  ]);
  // 点击开始按钮
  const onStart = (item: ListDataItem) => {
    // 是否已到终点
    if (item.value === 100) {
      item.value = 0;
      item.start = undefined;
    }
    // 开始动画API
    const startAnimate = (timestamp: number) => {
      item.start === undefined && (item.start = timestamp); // 设置开始
      const elapsed = timestamp - item.start; // 当前距离开始时间
      item.value = Math.round(Math.min(elapsed * 0.05, 100)); // 当前进度
      elapsed < 2000 && window.requestAnimationFrame(startAnimate); // 2s之内完结
    };
    window.requestAnimationFrame(startAnimate); // 开启帧动画
  };
  return { listData, onStart };
};
