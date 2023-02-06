import{r as o,o as c,c as i,f as r,g as n,a8 as t}from"./vendor-5a734afa.js";const d=t("h2",{id:"1-vue-router",class:"doc-heading"},"vue-router",-1),p=t("h2",{id:"2-vue",class:"doc-heading"},"vue",-1),l=t("h2",{id:"3-vite",class:"doc-heading"},"vite",-1),h=t("h2",{id:"4-others",class:"doc-heading"},"others",-1),_={__name:"\u61D2\u52A0\u8F7D",setup(g){const a=[{id:"doc-title",title:"\u61D2\u52A0\u8F7D"},{id:"1-vue-router",title:"1. vue-router"},{id:"2-vue",title:"2. vue"},{id:"3-vite",title:"3. vite"},{id:"4-others",title:"4. others"}];return(m,u)=>{const e=o("doc-code"),s=o("doc-page");return c(),i(s,{desc:"",toc:a},{default:r(()=>[d,n(e,{code:`const routes = [
  {
    path: '/some-page',
    component: () => import('pages/SomePage')
  }
]
`,lang:"javascript"}),p,n(e,{code:`<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    SomeComponent: defineAsyncComponent(() => import('components/SomeComponent')),
  }
}
<\/script>
`,lang:"javascript"}),l,n(e,{code:"function getImageUrl(name) {\n  return new URL(`./dir/${name}.png`, import.meta.url).href\n}\n",lang:"javascript"}),n(e,{code:`import('./categories.json')
  .then(categories => {
    // hey, we have lazy loaded the file
    // and we have its content in "categories"
  })
  .catch(() => {
    // oops, something went wrong...
    // couldn't load the resource
  })
`,lang:"javascript"}),n(e,{code:`const importList = import.meta.glob('./pages/*.vue')
const startIndex = '/pages/'.length

const routes = Object.keys(importList).map(key => {
  return {
    path: key.substring(startIndex, key.length - 4),
    component: importList[ key ]
  }
})
`,lang:"javascript"}),h,n(e,{code:`if (false) {
  console.log('dev')
} else {
  console.log('build')
}

// running with "quasar dev" will result in:
console.log('dev')
// while running with "quasar build" will result in:
console.log('build')
`,lang:"javascript"}),n(e,{code:`if (process\\.env\\.MODE === 'electron') {
  import('my-fancy-npm-package').then(package => {
    // notice "default" below, which is the prop with which
    // you can access what your npm imported package exports
    package.default.doSomething()
  })
}
`,lang:"javascript"})]),_:1})}}};export{_ as default};
