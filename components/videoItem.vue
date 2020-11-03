<template>
  <v-card>
    <v-card-title
      class="title"
    >
      <span
        v-html="video.snippet.title"
      ></span>
    </v-card-title>
    <v-card-text class="white text--primary">
      <client-only  placeholder="Загрузка...">
        <youtube
          style="padding: 5px"
          @ready="ready"
          :player-vars="{ autoplay: 0, controls: 1, modestbranding: 1, showinfo: 0, rel: 0 }"
          :video-id="video.snippet.resourceId.videoId"
        />
      </client-only>
    </v-card-text>
  </v-card>
</template>

<script>
    export default {
      name: "videoItem",
      data: () => ({
      }),
      props: {
          video: {
            type: Object,
            default() {
              return {}
            }
          }
      },
      methods: {
        ready (event) {
          this.player = event.target
        },
      },
      computed: {
        ArrayAllIdVideos() {
          return this.video.snippet
        },
        color() {
          const Array = [ 'red', 'green', 'blue', 'pink', 'purple', 'purple lighten-2', 'indigo', 'indigo darken-1', 'light-blue lighten-1' ]
          return [].slice.call(Array).sort(() => Math.random() - 0.5)
        }
      }
    }
</script>

