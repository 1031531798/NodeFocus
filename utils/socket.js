const { Console } = require('console');
const http = require('http');
const { Server } = require("socket.io");
const { RtcRoom } = require('../RTC/room/room');
const { stringify } = require('./utile');
const roomList = []
const userRoom = {}
function initSocket (app) {
  const server = http.createServer(app);
  const io = new Server(server, { cors: {
    credentials: true,
    // 跨域过滤源
    origin: ["http://localhost:8796", 'http://localhost:3100', 'http://localhost:8080', 'http://192.168.19.129:8080'],
  } });
  io.on('connection', (socket) => {
    console.log('用户已连接socket');
    socket.on('disconnect',()=>{
      //监听用户断开事件
      console.log("用户"+socket.id+"断开连接", );
      // 清除 房间内的用户
      const roomId = socket.data.roomId
      const room = roomList.find(item => item.id === roomId)
      room && room.exit(socket.id)
      io.in(socket.id).disconnectSockets()
    });
     // 连接就调用登录
     //监听login事件 返回socket用户id
     socket.on('login', (data) => {
       console.log("用户"+socket.id+"登录");
       socket.emit('login', socket.id)
    })
    socket.on('createRoom', (data) => {
      console.log('创建房间')
      const room = new RtcRoom({
        id: Math.floor(Math.random() * 10000000),
        createUser: socket.id,
        roomSize: 10
      })
      roomList.push(room)
      // 加入指定房间
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
      // 给对应房间 推送事件
      if (flag) {
        io.in(socket.id).socketsJoin(roomId)
        io.to(roomId).emit('roomChange', stringify(room.getRoomData()))
        // 保存进入的房间id
        socket.data.roomId = roomId
      }
      socket.emit('join', stringify({
        success: flag,
        data: room ? room.getRoomData(socket) : {}
      }))
    })
    socket.on('exit', (roomId) => {
      let flag = false
      let room
      if (roomId) {
        room = roomList.find(item => Number(item.id) === Number(roomId))
        if (room) {
          room.exit(socket.id) && (flag = true)
        }
      }
      // 给对应房间 推送事件
      if (flag) {
        socket.leave(roomId)
        io.to(roomId).emit('roomChange', stringify(room.getRoomData()))
      }
      console.log('离开房间',socket.rooms)
    })
    socket.on('roomList', (data) => {
      socket.emit('roomList', stringify(roomList))
    })
    socket.on('offer', data=>{
      socket.to(data.roomid).emit('offer',data);
    });
    socket.on('answer', data=>{
        socket.to(data.roomid).emit('answer',data);
    });
    socket.on('__ice_candidate', data=>{
        socket.to(data.roomid).emit('__ice_candidate',data);
    });
  })
  io.listen(3000);
}

module.exports = {initSocket}
