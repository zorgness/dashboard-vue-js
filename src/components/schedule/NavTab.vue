<script setup>
import { ref } from "vue";
const labels = ["Recent Added", "In Progress", "In Review ", "Completed"];
const currentLabel = ref(labels[0]);

const handleClick = (label) => {
  currentLabel.value = label;
};
</script>

<template>
  <ul class="list-inline tabs-underlined m-4 justify-content-between">
    <li v-for="(label, index) in labels" :key="index">
      <a
        class="tab-underlined"
        @click="handleClick(label)"
        :class="label === currentLabel ? 'active' : ''"
        href="#"
        >{{ label }}</a
      >
    </li>
  </ul>
</template>
