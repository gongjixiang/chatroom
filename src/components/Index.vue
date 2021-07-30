<template>
  <v-card id="room" max-width="50%">

    <v-app-bar color="green">
      <v-app-bar-title>聊天室</v-app-bar-title>

      <!-- 聊天窗口 通过tab标签切换 -->
      <template v-slot:extension>
        <v-tabs align-with-title v-model="tab">
          <v-hover v-for="(item, index) in chatTab" :key="item.id" v-model="item.hover">
            <v-tab :href="`#tab-${item.id}`">{{ item.name }}
              <v-badge color="error" :value="item.hover" icon="mdi-close" v-show="item.id!=0" @click.native.stop="close(index)">
              </v-badge>
            </v-tab>
          </v-hover>
        </v-tabs>
      </template>

    </v-app-bar>

    <v-tabs-items v-model="tab" class="left">
      <v-tab-item height="100%" v-for="item in chatTab" :key="item.id" :value="'tab-' + item.id">
        <v-card flat height="100%">

          <!-- 对话框 -->
          <Chat :payload="item" />
        </v-card>
      </v-tab-item>
    </v-tabs-items>

    <!-- 在线列表 -->
    <OnlineList />

  </v-card>
</template>

<script>
import Chat from "./Chat.vue";
import OnlineList from "./OnlineList.vue";
export default {
  name: "Index",
  components: { Chat, OnlineList },

  data: () => ({
    tab: null,
    chatTab: [{ id: 0, name: "聊天室", hover: false }],
  }),
  mounted() {},
  methods: {
    close(index) {
      this.chatTab.splice(index, 1);
    },
  },
};
</script>
<style scoped>
#room {
  height: 100%;
  position: relative;
  margin: 0 auto;
}

.chat-container {
  height: 100%;
}

.left {
  width: 70%;
  height: calc(100% - 112px);
  position: absolute;
  left: 0;
}

::v-deep .v-window__container {
  height: 100%;
}

::v-deep .v-window-item {
  height: 100%;
}
</style>
