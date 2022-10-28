const { Console } = require('console');
const http = require('http');
const { Server } = require("socket.io");
function initSocket (app) {
  const server = http.createServer(app);
  const io = new Server(server, { cors: {
    credentials: true,
    // 跨域过滤源
    origin: ["http://localhost:8796", 'http://localhost:3100', 'http://localhost:8081'],
  } });
  io.on('connection', (socket) => {
    console.log('用户已连接socket');
    socket.on('disconnect',()=>{
      //监听用户断开事件
         console.log("用户"+socket.id+"断开连接");
     });
     console.log("用户"+socket.id+"连接");
	//监听msg事件（这个是自定义的事件）
        socket.emit('msg','你好浏览器');
     })
  io.listen(3000);
}

module.exports = {initSocket}
