import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import photography from '@/components/photography'
import index from '@/components/index'
import world from '@/components/world'
import about from '@/components/about'
import chronicle from '@/components/chronicle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
		{
			path:'/photography',
			name:'photography',
			component:photography
		},
		{
			path:'/',
			name:'index',
			component:index
		},
		{
			path:'/world/:mapHeight',
			name:'world',
			component:world
		},
		{
			path:'/about',
			name:'about',
			component:about
		},
		{
			path:'/chronicle',
			name:'chronicle',
			component:chronicle
		}
  ]
})
