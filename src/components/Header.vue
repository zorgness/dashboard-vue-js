<script>
export default {
  props: {
    title: String,
  },
};
</script>

<template>
  <div
    className="d-flex justify-content-between align-items-baseline mx-4 mt-4 mb-1"
  >
    <div>
      <h2 className="header-label">{{ title }}</h2>
    </div>

    <div>
      <div class="dropdown">
        <button
          type="button"
          id="dropdown-basic"
          aria-expanded="false"
          data-bs-toggle="dropdown"
          class="border-0 dropdown-toggle btn btn-transparent"
        >
          Aug 5, 2021
        </button>

        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Aug 5, 2021</a></li>
          <li><a class="dropdown-item" href="#">Aug 6, 2021</a></li>
          <li><a class="dropdown-item" href="#">Aug 7, 2021</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
