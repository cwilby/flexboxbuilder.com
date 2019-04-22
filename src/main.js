import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import VueFragment from 'vue-fragment';
import App from './App.vue'
import store from './store';
import RecursiveNode from './components/RecursiveNode';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(VueFragment.Plugin);

Vue.component('recursive-node', RecursiveNode);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
