import VueConnection from 'flespi-io-js/dist/vue-plugin'

let connectionConfig = {socketConfig: { clientId: `camera-${Math.random().toString(16).substr(2, 8)}` }}

export default ({Vue}) => {
  Vue.config.productionTip = false
  Vue.use(VueConnection, connectionConfig)
}
