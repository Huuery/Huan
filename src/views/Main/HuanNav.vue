<script setup>
import { useMoonStore } from '@/stores/useMoonStore'
const moonStore = useMoonStore()
</script>

<template>
    <div :class="moonStore.isMoon ? 'moon' : ''">main</div>
</template>

<style scoped>
div {
    min-height: 600px;
}
</style>
