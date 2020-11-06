<template>
  <v-timeline
    align-top
    :dense="$vuetify.breakpoint.smAndDown"
  >
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <v-card
        :color="item.color"
        dark
      >
        <v-card-title class="title">
          Событие
        </v-card-title>
        <v-card-text class="white text--primary">
          <p>Описание события</p>
          <v-btn
            :color="item.color"
            class="mx-0"
            outlined
          >
            Фото
          </v-btn>
          <v-btn
            :color="item.color"
            class="mx-0"
            outlined
          >
            Подробнее...
          </v-btn>
          <v-btn
            :color="item.color"
            class="mx-0"
            outlined
          >
            Дата
          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
    export default {
      name: "PhotoGallery",
      data: () => ({
        items: [
          {
            color: 'red lighten-2',
            icon: 'mdi-star',
          },
          {
            color: 'purple darken-1',
            icon: 'mdi-book-variant',
          },
          {
            color: 'green lighten-1',
            icon: 'mdi-airballoon',
          },
          {
            color: 'indigo',
            icon: 'mdi-buffer',
          },
        ],
      }),
    }
</script>

<style scoped>

</style>
