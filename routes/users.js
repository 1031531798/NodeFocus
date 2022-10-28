var express = require('express');
var userInfo = require('../project.json');
var router = express.Router();
const {writeLog} = require('../utils/log.js')
router.get('/info', function(req, res, next) {
  writeLog({
    type: 'success',
    msg: `请求获取用户数据`
  })
  res.send({
    data: userInfo,
    code: 200,
    msg: '成功'
  });
});

module.exports = router;
