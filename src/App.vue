<script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref, watchEffect } from "vue";
import Navigation from "./components/Navigation.vue";
import HeaderApp from "./components/Header.vue";
import Search from "./components/Search.vue";
import { changeTitle } from "./utils/changeTitle";

const route = useRoute();
const router = useRouter();

const title = ref(changeTitle(route.path));

onMounted(async () => {
  await router.isReady();
});

watchEffect(() => {
  title.value = changeTitle(route.path);
});
</script>

<template>
  <div class="d-flex">
    <Navigation />
    <div class="container">
      <div class="row header-row row-cols-lg-2">
        <div class="col content-left">
          <HeaderApp :title="title" />
        </div>
        <div class="col content-right">
          <Search />
        </div>
      </div>

      <router-view></router-view>
    </div>
  </div>
</template>
