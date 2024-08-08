import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/views/LayOut/AppLayout.vue';
import HuanMain from '@/views/Main/HuanMain.vue';
import { useMoonStore } from '@/stores/useMoonStore'; // 导入 Pinia store

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
      path: '/Layout',
      name: 'LayoutAndLogin',
      component: Layout
    }
  ]
});

router.beforeEach((to, from, next) => {
  const MoonStore = useMoonStore();
  if (MoonStore.isMoon) {
    document.body.classList.add('moon');
  } else {
    document.body.classList.remove('moon');
  }
  next();
});

export default router;
