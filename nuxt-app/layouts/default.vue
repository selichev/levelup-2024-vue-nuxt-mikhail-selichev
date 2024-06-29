<script setup lang="ts">
const app = useAppConfig();
const router = useRouter();
const route = router.currentRoute;
const products = useProducts();
const card = useCard();
</script>
<template>
    <div class="container mx-auto flex flex-col">
      <div class="flex flex-row justify-between">
        <span class="text-xl font-bold">{{ app.name }}</span>
        <span class="text-base">Card Items: {{ card.amount }}</span>
      </div>
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