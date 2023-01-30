<template>
  <nav class="mb-3 navbar navbar-expand-lg navbar-dark">
    <button
      aria-controls="offcanvasNavbar-expand-lg"
      type="button"
      aria-label="Toggle navigation"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNavbar-expand-lg"
      class="navbar-toggler collapsed"
    >
      <i class="fa-solid fa-chart-simple text-dark m-4 hamburger"></i>
    </button>
    <div class="container-fluid">
      <div
        id="offcanvasNavbar-expand-lg"
        class="bg-black text-white offcanvas offcanvas-start"
        aria-labelledby="offcanvasNavbarLabel-expand-lg"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="mt-4 mx-2 offcanvas-title diamond-container">
          <i class="fa-solid fa-diamond diamond-red"></i
          ><i class="fa-solid fa-diamond diamond-white"></i>
        </div>
        <div class="offcanvas-body">
          <div
            class="justify-content-end flex-column flex-grow-1 pe-3 gap-3 navbar-nav"
            style="margin-top: 80px"
          >
            <router-link to="/" class="nav-link"
              ><i class="fa-solid fa-user fa-fw"></i>
              <span class="mx-1">Profile</span></router-link
            >
            <router-link class="nav-link" to="/schedule"
              ><i class="fa-solid fa-calendar-days fa-fw"></i>
              <span class="mx-1">Schedule</span></router-link
            >
            <router-link class="nav-link" id="Overview" to="/overview"
              ><i class="fa-solid fa-chart-column fa-fw"></i>
              <span class="mx-1">Overview</span></router-link
            >
            <router-link class="nav-link" id="Chat" to="/chat"
              ><i class="fa-solid fa-comment fa-fw"></i>
              <span class="mx-1">Chat</span></router-link
            >
            <router-link class="nav-link" to="/settings"
              ><i class="fa-solid fa-gear fa-fw"></i>
              <span class="mx-1">Settings</span></router-link
            >
            <router-link class="nav-link" to="/" style="margin-top: 200px"
              ><i class="fa-solid fa-right-from-bracket fa-fw"></i>
              <span class="mx-1">Logout</span></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar,
.navbar-collapse {
  flex-direction: column;
}
.navbar-expand-sm .navbar-nav {
  flex-direction: column;
}

.navbar .container-fluid,
.navbar-expand-sm .navbar-collapse,
.navbar-expand-sm .navbar-nav {
  flex-direction: column;
  align-items: flex-start;
}

.hamburger {
  font-size: 24px;
  transform: scale(-1, 1) rotate(90deg);
}

@media (min-width: 992px) {
  .navbar {
    width: 14%;
    height: 140vh;
    background: black;
  }
}

@media (max-width: 992px) {
  .navbar-expand-sm .navbar-nav {
    flex-direction: row !important;
  }
  .navbar,
  .navbar-collapse {
    background: transparent !important;
    position: absolute !important;
  }
  #offcanvasNavbar-expand-lg {
    width: 68% !important;
  }
}
</style>
