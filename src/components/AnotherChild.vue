<script>
export default {
  props: {
    msg: String,
  },
  emits: ["response"],
  created() {
    // emit with argument
    this.$emit("response", "hello from pops");
  },
  data() {
    return {
      message: "me too",
    };
  },
};
</script>
<template>
  <h3 class="message">{{ message }}</h3>

  <div class="mt-5">{{ msg }}</div>
</template>

<style>
.message {
  color: blue;
}
</style>
