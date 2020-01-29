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
    path: '/reserva/:id',
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
    path: '/nota',
    name: 'nota',  
    component: () => import(/* webpackChunkName: "about" */ '../views/Notas.vue')
  },

  
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
