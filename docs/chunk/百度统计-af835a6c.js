import{r as e,o as a,c as s,f as c,g as d,aa as i}from"./vendor-90615676.js";const r=i("h2",{id:"1-boot-baiduanalytics-js",class:"doc-heading"},"boot/baiduAnalytics.js",-1),m={__name:"\u767E\u5EA6\u7EDF\u8BA1",setup(l){const n=[{id:"doc-title",title:"\u672C\u535A\u5BA2\u7684\u767E\u5EA6\u7EDF\u8BA1"},{id:"1-boot-baiduanalytics-js",title:"1. boot/baiduAnalytics.js"}];return(p,h)=>{const t=e("doc-code"),o=e("doc-page");return a(),s(o,{desc:"",toc:n},{default:c(()=>[r,d(t,{code:`/* eslint-disable no-underscore-dangle */
if (process\\.env\\.NODE_ENV === 'production' && typeof window !== 'undefined') {
  window._hmt = window._hmt || [];
  const hm = document.createElement('script');
  hm.src = 'https://hm.baidu.com/hm.js?ed1ab63bfd0067ce75ba91ad9b7b4d37';
  const s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
  // \u5355\u9875\u9762\u5E94\u7528\u914D\u7F6E
  window._hmt.push(['_requirePlugin', 'UrlChangeTracker', {
    shouldTrackUrlChange(newPath, oldPath) {
      const np = newPath.split('?')[0]; // \u53BB\u9664query\u5728\u6BD4\u8F83
      const op = oldPath.split('?')[0];
      return np !== op;
    },
  }]);
}
`,lang:"javascript"})]),_:1})}}};export{m as default};
