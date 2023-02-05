import{r as e,o as s,c as d,f as c,g as a,a9 as p}from"./vendor.js";const m=p("p",null,"\u5982\u679Ca\u7684namespaced\u8BBE\u7F6E\u4E3Afalse",-1),A={__name:"createNamespacedHelpers",setup(r){const o=[{id:"doc-title",title:"createNamespacedHelpers"}];return(i,u)=>{const t=e("doc-code"),n=e("doc-page");return s(),d(n,{desc:"",toc:o},{default:c(()=>[a(t,{code:`<script>
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
<\/script>
`,lang:"vue"}),m,a(t,{code:`// state
this.$store.state.a.count
// \u6216\u8005
...mapState({
 aCount: state => state.a.count
}),
// \u5176\u4ED6
...mapGetters(['doneTodos'\uFF0C'doubleCount']),
...mapActions(['addTodosAsync'\uFF0C'incrementIfOddOnRootSum']),
`,lang:""})]),_:1})}}};export{A as default};
