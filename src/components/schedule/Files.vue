<script setup>
import { data } from "./../../data/dataFiles";
import CardFiles from "./../cards/CardFiles.vue";
</script>
<template>
  <div class="d-flex flex-column m-4">
    <div class="d-flex justify-content-between align-items-baseline mb-1">
      <div>
        <h4>Files</h4>
      </div>

      <div>
        <h6>View all <i class="fa-solid fa-arrow-right"></i></h6>
      </div>
    </div>
    <div class="d-flex flex-column gap-3">
      <CardFiles v-for="info in data" :key="info.id" :data="info" />
    </div>
  </div>
</template>
