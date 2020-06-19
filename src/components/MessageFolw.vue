<template>
  <div class="message-box">
    <ul>
      <li
        v-for="(item, index) in msgList"
        :key="index"
        :class="{ 'is-owner': item.type === 'owner' }"
      >
        <!-- 头像 -->
        <img class="avatar" :src="item.avatar" alt />
        <!-- 信息 -->
        <div v-if="item.msgType === 'text'" class="msg-text-line">
          {{ item.msg }}
        </div>
        <div v-else-if="item.msgType === 'image'" class="msg-image-line">
          <img :src="item.msg" alt="" />
        </div>
      </li>
    </ul>
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
ul {
  height: 100%;
  box-sizing: border-box;
  padding: 10px 40px;
  overflow-y: auto;
  background-color: #ededed;
}
li {
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 5px 0;
}
.avatar {
  width: 20px;
  height: 20px;
  position: absolute;
  right: -30px;
}
li.is-owner .avatar {
  left: initial;
  left: -30px;
}
.msg-text-line {
  position: relative;
  background-color: #06c05f;
  padding: 3px;
  text-align: left;
}
li.is-owner .msg-text-line {
  background-color: #fff;
}
.msg-image-line {
  position: relative;
  display: inline-block;
  width: 50%;
}
.msg-image-line img {
  width: 100%;
}
.msg-text-line::before {
  width: 0;
  height: 0;
  content: "";
  position: absolute;
  right: -10px;
  top: 5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent;
  border-left-color: #06c05f;
}
li.is-owner .msg-text-line::before {
  left: -10px;
  border-left-color: transparent;
  border-right-color: #fff;
}
</style>