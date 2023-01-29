<script>
export default {
  props: {
    label: String,
  },
};
</script>
<template>
  <li class="nav-item">
    <a class="nav-link" href="#">{{ label }}</a>
  </li>
</template>
