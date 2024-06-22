<script setup lang="ts">
const route = useRoute();
const counter = ref(0);
definePageMeta({
  name: 'Index'
})
</script>
<template>
 <div>{{route.name}}</div>
  <div>{{counter}}
    <button @click="counter++">+</button>
  </div>
</template>
