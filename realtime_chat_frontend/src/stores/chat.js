import { defineStore } from 'pinia'

export const useChatStore = defineStore('chat', {
  state: () => ({
    messages: {}  // 以好友ID为key存储消息
  }),

  actions: {
    // 后续会添加 socket 相关的方法
  }
})