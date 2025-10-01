<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader.vue'
</script>

<template>
  <article class="validator">
    <BaseHeader class="validatro__header" title="Finder" />
    <div class="validator__content"></div>
  </article>
</template>

<style scoped>
.validator {
  width: 100%;
  border-right: solid 2.5px #000;
}

.validator__content {
  width: 100%;
  height: 90vh;
}
</style>
