<script setup>
import { onMounted, ref } from "vue";

const input = ref(null);
onMounted(() => {
  input.value.focus();
});
</script>

<template>
  <div class="d-flex align-items-center justify-content-between mx-4 mt-4 mb-1">
    <div class="form-input">
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
      <!-- <form className="d-flex form-group">
        <input
          class="form-control"
          type="search"
          placeholder="Search"
          className="me-2 input-search border-0"
          aria-label="Search"
        />
      </form> -->

      <div className="lookup-mobile mx-3">
        <i className="fa-solid fa-magnifying-glass"></i>
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
