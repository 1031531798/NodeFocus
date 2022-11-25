var express = require('express');
var router = express.Router();
var fs = require('fs');
var formidable = require('formidable');
let imagePath = process.cwd() + '\\public\\images\\';
var {writeLog} = require('../utils/log.js')
router.get('/getImages/*', function(req, res, next) {
  let ImageName = req.url.slice(11);
  fs.stat(imagePath + ImageName, (err, stat) => {
    if (err || !stat.isFile()) {
        res.writeHead(404);
        writeLog({
          type: 'error',
          msg: '404 未找到请求图片！请求路径：/file/getImages'
        })
        res.end('Not Image');
        console.error('请求图片不存在！')
        return
    }
    if (req.url.substr(-4) === '.jpg') {
        getFileByName(imagePath + ImageName, 'image/jpg');
    }else if (req.url.substr(-4) === '.png') {
        getFileByName(imagePath + ImageName, 'image/png');
    }
    writeLog({
      type: 'success',
      msg: `200 请求图片${ImageName}成功 请求路径：/file/getImages`
    })
  })
  function getFileByName (path, type) {
    res.writeHead(200,{'Content-Type': type});
    fs.createReadStream(path).pipe(res);
    console.error(`请求${ImageName}成功。`)
  }
});

router.post('/upload', function(req, res, next) {
  let form = new formidable.IncomingForm();
  form.parse(req,(err,files,file)=>{
    let read = fs.createReadStream(file.file.path);
    // 写入的时候，文件夹的名称如果不存在，则会写入失败了；需要手动创建
    let write=fs.createWriteStream(imagePath + file.file.name);
    read.pipe(write); // pipe 管道传输
    res.send({
      msg: '上传成功',
      code: 0
    }); 
  })
  
  // fs.stat(imagePath + req.url, (err, stat) => {
  //   console.error(req)
  //   if (err || !stat.isFile()) {
  //       res.send({
  //         code: 200,
  //         msg: '请求成功',
  //         data: true
  //       });
  //       return
  //   }else {
  //     res.writeHead(500);
  //     res.send('文件已存在');
  //   }
  // })
  function saveFileByName (path, name) {
    res.writeHead(200,{'Content-Type': type});
    fs.createReadStream(path).pipe(res);
    console.log(`保存${path}图片成功。` + new Date())
  }
});
module.exports = router;
