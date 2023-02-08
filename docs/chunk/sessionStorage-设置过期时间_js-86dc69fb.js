import{r as e,o as t,c as r,f as i,g as a}from"./vendor-585b19a3.js";const d={__name:"sessionStorage-\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4_js",setup(c){const n=[];return(p,_)=>{const o=e("doc-code"),s=e("doc-page");return t(),r(s,{desc:"",toc:n},{default:i(()=>[a(o,{code:`const session = {
  set (key, val, expired) {
    if (typeof val !== 'string') {
      val = JSON.stringify(val)
    }
    window.sessionStorage.setItem(key, val)
    if (typeof expired === 'number' && expired >= 0) {
      window.sessionStorage.setItem(\`\${key}__expires__\`, \`\${Date.now() + 1000 * 60 * expired}\`)
    }
  },
  get (key) {
    let val = window.sessionStorage.getItem(key)
    if (val !== null) {
      let expired = window.sessionStorage.getItem(\`\${key}__expires__\`)
      if (expired) {
        if (Date.now() > expired) {
          this.removeWithExpire(key)
          val = null
        }
      }
    }
    try {
      val = JSON.parse(val)
    } catch (e) {
      console.error(\`session JSON.parse\${e}\`)
      val = null
    }
    return val
  },
  remove (key) {
    window.sessionStorage.removeItem(key)
  },
  removeWithExpire (key) {
    this.remove(key)
    this.remove(\`\${key}__expires__\`)
  },
}
export {
  session,
}
`,lang:"javascript"})]),_:1})}}};export{d as default};
