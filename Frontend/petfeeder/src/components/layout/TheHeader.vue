<template>
  <div class="header flex">
    <div class="header-left flex">
      <img src="../../assets/img/logo.jpg" alt="" />
      <div class="header-name">PETFEEDER</div>
    </div>
    <div class="header-center flex">
      <multiselect
        v-model="valueDevice"
        :options="optionsDevice"
        :custom-label="displayDevice"
        :allow-empty="false"
        placeholder="Chọn thiết bị"
        deselect-label=""
        label="deviceName"
        track-by="deviceID"
      ></multiselect>
    </div>
    <div class="header-right flex">
      <i class="far fa-question-circle"></i>
      <i class="far fa-bell"></i>
      <div class="usename">Nguyễn Tất Thanh</div>
      <img class="avatar" src="../../assets/img/avatar.png" alt="" />
      <ul class="avatar-option">
        <li>Thông tin tài khoản</li>
        <li>Danh sách thiết bị</li>
        <li>Đăng xuất</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  name: "TheHeader",
  components: {
    Multiselect,
  },
  data() {
    return {
      valueDevice: { deviceID: "1", deviceName: "Thiết bị 1" },
      optionsDevice: [
        { deviceID: "2", deviceName: "Thiết bị 1" },
        { deviceID: "3", deviceName: "Thiết bị 2" },
        { deviceID: "4", deviceName: "Thiết bị 3" },
        { deviceID: "5", deviceName: "Thiết bị 4" },
      ],
    };
  },
  methods: {
    displayDevice({ deviceName }) {
      return `${deviceName}`;
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.header {
  width: 100%;
  height: 90px;
  background-color: #242e42;
  padding: 0 30px;
  justify-content: space-between;
}

.header-left {
  align-items: center;
}

.header-left img {
  width: 70px;
  height: 70px;
  border-radius: 4px;
}

.header-name {
  font-family: "OpenSans-Bold";
  font-size: 3rem;
  color: #fbfbfb;
  padding-left: 20px;
}

.header-center {
  width: 350px;
  align-items: center;
}

.header-right {
  position: relative;
  align-items: center;
}

.fa-question-circle {
  font-size: 2rem;
  color: white;
  margin: 0 6px;
  cursor: pointer;
}

.fa-bell {
  font-size: 2rem;
  color: white;
  margin: 0 6px;
  cursor: pointer;
}

.usename {
  font-size: 1.5rem;
  color: #fbfbfb;
  padding: 0 14px 0 6px;
}

.avatar {
  display: block;
  width: 46px;
  border-radius: 50%;
  cursor: pointer;
}

.avatar:hover .avatar-option {
  display: block;
}

.avatar-option {
  display: none;
  position: absolute;
}
</style>>
