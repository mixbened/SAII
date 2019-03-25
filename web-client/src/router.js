import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Add from './components/Add'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    }
  ],
  mode: 'history'
})
