<script setup lang="ts">
import type { IProductVO } from "~/interfaces";
import { navigateTo } from "#app";

const { list } = useProducts();
const card = useCard();
const route = useRoute();

const getProductFromClickedButton = (btn: HTMLButtonElement): IProductVO => {
  const parent = btn.parentElement;
  const productIndex = parseInt(parent!.dataset.index as string);
  return list.value[productIndex];
};

const onProductAddClick = (event: MouseEvent, btn = event.currentTarget as HTMLButtonElement) => {
  const productVO = getProductFromClickedButton(btn);
  console.log('>Products -> onProductAddClick: productIndex= ', productVO);
  card.add(productVO);
};

const onProductRemoveClick =(event: MouseEvent, btn = event.currentTarget as HTMLButtonElement) => {
  const productVO = getProductFromClickedButton(btn);
  console.log('>Products -> onProductRemoveClick: productIndex= ', productVO);
  card.remove(productVO);
};
</script>
<template>
  <div class="grid  grid-cols-3 gap-2
  place-items-start
  place-content-start">
    <div v-for="(product, index) in list" :key="product.id" class="h-full w-full">
      <div class="card bg-base-100 image-full shadow-xl h-full w-full">
        <figure>
          <img
              :src="product.thumbnail"
              alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ product.title }}</h2>
          <p>{{ product.description }}</p>
          <div class="flex flex-row justify-between items-center">
            <button class="btn btn-neutral" @click="navigateTo(`/product/${product.id}`)">Details</button>
            <div class="card-actions">
              <div>
                {{ product.amount || ''}}
              </div>
              <div :data-index="index" class="flex flex-row space-x-2">
                <button class="btn btn-sm btn-primary" @click="onProductAddClick">+</button>
                <button :disabled="!product.amount"
                        class="btn btn-sm btn-outline btn-error"
                        @click="onProductRemoveClick"
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>