import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost：3000', // 等待更换
  timeout: 10000,
});


export const getUserProfile = () => instance.get('/user/profile');
//示例
/*{
  "avatar": "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
  "email": "user@example.com",
  "name": "John Doe",
  "nick_name": "JD"
}*/

export const getUsersList = () => instance.get('/users');
//示例
/*[
  {
    "id": 1,
    "avatar": "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
    "name": "用户1"
  },
  {
    "id": 2,
    "avatar": "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
    "name": "用户2"
  }
]*/