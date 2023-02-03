export const useDrawerStore = defineStore('drawer', () => {
  let isDrawerShown = $ref(false)

  const toggle = () => {
    isDrawerShown = !isDrawerShown
  }
  const close = () => {
    isDrawerShown = false
  }

  const keys = useMagicKeys()
  const cmdB = keys['cmd+B']

  whenever(cmdB, toggle)

  return {
    isDrawerShown: $$(isDrawerShown),
    toggle,
    close,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useDrawerStore, import.meta.hot))
