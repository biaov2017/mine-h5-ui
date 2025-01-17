import { ref } from 'vue'
import { useRoute } from 'vue-router'
import QRcode from 'qrcode'
import { useGlobalVars } from '@/config/variables'
import GithubIcon from '@/assets/icon-github.svg'
import QrcodeIcon from '@/assets/icon-qrcode.svg'

export const useListData = () => {
  const { GithubAddress, BaseRouter } = useGlobalVars()
  // 导航列表
  const navList = ref([
    {
      name: 'introduce',
      text: '指南'
    },
    {
      name: 'button',
      text: '组件'
    },
    {
      href: GithubAddress,
      url: GithubIcon,
      text: 'Github'
    },
    {
      url: QrcodeIcon,
      text: 'qrcode'
    }
  ])

  QRcode.toDataURL(globalThis.location.origin + BaseRouter).then(data => {
    navList.value[3].href = data
  })

  // 版本列表
  const versionList = [
    {
      href: '/',
      version: 'v1.x'
    },
    {
      href: '/v2',
      version: 'v2.x'
    }
  ]
  const { path } = useRoute()
  const isHome = Object.freeze(path === '/') // 是否是首页

  return { navList, versionList, isHome }
}
