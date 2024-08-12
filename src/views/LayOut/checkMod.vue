<script setup>
import { ref } from 'vue';

let mobile = ref('');

let checkMod = () => {
    let re = /^1[3,4,5,6,7,8,9][0-9]{9}$/;
    let result = re.test(mobile.value);
    if (!result) {
        alert("手机号码格式不正确");
        return false;
    }
    alert("手机号码格式正确");
    return true;
}
</script>

<template>
    <div>
        <input type="text" style="color: black;" v-model="mobile">
        <button @click="checkMod">Test</button>
    </div>
</template>
