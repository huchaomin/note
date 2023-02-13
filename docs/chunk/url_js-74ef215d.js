import{r as e,o as c,c as r,f as s,g as a}from"./vendor-90615676.js";const d={__name:"url_js",setup(p){const o=[];return(_,l)=>{const t=e("doc-code"),n=e("doc-page");return c(),r(n,{desc:"",toc:o},{default:s(()=>[a(t,{code:`const apiPrefix = 'hus'

const resolveURL = url => {
  if (url.startsWith('http')) {
    return url
  }
  return \`/\${apiPrefix}/\${url.replace(/^\\/+/, '')}\`
}
export {
  resolveURL,
}
`,lang:"javascript"})]),_:1})}}};export{d as default};
