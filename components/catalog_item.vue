<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="item_data.img"
    >
      <v-card-title
        v-html="item_data.title"
      ></v-card-title>
    </v-img>
    <ImageItem
      style="margin: 0 auto"
      :source="item_data.img"
    />

    <v-card-subtitle class="pb-0">
      {{item_data.subtitle}}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{item_data.text}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        {{item_data.Share}}
      </v-btn>

    </v-card-actions>
  </v-card>
</template>

<script>
    export default {
      name: "catalog_item",
      components: {
        'ImageItem': () => import('~/components/ImageItem.vue'),
      },
      props: {
        item_data: {
          type: Object,
          default() {
            return {}
          }
        },
      },
    }
</script>

<style scoped>

</style>
