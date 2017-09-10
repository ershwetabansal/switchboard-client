import Vue from 'vue'
import Number from '@/components/switchboard/Number'

describe('Number.vue', () => {
  it('renders a form to manage a switchboard number', () => {
    const Constructor = Vue.extend(Number)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('input'))
      .to.greaterThan(0)
  })
})
