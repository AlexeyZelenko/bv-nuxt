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
            name: 'Бієвець Юрій Вікторович',
            text: 'Пастор (івр. רועה, лат. Pastor «пастух») або «пастир» - біблійний термін, який вказує на обов\'язок пастиря піклуватися про церкви, тобто пастви (алегорично «стадо овець»). У лютеранських громадах пасторами називають людей, покликаних для публічної проповіді і здійснення таїнств.',
            avatar: ''
          },
          {
            title: 'Помічник пастора',
            name: 'Підгорецька Вікторія',
            text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
            avatar: ''
          },
          {
            title: 'Регіональний служитель',
            name: 'Бобков Володимир',
            text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
            avatar: ''
          },
          {
            title: 'Регіональний служитель',
            name: 'Воронков Дмитро',
            text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
            avatar: ''
          },
          {
            title: 'Регіональний служитель',
            name: 'Афанасенко',
            text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
            avatar: ''
          },
          {
            title: 'Регіональний служитель',
            name: 'мав',
            text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
            avatar: 'http://i.pravatar.cc/65'
          },
        ],
      }),
    }
</script>

<style scoped>

</style>
