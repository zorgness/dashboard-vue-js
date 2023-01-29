<script setup>
import { ref, watchEffect } from "vue";
import Navigation from "./components/Navigation.vue";
import HeaderApp from "./components/Header.vue";
import Search from "./components/Search.vue";
import { changeTitle } from "./utils/changeTitle";

const title = ref(changeTitle());

watchEffect(title, () => {
  title.value = changeTitle();
});
</script>

<template>
  <div class="d-flex">
    <Navigation />
    <div class="container d-flex flex-column">
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
