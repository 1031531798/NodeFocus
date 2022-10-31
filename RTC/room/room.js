class RtcRoom {
  constructor ({id, createUser, roomSize}) {
    this.id = id
    this.createUser = createUser
    this.roomSize = roomSize
    this.createDate = new Date().getTime()
    this.roomPerson = new Map()
  }

  join (user) {
    if (this.roomPerson.get(user)) {
      return false
    }else{
      this.roomPerson.set(user, {
        userId: user,
        joinTime: new Date().getTime()
      })
      return true
    }
  }

  exit (user) {
    this.roomPerson.delete(user)
    return '退出成功'
  }
}

module.exports = {RtcRoom}