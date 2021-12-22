<template>
<SWUpdatePopup v-slot="{ enabled, reload, message, buttonText }">
  <v-snackbar
    v-model="enabled"
    app
    right
    :timeout="-1"
    vertical>
    {{ message }}
    <template v-slot:action="{ attrs }">
      <v-btn
        light
        color="primary"
        class="mr-2"
        v-bind="attrs"
        @click="reload">
        {{ buttonText }}
      </v-btn>
    </template>
  </v-snackbar>
</SWUpdatePopup>
</template>
<script>
import SWUpdatePopup from '@vuepress/plugin-pwa/lib/SWUpdatePopup.vue'

export default {
  components: { SWUpdatePopup },
}
</script>
