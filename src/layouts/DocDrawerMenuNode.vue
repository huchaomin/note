<script setup>
const route = useRoute();
defineProps({
  model: {
    type: Array,
    required: true,
  },
  level: {
    type: Number,
    default: 0,
  },
});

const acceptExt = ['js', 'vue', 'json', 'file'];
function getFileIcon(name) {
  if (name === '*editorconfig') {
    return 'file-editorconfig';
  }
  if (name === '*prettierrc') {
    return 'file-prettier';
  }
  let n = name;
  if (name.endsWith('_')) {
    n = name.slice(0, -1);
  }
  const ext = n.split('_').pop();
  const icon = acceptExt.includes(ext) ? ext : 'md';
  return `file-${icon}`;
}
function getLabel(name) {
  if (['*editorconfig', '*prettierrc'].includes(name)) {
    return `.${name.slice(1)}`;
  }
  let n = name;
  if (name.endsWith('_')) {
    n = name.slice(0, -1);
  }
  const arr = n.split('_');
  const ext = arr.pop();
  if (arr.length > 0 && acceptExt.includes(ext)) {
    return `${arr.join('_')}.${ext}`;
  }
  return `${n}.md`;
}

function defaultOpened(children) {
  const find = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (item.name === route.name) {
        return true;
      }
      if (item.children?.length > 0) {
        if (find(item.children)) {
          return true;
        }
      }
    }
    return false;
  };
  return find(children);
}

</script>
<template>
  <template
    v-for="item in model"
    :key="item.name"
  >
    <q-expansion-item
      v-if="item.children?.length > 0"
      :default-opened="defaultOpened(item.children)"
      hide-expand-icon
      dense
      :header-style="{
        paddingLeft: `${level * 30 + 8}px`,
      }"
    >
      <template #header="{ expanded }">
        <q-item-section avatar>
          <c-icon name="chevron_right" class="expand-icon" :style="`transform: rotate(${expanded ? 90 : 0}deg)`"></c-icon>
        </q-item-section>
        <q-item-section avatar>
          <c-icon custom :name="expanded ? 'folder-outline' : 'folder'"></c-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label :lines="2">
            {{ item.path.slice(0, -1) }}
          </q-item-label>
        </q-item-section>
      </template>
      <doc-drawer-menu-node :model="item.children" :level="level + 1"></doc-drawer-menu-node>
    </q-expansion-item>
    <q-item
      v-else
      v-ripple
      :to="{ name: item.name }"
      exact
      dense
      :active="route.name === item.name"
      :style="{
        paddingLeft: `${(level + 1) * 30 + 8}px`,
      }"
    >
      <q-item-section avatar>
        <c-icon custom :name="getFileIcon(item.path)"></c-icon>
      </q-item-section>
      <q-item-section>
        <q-item-label :lines="2">
          {{ getLabel(item.path) }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </template>
</template>
<script>
export default {
  name: 'DocDrawerMenuNode',
};
</script>
<style lang="scss" scoped>
  :deep() {
    .q-item__section--avatar{
      min-width: auto;
      padding-right: 6px;
    }
  }
  .expand-icon{
    transition: transform .3s;
  }
  .q-item{
    padding-right:8px;
  }

  .q-item__label{
    word-break: break-all;
  }
</style>
