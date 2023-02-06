import{r as d,o as u,c as s,f as a,g as n,a8 as e}from"./vendor-5a734afa.js";const c=e("h2",{id:"1-node\u5185\u90E8\u63D0\u4F9B\u4E00\u4E2Amodule\u6784\u5EFA\u51FD\u6570\u3002\u6240\u6709\u6A21\u5757\u90FD\u662Fmodule\u7684\u5B9E\u4F8B",class:"doc-heading"},"Node\u5185\u90E8\u63D0\u4F9B\u4E00\u4E2AModule\u6784\u5EFA\u51FD\u6570\u3002\u6240\u6709\u6A21\u5757\u90FD\u662FModule\u7684\u5B9E\u4F8B",-1),i=e("h2",{id:"2-\u6BCF\u4E2A\u6A21\u5757\u5185\u90E8\uFF0C\u90FD\u6709\u4E00\u4E2Amodule\u5BF9\u8C61\uFF0C\u4EE3\u8868\u5F53\u524D\u6A21\u5757\u3002\u5B83\u6709\u4EE5\u4E0B\u5C5E\u6027",class:"doc-heading"},"\u6BCF\u4E2A\u6A21\u5757\u5185\u90E8\uFF0C\u90FD\u6709\u4E00\u4E2Amodule\u5BF9\u8C61\uFF0C\u4EE3\u8868\u5F53\u524D\u6A21\u5757\u3002\u5B83\u6709\u4EE5\u4E0B\u5C5E\u6027",-1),r=e("ul",null,[e("li",null,"module.id \u6A21\u5757\u7684\u8BC6\u522B\u7B26\uFF0C\u901A\u5E38\u662F\u5E26\u6709\u7EDD\u5BF9\u8DEF\u5F84\u7684\u6A21\u5757\u6587\u4EF6\u540D\u3002"),e("li",null,"module.filename \u6A21\u5757\u7684\u6587\u4EF6\u540D\uFF0C\u5E26\u6709\u7EDD\u5BF9\u8DEF\u5F84\u3002"),e("li",null,"module.loaded \u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u6A21\u5757\u662F\u5426\u5DF2\u7ECF\u5B8C\u6210\u52A0\u8F7D\u3002"),e("li",null,"module.parent \u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8868\u793A\u8C03\u7528\u8BE5\u6A21\u5757\u7684\u6A21\u5757\u3002"),e("li",null,"module.children \u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u8868\u793A\u8BE5\u6A21\u5757\u8981\u7528\u5230\u7684\u5176\u4ED6\u6A21\u5757\u3002"),e("li",null,"module.exports \u8868\u793A\u6A21\u5757\u5BF9\u5916\u8F93\u51FA\u7684\u503C\u3002")],-1),j={__name:"module\u5BF9\u8C61",setup(m){const l=[{id:"doc-title",title:"commonJS\u4E4Bmodule\u5BF9\u8C61"},{id:"1-node\u5185\u90E8\u63D0\u4F9B\u4E00\u4E2Amodule\u6784\u5EFA\u51FD\u6570\u3002\u6240\u6709\u6A21\u5757\u90FD\u662Fmodule\u7684\u5B9E\u4F8B",title:"1. Node\u5185\u90E8\u63D0\u4F9B\u4E00\u4E2AModule\u6784\u5EFA\u51FD\u6570\u3002\u6240\u6709\u6A21\u5757\u90FD\u662FModule\u7684\u5B9E\u4F8B"},{id:"2-\u6BCF\u4E2A\u6A21\u5757\u5185\u90E8\uFF0C\u90FD\u6709\u4E00\u4E2Amodule\u5BF9\u8C61\uFF0C\u4EE3\u8868\u5F53\u524D\u6A21\u5757\u3002\u5B83\u6709\u4EE5\u4E0B\u5C5E\u6027",title:"2. \u6BCF\u4E2A\u6A21\u5757\u5185\u90E8\uFF0C\u90FD\u6709\u4E00\u4E2Amodule\u5BF9\u8C61\uFF0C\u4EE3\u8868\u5F53\u524D\u6A21\u5757\u3002\u5B83\u6709\u4EE5\u4E0B\u5C5E\u6027"}];return(p,_)=>{const o=d("doc-code"),t=d("doc-page");return u(),s(t,{desc:"",toc:l},{default:a(()=>[c,n(o,{code:`function Module(id, parent) {
  this.id = id
  this.exports = {}
  this.parent = parent
  // ...
`,lang:"javascript"}),i,r,n(o,{code:`// example.js
var jquery = require('jquery')
exports.$ = jquery
console.log(module)
`,lang:"javascript"}),n(o,{code:`{ id: '.',
  exports: { '$': [Function] },
  parent: null,
  filename: '/path/to/example.js',
  loaded: false,
  children:
   [ { id: '/path/to/node_modules/jquery/dist/jquery.js',
       exports: [Function],
       parent: [Circular],
       filename: '/path/to/node_modules/jquery/dist/jquery.js',
       loaded: true,
       children: [],
       paths: [Object] } ],
  paths:
   [ '/home/user/deleted/node_modules',
     '/home/user/node_modules',
     '/home/node_modules',
     '/node_modules' ]
}
`,lang:"javascript"})]),_:1})}}};export{j as default};
