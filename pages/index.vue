<template>
  <div style="max-height: 1000px" v-bind:class="[dialog ? blurClass : '', bkClass]">
<!--    <button-->
<!--      @click="show = !show"-->
<!--    >-->
<!--      click me-->
<!--    </button>-->
    <v-parallax
      dark
      src="https://bv.ck.ua/wp-content/uploads/2017/05/3W_PlV0mzxU.jpg"
      style="height: 700px"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          <transition name="fade" appear mode="out-in">
            <template >
              <div class="text-center" v-if="show">
                <h2>
                  Приходьте на служіння
                </h2>
                <h4 class="subheading">
                  Щонеділі 10.00
                </h4>
                <template>
                  <v-row justify="center">
                    <v-dialog
                      v-model="dialog"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          rounded
                          style="margin: 15px"
                          v-bind="attrs"
                          v-on="on"
                          @click="VideoViewLast"
                          x-large
                        >
                          Дивитися останнє служіння
                        </v-btn>
                        <v-btn
                          rounded
                          style="margin: 15px"
                          x-large
                          @click="VideoViewLive"
                          v-bind="attrs"
                          v-on="on"
                        >
                          Дивитися онлайн служіння
                        </v-btn>
                      </template>

<!--                      Оснаннє відео-->
                      <transition name="fade">
                        <v-card
                          v-if="lastVideoView"
                          v-for="(video, i) in lastVideoData.items"
                          :key="i"
                        >
                          <v-card-title>
                            <span class="headline">{{video.snippet.title}}</span>
                            <v-spacer></v-spacer>
                            <v-btn
                              @click="dialog = false"
                              color="black"
                              dark
                              icon
                            >
                              <v-icon>mdi-close</v-icon>
                            </v-btn>
                          </v-card-title>

                          <youtube
                            :player-vars="{ autoplay: 1}"
                            :video-id="video.snippet.resourceId.videoId"
                            @ready="ready"
                          />
                        </v-card>
                      </transition>

