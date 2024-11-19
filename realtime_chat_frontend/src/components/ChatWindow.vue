<template>
  <div class="chat-container">
    <!-- 聊天头部 -->
    <div class="chat-header">
      <div class="header-info">
        <span class="friend-name">{{ userStore.currentFriend?.name || '请选择聊天对象' }}</span>
      </div>
    </div>

    <!-- 聊天内容区 -->
    <div class="chat-content" ref="messageContainer">
      <template v-if="userStore.currentFriend">
        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="['message-item', message.isSelf ? 'message-right' : 'message-left']"
        >
          <div class="message-user">
            <el-avatar
              :size="40"
              :src="message.isSelf ? userStore.userProfile.avatar : userStore.currentFriend.avatar"
            />
          </div>
          <div class="message-bubble">
            {{ message.content }}
          </div>
        </div>
      </template>
      <div v-else class="no-chat">
        <el-empty description="请选择一个聊天对象" />
      </div>
    </div>

    <!-- 聊天工具栏 -->
    <div class="chat-toolbar">
      <div class="toolbar-icons">
        <el-button class="toolbar-btn" :icon="SmileFilled" text />
        <el-button class="toolbar-btn" :icon="PictureFilled" text />
        <el-button class="toolbar-btn" :icon="FolderFilled" text />
      </div>
    </div>

    <!-- 聊天输入框 -->
    <div class="chat-editor">
      <el-input
        v-model="inputMessage"
        type="textarea"
        :rows="4"
        placeholder="请输入消息"
        resize="none"
        @keyup.enter.prevent="sendMessage"
      />
      <div class="editor-bottom">
        <el-button
          type="primary"
          :disabled="!userStore.currentFriend || !inputMessage.trim()"
          @click="sendMessage"
        >
          发送
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/user'
import { useChatStore } from '@/stores/chat'
import { SmileFilled, PictureFilled, FolderFilled } from '@element-plus/icons-vue'

const userStore = useUserStore()
const chatStore = useChatStore()
const inputMessage = ref('')
const messageContainer = ref(null)

// 使用 computed 获取当前聊天消息
const messages = computed(() => {
  if (!userStore.currentFriend) return []
  return chatStore.messages[userStore.currentFriend.id] || []
})

const sendMessage = () => {
  if (!inputMessage.value.trim() || !userStore.currentFriend) return

  // 添加新消息
  if (!chatStore.messages[userStore.currentFriend.id]) {
    chatStore.messages[userStore.currentFriend.id] = []
  }

  chatStore.messages[userStore.currentFriend.id].push({
    content: inputMessage.value.trim(),
    time: new Date().toLocaleTimeString(),
    isSelf: true
  })

  inputMessage.value = ''
  scrollToBottom()
}

const scrollToBottom = () => {
  setTimeout(() => {
    if (messageContainer.value) {
      messageContainer.value.scrollTop = messageContainer.value.scrollHeight
    }
  }, 0)
}
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f5f7f9;
}

.chat-header {
  height: 60px;
  padding: 0 20px;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
}

.header-info {
  flex: 1;
}

.friend-name {
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.chat-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.message-item {
  display: flex;
  margin-bottom: 20px;
  padding: 0 40px;
}

.message-left {
  flex-direction: row;
}

.message-right {
  flex-direction: row-reverse;
}

.message-user {
  margin: 0 10px;
}

.message-bubble {
  max-width: 60%;
  padding: 12px 16px;
  border-radius: 4px;
  word-break: break-word;
  font-size: 14px;
  line-height: 1.4;
}

.message-left .message-bubble {
  background-color: #fff;
  margin-left: 10px;
}

.message-right .message-bubble {
  background-color: #95ec69;
  margin-right: 10px;
}

.chat-toolbar {
  padding: 10px 20px;
  background-color: #fff;
  border-top: 1px solid #e6e6e6;
}

.toolbar-icons {
  display: flex;
  gap: 10px;
}

.toolbar-btn {
  font-size: 20px;
  color: #666;
}

.chat-editor {
  background-color: #fff;
  padding: 10px 20px;
}

.chat-editor :deep(.el-textarea__inner) {
  border: none;
  resize: none;
  box-shadow: none;
  padding: 10px 0;
}

.editor-bottom {
  display: flex;
  justify-content: flex-end;
  padding: 10px 0;
}

.no-chat {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 滚动条样式 */
.chat-content::-webkit-scrollbar {
  width: 6px;
}

.chat-content::-webkit-scrollbar-thumb {
  background-color: #ddd;
  border-radius: 3px;
}

.chat-content::-webkit-scrollbar-track {
  background-color: transparent;
}
</style>