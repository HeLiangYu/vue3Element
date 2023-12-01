import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Icon.vue'

// views文件夹下，文件自动引入
export const autoImport = () => {
  const dir = import.meta.glob('../views/*')
  const arr = []
  for (const key in dir) {
    const name = key.replace(new RegExp(/^(..\/views\/)|(.vue)$/g), '')
    const importUrl = dir[key]

    arr.push({
      path: `/${name.toLocaleLowerCase()}`,
      name,
      component: importUrl
    })
  }
  return arr
}
autoImport()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'icon',
      component: HomeView
    },
    ...autoImport()
  ],
  linkActiveClass: 'active'
})

export default router
