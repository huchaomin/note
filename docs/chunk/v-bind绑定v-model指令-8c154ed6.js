import{r as n,o as c,c as i,f as p,g as e,aa as o}from"./vendor-774b84b8.js";const s=o("h2",{id:"1-\u6709\u4E9B\u65F6\u5019\u6211\u4EEC\u5E0C\u671B\u628Av-model\u6307\u4EE4\u901A\u8FC7v-bind\u7ED1\u5B9A\u5230\u7EC4\u4EF6\u4E0A",class:"doc-heading"},"\u6709\u4E9B\u65F6\u5019\u6211\u4EEC\u5E0C\u671B\u628Av-model\u6307\u4EE4\u901A\u8FC7v-bind\u7ED1\u5B9A\u5230\u7EC4\u4EF6\u4E0A",-1),u=o("p",null,"\u8981\u901A\u8FC7\u5224\u65ADobj.prop\u5224\u65AD\u8981\u4E0D\u8981\u7ED1\u5B9Av-model,\u6B64\u65F6\u8981\u4E0D\u591A\u5199\u4E00\u4E2Av-if-else,\u8981\u4E0D\u91C7\u7528\u4E0A\u9762\u7684\u65B9\u6CD5",-1),m=o("h2",{id:"2-\u6B64\u65F6\u53EF\u4EE5\u7ED1\u5B9A\u4E24\u4E2Aupdate-model-value",class:"doc-heading"},"\u6B64\u65F6\u53EF\u4EE5\u7ED1\u5B9A\u4E24\u4E2Aupdate:model-value",-1),g={__name:"v-bind\u7ED1\u5B9Av-model\u6307\u4EE4",setup(v){const t=[{id:"doc-title",title:"v-bind\u7ED1\u5B9Av-model\u6307\u4EE4"},{id:"1-\u6709\u4E9B\u65F6\u5019\u6211\u4EEC\u5E0C\u671B\u628Av-model\u6307\u4EE4\u901A\u8FC7v-bind\u7ED1\u5B9A\u5230\u7EC4\u4EF6\u4E0A",title:"1. \u6709\u4E9B\u65F6\u5019\u6211\u4EEC\u5E0C\u671B\u628Av-model\u6307\u4EE4\u901A\u8FC7v-bind\u7ED1\u5B9A\u5230\u7EC4\u4EF6\u4E0A"},{id:"2-\u6B64\u65F6\u53EF\u4EE5\u7ED1\u5B9A\u4E24\u4E2Aupdate-model-value",title:"2. \u6B64\u65F6\u53EF\u4EE5\u7ED1\u5B9A\u4E24\u4E2Aupdate:model-value"}];return(_,r)=>{const d=n("doc-code"),l=n("doc-img"),a=n("doc-page");return c(),i(a,{desc:"",toc:t},{default:p(()=>[s,e(d,{code:`function getBind(obj) {
  const bind = {};
  if (obj.prop) {
    bind.modelValue = formModel[obj.prop];
    bind['onUpdate:modelValue'] = (val) => {
      formModel[obj.prop] = val;
    };
  }
  return bind;
}
`,lang:"js"}),u,e(d,{code:`<c-input v-bind="getBind(obj)" />
`,lang:"vue"}),m,e(d,{code:`<c-input v-bind="getBind()" @update:model-value="update"></c-input>
`,lang:"vue"}),o("p",null,[e(l,{src:"onUpdate-modelValue.png",alt:"onUpdate-modelValue"})])]),_:1})}}};export{g as default};
