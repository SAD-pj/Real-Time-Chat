<template>
  <div class="outer-container">
    <div class="common-layout" style="height: 85%;">
      <el-container style="height: 100%;">
        <el-aside width="33.33%" style="background-color: #d3dce6; display: flex; flex-direction: column;">
          <div class="sidebar-section" style="display: flex; flex-direction: column; height: 100%;">
            <div class="profile-section" style="flex: 1; display: flex; align-items: center; justify-content: center;">
              <el-avatar :src="userProfile.avatar" />
              <p class="email">{{ userProfile.email }}</p>
            </div>
            <div class="menu-section" style="flex: 7; display: flex; flex-direction: row; height: 100%;">
              <el-menu
                default-active="1"
                class="menu-list"
                style="width: 30%; display: flex; flex-direction: column;"
                @select="handleSelect"
              >
                <el-menu-item index="1">
                  <el-tooltip content="消息列表" placement="right">
                    <el-icon><ChatDotRound /></el-icon>
                  </el-tooltip>
                </el-menu-item>
                <el-menu-item index="2">
                  <el-tooltip content="好友信息" placement="right">
                    <el-icon><UserFilled /></el-icon>
                  </el-tooltip>
                </el-menu-item>
              </el-menu>
              <div class="menu-right" style="width: 70%; background-color: white; display: flex; flex-direction: column; justify-content: flex-start; border-right: 1px solid #e6e6e6;">
                <el-menu
                  default-active="1"
                  class="user-list"
                  style="width: 100%;"
                >
                  <el-menu-item v-for="friend in friendsList" :key="friend.id" :index="friend.id.toString()" class="user-menu-item">
                    <el-avatar shape="square" :size="50" :src="friend.avatar" style="margin-right: 10px;" />
                    <span>{{ friend.name }}</span>
                  </el-menu-item>
                </el-menu>
              </div>
            </div>
          </div>
        </el-aside>
        <router-view style="flex: 2; background-color: white; padding: 20px;"></router-view>
      </el-container>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ChatDotRound, UserFilled } from '@element-plus/icons-vue';
import { reactive, toRefs, onMounted } from 'vue';

const router = useRouter();

const state = reactive({
  userProfile: {
    avatar: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
    email: 'user@example.com'
  },
  friendsList: [
    { id: 1, avatar: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png', name: '用户1' },
    { id: 2, avatar: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png', name: '用户2' }
  ]
});

const { userProfile, friendsList } = toRefs(state);

const goToChat = () => {
  router.push({ name: 'ChatWindow' });
};

const goToFriends = () => {
  router.push({ name: 'FriendInformation' });
};

const handleSelect = (index) => {
  switch (index) {
    case '1':
      goToChat();
      break;
    case '2':
      goToFriends();
      break;
    default:
      break;
  }
};

// 模拟用户数据加载
onMounted(() => {
  // 这里可以替换为从后端 API 获取用户数据
  const simulatedUser = {
    avatar: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
    email: 'user@example.com'
  };
  const simulatedFriends = [
    { id: 1, avatar: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png', name: '用户1' },
    { id: 2, avatar: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png', name: '用户2' }
  ];

  state.userProfile = simulatedUser;
  state.friendsList = simulatedFriends;
});
</script>

<style scoped>
.outer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: calc(100vw - 100px); /* 调整宽度以适应滚动条 */
  background-color: #f0f2f5;
}

.common-layout {
  width: 85%;
  height: 85%;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: 1px solid #ccc; /* 添加边框 */
  overflow: hidden;
  transition: box-shadow 0.3s ease; /* 添加过渡效果 */
}

.common-layout:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* 鼠标悬停时的阴影效果 */
}

.sidebar-section {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: white;
}

.profile-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px; /* 增加顶部内边距 */
}

.email {
  margin-top: 10px; /* 增加邮箱与头像之间的间距 */
  font-size: 16px;
  color: #333;
}

.menu-section {
  flex: 7;
  display: flex;
  flex-direction: row;
  height: 100%;
  gap: 10px;
  padding: 10px 0;
}

.menu-list {
  width: 30%;
  display: flex;
  flex-direction: column;
}

.menu-right {
  width: 70%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 从顶部开始排列 */
  border-right: 1px solid #e6e6e6; /* 右侧边界线 */
  padding: 10px; /* 内边距 */
}

.user-list {
  width: 100%;
  border: none;
}

.user-menu-item {
  display: flex;
  align-items: center;
  padding: 40px 20px; /* 增加内边距以增大高度 */
}

.user-menu-item span {
  margin-left: 10px;
}
</style>