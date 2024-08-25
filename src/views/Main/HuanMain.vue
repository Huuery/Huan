<script setup>
import HuanHeader from '@/views/Main/HuanHeader.vue';
import HuanFooder from '@/views/Main/HuanFooder.vue';
import HuanNav from '@/views/Main/HuanNav.vue';
</script>
<template>
    <div class="common-layout">
        <el-container>
            <div style="height: 60px;"></div>
            <el-header>
                <HuanHeader />
            </el-header>
            <el-main>
                <HuanNav />
            </el-main>
            <el-footer>
                <HuanFooder />
            </el-footer>
        </el-container>
    </div>
</template>
<style>
.el-header,
.el-footer,
.el-main {
    padding: 0px 0px;
    width: 100%;
}

.el-footer,
.el-main {
    height: 100%;
    overflow: hidden;
}

.el-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    /* background-color: #fff; */
}

.el-menu--horizontal.el-menu {
    border: none;
}
</style>