import * as types from '../mutation-types'
import axios from 'axios'

const state = {
  successMessage: '',
  failureMessage: '',
  rules: []
}

// getters
const getters = {
  allRules: state => state.rules
}

// actions
const actions = {
  getAllRules ({ commit }) {
    commit(types.GET_ALL_RULES_REQUEST)
    axios.get('api/rule')
      .then(rules => commit(types.GET_ALL_RULES_SUCCESS, rules))
      .catch(error => commit(types.GET_ALL_RULES_FAILURE, error))
  },
  addRule ({ commit }, message) {
    commit(types.ADD_RULE_REQUEST)
    axios.post('api/rule', message)
      .then(() => commit(types.ADD_RULE_SUCCESS))
      .catch(error => commit(types.ADD_RULE_FAILURE, error))
  }
}

// mutations
const mutations = {
  [types.ADD_RULE_REQUEST] (state) {
    state.successMessage = ''
    state.failureMessage = ''
  },

  [types.ADD_RULE_SUCCESS] (state, message) {
    state.messages.push(message)
    state.successMessage = 'Rule added successfully'
  },

  [types.ADD_RULE_FAILURE] (state) {
    state.failureMessage = 'Failed to add a rule'
  },

  [types.GET_ALL_RULES_REQUEST] (state) {
    state.failureMessage = ''
  },

  [types.GET_ALL_RULES_SUCCESS] (state, messages) {
    state.messages = messages
  },

  [types.GET_ALL_RULES_FAILURE] (state) {
    state.failureMessage = 'Failed to get messages'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
