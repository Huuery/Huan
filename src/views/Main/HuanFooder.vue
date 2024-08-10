<script setup>
import fooder from "@/static/Fooder.json"
import Dro from "./HuanFooderDro/FooderDropdown.vue"
import { useMoonStore } from '@/stores/useMoonStore';
import {
    Telegram as iconTelegram,
    Tiktok as iconTiktok,
    Facebook as iconFacebook,
    Twitter as iconTwitter,
    Youtube as iconYoutube,
    Instagram as iconInstagram,
    MoreApp as iconMoreApp
} from '@icon-park/vue-next';

const socialLinks = [
    { component: iconTelegram, key: 'Telegram' },
    { component: iconTiktok, key: 'Tiktok' },
    { component: iconFacebook, key: 'Facebook' },
    { component: iconTwitter, key: 'Twitter' },
    { component: iconYoutube, key: 'Youtube' },
    { component: iconInstagram, key: 'Instagram' },
    { component: iconMoreApp, key: 'More' }
]
const MoonStore = useMoonStore()
</script>

<template>
    <div class="fooder" :class="{ 'moon': MoonStore.isMoon }">
        <div class="fooder-left" :class="{ 'moon': MoonStore.isMoon }">
            <span class="fooder-logo">
                <h3>社区</h3>
                <div>
                    <el-link :class="{ 'moon': MoonStore.isMoon }" :underline="false" v-for="link in socialLinks"
                        :key="link.key" href="javascript:;">
                        <i>
                            <component :is="link.component" :size="24" />
                        </i>
                    </el-link>
                    <Dro />
                </div>
            </span>
        </div>
        <div class="fooder-center" :class="{ 'moon': MoonStore.isMoon }">
            <div v-for=" item in fooder.acc.slice(0, 2)" :key="item">
                <h3>{{ item.title }}</h3>
                <ul>
                    <li v-for=" subItem in item.about" :key="subItem">
                        <el-link :class="{ 'moon': MoonStore.isMoon }" :underline="false" href="javascript:;">{{
                            subItem }}</el-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="fooder-right" :class="{ 'moon': MoonStore.isMoon }">
            <div>
                <div v-for=" item in fooder.acc.slice(2, 4)" :key="item">
                    <h3>{{ item.title }}</h3>
                    <ul>
                        <li v-for=" subItem in item.about" :key="subItem">
                            <el-link :class="{ 'moon': MoonStore.isMoon }" :underline="false" href="javascript:;">{{
                                subItem
                            }}</el-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div v-for=" item in fooder.acc.slice(4, 6)" :key="item">
                    <h3>{{ item.title }}</h3>
                    <ul>
                        <li v-for=" subItem in item.about" :key="subItem">
                            <el-link :class="{ 'moon': MoonStore.isMoon }" :underline="false" href="javascript:;">{{
                                subItem
                                }}</el-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.fooder {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 0;
    padding: 28px;
}

.fooder-left {
    max-width: 270px;
}

.el-link .el-link--default {
    min-width: 60px;
    text-align: left;
    float: left;
}

.fooder-right,
.fooder-center,
.fooder-left {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.fooder-logo>div>.el-link {
    min-width: 50px;
    margin: 5px;
}

.fooder-logo>h3 {
    margin-left: 16px;
}

.fooder-right>div,
.fooder-center>div,
.fooder-left>div {
    min-width: 200px;
}

h3 {
    font-size: 18px;
    text-align: left;
}

.el-link {
    font-size: 14px;

}

.el-link:hover {
    color: #f0b90b !important;
}
</style>