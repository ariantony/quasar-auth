<template>
  <q-page class="q-ma-sm">
    <q-card class="my-card" flat bordered>
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <q-icon name="eva-person-outline" style="font-size: 30px;"/>
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ $t('setting.account.title') }}</q-item-label>
          <q-item-label caption>
            {{ $t('setting.account.subtitle') }}
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-card-section horizontal>
        <q-card-section>
          <q-list>
            <q-item clickable>
              <q-item-section>Berlangganan</q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card-section>
    </q-card>

        <q-card class="my-card q-mt-md" flat bordered>
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <q-icon name="eva-flag-outline" style="font-size: 30px;"/>
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ $t('setting.account.language') }}</q-item-label>
          <q-item-label caption>
            {{ $t('setting.account.subtitle_lang') }}
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />

      <q-card-section>
            <q-select class="full-width" v-model="model" :options="options" label="Bahasa" />

      </q-card-section>
    </q-card>

  </q-page>

</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      model: ref(null),
      options: [
        'Bahasa Indonesia', 'Bahasa Inggris'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
