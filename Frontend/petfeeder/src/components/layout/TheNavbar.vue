<template>
  <div class="navbar">
    <base-item-navbar
      path="/dashboard"
      itemText="Tổng quan"
      classIcon="far fa-chart-bar"
    >
    </base-item-navbar>

    <base-item-navbar
      path="/setting-feed"
      itemText="Đặt lịch cho ăn"
      classIcon="far fa-calendar-alt"
    >
    </base-item-navbar>
    <base-item-navbar
      path="/history"
      itemText="Lịch sử cho ăn"
      classIcon="fas fa-history"
    >
    </base-item-navbar>
    <base-item-navbar
      path="/manage-user"
      itemText="Quản lý người dùng"
      classIcon="fas fa-users-cog"
    >
    </base-item-navbar>
    <base-item-navbar
      path="/manage-device"
      itemText="Quản lý thiết bị"
      classIcon="fas fa-camera"
    >
    </base-item-navbar>
  </div>
</template>

<script>
import BaseItemNavbar from "../base/BaseItemNavbar.vue";
export default {
  name: "TheNavbar",
  components: {
    BaseItemNavbar,
  },
};
</script>

<style>
.navbar {
  height: 100%;
  width: 210px;
  background-color: var(--background-header-sidebar);
}

.navbar-item {
  height: 50px;
  align-items: center;
  border-left: 4px solid #242e42;
  margin: 6px 0;
  cursor: pointer;
  text-decoration: none;
}

.navbar-item:first-child {
  margin-top: 0;
}

.navbar-item:hover {
  background-color: #384359;
}

.navbar-item-active {
  border-left: 4px solid #1f8efa;
  background-color: #384359;
}

.navbar-item-icon {
  font-size: 2rem;
  color: #fbfbfb;
  padding: 0 10px 0 10px;
}

.navbar-item-text {
  font-size: 1.6rem;
  color: #fbfbfb;
}
</style>
