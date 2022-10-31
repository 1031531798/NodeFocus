const { Console } = require('console');
const http = require('http');
const { Server } = require("socket.io");
const { RtcRoom } = require('../RTC/room/room');
const roomList = []
function initSocket (app) {
  const server = http.createServer(app);
  const io = new Server(server, { cors: {
    credentials: true,
    // 跨域过滤源
    origin: ["http://localhost:8796", 'http://localhost:3100', 'http://localhost:8080'],
  } });
  io.on('connection', (socket) => {
    console.log('用户已连接socket');
    socket.on('disconnect',()=>{
      //监听用户断开事件
      console.log("用户"+socket.id+"断开连接");
    });
     // 连接就调用登录
    socket.emit('login', socket.id)
     //监听login事件 返回socket用户id
    socket.on('login', (data) => {
      console.log("用户"+socket.id+"登录");
    })
    socket.on('createRoom', (data) => {
      console.log('创建房间')
      roomList.push(new RtcRoom({
        id: Math.random() * 10000000,
        createUser: socket.id,
        roomSize: 10
      }))
      socket.emit('roomList', JSON.stringify(roomList))
    })
    socket.on('join', () => {

    })
    socket.on('roomList', (data) => {
      socket.emit('roomList', JSON.stringify(roomList))

      console.log("用户"+socket.id+"登录");
    })
    
  })
  io.listen(3000);
}

module.exports = {initSocket}
