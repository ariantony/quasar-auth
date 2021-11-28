<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
    class="bg-white"
    bordered
    >
    <q-toolbar class="text-grey-10 constrain">
      <q-btn
        to="/camera"
        flat
        round
        dense
        class="large-screen-only"
        icon="eva-camera-outline"
        size="18px"
        />
        <q-separator vertical spaced class="large-screen-only" />
      <q-toolbar-title class="text_grand_hotel text-bold">
        Quasargram
      </q-toolbar-title>
      <q-btn
        to="/"
        flat
        round
        dense
        class="large-screen-only"
        icon="eva-home-outline"
        size="18px"
        />
    </q-toolbar>
    </q-header>

      <q-footer
        class="bg-white small-screen-only"
        bordered
        >
        <q-toolbar>
          <q-toolbar-title>
            <q-tabs
              class="text-grey-10"
              active-color="primary"
              indicator-color="transparent"
            >
              <q-route-tab
                icon="eva-home-outline"
                to="/"
                />
              <q-route-tab
                icon="eva-camera-outline"
                to="/camera"
                />
              <q-route-tab
                icon="eva-settings-outline"
                to="/setting"
              />
            </q-tabs>
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>

    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent, ref } from 'vue'

export default defineComponent({

  setup () {

    return {
      tab: ref('mails')
    }

  }
});
</script>

<style lang="scss">
.q-footer .q-tab__icon {
  font-size: 30px;
}
.q-btn .q-icon {
  padding-top: 6px;
}
.q-toolbar__title {
    @media (max-width: $breakpoint-xs-max) {
    text-align: center;
  }
    @media (min-width: $breakpoint-sm-min) {
    text-align: left;
  }
  font-size: 30px;
}
</style>
