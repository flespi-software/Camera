import { LocalStorage } from 'quasar'
import Vue from 'vue'
import configData from '../../data/config.json'

// getters
const getters = {
}

// actions
const actions = {
  getSchemas (context) {
    context.commit('getSchema', 'platform')
    context.commit('getSchema', 'gw')
    context.commit('getSchema', 'storage')
    context.commit('getSchema', 'auth')
  }
}

// mutations
const mutations = {
  setValue (state, change) {
    state[change.i][change.param] = change.value
  },
  getSchema (state, api) {
    Vue.http.get(state.server + '/' + api + '/api.json', {}).then((response) => {
      state.services[api].schema = response.body
    }, (response) => {
    })
  }

}

let localConfig = LocalStorage.has('config') ? LocalStorage.get.item('config') : configData

export default {
  namespaced: true,
  state: localConfig,
  getters,
  actions,
  mutations
}
