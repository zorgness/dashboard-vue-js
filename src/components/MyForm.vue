<script>
export default {
  data() {
    return {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    onInput(e) {
      this.username = e.target.value;
      this.userEmail = e.target.value;
      this.password = e.target.value;
      this.confirmPassword = e.target.value;
    },

    options() {
      return {
        email: this.email,
        username: this.username,
        password: this.password,
      };
    },
    handleSubmit() {
      if (
        this.username.length > 3 &&
        this.password.length > 3 &&
        this.password === this.confirmPassword
      ) {
        console.log(this.options());
      }
    },
  },
};
</script>
<template>
  <div class="container mx-5">
    <form @submit.prevent="handleSubmit" method="post" class="form-group">
      <label for="username">Username</label>
      <input
        type="text"
        name="username"
        v-model="username"
        class="form-control"
      />
      <label for="email">Email</label>
      <input type="email" name="email" v-model="email" class="form-control" />
      <label for="username">Password</label>
      <input
        type="password"
        name="password"
        v-model="password"
        class="form-control"
      />
      <label for="confirmPassword">Confirm Password</label>
      <input
        type="password"
        name="confirmPassword"
        v-model="confirmPassword"
        class="form-control"
      />
      <input type="submit" name="submit" class="btn btn-success mt-3" />
    </form>
  </div>
</template>
;
