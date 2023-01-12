<script lang="tsx" setup>
const name = $ref('')
const router = useRouter()

const go = () => {
  if (name) {
    router.push({
      name: 'hi',
      params: { name },
    })
  }
}

const items = ['Anu', 'UnoCSS', 'Pinia', 'VueUse', 'Vue Macros', 'Auto imports', 'File based routing']
</script>

<template>
  <div flex flex-col items-center gap-6 max-w-xs mx-auto>
    <div space-y-4>
      <i i-bx-bxl-vuejs text="primary 5xl" />
      <div>
        <p>Vue ⚹ Anu starter template</p>
      </div>
      <div mt-4 flex="~ wrap gap-2" justify-center>
        <AChip
          v-for="item in items"
          :key="item" font-mono
          rounded-1
        >
          {{ item }}
        </AChip>
      </div>
    </div>

    <div flex flex-col gap-4 items-center>
      <AInput
        v-model="name"
        class="text-sm"
        w="full sm:50"
        placeholder="What's your name?"
        autocomplete="false"
        text-center
        @keydown.enter="go"
      />
      <ABtn
        append-icon="i-bx-right-arrow-alt"
        color="primary"
        text-sm uppercase
        :disabled="!name"
        @click="go"
      >
        go
      </ABtn>
    </div>
  </div>
</template>
