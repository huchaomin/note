import{r as a,o as p,c,f as m,g as e,a8 as t}from"./vendor.js";const l=t("p",null,"\u7C7B\u4F3C\u4E8E\u5BF9\u8C61\uFF0C\u4E5F\u662F\u952E\u503C\u5BF9\u7684\u96C6\u5408\uFF0C\u4F46\u662F\u201C\u952E\u201D\u7684\u8303\u56F4\u4E0D\u9650\u4E8E\u5B57\u7B26\u4E32\uFF0C\u5404\u79CD\u7C7B\u578B\u7684\u503C\uFF08\u5305\u62EC\u5BF9\u8C61\uFF09\u90FD\u53EF\u4EE5\u5F53\u4F5C\u952E\u3002",-1),r=t("p",null,"\u5B9E\u9645\u4E0A",-1),d=t("p",null,"\u6CE8\u610F\u5F15\u7528\u7C7B\u578B",-1),f={__name:"Map\u6570\u636E\u7ED3\u6784",setup(i){const o=[{id:"doc-title",title:"Map\u6570\u636E\u7ED3\u6784"}];return(u,_)=>{const n=a("doc-code"),s=a("doc-page");return p(),c(s,{desc:"",toc:o},{default:m(()=>[l,e(n,{code:`const m = new Map()
const o = {p: 'Hello World'}

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false
`,lang:"javascript"}),e(n,{code:`const map = new Map([
  ['name', '\u5F20\u4E09'],
  ['title', 'Author']
])

map.size // 2
map.has('name') // true
map.get('name') // "\u5F20\u4E09"
map.has('title') // true
map.get('title') // "Author"
`,lang:"javascript"}),r,e(n,{code:`const items = [
  ['name', '\u5F20\u4E09'],
  ['title', 'Author']
]
const map = new Map()
items.forEach(
  ([key, value]) => map.set(key, value)
)
`,lang:"javascript"}),d,e(n,{code:`const map = new Map()
map.set(['a'], 555)
map.get(['a']) // undefined
`,lang:"javascript"}),e(n,{code:`let map = new Map()

map.set(-0, 123)
map.get(+0) // 123

map.set(true, 1)
map.set('true', 2)
map.get(true) // 1

map.set(undefined, 3)
map.set(null, 4)
map.get(undefined) // 3

map.set(NaN, 123)
map.get(NaN) // 123
`,lang:"javascript"}),e(n,{code:`map[Symbol.iterator] === map.entries

for (let [key, value] of map.entries()) {
  console.log(key, value)
}
// "F" "no"
// "T" "yes"

// \u7B49\u540C\u4E8E\u4F7F\u7528map.entries()
for (let [key, value] of map) {
  console.log(key, value)
}
// "F" "no"
// "T" "yes"
`,lang:"javascript"})]),_:1})}}};export{f as default};
