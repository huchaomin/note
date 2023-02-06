import{r as s,o as r,c as a,f as c,ac as n,g as e,v as t}from"./vendor.js";const u=n("h2",{id:"1-\u6982\u89C8",class:"doc-heading"},"\u6982\u89C8",-1),h=n("ul",null,[n("li",null,[n("code",{class:"doc-token"},"h"),t(" \u73B0\u5728\u662F\u5168\u5C40\u5BFC\u5165\uFF0C\u800C\u4E0D\u662F\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u7ED9\u6E32\u67D3\u51FD\u6570")]),n("li",null,"\u66F4\u6539\u6E32\u67D3\u51FD\u6570\u53C2\u6570\uFF0C\u4F7F\u5176\u5728\u6709\u72B6\u6001\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u7684\u8868\u73B0\u66F4\u52A0\u4E00\u81F4"),n("li",null,"VNode \u73B0\u5728\u6709\u4E00\u4E2A\u6241\u5E73\u7684 prop \u7ED3\u6784")],-1),p=n("h2",{id:"2-\u52A8\u673A",class:"doc-heading"},"\u52A8\u673A",-1),_=n("h2",{id:"3-\u6E32\u67D3\u51FD\u6570\u53C2\u6570",class:"doc-heading"},"\u6E32\u67D3\u51FD\u6570\u53C2\u6570",-1),m=n("h3",{id:"4-2-x-\u8BED\u6CD5",class:"doc-heading"},"2.x \u8BED\u6CD5",-1),x=n("p",null,[t("\u5728 2.x \u4E2D\uFF0C"),n("code",{class:"doc-token"},"render"),t(" \u51FD\u6570\u4F1A\u81EA\u52A8\u63A5\u6536 "),n("code",{class:"doc-token"},"h"),t(" \u51FD\u6570 (\u5B83\u662F "),n("code",{class:"doc-token"},"createElement"),t(" \u7684\u60EF\u7528\u522B\u540D) \u4F5C\u4E3A\u53C2\u6570\uFF1A")],-1),b=n("h3",{id:"5-3-x-\u8BED\u6CD5",class:"doc-heading"},"3.x \u8BED\u6CD5",-1),v=n("p",null,[t("\u5728 3.x \u4E2D\uFF0C"),n("code",{class:"doc-token"},"h"),t(" \u51FD\u6570\u73B0\u5728\u662F\u5168\u5C40\u5BFC\u5165\u7684\uFF0C\u800C\u4E0D\u662F\u4F5C\u4E3A\u53C2\u6570\u81EA\u52A8\u4F20\u9012\u3002")],-1),f=n("h2",{id:"6-vnode-prop-\u683C\u5F0F\u5316",class:"doc-heading"},"VNode Prop \u683C\u5F0F\u5316",-1),g=n("h3",{id:"7-2-x-\u8BED\u6CD5",class:"doc-heading"},"2.x \u8BED\u6CD5",-1),k=n("p",null,[t("\u5728 2.x \u4E2D\uFF0C"),n("code",{class:"doc-token"},"domProps"),t(" (\u7B2C\u4E8C\u4E2A\u53C2\u6570)\u5305\u542B VNode prop \u4E2D\u7684\u5D4C\u5957\u5217\u8868\uFF1A")],-1),C=n("h3",{id:"8-3-x-\u8BED\u6CD5",class:"doc-heading"},"3.x \u8BED\u6CD5",-1),V=n("p",null,"\u5728 3.x \u4E2D\uFF0C\u6574\u4E2A VNode prop \u7684\u7ED3\u6784\u90FD\u662F\u6241\u5E73\u7684\u3002\u4F7F\u7528\u4E0A\u9762\u7684\u4F8B\u5B50\uFF0C\u6765\u770B\u770B\u5B83\u73B0\u5728\u7684\u6837\u5B50\u3002",-1),y=n("ul",null,[n("li",null,"props that start with on are handled as v-on bindings, with everything after on being converted to all-lowercase as the event name (more on this below)"),n("li",null,[t("for anything else: "),n("ul",null,[n("li",null,"If the key exists as a property on the DOM node, it is set as a DOM property;"),n("li",null,"Otherwise it is set as an attribute.")])])],-1),D=n("h2",{id:"9-\u6CE8\u518C\u7EC4\u4EF6",class:"doc-heading"},"\u6CE8\u518C\u7EC4\u4EF6",-1),N=n("h3",{id:"10-2-x-\u8BED\u6CD5",class:"doc-heading"},"2.x \u8BED\u6CD5",-1),j=n("p",null,"\u5728 2.x \u4E2D\uFF0C\u6CE8\u518C\u4E00\u4E2A\u7EC4\u4EF6\u540E\uFF0C\u628A\u7EC4\u4EF6\u540D\u4F5C\u4E3A\u5B57\u7B26\u4E32\u4F20\u9012\u7ED9\u6E32\u67D3\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u5B83\u53EF\u4EE5\u6B63\u5E38\u5730\u5DE5\u4F5C\uFF1A",-1),w=n("h3",{id:"11-3-x-\u8BED\u6CD5",class:"doc-heading"},"3.x \u8BED\u6CD5",-1),B=n("p",null,[t("\u5728 3.x \u4E2D\uFF0C\u7531\u4E8E VNode \u662F\u4E0A\u4E0B\u6587\u65E0\u5173\u7684\uFF0C\u4E0D\u80FD\u518D\u7528\u5B57\u7B26\u4E32 ID \u9690\u5F0F\u67E5\u627E\u5DF2\u6CE8\u518C\u7EC4\u4EF6\u3002\u53D6\u800C\u4EE3\u4E4B\u7684\u662F\uFF0C\u9700\u8981\u4F7F\u7528\u4E00\u4E2A\u5BFC\u5165\u7684 "),n("code",{class:"doc-token"},"resolveComponent"),t(" \u65B9\u6CD5\uFF1A")],-1),O=n("h2",{id:"12-context-free-vnodes",class:"doc-heading"},"Context-free VNodes",-1),P=n("p",null,"\u4E0A\u4F8B\u4E3B\u8981\u7528\u4E8E\u7F16\u8BD1\u5668\u751F\u6210\u7684\u8F93\u51FA\uFF0C\u56E0\u4E3A\u624B\u52A8\u7F16\u5199\u7684\u6E32\u67D3\u51FD\u6570\u4EE3\u7801\u901A\u5E38\u76F4\u63A5\u5BFC\u5165\u7EC4\u4EF6\u548C\u6307\u4EE4\u5E76\u6309\u503C\u4F7F\u7528\u5B83\u4EEC\u3002",-1),T={__name:"\u6E32\u67D3\u51FD\u6570",setup(M){const d=[{id:"doc-title",title:"vue3 \u6E32\u67D3\u51FD\u6570"},{id:"1-\u6982\u89C8",title:"1. \u6982\u89C8"},{id:"2-\u52A8\u673A",title:"2. \u52A8\u673A"},{id:"3-\u6E32\u67D3\u51FD\u6570\u53C2\u6570",title:"3. \u6E32\u67D3\u51FD\u6570\u53C2\u6570"},{id:"4-2-x-\u8BED\u6CD5",title:"3.1. 2.x \u8BED\u6CD5",sub:!0},{id:"5-3-x-\u8BED\u6CD5",title:"3.2. 3.x \u8BED\u6CD5",sub:!0},{id:"6-vnode-prop-\u683C\u5F0F\u5316",title:"4. VNode Prop \u683C\u5F0F\u5316"},{id:"7-2-x-\u8BED\u6CD5",title:"4.1. 2.x \u8BED\u6CD5",sub:!0},{id:"8-3-x-\u8BED\u6CD5",title:"4.2. 3.x \u8BED\u6CD5",sub:!0},{id:"9-\u6CE8\u518C\u7EC4\u4EF6",title:"5. \u6CE8\u518C\u7EC4\u4EF6"},{id:"10-2-x-\u8BED\u6CD5",title:"5.1. 2.x \u8BED\u6CD5",sub:!0},{id:"11-3-x-\u8BED\u6CD5",title:"5.2. 3.x \u8BED\u6CD5",sub:!0},{id:"12-context-free-vnodes",title:"6. Context-free VNodes"}];return(E,F)=>{const i=s("doc-link"),o=s("doc-code"),l=s("doc-page");return r(),a(l,{desc:"",toc:d},{default:c(()=>[u,h,p,n("p",null,[e(i,{to:"https://github.com/vuejs/rfcs/blob/master/active-rfcs/0008-render-function-api-change.md#motivation"},{default:c(()=>[t("\u5B98\u65B9\u82F1\u6587\u6587\u6863")]),_:1})]),_,m,x,e(o,{code:`// Vue 2 \u6E32\u67D3\u51FD\u6570\u793A\u4F8B
export default {
  render(h) {
    return h('div')
  }
}
`,lang:"js"}),b,v,e(o,{code:`import { h, reactive } from 'vue'

export default {
  setup(props, { slots, attrs, emit }) {
    const state = reactive({
      count: 0
    })

    function increment() {
      state.count++
    }

    // \u8FD4\u56DE\u6E32\u67D3\u51FD\u6570
    return () =>
      h(
        'div',
        {
          id: 'app',
          onClick: increment
        },
        state.count
      )
  }
}
`,lang:"js"}),f,g,k,e(o,{code:`// 2.x
{
  staticClass: 'button',
  class: { 'is-outlined': isOutlined },
  staticStyle: { color: '#34495E' },
  style: { backgroundColor: buttonColor },
  attrs: { id: 'submit' },
  domProps: { innerHTML: '' },
  on: { click: submitForm },
  key: 'submit-button'
}
`,lang:"js"}),C,V,e(o,{code:`{
  class: ['button', { 'is-outlined': isOutlined }],
  style: [{ color: '#34495E' }, { backgroundColor: buttonColor }],
  id: 'submit',
  innerHTML: '',
  onClick: submitForm,
  key: 'submit-button'
}
`,lang:"js"}),y,D,N,j,e(o,{code:`// 2.x
Vue.component('button-counter', {
  data() {
    return {
      count: 0
    }
  },
  template: \`
    <button @click="count++">
      Clicked {{ count }} times.
    </button>
  \`
})

export default {
  render(h) {
    return h('button-counter')
  }
}
`,lang:"js"}),w,B,e(o,{code:`// 3.x
import { h, resolveComponent } from 'vue'

export default {
  setup() {
    const ButtonCounter = resolveComponent('button-counter')
    return () => h(ButtonCounter)
  }
}

`,lang:"js"}),O,e(o,{code:`import { h, resolveComponent, resolveDirective, withDirectives } from 'vue'

export default {
  render() {
    const comp = resolveComponent('some-global-comp')
    const fooDir = resolveDirective('foo')
    const barDir = resolveDirective('bar')

    // <some-global-comp v-foo="x" v-bar="y" />
    return withDirectives(
      h(comp),
      [fooDir, this.x],
      [barDir, this.y]
    )
  }
}
`,lang:"js"}),P,n("p",null,[t("\u66F4\u591A\u4FE1\u606F\u8BF7\u53C2\u8003"),e(i,{to:"https://github.com/vuejs/rfcs/blob/master/active-rfcs/0008-render-function-api-change.md#context-free-vnodes"},{default:c(()=>[t("\u6E32\u67D3\u51FD\u6570 API \u66F4\u6539 RFC")]),_:1}),t("\u3002")])]),_:1})}}};export{T as default};
