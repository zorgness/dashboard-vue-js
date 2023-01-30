<script setup>
import { watchEffect, ref } from "vue";

const input = ref(null);
const show = ref(false);
watchEffect(() => {
  input?.value?.focus();
});

const handleShow = () => {
  show.value = !show.value;
};
const handleMouseEnter = () => {
  input?.value?.focus();
};
</script>

<template>
  <div class="d-flex align-items-center justify-content-between mx-4 mt-4 mb-1">
    <div class="form-input" @mouseenter="handleMouseEnter">
      <form class="d-flex form-group" id="input-container">
        <i class="fa-solid fa-magnifying-glass lookup"></i>

        <input
          class="form-control me-2 input-search border-0"
          type="search"
          placeholder="Search"
          aria-label="Search"
          ref="input"
        />
      </form>
    </div>

    <div class="d-flex align-items-center search-mobile-container">
      <form
        v-if="show"
        class="d-flex form-group"
        id="input-mobile-container"
        @mouseenter="handleMouseEnter"
      >
        <input
          type="search"
          placeholder="Search"
          class="form-control me-2 input-search border-0"
          aria-label="Search"
          ref="input"
        />
      </form>

      <div @click="handleShow" class="lookup-mobile mx-3">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div>
        <img
          src="https://as2.ftcdn.net/v2/jpg/04/41/00/97/1000_F_441009747_IT8Lfot0YFHbzVH6VSPKrxplFTKesed0.jpg"
          alt="avatar"
          class="avatar"
        />
      </div>
    </div>
  </div>
</template>
