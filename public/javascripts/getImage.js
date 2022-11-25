var fs = require('fs');
module.exports = function (req,res,next) {
  if (req.url.substr(0, 7) === '/images') {
    let basePath = process.cwd();
    fs.stat(basePath + req.url, (err, stat) => {
      if (err || !stat.isFile()) {
          res.writeHead(404);
          res.end('Not Image');
          console.error('请求图片不存在！')
          return
      }
      if (req.url.substr(-4) === '.jpg') {
          getFileByName(basePath + req.url, 'image/jpg');
      }else if (req.url.substr(-4) === '.png') {
          getFileByName(basePath + req.url, 'image/png');
      }
    })
    function getFileByName (path, type) {
      res.writeHead(200,{'Content-Type': type});
      fs.createReadStream(path).pipe(res);
      console.error(`请求${path}图片成功。` + new Date())
    }
  }
}
