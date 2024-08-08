// stores/useMoonStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMoonStore = defineStore('useMoon', () => {
    const isMoon = ref(Boolean());

    const toggleMoon = () => {
        isMoon.value = !isMoon.value;
    };

    return {
        isMoon,
        toggleMoon
    };
});
