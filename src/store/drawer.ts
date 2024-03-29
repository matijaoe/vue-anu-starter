export const useDrawerStore = defineStore('drawer', () => {
  const [isDrawerShown, toggle] = useToggle(false)

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
