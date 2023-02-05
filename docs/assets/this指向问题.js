import{r as e,o as l,c as i,f as c,g as t,a9 as n}from"./vendor.js";const d=n("h2",{id:"1-\u524D\u8A00",class:"doc-heading"},"\u524D\u8A00",-1),h=n("ul",null,[n("li",null,"\u6BCF\u4E2A\u51FD\u6570\u5728\u8C03\u7528\u65F6\uFF0C\u90FD\u4F1A\u53BB\u83B7\u53D62\u4E2A\u503C\uFF1A arguments\u548Cthis"),n("li",null,"\u533F\u540D\u51FD\u6570\u5728\u83B7\u53D6\u8FD92\u4E2A\u503C\u65F6\uFF0C\u53EA\u4F1A\u641C\u7D22\u81EA\u5DF1\u6267\u884C\u73AF\u5883\u4E2D\u7684\uFF0C\u6C38\u8FDC\u4E0D\u4F1A\u76F4\u63A5\u8BBF\u95EE\u5916\u90E8\u51FD\u6570\u6216\u6267\u884C\u73AF\u5883\u4E2D\u7684\u8FD92\u4E2A\u53D8\u91CF")],-1),r=n("h2",{id:"2-\u7ED3\u8BBA",class:"doc-heading"},"\u7ED3\u8BBA",-1),_=n("p",null,"this\u6700\u7EC8\u6307\u5411\u7684\u662F\u90A3\u4E2A\u8C03\u7528\u5B83\u7684\u5BF9\u8C61",-1),f=n("h2",{id:"3-\u663E\u793A\u7ED1\u5B9A",class:"doc-heading"},"\u663E\u793A\u7ED1\u5B9A",-1),p=n("p",null,"\u901A\u8FC7bind()\uFF0Capply()\uFF0Ccall()\u51FD\u6570\u53EF\u4EE5\u663E\u793A\u7684\u7ED1\u5B9Athis\u4F5C\u7528\u57DF\uFF0C\u5B83\u63A5\u6536\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u5373\u662F\u4E0A\u4E0B\u6587\u5BF9\u8C61\u5E76\u5C06\u5176\u8D4B\u7ED9this",-1),w=n("h2",{id:"4-\u9ED8\u8BA4\u7ED1\u5B9A\u5168\u5C40\u53D8\u91CFwindow",class:"doc-heading"},"\u9ED8\u8BA4\u7ED1\u5B9A\u5168\u5C40\u53D8\u91CFwindow",-1),g=n("h2",{id:"5-new\u65B0\u5BF9\u8C61\u7ED1\u5B9A-\u6307\u5411new\u51FA\u6765\u7684\u5BF9\u8C61\u5B9E\u4F8B-",class:"doc-heading"},"new\u65B0\u5BF9\u8C61\u7ED1\u5B9A(\u6307\u5411new\u51FA\u6765\u7684\u5BF9\u8C61\u5B9E\u4F8B)",-1),u=n("h2",{id:"6-this-\u5728\u533F\u540D\u51FD\u6570\u4E2D",class:"doc-heading"},"this \u5728\u533F\u540D\u51FD\u6570\u4E2D",-1),j=n("p",null,"\u533F\u540D\u51FD\u6570(\u975E\u7BAD\u5934\u51FD\u6570)\u7684\u6267\u884C\u73AF\u5883\u5177\u6709\u5168\u5C40\u6027\uFF0Cthis\u901A\u5E38\u6307\u5411window",-1),v=n("h2",{id:"7-this\u5728es6-class\u4E2D\u7684\u6307\u5411",class:"doc-heading"},"this\u5728es6 Class\u4E2D\u7684\u6307\u5411",-1),C={__name:"this\u6307\u5411\u95EE\u9898",setup(b){const a=[{id:"doc-title",title:"this \u6307\u5411\u95EE\u9898"},{id:"1-\u524D\u8A00",title:"1. \u524D\u8A00"},{id:"2-\u7ED3\u8BBA",title:"2. \u7ED3\u8BBA"},{id:"3-\u663E\u793A\u7ED1\u5B9A",title:"3. \u663E\u793A\u7ED1\u5B9A"},{id:"4-\u9ED8\u8BA4\u7ED1\u5B9A\u5168\u5C40\u53D8\u91CFwindow",title:"4. \u9ED8\u8BA4\u7ED1\u5B9A\u5168\u5C40\u53D8\u91CFwindow"},{id:"5-new\u65B0\u5BF9\u8C61\u7ED1\u5B9A-\u6307\u5411new\u51FA\u6765\u7684\u5BF9\u8C61\u5B9E\u4F8B-",title:"5. new\u65B0\u5BF9\u8C61\u7ED1\u5B9A(\u6307\u5411new\u51FA\u6765\u7684\u5BF9\u8C61\u5B9E\u4F8B)"},{id:"6-this-\u5728\u533F\u540D\u51FD\u6570\u4E2D",title:"6. this \u5728\u533F\u540D\u51FD\u6570\u4E2D"},{id:"7-this\u5728es6-class\u4E2D\u7684\u6307\u5411",title:"7. this\u5728es6 Class\u4E2D\u7684\u6307\u5411"}];return(m,N)=>{const o=e("doc-code"),s=e("doc-page");return l(),i(s,{desc:"js this \u6307\u5411\u95EE\u9898\u8BF4\u660E",toc:a},{default:c(()=>[d,h,r,_,t(o,{code:`var a = 'hello'

function foo () {
  console.log(this.a)
}

foo() // hello (\u53EF\u4EE5\u770B\u505Awindow.foo())
`,lang:"javascript"}),t(o,{code:`function foo () {
  console.log(this.a)  //\u8C01\u8C03\u7528\u4E86\u6211\uFF0C\u6211\u5C31\u6307\u5411\u8C01
}

var obj = {
  a: 'hello',
  foo: foo,
}
obj.foo() // hello
`,lang:"javascript"}),t(o,{code:`function foo () {
  console.log(this.a)  //\u8C01\u8C03\u7528\u4E86\u6211\uFF0C\u6211\u5C31\u6307\u5411\u8C01
}

var obj2 = {
  a: 'hello',
  foo: foo,
}
var obj1 = {
  a: 'world',
  obj2: obj2,
}
obj1.obj2.foo() // hello
`,lang:"javascript"}),t(o,{code:`function foo () {
  console.log(this.a)
}

var obj = {
  a: 'hello',
  foo: foo,
}
var bar = obj.foo // \u51FD\u6570\u5F15\u7528\u4F20\u9012
var a = 'Global'
bar() // "Global"
`,lang:"javascript"}),f,p,w,t(o,{code:`// \u63A5\u4E0A
var a = 'hello window'
foo.call(null) // hello window
`,lang:"javascript"}),g,t(o,{code:`function foo(a) {
  this.a = a
}
var bar = new foo('hello')
console.log(bar.a) // hello
`,lang:"javascript"}),u,j,t(o,{code:`var flag = 'window'
var object = {
  flag: 'local',
  sayFlag: function () {
    //\u8FD4\u56DE\u4E00\u4E2A\u533F\u540D\u51FD\u6570
    return function () {
      console.log(this.flag)
    }
  },
}
object.sayFlag()() // window \uFF08\u975E\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF09
`,lang:"javascript"}),v,t(o,{code:`class Printer {
  printName (name = 'there') {
    this.print(\`Hello \${name}\`)
  }

  print (text) {
    console.log(text)
  }
}

const printer = new Printer()

const { printName } = printer
printName() // \u62A5\u9519

printer.printName() // Hello there
`,lang:"javascript"})]),_:1})}}};export{C as default};
