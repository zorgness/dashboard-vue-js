<script setup lang="ts">
import { type PropType } from "vue";
interface CardDesignProps {
  icon: String;
  title: String;
  start: String;
  end: String;
  profilesImgUrl?: String;
}
const props = defineProps({
  data: {
    type: Object as PropType<CardDesignProps>,
    required: true,
  },
});

const { icon, title, start, end, profilesImgUrl } = props?.data;
</script>
<template>
  <div class="card-product">
    <div class="d-flex align-items-center">
      <div class="card-icon card-icon-design">
        <i :class="icon"></i>
      </div>
      <div class="card-product-infos">
        <h2>{{ title }}</h2>
        <p>{{ start }} - {{ end }}</p>
      </div>
    </div>

    <div class="card-avatars">
      <img
        v-for="(image, index) in profilesImgUrl"
        :key="index"
        :src="image"
        alt="avatar-profile"
        class="avatar-card"
      />
    </div>
  </div>
</template>
