<script lang="ts" setup>
const drawerStore = useDrawerStore()
</script>

<template>
  <ADrawer
    v-model="drawerStore.isDrawerShown"
    title="Drawer title"
    subtitle="Chocolate cake tiramisu donut"
  >
    <template #default>
      <div class="a-card-body">
        <ABtn
          variant="light"
          class="text-sm"
          @click="drawerStore.close"
        >
          Close
        </ABtn>
      </div>
    </template>
  </ADrawer>
</template>
