<script setup lang="ts">
import {useFetch} from "#app";
const route = useRoute();
const id = route.params.id;
const { data: product } = await useFetch(`https://dummyjson.com/products/${id}`);
definePageMeta({
  name: `Product description`
})
</script>
<template>
  <div class="card card-compact bg-base-100 w-auto shadow-xl">
    <div class="flex flex-row">
      <figure>
        <img
            :src="product.thumbnail"
            alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
</template>