import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import store from './store';
import VueSocketIO from 'vue-socket.io';
import moment from 'vue-moment';

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: 'http://127.0.0.1:8360',
    vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
    }
  })
);
Vue.use(moment);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  render: (h) => h(App)
}).$mount('#app');
