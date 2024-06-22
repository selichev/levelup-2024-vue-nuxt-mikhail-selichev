<script setup lang="ts">
const router = useRouter();
const route = router.currentRoute;
const onBackLinkClick = () => {
  router.back();
}
</script>
<template>
  <a @click.prevent="onBackLinkClick" class="underline">Back</a>
</template>