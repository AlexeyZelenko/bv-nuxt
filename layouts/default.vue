<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.name"
          :to="link.value"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="link.name" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      app
      shrink-on-scroll
      prominent
      scroll-target="#scrolling-techniques"
    >
      <v-app-bar-nav-icon
        style="padding-bottom: 30px"
        @click.stop="drawer = !drawer"
      />
      <v-btn
        style="padding-bottom: 30px"
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>
          mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}
        </v-icon>
      </v-btn>
      <v-toolbar-title
        style="padding: 5px; margin-top: 5px"
      >
        <v-list-item>
          <v-list-item-content
          >
            <v-list-item-title class="overline mb-4">
              Церква християн віри євангельскої
            </v-list-item-title>
            <div
              class="headline mb-1"
            >
              Блага вість
            </div>
<!--            <v-list-item-subtitle-->
<!--              style="margin-top: 5px"-->
<!--            >-->
<!--              Черкаси-->
<!--            </v-list-item-subtitle>-->
          </v-list-item-content>
        </v-list-item>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        style="padding-bottom: 20px"
        icon
      >
        <v-icon>mdi-account-box</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-sheet
        id="scrolling-techniques"
        class="overflow-y-auto"
        max-height="700"
      >
        <v-container
          style="width: 100%; height: 1000px"
        >
          <nuxt/>
        </v-container>
      </v-sheet>
    </v-main>
<!--    <v-footer-->
<!--      :absolute="!fixed"-->
<!--      app-->
<!--    >-->
<!--      <span>&copy; {{ new Date().getFullYear() }}</span>-->
<!--    </v-footer>-->
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        links: [
          {name: 'Головна', value: '/', icon: 'mdi-apps',},
          {name: 'Про церкву', value: 'AboutChurch', icon: 'mdi-church',},
          {name: 'Відео', value: 'Video', icon: 'mdi-video',},
          {name: 'Контакти', value: 'Contacts', icon: 'mdi-contacts',},
          {name: 'Inspire', value: 'inspire', icon: 'mdi-chart-bubble',},
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Блага вість',
        subtitle: 'Церква християн віри євангельскої'
      }
    }
  }
</script>

