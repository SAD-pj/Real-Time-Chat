<template>
  <div class="login-page">
    <div class="login-container">
      <h1 class="bounce">登录</h1>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <div class="input-with-icon">
            <el-icon class="icon"><User /></el-icon>
            <input type="email" placeholder="请输入登录邮箱" v-model="email" :class="{ error: emailError }" @input="clearError('email')" required />
          </div>
          <p v-if="emailError" class="error-message">{{ emailError }}</p>
        </div>
        <div class="input-group">
          <div class="input-with-icon">
            <el-icon class="icon"><Lock /></el-icon>
            <input type="password" placeholder="请输入登录密码" v-model="password" :class="{ error: passwordError }" @input="clearError('password')" required />
          </div>
          <p v-if="passwordError" class="error-message">{{ passwordError }}</p>
        </div>
        <div class="buttons">
          <router-link to="/register" class="register-button">立即注册</router-link>
          <button type="submit" class="login-button">登录</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ElIcon, User, Lock } from 'element-plus';
import axios from 'axios';

export default {
  components: {
    ElIcon,
    User,
    Lock
  },
  setup() {
    const router = useRouter();
    const email = ref('');
    const password = ref('');
    const emailError = ref('');
    const passwordError = ref('');

    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(email)) {
        emailError.value = '请输入有效的邮箱地址';
        return false;
      }
      emailError.value = '';
      return true;
    };

    const validatePassword = (password) => {
      if (password === '') {
        passwordError.value = '密码不能为空';
        return false;
      }
      passwordError.value = '';
      return true;
    };

    const clearError = (field) => {
      if (field === 'email') emailError.value = '';
      if (field === 'password') passwordError.value = '';
    };

    const handleLogin = async () => {
      let isValid = true;

      if (!validateEmail(email.value)) isValid = false;
      if (!validatePassword(password.value)) isValid = false;

      if (isValid) {
        try {
          const response = await axios.post('/api/login', {
            email: email.value,
            password: password.value
          });

          if (response.data.success) {
            router.push('/chat');
          } else {
            alert(response.data.message || '登录失败，请检查您的邮箱和密码');
          }
        } catch (error) {
          console.error('登录请求失败:', error);
          alert('网络请求出错，请稍后再试');
        }
      }
    };

    return {
      email,
      password,
      emailError,
      passwordError,
      handleLogin,
      clearError
    };
  }
};
</script>

<style scoped>
:root {
  --primary-color: #1cb219;
  --text-color: #333;
  --border-color: #ddd;
  --background-color: rgba(255, 255, 255, 0.8);
  --shadow-color: rgba(0, 0, 0, 0.1);
}

.login-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../image/backgroundimage.png'); /* 设置背景图片路径 */
  background-size: cover; /* 背景图片覆盖整个元素 */
  background-position: center; /* 背景图片居中 */
  background-repeat: no-repeat; /* 不重复背景图片 */
}

.login-container {
  width: 400px;
  height: 450px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px var(--shadow-color);
  border-radius: 10px;
  background-color: var(--background-color);
  backdrop-filter: blur(3px); /* 模糊背景 */
  border: 2px solid #dad8d8; /* 添加白色边框 */
  transition: transform 0.3s, box-shadow 0.3s;
}

.login-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px var(--shadow-color);
}

.bounce {
  margin: 40px;
  text-align: center;
  color: white;
  //animation: bounce 1s infinite;
}

.input-group {
  margin-bottom: 30px;
}

.input-with-icon {
  display: flex;
  align-items: center;
  position: relative;
  padding: 5px;
  width: 100%;
}
.icon {
  color: #999;
  font-size: 18px;
  margin-right: 10px;
}

.input-with-icon input {
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  font-size: 16px;
  padding-left: 10px; /* 增加左侧内边距以便图标不重叠 */
  box-sizing: border-box;
  background: transparent; /* 使输入框背景透明 */
  color: white; /* 设置输入框中文本的颜色为黑色 */
}

.input-with-icon::before {
  content: '';
  position: absolute;
  top: -2px; /* 上方横线的位置 */
  left: 0;
  right: 0;
  height: 1px;
}

.input-with-icon::after {
  content: '';
  position: absolute;
  bottom: -2px; /* 下方横线的位置 */
  left: 0;
  right: 0;
  height: 1px;
  background-color: white; /* 白色横线 */
}

.buttons {
  text-align: center;
}

.register-button {
  width: 100%;
  height: 40px;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 16px;
  text-align: center;
}

.register-button:hover {
  color: white;
}

.login-button {
  width: 100%;
  height: 50px;
  background-color: white;
  border: none;
  color: black;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 16px;
  margin-top: 40px;
}

.login-button:hover {
  background-color: white;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}

.error {
  border-color: red;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}
</style>