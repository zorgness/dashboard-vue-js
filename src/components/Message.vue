<script>
import ChildComponent from "./ChildComponent.vue";
import AnotherChild from "./AnotherChild.vue";

export default {
  data() {
    return {
      message: "Hello World Lol!",
      titleClass: "title",
      count: 0,
      awesome: true,
      greeting: "Hello from parent",
      childMsg: "No child msg yet",
      msg: "props from parent",
    };
  },
  components: {
    ChildComponent,
    AnotherChild,
  },
  methods: {
    toggle() {
      return (this.awesome = !this.awesome);
    },
    increment() {
      return this.count++;
    },
    decrement() {
      return this.count--;
    },
  },
};
</script>

<template>
  <h1 v-bind:class="titleClass">{{ count }} {{ message }}</h1>
  <div class="d-flex justify-content-between">
    <button class="btn btn-success" @click="increment">increment</button>
    <button class="btn btn-danger" @click="decrement">decrement</button>
  </div>

  <div class="m-2">
    <ChildComponent>{{ msg }}</ChildComponent>
  </div>
  <div class="m-2">
    <AnotherChild :msg="greeting" @response="(msg) => (childMsg = msg)" />
  </div>

  <div class="m-2">{{ childMsg }}</div>

  <button @click="toggle">toggle</button>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>
</template>

<style>
.title {
  color: red;
}
</style>
