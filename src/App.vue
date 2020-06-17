<template>
  <div id="app">
    <MessageFolw class="msg-box" :msgList="messageList" />
  </div>
</template>

<script>
import MessageFolw from "./components/MessageFolw";
import "@/assets/style/index.css";

export default {
  name: "App",
  components: {
    MessageFolw
  },
  data() {
    return {
      messageList: [
        {
          type: "owner",
          msg: "hello world",
          msgType: "text",
          avatar:
            "http://www.520touxiang.com/uploads/allimg/202004111223/aph4ug1vd1r.jpg"
        }
      ]
    };
  }
};
</script>

<style>
/* http://www.520touxiang.com/uploads/allimg/202004111223/tre4xsmvup3.jpg */
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
  width: 500px;
  height: 400px;
  border: 1px solid #000;
}
</style>
