<script setup lang="ts">
const router = useRouter();
const route = router.currentRoute;
const onBackLinkClick = () => {
  router.back();
}
</script>
<template>
  <div>{{route.name}}</div>
  <a @click.prevent="onBackLinkClick" class="underline">Back</a>
</template>