<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  custom: {
    type: Boolean,
    default: false,
  },
});
const computedName = computed(() => {
  if (props.custom) {
    return `svguse:#icon-${props.name}`;
  }
  return props.name;
});
</script>
<template>
  <q-icon :name="computedName">
    <template v-for="(item, key) in $slots" :key="key" #[key]>
      <slot :name="key"></slot>
    </template>
  </q-icon>
</template>
