import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import 'semantic-ui-css/semantic.css';

Vue.prototype.$http = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
