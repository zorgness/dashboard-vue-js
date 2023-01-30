<script setup>
import Navtab from "./../components/schedule/NavTab.vue";
import Design from "./../components/schedule/Design.vue";
import ProgressComp from "./../components/schedule/Progress.vue";
import Meeting from "./../components/schedule/Meeting.vue";
import Files from "./../components/schedule/Files.vue";
</script>

<template>
  <div class="row row-cols-lg-2">
    <div class="col content-left">
      <Navtab />
      <Design />
      <ProgressComp />
    </div>
    <div class="col content-right">
      <Meeting />
      <Files />
    </div>
  </div>
</template>
