<template>
  <div class="login-container">
    <h1 class="bounce">快来 Chat</h1>
    <form @submit.prevent="handleLogin">
      <div class="input-group">
        <el-icon class="icon"><User /></el-icon>
        <input type="email" placeholder="请输入登录邮箱" v-model="email" :class="{ error: emailError }" @input="clearError('email')" required />
        <p v-if="emailError" class="error-message">{{ emailError }}</p>
      </div>
      <div class="input-group">
        <el-icon class="icon"><Lock /></el-icon>
        <input type="password" placeholder="请输入登录密码" v-model="password" :class="{ error: passwordError }" @input="clearError('password')" required />
        <p v-if="passwordError" class="error-message">{{ passwordError }}</p>
      </div>
      <div class="buttons">
        <router-link to="/register" class="register-button">立即注册</router-link>
        <button type="submit" class="login-button">登录</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { ElIcon, User, Lock } from 'element-plus';

export default {
  components: {
    ElIcon,
    User,
    Lock
  },
  setup() {
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

    const handleLogin = () => {
      let isValid = true;

      if (!validateEmail(email.value)) isValid = false;
      if (!validatePassword(password.value)) isValid = false;

      if (isValid) {
        // 执行登录操作
        console.log('尝试登录', { email: email.value, password: password.value });
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
.login-container {
  max-width: 400px;
  margin: 200px auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #fff;
  transition: transform 0.3s, box-shadow 0.3s; /* 添加过渡效果 */
}

.login-container:hover {
  transform: translateY(-5px); /* 悬浮效果 */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* 更深的阴影效果 */
}

.input-group {
  position: relative;
  margin-bottom: 20px;
}

.icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  font-size: 18px;
  line-height: 1em; /* 确保垂直居中 */
}

.input-group input {
  width: calc(100% - 40px); /* 减去左侧图标的宽度 */
  height: 40px;
  padding-left: 40px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
}

.buttons {
  text-align: center; /* 让子元素（如按钮）在父容器中水平居中 */
}

.register-button {
  width: 100%;
  height: 40px;
  background-color: transparent;
  border: none;
  color: #49a824;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 16px;
  text-align: center; /* 居中文本 */
}

.register-button:hover {
  color: #6cbb69;
}

.login-button {
  width: 100%;
  height: 40px;
  background-color: #1cb219;
  border: none;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 16px;
  margin-top: 10px;
}

.login-button:hover {
  background-color: #4bce47;
}

/* 添加上下跳动效果 */
.bounce {
  text-align: center;
  color: #14a814;
  animation: bounce 1s infinite;
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