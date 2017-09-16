import * as types from '../mutation-types'

const state = {
  successMessage: '',
  failureMessage: '',
  messages: []
}

// getters
const getters = {
  allMessages: state => state.messages
}

// actions
const actions = {
  getAllMessages({ commit }) {
    commit(types.GET_ALL_MESSAGES_REQUEST)
    this.$http.get('api/message')
      .then(messages => commit(types.GET_ALL_MESSAGES_SUCCESS, messages))
      .catch(error => commit(types.GET_ALL_MESSAGES_FAILURE, error))
  },
  addMessage ({ commit }, message) {
    commit(types.ADD_MESSAGE_REQUEST)
    this.$http.post('api/message', message)
      .then(() => commit(types.ADD_MESSAGE_SUCCESS))
      .catch(error => commit(types.ADD_MESSAGE_FAILURE, error))
  }
}

// mutations
const mutations = {
  [types.ADD_MESSAGE_REQUEST] (state) {
    state.successMessage = ''
    state.failureMessage = ''
  },

  [types.ADD_MESSAGE_SUCCESS] (state, message) {
    state.messages.push(message)
    state.successMessage = 'Message added successfully'
  },

  [types.ADD_MESSAGE_FAILURE] (state) {
    state.failureMessage = 'Failed to add a message'
  },

  [types.GET_ALL_MESSAGES_REQUEST] (state) {
    state.failureMessage = ''
  },

  [types.GET_ALL_MESSAGES_SUCCESS] (state, messages) {
    state.messages = messages
  },

  [types.GET_ALL_MESSAGES_FAILURE] (state) {
    state.failureMessage = 'Failed to get messages'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
