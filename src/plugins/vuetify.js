import Vue from 'vue';
import Vuetify, { VSnackbar, VBtn, VIcon } from 'vuetify/lib';
import VuetifyToast from 'vuetify-toast-snackbar';

Vue.use(Vuetify, {
  components: {
    VSnackbar,
    VBtn,
    VIcon
  }
});

const veutifyObj = new Vuetify({});

Vue.use(VuetifyToast, {
  $vuetify: veutifyObj.framework,
  x: 'center',
  y: 'top'
});

export default veutifyObj;
