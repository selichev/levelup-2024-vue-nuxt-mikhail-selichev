<script setup lang="ts">
import type { IProductVO } from "~/interfaces";
import { navigateTo } from "#app";

const { list } = useProducts();
const card = useCard();
const route = useRoute();

const getProductFromClickedButton = (btn: HTMLButtonElement): IProductVO => {
  const parent = btn.parentElement;
  const productIndex = parseInt(btn.dataset.id || '');
  console.log('> getProductFromClickedButton -> dataset.id :', productIndex);
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

const filteredList = computed(() => list.value.filter(product => product.amount > 0));

const totalOrderPrice = computed(() => {
  return filteredList.value.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0).toFixed(2);
});

</script>
<template>
  <div class="flex flex-col
  place-items-start
  place-content-start">
    <div v-for="(product, index) in filteredList" :key="product.id" class="h-full w-full">
      <div class="card card-compact bg-base-100 w-auto shadow-md mb-2">
        <div class="flex flex-row">
          <div class="avatar">
            <div class="w-24 rounded-full">
              <img :src="product.thumbnail"
              :alt="product.title"
              class="w-full h-full"/>
            </div>
          </div>
          <div class="card-body">
            <div class="flex flex-row justify-between">
              <h2 class="card-title">{{ product.title }}</h2>
              <button class="btn-sm rounded-b-btn bg-gray-600 hover:bg-gray-800" style="color: #ffffff" @click="navigateTo(`/product/${product.id}`)">Details</button>
            </div>
            <p>{{ product.description }}</p>
            <div class="flex flex-row justify-between items-center">
              <div class="flex flex-row items-center">
                <span>Product price:</span>
                <div class="badge badge-lg">{{ product.price }}</div>
              </div>
              <div class="card-actions">
                <div :data-index="index" class="flex flex-row space-x-2 items-center">
                  <div class="border p-1">
                    <span>Final price:</span>
                    <div class="badge badge-lg font-bold">{{ parseFloat(product.price * product.amount).toFixed(2) }}</div>
                  </div>
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
                  <button class="btn btn-sm btn-primary" :data-id="product.id - 1" @click="onProductAddClick">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-raw justify-end items-center space-x-2 border w-full h-full p-2">
      <span class="text-lg">Order price:</span>
      <span class="text-lg font-bold">{{ totalOrderPrice }}</span>
      <button class="btn btn-primary">Purchase order</button>
    </div>
  </div>
</template>