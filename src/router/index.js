import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/switchboard/Home'
import Number from '@/components/switchboard/Number'
import Message from '@/components/switchboard/Message'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'number.index',
      component: Home
    },
    {
      path: '/number/:id',
      name: 'number.edit',
      component: Number,
      props: true
    },
    {
      path: '/number',
      name: 'number.create',
      component: Number
    },
    {
      path: '/messages',
      name: 'messages.index',
      component: Message
    }
  ]
})
