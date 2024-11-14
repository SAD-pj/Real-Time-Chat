<template>
  <div class="register-container">
    <h1 class="bounce">快来 Chat</h1>
    <form @submit.prevent="handleSubmit">
      <div class="input-group">
        <div class="input-with-icon">
          <el-icon class="icon"><User /></el-icon>
          <input type="email" placeholder="请输入电子邮箱" v-model="email" :class="{ error: emailError }" @input="clearError('email')" required />
        </div>
        <p v-if="emailError" class="error-message">{{ emailError }}</p>
      </div>
      <div class="input-group">
        <div class="input-with-icon">
          <el-icon class="icon"><Lock /></el-icon>
          <input type="password" placeholder="请输入密码" v-model="password" :class="{ error: passwordError }" @input="clearError('password')" required />
        </div>
        <p v-if="passwordError" class="error-message">{{ passwordError }}</p>
      </div>
      <div class="input-group">
        <div class="input-with-icon">
          <el-icon class="icon"><Unlock /></el-icon>
          <input type="password" placeholder="请再次输入密码" v-model="confirmPassword" :class="{ error: confirmPasswordError }" @input="clearError('confirmPassword')" required />
        </div>
        <p v-if="passwordMismatch" class="error-message">两次输入的密码不一致</p>
      </div>
      <div class="buttons">
        <router-link to="/" class="register-button">立即登录</router-link>
        <button type="submit" class="login-button">注册</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { ElIcon, User, Lock, Unlock } from 'element-plus';
import axios from 'axios'; // 导入 Axios

export default {
  components: {
    ElIcon,
    User,
    Lock,
    Unlock
  },
  setup() {
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const emailError = ref('');
    const passwordError = ref('');
    const confirmPasswordError = ref('');
    const passwordMismatch = ref(false);

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

    const validateConfirmPassword = (confirmPassword) => {
      if (confirmPassword === '') {
        confirmPasswordError.value = '确认密码不能为空';
        return false;
      }
      confirmPasswordError.value = '';
      return true;
    };

    const clearError = (field) => {
      if (field === 'email') emailError.value = '';
      if (field === 'password') passwordError.value = '';
      if (field === 'confirmPassword') confirmPasswordError.value = '';
      passwordMismatch.value = false;
    };

    const handleSubmit = async () => {
      let isValid = true;

      if (!validateEmail(email.value)) isValid = false;
      if (!validatePassword(password.value)) isValid = false;
      if (!validateConfirmPassword(confirmPassword.value)) isValid = false;

      if (password.value !== confirmPassword.value) {
        passwordMismatch.value = true;
        isValid = false;
      }

      if (isValid) {
        try {
          const response = await axios.post('/api/register', {
            email: email.value,
            password: password.value
          });

          if (response.data.success) {
            // 注册成功，跳转到登录页面
            alert('注册成功，请登录');
            // 可以在这里添加跳转逻辑，例如：router.push('/login');
          } else {
            // 注册失败，显示错误信息
            alert(response.data.message || '注册失败，请检查您的信息');
          }
        } catch (error) {
          // 处理请求错误
          console.error('注册请求失败:', error);
          alert('网络请求出错，请稍后再试');
        }
      }
    };

    return {
      email,
      password,
      confirmPassword,
      emailError,
      passwordError,
      confirmPasswordError,
      passwordMismatch,
      handleSubmit,
      clearError
    };
  }
};
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 200px auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #fff;
  transition: transform 0.3s, box-shadow 0.3s; /* 添加过渡效果 */
}

.register-container:hover {
  transform: translateY(-5px); /* 悬浮效果 */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* 更深的阴影效果 */
}

.input-group {
  margin-bottom: 20px;
}

.input-with-icon {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 5px;
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
  padding: 0;
  box-sizing: border-box; /* 确保内边距不会影响宽度 */
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