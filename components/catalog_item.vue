<template>
  <div>
    <v-card
    >
      <v-img
        class="white--text align-end"
        min-height="300px"
        :src="item_data.img"
      >
        <v-card-title
          v-html="item_data.title"
        ></v-card-title>
      </v-img>

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
  </div>
</template>

<script>
    export default {
      name: "catalog_item",
      components: {
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

