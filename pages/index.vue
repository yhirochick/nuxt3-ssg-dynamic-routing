<template>
  <ul>
    <li v-for="mountain in mountains">
      <NuxtLink :to="`/mountains/${mountain.topics_id}`">
        {{ mountain.topics_id }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
const mountains = inject("mountains") as any;
</script>
