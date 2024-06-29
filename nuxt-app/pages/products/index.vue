<script setup lang="ts">
import type { IProductVO } from "~/interfaces";

const { list } = useProducts();
const onProductAddClick = (event: MouseEvent) => {
  const target = event.currentTarget as HTMLButtonElement;
  const parent = target.parentElement;
  const productIndex = parseInt(parent!.dataset.index as string);
  const productVO: IProductVO = list.value[productIndex];
  console.log('>Products -> onProductAddClick: productIndex= ', productVO);
}
const onProductRemoveClick =() => {
  console.log('> Products -> onProductRemoveClick');
}
</script>
<template>
  <div class="grid  grid-cols-3 gap-2
  place-items-start
  place-content-start">
    <div v-for="(product, index) in list" :key="product.id" class="h-full w-full">
      <div class="card w-72 bg-base-100 image-full shadow-xl h-full w-full">
        <figure>
          <img
              :src="product.thumbnail"
              alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ product.title }}</h2>
          <p>{{ product.description }}</p>
          <div class="card-actions justify-end" :data-index="index">
            <button class="btn btn-sm btn-primary" @click="onProductAddClick">Add</button>
            <button class="btn btn-sm btn-outline btn-error" @click="onProductRemoveClick">Remove</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>