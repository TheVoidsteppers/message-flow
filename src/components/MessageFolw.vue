<template>
  <div class="message-box">
    <el-scrollbar>
      <ul>
        <li v-for="(item,index) in msgList" :key="index">
          <img class="avatar" :src="item.avatar" alt />
          <div class="msg-line">{{item.msg}}</div>
        </li>
      </ul>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: "MessageFolw",
  props: {
    msgList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {}
};
</script>

<style  scoped>
.el-scrollbar {
  height: 100%;
}
ul {
  padding: 10px;
}
li {
  display: flex;
  flex-direction: column;
}
.avatar {
  width: 20px;
  height: 20px;
}
.msg-line {
  position: relative;
  background-color: #06c05f;
}
.msg-line::before {
  width: 0;
  height: 0;
  content: "";
  position: absolute;
  left: 0px;
  top: 0px;
  border-width: 10px;
  border-style: solid;
  border-color: transparent;
  border-right-color: #fff;
}
</style>