<template>
  <!-- 拼图校验 -->
  <div class="me-jigsaw-validate" :style="`width:${width};`">
    <div class="jigsaw-img" :style="`height:${height};--x:${missingPoint.x}px;--y:${crossPoint.y}px;--point-width:${crossPoint.width}px;--url:url(${url});`" ref="jigsawImgRef">
      <div
        class="jigsaw-img-point"
        :class="{ animation: openAnimation }"
        :style="`left:${dragPoint.x + moveX}px;background-position:-${missingPoint.x}px -${crossPoint.y}px;background-size:${imgRect.width}px ${imgRect.height}px;`"
      ></div>
    </div>
    <div class="jigsaw-slide" :style="`height:${slideStyle.height};background:${slideStyle.background};`">
      <div
        class="slide-dot"
        :class="{ animation: openAnimation }"
        :style="`left:${moveX}px;background:${slideStyle.dotBackground};`"
        @transitionend="onAnimationend"
        @touchstart="onTouchstart"
        @touchmove="onTouchmove"
        @touchend="onTouchend"
        @mousedown="onMousedown"
      ></div>
      <div class="slide-tips" :style="`color:${slideStyle.tips};`">{{ tips }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useImgRect, useSlider } from './hooks'
import { SlideStyle } from './types'

const emit = defineEmits<{
  (event: 'change', resultBool: boolean): void
}>()

const props = withDefaults(
  defineProps<{
    url: string // 图片地址
    width?: string // 图片宽度
    height?: string // 图片高度
    random?: boolean // 随机位置
    slideStyle?: SlideStyle // 滑块样式
    tips?: string // 提示语
    range?: number // 容错值
  }>(),
  {
    width: '100%',
    height: '300px',
    random: true,
    slideStyle: () => ({
      height: '40px', // 滑块高度
      background: '#f6f6f6', // 滑块背景色
      dotBackground: '#409eff', // 拖拽点背景色
      tips: '#494949' // 提示文本颜色
    }),
    tips: '按住左边按钮向右拖动完成上方图像验证',
    range: 5
  }
)
const { jigsawImgRef, dragPoint, missingPoint, crossPoint, imgRect } = useImgRect(props)
const { moveX, openAnimation, onTouchstart, onTouchmove, onTouchend, onMousedown, onAnimationend } = useSlider(props, emit, { dragPoint, missingPoint })
</script>
