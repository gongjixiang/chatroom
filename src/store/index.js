import Vue from 'vue';
import Vuex from 'vuex';
import { localData } from '../utils';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    userInfo: {},
    isLogin: false
  },
  mutations: {
    setStore(state, payload) {
      for (const i in payload) {
        state[i] = payload[i];
        localData.setItem(i, payload[i]);
      }
    }
  }
});
