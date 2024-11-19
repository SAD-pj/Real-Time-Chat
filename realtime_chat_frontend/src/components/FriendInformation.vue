<template>
  <div class="friend-information">
    <div v-if="userStore.currentFriend">
      <!-- 头像 -->
      <el-avatar
        :size="100"
        :src="userStore.currentFriend.avatar"
        :icon="UserFilled"
        class="avatar-up"
      />

      <!-- 用户信息 -->
      <div class="user-info">
        <p>用户名: {{ userStore.currentFriend.name }}</p>
        <p>ID: {{ userStore.currentFriend.id }}</p>

        <!-- 自定义按钮 -->
        <el-button
          type="primary"
          round
          @click="handleSendMessage"
          class="send-message-btn"
        >
          发消息
        </el-button>
      </div>
    </div>
    <div v-else class="no-friend-selected">
      <el-empty description="请选择一个好友查看详细信息" />
    </div>
  </div>
</template>

<script setup>
import { UserFilled } from '@element-plus/icons-vue';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

const handleSendMessage = () => {
  if (userStore.currentFriend) {
    // 跳转到聊天窗口
    router.push({ name: 'ChatWindow' });
  }
};
</script>

<style scoped>
.friend-information {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;  /* 改为 100% 而不是 100vh */
  padding: 20px;
  background-color: white;
}

.user-info {
  margin-top: 20px;
  text-align: center;
}

.avatar-up {
  transform: translateY(-10px);
}

.send-message-btn {
  width: 200px;
  margin-top: 20px;
}

.no-friend-selected {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>