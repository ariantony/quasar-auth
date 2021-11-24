<template>
  <q-page class="constrain q-pa-md">
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-8">
        <q-card
          v-for="post in posts"
          :key="post.id"
          class="card-post q-mb-md"
          flat
          bordered
        >
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>Tony Arianto</q-item-label>
              <q-item-label caption>
                {{post.location}}
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />

            <q-img :src="post.imageUrl">
            </q-img>
            <q-card-section>
              <div>{{post.caption}}</div>
              <div class="text-caption text-grey">{{ formatDate(post.date) }}</div>
            </q-card-section>

        </q-card>

      </div>
      <div class="col-4 large-screen-only">
        <q-item class="fixed">
          <q-item-section avatar>
            <q-avatar size="48px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Tony Arianto</q-item-label>
            <q-item-label caption>
              Jakarta
            </q-item-label>
          </q-item-section>
        </q-item>

      </div>

    </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { date } from 'quasar';

export default defineComponent({
  name: 'PageHome',
  data() {
    return {
      posts: [
        {
          id: 1,
          caption: 'Golden Gate Bridge',
          date: 1637156257584,
          location: 'San Franscisco, United States',
          imageUrl: 'https://cdn.quasar.dev/img/parallax2.jpg'
        },
        {
          id: 2,
          caption: 'Golden Gate Bridge',
          date: 1637156257584,
          location: 'San Franscisco, United States',
          imageUrl: 'https://cdn.quasar.dev/img/parallax2.jpg'
        },
        {
          id: 3,
          caption: 'Golden Gate Bridge',
          date: 1637156257584,
          location: 'San Franscisco, United States',
          imageUrl: 'https://cdn.quasar.dev/img/parallax2.jpg'
        },
        {
          id: 4,
          caption: 'Golden Gate Bridge',
          date: 1637156257584,
          location: 'San Franscisco, United States',
          imageUrl: 'https://cdn.quasar.dev/img/parallax2.jpg'
        }
      ]
    }
  },
methods: {
    formatDate(val) {
      return date.formatDate(val, 'DD MMMM YYYY - HH:MM:ss')
    }
  }
})
</script>

<style lang="scss">
.card-post .q-img {
  min-height: 200px;
}
</style>
