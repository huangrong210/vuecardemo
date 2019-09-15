/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-15 13:13:03
 * @LastEditTime: 2019-09-15 13:13:03
 * @LastEditors: your name
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/home',
            name: 'home',
            component: Home,
            children: [{
                path: 'buycar',
                name: 'buycar',
                component: () =>
                    import ('@/components/buycar.vue')
            },
			{
				path: 'about',
				name: 'about',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () =>
					import ( /* webpackChunkName: "about" */ './views/About.vue')
			}]
        }
    ]
})