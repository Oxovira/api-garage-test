// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router

import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/views/Home';
import EditComponent from '@/components/post/Edit';
import CreateComponent from '@/components/post/Create';
import CustomerComponent from '@/components/post/Customer';
import CarsComponent from '@/components/post/Cars';

Vue.use(Router)

export default new Router({
 mode: 'history',
 routes: [
   { path: '/', redirect: { name: 'home' } },
   { path: '/home', name: 'home', component: HomeComponent },
   { path: '/create', name: 'Create', component: CreateComponent },
   { path: '/edit/:id', name: 'Edit', component: EditComponent },
   { path: '/customer/:id', name: 'Customer', component: CustomerComponent },
   { path: '/cars/:id', name: 'Cars', component: CarsComponent }
 ]
});
