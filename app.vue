<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const { data: mountains } = await useAsyncData<any>(
  "mountains",
  async () => { 
    const resp = await $fetch('https://temp03-colrevo.g.kuroco.app/rcms-api/1/news/list?cnt=100');
    return resp.list;
  }
);

provide("mountains", mountains.value);
</script>
