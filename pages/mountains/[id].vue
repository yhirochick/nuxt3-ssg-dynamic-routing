<template>
  <div>
    <div v-if="mountain === undefined">no mountain</div>
    <div v-else>
      {{ mountain }}
    </div>
  </div>
</template>

<script setup lang="ts">
const { params } = useRoute();
const mountains = inject("mountains") as any;
console.log(mountains);

const mountain = mountains?.find((mountain: any) => {
  return mountain.topics_id == params.id;
});
</script>
