<script setup lang="ts">
definePageMeta({
  name:'Main Page'
})
import Routes from "~/constants/Routes"
</script>
<template>
  <div class="flex flex-row space-x-2">
    <NuxtLink :to="Routes.CARD">Card</NuxtLink>
    <NuxtLink :to="Routes.PRODUCTS">Products</NuxtLink>
  </div>
</template>