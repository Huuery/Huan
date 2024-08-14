<script setup>
import { useMoonStore } from '@/stores/useMoonStore';
import { useCheckModStore } from "@/stores/checkMod";
import {
    TwoDimensionalCodeOne as iconTwoDimensionalCodeOne,
    Apple as iconApple,
    Google as iconGoogle
} from '@icon-park/vue-next';
import { ref } from 'vue';
const MoonStore = useMoonStore();
const useCheckMod = useCheckModStore();
const AppFlag = ref(false);
const AppFlagFunc = () => {
    setTimeout(() => (
        useCheckMod.checkMod(),
        AppFlag.value = !useCheckMod.flag
    ), 1000)
}
MoonStore.toggleMoon()
</script>

<template>
    <div class="app-layout" :class="{ 'moon': MoonStore.isMoon }">
        <div class="content-card">
            <div class="content-card-title">
                <div class="title-icon">
                    <el-icon :size="38">
                        <ElementPlus />
                    </el-icon>
                    <span>HUANCE</span>
                </div>
                <div class="title-loginfo">
                    <h2>登录</h2>
                    <div class="title-loginfo-qc">
                        <iconTwoDimensionalCodeOne :size="22" />
                    </div>
                </div>
                <div class="title mail-phone">
                    <div>邮箱/手机号码</div>
                    <div class="title-input">
                        <input type="text" placeholder="请输入邮箱/手机号码" @blur="AppFlagFunc" v-model="useCheckMod.mobile">
                    </div>
                    <p :class="{ 'disNone': !AppFlag }" style="color: red;font-size: 12px;">
                        <span>请输入正确的邮箱/手机号码</span>
                    </p>
                </div>
                <div class="title password">
                    <div>密码</div>
                    <div class="title-input">
                        <input type="password" placeholder="请输入密码">
                    </div>
                </div>
                <div class="login-btn">
                    <el-link href="/" :underline="false">
                        <el-button color="#fcd535">登录</el-button>
                    </el-link>
                </div>
                <div class="content-card-footer">
                    <div class="footer-item">
                        <div class="footer-item-left"></div>
                        <div class="footer-item-text">或</div>
                        <div class="footer-item-right"></div>
                    </div>
                    <div class="footer-google-login login-btn">
                        <el-link href="/" :underline="false" class="lcon-border">
                            <el-button color="#00000000">
                                <div class="google-icon loginIcon">
                                    <iconGoogle theme="filled" :size="16" fill="#ffffff" />
                                    <span>通过Google登录</span>
                                    <span></span>
                                </div>
                            </el-button>
                        </el-link>
                    </div>
                    <div class="footer-apple-login login-btn">
                        <el-link href="/" :underline="false" class="lcon-border">
                            <el-button color="#00000000">
                                <div class="apple-icon loginIcon">
                                    <iconApple theme="filled" :size="18" fill="#ffffff" />
                                    <span>通过Apple登录</span>
                                    <span></span>
                                </div>
                            </el-button>
                        </el-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <el-link type="warning" href="Register" :underline="false">
                <span>创建币安账户</span>
            </el-link>
        </div>
    </div>

</template>

<style scoped>
.loginIcon {
    justify-content: space-between
}

.app-layout {
    justify-content: center;
    height: 100%;
    flex-direction: column
}

.title {
    font-size: 16px;
}

.title-input {
    justify-content: left;
    width: 100%;
    height: 38px;
    margin: 10px 0;
}

.title-icon {
    color: #f0b90b;
}

.title-icon>span {
    font-weight: bold;
}

.content-card {
    width: 425px;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    border-radius: 12px;
    padding-top: 25px;
    padding-bottom: 70px;
    margin-bottom: 28px;
}

.content-card-title {
    width: 343px;
}

.title-loginfo {
    justify-content: space-between;
}

.title-loginfo-qc {
    background-color: #1e2329;
    width: 38px;
    height: 38px;
    justify-content: center;
    border-radius: 6px;
}

.login-btn {
    width: 100%;
    height: 40px;
    margin-top: 15px;
    border-radius: 8px;
}

.el-link--default,
.el-button,
.el-button>span {
    width: 100% !important;
    height: 100% !important;
}

.content-card-footer>.footer-item {
    justify-content: space-between;
    flex-direction: row;
    margin-top: 10px;
    width: 100%;
}

.footer-item-left,
.footer-item-right {
    background-color: #2a3038;
    width: 43%;
    height: 1px;
}
</style>
