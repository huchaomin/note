import{r as t,o as s,c as i,f as d,g as l,ac as e,v as o}from"./vendor.js";const r=e("div",{class:"doc-note doc-note--tip"},[e("p",{class:"doc-note__title"},"TIP"),e("p",null,[o("\u6709\u53EF\u80FD\u4F1A\u6539\u53D8\u5143\u7D20\u7684position\u5C5E\u6027"),e("br"),o(" \u9875\u9762\u6DFB\u52A0iframe\u5143\u7D20\uFF0C\u5982\u679C\u76D1\u542C\u7684\u5143\u7D20\u592A\u591A\u7684\u8BDD\u4F1A\u5F71\u54CD\u6027\u80FD")])],-1),u={__name:"domResizeSensor_js",setup(p){const n=[{id:"doc-title",title:"\u76D1\u542C\u5143\u7D20\u7684\u5BBD\u9AD8"}];return(m,_)=>{const a=t("doc-code"),c=t("doc-page");return s(),i(c,{desc:"\u4F7F\u7528iframe\u53BB\u76D1\u542C\u4E00\u4E2A\u5143\u7D20\u5BBD\u9AD8\u7684\u53D8\u5316",toc:n},{default:d(()=>[l(a,{code:`function observeResize (element, handler) {
  let frame = document.createElement('iframe')
  frame.style.cssText = 'position:absolute;top:-9999px;width:100%;height:100%;opacity:0;z-index: -99999'
  frame.onload = () => {
    frame.contentWindow.onresize = () => {
      handler(element)
    }
  }
  if (!['relative', 'absolute', 'fixed'].includes(window.getComputedStyle(element).position)) {
    element.style.position = 'relative'
  }
  element.appendChild(frame)
}
`,lang:"javascript"}),r]),_:1})}}};export{u as default};
