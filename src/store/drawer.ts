export const useDrawerStore = defineStore('drawer', () => {
  const isDrawerShown = ref(false)

  const toggle = () => {
    isDrawerShown.value = !isDrawerShown
  }
  const close = () => {
    isDrawerShown.value = false
  }

  const keys = useMagicKeys()
  const cmdB = keys['cmd+B']

  whenever(cmdB, toggle)

  return {
    isDrawerShown,
    toggle,
    close,
  }
})
