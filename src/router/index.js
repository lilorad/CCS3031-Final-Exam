import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlisView from '../views/BlisView.vue'
import BsdmiaView from '../views/BsdmiaView.vue'
import BscsView from '../views/BscsView.vue'
import BsitView from '../views/BsitView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/bsit', name: 'bsit', component: BsitView },
    { path: '/bsdmia', name: 'bsdmia', component: BsdmiaView },
    { path: '/bscs', name: 'bscs', component: BscsView },
    { path: '/blis', name: 'blis', component: BlisView },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, top: 80, behavior: 'smooth' }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

export default router