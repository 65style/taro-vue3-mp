import { defineStore } from 'pinia'

const useApp = defineStore({
  id: 'appInfo',
  state: () => ({
    tabbarIndex: 0
  }),
  actions: {
    setTabbarIndex(index: Number) {
      this.tabbarIndex = index
    }
  }
})

export { useApp }
