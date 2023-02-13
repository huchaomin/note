import{r as o,o as d,c as l,f as a,g as n,aa as e,v as s}from"./vendor-90615676.js";const p=e("h2",{id:"1-createelement-\u53C2\u6570",class:"doc-heading"},"createElement \u53C2\u6570",-1),m=e("h3",{id:"2-params1",class:"doc-heading"},"params1",-1),u=e("p",null,[e("code",{class:"doc-token"},"String | Object | Function"),s(": \u4E00\u4E2A HTML \u6807\u7B7E\u540D | \u7EC4\u4EF6\u9009\u9879\u5BF9\u8C61 | \u6216\u8005resolve \u4E86\u4E0A\u8FF0\u4EFB\u4F55\u4E00\u79CD\u7684\u4E00\u4E2A async \u51FD\u6570\u3002"),e("strong",null,"\u5FC5\u586B\u9879")],-1),v=e("h3",{id:"3-params2",class:"doc-heading"},"params2",-1),h=e("p",null,[e("code",{class:"doc-token"},"Object"),s(": \u6A21\u677F\u4E2D attribute \u5BF9\u5E94\u7684\u6570\u636E\u5BF9\u8C61\u3002"),e("strong",null,"\u53EF\u9009")],-1),f=e("h3",{id:"4-params3",class:"doc-heading"},"params3",-1),_=e("p",null,[e("code",{class:"doc-token"},"Array | String"),s(": \u5B50\u7EA7\u865A\u62DF\u8282\u70B9 (VNodes array)\uFF0C\u7531 "),e("code",{class:"doc-token"},"createElement()"),s(" \u6784\u5EFA\u800C\u6210 | \u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u6765\u751F\u6210\u201C\u6587\u672C\u865A\u62DF\u8282\u70B9\u201D\u3002"),e("strong",null,"\u53EF\u9009")],-1),g=e("h2",{id:"5-\u4F7F\u7528-javascript-\u4EE3\u66FF\u6A21\u677F\u529F\u80FD",class:"doc-heading"},"\u4F7F\u7528 JavaScript \u4EE3\u66FF\u6A21\u677F\u529F\u80FD",-1),E=e("h3",{id:"6-v-if-\u548C-v-for",class:"doc-heading"},"v-if \u548C v-for",-1),k=e("h3",{id:"7-v-model",class:"doc-heading"},"v-model",-1),y=e("h3",{id:"8-\u4E8B\u4EF6-and-\u6309\u952E\u4FEE\u9970\u7B26",class:"doc-heading"},"\u4E8B\u4EF6 & \u6309\u952E\u4FEE\u9970\u7B26",-1),b=e("h3",{id:"9-\u63D2\u69FD\u76F8\u5173",class:"doc-heading"},"\u63D2\u69FD\u76F8\u5173",-1),V=e("p",null,[e("code",{class:"doc-token"},"this.$slots"),s(" \u7F16\u5199\u9759\u6001\u63D2\u69FD, \u8FD4\u56DE VNode \u6570\u7EC4")],-1),N=e("p",null,[e("code",{class:"doc-token"},"this.$scopedSlots"),s(" \u7F16\u5199\u4F5C\u7528\u57DF\u63D2\u69FD,\u6BCF\u4E2A\u4F5C\u7528\u57DF\u63D2\u69FD\u90FD\u662F\u4E00\u4E2A\u8FD4\u56DE\u82E5\u5E72 VNode array \u7684\u51FD\u6570")],-1),j=e("p",null,[e("code",{class:"doc-token"},"scopedSlots"),s(" \u7F16\u5199\u4F5C\u7528\u57DF\u63D2\u69FD \u5C5E\u6027")],-1),H={__name:"\u6E32\u67D3\u51FD\u6570",setup(S){const r=[{id:"doc-title",title:"Vue \u6E32\u67D3\u51FD\u6570"},{id:"1-createelement-\u53C2\u6570",title:"1. createElement \u53C2\u6570"},{id:"2-params1",title:"1.1. params1",sub:!0},{id:"3-params2",title:"1.2. params2",sub:!0},{id:"4-params3",title:"1.3. params3",sub:!0},{id:"5-\u4F7F\u7528-javascript-\u4EE3\u66FF\u6A21\u677F\u529F\u80FD",title:"2. \u4F7F\u7528 JavaScript \u4EE3\u66FF\u6A21\u677F\u529F\u80FD"},{id:"6-v-if-\u548C-v-for",title:"2.1. v-if \u548C v-for",sub:!0},{id:"7-v-model",title:"2.2. v-model",sub:!0},{id:"8-\u4E8B\u4EF6-and-\u6309\u952E\u4FEE\u9970\u7B26",title:"2.3. \u4E8B\u4EF6 & \u6309\u952E\u4FEE\u9970\u7B26",sub:!0},{id:"9-\u63D2\u69FD\u76F8\u5173",title:"2.4. \u63D2\u69FD\u76F8\u5173",sub:!0}];return(x,$)=>{const t=o("doc-code"),c=o("doc-link"),i=o("doc-page");return d(),l(i,{desc:"Vue \u6E32\u67D3\u51FD\u6570createElement\u7684\u57FA\u672C\u7528\u6CD5",toc:r},{default:a(()=>[p,n(t,{code:`// returns {VNode}
createElement(params1, params2, params3)
`,lang:"javascript"}),m,u,v,h,n(t,{code:`{
  // \u4E0E \`v-bind:class\` \u7684 API \u76F8\u540C\uFF0C
  // \u63A5\u53D7\u4E00\u4E2A\u5B57\u7B26\u4E32\u3001\u5BF9\u8C61\u6216\u5B57\u7B26\u4E32\u548C\u5BF9\u8C61\u7EC4\u6210\u7684\u6570\u7EC4
  'class': {
    foo: true,
    bar: false
  },
  // \u4E0E \`v-bind:style\` \u7684 API \u76F8\u540C\uFF0C
  // \u63A5\u53D7\u4E00\u4E2A\u5B57\u7B26\u4E32\u3001\u5BF9\u8C61\uFF0C\u6216\u5BF9\u8C61\u7EC4\u6210\u7684\u6570\u7EC4
  style: {
    color: 'red',
    fontSize: '14px'
  },
  // HTML \u7279\u6027
  attrs: {
    id: 'foo'
  },
  // \u7EC4\u4EF6 prop
  props: {
    myProp: 'bar'
  },
  // dom \u5C5E\u6027
  domProps: {
    innerHTML: 'baz'
  },
  // \u4E8B\u4EF6\u76D1\u542C\u5668\u5728 \`on\` \u5185\uFF0C
  // \u4F46\u4E0D\u518D\u652F\u6301\u5982 \`v-on:keyup.enter\` \u8FD9\u6837\u7684\u4FEE\u9970\u5668\u3002
  // \u9700\u8981\u5728\u5904\u7406\u51FD\u6570\u4E2D\u624B\u52A8\u68C0\u67E5 keyCode\u3002
  on: {
    click: this.clickHandler
  },
  // \u4EC5\u7528\u4E8E\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u76D1\u542C\u539F\u751F\u4E8B\u4EF6\uFF0C\u800C\u4E0D\u662F\u7EC4\u4EF6\u5185\u90E8\u4F7F\u7528
  // \`vm.$emit\` \u89E6\u53D1\u7684\u4E8B\u4EF6\u3002
  nativeOn: {
    click: this.nativeClickHandler
  },
  // \u81EA\u5B9A\u4E49\u6307\u4EE4\u3002\u6CE8\u610F\uFF0C\u4F60\u65E0\u6CD5\u5BF9 \`binding\` \u4E2D\u7684 \`oldValue\`
  // \u8D4B\u503C\uFF0C\u56E0\u4E3A Vue \u5DF2\u7ECF\u81EA\u52A8\u4E3A\u4F60\u8FDB\u884C\u4E86\u540C\u6B65\u3002
  directives: [
    {
      name: 'my-custom-directive',
      value: '2',
      expression: '1 + 1',
      arg: 'foo',
      modifiers: {
        bar: true
      }
    }
  ],
  // \u4F5C\u7528\u57DF\u63D2\u69FD\u7684\u683C\u5F0F\u4E3A
  // { name: props => VNode | Array<VNode> }
  scopedSlots: {
    default: props => createElement('span', props.text)
  },
  // \u5982\u679C\u7EC4\u4EF6\u662F\u5176\u5B83\u7EC4\u4EF6\u7684\u5B50\u7EC4\u4EF6\uFF0C\u9700\u4E3A\u63D2\u69FD\u6307\u5B9A\u540D\u79F0
  slot: 'name-of-slot',
  // \u5176\u5B83\u7279\u6B8A\u9876\u5C42 property
  key: 'myKey',
  ref: 'myRef',
  // \u5982\u679C\u4F60\u5728\u6E32\u67D3\u51FD\u6570\u4E2D\u7ED9\u591A\u4E2A\u5143\u7D20\u90FD\u5E94\u7528\u4E86\u76F8\u540C\u7684 ref \u540D\uFF0C
  // \u90A3\u4E48 \`$refs.myRef\` \u4F1A\u53D8\u6210\u4E00\u4E2A\u6570\u7EC4\u3002
  refInFor: true
}
`,lang:"javascript"}),f,_,g,E,n(t,{code:`<ul v-if="items.length">
  <li v-for="item in items">{{ item.name }}</li>
</ul>
<p v-else>No items found.</p>
`,lang:"html"}),n(t,{code:`props: ['items'],
render: function (createElement) {
  if (this.items.length) {
    return createElement('ul', this.items.map(function (item) {
      return createElement('li', item.name)
    }))
  } else {
    return createElement('p', 'No items found.')
  }
}
`,lang:"javascript"}),k,n(t,{code:`props: ['value'],
render: function (createElement) {
  var self = this
  return createElement('input', {
    domProps: {
      value: self.value
    },
    on: {
      input: function (event) {
        self.$emit('input', event.target.value)
      }
    }
  })
}
`,lang:"javascript"}),y,e("p",null,[n(c,{to:"https://cn.vuejs.org/v2/guide/render-function.html#\u4E8B\u4EF6-amp-\u6309\u952E\u4FEE\u9970\u7B26"},{default:a(()=>[s("\u5B98\u65B9\u6587\u6863")]),_:1})]),b,V,n(t,{code:`render: function (createElement) {
  return createElement('div', this.$slots.default)
  // \u6216\u8005 return createElement('div', this.$scopedSlots.default())
}
// \`<div><slot></slot></div>\`
`,lang:"javascript"}),N,n(t,{code:`props: ['message'],
render: function (createElement) {
  return createElement('div', [
    this.$scopedSlots.default({
      text: this.message
    })
  ])
}
// \`<div><slot :text="message"></slot></div>\`
`,lang:"javascript"}),j,n(t,{code:`render: function (createElement) {
  return createElement('div', [
    createElement('child', {
      // \u5728\u6570\u636E\u5BF9\u8C61\u4E2D\u4F20\u9012 \`scopedSlots\`
      // \u683C\u5F0F\u4E3A { name: props => VNode | Array<VNode> }
      scopedSlots: {
        default: function (props) {
          return createElement('span', props.text)
        }
      }
    })
  ])
}
// \`<div><child v-slot="props"><span>{{ props.text }}</span></child></div>\`
`,lang:"javascript"})]),_:1})}}};export{H as default};
