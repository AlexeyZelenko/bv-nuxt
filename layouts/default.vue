<template>
  <v-app>
    <header>
      <div class="container">
        <div class="brand">Блага вість</div>
        <nav>
          <ul class="menu">
            <li>
              <v-btn
                text
                v-for="link in links"
                :key="link.name"
                :to="link.value"
              >
                {{ link.name }}
              </v-btn>
            </li>
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
    },

    data() {
      return {
        links: [
          {name: 'Головна', value: '/'},
          {name: 'Про церкву', value: 'AboutChurch'},
          {name: 'Відео', value: 'Contacts'},
          {name: 'Контакти', value: 'Contacts'},
        ],
      }
    },
  }
</script>





