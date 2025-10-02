<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader.vue'
import BaseImplement from '@/components/BaseImplement.vue'
import { PH_VALIDATOR, HINT_VALIDATOR } from '@/methodConfigs/validatorConfig'

const validateBrackets = (brackets: string): boolean => {
  while (brackets.includes('{}') || brackets.includes('[]') || brackets.includes('()')) {
    brackets = brackets.replace('{}', '')
    brackets = brackets.replace('[]', '')
    brackets = brackets.replace('()', '')
  }

  return brackets === ''
}
</script>

<template>
  <article class="validator">
    <BaseHeader class="validatro__header" title="Validator" />
    <BaseImplement
      class="validator__content"
      :hint="HINT_VALIDATOR"
      :placeholder="PH_VALIDATOR"
      :method="validateBrackets"
    />
  </article>
</template>

<style scoped>
.validator {
  width: 100%;
  border-right: solid 2.5px #000;
}
</style>
