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
        <div class="text-h6"><q-icon class="q-mr-sm" size="30px" name="eva-info-outline" color="primary"/>{{ $t('auth.confirminfo.confirm') }}</div>
        <div class="text-caption q-mt-lg text-grey-8">{{ $t('auth.confirminfo.subtitle') }}</div>
        <div style="height:60px;"></div>
        </q-card>
      </div>
    </div>
</q-page>
</template>

<script>
export default {
  name: 'ConfirmInfo',
}
</script>
