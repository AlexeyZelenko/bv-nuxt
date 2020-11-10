<template>
  <v-card
    max-width="400"
    class="mx-auto"
    flex
    style="margin: 5px"
  >
    <v-card-title
      style="text-align: center"
    >
      <span
        style="text-align: center"
        v-html="video.snippet.title"
      ></span>
    </v-card-title>
    <v-card-text>
      <youtube
        style="padding: 5px"
        @ready="ready"
        :player-vars="{ autoplay: 0, controls: 1, modestbranding: 1, showinfo: 0, rel: 0 }"
        :video-id="video.snippet.resourceId.videoId"
        player-width="100%"
      />
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
      }
    }
</script>

<style>

</style>


