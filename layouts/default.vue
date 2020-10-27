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





  </v-app>

</template>

<script>

  export default {
    components: {
      'catalog_item': () => import('~/components/catalog_item.vue'),
    },

    data() {
      return {
      }
    },
  }
</script>

<style>
  iframe {
    width: 100%;
    height: 450px;
    border: 2px;
    border-bottom-color: black;
  }
</style>




