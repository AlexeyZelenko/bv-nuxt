<template>
  <v-app>
    <v-timeline style="padding: 20px">
      <v-timeline-item
        v-for="(year, i) in years"
        :key="i"
        :color="year.color"
        small
      >
        <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold ${year.color}--text`"
          v-text="year.year"
        ></span>
        </template>
        <div class="py-4">
          <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
            {{year.title}}
          </h2>
          <div>
            {{year.text}}
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-app>
</template>

<script>
    export default {
        name: "AboutChurch",
        data: () => ({
          years: [
            {
              color: 'cyan',
              year: '1960',
              title: 'Створення церкви',
              text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'

            },
            {
              color: 'green',
              year: '1970',
              title: 'Хрещення Духом Святим',
              text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
            },
            {
              color: 'pink',
              year: '1980',
              title: '123',
              text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
            },
            {
              color: 'amber',
              year: '1990',
              title: '123',
              text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
            },
            {
              color: 'orange',
              year: '2000',
              title: '123',
              text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
            },
          ],
      }),
    }
</script>

<style scoped>

</style>
