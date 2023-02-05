---
date: '1642652307502'
title: vuex 使用
description: vuex 通用用法三
tags: [vuex createNamespacedHelpers]
---

### vue 文件中使用 vuex
```vue
<script>
import {createNamespacedHelpers, mapActions, mapGetters, mapMutations, mapState} from 'vuex'
const {
  mapState: aMapState,
  mapGetters: aMapGetters,
  mapActions: aMapActions,
} = createNamespacedHelpers('a')

export default {
  computed: {
    ...mapState(['todos']),
    ...mapState({
      todosAlias: 'todos',
    }),
    ...mapGetters(['doneTodos']),
    ...mapGetters({
      doneTodosAlias: 'doneTodos',
      doubleAcountAlias: 'a/doubleAcount'
    }),
    ...aMapState(['count']),
    ...aMapGetters(['doubleCount']),
  },
  methods: {
    ...mapMutations(['addTodos']),
    ...mapMutations({
      addTodosAlias: 'addTodos',
    }),
    ...mapActions(['addTodosAsync']),
    ...mapActions({
      addTodosAsyncAlias: 'addTodosAsync',
    }),
    ...aMapActions(['incrementIfOddOnRootSum']),
  },
}
</script>
```

如果a的namespaced设置为false

```vue
// state
// createNamespacedHelpers函数将不可以使用
this.$store.state.a.count
// 或者
...mapState({
	aCount: state => state.a.count
}),
// 其他
...mapGetters(['doneTodos'，'doubleCount']),
...mapActions(['addTodosAsync'，'incrementIfOddOnRootSum']),
```

