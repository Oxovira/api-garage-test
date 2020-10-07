import { createRouter, createWebHistory } from 'vue-router'
import Vue from 'vue'
import HomeComponent from '@/views/Home';
import EditComponent from '@/components/Edit';
import CreateComponent from '@/components/Create';
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: { name: 'home' } },
    { path: '/home', name: 'home', component: HomeComponent },
    { path: '/create', name: 'Create', component: CreateComponent },
    { path: '/edit/:id', name: 'Edit', component: EditComponent },
  ]
});
