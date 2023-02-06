import{r as o,o as s,c,f as d,g as t,a9 as n,v as i}from"./vendor.js";const r=n("h2",{id:"1-\u524D\u8A00",class:"doc-heading"},"\u524D\u8A00",-1),p=n("p",null,"call\u3001apply \u548C bind \u662F Function \u5BF9\u8C61\u81EA\u5E26\u7684\u4E09\u4E2A\u65B9\u6CD5\uFF0C\u8FD9\u4E09\u4E2A\u65B9\u6CD5\u7684\u4E3B\u8981\u4F5C\u7528\u662F\u6539\u53D8\u51FD\u6570\u4E2D\u7684 this \u6307\u5411\uFF0C\u4ECE\u800C\u53EF\u4EE5\u8FBE\u5230\u63A5\u82B1\u79FB\u6728\u7684\u6548\u679C\u3002",-1),h=n("h2",{id:"2-call",class:"doc-heading"},"call",-1),u=n("p",null,[n("code",{class:"doc-token"},"call(thisArgs [,args...])"),n("br"),i(" thisArgs")],-1),m=n("ol",null,[n("li",null,"\u6307\u5B9A\u4E86\u51FD\u6570\u5728\u8FD0\u884C\u671F\u7684\u8C03\u7528\u8005\uFF0C\u4E5F\u5C31\u662F\u51FD\u6570\u4E2D\u7684 this \u5BF9\u8C61"),n("li",null,"\u4E0D\u4F20\uFF0C\u6216\u8005\u4F20null,undefined\uFF0C \u51FD\u6570\u4E2D\u7684 this \u6307\u5411 window \u5BF9\u8C61"),n("li",null,"\u4F20\u9012\u53E6\u4E00\u4E2A\u51FD\u6570\u7684\u51FD\u6570\u540D\uFF0C\u51FD\u6570\u4E2D\u7684 this \u6307\u5411\u8FD9\u4E2A\u51FD\u6570\u7684\u5F15\u7528"),n("li",null,"\u4F20\u9012\u5B57\u7B26\u4E32\u3001\u6570\u503C\u6216\u5E03\u5C14\u7C7B\u578B\u7B49\u57FA\u7840\u7C7B\u578B\uFF0C\u51FD\u6570\u4E2D\u7684 this \u6307\u5411\u5176\u5BF9\u5E94\u7684\u5305\u88C5\u5BF9\u8C61\uFF0C\u5982 String\u3001Number\u3001Boolean"),n("li",null,"\u4F20\u9012\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u51FD\u6570\u4E2D\u7684 this \u6307\u5411\u8FD9\u4E2A\u5BF9\u8C61")],-1),f=n("h2",{id:"3-apply",class:"doc-heading"},"apply",-1),g=n("p",null,[n("code",{class:"doc-token"},"apply(thisArgs [,args[]])"),n("br"),i(" apply \u548C call \u7684\u552F\u4E00\u533A\u522B\u662F\u7B2C\u4E8C\u4E2A\u53C2\u6570\u7684\u4F20\u9012\u65B9\u5F0F\u4E0D\u540C\uFF0Capply \u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5FC5\u987B\u662F\u4E00\u4E2A\u6570\u7EC4\uFF08\u6216\u8005\u7C7B\u6570\u7EC4\uFF09")],-1),y=n("h2",{id:"4-bind",class:"doc-heading"},"bind",-1),_=n("p",null,[n("code",{class:"doc-token"},"bind(thisArgs [,args...])")],-1),b=n("ul",null,[n("li",null,"bind\u662FES5 \u65B0\u589E\u7684\u4E00\u4E2A\u65B9\u6CD5"),n("li",null,"call \u6216 apply \u90FD\u4F1A\u81EA\u52A8\u6267\u884C\u5BF9\u5E94\u7684\u51FD\u6570"),n("li",null,"bind \u4E0D\u4F1A\u6267\u884C\u5BF9\u5E94\u7684\u51FD\u6570\uFF0C\u53EA\u662F\u8FD4\u56DE\u4E86\u5BF9\u51FD\u6570\u7684\u5F15\u7528\u3002")],-1),v=n("p",null,"bind \u7684 polyfill \u5B9E\u73B0",-1),j=n("p",null,"bind \u4E4B\u540E this \u7684\u6307\u5411\u662F\u4E0D\u53EF\u518D\u6B21\u6539\u53D8\u7684",-1),w=n("h2",{id:"5-\u5B9E\u6218",class:"doc-heading"},"\u5B9E\u6218",-1),B=n("p",null,"\u6570\u7EC4\u53BB\u91CD",-1),k=n("p",null,"\u7EE7\u627F",-1),I={__name:"call\uFF0Capply \u548C bind",setup(x){const l=[{id:"doc-title",title:"call,apply \u548C bind"},{id:"1-\u524D\u8A00",title:"1. \u524D\u8A00"},{id:"2-call",title:"2. call"},{id:"3-apply",title:"3. apply"},{id:"4-bind",title:"4. bind"},{id:"5-\u5B9E\u6218",title:"5. \u5B9E\u6218"}];return(A,T)=>{const a=o("doc-code"),e=o("doc-page");return s(),c(e,{desc:"",toc:l},{default:d(()=>[r,p,h,u,m,t(a,{code:`function a () {
  console.log(this)
}

function b () {}
var obj = { name: 'onepixel' }

a.call() // window
a.call(null) // window
a.call(undefined)// window
a.call(1) // Number
a.call('') // String
a.call(true) // Boolean
a.call(b) // function b(){}
a.call(obj) // {name:'onepixel'}

`,lang:"javascript"}),t(a,{code:`var a = {
  name: 'function a',
  say: function () {
    console.log('Hi,I\\'m function a!')
  },
}

function b (name) {
  console.log('Post params: ' + name)
  console.log('I\\'m ' + this.name)
  this.say()
}

b.call(a, 'test')
// Post params: test
// I'm function a
// I'm function a!
`,lang:"javascript"}),f,g,t(a,{code:`function b (x, y, z) {
  console.log(x, y, z)
}

b.apply(null, [1, 2, 3]) // 1 2 3
`,lang:"javascript"}),y,_,b,t(a,{code:`var obj = { name: 'onepixel' }
document.addEventListener('click', onClick.bind(obj, 'p1', 'p2'), false)

function onClick (a, b) {
  console.log(
    this.name, // onepixel
    a, // p1
    b, // p2
  )
}
`,lang:"javascript"}),v,t(a,{code:`if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    var args = Array.prototype.slice.call(arguments, 1)    //arraylike => array
    var fToBind = this     //this\u5728\u8FD9\u91CC\u6307\u5411\u7684\u662F\u5B9E\u4F8B\u51FD\u6570
    var fBind = function () {
      console.log(this)      //window
      return fToBind.apply(
        // \u5982\u679C\u5916\u90E8\u6267\u884Cvar obj = new fBind(), \u5219\u5C06obj\u4F5C\u4E3A\u6700\u7EC8\u7684this\uFF0C\u653E\u5F03\u4F7F\u7528oThis
        this instanceof fBind
          ? this  // \u6B64\u65F6\u7684 this \u5C31\u662F new \u51FA\u7684 obj
          : oThis || this, // \u5982\u679C\u4F20\u9012\u7684 oThis \u65E0\u6548\uFF0C\u5C31\u5C06 fBind \u7684\u8C03\u7528\u8005\u4F5C\u4E3Athis
        // \u5C06\u901A\u8FC7bind\u4F20\u9012\u7684\u53C2\u6570\u548C\u8C03\u7528\u65F6\u4F20\u9012\u7684\u53C2\u6570\u8FDB\u884C\u5408\u5E76\uFF0C\u5E76\u4F5C\u4E3A\u6700\u7EC8\u7684\u53C2\u6570\u4F20\u9012
        args.concat(Array.prototype.slice.call(arguments)),
      )
    }
    // \u5C06\u76EE\u6807\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61\u62F7\u8D1D\u5230\u65B0\u51FD\u6570\u4E2D\uFF0C\u56E0\u4E3A\u76EE\u6807\u51FD\u6570\u6709\u53EF\u80FD\u88AB\u5F53\u4F5C\u6784\u9020\u51FD\u6570\u4F7F\u7528
    fBind.prototype = this.prototype
    // \u8FD4\u56DEfBind\u7684\u5F15\u7528\uFF0C\u7531\u5916\u90E8\u6309\u9700\u8C03\u7528
    return fBind
  }
}
`,lang:"javascript"}),j,t(a,{code:`var obj1 = {
  name: 'Tom',
}
var obj2 = {
  name: 'Joy',
}
setTimeout(function () {
  console.log(this.name)
}.bind(obj1).bind(obj2), 0)
//tom
`,lang:"javascript"}),w,B,t(a,{code:`Array.prototype.unique = function (fn) {
  var rst = []
  var tmp = {}
  this.forEach(function (val) {
    var key = 'uniq' + (typeof fn === 'function' ? fn.bind(this, val)() : val)
    if (!tmp.hasOwnProperty(key)) {
      rst.push(val)
      tmp[key] = null
    }
  }, this)
  return rst
}
var arr = [1, 2, 2, 3, 5]
arr.unique(function (v) {
  return v
})
`,lang:"javascript"}),k,t(a,{code:`function Animal (name, weight) {
  this.name = name
  this.weight = weight
}

function Cat () {
  Animal.call(this, 'cat', '50')
  //Animal.apply(this,['cat','50']);

  this.say = function () {
    console.log('I am ' + this.name + ',my weight is ' + this.weight)
  }
}

var cat = new Cat()
cat.say()//I am cat,my weight is 50
`,lang:"javascript"}),t(a,{code:`Array.prototype.forEach.call(arraylike,function(item){
  console.log(item) // 1 2 3 4
})
`,lang:"javascript"}),t(a,{code:`Math.max(1,2,3,6,9) // 9
var arr = [1,2,3,6,9]
Math.max.apply(null,arr) // 9
`,lang:"javascript"})]),_:1})}}};export{I as default};
