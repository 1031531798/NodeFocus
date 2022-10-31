const { Console } = require('console');
const http = require('http');
const { Server } = require("socket.io");
const { RtcRoom } = require('../RTC/room/room');
const { stringify } = require('./utile');
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
        id: Math.floor(Math.random() * 10000000),
        createUser: socket.id,
        roomSize: 10
      }))
      socket.emit('roomList', stringify(roomList))
    })
    socket.on('join', (roomId) => {
      let flag = false
      let room
      if (roomId) {
        room = roomList.find(item => Number(item.id) === Number(roomId))
        if (room) {
          room.join(socket.id) && (flag = true)
        }
      }
      socket.emit('join', stringify({
        success: flag,
        data: room
      }))

    })
    socket.on('roomList', (data) => {
      socket.emit('roomList', stringify(roomList))

      console.log("用户"+socket.id+"登录");
    })
    
  })
  io.listen(3000);
}

module.exports = {initSocket}
