import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/view/LoginView.vue';
import Chat from '@/view/ChatView.vue';
import Register from '@/components/ReGister.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  // 其他路由配置
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;