<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
});

const isBusy = ref(true); // 是否正在加载中
const component = ref(null); // 当前渲染的组件
const examples = inject('_q_ex');
const expanded = ref(false); // 是否展开
const currentTab = ref('Template'); // 当前选中的 tab

const def = reactive({
  tabs: [],
  parts: {},
});

function parseTemplate(target, template) { // TODO 这里没有考虑到多个 script/style 的情况
  const string = `(<${target}(.*)?>[\\w\\W]*<\\/${target}>)`;
  const regex = new RegExp(string, 'g');
  const parsed = regex.exec(template) || [];
  return parsed[1] || '';
}

function parseComponent(comp) {
  def.parts = {
    Template: parseTemplate('template', comp),
    Script: parseTemplate('script', comp),
    Style: parseTemplate('style', comp),
  };
  const tabs = ['Template', 'Script', 'Style'].filter((type) => def.parts[type]);
  if (tabs.length > 1) {
    def.parts.All = comp;
    tabs.push('All');
  }
  def.tabs = tabs;
}

function toggleExpand() {
  expanded.value = expanded.value === false;
}

if (process.env.CLIENT) {
  onMounted(() => {
    examples.list.then((list) => {
      component.value = markRaw(
        process.env.DEV
          ? list.code[`./src/examples/${examples.name}/${props.file}.vue`].default
          : list[props.file],
      );
      parseComponent(
        process.env.DEV
          ? list.source[`./src/examples/${examples.name}/${props.file}.vue`]
          : list[`Raw${props.file}`],
      );
      isBusy.value = false;
    });
  });
}
</script>
<template>
  <q-card class="q-my-lg" flat bordered>
    <div class="row items-center q-py-xs">
      <doc-card-title :title="props.title"></doc-card-title>
      <q-space></q-space>
      <q-btn
        flat
        round
        icon="code"
        :disable="isBusy"
        class="q-mr-xs"
        @click="toggleExpand"
      >
        <q-tooltip>查看代码</q-tooltip>
      </q-btn>
    </div>
    <q-slide-transition>
      <div v-show="expanded">
        <q-tabs
          v-model="currentTab"
          align="left"
          no-caps
          dense
          :breakpoint="0"
        >
          <q-tab
            v-for="tab in def.tabs"
            :key="`tab-${tab}`"
            :name="tab"
            :label="tab"
          ></q-tab>
        </q-tabs>
        <q-separator></q-separator>
        <q-tab-panels v-model="currentTab" animated>
          <q-tab-panel
            v-for="tab in def.tabs"
            :key="`pane-${tab}`"
            class="q-pa-none"
            :name="tab"
          >
            <doc-code
              lang="markup"
              :code="def.parts[tab]"
            ></doc-code>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </q-slide-transition>
    <q-separator></q-separator>
    <q-linear-progress v-if="isBusy" indeterminate></q-linear-progress>
    <component
      :is="component"
      v-else
    ></component>
  </q-card>
</template>
