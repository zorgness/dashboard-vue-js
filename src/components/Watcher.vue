<script>
export default {
  data() {
    return {
      todoId: 1,
      todos: null,
    };
  },
  methods: {
    async fetchData() {
      this.todos = null;
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${this.todoId}`
      );
      this.todos = await res.json();
    },
  },
  mounted() {
    this.fetchData();
  },
  watch: {
    todoId() {
      this.fetchData();
    },
  },
};
</script>

<template>
  <p>Todo id: {{ todoId }}</p>
  <button @click="todoId++">Fetch next todo</button>
  <p v-if="!todos">Loading...</p>
  <pre v-else>{{ todos }}</pre>
</template>
