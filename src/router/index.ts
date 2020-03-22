import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import StartPage from "@/components/StartPage/StartPage";
// import StartPage from "@/components/HelloWorld.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'StartPage',
    component: ()=>import('../components/HelloWorld.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
