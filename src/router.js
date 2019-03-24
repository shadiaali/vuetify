import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import learnMore from './views/learnMore.vue'
import ball from './views/ball.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/learnmore',
      name: 'learnmore',
      component: learnMore
    },

    {
      path: '/ball',
      name: 'ball',
      component: ball
    },
  ]
})
