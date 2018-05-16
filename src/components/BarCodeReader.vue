<template>
  <div>
    <q-btn @click="openCamera" icon="mdi-barcode-scan" small round flat v-if="!hidebutton"/>
    <q-modal ref="cameraModal" maximized v-model="opened" @show="this.init" @hide="this.destroyCamera">
      <div style="text-shadow: 0 0 5px black; z-index:9999; margin: 10px" class="absolute-top-left text-white">Cores: {{workers}}</div>
      <q-btn @click="closeCamera" icon="mdi-close" color="dark" class="absolute-top-right" style="z-index:3; margin:20px; opacity: .5" round small></q-btn>
      <div class="video-container">
        <div class="video" ref="barcodeReader"></div>
      </div>
    </q-modal>
  </div>
</template>

<script>
import {
  QBtn,
  QModal,
  Notify
} from 'quasar'
import Quagga from 'quagga'
import Vue from 'vue'

export default {
  name: 'BarCodeReader',
  components: {
    QBtn,
    QModal
  },
  props: {
    item: null,
    hidebutton: false,
    item_id: null
  },
  computed: {
    workers: () => {
      let cores = Math.round((navigator.hardwareConcurrency || 2) / 2)
      return cores < 1 ? 1 : cores
    }
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
      current: ''
    }
  },
  mounted () {
    let that = this
    Quagga.onProcessed(function (result) {
      var drawingCtx = Quagga.canvas.ctx.overlay, drawingCanvas = Quagga.canvas.dom.overlay

      if (result) {
        if (result.boxes) {
          drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute('width')), parseInt(drawingCanvas.getAttribute('height')))
          result.boxes.filter(function (box) {
            return box !== result.box
          }).forEach(function (box) {
            Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: 'green', lineWidth: 2})
          })
        }

        if (result.box) {
          Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: '#00F', lineWidth: 2})
        }

        if (result.codeResult && result.codeResult.code) {
          Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: 'red', lineWidth: 3})
        }
      }
    })
    let timeout = null
    Quagga.onDetected((data) => {
      if (that.current !== data.codeResult.code) {
        that.current = data.codeResult.code
        Notify.create(data.codeResult.code)
        that.snap(data.codeResult.code)
        clearTimeout(timeout)
        timeout = setTimeout(function () {
          that.current = ''
        }, 500)
      }
    })
  },
  updated () {
  },
  beforeDestroy () {
    this.destroyCamera()
  },
  methods: {
    init () {
      let that = this
      Quagga.init(
        {
          numOfWorkers: that.workers,
          inputStream: {
            name: 'Live',
            type: 'LiveStream',
            target: this.$refs.barcodeReader,
            constraints: {
              width: { ideal: 2000 },
              height: { ideal: 1500 },
              facingMode: 'environment'
            }
          },
          frequency: 1,
          decoder: {
            readers: [
              'code_128_reader',
              'ean_reader',
              'ean_8_reader' // ,
              // 'code_39_reader',
              // 'code_39_vin_reader',
              // 'codabar_reader',
              // 'upc_reader',
              // 'upc_e_reader',
              // 'i2of5_reader',
              // '2of5_reader',
              // 'code_93_reader'
            ]
          }
        },
        function (err) {
          if (err) {
            return
          }
          that.$refs.barcodeReader.querySelector('video').addEventListener('loadedmetadata', that.find_video_size)
          Quagga.start()
        }
      )
    },
    destroyCamera () {
      if (Quagga && this.opened) {
        Quagga.stop()
      }
    },
    snap (code) {
      if (this.item_id) Vue.connector.gw.postDevicesMessages(this.item_id, {'barcode': code})
    },
    errBack (e) {
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
        if (this.$refs.barcodeReader && this.$refs.barcodeReader.querySelector('video') && this.$refs.barcodeReader.querySelector('video').videoWidth > 0) {
          this.width = this.$refs.barcodeReader.querySelector('video').videoWidth
          this.height = this.$refs.barcodeReader.querySelector('video').videoHeight
          this.isStreaming = 9
          setTimeout(this.find_video_size, 200)
        } else {
          setTimeout(this.find_video_size, 200)
        }
      } else {
        if (this.$refs.barcodeReader && this.$refs.barcodeReader.querySelector('video') && this.$refs.barcodeReader.querySelector('video').videoWidth > 0) {
          this.width = this.$refs.barcodeReader.querySelector('video').videoWidth
          this.height = this.$refs.barcodeReader.querySelector('video').videoHeight
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
  width 100%
  background #000
  video, canvas.drawingBuffer
    position absolute
    top 0
    left 0
    width 100%
    height 100%
</style>
