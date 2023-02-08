import{r as e,o as s,c as i,f as d,g as a,a9 as n,v as o}from"./vendor-585b19a3.js";const l=n("h2",{id:"1-\u8BA2\u9605-action",class:"doc-heading"},"\u8BA2\u9605 action",-1),m=n("p",null,"\u91CD\u8981\uFF1A\u56DE\u8C03\u51FD\u6570\u4F1A\u5728 action \u672C\u8EAB\u4E4B\u524D\u6267\u884C",-1),p=n("p",null,[o("\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Caction \u8BA2\u9605\u5668 \u4F1A\u88AB\u7ED1\u5B9A\u5230\u6DFB\u52A0\u5B83\u4EEC\u7684\u7EC4\u4EF6\u4E0A\uFF08\u5982\u679C store \u5728\u7EC4\u4EF6\u7684 setup() \u5185\uFF09\u3002"),n("br"),o(" \u8FD9\u610F\u5473\u7740\uFF0C\u5F53\u8BE5\u7EC4\u4EF6\u88AB\u5378\u8F7D\u65F6\uFF0C\u5B83\u4EEC\u5C06\u88AB\u81EA\u52A8\u5220\u9664\u3002"),n("br"),o(" \u5982\u679C\u4F60\u60F3\u5728\u7EC4\u4EF6\u5378\u8F7D\u540E\u4F9D\u65E7\u4FDD\u7559\u5B83\u4EEC\uFF0C\u8BF7\u5C06 true \u4F5C\u4E3A\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4F20\u9012\u7ED9 action \u8BA2\u9605\u5668\uFF0C\u4EE5\u4FBF\u5C06\u5176\u4ECE\u5F53\u524D\u7EC4\u4EF6\u4E2D\u5265\u79BB\uFF08detach\uFF09")],-1),h={__name:"action",setup(_){const c=[{id:"doc-title",title:"action"},{id:"1-\u8BA2\u9605-action",title:"1. \u8BA2\u9605 action"}];return(u,f)=>{const t=e("doc-code"),r=e("doc-page");return s(),i(r,{desc:"",toc:c},{default:d(()=>[l,m,a(t,{code:`const unsubscribe = someStore.$onAction(
  ({
    name, // action \u540D\u79F0
    store, // store \u5B9E\u4F8B\uFF0C\u7C7B\u4F3C \`someStore\`
    args, // \u4F20\u9012\u7ED9 action \u7684\u53C2\u6570\u6570\u7EC4
    after, // \u5728 action \u8FD4\u56DE\u6216\u89E3\u51B3\u540E\u7684\u94A9\u5B50
    onError, // action \u629B\u51FA\u6216\u62D2\u7EDD\u7684\u94A9\u5B50
  }) => {
    // \u4E3A\u8FD9\u4E2A\u7279\u5B9A\u7684 action \u8C03\u7528\u63D0\u4F9B\u4E00\u4E2A\u5171\u4EAB\u53D8\u91CF
    const startTime = Date.now()
    // \u8FD9\u5C06\u5728\u6267\u884C "store "\u7684 action \u4E4B\u524D\u89E6\u53D1\u3002
    console.log(\`Start "\${name}" with params [\${args.join(', ')}].\`)

    // \u8FD9\u5C06\u5728 action \u6210\u529F\u5E76\u5B8C\u5168\u8FD0\u884C\u540E\u89E6\u53D1\u3002
    // \u5B83\u7B49\u5F85\u7740\u4EFB\u4F55\u8FD4\u56DE\u7684 promise
    after((result) => {
      console.log(
        \`Finished "\${name}" after \${
          Date.now() - startTime
        }ms.\\nResult: \${result}.\`
      )
    })

    // \u5982\u679C action \u629B\u51FA\u6216\u8FD4\u56DE\u4E00\u4E2A\u62D2\u7EDD\u7684 promise\uFF0C\u8FD9\u5C06\u89E6\u53D1
    onError((error) => {
      console.warn(
        \`Failed "\${name}" after \${Date.now() - startTime}ms.\\nError: \${error}.\`
      )
    })
  }
)

// \u624B\u52A8\u5220\u9664\u76D1\u542C\u5668
unsubscribe()
`,lang:"javascript"}),p,a(t,{code:`export default {
  setup() {
    const someStore = useSomeStore()

    // \u5728\u7EC4\u4EF6\u88AB\u5378\u8F7D\u540E\uFF0C\u8FD9\u4E2A\u8BA2\u9605\u4F9D\u65E7\u4F1A\u88AB\u4FDD\u7559\u3002
    someStore.$onAction(callback, true)

    // ...
  },
}
`,lang:"javascript"})]),_:1})}}};export{h as default};
