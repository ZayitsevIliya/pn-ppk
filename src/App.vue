<script setup lang="ts">
import FinderMissingNumber from '@/components/TheFinderMissingNumber.vue'
import BracketsBalidation from '@/components/TheBracketsValidation.vue'
</script>

<template>
  <article class="content">
    <FinderMissingNumber />
    <BracketsBalidation />
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
