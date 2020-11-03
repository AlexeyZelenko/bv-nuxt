<template>
  <v-app>
<!--    Меню-->
    <template>
      <v-tabs
        fixed-tabs
        background-color="indigo"
        dark
      >
        <v-tab
          @click="PlaylistIdAll"
        >
          Все
        </v-tab>
        <v-tab
          @click="PlaylistIdSermons"
        >
          Проповіді
        </v-tab>
        <v-tab
          @click='PlaylistIdSong'
        >
          Хвала
        </v-tab>
        <v-tab
          @click='PlaylistIdLife'
        >
          Життя церкви
        </v-tab>
        <v-tab
          @click='PlaylistIdChildren'
        >
          Діти - вірши
        </v-tab>
      </v-tabs>
    </template>

    <template>
      <v-row>
        <v-col
          v-for="(video, i) in allVideos.items"
          :key="i"
          class="d-flex child-flex"
        >
          <videoItem
            :video="video"
          />
        </v-col>
      </v-row>
    </template>

<!--    Добавить видео-->
    <template>
      <div class="text-center">
        <v-btn
          @click="resultPlus"
          class="ma-2"
          outlined
          color="indigo"
        >
          Додати ще 5 відео
        </v-btn>
      </div>
    </template>
  </v-app>
</template>

<script>
  const videoItem = () => import('@/components/videoItem')

    export default {
      // layout: 'videoLayout',
      name: "Video",
      components: {
        videoItem
      },
      async fetch() {
        this.allVideos = await this.$http.$get(
          `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${this.playlistId}&key=AIzaSyAzu641YEewkYY6zzS8nAzTxY6XDLxCCkY&part=snippet&maxResults=${this.result}`
        )
      },
      data: () => ({
        resultPlaylistId: 'UUSb71yKJmS0eHyhRRl00ioQ',
        pageVideoViews: 10,
        allVideos: [],
      }),
      watch: {
        '$route.query': '$fetch'
      },
      methods: {
        PlaylistIdSermons() {
          this.resultPlaylistId = 'PLlURDWJlf7fS8-Z9hz4ShqtXdjg2tIGil'
          this.refresh()
        },
        PlaylistIdAll() {
          this.resultPlaylistId = 'UUSb71yKJmS0eHyhRRl00ioQ'
          this.refresh()
        },
        PlaylistIdSong() {
          this.resultPlaylistId = 'PLlURDWJlf7fQyA3kIfQ9Pa3Dtd_tM97-z'
          this.refresh()
        },
        PlaylistIdLife() {
          this.resultPlaylistId = 'PLlURDWJlf7fTuF3VfkKrsesTtfQtuNwo9'
          this.refresh()
        },
        PlaylistIdChildren() {
          this.resultPlaylistId = 'PLlURDWJlf7fS9RdrfemM6deAzy1zLyhug'
          this.refresh()
        },
        resultPlus() {
          this.pageVideoViews = +this.pageVideoViews + 5
          this.refresh()
        },
        refresh() {
          this.$fetch()
        },
        ready (event) {
          this.player = event.target
        },
      },
      computed: {
        playlistId(){
          return this.resultPlaylistId
        },
        result() {
          return this.pageVideoViews
        },
        color() {
          const Array = [ 'green accent-1', 'lime lighten-1', 'blue', 'deep-orange accent-2', 'green accent-3', 'light-blue accent-2' ]
          return [].slice.call(Array).sort(() => Math.random() - 0.5)
        }
      },
    }
</script>

