var express = require('express');
var router = express.Router();
var fs = require('fs');
let imagePath = process.cwd() + '\\public\\images\\';
var {useMysql} = require('../utils/mysql.js')
/* GET home page. */
// 获取所有图片列表
router.get('/list', function (req, res, next) {
  fs.readdir(imagePath, (err, files) => {
    console.log(files)
    res.send(files);
  })
})

module.exports = router;
