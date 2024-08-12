import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/LayOut/AppLogin.vue';
import HuanMain from '@/views/Main/HuanMain.vue';
import Register from '@/views/LayOut/AppRegister.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'Main',
      component: HuanMain,
      children: []
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    }
    
  ]
});

export default router;
