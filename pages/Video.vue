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
            <div class="video"
                 v-html="item.video"
            ></div>            <v-btn
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
            video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/GpgmeaSQ2bc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
          },
          {
            color: 'purple darken-1',
            icon: 'mdi-book-variant',
            id: 2,
            title: '22.10.2020 Блага Вість Черкаси',
            video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/25yGGiYARbc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
          },
          {
            color: 'green lighten-1',
            icon: 'mdi-airballoon',
            id: 3,
            title: '22.10.2020 Блага Вість Черкаси',
            video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mZbHFWWd6fg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
          },
          {
            color: 'indigo',
            icon: 'mdi-buffer',
            id: 4,
            title: '22.10.2020 Блага Вість Черкаси',
            video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/mZbHFWWd6fg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
          },
        ],
      }),
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
