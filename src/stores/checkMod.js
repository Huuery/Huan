// stores/useMoonStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCheckModStore = defineStore('useMod', () => {
    const mobile = ref('');
    const flag = ref(false);

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^(\+?\d{1,4}[\s-]?)?(\(?\d{1,4}\)?[\s-]?)?\d{7,}$/;

    const checkMod = () => {
        flag.value  = emailPattern.test(mobile.value) || phonePattern.test(mobile.value);
    }

    return {
        mobile,
        flag,
        checkMod
    };
});
