const { stringify } = require("../../utils/utile")

class RtcRoom {
  constructor ({id, createUser, roomSize}) {
    this.id = id
    this.createUser = createUser
    this.roomSize = roomSize
    this.createDate = new Date().getTime()
    this.roomPerson = new Map()
    this.personNum = 0
    this.messageList = []
  }

  getRoomData () {
    const persons = []
    for (const value of this.roomPerson.values()) {
      persons.push(value)
    }
    return {
      ...this,
      roomPerson: persons
    }
  }

  join (user) {
    if (this.roomPerson.get(user)) {
      return false
    }else{
      this.roomPerson.set(user, {
        userId: user,
        joinTime: new Date().getTime()
      })
      this.personNum = this.roomPerson.size
      return true
    }
  }

  exit (user) {
    this.roomPerson.delete(user)
    this.personNum = this.roomPerson.size
    return true
  }

  addMessage (message) {
    this.messageList.push(message)
  }
}

module.exports = {RtcRoom}