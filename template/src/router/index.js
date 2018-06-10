import Vue from 'vue'
import Router from 'vue-router'

import Mainpage from '@/pages/Mainpage'
import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
		{
            path: '/',
            redirect: { name: 'home' },
			component: Mainpage,
			children: [
				{
					path: 'home',
					name: 'home',
					component:Home,
				}				
            ]
		}
	]
})