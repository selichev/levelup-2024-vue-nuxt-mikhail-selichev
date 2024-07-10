<script setup lang="ts">
import type {Products} from "~/interfaces";
const products = useProducts();
const uid = useCookie<number>('uid');
const card = useCard();

uid.value = 123;
const isLoading = ref(true);
const { data, pending } = products.retrieve(10, true);
watch(data, (value) => {
  console.log('> App -> watch: data = ', value);
  products.setup(value);
  card.restore(products.list.value);
});

console.log('> app -> setup: refresh')
</script>
<template>
  <Spinner v-if="pending"/>
  <NuxtLayout v-else>
    <NuxtPage />
  </NuxtLayout>
</template>
