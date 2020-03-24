import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

Vue.config.productionTip = false

let data = {
	books: mock,
	checkout: [],
	hold: [],
	numItems: 0
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
