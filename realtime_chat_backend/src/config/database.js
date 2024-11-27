module.exports = {
  development: {
    username: '',
    password: '',
    database: 'user.db',
    host: __dirname, // 这将确保路径是相对于当前文件的
    dialect: 'sqlite',
    logging: false
  },
  production: {
    // 生产环境的数据库配置
  }
};