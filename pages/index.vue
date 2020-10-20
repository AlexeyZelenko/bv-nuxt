<template >
  <div style="height: 2000px">
    <v-parallax
      style="height: 700px"
      dark
      src="https://bv.ck.ua/wp-content/uploads/2017/05/3W_PlV0mzxU.jpg"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          <h1 class="display-1 font-weight-thin mb-4">
            Vuetify
          </h1>
          <h4 class="subheading">
            Build your application today!
          </h4>
        </v-col>
      </v-row>
    </v-parallax>
    <template >
      <div class="catalog-item">
        <catalog_item
          :item_data="item"
          v-for="(item, i) in items"
          :key="i"
        />
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    components: {
      'catalog_item': () => import('~/components/catalog_item.vue')
    },
    data: () => ({
      items: [
        {
          title: 'Australian beaches',
          img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          text: 'Whitehaven Beach',
          subtitle: 'Number 10',
          Share: 'Share',
          id: '1'
        },
        {
          title: 'Australian2',
          img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          text: 'Whitehaven Beach',
          subtitle: 'Number 10',
          Share: 'Share',
          id: '2'
        },
        {
          title: 'Australian3',
          img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          text: 'Whitehaven Beach',
          subtitle: 'Number 10',
          Share: 'Share',
          id: 3
        },
        {
          title: 'Australian3',
          img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          text: 'Whitehaven Beach',
          subtitle: 'Number 10',
          Share: 'Share',
          id: 4
        }
      ]
    })
  }
</script>

<style>
  /*@import './assets/variables.scss';*/
  .catalog-item {
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

