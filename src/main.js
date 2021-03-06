import Vue from 'vue'
import App from './App.vue'
import router from '../router'
import store from './store'
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)
import './assets/styles/styles.scss'

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	store,
	router,
	directives: { infiniteScroll },
}).$mount('#app')
