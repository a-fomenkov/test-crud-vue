import Vue from 'vue'
import App from './App.vue'
import router from '../router'
import store from './store'
import './assets/styles/styles.scss'

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	store,
	router
}).$mount('#app')
