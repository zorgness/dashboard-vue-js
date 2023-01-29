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
    <div v-for="info in data" :key="info.id" class="d-flex flex-column mb-3">
      <CardFiles />
      <!-- {data.map((element) => {
          return (
            <CardFiles
              key={element.id}
              data={element}
              icon={iconsImg[`${element.icon}.png`]}
            />
          );
        })} -->
    </div>
  </div>
</template>
