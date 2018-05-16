<template>
  <div style="">
    <q-btn @click="openCamera" icon="mdi-camera" small round flat v-if="!hidebutton" />
    <q-modal ref="cameraModal" maximized v-model="opened" @show="this.init" @hide="this.destroyCamera">
      <q-btn @click="closeCamera" icon="mdi-close" color="dark" class="absolute-top-right" style="z-index:3; margin:20px; opacity: .5" round small></q-btn>
      <q-carousel ref="cameraSlide" class="text-white cameraSlide" style="height:100%" v-model="slide">
        <q-carousel-slide class="bg-black">
          <div class="video-container">
            <video ref="video" autoplay class="video" @loadedmetadata="find_video_size"></video>
            <canvas ref="canvas" :width="width" :height="height" :style="'opacity: .8; z-index:2;' + 'zoom: ' + (zoom.toString()) + ';margin:100px'" class="absolute-bottom-left" @click="$refs.cameraSlide.next()"></canvas>
            <q-btn ref="snap" @click="snap" icon="mdi-camera" round color="red" class="absolute-bottom" style="z-index: 9; margin: 20px auto"/>
            <q-btn v-if="$q.platform.is.mobile && false" @click="toggleCamera" :icon="camera === 'environment' ? 'mdi-camera-rear-variant' : 'mdi-camera-front-variant'" round small flat color="white" class="absolute-bottom-right" style="z-index: 3; margin: 20px auto"/>
          </div>
        </q-carousel-slide>
        <q-carousel-slide class="bg-dark scroll" style="padding: 2.3rem;">
          <div class="q-gallery">
            <div
              v-for="(img, index) in photos"
              :style="{width: width}"
              :key="index"
            >
              <img :src="img">
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </q-modal>
  </div>
</template>

<script>
import {
  QBtn,
  QModal,
  QCarousel,
  QCarouselSlide
} from 'quasar'
import Vue from 'vue'

export default {
  name: 'Camera',
  components: {
    QBtn,
    QModal,
    QCarousel,
    QCarouselSlide
  },
  props: {
    item_id: null,
    photos: null,
    hidebutton: false
  },
  data () {
    return {
      stream: null,
      width: 320,
      height: 240,
      isStreaming: 0,
      zoom: 1,
      camera: 'environment',
      opened: false,
      slide: 0
    }
  },
  mounted () {
  },
  updated () {
  },
  beforeDestroy () {
    this.destroyCamera()
  },
  methods: {
    init () {
      let that = this
      this.destroyCamera()
      this.slide = 0
      let hdConstraints = {
        video: {
          facingMode: 'environment',
          width: { ideal: 2000 },
          height: { ideal: 1500 }
        }
      }
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia(hdConstraints).then(function (stream) {
          that.stream = stream
          try {
            that.$refs.video.srcObject = stream
          } catch (error) {
            that.$refs.video.src = window.URL.createObjectURL(stream)
          }
          that.$refs.video.play()
        })
      } else if (navigator.getUserMedia) { // Standard
        navigator.getUserMedia(hdConstraints, function (stream) {
          that.stream = stream
          that.$refs.video.src = stream
          that.$refs.video.play()
        }, that.errBack)
      } else if (navigator.mozGetUserMedia) { // Mozilla-prefixed
        navigator.mozGetUserMedia(hdConstraints, function (stream) {
          that.stream = stream
          that.$refs.video.src = window.URL.createObjectURL(stream)
          that.$refs.video.play()
        }, that.errBack)
      } else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
        navigator.webkitGetUserMedia(hdConstraints, function (stream) {
          that.stream = stream
          that.$refs.video.src = window.webkitURL.createObjectURL(stream)
          that.$refs.video.play()
        }, that.errBack)
      }
    },
    destroyCamera () {
      if (this.stream) {
        for (let track of this.stream.getTracks()) {
          track.stop()
        }
      }
    },
    snap () {
      if (!this.stream) {
        this.init()
      }
      this.$refs.canvas.getContext('2d').drawImage(this.$refs.video, 0, 0, this.width, this.height)
      this.$refs.canvas.toBlob((blob) => {
        let formdata = new FormData()
        formdata.append('file', blob, 'flespiCam_' + this.width + 'x' + this.height + '.jpg')
        Vue.connector.http.post('/storage/cdns/' + (this.item_id || 'any') + '/files', formdata, "{'expire': 86400}")
      }, 'image/jpeg')
    },
    errBack (e) {
      console.log(e)
    },
    openCamera () {
      this.opened = true
    },
    closeCamera () {
      this.destroyCamera()
      this.opened = false
    },
    toggleCamera () {
      this.camera = (this.camera === 'environment' ? 'user' : 'environment')
      this.init()
    },
    find_video_size () {
      if (this.isStreaming++ <= 10) {
        if (this.$refs.video && this.$refs.video.videoWidth > 0) {
          this.width = this.$refs.video.videoWidth
          this.height = this.$refs.video.videoHeight
          this.isStreaming = 9
          setTimeout(this.find_video_size, 200)
        } else {
          setTimeout(this.find_video_size, 200)
        }
      } else {
        if (this.$refs.video) {
          this.width = this.$refs.video.videoWidth
          this.height = this.$refs.video.videoHeight
        }
      }
    }
  },
  watch: {
    width (n) {
      this.zoom = this.width / 200 / 100
    }
  }
}
</script>

<style lang="styl">
.cameraSlide
  .q-carousel-track > div
    padding 0
.video-container
  position relative
  overflow hidden
  height 100%
  background #000
  padding-bottom 30%
  .video
    position absolute
    top 0
    left 0
    width 100%
    height 100%

.q-gallery
  width 100%
  display flex
  flex-flow row wrap

  div
    flex auto
    width 150px
    margin 0 12px 12px 0
    &.q-gallery-main
      flex-basis 200%

  img
    height auto
    width 100%
body.desktop .q-gallery-carousel-quickview img:hover
  opacity 1
</style>
