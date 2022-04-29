import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/index.vue'
import Home from '../components/home.vue'


Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/index' },
    { path: '/index', component: Index },
    { path: '/home', component: Home },
]

const router = new VueRouter({
  routes
})

export default router
