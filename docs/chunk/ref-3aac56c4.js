import{r as e,o as a,c as p,f as c,g as o,aa as s}from"./vendor-774b84b8.js";const i=s("h2",{id:"1-\u53EF\u4EE5\u8BBE\u7F6E\u51FD\u6570",class:"doc-heading"},"\u53EF\u4EE5\u8BBE\u7F6E\u51FD\u6570",-1),y={__name:"ref",setup(d){const t=[{id:"doc-title",title:"ref \u7684\u7528\u6CD5"},{id:"1-\u53EF\u4EE5\u8BBE\u7F6E\u51FD\u6570",title:"1. \u53EF\u4EE5\u8BBE\u7F6E\u51FD\u6570"}];return(x,f)=>{const n=e("doc-code"),r=e("doc-page");return a(),p(r,{desc:"",toc:t},{default:c(()=>[i,o(n,{code:`ref: (vm) => { if (vm) { childRefs[path] = vm; } },
`,lang:"javascript"}),o(n,{code:`function showMenu(proxy) {
  if (proxy !== void 0 && proxy !== rootRef.value) {
    proxy.show !== void 0 && proxy.show();
    const parent = getParentProxy(proxy);
    if (parent !== void 0) {
      showMenu(parent);
    }
  }
}

function getParentProxy(proxy) {
  if (Object(proxy.$parent) === proxy.$parent) {
    return proxy.$parent;
  }

  let { parent } = proxy.$;

  while (Object(parent) === parent) {
    if (Object(parent.proxy) === parent.proxy) {
      return parent.proxy;
    }
    parent = parent.parent;
  }
}
`,lang:"javascript"})]),_:1})}}};export{y as default};
