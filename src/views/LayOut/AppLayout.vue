<script setup>
import { useMoonStore } from '@/stores/useMoonStore';
const MoonStore = useMoonStore();
MoonStore.toggleMoon()
</script>

<template>
    <div class="app-layout">
        退出页面了
        <el-link type="primary" href="/">1231</el-link>
    </div>

</template>

<style scoped>
.app-layout {
    height: 1200px;
}
</style>
