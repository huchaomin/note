```vue
<script setup lang="ts">
import { type VSelect } from 'vuetify/lib/components/VSelect/index.mjs'
declare type SelectPropsType = VSelect['$props']
const props = withDefaults(
  defineProps<{
    modelValue: SelectPropsType['modelValue']
    items: any[]
    itemValue?: SelectPropsType['itemValue']
    itemProps?: SelectPropsType['itemProps']
    multiple?: boolean // TODO 不知道为什么不能写 SelectPropsType['multiple'], props.multiple = ''
    hideSelected?: boolean // 同上
    returnObject?: boolean // 同上
    // 是否在多选时，prepend一个全选的选项
    // 不支持 Dot notation、函数模式、valueComparator 阉割版的功能
    prependSelectAll?: boolean
  }>(),
  {
    itemValue: 'value',
    itemProps: 'props',
    multiple: false,
    hideSelected: false,
    returnObject: false,
    prependSelectAll: true,
  },
)

const emit =
  defineEmits<
    (event: 'update:modelValue', payload: SelectPropsType['modelValue']) => void
  >()
const model = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
  },
})

const isNotObjItem = computed(() => {
  return !_.isPlainObject(props.items[0])
})
const notDisabledItems = computed(() => {
  if (isNotObjItem.value) {
    return props.items
  }
  return props.items.filter((item: any) => {
    if (props.itemProps === true) {
      return item.disabled === true
    } else if (props.itemProps === undefined || props.itemProps === false) {
      return false
    } else {
      return item[props.itemProps as string]?.disabled !== true
    }
  })
})
const hasSomeSelected = computed(() => {
  return props.modelValue.length > 0
})
const hasAllSelected = computed(() => {
  return props.modelValue.length === notDisabledItems.value.length
})

function toggleAll(): void {
  if (hasSomeSelected.value) {
    emit('update:modelValue', [])
  } else {
    const arr = notDisabledItems.value.map((item: any) =>
      isNotObjItem.value || props.returnObject
        ? toRaw(item)
        : item[props.itemValue as string],
    )
    emit('update:modelValue', arr)
  }
}
const slots = useSlots()
const slotKeys = computed(
  () => Object.keys(slots) as Array<keyof VSelect['$slots']>, // 解决 #[k]="slotScope" 时的类型问题,这里的类型比较严格，只能是 VSelect['$slots'] 中的 key
)
</script>
<template>
  <VSelect
    v-model="model"
    :items="items"
    :item-value="itemValue"
    :multiple="multiple"
    :hide-selected="hideSelected"
    :return-object="returnObject"
  >
    <template
      v-if="multiple && prependSelectAll && !('prepend-item' in slots)"
      #prepend-item
    >
      <VListItem title="全部" @click="toggleAll">
        <template #prepend>
          <VCheckboxBtn
            density="compact"
            :indeterminate="hasSomeSelected && !hasAllSelected"
            :model-value="hasSomeSelected"
          ></VCheckboxBtn>
        </template>
      </VListItem>
      <VDivider></VDivider>
    </template>
    <template #item="{ item, props: p }">
      <VListItem v-bind="p">
        <template #prepend="{ isSelected }">
          <VCheckboxBtn
            v-if="multiple && !hideSelected"
            density="compact"
            :model-value="isSelected"
            tabindex="-1"
          ></VCheckboxBtn>
          <VIcon
            v-if="item.props.prependIcon"
            :icon="item.props.prependIcon"
          ></VIcon>
        </template>
      </VListItem>
    </template>
    <template v-for="k of slotKeys" :key="k" #[k]="slotScope">
      <slot :name="k" v-bind="slotScope"></slot>
    </template>
  </VSelect>
</template>
```
