import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userProfile: {
      avatar: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      email: 'user@example.com'
    },
    friendsList: [
      { id: 1, avatar: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png', name: '用户1' },
      { id: 2, avatar: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png', name: '用户2' }
    ],
    // 添加当前选中的好友
    currentFriend: null
  }),

  actions: {
    updateUserProfile(profile) {
      this.userProfile = profile
    },
    updateFriendsList(friends) {
      this.friendsList = friends
    },
    // 设置当前选中的好友
    setCurrentFriend(friendId) {
      this.currentFriend = this.friendsList.find(friend => friend.id === friendId)
    }
  }
})