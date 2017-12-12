// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import layout from './components/layout.vue'
import VueRouter from 'vue-router'
import IndexPage from './pages/index.vue'
import InfoPage from './pages/list/info.vue'
import LoginPage from './components/user/login.vue'
import RegisterPage from './components/user/register.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

let router = new VueRouter({
	mode: 'history',
	routes: [
	{
		path: '/',
		component: IndexPage
	},
	{
		path: '/info',
		component: InfoPage
	},
	{
		path: '/login',
		component: LoginPage
	},
	{
		path: '/register',
		component: RegisterPage
	}
	]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<layout/>',
  components: { layout }
})
