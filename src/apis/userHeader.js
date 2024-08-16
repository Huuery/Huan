// src/composables/useFooderData.js
import { ref, onMounted } from 'vue';
import axios from 'axios';

export function useHeaderData() {
    const header = ref(null);

    onMounted(async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/Header/header-data');
            header.value = response.data;
        } catch (error) {
            console.error('Failed to fetch header data:', error);
        }
    });

    return {
        header
    };
}
