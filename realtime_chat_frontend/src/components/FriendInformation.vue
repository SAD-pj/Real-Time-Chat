<template>
  <div class="friend-information">
    <!-- 头像 -->
    <el-avatar :size="100" :icon="UserFilled" class="avatar-up" />

    <!-- 用户信息 -->
    <div class="user-info">
      <p>Email: {{ email }}</p>
      <p>Account: {{ account }}</p>

      <!-- 自定义按钮 -->
      <el-button type="primary" round @click="sendMessage" class="send-message-btn">发消息</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { UserFilled } from '@element-plus/icons-vue';

const email = ref('456@lingshulian.com');
const account = ref('cacb9f21656613953063');

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