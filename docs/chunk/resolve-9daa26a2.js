import{r as s,o as l,c as r,f as c,g as t,a9 as e,v as n}from"./vendor-585b19a3.js";const d=e("h2",{id:"1-alias",class:"doc-heading"},"alias",-1),p=e("p",null,"\u521B\u5EFA import \u6216 require \u7684\u522B\u540D\uFF0C\u6765\u786E\u4FDD\u6A21\u5757\u5F15\u5165\u53D8\u5F97\u66F4\u7B80\u5355",-1),m=e("p",null,"\u4F7F\u7528",-1),_=e("p",null,"\u672B\u5C3E\u6DFB\u52A0 $\uFF0C\u4EE5\u8868\u793A\u7CBE\u51C6\u5339\u914D",-1),u=e("h2",{id:"2-preferrelative",class:"doc-heading"},"preferRelative",-1),f=e("p",null,[n("\u5F53\u542F\u7528\u6B64\u9009\u9879\u65F6\uFF0Cwebpack \u66F4\u503E\u5411\u4E8E\u5C06\u6A21\u5757\u8BF7\u6C42\u89E3\u6790\u4E3A\u76F8\u5BF9\u8BF7\u6C42\uFF0C"),e("br"),n(" \u800C\u4E0D\u4F7F\u7528\u6765\u81EA node_modules \u76EE\u5F55\u4E0B\u7684\u6A21\u5757")],-1),h=e("h2",{id:"3-\u5176\u4ED6",class:"doc-heading"},"\u5176\u4ED6",-1),x={__name:"resolve",setup(v){const a=[{id:"doc-title",title:"webpack resolve"},{id:"1-alias",title:"1. alias"},{id:"2-preferrelative",title:"2. preferRelative"},{id:"3-\u5176\u4ED6",title:"3. \u5176\u4ED6"}];return(g,w)=>{const o=s("doc-code"),i=s("doc-page");return l(),r(i,{desc:"webpack resolve \u8BE6\u89E3",toc:a},{default:c(()=>[d,p,t(o,{code:`module.exports = {
  resolve: {
    alias: {
      Utilities: path.resolve(__dirname, 'src/utilities/'),
    },
  },
}
`,lang:"javascript"}),m,t(o,{code:`import Utility from '../../utilities/utility' // \u4EE5\u524D
import Utility from 'Utilities/utility' // \u73B0\u5728
`,lang:"javascript"}),_,t(o,{code:`// alias: {
//   xyz$: path.resolve(__dirname, 'path/to/file.js'),
// },
import Test1 from 'xyz'; // \u7CBE\u786E\u5339\u914D\uFF0C\u6240\u4EE5 path/to/file.js \u88AB\u89E3\u6790\u548C\u5BFC\u5165
import Test2 from 'xyz/file.js'; // \u975E\u7CBE\u786E\u5339\u914D\uFF0C\u89E6\u53D1\u666E\u901A\u89E3\u6790 xyz/file.js \u88AB\u89E3\u6790\u548C\u5BFC\u5165
`,lang:"javascript"}),u,f,t(o,{code:"// let's say `src/logo.svg` exists\nimport logo1 from 'logo.svg'; // this is viable when `preferRelative` enabled\nimport logo2 from './logo.svg'; // otherwise you can only use relative path to resolve logo.svg\n\n// `preferRelative` is enabled by default for `new URL()` case(\u9ED8\u8BA4\u5F00\u542F)\nconst b = new URL('module/path', import.meta.url);\nconst a = new URL('./module/path', import.meta.url);\n",lang:"javascript"}),h,t(o,{code:`resolve: {
  // \u5141\u8BB8\u65E0\u6269\u5C55\u540D\u6587\u4EF6 require('./foo') \u53EF\u4EE5\u6B63\u5E38\u8FD0\u884C
  enforceExtension: false,
  // \u6309\u987A\u5E8F\u89E3\u6790\u8FD9\u4E9B\u540E\u7F00\u540D (\u8986\u76D6\u9ED8\u8BA4\u914D\u7F6E)
  extensions: ['.wasm', '.mjs', '.js', '.json'],
  // \u5728 package.json \u4E2D\u4F7F\u7528\u54EA\u4E2A\u5B57\u6BB5\u5BFC\u5165\u6A21\u5757
  mainFields: ['browser', 'module', 'main'], //  \u5F53webpack target \u5C5E\u6027\u8BBE\u7F6E\u4E3A webworker, web \u6216\u8005\u6CA1\u6709\u6307\u5B9A \u7684\u9ED8\u8BA4\u503C
  mainFields: ['module', 'main'],  // \u5F53webpack target \u5C5E\u6027\u8BBE\u7F6E\u4E3A\u4EE5\u4E0A\u5176\u4ED6\u503C \u7684\u9ED8\u8BA4\u503C
  // \u89E3\u6790\u76EE\u5F55\u65F6\u8981\u4F7F\u7528\u7684\u6587\u4EF6\u540D
  mainFiles: ['index'],
  // \u5728 package.json \u4E2D\u7528\u4E8E\u89E3\u6790\u6A21\u5757\u8BF7\u6C42\u7684\u5B57\u6BB5
  exportsFields: ['exports', 'myCompanyExports']
  // \u544A\u8BC9 webpack \u89E3\u6790\u6A21\u5757\u65F6\u5E94\u8BE5\u641C\u7D22\u7684\u76EE\u5F55
  modules: [path.resolve(__dirname, 'src'), 'node_modules'],  // src\u5C06\u4F18\u5148\u4E8Enode_modules
  // \u4F20\u9012 true \u5C06\u7F13\u5B58\u4E00\u5207\u6A21\u5757\uFF0C\u4F46\u5E76\u4E0D\u5B89\u5168
  unsafeCache: true,
  // package.json\u4E2D\u7528\u4E8E\u63D0\u4F9B\u7A0B\u5E8F\u5305\u5185\u90E8\u8BF7\u6C42\u7684\u5B57\u6BB5\uFF08\u4EE5\uFF03\u5F00\u5934\u7684\u8BF7\u6C42\u88AB\u89C6\u4E3A\u5185\u90E8\u8BF7\u6C42\uFF09
  importsFields: ['browser', 'module', 'main'],
  // \u5F53\u6B63\u5E38\u89E3\u6790\u5931\u8D25\u91CD\u5B9A\u5411\u6A21\u5757\u8BF7\u6C42
  fallback: {
    xyz: path.resolve(__dirname, 'path/to/file.js')
  }
},
`,lang:"javascript"})]),_:1})}}};export{x as default};
