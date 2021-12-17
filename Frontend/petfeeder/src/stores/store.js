import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        //Trạng thái đóng mở form thêm thiết bị
        formAddDevice: false,
    },

    getters: {

    },

    mutations: {
        //Đóng mở form thêm thiết bị
        formAddDevice(state, formAddDevice) {
            state.formAddDevice = formAddDevice;
        }
    },

    actions: {

    }
});

export default store