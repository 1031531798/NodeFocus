var fs = require('fs');
var moment = require('moment');
function writeLog (config) {
  const {type, msg} = config
  let basePath = process.cwd()
  let text = 
  `
    发起时间：${moment(new Date().getTime()).format('YYYY-MM-DD h:mm:ss')};${msg}
  `
  if (type === 'success') {
    fs.appendFileSync(basePath + '\\log\\success.txt', text, error => {
      if (error) return console.log("写入文件失败,原因是" + error.message);
      console.log("写入成功");
    })
  }
}

exports.writeLog = writeLog