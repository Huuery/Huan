<script setup>
import { ElMessage } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'
import FooterDropDownList from '@/static/LanguageAndMoney.json';
import { ref, markRaw } from 'vue';
import { useMoonStore } from '@/stores/useMoonStore';
import {
    International as iconInternational,
    Currency as iconCurrency,
    Moon as iconMoon,
    Sun as iconSun
} from '@icon-park/vue-next';

const value1 = ref(true)
const MoonStore = useMoonStore()
const selectedLanguage = ref('简体中文')
const selectedMoney = ref('CNY-￥')
const selectedTheme = ref('夜间模式')
const iconMap = ref(markRaw(iconMoon))

const Mode = () => {
    selectedTheme.value = MoonStore.isMoon ? '夜间模式' : '日间模式'
    iconMap.value = MoonStore.isMoon ? markRaw(iconMoon) : markRaw(iconSun)
}

const getMode = () => {
    MoonStore.toggleMoon()
}

const getModeAndModeChange = () => {
    getMode()
    Mode()
}

const handleLanguageChange = (command) => {
    selectedLanguage.value = command
    const selectedLanguageObject = FooterDropDownList.language.find(item => item.name === command)
    selectedMoney.value = selectedLanguageObject ? selectedLanguageObject.money : 'CNY-￥'
    ElMessage(`语言切换成功，当前语言为 ${command}`)
}

const handleMoneyChange = (command) => {
    selectedMoney.value = command
    ElMessage(`货币切换成功，当前货币为 ${command}`)
}

const handleVisibleChange = (visible) => {
    const dropdownMenus = document.querySelectorAll('.el-dropdown-menu')
    dropdownMenus.forEach(menu => {
        menu.inert = !visible
    })
}
</script>

<template>
    <div class="footer-dropdown-list">
        <div>
            <el-dropdown @command="handleLanguageChange" @visible-change="handleVisibleChange">
                <span class="el-dropdown-link" :class="{ 'moon': MoonStore.isMoon }">
                    <component :is="iconInternational" :size="24" />
                    <span style="margin-left: 10px;">
                        {{ selectedLanguage }}
                    </span>
                    <el-icon class="el-icon--right">
                        <ArrowDown />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item v-for="item in FooterDropDownList.language" :key="item.code + '-lang'"
                            :command="item.name">
                            {{ item.name }}
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
        <div>
            <el-dropdown @command="handleMoneyChange" @visible-change="handleVisibleChange">
                <span class="el-dropdown-link" :class="{ 'moon': MoonStore.isMoon }">
                    <component :is="iconCurrency" :size="24" />
                    <span style="margin-left: 10px;">
                        {{ selectedMoney }}
                    </span>
                    <el-icon class="el-icon--right">
                        <ArrowDown />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item v-for="item in FooterDropDownList.language" :key="item.code + '-money'"
                            :command="item.money">
                            {{ item.money }}
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
        <div :class="{ 'moon': MoonStore.isMoon }">
            <component :is="iconMap" :size="24" />
            <span style="margin: 0 10px;">{{ selectedTheme }}</span>
            <el-switch v-model="value1" active-value="true" inactive-value="false" @change="getModeAndModeChange"
                style="--el-switch-on-color: #c0b181; --el-switch-off-color: #da4c35">
                <template #active-action>
                    <span class="custom-active-action">
                        <component :is="iconSun" :size="13" :fill="'#ebd582'" />
                    </span>
                </template>
                <template #inactive-action>
                    <span class="custom-inactive-action">
                        <component :is="iconMoon" :size="13" :fill="'#e7682f'" />
                    </span>
                </template>
            </el-switch>
        </div>
    </div>
</template>

<style scoped>
.el-dropdown-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #151618;
}

.el-dropdown-menu {
    width: 240px;
}

.footer-dropdown-list {
    padding: 16px;
    height: 160px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}

.footer-dropdown-list>div {
    display: flex;
    align-items: center;
    font-size: 13px;
}

.moon {
    color: var(--el-color-white);
}
</style>
