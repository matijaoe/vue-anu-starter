<script lang="ts" setup>
import { isDark } from '../composables/dark'

const links = [
  { to: '/', label: 'home', icon: 'i-bx-home' },
]
const drawerStore = useDrawerStore()
</script>

<template>
  <footer py-4>
    <nav flex items-center justify-center gap-3 text-xl>
      <button
        i-bx-sidebar icon-btn
        @click="drawerStore.toggle()"
      />

      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        icon-btn
      >
        <i :class="link.icon" />
      </RouterLink>

      <ASwitch
        v-model="isDark"
        on-icon="i-bx-bxs-sun"
        off-icon="i-bx-bxs-moon"
        variant="outline"
        color="primary"
        text-sm
      />

      <a
        icon-btn
        i-bx-bxl-github
        rel="noreferrer"
        href="https://github.com/mat2ja/vue-anu-starter"
        target="_blank"
        title="GitHub"
      />
    </nav>
  </footer>
</template>
