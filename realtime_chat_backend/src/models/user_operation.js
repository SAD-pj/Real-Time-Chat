const sqlite3 = require('sqlite3').verbose();

function verifyUser(email, password, callback) {
  let db = new sqlite3.Database('user.db', (err) => {
    if (err) {
      return callback(err, null);
    }
    console.log('Connected to the SQLite database.');
  });

  db.serialize(() => {
    const stmt = db.prepare("SELECT * FROM user WHERE email = ?");
    stmt.get([email], (err, row) => {
      if (err) {
        return callback(err, null);
      }
      if (row) {
        const storedPassword = row.password; // 假设密码是第4列
        if (storedPassword === password) {
          callback(null, true); // 密码匹配
        } else {
          console.log("邮箱存在，密码错误");
          callback(null, false); // 密码不匹配
        }
      } else {
        console.log("所查找的邮箱不存在");
        callback(null, false); // 邮箱不存在
      }
      stmt.finalize();
    });
  });

  db.close();
}

使用示例
verifyUser('test@example.com', 'testpassword', (err, isValid) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('验证结果:', isValid);
  }
});