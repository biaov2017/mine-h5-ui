<template>
  <!-- 索引栏 -->
  <div class="me-index-bar">
    <!-- 顶部固定项 -->
    <div class="top" v-show="curLetter" :style="`height:${topHeight};line-height:${topHeight};`">{{ curLetter }}</div>
    <!-- 右侧列表值 -->
    <ul class="list-rt">
      <li v-for="item in list" :key="item.name" :class="{ on: item.name === curLetter }">{{ item.name }}</li>
    </ul>
    <!-- 内容列表 -->
    <ul class="list-cont" ref="listCont">
      <li v-for="item in list" :key="item.name">
        <dl class="list-item">
          <dt>{{ item.name }}</dt>
          <dd v-for="city in item.cities" :key="city.code" @click="handleLi(city)">{{ city.code }}（{{ city.cn }}）</dd>
        </dl>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import CountryData from './countryData'
import { useScroll, useBtns } from './hooks'
import { ListItem, CityItem } from './types'

const emit = defineEmits<{
  (event: 'click', item: CityItem): void
}>()

withDefaults(
  defineProps<{
    list?: ListItem[] // 自定义国家数据
    topHeight?: string // 自定义顶部定位高度
  }>(),
  {
    list: () => CountryData,
    topHeight: '50px'
  }
)

const { curLetter, listCont } = useScroll()
const { handleLi } = useBtns(emit)
</script>
