<template>
  <v-app>
    <header>
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
      </div>
    </header>
    <div>
      <nuxt/>
    </div>
<!--    <template>-->
<!--      <div>-->
<!--        <div class="google-map" ref="googleMap"></div>-->
<!--        <template v-if="Boolean(this.google) && Boolean(this.map)">-->
<!--          <slot-->
<!--            :google="google"-->
<!--            :map="map"-->
<!--          />-->
<!--        </template>-->
<!--      </div>-->
<!--    </template>-->
    <div class="blog">
      <div class="container">
        <TravelMap class="travel-map"/>
      </div>
    </div>
    <footer>
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
  </v-app>
</template>

<script>
  // import GoogleMapsApiLoader from 'google-maps-api-loader'
  import TravelMap from "@/components/TravelMap";

  export default {
    components: {
      TravelMap
    },
    props: {
      mapConfig: Object,
      apiKey: String
    },

    data() {
      return {
        google: null,
        map: null
      }
    },

    async mounted() {
      const googleMapApi = await GoogleMapsApiLoader({
        apiKey: this.apiKey
      })

      this.google = googleMapApi
      this.initializeMap()
    },

    methods: {
      initializeMap() {
        const mapContainer = this.$refs.googleMap
        this.map = new this.google.maps.Map(
          mapContainer, this.mapConfig
        )
      }
    }
  }
</script>
<style>
  .travel-map {
    height: 400px;
  }
</style>


