<template>
    <div class="add-device">
        <div class="add-device-overlay"></div>
        <vue-drag-resize :isResizable="false" dragHandle="" :w="356" :h="160" :x="586" :y="300">
            <div class="add-device-content flex-column">
                <div class="add-device-title flex">
                    <span>Thêm thiết bị</span>
                    <i class="fas fa-times"></i>
                </div>
                <div class="add-device-body">
                    
                </div>
                <div class="add-device-footer flex">
                    <BaseButton
                        classButton="btn-secondary"
                        textButton="Hủy"
                        @clickButton="hideForm"
                    ></BaseButton>
                    <BaseButton
                        classButton="btn-primary"
                        textButton="Thêm"
                        @clickButton="addDevice"
                    ></BaseButton>
                </div>
            </div>
        </vue-drag-resize>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
import VueDragResize from 'vue-drag-resize'
import BaseButton from '../../components/base/BaseButton.vue'
export default {
    name: 'BasePopup',
    data() {
        return {}
    },
    components: {
        VueDragResize,
        BaseButton,
    },
    computed: {
        
    },
    watch: {
        
    },
    props: ['popupText', 'button1', 'button2', 'button3', 'textButton1', 'textButton2', 'textButton3'],

    methods: {
        ...mapMutations(['formAddDevice']),

        /**
         * Đóng form thêm mới
         */
        hideForm() {
            this.formAddDevice(false);
        },
        
        /**
         * Thêm thiết bị
         */
        addDevice() {
            return
        },
    }

}
</script>

<style>
.add-device {
    position: fixed;
	z-index: 1;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	animation: fadeIn linear .1s;
}

.add-device-overlay {
    position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3);
}

.add-device-content {
    width: 100%;
    height: 100%;
    justify-content: space-between;
    background-color: var(--white-color);
    padding: 0 24px;
    border-radius: 4px;
}

.add-device-title {
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
}

.add-device-title span {
    font-family: "OpenSans-SemiBold";
    font-size: 2rem;
    color: var(--black-color);
}

.add-device-title i {
    font-size: 2rem;
}


.add-device-body {
    font-family: "OpenSans-Regular";
    font-size: 1.3rem;
    color: var(--black-color);
    line-height: 18px;
}

.add-device-footer {
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 24px;
}

.add-device-footer .btn {
    width: 92px;
}
</style>