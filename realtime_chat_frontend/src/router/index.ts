import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/view/LoginView.vue';
import Chat from '@/view/ChatView.vue';
import ChatWindow from '@/components/ChatWindow.vue';
import FriendInformation from "@/components/FriendInformation.vue";

const routes= [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    children: [
      {
        path: '',
        name: 'ChatWindow',
        component: ChatWindow
      },
      {
        path: 'friendinformation',
        name: 'FriendInformation',
        component: FriendInformation
      }
    ]
  }
  // 其他路由配置
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;