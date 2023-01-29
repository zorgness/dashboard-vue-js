<script setup>
import CardDesign from "./../cards/CardDesign.vue";
import { data } from "../../data/dataDesign.js";
console.log(data);
</script>

<template>
  <div
    v-for="info in data"
    :key="info.id"
    className="d-flex flex-column mx-4 my-3"
  >
    <CardDesign :data="info" />
  </div>
</template>
