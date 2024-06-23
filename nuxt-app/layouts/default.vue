<script setup lang="ts">
const router = useRouter();
const route = router.currentRoute;
const products = useProducts();
</script>
<template>
    <div class="container mx-auto flex flex-col">
      <div class="flex flex-row justify-between">
        <div class="route-name">
          {{route.name}}
        </div>
        <div>
          Total number of products: {{ products.total }}
        </div>
      </div>
      <slot/>
  </div>
</template>
<style>
.route-name {
  font-family: Lobster, sans-serif;
}
</style>