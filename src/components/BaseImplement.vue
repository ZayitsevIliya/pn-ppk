<script setup lang="ts">
import { ref } from 'vue'
import type { Props, MethodResult } from '@/interfaces/IMethod'

const props = defineProps<Props>()

const input = ref<string>()

const result = ref<MethodResult>(null)

const handleClick = (): void => {
  if (input.value) {
    result.value = props.method(input.value)
  } else {
    result.value = null
  }
}
</script>

<template>
  <div class="implement">
    <header class="implement__hint">
      <p>{{ hint }}</p>
    </header>
    <main class="implement__input">
      <input v-model="input" :placeholder="placeholder" />
      <button @click="handleClick">Run</button>
    </main>
    <article class="implement__result">
      <p>{{ `Result: ${result}` }}</p>
    </article>
  </div>
</template>

<style scoped>
.implement {
  height: 90vh;

  padding: 5%;

  font-size: 24px;
}

.implement__hint {
  min-height: 25%;
}

.implement__input {
  display: flex;
}

input {
  width: 240px;
  height: 30px;

  font-size: 20px;
}

button {
  width: 70px;
  height: 36px;
}
</style>
