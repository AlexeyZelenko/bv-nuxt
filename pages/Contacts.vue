<template>
  <v-app>
    <v-timeline style="padding: 10px">
      <v-timeline-item
        v-for="contact in contacts"
        :key="contact.name"
        large
      >
        <template v-slot:icon>
          <v-avatar>
            <img
              :src="(contact.avatar)"
              alt=""
            >
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <span>{{contact.name}}</span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="headline">
            {{contact.title}}
          </v-card-title>
          <v-card-text>
            {{contact.text}}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-app>
</template>

<script>
    export default {
        name: "Contacts",
        data: () => ({
        contacts: [
          {
            title: 'Пастор',
            name: 'Петя',
            text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
            avatar: 'http://i.pravatar.cc/65'
          },
          {
            title: 'Помічник пастора',
            name: 'Вася',
            text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
            avatar: 'http://i.pravatar.cc/65'
          },
          {
            title: 'Lorem ipsum',
            name: 'Юра',
            text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
            avatar: 'http://i.pravatar.cc/65'
          },
        ],
      }),
    }
</script>

<style scoped>

</style>
