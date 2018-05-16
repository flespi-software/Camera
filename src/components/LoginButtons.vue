<template>
  <div class="loadingsplash index-page absolute-top-left absolute-bottom-right window-height window-width column items-center">
    <div class="banner text-center items-top justify-center">
      <a href="https://flespi.com" title="flespi"><img :src="'statics/icons/icon-512x512.png'" class="main-logo"></a>
      <div class="text-white">
        <big>Login/Register with</big>
        <div>
          <span v-for="(url, index) in providers" :key="index">
            <q-icon :name="providersinfo[index]" size="3rem" color="white" @click.native="openWindow(url)" class="cursor-pointer"></q-icon>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Notify, Cookies, QIcon } from 'quasar'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'LoginButtons',
  components: {
    QIcon
  },
  computed: mapState({
    token: state => state.token,
    providers: state => state.oauthproviders
  }),
  data () {
    return {
      providersinfo: {
        'live': 'mdi-windows',
        'github': 'mdi-github-box',
        'google': 'mdi-google-plus-box',
        'facebook': 'mdi-facebook-box'
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
        let loadingSplash = document.querySelector('.loadingsplash')
        if (loadingSplash) loadingSplash.classList.toggle('loadingsplash')
      }, 300)
      this.getOauthProviders()
    })
    let cookie = Cookies.get('X-Flespi-Token')
    if (cookie) {
      this.$store.commit('setToken', cookie.replace('FlespiToken ', ''))
    }
    var fae = Cookies.get('FlespiError')
    if (fae) {
      var errtext
      switch (fae) {
        case 'createcustomer': errtext = 'Failed to authenticate. User with this email already exists. Please link this account after login'; break
        case 'emailupdate': errtext = 'Something\'s wrong'; break
        case 'emaillink': errtext = 'Wrong link!'; break
        default: errtext = 'Failed to authenticate. Please try another option'
      }
      Notify.create.negative({html: errtext})
      Cookies.remove('FlespiError')
    }
    let that = this
    window.addEventListener('message', function (event) {
      if (typeof event.data === 'string' && ~event.data.indexOf('FlespiToken')) {
        that.$store.commit('setToken', event.data)
        Cookies.set('X-Flespi-Token', event.data.replace('FlespiToken ', ''), {expires: 1})
      }
    })
  },
  methods: {
    ...mapMutations({
      getOauthProviders: 'getOauthProviders'
    }),
    openWindow (url, title) {
      console.log(url)
      title = title || 'auth'
      let w = 500, h = 600
      let dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left
      let dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top

      let width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width
      let height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height

      let left = ((width / 2) - (w / 2)) + dualScreenLeft
      let top = ((height / 2) - (h / 2)) + dualScreenTop
      let newWindow = window.open(url, title, 'toolbar=no,location=no,status=yes,resizable=yes,scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left)

      // Puts focus on the newWindow
      if (window.focus) {
        newWindow.focus()
      }
    }
  }
}
</script>

<style lang="styl">
.index-page
  z-index: 99999
  .banner
    height 100vh
    width 100%
    /*font-size 30vmax*/
    color rgba(255, 255, 255, .2)
    overflow hidden
    min-height 164px
    /* background-image url('../statics/mountain.svg') */
    background-position center 15vh
    background-size contain
    background-repeat no-repeat
    background-color #333
    position relative
    -webkit-transition: all 0.6s ease-in-out
    -moz-transition: all 0.6s ease-in-out
    -o-transition: all 0.6s ease-in-out
    transition: all 0.6s ease-in-out
.main-logo
  max-width 100%
  z-index 1
  margin-top 20px
  -webkit-transition: all 0.6s ease-out;
  -moz-transition: all 0.6s ease-out;
  -o-transition: all 0.6s ease-out;
  transition: all 0.6s ease-out;
.loadingsplash
  .banner
    height 100vh
    background-position center 100vh
  .main-logo
    margin-top 30vh
    width 600px
    max-height 30vh
</style>
