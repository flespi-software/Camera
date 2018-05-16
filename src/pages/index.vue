<template>
  <q-page class="bg-dark" style="height: calc(100vh - 50px); text-align: center;">
    <div class="q-pa-md" style="height:50%;max-height: 500px;max-width:500px;margin: 0 auto;">
      <q-card class="fit cursor-pointer" @click.native="selectDevice" color="white">
        <q-card-media class="fit">
          <img src="../statics/icons/barcode/icon-512x512.png" style="max-height:100%; height: auto; width: auto; margin: auto"/>
          <q-card-title slot="overlay" v-if="devices.length > 0">
            Grab a barcode!
            <span slot="subtitle">Will be sent to device</span>
          </q-card-title>
          <q-card-title slot="overlay" v-else>
            Grab a barcode!
            <span slot="subtitle">You should create device first.</span>
          </q-card-title>
        </q-card-media>
      </q-card>
    </div>
    <div class="q-pa-md" style="height:50%;max-height: 500px;max-width:500px;margin: 0 auto;">
      <q-card class="fit cursor-pointer" @click.native="selectCdn" color="blue">
        <q-card-media class="fit">
          <img src="../statics/icons/icon-512x512.png" style="max-height:100%; height: auto; width: auto; margin: auto"/>
          <q-card-title slot="overlay">
            Take a photo!
            <span slot="subtitle">Will be saved to cdn</span>
          </q-card-title>
        </q-card-media>
      </q-card>
    </div>
    <Camera ref="camera" :photos="photos" :item_id="cdn_id" :hidebutton="true" />
    <BarCodeReader ref="barcode" :item_id="device_id" :hidebutton="true" />
  </q-page>
</template>

<style>
</style>

<script>
import Vue from 'vue'
import Camera from '../components/Camera.vue'
import BarCodeReader from '../components/BarCodeReader.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'PageIndex',
  components: {
    Camera,
    BarCodeReader
  },
  computed: {
    ...mapState({
      files: state => state.data.files,
      cdns: state => state.data.cdns.reduce(function (newArray, itm) {
        newArray.push({value: itm.id, label: itm.name || ('#' + itm.id)})
        return newArray
      }, []),
      devices: state => state.data.devices.reduce(function (newArray, itm) {
        newArray.push({value: itm.id, label: itm.name || ('#' + itm.id)})
        return newArray
      }, [])
    }),
    photos: function () {
      var that = this
      return this.files.filter(function (itm) {
        return ((itm && that.cdn_id === itm.cdn_id)) && (
          (itm.name !== null && !!itm.name.match(/flespiCam(.*)\.jpg/))
        )
      }).reduce(function (newArray, itm) {
        newArray.push('https://' + that.host + '/file/' + itm.uuid)
        return newArray
      }, [])
    }
  },
  data () {
    return {
      host: 'cdn.flespi.io',
      getInterval: null,
      intervals: {},
      cdn_id: null,
      device_id: null
    }
  },
  mounted () {
    this.getCdns()
    this.getDevices()
    if (this.cdn_id) { this.getFiles(this.cdn_id) }
  },
  created () {
    Vue.set(this.intervals, 'getlists', setInterval(() => {
      this.getCdns()
      this.getDevices()
    }, 30000))
    Vue.set(this.intervals, 'getFiles', setInterval(() => { if (this.cdn_id) { this.getFiles(this.cdn_id) } }, 10000))
  },
  beforeDestroy () {
    clearInterval(this.intervals.getlists)
    clearInterval(this.intervals.getFiles)
  },
  watch: {
    cdn_id () {
      if (this.cdn_id) { this.getFiles(this.cdn_id) }
    }
  },
  methods: {
    ...mapMutations({
      getCdns: 'getCdns',
      getDevices: 'getDevices',
      getFiles: 'getFiles',
      onError: 'onError'
    }),
    selectCdn () {
      this.$q.dialog({
        title: 'Select CDN',
        message: 'Choose CDN to save photos.',
        options: {
          type: 'radio',
          model: this.cdn_id,
          items: this.cdns
        },
        cancel: true,
        preventClose: true,
        color: 'secondary'
      }).then(data => {
        this.cdn_id = data
        if (this.cdn_id) this.$refs.camera.openCamera()
      }).catch(() => {
        this.cdn_id = null
      })
    },
    selectDevice () {
      this.$q.dialog({
        title: 'Select device',
        message: 'Choose device to save barcode.',
        options: {
          type: 'radio',
          model: this.device_id,
          items: this.devices
        },
        cancel: true,
        preventClose: true,
        color: 'secondary'
      }).then(data => {
        this.device_id = data
        if (this.device_id) this.$refs.barcode.openCamera()
      }).catch(() => {
        this.device_id = null
      })
    }
  }
}
</script>
