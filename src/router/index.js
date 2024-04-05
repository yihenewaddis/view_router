import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Jops from '../views/jops/Jops.vue'
import jopDetail from '../views/jops/JopDetail.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component:AboutView
    },
    {
      path: '/jop/',
      name: 'jop',
      component:Jops
    },
    {
      path:'/detail/:id',
      name:'jopdetail',
      component:jopDetail,
      props:true
    }
  ]
})

export default router
