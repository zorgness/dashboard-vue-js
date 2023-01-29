<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$refs.p.textContent = "mounted";
    }, 2000);
  },
};
</script>

<template>
  <p ref="p">hello</p>
</template>
