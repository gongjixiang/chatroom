<template>
  <v-row justify="center">
    <v-dialog v-model="visible" persistent max-width="600px">

      <v-card v-show="isRegister">

        <v-card-title>
          <span class="text-h5">注册</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-form ref="register" v-model="valid" lazy-validation>
              <v-text-field v-model="account" :counter="10" :rules="accountRules" label="账号" prepend-icon="mdi-account" required></v-text-field>
              <v-text-field v-model="password" :counter="10" :rules="accountRules" label="密码" prepend-icon="mdi-lock" required></v-text-field>
              <v-text-field v-model="confirmPass" :counter="10" :rules="confirmPassRules" label="确认密码" prepend-icon="mdi-lock" required></v-text-field>
            </v-form>
          </v-container>
          <small class="text-center"> 已有账号？去 <v-btn x-small color="primary" @click="isRegister = false" outlined>登录</v-btn></small>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="$emit('close')">
            关闭
          </v-btn>
          <v-btn color="blue darken-1" text @click="register">
            注册
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-card v-show="!isRegister">
        <v-card-title>
          <span class="text-h5">登录</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-form ref="login" v-model="valid" lazy-validation>
              <v-text-field v-model="loginAccount" :counter="10" :rules="accountRules" label="账号" prepend-icon="mdi-account" required></v-text-field>
              <v-text-field v-model="loginPassword" :counter="10" :rules="accountRules" label="密码" prepend-icon="mdi-lock" required></v-text-field>
            </v-form>
          </v-container>
          <small class="text-center"> 还没有帐号？去 <v-btn x-small color="primary" @click="isRegister = true" outlined>注册</v-btn></small>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="$emit('close')">
            关闭
          </v-btn>
          <v-btn color="blue darken-1" text @click="login">
            登录
          </v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import api from "../api";
import axios from "../api/axios";
import qs from "qs";
import { mapMutations } from "vuex";

export default {
  props: { visible: Boolean },
  data: () => ({
    valid: true,
    account: "",
    password: "",
    confirmPass: "",
    loginAccount: "",
    loginPassword: "",
    accountRules: [
      (v) => !!v || "该项为必填",
      (v) => (v && v.length <= 10) || "限定10个字符内",
    ],
    isRegister: false,
  }),
  mounted() {},
  methods: {
    ...mapMutations(["setStore"]),
    register() {
      if (this.$refs.register.validate()) {
        const registerData = { account: this.account, password: this.password };
        axios.post(api.register, qs.stringify(registerData)).then((res) => {
          const payload = {
            token: res.data.token,
            userInfo: res.data.userInfo,
            isLogin: true,
          };
          this.setStore(payload);
          this.$emit("close");
          this.$toast("注册成功");
        });
      }
    },
    login() {
      const loginData = {
        account: this.loginAccount,
        password: this.loginPassword,
      };
      axios.post(api.login, qs.stringify(loginData)).then((res) => {
        const payload = {
          token: res.data.token,
          userInfo: res.data.userInfo,
          isLogin: true,
        };
        this.setStore(payload);
        this.$emit("close");
        this.$toast("登录成功");
      });
    },
  },
  computed: {
    confirmPassRules() {
      return [(v) => v == this.password || "密码输入不一致"];
    },
  },
};
</script>
<style>
</style>