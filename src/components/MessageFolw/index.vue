<template>
  <div class="message-box">
    <ul ref="scrollContainer">
      <li v-for="(item, index) in msgList" :key="index">
        <!-- 信息时间 -->
        <div class="msg-time">
          <span v-text="item.ctime"></span>
        </div>

        <!-- 系统信息 -->
        <div v-if="item.type==='system'" class="msg-system">
          <span v-text="item.msg"></span>
        </div>
        <!-- 聊天信息 -->
        <div v-else class="msg" :class="{ 'is-owner': item.type === 'owner' }">
          <!-- 用户头像 -->
          <img class="avatar" :src="item.avatar" alt />

          <!-- 文字 -->
          <div v-if="item.msgType === 'text'" class="msg-text-line" v-text="item.msg"></div>
          <!-- 图片  -->
          <!-- todo 仿微信实现最佳宽高比 -->
          <div v-else-if="item.msgType === 'image'" class="msg-image-line">
            <img :src="item.msg" alt />
          </div>

          <!-- todo 待添加 文件、视频、等显示方式 -->
          <div v-else></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// 添加事件
const addEvent = function(element, type, handler) {
  if (element.addEventListener) {
    element.addEventListener(type, handler, false);
  } else if (element.attachEvent) {
    element.attachEvent("on" + type, handler);
  } else {
    element["on" + type] = handler;
  }
};
// 移除事件
const removeEvent = function(element, type, handler) {
  if (element.removeEventListener) {
    element.removeEventListener(type, handler, false);
  } else if (element.detachEvent) {
    element.detachEvent("on" + type, handler);
  } else {
    element["on" + type] = null;
  }
};

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
  data() {
    return {
      scrollContainer: null
    };
  },
  mounted() {
    this.scrollContainer = this.$refs.scrollContainer;
    // 监听鼠标滚动
    if (this.scrollContainer) {
      addEvent(this.scrollContainer, "mousewheel", this.handleScrollListen); // chrome
      addEvent(this.scrollContainer, "DOMMouseScroll", this.handleScrollListen); // firefox
    }
  },
  beforeDestroy() {
    // 移除监听事件
    if (this.scrollContainer) {
      removeEvent(this.scrollContainer, "mousewheel", this.handleScrollListen); // chrome
      removeEvent(
        this.scrollContainer,
        "DOMMouseScroll",
        this.handleScrollListen
      ); // firefox
    }
  },
  methods: {
    // 监听鼠标滚动
    handleScrollListen() {
      const scrollContainer = this.$refs.scrollContainer;
      const scrollTop = scrollContainer.scrollTop;
      const clientHeight = scrollContainer.clientHeight;
      const scrollHeight = scrollContainer.scrollHeight;

      // 滚动到顶部
      if (scrollTop === 0) {
        this.$emit("early-data");
      }

      // 滚动到底部 请求最新数据
      if (scrollTop + clientHeight === scrollHeight) {
        this.$emit("new-data");
      }
    }
  }
};
</script>

<style  scoped>
@import url("./index.css");
</style>