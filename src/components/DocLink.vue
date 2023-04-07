<template>
  <router-link
    v-if="internal === true"
    v-bind="$attrs"
    class="doc-link"
    :to="to"
  >
    <slot></slot>
  </router-link>
  <a
    v-else
    v-bind="$attrs"
    class="doc-link"
    :href="props.to"
    target="_blank"
    rel="noopener"
  >
    <slot></slot>
    <q-icon name="launch"></q-icon>
  </a>
</template>

<script setup>

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
});
const internal = computed(() => props.to.charAt(0) === '/');
</script>

<style lang="scss" scoped>
.doc-link {
  color: $primary;
  text-decoration: none;
  border-bottom: 1px solid currentColor;
  outline: 0;
  transition: background-color .28s;
  display: inline-flex;
  align-items: center;

  &:hover {
    background-color: scale-color($primary, $lightness: 85%);
  }
  .q-icon {
    margin-left: 4px;
  }
}
</style>
