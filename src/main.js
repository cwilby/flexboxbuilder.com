import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import VueFragment from 'vue-fragment';
import App from './App.vue'
import store from './store';
import Tree from './components/Tree';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(VueFragment.Plugin);

Vue.component('tree', Tree);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
