<template>
  <div id="app">
    <MessageFolw
      class="msg-box"
      :msgList="messageList"
      @early-data="updataMsgList(true)"
      @new-data="updataMsgList(false)"
    />
  </div>
</template>

<script>
import MessageFolw from "./components/MessageFolw";
import "@/assets/style/index.css";
import { messageList, newMessage, earlyMessage } from "@/mock";

export default {
  name: "App",
  components: {
    MessageFolw
  },
  data() {
    return {
      messageList: [],
      isPadding: false
    };
  },
  mounted() {
    this.fetchMsgList();
  },
  methods: {
    // 获取聊天信息
    fetchMsgList() {
      // 模拟接口请求
      setTimeout(() => {
        this.messageList = messageList;
      }, 10);
    },
    // 获取新数据
    updataMsgList(isReverse) {
      // 节流
      if (!this.isPadding) {
        this.isPadding = true;
        // 模拟接口请求
        setTimeout(() => {
          // 是否请求之前的聊天
          if (isReverse) {
            this.messageList = earlyMessage.concat(this.messageList);
          } else {
            this.messageList = this.messageList.concat(newMessage);
          }
          this.isPadding = false;
        }, 500);
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.msg-box {
  margin: 0 auto;
  width: 350px;
  height: 550px;
  border: 1px solid #000;
}
</style>
