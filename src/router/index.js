import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TurnsYearVue from '../views/turns/year.vue'
import TurnsMonthVue from '../views/turns/month.vue'
import TurnsWeekVue from '../views/turns/week.vue'
import TurnsDayVue from '../views/turns/day.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/turn/year',
    name: 'year',
    component: TurnsYearVue
  },
  {
    path: '/turn/month',
    name: 'month',
    component: TurnsMonthVue
  },
  {
    path: '/turn/week',
    name: 'week',
    component: TurnsWeekVue
  },
  {
    path: '/turn/day',
    name: 'day',
    component: TurnsDayVue
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
