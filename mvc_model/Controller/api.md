## 后端
### 端口
3000
### 数据库
+ 两张表
+ user 

| col | 类型 |
| --- | --- |
|user_id |INTEGER PRIMARY KEY AUTOINCREMENT,|   
|name  |TEXT DEFAULT NULL, | 
|nick_name | TEXT NOT NULL, | 
|password |TEXT DEFAULT NULL, | 
|mobile| TEXT DEFAULT NULL, | 
|online_status| INTEGER DEFAULT NULL,|  
|avatar |TEXT DEFAULT NULL,|  
|email| TEXT NOT NULL,|  
|session_history| TEXT DEFAULT NULL, | 
|chat_id |TEXT DEFAULT NULL,|  
|user_timestamp |TEXT DEFAULT NULL,|  
|emoji |TEXT DEFAULT NULL| 

+ chat

| col | 类型 |
| --- | --- |
|chat_id |INTEGER PRIMARY KEY AUTOINCREMENT, |
|send_id| INTEGER NOT NULL, |
|recipient_id |INTEGER NOT NULL,| 
|content |TEXT NOT NULL, |
|type |INTEGER NOT NULL DEFAULT 0,|
|status |INTEGER NOT NULL, |
|chat_timestamp| TEXT NOT NULL,|
|create_at |TEXT NOT NULL,|
|is_read| INTEGER NOT NULL, |
|avatar |TEXT DEFAULT NULL|

+ group

| col | 类型 |
| --- | --- |
|group_id| INTEGER PRIMARY KEY AUTOINCREMENT,|
|group_name |TEXT NOT NULL,|
|host_id INTEGER |NOT NULL,|
|member_list| TEXT NOT NULL,|
|time| TEXT NOT NULL,|
|history |TEXT DEFAULT NULL,|
|description| TEXT DEFAULT NULL,|
|avatar |TEXT DEFAULT NULL|

### middleware
+ cors：处理跨域请求
+ express-jwt：进行 JWT 认证    
```
// 验证成功后分发token
app.post('/api/login', (req, res) => {
  const { id, username, password } = req.body;

  // 验证用户数据
  ...

  // 生成 JWT
  const token = jwt.sign({ id: user.id, username: user.username },   jwtConfig.secret, { algorithm: 'HS256', expiresIn: '1h' });  
  res.json({ token });  
});
```
+ format_respond：格式化输出函数
```
//示例
res.format_respond('Success message', 200, { exampleData: 'exampleValue' });  
res.format_respond('sth wrong');
```








