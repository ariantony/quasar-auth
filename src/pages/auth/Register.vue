<template>
<q-page class="constrain flex flex-center justify-center content-center">
    <div class="row">
      <div class="col-0 col-sm-8 flex justify-center content-center bg-white large-screen-only">
          <q-card
          flat
          >
          <q-card-section>
          Here’s <br>
          your first  <br>
          step with <br>
          us !
          </q-card-section>
          </q-card>
      </div>
      <div class="col-12 col-sm-4 col">
        <q-card
          flat
          class="q-pa-md"
          style="width:300px;">
        <div class="text-h6">{{ $t('auth.register.title_register') }}</div>
        <div style="height:60px;"></div>
            <q-input :label="$t('email')"/>
            <q-input :label="$t('auth.register.fullname')"/>
            <q-input :label="$t('password')"/>
            <q-input :label="$t('auth.register.confirmpassword')"/>
            <div style="height:30px;"></div>
            <q-btn outline class="q-ma-md full-width" color="primary" :label="$t('auth.register.link_register')" />
            <div style="height:60px;"></div>
        </q-card>
      </div>
    </div>
</q-page>
</template>

<script>
export default {
  name: 'Register',
}
</script>
