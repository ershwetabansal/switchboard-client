import * as types from '../mutation-types'

const state = {
  name: '',
  canSeeNumbers: false,
  canManageNumbers: false,
  canManageMessages: false,
  canOverrideSingIn: false,
  canChangePriority: false,
}

// getters
const getters = {
  name: state => state.name,
  canSeeNumbers: state => state.canSeeNumbers,
  canManageNumbers: state => state.canManageNumbers,
  canManageMessages: state => state.canManageMessages,
  canOverrideSingIn: state => state.canOverrideSingIn,
  canChangePriority: state => state.canChangePriority,
}

// actions
const actions = {
  whoAmI ({ commit }) {
    commit(types.WHO_AM_I_REQUEST)
    this.$http.get('api/me')
      .then(info => commit(types.WHO_AM_I_SUCCESS, info))
      .catch(error => commit(types.WHO_AM_I_FAILURE, error))
  },
  changeSignInStatus ({ commit }, signIn = true) {
    commit(types.SIGNIN_REQUEST)
    this.$http.post('api/signIn', { signIn })
      .then(info => commit(types.SIGNIN_SUCCESS, info))
      .catch(error => commit(types.SIGNIN_FAILURE, error))
  }
}

// mutations
const mutations = {
  [types.WHO_AM_I_REQUEST] (state) {
    state.authStatus = null
  },

  [types.WHO_AM_I_SUCCESS] (state, info) {
    state.name = info.name
    state.canSeeNumbers = info.canSeeNumbers
    state.canManageNumbers = info.canManageNumbers
    state.canManageMessages = info.canManageMessages
    state.canOverrideSingIn = info.canOverrideSingIn
    state.canChangePriority = info.canChangePriority
    state.authStatus = 'SUCCESS'
  },

  [types.WHO_AM_I_FAILURE] (state) {
    state.authStatus = 'FAILED'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
