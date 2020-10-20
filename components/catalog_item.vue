<template>
  <div class="v-catalog-item">
    <v-card
      max-width="200"
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

<style scoped>
  .v-catalog-item {
    min-width: 200px;
    text-align: center;
    vertical-align: middle;
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 16px;
    margin-bottom: 16px;
    z-index: 1;
    position: relative;
  }
</style>
