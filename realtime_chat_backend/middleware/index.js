//保护域名未设置
//前端部署端口未知
const express = require("express")

const cors = require('cors')
const { expressjwt } = require('express-jwt')
const jwtConfig = {
  secret: 'realtime_chat_group_7',
  algorithms: ['HS256']
};
const joi = require('joi')

// 格式化响应
const format_respond = (req, res, next) => {
  // code 默认值为 400，表示失败的情况
  res.format_respond = function (err, code = 400, data) {
    const datas = {
      code,
      message: err instanceof Error ? err.message : err,
      data
    }
    if(!data) delete datas.data
    if(code === 200)
      res.send(datas)
    else
      res.status(code).send(datas)
  }
  next()
}
const errAuth = ((err, req, res, next) => {
  if (err instanceof joi.ValidationError) return res.format_respond(err)
  if (err.name === 'UnauthorizedError') return res.format_respond('身份认证失败！', 401)
  res.format_respond(err)
})
module.exports = [cors(), express.json(), express.urlencoded({ extended: true }), format_respond,
    expressjwt(jwtConfig).unless({ path: [''] })]