import Vue from 'vue'
import Home from '@/components/switchboard/Home'

describe('Home.vue', () => {
  it('renders a list of all switchboard numbers', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('ul li').length)
      .to.equal(3)
  })
})
