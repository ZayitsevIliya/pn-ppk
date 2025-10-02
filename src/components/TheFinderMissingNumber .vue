<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader.vue'
import BaseImplement from '@/components/BaseImplement.vue'
import { PH_FINDER, HINT_FINDER } from '@/methodConfigs/finderConfig'

function parseInput(value: string): number[] {
  const parsedValue = value
    .replace('[', '')
    .replace(']', '')
    .split(',')
    .map((el) => +el)

  return parsedValue
}

const findMissingNumber = (numArr: string): number | null => {
  const parsedValue = parseInput(numArr)

  const maxNumber = Math.max(...parsedValue)
  const minNumber = Math.min(...parsedValue)

  const numbersLength = parsedValue.length
  const numbersSet = new Set(parsedValue)

  if (numbersLength < maxNumber) {
    for (let i = minNumber; i <= maxNumber; i++) {
      if (!numbersSet.has(i)) {
        return i
      }
    }
  }

  return null
}
</script>

<template>
  <article class="finder">
    <BaseHeader class="finder__header" title="Finder" />
    <BaseImplement
      class="finder__content"
      :hint="HINT_FINDER"
      :placeholder="PH_FINDER"
      :method="findMissingNumber"
    />
  </article>
</template>

<style scoped>
.finder {
  width: 100%;
  border-left: solid 2.5px #000000;
}
</style>
