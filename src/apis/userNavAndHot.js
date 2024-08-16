// src/composables/useNavAndHotData.js
import { ref, onMounted } from 'vue';
import axios from 'axios';

export function userNavAndHotData() {
    const NavAndHot = ref(null);
    onMounted(async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/Nav/NewAndHot');
            NavAndHot.value = response.data;
        } catch (error) {
            console.error('Failed to fetch NavAndHot data:', error);
        }
    });

    return {
        NavAndHot
    };
}

