<script setup lang="ts">
import Header from "~/components/Header.vue";
import NavigateBack from "~/components/buttons/NavigateBack.vue";
import Routes from "~/constants/Routes";
import NavigateHome from "~/components/buttons/NavigateHome.vue";
import NavigateCard from "~/components/buttons/NavigateCard.vue";

const app = useAppConfig();
const router = useRouter();
const route = router.currentRoute;
const products = useProducts();
const card = useCard();
const canRenderButtonNavigateBack = computed(() => route.value.path !== '/');

</script>
<template>
    <div class="container mx-auto flex flex-col">
      <Header :title="app.name">
        <template #right>
          <div class="flex flex-row space-x-2">
            <ButtonsNavigateHome />
            <ButtonsNavigateCard />
          </div>
          <span class="text-base">
            <NuxtLink :to="Routes.CARD">Card</NuxtLink> Items: {{ card.amount }}
          </span>
        </template>
      </Header>
      <div class="flex flex-row justify-between">
        <div class="flex flex-row justify-start items-center space-x-2">
          <ButtonsNavigateBack v-if="canRenderButtonNavigateBack" />
          <span class="route-name">
            {{route.name}}
          </span>
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