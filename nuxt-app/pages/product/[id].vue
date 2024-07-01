<script setup lang="ts">
import {useFetch} from "#app";
import type { IProductVO } from "~/interfaces";
const route = useRoute();
const id = route.params.id;
const { data: product } = await useFetch(`https://dummyjson.com/products/${id}`);
definePageMeta({
  name: `Product description`
})
const card = useCard();
const { list } = useProducts();
const productId = parseInt(id as string, 10);
const selectedProduct = computed(() => {
  return list.value.filter(product => product.id === productId);
});

console.log('> selectedProduct: ', selectedProduct);

const getProductFromClickedButton = (btn: HTMLButtonElement): IProductVO => {
  const productIndex = parseInt(id as string) - 1;
  console.log('> getProductFromClickedButton -> productIndex :', productIndex);
  console.log('> getProductFromClickedButton -> list.value[productIndex] :', list.value[productIndex])
  return list.value[productIndex];
};

const onProductAddClick = (event: MouseEvent, btn = event.currentTarget as HTMLButtonElement) => {
  const productVO = getProductFromClickedButton(btn);
  console.log('>Products -> onProductAddClick: productVO= ', productVO);
  card.add(productVO);
};

const onProductRemoveClick =(event: MouseEvent, btn = event.currentTarget as HTMLButtonElement) => {
  const productVO = getProductFromClickedButton(btn);
  console.log('>Products -> onProductRemoveClick: productVO= ', productVO);
  card.remove(productVO);
};

</script>
<template>
  <div v-for="(product, index) in selectedProduct" class="card card-compact bg-base-100 w-auto shadow-xl">
    <div class="flex flex-row">
      <figure>
        <img
            :src="product.thumbnail"
            alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <div :data-index="index" class="card-actions justify-end">
          <button :disabled="!product.amount"
                  :data-id="product.id - 1"
                  class="btn btn-sm btn-outline btn-error"
                  @click="onProductRemoveClick"
          >
            -
          </button>
          <div>
            {{ product.amount || ''}}
          </div>
          <button class="btn btn-sm btn-primary"
                  :data-id="product.id - 1"
                  @click="onProductAddClick"
          >
            +
          </button>
        </div>
      </div>
    </div>
  </div>
</template>