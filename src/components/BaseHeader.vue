<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 10vh;
  text-align: center;

  background-color: #50dbf031;
}

h1 {
  margin: 0;

  height: 60px;

  font-size: 64px;
}
</style>
