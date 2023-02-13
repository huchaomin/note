import{r as t,o as i,c,f as r,g as n,aa as o}from"./vendor-90615676.js";const l=o("h2",{id:"1-vue-router",class:"doc-heading"},"vue-router",-1),p=o("h2",{id:"2-vue",class:"doc-heading"},"vue",-1),d=o("h2",{id:"3-vite",class:"doc-heading"},"vite",-1),u=o("h2",{id:"4-others",class:"doc-heading"},"others",-1),f={__name:"\u61D2\u52A0\u8F7D",setup(g){const s=[{id:"doc-title",title:"\u61D2\u52A0\u8F7D"},{id:"1-vue-router",title:"1. vue-router"},{id:"2-vue",title:"2. vue"},{id:"3-vite",title:"3. vite"},{id:"4-others",title:"4. others"}];return(h,m)=>{const e=t("doc-code"),a=t("doc-page");return i(),c(a,{desc:"",toc:s},{default:r(()=>[l,n(e,{code:`const routes = [
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
`,lang:"javascript"}),d,n(e,{code:"function getImageUrl(name) {\n  return new URL(`./dir/${name}.png`, import.meta.url).href\n}\n",lang:"javascript"}),n(e,{code:`import('./categories.json')
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
`,lang:"javascript"}),u,n(e,{code:`if (false) {
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
`,lang:"javascript"}),n(e,{code:`const getJsonUrl = false === true
  ? (file) => \`/node_modules/quasar/dist/api/\${file}.json\`
  : (file) => \`/quasar-api/\${file}.json\`;

process.env.CLIENT && onMounted(() => {
fetch(getJsonUrl(props.file))
  .then((response) => response.json())
  .then((json) => {
    parseApiFile(props.file, json);
    loading.value = false;
  });
});
`,lang:"javascript"})]),_:1})}}};export{f as default};
