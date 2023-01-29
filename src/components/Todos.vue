<script>
const addId = () => {
  return Math.random().toString(16);
};
export default {
  data() {
    return {
      text: "",

      hideCompleted: false,
      todos: [
        {
          id: addId(),
          text: "learn JS",
          done: false,
        },
        {
          id: addId(),
          text: "learn PHP",
          done: false,
        },
        {
          id: addId(),
          text: "learn Vue",
          done: false,
        },
      ],
    };
  },
  methods: {
    onInput(e) {
      this.text = e.target.value;
    },
    addTodo(text) {
      this.todos.push({
        id: addId(),
        text: text,
        done: false,
      });
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    handleSubmit() {
      if (this.text.length > 0) {
        this.addTodo(this.text);
        this.text = "";
      }
    },
  },
  computed: {
    filteredTodos() {
      return this.hideCompleted
        ? this.todos.filter((todo) => !todo.done)
        : this.todos;
    },
  },
};
</script>

<template>
  <div class="container mx-5">
    <form @submit.prevent="handleSubmit" method="post" class="form-group m-4">
      <input type="text" name="newTodo" v-model="text" class="form-control" />
      <input type="submit" name="submit" value="new todo" />
    </form>

    <ul class="list-group border-0">
      <li v-for="todo in filteredTodos" :key="todo.id" class="list-group-item">
        <input type="checkbox" v-model="todo.done" class="mx-2" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>

        <button @click="deleteTodo(todo.id)" class="btn btn-secondary mx-5">
          X
        </button>
      </li>
    </ul>
    <button @click="hideCompleted = !hideCompleted" class="btn btn-warning">
      {{ hideCompleted ? "Show all" : "Hide completed" }}
    </button>
  </div>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>
