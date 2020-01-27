import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/reserva',
    name: 'reserva',    
    component: () => import(/* webpackChunkName: "about" */ '../views/Reserva.vue'),
    meta:{
      requiresAuth: true
    }
  },

  {
    path: '/login',
    name: 'login',  
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },

  {
    path: '/perfil',
    name: 'perfil',  
    component: () => import(/* webpackChunkName: "about" */ '../views/Perfil.vue')
  },


  {
    path: '/test',
    name: 'test',  
    component: () => import(/* webpackChunkName: "about" */ '../views/Test.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.matched.some(ruta => ruta.meta.requiresAuth)){
    const user = firebase.auth().currentUser
    if(user){
      next()
    }else{
      next({
        name: 'login'
      })
    }
  }else{
    next()
  }
})

export default router
