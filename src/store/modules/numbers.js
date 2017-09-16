import * as types from '../mutation-types'
import axios from 'axios'

// initial state
const state = {
  numbers: [],
  failureMessage: '',
  successMessage: ''
}

// getters
const getters = {
  allNumbers: state => state.numbers
}

// actions
const actions = {
  getAllNumbers ({ commit }) {
    commit(types.GET_NUMBERS_REQUEST)
    axios.get('api/number')
      .then(numbers => commit(types.GET_NUMBERS_SUCCESS, numbers))
      .then(error => commit(types.GET_NUMBERS_FAILURE, error))
  },
  addNumber ({ commit }, number) {
    commit(types.ADD_NUMBER_REQUEST)
    axios.post('api/number', number)
      .then(() => commit(types.ADD_NUMBER_SUCCESS, number))
      .catch(() => commit(types.ADD_NUMBER_FAILURE))
  },
  changePriority ({ commit }, numbers) {
    commit(types.CHANGE_PRIORITY_REQUEST)
    axios.post('api/number/priority', numbers)
      .then(() => commit(types.CHANGE_PRIORITY_SUCCESS))
      .catch(() => commit(types.CHANGE_PRIORITY_FAILURE))
  }
}

// mutations
const mutations = {
  [types.GET_NUMBERS_REQUEST] (state) {
    state.failureMessage = ''
    state.successMessage = ''
  },
  [types.GET_NUMBERS_SUCCESS] (state, numbers) {
    state.numbers = numbers
  },
  [types.GET_NUMBERS_FAILURE] (state) {
    state.failureMessage = 'Failed to get all numbers. Please contact admin'
  },
  [types.ADD_NUMBER_REQUEST] (state) {
    state.failureMessage = ''
    state.successMessage = ''
  },
  [types.ADD_NUMBER_SUCCESS] (state, number) {
    state.successMessage = `${number.phone_number} has been added successfully.`
    state.numbers.push(number)
  },
  [types.ADD_NUMBER_FAILURE] (state) {
    state.failureMessage = 'Failed to add new number.'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
