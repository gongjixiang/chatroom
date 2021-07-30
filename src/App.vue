<template>
  <v-app>
    <v-app-bar app>
      <v-spacer></v-spacer>

      <v-menu v-if="isLogin" open-on-hover top offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title @click="updateVisible = true">修改资料</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="logout">登出</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn v-else color="primary" elevation="3" @click="loginVisible = true">
        注册/登录
      </v-btn>

    </v-app-bar>

    <v-main>
      <Index />
      <UserInfo :visible="updateVisible" @close="updateVisible = false" />
      <Login :visible="loginVisible" @close="loginVisible = false" />
    </v-main>
  </v-app>
</template>

<script>
import Index from "./components/Index.vue";
import UserInfo from "./components/UserInfo.vue";
import Login from "./components/Login.vue";
import { mapState } from "vuex";
import { localData } from "./utils";
import { mapMutations } from "vuex";

export default {
  name: "App",

  components: {
    Index,
    UserInfo,
    Login,
  },

  data: () => ({
    updateVisible: false,
    loginVisible: false,
  }),
  mounted() {
    const userInfo = localData.getItem("userInfo");
    const isLogin = localData.getItem("isLogin");
    if (userInfo && isLogin) {
      this.setStore({ userInfo, isLogin });
    }
  },
  methods: {
    ...mapMutations(["setStore"]),
    update() {},
    logout() {
      const payload = { userInfo: {}, isLogin: false };
      this.setStore(payload);
      this.$toast("已退出");
    },
  },
  computed: {
    ...mapState(["isLogin"]),
  },
};
</script>
