<template>
  <div class="app">
    <the-header></the-header>
    <div class="content flex">
      <the-navbar></the-navbar>
      <router-view />
      <add-device v-if="formAddDevice"></add-device>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TheHeader from "./TheHeader.vue";
import TheNavbar from "./TheNavbar.vue";
import AddDevice from "../../views/form/AddDevice.vue";

export default {
  name: "TheApp",
  components: {
    TheHeader,
    TheNavbar,
    AddDevice,
  },
  computed: {
    ...mapState(['formAddDevice']),
  },
};
</script>

<style>
/* Fontawesome */
@import "../../lib/fontawesome-free-5.15.4-web/fontawesome-free-5.15.4-web/css/all.css";

:root {
  --white-color: #ffffff;
  --black-color: #000;
  --background-page: #f8f8f8;
  --background-header-sidebar: #24344b;
  --background-button-primary: #03ae66;
}

* {
  box-sizing: inherit;
  margin: 0;
}

html {
  font-size: 62.5%;
  line-height: 1.6rem;
  font-family: "OpenSans-Regular";
  box-sizing: border-box;
}

body {
  overflow: hidden;
  position: relative;
}

/* Phông chữ */
@font-face {
  font-family: "iconfont";
  src: url("../../assets/fonts/iconfont.woff");
}

@font-face {
  font-family: "OpenSans-Bold";
  src: url("../../assets/fonts/OpenSans-Bold.woff2");
}

@font-face {
  font-family: "OpenSans-Italic";
  src: url("../../assets/fonts/OpenSans-Italic.woff2");
}

@font-face {
  font-family: "OpenSans-Light";
  src: url("../../assets/fonts/OpenSans-Light.woff2");
}

@font-face {
  font-family: "OpenSans-LightItalic";
  src: url("../../assets/fonts/OpenSans-LightItalic.woff2");
}

@font-face {
  font-family: "OpenSans-Regular";
  src: url("../../assets/fonts/OpenSans-Regular.woff2");
}

@font-face {
  font-family: "OpenSans-SemiBold";
  src: url("../../assets/fonts/OpenSans-SemiBold.woff2");
}

@font-face {
  font-family: "OpenSans-SemiBoldItalic";
  src: url("../../assets/fonts/OpenSans-SemiBoldItalic.woff2");
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* css scroll */
.scroll::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.scroll::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #a8a8a8;
}

.scroll::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #f1f1f2;
}

/* flex */
.flex {
  display: flex;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

/* css trang app */
.app {
  width: 100%;
  background-image: url("../../assets/img/img-background.jpg");
}

.content {
  width: 80%;
  height: calc(100vh - 90px);
  margin: 0 auto;
  background-color: var(--white-color);
}
</style>
