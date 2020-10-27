<template >
  <div style="max-height: 1000px">
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
    <div class="services">
      <div class="container">
        <catalog_item
          class="service"
          :item_data="item"
          v-for="(item, i) in items"
          :key="i"
        />
      </div>
    </div>
    <div>
      <footer>
        <div >
          <div>
            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2595.4405292888096!2d32.10316!3d49.419485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9101cca08af2968c!2z0KbQtdGA0LrQvtCy0Ywg0JHQu9Cw0LPQsNGPINCS0LXRgdGC0Ywg0KfQtdGA0LrQsNGB0YHRiw!5e0!3m2!1suk!2sus!4v1603789520347!5m2!1suk!2sus"
                      frameborder="0"
                      style="border:0;"
                      allowfullscreen=""
                      aria-hidden="false"
                      tabindex="0"
              >

              </iframe>
            </div>
            <!--      <GmapMap-->
            <!--        :center="{lat:15, lng:10}"-->
            <!--        :zoom="7"-->
            <!--        map-type-id="terrain"-->
            <!--        style="width: 100%; height: 400px"-->
            <!--      />-->
          </div>
        </div>
        <div class="container">
          <div class="brand">Блага вість</div>
          <nav>
            <ul class="menu">
              <li><a href="#">About</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <p class="copyright">© {{ new Date().getFullYear() }} — Блага вість</p>
        </div>
      </footer>
    </div>
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
  @import '../assets/style.css';
  @import '../assets/normalize.css';
  iframe {
    width: 100%;
    height: 500px;
  }
</style>

