class RtcRoom {
  constructor ({id, createUser, roomSize}) {
    this.id = id
    this.createUser = createUser
    this.roomSize = roomSize
    this.createDate = new Date().getTime()
    this.roomPerson = new Map()
  }

  join (user) {
    if (this.roomPerson.get(user.id)) {
      return '已在房间 不可重复加入'
    }else{
      this.roomPerson.set(user.id, user)
      return '加入成功'
    }
  }

  exit (user) {
    this.roomPerson.delete(user.id)
    return '退出成功'
  }
}

module.exports = {RtcRoom}