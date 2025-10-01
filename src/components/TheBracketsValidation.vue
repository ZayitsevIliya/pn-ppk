<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader.vue'
</script>

<template>
  <article class="finder">
    <BaseHeader class="finder__header" title="Validator" />
    <div class="finder__content"></div>
  </article>
</template>

<style scoped>
.finder {
  width: 100%;
  border-left: solid 2.5px #000000;
}

.finder__content {
  width: 100%;
  height: 90vh;
}
</style>
