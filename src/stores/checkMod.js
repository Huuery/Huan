// stores/useMoonStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCheckModStore = defineStore('useMod', () => {
    const mobile = ref('');
    const flag = ref(false);
    const checkMod = () => {
        let re = /^1[3,4,5,6,7,8,9][0-9]{9}$/;
        let result = re.test(mobile.value);
        if (!result) {
            flag.value = false;
        } else {
            flag.value = true;
        }
    }

    return {
        mobile,
        flag,
        checkMod
    };
});
