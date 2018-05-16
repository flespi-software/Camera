import Vue from 'vue'
import { Cookies, Notify, date } from 'quasar'
import router from '../router'

function logError (state, payload) {
  state.errors.newcount++
  state.errors.log.unshift({reason: payload, time: date.formatDate(Date.now(), 'YYYY-MM-DD HH:mm:ss')})
}

function clearLog (state, payload) {
  state.errors.newcount = 0
  state.errors.log = []
}

function clearErrorCounter (state) {
  state.errors.newcount = 0
}

function getListData (state, type, callback) {
  switch (type) {
    case 'devices':
      getDevices(state, callback)
      break
    case 'cdns':
      getCdns(state, callback)
      break
    default: console.warn('Wrong GET type')
  }
}

function getDevices (state, callback) {
  let params = {}
  params.fields = state.config.services.gw.fields.devices.join(',')
  getReq(state, 'devices', state.config.server + state.config.services.gw.url, '/devices/all', params, callback)
}

function getCustomer (state, callback) {
  let params = {}
  params.fields = state.config.services.platform.fields.customer.join(',')
  getReq(state, 'customer', state.config.server + state.config.services.platform.url, '/customer', params, callback)
}

function getCdns (state, callback) {
  let params = {}
  params.fields = state.config.services.storage.fields.cdns.join(',')
  getReq(state, 'cdns', state.config.server + state.config.services.storage.url, '/cdns/all', params, callback)
}

function getFiles (state, id, callback) {
  let params = {}
  params.fields = state.config.services.storage.fields.files.join(',')
  getReq(state, 'files', state.config.server + state.config.services.storage.url, '/cdns/' + (id || 'all') + '/files', params, callback)
}

async function getOauthProviders (state, callback) {
  let providers = await Vue.connector.http.get(state.config.server + state.config.services.auth.url + '/oauth/providers')
  state['oauthproviders'] = providers.data.result[0]
}

function setToken (state, token) {
  if (token.length === 0) {
    loginRedirect(state)
  } else {
    if (token.indexOf('FlespiToken') >= 0) {
      Vue.connector.token = token
      Vue.set(state, 'token', token)
    } else {
      Vue.connector.token = `FlespiToken ${token}`
      Vue.set(state, 'token', `FlespiToken ${token}`)
    }
    getData(state)
  }
}

function getData (state) {
  getCustomer(state, () => {
    getDevices(state)
    getCdns(state)
  }, false)
}

async function getReq (state, name, url, path, params, callback, nolog) {
  nolog = nolog || false
  if (state.token !== '') {
    let response = await Vue.connector.http.get(`${url}${path}`)
    if (response && response.data && response.data.result) Vue.set(state.data, name, response.data.result)
    if (typeof callback !== 'undefined') {
      callback()
    }
    onError(state, response, nolog)
  }
}

function loginRedirect (state) {
  Vue.set(state, 'token', '')
  Cookies.remove('X-Flespi-Token')
  router.push('/')
}

function onError (state, response, nolog) {
  nolog = nolog || false
  if (response.status === 400 || response.status === 500 || response.status === 200) {
  }
  if (response.body && response.body.errors) {
    for (var i in response.body.errors) {
      Notify.create('Error: ' + response.body.errors[i].reason)
      if (!nolog) logError(state, response.body.errors[i].reason)
    }
  }
  if (response.status === 401) {
    loginRedirect(state)
  }
}

export default {
  logError,
  clearLog,
  clearErrorCounter,
  getListData,
  getDevices,
  getCustomer,
  getCdns,
  getFiles,
  getOauthProviders,
  setToken,
  getData,
  loginRedirect,
  onError
}
