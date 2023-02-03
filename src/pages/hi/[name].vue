<script lang="ts" setup>
definePage({
  name: 'hi',
})

const router = useRouter()

const route = useRoute('hi')
const name = computed(() => route.params.name)
</script>

<template>
  <div>
    <div>
      <i i-bx-bxs-face text="primary 4xl" />
      <div mt-4>
        <p text-lg>
          Hi <span text-primary>{{ name }}!</span>
        </p>
        <p opacity-75 text-xs font-mono mt-2>
          [dynamic route example]
        </p>
      </div>
    </div>

    <ABtn
      mt-6 text-sm
      variant="light"
      :disabled="!name"
      @click="router.push('/')"
    >
      Back
    </ABtn>
  </div>
</template>
