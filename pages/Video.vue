<template>
  <v-app>
    <v-timeline
      style="padding: 10px"
      align-top
      :dense="$vuetify.breakpoint.smAndDown"
    >
      <v-timeline-item
        v-for="item in videos"
        :key="item.id"
        :color="item.color"
        :icon="item.icon"
        fill-dot
      >
        <v-card
          :color="item.color"
          dark
        >
          <v-card-title class="title">
            {{item.title}}
          </v-card-title>
          <v-card-text class="white text--primary">
            <client-only  placeholder="Загрузка...">
              <youtube :video-id="item.videoId"></youtube>
<!--              <youtube-media :video-id="item.videoId"></youtube-media>-->
              <youtube
                @ready="ready"
                :player-vars="{ autoplay: 0, controls: 1, modestbranding: 1, showinfo: 0, rel: 0 }"
                :player-width="200"
                :player-height="150"
                :video-id="item.videoId"
              />
            </client-only>

            <v-btn
              :color="item.color"
              class="mx-0"
              outlined
            >
              Button
            </v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-app>
</template>

<script>
    export default {
      name: "Video",
      data: () => ({
        videos: [
          {
            color: 'red lighten-2',
            icon: 'mdi-star',
            id: 1,
            title: '22.10.2020 Блага Вість Черкаси',
            videoId: 'GpgmeaSQ2bc',
          },
          {
            color: 'purple darken-1',
            icon: 'mdi-book-variant',
            id: 2,
            title: '22.10.2020 Блага Вість Черкаси',
            videoId: '25yGGiYARbc',
          },
          {
            color: 'green lighten-1',
            icon: 'mdi-airballoon',
            id: 3,
            title: '22.10.2020 Блага Вість Черкаси',
            videoId: 'mZbHFWWd6fg',
          },
          {
            color: 'indigo',
            icon: 'mdi-buffer',
            id: 4,
            title: '22.10.2020 Блага Вість Черкаси',
            videoId: 'mZbHFWWd6fg',
          },
        ],
      }),
      methods: {
        ready (event) {
          this.player = event.target
        },
        method (url) {
          this.videoId = this.$youtube.getIdFromURL(url)
          this.startTime = this.$youtube.getTimeFromURL(url)
        }
      }
    }
</script>

<style >
  .descriptions {
    padding: 10px;
    border-radius: 5px;
  }
    iframe {
      max-width: 100%;
      max-height: 400px;
    }

</style>
