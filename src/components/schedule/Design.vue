<script setup>
import CardDesign from "./../cards/CardDesign.vue";
import { data } from "../../data/dataDesign.js";
</script>

<template>
  <div className="d-flex flex-column mx-4 my-3 gap-3">
    <CardDesign v-for="info in data" :key="info.id" :data="info" />
  </div>
</template>
