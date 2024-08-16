<script setup>
import { useMoonStore } from '@/stores/useMoonStore';
import HotNav from './Nav/HotNav.vue'
import {
    TwoDimensionalCodeOne as iconTwoDimensionalCodeOne,
    Apple as iconApple,
    Google as iconGoogle
} from '@icon-park/vue-next';
const moonStore = useMoonStore()
</script>

<template>
    <div :class="moonStore.isMoon ? 'moon' : ''">
        <div>
            <div class="NavHeader">
                <div class="NavHeader-left">
                    <h1 style="color: #fcd535;">215,070,121</h1>
                    <h1>用户的</h1>
                    <h1>共同选择</h1>
                    <div class="Full">
                        <div class="Full-input">
                            <input type="text" placeholder="邮箱/手机号码">
                        </div>
                        <el-link type="primary" :underline="false" href="#">
                            <el-button type="warning">立即注册</el-button>
                        </el-link>
                    </div>
                    <div class="icon">
                        <div class="icon-left">
                            <p class="size ">
                                或通过以下方式注册
                            </p>
                            <div>
                                <iconGoogle theme="filled" :size="30"
                                    :fill="moonStore.isMoon ? '#ffffff' : '#f0b90b'" />
                            </div>
                            <div>
                                <iconApple theme="filled" :size="30" :fill="moonStore.isMoon ? '#ffffff' : '#f0b90b'" />
                            </div>
                        </div>
                        <div class="QRcode">
                            <p class="size">
                                下载 App
                            </p>
                            <div>
                                <iconTwoDimensionalCodeOne :size="30"
                                    :fill="moonStore.isMoon ? '#ffffff' : '#f0b90b'" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="NavHeader-right">
                    <HotNav />
                </div>
            </div>
            <div class="test"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.NavHeader {
    padding-top: 48px;
    justify-content: center;
    align-items: normal;
    min-height: 800px;

    &-left {
        width: 600px;

        h1 {
            font-size: 72px;

            &:first-of-type {
                color: #fcd535;
            }
        }


        .Full {
            height: 48px;
            display: flex;
            align-items: center;

            &-input {
                width: 282px;
                margin-right: 16px;
                border: 1px solid #292e36;
                border-radius: 8px;
            }
        }

        .el-button {
            width: 116px;
            color: #181a20;
            height: 100%;
            border-radius: 8px;
        }

        .size {
            font-size: 14px;
            color: #757575;
        }

        .icon {
            margin-top: 88px;
            display: flex;
            align-items: center;

            &-left,
            .QRcode {
                align-items: center;

                div {
                    width: 48px;
                    height: 48px;
                    border: 1px solid #292e36;
                    border-radius: 8px;
                    justify-content: center;
                    align-items: center;
                    margin-right: 10px;
                    float: left;
                }
            }
        }

        .QRcode {
            margin-left: 70px;
        }
    }

    &-right {
        // 右侧的样式
        width: 550px;
        height: 700px;
        --el-menu-active-color: #fcd535;
    }
}

.test {
    height: 100px;
    background-color: red;
}
</style>
