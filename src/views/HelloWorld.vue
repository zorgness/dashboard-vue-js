<script setup>
import MyForm from "../components/MyForm.vue";
import Message from "../components/Message.vue";
import Todos from "../components/Todos.vue";
import Lifecycle from "../components/Lifecycle.vue";
import Watcher from "../components/Watcher.vue";

import { ref } from "vue";

defineProps({
  msg: String,
  num: String,
  show: Boolean,
});

const count = ref(0);
const count2 = ref(0);
</script>

<template>
  <div id="app-container">
    <Message />
    <h1>{{ msg }}</h1>

    <Lifecycle />

    <p>{{ parseInt(num) + parseInt(num) }}</p>

    <div>
      <button type="button" @click="count++" class="btn btn-danger">
        count is {{ count }}
      </button>
      <button type="button" class="btn btn-primary" @click="count2++">
        count is {{ count2 }}
      </button>
      <p v-show="show">lol</p>
    </div>

    <MyForm />
    <div class="m-5">
      <Todos />
    </div>
  </div>

  <div class="m-5">
    <Watcher />
  </div>
</template>
