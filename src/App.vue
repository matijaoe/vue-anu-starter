<template>
  <TheDrawer />
  <main
    container mx-auto p="x-4 y-12" min-h-screen
    text="center base-700 dark:base-200" font-sans
    space-y-6
  >
    <RouterView />
    <TheFooter />
  </main>
</template>

<style lang="postcss">
body {
  @apply bg-base-100 dark:bg-base-900 transition-colors duration-400 caret-primary;
}

::selection {
  @apply bg-primary/15 dark:bg-primary/20;
}
</style>
