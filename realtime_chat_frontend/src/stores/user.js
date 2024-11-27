import { defineStore } from 'pinia'
// import { getUserProfile, getUsersList } from '@/api/api';
export const useUserStore = defineStore('user', {
  state: () => ({
    //模拟
    userProfile: {
      avatar: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      email: 'user@example.com'
    },
    usersList: [
      { id: 1, avatar: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png', name: '用户1' },
      { id: 2, avatar: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png', name: '用户2' }
    ],
    // 添加当前选中的好友
    // userProfile: {},
    // usersList: [],
    currentFriend: null

  }),

  actions: {
    // async fetchUserProfile() {
    //   try {
    //     const response = await getUserProfile();
    //     this.updateUserProfile(response.data);
    //   } catch (error) {
    //     console.error('Failed to fetch user profile:', error);
    //   }
    // },

    // async fetchUsersList() {
    //   try {
    //     const response = await getUsersList();
    //     this.updateFriendsList(response.data);
    //   } catch (error) {
    //     console.error('Failed to fetch users list:', error);
    //   }
    // },
    updateUserProfile(profile) {
      this.userProfile = profile
    },
    updateFriendsList(users) {
      this.usersList = users
    },
    // 设置当前选中的好友
    setCurrentFriend(userId) {
      this.currentFriend = this.usersList.find(user => user.id === userId)
    }
  }
})