<script setup lang="ts">
import DataKeys from "~/constants/DataKeys";
const data = useNuxtData(DataKeys.PRODUCTS);
</script>
<template>
  <div>{{data}}</div>
</template>