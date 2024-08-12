// stores/useMoonStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCheckModStore = defineStore('useMod', () => {
    let mobile = ref('');
    let flag = ref(false);
    let checkMod = () => {
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
