<template>
  <v-app>
    <v-timeline
      style="padding: 10px"
      align-top
      :dense="$vuetify.breakpoint.smAndDown"
    >
      <v-timeline-item
        v-for="(video, i) in allVideos.items"
        :key="i"
        :color="color[0]"
        icon="mdi-star"
        fill-dot
      >
        <videoItem
          :video="video"
        />
      </v-timeline-item>
    </v-timeline>
  </v-app>
</template>

<script>
  const videoItem = () => import('@/components/videoItem')

    export default {
      layout: 'videoLayout',
      name: "Video",
      components: {
        videoItem
      },
      async fetch() {
        this.allVideos = await this.$http.$get(
          "https://www.googleapis.com/youtube/v3/playlistItems?playlistId=UUSb71yKJmS0eHyhRRl00ioQ&key=AIzaSyAzu641YEewkYY6zzS8nAzTxY6XDLxCCkY&part=snippet&maxResults=10"
        )
      },
      data: () => ({
        allVideos: [],
      }),
      methods: {
        refresh() {
          this.$fetch()
        },
        ready (event) {
          this.player = event.target
        },
      },
      computed: {
        color() {
          const Array = [ 'green accent-1', 'lime lighten-1', 'blue', 'deep-orange accent-2', 'green accent-3', 'light-blue accent-2' ]
          return [].slice.call(Array).sort(() => Math.random() - 0.5)
        }
      },
    }
</script>

