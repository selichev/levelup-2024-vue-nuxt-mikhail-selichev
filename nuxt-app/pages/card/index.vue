<script setup lang="ts">
import BackButton from "~/components/buttons/NavigateBack.vue";

const router = useRouter();
const route = router.currentRoute;
const onBackLinkClick = () => {
  router.back();
}
</script>
<template>
  <div>{{ route.name }}</div>
</template>