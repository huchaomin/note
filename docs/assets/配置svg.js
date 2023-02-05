import{r as s,o as a,c as r,f as c,g as o,a8 as e,v as t}from"./vendor.js";const g=e("h2",{id:"1-\u5B89\u88C5",class:"doc-heading"},"\u5B89\u88C5",-1),p=e("h2",{id:"2-\u914D\u7F6E",class:"doc-heading"},"\u914D\u7F6E",-1),v=e("h2",{id:"3-\u5F15\u5165svg\u6587\u4EF6",class:"doc-heading"},"\u5F15\u5165svg\u6587\u4EF6",-1),u=e("p",null,[t("\u5C06svg\u6587\u4EF6\u653E\u7F6E\u5728\u8FD9\u91CC"),e("code",{class:"doc-token"},"@/assets/svg/")],-1),m=e("h2",{id:"4-\u7F16\u5199\u7EC4\u4EF6",class:"doc-heading"},"\u7F16\u5199\u7EC4\u4EF6",-1),_=e("p",null,[e("code",{class:"doc-token"},"@/components/common/svg-icon/index.js")],-1),h=e("p",null,[e("code",{class:"doc-token"},"@/components/common/svg-icon/icon.vue")],-1),f=e("h2",{id:"5-\u5F15\u5165",class:"doc-heading"},"\u5F15\u5165",-1),k=e("p",null,[e("code",{class:"doc-token"},"main.js")],-1),x=e("h2",{id:"6-\u4F7F\u7528",class:"doc-heading"},"\u4F7F\u7528",-1),y=e("p",null,[e("code",{class:"doc-token"},"*.vue")],-1),C={class:"doc-note doc-note--tip"},j=e("p",{class:"doc-note__title"},"TIP",-1),P={__name:"\u914D\u7F6Esvg",setup(q){const i=[{id:"doc-title",title:"vue-cli svg"},{id:"1-\u5B89\u88C5",title:"1. \u5B89\u88C5"},{id:"2-\u914D\u7F6E",title:"2. \u914D\u7F6E"},{id:"3-\u5F15\u5165svg\u6587\u4EF6",title:"3. \u5F15\u5165svg\u6587\u4EF6"},{id:"4-\u7F16\u5199\u7EC4\u4EF6",title:"4. \u7F16\u5199\u7EC4\u4EF6"},{id:"5-\u5F15\u5165",title:"5. \u5F15\u5165"},{id:"6-\u4F7F\u7528",title:"6. \u4F7F\u7528"}];return(V,b)=>{const n=s("doc-code"),d=s("doc-link"),l=s("doc-page");return a(),r(l,{desc:"vue-cli\u4F7F\u7528svgo svgo-loader svg-sprite-loader\u5904\u7406svg\u6587\u4EF6\uFF0C\u751F\u6210svg\u96EA\u78A7\u56FE",toc:i},{default:c(()=>[g,o(n,{code:`yarn add svg-sprite-loader svgo svgo-loader --dev
`,lang:"shell"}),p,o(n,{code:`chainWebpack: config => {
  // \u5220\u9664\u6574\u4E2Arule(\u4F1A\u5F71\u54CD\u5230\u5176\u4ED6svg\u6587\u4EF6\u7684\u5904\u7406)
  // config.module.rules.delete("svg");

  // \u6216\u8005\u65B0\u589E\u4E00\u4E2Arule,\u8FD9\u6837\u5C31\u4E0D\u4F1A\u5F71\u54CD\u5176\u4ED6\u7684svg\u6587\u4EF6\u4E86
  // const iconPath = path.resolve(__dirname, 'src/components/common/svg-icon/svg')
  // config.module.rule('svg').exclude.add(iconPath)
  // const icon = config.module.rule('svg-icon').test(/\\.svg$/)
  // icon.include.add(iconPath)
  // icon.use('svg-sprite-loader')
  // ...

  const svgRule = config.module.rule('svg')
  svgRule.uses.clear() // \u4F5C\u7528\u540C\u4E0Adelete
  svgRule
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({symbolId: 'icon-[name]'})
    .end()
    .use('svgo-loader') // \u4E3B\u8981\u662F\u7B80\u5316svg\u6587\u4EF6\uFF0C\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u5F15\u5165svg\u6587\u4EF6\u65F6\u624B\u52A8\u5904\u7406
    .loader('svgo-loader')
    .options({
      plugins: [
        {
          name: 'removeAttrs',
          params: { attrs: '(fill|stroke)' }, // \u914D\u7F6E\u53C2\u8003svgo
        },
      ],
   })
    .end()
},
`,lang:"javascript"}),v,u,m,_,o(n,{code:`import Vue from 'vue'
import Icon from './icon'

const requireContext = require.context('@/assets/svg', true, /\\.svg$/)
// function importAll (r) {
//   r.keys().forEach(r)
// }
// importAll(requireContext)
requireContext.keys().map(requireContext);
Vue.component('icon', Icon)
`,lang:"javascript"}),h,o(n,{code:`<template functional>
  <svg :class="\`icon-\${props.type}\`" :style="{transform: \`rotate(\${props.rotate}deg)\`}">
    <use :xlink:href="'#icon-' + props.type"></use>
  </svg>
</template>
<script>
export default {
  // props: { // props\u53EF\u9009
  //   type: {
  //     type: String,
  //     required: true,
  //   },
  //   rotate: {
  //     default: '0',
  //   },
  // },
}
<\/script>
<style scoped lang="scss">
svg {
  width: 1em;
  height: 1em;
  fill: currentColor;
  stroke: currentColor;
}
</style>
`,lang:"vue"}),f,k,o(n,{code:`import '@/components/common/svg-icon/index.js'
`,lang:"javascript"}),x,y,o(n,{code:`<template>
 <icon type="check"></icon>
</template>
`,lang:"vue"}),e("div",C,[j,e("p",null,[t("\u5982\u679Csvg\u6587\u4EF6\u8F83\u591A\uFF0C\u60F3\u4F7F\u7528\u61D2\u52A0\u8F7D\u7684\u8BDD \u53EF\u4EE5\u5C1D\u8BD5\u4F7F\u7528 "),o(d,{to:"https://mmf-fe.github.io/svgicon/"},{default:c(()=>[t("https://mmf-fe.github.io/svgicon/")]),_:1})])])]),_:1})}}};export{P as default};
