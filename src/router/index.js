import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/switchboard/Home'
import Number from '@/components/switchboard/Number'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'number.index',
      component: Home
    },
    {
      path: '/number/:phone_number',
      name: 'number.edit',
      component: Number,
      props: true
    },
    {
      path: '/number/create',
      name: 'number.create',
      component: Number
    }
  ]
})
