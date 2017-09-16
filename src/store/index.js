import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import messages from './modules/messages'
import numbers from './modules/numbers'
import rules from './modules/rules'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // getters,
  // actions,
  modules: {
    auth,
    messages,
    numbers,
    rules
  },
  strict: debug
})
