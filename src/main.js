import 'element-plus/dist/index.css';
import './style/index.css'
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@icon-park/vue-next/styles/index.css';

import App from './App.vue';
import router from './router';
import axios from 'axios';
const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(createPinia());
app.use(router);
app.config.globalProperties.$http = axios;
app.mount('#app');
