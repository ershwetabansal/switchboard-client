import * as types from '../mutation-types'
import axios from 'axios'
import mockedNumbers from '../../supports/sample-numbers.js'

const number = {
  phone_number: '',
  name: '',
  timezone: 'Europe/London',
  start_time: '09:00',
  end_time: '18:00',
  schedule: 'weekday'
}

// initial state
const state = {
  numbers: [],
  number,
  failureMessage: '',
  successMessage: ''
}

// getters
const getters = {
  allNumbers: state => state.numbers,
  currentNumber: state => state.number
}

// actions
const actions = {
  getAllNumbers ({ commit }) {
    commit(types.GET_NUMBERS_REQUEST)
    axios.get('api/number')
      .then(numbers => commit(types.GET_NUMBERS_SUCCESS, numbers))
      .catch(error => commit(types.GET_NUMBERS_FAILURE, error))
  },
  getNumber ({ commit }, id) {
    commit(types.GET_NUMBER_REQUEST)
    axios.get(`api/number/${id}`)
      .then(number => commit(types.GET_NUMBER_SUCCESS))
      .catch(() => commit(types.GET_NUMBER_FAILURE, id))
  },
  setCurrentNumber ({ commit }, number) {
    commit(types.SET_CURRENT_NUMBER_REQUEST, number)
  },
  addNumber ({ commit }, number) {
    commit(types.ADD_NUMBER_REQUEST)
    axios.post('api/number', number)
      .then(() => commit(types.ADD_NUMBER_SUCCESS, number))
      .catch(() => commit(types.ADD_NUMBER_FAILURE))
  },
  updateNumber ({ commit }, number) {
    commit(types.UPDATE_NUMBER_REQUEST)
    axios.post(`api/number/${number.id}`, number)
      .then(() => commit(types.UPDATE_NUMBER_SUCCESS, number))
      .catch(() => commit(types.UPDATE_NUMBER_FAILURE))
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
    console.log(state)
    state.failureMessage = 'Failed to get all numbers. Please contact admin'
    state.numbers = mockedNumbers
  },
  [types.SET_CURRENT_NUMBER_REQUEST] (state, currentNumber) {
    if (currentNumber) {
      state.number = currentNumber
    }
    state.number = number
  },
  [types.GET_NUMBER_REQUEST] (state) {
    state.failureMessage = ''
    state.successMessage = ''
  },
  [types.GET_NUMBER_SUCCESS] (state, number) {
    state.number = number
  },
  [types.GET_NUMBER_FAILURE] (state, id) {
    console.log(id)
    state.failureMessage = 'Failed to get all numbers. Please contact admin'
    const index = id <= 4 ? (id - 1) : 0
    console.log(index)
    state.number = mockedNumbers[index]
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
  },
  [types.UPDATE_NUMBER_REQUEST] (state) {
    state.failureMessage = ''
    state.successMessage = ''
  },
  [types.UPDATE_NUMBER_SUCCESS] (state, updatedNumber) {
    state.successMessage = `${updatedNumber.phone_number} has been updated successfully.`
    const index = state.numbers.findIndex(number => number.phone_number === updatedNumber.phone_number)
    state.numbers[index] = updatedNumber
  },
  [types.UPDATE_NUMBER_FAILURE] (state) {
    state.failureMessage = 'Failed to UPDATE new number.'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
