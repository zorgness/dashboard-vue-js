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
      <button
        type="button"
        class="dropdown-toggle dropdown-toggle-split bg-transparent border-0 text-dark"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span>Aug 5, 2021</span>
      </button>

      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Aug 5, 2021</a></li>
        <li><a class="dropdown-item" href="#">Aug 6, 2021</a></li>
        <li><a class="dropdown-item" href="#">Aug 7, 2021</a></li>
      </ul>
    </div>
  </div>
</template>
