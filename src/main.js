import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
import 'bootstrap/scss/bootstrap.scss'

Vue.use(VueCompositionApi)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
