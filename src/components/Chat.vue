<template>
  <div class="box">

    <!-- 对话框 -->
    <v-col cols="12" class="list">
      <div class="item" v-for="(item,index) in messageList" :key="`i-${index}`">
        <v-avatar color="primary" size="30"></v-avatar>
        <v-chip x-small>
          {{item.userInfo.account}}
          {{item.date | moment("h:mm:ss")}}
        </v-chip>
        <p class="message">{{item.content}}</p>
      </div>
    </v-col>

    <!-- 输入框 -->
    <v-col cols="12" class="input">
      <v-textarea filled label="Say Something..." v-model.trim="text"></v-textarea>

      <v-btn depressed color="primary" @click="send" :disabled="!isLogin">
        send
      </v-btn>
    </v-col>

  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: { payload: Object },

  data: () => ({
    text: "",
    messageList: [],
  }),
  sockets: {
    connect() {
      console.log("socket已连接");
    },
    disconnect() {
      console.log("socket已关闭");
    },
    message(wsData) {
      this.messageList.push(wsData);
    },
  },
  computed: {
    ...mapState(["isLogin", "userInfo"]),
  },

  mounted() {},

  methods: {
    send() {
      if (this.text) {
        const wsData = {
          content: this.text,
          userInfo: this.userInfo,
          date: new Date(),
        };
        this.$socket.emit("message", wsData);
        this.text = "";
      }
    },
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  position: relative;
}

.list {
  height: 70%;
  position: absolute;
  overflow-y: scroll;
}

.input {
  height: 30%;
  position: absolute;
  bottom: 0;
}

.message {
  margin: 0;
}
</style>