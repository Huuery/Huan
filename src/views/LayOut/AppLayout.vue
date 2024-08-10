<script setup>
import { useMoonStore } from '@/stores/useMoonStore';
import { TwoDimensionalCodeOne as iconTwoDimensionalCodeOne } from '@icon-park/vue-next';
const MoonStore = useMoonStore();
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
                    <div class="title-input mail-phone-input">
                        <input type="text" placeholder="请输入邮箱/手机号码">
                    </div>
                </div>
                <div class="title password">
                    <div>密码</div>
                    <div class="title-input password-input">
                        <input type="text" placeholder="请输入密码">
                    </div>
                </div>
                <div class="login-btn">
                    <el-link href="/" :underline="false">
                        <el-button color="#fcd535" :dark="isDark">登录</el-button>
                    </el-link>
                </div>
                <div class="content-card-footer">
                    <div class="footer-item-left"></div>
                    <div class="footer-item-text">或</div>
                    <div class="footer-item-right"></div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.app-layout,
.title-input,
.title-icon,
.content-card,
.title-loginfo,
.title-loginfo-qc,
.login-btn,
.content-card-footer {
    display: flex;
    align-items: center;
}

.app-layout {
    justify-content: center;
    align-content: space-around;
}

.title {
    font-size: 16px;
}

.title-input {
    justify-content: left;
    width: 100%;
    height: 38px;
    border: 1px solid #2a3038;
    border-radius: 8px;
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
    border: 1px solid #2a3038;
    height: 500px;
    border-radius: 8px;
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
    border-radius: 8px;
}

.login-btn {
    width: 100%;
    height: 40px;
    margin-top: 15px;
    border-radius: 8px;
}

.el-link--default,
.el-button {
    width: 100% !important;
    height: 100% !important;
}

.content-card-footer {
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
