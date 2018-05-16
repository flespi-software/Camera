<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="dark"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-toolbar-title>
          <img @click="leftDrawerOpen = !leftDrawerOpen" src="../statics/icons/icon-128x128.png" style="height: 40px; vertical-align: middle;" /> {{productName}} v.{{ version || '' }}
        </q-toolbar-title>
        <q-btn icon="mdi-logout" @click="loginRedirect()" round flat></q-btn>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Essential Links</q-list-header>
        <q-item @click.native="openURL('https://flespi.io')">
          <q-item-side icon="icon-flespi2-01" color="red" />
          <q-item-main label="Flespi Panel" sublabel="flespi.io" />
        </q-item>
        <q-item @click.native="openURL('https://flespi.com')">
          <q-item-side icon="icon-flespi2-01" />
          <q-item-main label="Official Site" sublabel="flespi.com" />
        </q-item>
        <q-item @click.native="openURL('https://github.com/flespi-software/')">
          <q-item-side icon="code" />
          <q-item-main label="GitHub" sublabel="github.com/flespi-software/" />
        </q-item>
        <q-item @click.native="openURL('https://forum.gurtam.com/viewforum.php?id=77')">
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Forum" sublabel="forum.gurtam.com" />
        </q-item>
        <q-item @click.native="openURL('https://twitter.com/flespi_software')">
          <q-item-side icon="mdi-twitter" />
          <q-item-main label="Twitter" sublabel="@flespi_software" />
        </q-item>
        <q-item @click.native="openURL('https://www.youtube.com/channel/UCNlb_PS9y3eULlBySx1zSHQ')">
          <q-item-side icon="mdi-youtube-tv" />
          <q-item-main label="YouTube" sublabel="Video Channel" />
        </q-item>
        <q-item @click.native="openURL('https://t.me//flespi_news')">
          <q-item-side icon="mdi-telegram" />
          <q-item-main label="Telegram" sublabel="@flespi_news" />
        </q-item>
      </q-list>
    </q-layout-drawer>
    <LoginButtons v-if="!token" />
    <q-page-container v-else>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import dist from '../../package.json'
import LoginButtons from '../components/LoginButtons.vue'
import { mapState, mapMutations } from 'vuex'
import { openURL } from 'quasar'
export default {
  name: 'LayoutDefault',
  components: {
    LoginButtons
  },
  computed: mapState({
    token: state => state.token
  }),
  data () {
    return {
      leftDrawerOpen: false,
      version: (dist && dist.version) || '',
      productName: (dist && dist.productName) || ''
    }
  },
  methods: {
    ...mapMutations({
      loginRedirect: 'loginRedirect'
    }),
    openURL (url) {
      openURL(url)
    }
  }
}
</script>

<style>
</style>
