import { createRouter, createWebHistory } from 'vue-router'
import TurnsYearVue from '../views/turns/year.vue'
import TurnsMonthVue from '../views/turns/month.vue'
import TurnsWeekVue from '../views/turns/week.vue'
import TurnsDayVue from '../views/turns/day.vue'
import LogisticsDeliveryVue from '../views/logistics/delivery.vue'
import LogisticsGDSVue from '../views/logistics/gds.vue'

const routes = [
  {
    path: '/',
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
    path: '/logistics/delivery',
    name: 'delivery',
    component: LogisticsDeliveryVue
  },
  {
    path: '/logistics/gds',
    name: 'gds',
    component: LogisticsGDSVue
  },
  {
    // path: '/about',
    // name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
