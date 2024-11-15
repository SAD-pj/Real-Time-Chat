<template>
  <div class="friend-information">
    <!-- 头像 -->
    <el-avatar :size="100" :icon="UserFilled" class="avatar-up" />

    <!-- 用户信息 -->
    <div class="user-info">
      <p>Email: {{ userProfile.email }}</p>
      <p>Account: {{ userProfile.account }}</p>

      <!-- 自定义按钮 -->
      <el-button type="primary" round @click="sendMessage" class="send-message-btn">发消息</el-button>
    </div>
  </div>
</template>

<script setup>
import { reactive, toRefs } from 'vue';
import { UserFilled } from '@element-plus/icons-vue';

const state = reactive({
  userProfile: {
    email: '456@lingshulian.com',
    account: 'cacb9f21656613953063'
  }
});

const { userProfile } = toRefs(state);

function sendMessage() {
  console.log('点击了发送消息按钮');
}
</script>

<style scoped>
.friend-information {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 使容器高度占满整个视口 */
  padding: 20px;
  background-color: white;
}

.user-info {
  margin-top: 20px;
  text-align: center;
}

.avatar-up {
  transform: translateY(-10px); /* 调整此值以改变头像的垂直位置 */
}

.send-message-btn {
  width: 200px; /* 设置固定宽度 */
}
</style>