<template>
<SWUpdatePopup v-slot="{ enabled, reload, message, buttonText }">
  <v-snackbar
    v-model="enabled"
    :max-width="$vuetify.breakpoint.width"
    :timeout="-1"
    app
    right
    vertical>
    {{ message }}
    <template v-slot:action="{ attrs }">
      <v-btn
        text
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
