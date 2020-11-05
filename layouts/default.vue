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
      style="height: 100px"
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
<!--      <v-btn-->
<!--        icon-->
<!--        @click.stop="fixed = !fixed"-->
<!--      >-->
<!--        <v-icon>mdi-minus</v-icon>-->
<!--      </v-btn>-->
      <v-toolbar-title v-text="title" />
<!--      <v-toolbar-subtitle v-text="subtitle" />-->
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container style="width: 100%">
        <nuxt/>
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Ящик переключателя (нажми на меня)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
