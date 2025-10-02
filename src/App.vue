<script setup lang="ts">
import BracketsValidation from '@/components/TheBracketsValidation.vue'
import FinderMissingNumber from '@/components/TheFinderMissingNumber .vue'
</script>

<template>
  <article class="content">
    <BracketsValidation />
    <FinderMissingNumber />
  </article>
</template>

<style>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  height: 100vh;
  overflow: hidden;

  background-color: #c9f2f8ec;
}

.content {
  display: flex;
}
</style>
