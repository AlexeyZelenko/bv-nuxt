<template>
  <v-app>
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
    <v-card>
      <v-tabs
        v-model="tab"
        background-color="deep-purple accent-4"
        centered
        dark
        icons-and-text
      >
        <v-tabs-slider></v-tabs-slider>

        <v-tab
          href="#tab-1"
        >
          Все
          <v-icon>mdi-phone</v-icon>
        </v-tab>

        <v-tab href="#tab-2">
          Хвала
          <v-icon>mdi-heart</v-icon>
        </v-tab>

        <v-tab href="#tab-3">
          Проповіді
          <v-icon>mdi-account-box</v-icon>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="i in 3"
          :key="i"
          :value="'tab-' + i"
        >
          <v-card flat>
            <nuxt/>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        links: [
          {name: 'Головна', value: '/'},
          {name: 'Про церкву', value: 'AboutChurch'},
          {name: 'Відео', value: 'Video'},
          {name: 'Контакти', value: 'Contacts'},
        ],
        tab: null,
      }
    },

  }
</script>
