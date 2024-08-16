// src/composables/useFooderData.js
import { ref, onMounted } from 'vue';
import axios from 'axios';

export function userFooderData() {
    const fooder = ref(null);
    onMounted(async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/Fooder/fooder-data');
            fooder.value = response.data;
        } catch (error) {
            console.error('Failed to fetch fooder data:', error);
        }
    });

    return {
        fooder
    };
}

