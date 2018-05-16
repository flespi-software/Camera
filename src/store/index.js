import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(VueResource)

// Store parts
import * as getters from './getters'
import * as actions from './actions'

import mutations from './mutations'

// modules
import config from './modules/config'

// load store
Vue.use(Vuex)

// initial state
const state = {
  errors: {
    newcount: 0,
    log: []
  },
  data: {
    devices: [],
    customer: [],
    files: []
  },
  oauthproviders: {},
  token: ''
}

// init store
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    config
  }
})

if (module.hot) {
  module.hot.accept([
    './getters',
    './actions',
    './mutations'
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations')
    })
  })
}

export default store
