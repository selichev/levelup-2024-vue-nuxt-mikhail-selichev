<script setup lang="ts">
definePageMeta({
  name:'Main Page'
})
</script>
<template>
  <div class="flex flex-row space-x-2">
    <NuxtLink to="/cart">Cart</NuxtLink>
    <NuxtLink to="/products">Products</NuxtLink>
  </div>
</template>