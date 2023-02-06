import{r as a,o as d,c as s,f as c,g as n,a9 as e,v as o}from"./vendor.js";const p=e("div",{class:"doc-note doc-note--warning"},[e("p",{class:"doc-note__title"},"WARNING"),e("p",null,[e("code",{class:"doc-token"},"v-bind.sync"),o(" \u8BED\u6CD5\u5DF2\u7ECF\u88AB\u79FB\u9664")])],-1),m=e("h2",{id:"1-\u539F\u751F\u7684\u53D7\u63A7\u7EC4\u4EF6",class:"doc-heading"},"\u539F\u751F\u7684\u53D7\u63A7\u7EC4\u4EF6",-1),u=e("p",null,"\u7B49\u4EF7\u4E8E",-1),r=e("h2",{id:"2-\u81EA\u5B9A\u4E49\u7EC4\u4EF6",class:"doc-heading"},"\u81EA\u5B9A\u4E49\u7EC4\u4EF6",-1),v=e("h2",{id:"3-getter-\u548C-setter",class:"doc-heading"},"getter \u548C setter",-1),g=e("h2",{id:"4-\u53C2\u6570",class:"doc-heading"},"\u53C2\u6570",-1),h=e("h2",{id:"5-\u591A\u4E2A-v-model-\u7ED1\u5B9A",class:"doc-heading"},[o("\u591A\u4E2A "),e("code",{class:"doc-token"},"v-model"),o(" \u7ED1\u5B9A")],-1),_=e("h2",{id:"6-v-model-\u4FEE\u9970\u7B26",class:"doc-heading"},[e("code",{class:"doc-token"},"v-model"),o(" \u4FEE\u9970\u7B26")],-1),f=e("h2",{id:"7-\u5E26\u53C2\u6570\u7684\u4FEE\u9970\u7B26",class:"doc-heading"},"\u5E26\u53C2\u6570\u7684\u4FEE\u9970\u7B26",-1),$={__name:"v-model",setup(y){const l=[{id:"doc-title",title:"v-model"},{id:"1-\u539F\u751F\u7684\u53D7\u63A7\u7EC4\u4EF6",title:"1. \u539F\u751F\u7684\u53D7\u63A7\u7EC4\u4EF6"},{id:"2-\u81EA\u5B9A\u4E49\u7EC4\u4EF6",title:"2. \u81EA\u5B9A\u4E49\u7EC4\u4EF6"},{id:"3-getter-\u548C-setter",title:"3. getter \u548C setter"},{id:"4-\u53C2\u6570",title:"4. \u53C2\u6570"},{id:"5-\u591A\u4E2A-v-model-\u7ED1\u5B9A",title:"5. \u591A\u4E2A v-model \u7ED1\u5B9A"},{id:"6-v-model-\u4FEE\u9970\u7B26",title:"6. v-model \u4FEE\u9970\u7B26"},{id:"7-\u5E26\u53C2\u6570\u7684\u4FEE\u9970\u7B26",title:"7. \u5E26\u53C2\u6570\u7684\u4FEE\u9970\u7B26"}];return(V,x)=>{const t=a("doc-code"),i=a("doc-page");return d(),s(i,{desc:"",toc:l},{default:c(()=>[p,m,n(t,{code:`<input v-model="searchText" />
`,lang:"vue"}),u,n(t,{code:`<input :value="searchText" @input="searchText = $event.target.value" />
`,lang:"vue"}),r,n(t,{code:`<custom-input v-model="searchText"></custom-input>
`,lang:"vue"}),n(t,{code:`app.component('custom-input', {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  template: \`
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  \`
})
`,lang:"js"}),v,n(t,{code:`app.component('custom-input', {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  template: \`
    <input v-model="value">
  \`,
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
})
`,lang:"js"}),g,n(t,{code:`<my-component v-model:title="bookTitle"></my-component>
`,lang:"vue"}),n(t,{code:`app.component('my-component', {
  props: {
    title: String
  },
  emits: ['update:title'],
  template: \`
    <input
      type="text"
      :value="title"
      @input="$emit('update:title', $event.target.value)">
  \`
})
`,lang:"js"}),h,n(t,{code:`<user-name
  v-model:first-name="firstName"
  v-model:last-name="lastName"
></user-name>
`,lang:"vue"}),n(t,{code:`app.component('user-name', {
  props: {
    firstName: String,
    lastName: String
  },
  emits: ['update:firstName', 'update:lastName'],
  template: \`
    <input
      type="text"
      :value="firstName"
      @input="$emit('update:firstName', $event.target.value)">

    <input
      type="text"
      :value="lastName"
      @input="$emit('update:lastName', $event.target.value)">
  \`
})
`,lang:"js"}),_,n(t,{code:`<my-component v-model.capitalize="myText"></my-component>
`,lang:"vue"}),n(t,{code:`app.component('my-component', {
  props: {
    modelValue: String,
    modelModifiers: {
      default: () => ({})
    }
  },
  emits: ['update:modelValue'],
  methods: {
    emitValue(e) {
      let value = e.target.value
      console.log(this.modelModifiers) // { capitalize: true }
      if (this.modelModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
      }
      this.$emit('update:modelValue', value)
    }
  },
  template: \`<input
    type="text"
    :value="modelValue"
    @input="emitValue">\`
})
`,lang:"js"}),f,n(t,{code:`<my-component v-model:description.capitalize="myText"></my-component>
`,lang:"vue"}),n(t,{code:`app.component('my-component', {
  props: ['description', 'descriptionModifiers'],
  emits: ['update:description'],
  template: \`
    <input type="text"
      :value="description"
      @input="$emit('update:description', $event.target.value)">
  \`,
  created() {
    console.log(this.descriptionModifiers) // { capitalize: true }
  }
})
`,lang:"js"})]),_:1})}}};export{$ as default};
