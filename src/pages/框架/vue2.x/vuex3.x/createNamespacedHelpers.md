---
title: createNamespacedHelpers
---

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

```
// state
this.$store.state.a.count
// 或者
...mapState({
 aCount: state => state.a.count
}),
// 其他
...mapGetters(['doneTodos'，'doubleCount']),
...mapActions(['addTodosAsync'，'incrementIfOddOnRootSum']),
```
