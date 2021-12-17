import Vue from 'vue'
import VueRouter from 'vue-router'

//component
import Dashboard from "../views/page/Dashboard.vue";
import History from "../views/page/History.vue";
import ManageDevice from "../views/page/ManageDevice.vue";
import ManageUser from "../views/page/ManageUser.vue";
import SettingFeed from "../views/page/SettingFeed.vue";

Vue.use(VueRouter)

const routes = [
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/history', name: 'History', component: History },
    { path: '/manage-device', name: 'ManageDevice', component: ManageDevice },
    { path: '/manage-user', name: 'ManageUser', component: ManageUser },
    { path: '/setting-feed', name: 'SettingFeed', component: SettingFeed },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });

  export default router;