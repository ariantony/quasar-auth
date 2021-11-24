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
        <div class="text-h6">{{ $t('auth.newpassword.title_newpassword') }}</div>
        <div style="height:60px;"></div>
            <q-input :label="$t('auth.newpassword.old_password')"/>
            <q-input :label="$t('auth.newpassword.new_password')"/>
            <q-input :label="$t('auth.newpassword.new_password_confirmasi')"/>
            <div style="height:30px;"></div>
            <q-btn outline class="q-ma-md full-width" color="primary" :label="$t('auth.newpassword.btn_newpassword')" />
            <div style="height:60px;"></div>
        </q-card>
      </div>
    </div>
</q-page>
</template>

<script>
export default {
  name: 'ConfirmPassword',
}
</script>
