<template>
  <div>
    <v-card
      @click="$refs.modalName.openModal()"
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

    </v-card>
    <modal ref="modalName">
      <template v-slot:header>
        <h3>{{item_data.text}}</h3>
      </template>

      <template v-slot:body>
        <v-container fluid>
          {{item_data.text}} - "це..."
        </v-container>
      </template>

      <template v-slot:footer>
        <div>
          <v-btn
            @click="$refs.modalName.closeModal()"
            rounded
            color="primary"
            dark
            style="margin: 5px"
          >
            Закрити
          </v-btn>
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
    const Modal = () => import('~/components/Modal.vue')

    export default {
      name: "catalog_item",
      components: {
        Modal
      },
      data: () => ({
        custom: true,
    }),
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

