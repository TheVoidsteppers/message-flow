// 头像
const avatar1 = 'http://www.520touxiang.com/uploads/allimg/202004111223/aph4ug1vd1r.jpg'
const avatar2 = "http://www.520touxiang.com/uploads/allimg/202004111223/tre4xsmvup3.jpg"

// 聊天图片
const msgImg1 = "https://img04.sogoucdn.com/app/a/100520024/c22fcaf66b1790835d9b41dede8986bf"
const msgImg2 = "https://cdn.pixabay.com/photo/2020/06/14/22/46/the-caucasus-5299607__340.jpg"

// 聊天数据1
const messageList = [
  {
    type: "system",
    msg: "'张三'邀请'李四'加入群聊",
    ctime: new Date().toLocaleString()
  },
  {
    type: "owner",
    msg: "hello 张三",
    msgType: "text",
    avatar: avatar1,
    ctime: new Date().toLocaleString()
  },
  {
    type: "other",
    msg: "hi",
    msgType: "text",
    avatar: avatar2,
    ctime: new Date().toLocaleString()
  },
  {
    type: "system",
    msg: "'张三'撤回了一条信息",
    ctime: new Date().toLocaleString()
  },
  {
    type: "owner",
    msg: "很长".repeat(100) + "的文字",
    msgType: "text",
    avatar: avatar1,
    ctime: new Date().toLocaleString()
  },
  {
    type: "other",
    msg: "很长".repeat(100) + "的文字",
    msgType: "text",
    avatar: avatar1,
    ctime: new Date().toLocaleString()
  },
  {
    type: "owner",
    msg: msgImg1,
    msgType: "image",
    avatar: avatar1,
    ctime: new Date().toLocaleString()
  },
  {
    type: "system",
    msg: "李四撤回了一条信息",
    ctime: new Date().toLocaleString()
  },
  {
    type: "owner",
    msg: msgImg2,
    msgType: "image",
    avatar: avatar1,
    ctime: new Date().toLocaleString()
  }
]

// 聊天数据2
const newMessage = [
  {
    type: "other",
    msg: "新加载的数据",
    msgType: "text",
    avatar: avatar2,
    ctime: new Date().toLocaleString()
  },
]

// 聊天数据3
const earlyMessage = [
  {
    type: "other",
    msg: "之前的数据",
    msgType: "text",
    avatar: avatar1,
    ctime: new Date().toLocaleString()
  },
]

export {
  messageList,
  newMessage,
  earlyMessage
}