<script setup lang="ts">

const products = useProducts();

const { pending } = products.retrieve(10);

</script>
<template>
  <Spinner v-if="pending"/>
  <NuxtLayout v-else>
    <NuxtPage />
  </NuxtLayout>
</template>
