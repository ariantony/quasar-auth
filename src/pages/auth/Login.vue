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
        <div class="text-h6">{{ $t('auth.login.title_login') }}</div>
        <div style="height:60px;"></div>
            <q-input :label="$t('auth.login.username')"/>
            <q-input :label="$t('password')"/>
            <div style="height:30px;"></div>
            <q-btn outline class="q-ma-md full-width"  color="primary" :label="$t('auth.login.btn_login')" />
            <div class="text-caption flex flex-center"><a href="#/auth/register">{{ $t('auth.login.link_register') }}</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#/auth/lost-password">{{ $t('auth.login.lostpassword') }}</a> </div>
            <div style="height:60px;"></div>
            <q-separator />
            <span style="position:relative; top:-10px;" class="text-caption bg-white metode-lain">{{ $t('auth.login.title_othermethod') }}</span>
            <div style="height:10px;"></div>
            <div class="flex flex-center">
              <q-icon size="30px" name="eva-google" color="primary"/>
              <q-icon size="35px" name="eva-facebook" color="primary" />
              <q-icon size="35px" name="eva-twitter" color="primary" />
            </div>
        </q-card>
      </div>
    </div>
</q-page>
</template>

<script>
export default {
  name: 'Login',
    data() {
    return {
      //content: this.$t('failed')
    }
  }
}
</script>

<style lang="scss" scoped>
.metode-lain {
    position: relative;
    top: -12px;
    display: inline-block;
    margin-left: 50px;
}
</style>