<!--                      Онлайн трансляция-->
                      <transition name="fade">
                        <v-card
                          v-if="liveVideoView"
                          v-for="(video, i) in liveVideoData.items"
                          :key="i"
                        >
                          <v-card-title>
                            <span class="headline">{{video.snippet.title}}</span>
                            <v-spacer></v-spacer>
                            <v-btn
                              @click="dialog = false"
                              color="black"
                              dark
                              icon
                            >
                              <v-icon>mdi-close</v-icon>
                            </v-btn>
                          </v-card-title>

                          <youtube
                            :player-vars="{ autoplay: 1}"
                            :video-id="video.id.videoId"
                            @ready="ready"
                          />
                        </v-card>
                      </transition>
                    </v-dialog>
                  </v-row>
                </template>
              </div>
            </template>
          </transition>

        </v-col>
      </v-row>
    </v-parallax>
    <div class="services">
      <div class="container">
        <catalog_item
          :item_data="item"
          :key="i"
          class="service"
          v-for="(item, i) in items"
        />
      </div>
    </div>
    <div>
      <footer>
        <div>
          <div>
            <div>
              <iframe
                allowfullscreen=""
                aria-hidden="false"
                frameborder="0"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2595.4405292888096!2d32.10316!3d49.419485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9101cca08af2968c!2z0KbQtdGA0LrQvtCy0Ywg0JHQu9Cw0LPQsNGPINCS0LXRgdGC0Ywg0KfQtdGA0LrQsNGB0YHRiw!5e0!3m2!1suk!2sus!4v1603789520347!5m2!1suk!2sus"
                style="border:0;"
                tabindex="0"
              >

              </iframe>
            </div>
            <!--      <GmapMap-->
            <!--        :center="{lat:15, lng:10}"-->
            <!--        :zoom="7"-->
            <!--        map-type-id="terrain"-->
            <!--        style="width: 100%; height: 400px"-->
            <!--      />-->
          </div>
        </div>
        <div class="container">
          <div class="brand">Блага вість</div>
          <nav>
            <ul class="menu">
              <li><a href="#">Головна</a></li>
              <li><a href="#">Про церкву</a></li>
              <li><a href="#">Відео</a></li>
              <li><a href="#">Контакти</a></li>
            </ul>
          </nav>
          <p class="copyright">© {{ new Date().getFullYear() }} — Блага вість</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    transition: {
      name: "fade",
      mode: "out-in"
    },
    mounted() {
      this.show = true
    },
    components: {
      // 'videoItem': () => import('~/components/videoItem.vue'),
      'catalog_item': () => import('~/components/catalog_item.vue')
    },
    data: () => ({
      show: true,
      bkClass: 'bk',
      blurClass: 'blur',
      lastVideoData: [],
      liveVideoData: [],
      liveVideoView: false,
      lastVideoView: false,
      dialog: false,
      items: [
        {
          title: 'Четвер',
          img: "https://bv.ck.ua/wp-content/uploads/2017/04/adfe8a20-660b-4a61-a747-d2a96a25d738.jpg",
          text: 'Загальноцерковне служіння',
          subtitle: '18:00',
          id: '1'
        },
        {
          title: 'П\'ятниця',
          img: "https://bv.ck.ua/wp-content/uploads/2017/04/e27d6b97-aa5c-474f-9319-f608b4cce1d8.jpg",
          text: 'Загальноцерковна нічна молитва',
          subtitle: '23:00',
          id: '2'
        },
        {
          title: 'Неділя',
          img: "https://bv.ck.ua/wp-content/uploads/2017/05/3W_PlV0mzxU.jpg",
          text: 'Загальноцерковне служіння',
          subtitle: '10:00',
          id: 3
        },
        {
          title: 'Неділя',
          img: "https://bv.ck.ua/wp-content/uploads/2017/04/5a9e0e44-e817-441d-974e-50c826b9a946.jpg",
          text: 'Молитва на "Соборній площі"',
          subtitle: '16:00',
          id: 4
        }
      ]
    }),
    async fetch() {
      this.lastVideoData = await this.$http.$get(
        `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=UUSb71yKJmS0eHyhRRl00ioQ&key=AIzaSyAzu641YEewkYY6zzS8nAzTxY6XDLxCCkY&part=snippet&&maxResults=1`
      )
      this.liveVideoData = await this.$http.$get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC0LDCL28b4uZ0nqr1bH7CSw&eventType=live&type=video&key=AIzaSyAzu641YEewkYY6zzS8nAzTxY6XDLxCCkY`
      )
    },
    computed: {
      // liveVideoDataOnline() {
      //   if (this.liveVideoData.item) {
      //     return true
      //   } else {
      //     return false
      //   }
      // },
      lastVideo() {
        return this.lastVideoData.items[0]
      },
      liveVideo() {
        return this.liveVideoData.items[0]
      }
    },
    watch: {
      '$route.query': '$fetch'
    },
    methods: {
      VideoViewLast() {
        this.dialog = true
       this.lastVideoView = true
        this.liveVideoView = false
      },
      VideoViewLive() {
        this.dialog = true
        this.liveVideoView = true
        this.lastVideoView = false
      },
      ready(event) {
        this.player = event.target
      },
      refresh() {
        this.$fetch()
      },
    }
  }
</script>

<style>
  @import '../assets/style.css';
  @import '../assets/normalize.css';

  .fade-enter-active {
    transition: transform 1s cubic-bezier(1, 0.5, 0.8, 1),
    color 1s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .fade-leave-active {
    transition: transform 2s cubic-bezier(1, 0.5, 0.8, 1),
    color 2s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .fade-enter {
    color: mediumblue;
    transform: translateY(20px);
  }

  .fade-leave-to {
    transform: translateX(100px);
    color: cyan;
  }

  iframe {
    width: 100%;
    height: 500px;
  }
  .bk {
    transition: all 0.1s ease-out;
  }

  .blur {
    filter: blur(2px);
    opacity: 0.9;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.25s ease-out;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>

