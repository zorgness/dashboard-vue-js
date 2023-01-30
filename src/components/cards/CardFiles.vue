<script setup>
const props = defineProps(["data"]);
const { icon, title, date, fileWeight } = props.data;
const iconImg = `src/assets/icons/${icon}.png`;
</script>

<template>
  <div className="card-product">
    <div className="d-flex align-items-center">
      <div className="card-icon card-icon-files">
        <img :src="iconImg" alt="icon" style="width: 24px" />
      </div>
      <div className="card-product-infos">
        <h2>{{ title }}</h2>
        <p>{{ date }}</p>
      </div>
    </div>

    <div className="card-avatar d-flex align-items-baseline">
      <p>{{ fileWeight }} KB</p>
      <i className="fa-solid fa-download mx-3"></i>
    </div>
  </div>
</template>
