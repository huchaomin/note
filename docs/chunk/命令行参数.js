import{r as t,o as d,c as r,f as c,g as e,a9 as n,v as s}from"./vendor.js";const h=n("h2",{id:"1-\u6DFB\u52A0\u53C2\u6570",class:"doc-heading"},"\u6DFB\u52A0\u53C2\u6570",-1),u=n("ol",null,[n("li",null,"\u53EF\u4EE5\u4F20\u5165\u4EFB\u610F\u6570\u91CF\u7684\u53C2\u6570"),n("li",null,"\u53C2\u6570\u53EF\u4EE5\u662F\u72EC\u7ACB\u7684\uFF0C\u4E5F\u53EF\u4EE5\u5177\u6709\u952E\u548C\u503C\u3002")],-1),g=n("h2",{id:"2-\u83B7\u53D6\u53C2\u6570",class:"doc-heading"},"\u83B7\u53D6\u53C2\u6570",-1),p=n("p",null,"process.argv \u5C5E\u6027\u662F\u4E00\u4E2A\u5305\u542B\u6240\u6709\u547D\u4EE4\u884C\u8C03\u7528\u53C2\u6570\u7684\u6570\u7EC4",-1),_=n("ul",null,[n("li",null,"\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F node \u547D\u4EE4\u7684\u5B8C\u6574\u8DEF\u5F84"),n("li",null,"\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u6B63\u88AB\u6267\u884C\u7684\u6587\u4EF6\u7684\u5B8C\u6574\u8DEF\u5F84"),n("li",null,"\u5176\u4ED6\u7684\u53C2\u6570\u4ECE\u7B2C\u4E09\u4E2A\u4F4D\u7F6E\u5F00\u59CB")],-1),m=n("p",null,"process.argv.slice(2)",-1),j=n("p",null,"\u4F7F\u7528 minimist \u5E93\u5904\u7406\u53C2\u6570",-1),v=n("div",{class:"doc-note doc-note--warning"},[n("p",{class:"doc-note__title"},"WARNING"),n("p",null,"\u4F7F\u7528\u524D\u4E00\u5B9A\u8981\u5728\u53C2\u6570\u9762\u524D\u52A0\u2013")],-1),f=n("h2",{id:"3-\u4F7F\u7528-node-js-\u8F93\u51FA\u5230\u547D\u4EE4\u884C",class:"doc-heading"},"\u4F7F\u7528 Node.js \u8F93\u51FA\u5230\u547D\u4EE4\u884C",-1),x=n("p",null,[s("Node.js \u63D0\u4F9B\u4E86 console \u6A21\u5757\uFF0C\u8BE5\u6A21\u5757\u63D0\u4F9B\u4E86\u5927\u91CF\u975E\u5E38\u6709\u7528\u7684\u4E0E\u547D\u4EE4\u884C\u4EA4\u4E92\u7684\u65B9\u6CD5\u3002"),n("br"),s(" \u5B83\u57FA\u672C\u4E0A\u4E0E\u6D4F\u89C8\u5668\u4E2D\u7684 console \u5BF9\u8C61\u76F8\u540C")],-1),b=n("h3",{id:"4-\u57FA\u7840\u8F93\u51FA",class:"doc-heading"},"\u57FA\u7840\u8F93\u51FA",-1),q=n("p",null,"\u53EF\u4EE5\u901A\u8FC7\u4F20\u5165\u53D8\u91CF\u548C\u683C\u5F0F\u8BF4\u660E\u7B26\u6765\u683C\u5F0F\u5316\u7528\u8BED",-1),N=n("ul",null,[n("li",null,"%s \u4F1A\u683C\u5F0F\u5316\u53D8\u91CF\u4E3A\u5B57\u7B26\u4E32"),n("li",null,"%d \u4F1A\u683C\u5F0F\u5316\u53D8\u91CF\u4E3A\u6570\u5B57"),n("li",null,"%i \u4F1A\u683C\u5F0F\u5316\u53D8\u91CF\u4E3A\u5176\u6574\u6570\u90E8\u5206"),n("li",null,"%o \u4F1A\u683C\u5F0F\u5316\u53D8\u91CF\u4E3A\u5BF9\u8C61")],-1),S=n("h3",{id:"5-\u6E05\u7A7A\u63A7\u5236\u53F0",class:"doc-heading"},"\u6E05\u7A7A\u63A7\u5236\u53F0",-1),y=n("h3",{id:"6-\u5143\u7D20\u8BA1\u6570-console-count-",class:"doc-heading"},"\u5143\u7D20\u8BA1\u6570 console.count()",-1),E=n("h3",{id:"7-\u6253\u5370\u5806\u6808\u8E2A\u8FF9",class:"doc-heading"},"\u6253\u5370\u5806\u6808\u8E2A\u8FF9",-1),k=n("h3",{id:"8-\u8BA1\u7B97\u8017\u65F6-time-\u548C-timeend-",class:"doc-heading"},"\u8BA1\u7B97\u8017\u65F6 time() \u548C timeEnd()",-1),P=n("h3",{id:"9-stdout-\u548C-stderr",class:"doc-heading"},"stdout \u548C stderr",-1),I=n("p",null,[s("console.log \u975E\u5E38\u9002\u5408\u5728\u63A7\u5236\u53F0\u4E2D\u6253\u5370\u6D88\u606F\u3002 \u8FD9\u5C31\u662F\u6240\u8C13\u7684\u6807\u51C6\u8F93\u51FA\uFF08\u6216\u79F0\u4E3A stdout\uFF09\u3002"),n("br"),s(" console.error \u4F1A\u6253\u5370\u5230 stderr \u6D41\u3002"),n("br"),s(" \u5B83\u4E0D\u4F1A\u51FA\u73B0\u5728\u63A7\u5236\u53F0\u4E2D\uFF0C\u4F46\u662F\u4F1A\u51FA\u73B0\u5728\u9519\u8BEF\u65E5\u5FD7\u4E2D\u3002")],-1),w=n("h3",{id:"10-\u4E3A\u8F93\u51FA\u7740\u8272",class:"doc-heading"},"\u4E3A\u8F93\u51FA\u7740\u8272",-1),B=n("p",null,"\u4F7F\u7528 Chalk \u5E93\uFF08\u6837\u5F0F\u7684\u8BBE\u7F6E\uFF1A\u4F8B\u5982\u989C\u8272\u3001\u4F7F\u6587\u672C\u53D8\u4E3A\u7C97\u4F53\u3001\u659C\u4F53\u6216\u5E26\u4E0B\u5212\u7EBF\uFF09",-1),C=n("h3",{id:"11-progress-\u5E93\u521B\u5EFA\u8FDB\u5EA6\u6761",class:"doc-heading"},"Progress \u5E93\u521B\u5EFA\u8FDB\u5EA6\u6761",-1),L=n("h2",{id:"12-\u4E2D\u4ECE\u547D\u4EE4\u884C\u63A5\u6536\u8F93\u5165",class:"doc-heading"},"\u4E2D\u4ECE\u547D\u4EE4\u884C\u63A5\u6536\u8F93\u5165",-1),R=n("p",null,[s("Node.js CLI \u7A0B\u5E8F\u5177\u6709\u4EA4\u4E92\u6027"),n("br"),s(" Node.js \u63D0\u4F9B\u4E86 readline \u6A21\u5757\u6765\u6267\u884C\u4EE5\u4E0B\u64CD\u4F5C\uFF1A\u6BCF\u6B21\u4E00\u884C\u5730\u4ECE\u53EF\u8BFB\u6D41\uFF08\u4F8B\u5982 process.stdin \u6D41\uFF0C\u5728 Node.js \u7A0B\u5E8F\u6267\u884C\u671F\u95F4\u8BE5\u6D41\u5C31\u662F\u7EC8\u7AEF\u8F93\u5165\uFF09\u83B7\u53D6\u8F93\u5165\u3002")],-1),D=n("p",null,"\u5176\u4ED6\u5982readline-sync\u3001Inquirer.js\u7B49\u8F6F\u4EF6\u5305\u5219API\u66F4\u4E3A\u4E30\u5BCC",-1),z={__name:"\u547D\u4EE4\u884C\u53C2\u6570",setup(T){const i=[{id:"doc-title",title:"\u547D\u4EE4\u884C\u53C2\u6570"},{id:"1-\u6DFB\u52A0\u53C2\u6570",title:"1. \u6DFB\u52A0\u53C2\u6570"},{id:"2-\u83B7\u53D6\u53C2\u6570",title:"2. \u83B7\u53D6\u53C2\u6570"},{id:"3-\u4F7F\u7528-node-js-\u8F93\u51FA\u5230\u547D\u4EE4\u884C",title:"3. \u4F7F\u7528 Node.js \u8F93\u51FA\u5230\u547D\u4EE4\u884C"},{id:"4-\u57FA\u7840\u8F93\u51FA",title:"3.1. \u57FA\u7840\u8F93\u51FA",sub:!0},{id:"5-\u6E05\u7A7A\u63A7\u5236\u53F0",title:"3.2. \u6E05\u7A7A\u63A7\u5236\u53F0",sub:!0},{id:"6-\u5143\u7D20\u8BA1\u6570-console-count-",title:"3.3. \u5143\u7D20\u8BA1\u6570 console.count()",sub:!0},{id:"7-\u6253\u5370\u5806\u6808\u8E2A\u8FF9",title:"3.4. \u6253\u5370\u5806\u6808\u8E2A\u8FF9",sub:!0},{id:"8-\u8BA1\u7B97\u8017\u65F6-time-\u548C-timeend-",title:"3.5. \u8BA1\u7B97\u8017\u65F6 time() \u548C timeEnd()",sub:!0},{id:"9-stdout-\u548C-stderr",title:"3.6. stdout \u548C stderr",sub:!0},{id:"10-\u4E3A\u8F93\u51FA\u7740\u8272",title:"3.7. \u4E3A\u8F93\u51FA\u7740\u8272",sub:!0},{id:"11-progress-\u5E93\u521B\u5EFA\u8FDB\u5EA6\u6761",title:"3.8. Progress \u5E93\u521B\u5EFA\u8FDB\u5EA6\u6761",sub:!0},{id:"12-\u4E2D\u4ECE\u547D\u4EE4\u884C\u63A5\u6536\u8F93\u5165",title:"4. \u4E2D\u4ECE\u547D\u4EE4\u884C\u63A5\u6536\u8F93\u5165"}];return(V,A)=>{const o=t("doc-code"),l=t("doc-link"),a=t("doc-page");return d(),r(a,{desc:"",toc:i},{default:c(()=>[h,u,e(o,{code:`node app.js joe
node app.js name=joe
`,lang:"shell"}),g,p,_,e(o,{code:`# index.js
console.log(process.argv)

node index.js haha
#  [
#    'D:\\\\Program Files\\\\nodejs\\\\node.exe',
#    'D:\\\\code\\\\myNote\\\\index.js',
#    'haha'
#  ]
`,lang:"shell"}),m,e(o,{code:`node index.js haha hehe
# [haha, hehe]
node index.js haha=hehe name=joe
# [haha=hehe, name=joe]
`,lang:"shell"}),j,e(o,{code:`node index.js --haha=hehe --name=joe

const args = require('minimist')(process.argv.slice(2))
# args.name = joe
# args.haha = hehe
`,lang:"shell"}),v,f,x,b,e(o,{code:`const x = 'x'
const y = 'y'
console.log(x, y)
//  'x' 'y'
`,lang:"javascript"}),q,N,e(o,{code:`console.log('%i\u6211\u7684%s\u5DF2\u7ECF%d\u5C81',29.5, '\u732B', 2)
// 29\u6211\u7684\u732B\u5DF2\u7ECF2\u5C81
console.log('%o', Number)
`,lang:"javascript"}),S,e(o,{code:`console.clear()
`,lang:"javascript"}),y,e(o,{code:`const x = 1
const y = 2
const z = 3
console.count(x)
// 1:1
console.count(x)
// 1:2
console.count(y)
// 2:1
`,lang:"javascript"}),e(o,{code:`const oranges = ['\u6A59\u5B50', '\u6A59\u5B50', '\u77F3\u69B4']
const apples = ['\u82F9\u679C', '\u77F3\u69B4']
oranges.forEach(fruit => {
  console.count(fruit)
})
oranges.forEach(fruit => {
  console.count(fruit)
})
apples.forEach(fruit => {
  console.count(fruit)
})
//  \u6A59\u5B50: 1
//  \u6A59\u5B50: 2
//  \u77F3\u69B4: 1
//  \u6A59\u5B50: 3
//  \u6A59\u5B50: 4
//  \u77F3\u69B4: 2
//  \u82F9\u679C: 1
//  \u77F3\u69B4: 3
`,lang:"javascript"}),E,e(o,{code:`const function2 = () => console.trace()
const function1 = () => function2()
function1()

//  Trace
//      at function2 (repl:1:33)
//      at function1 (repl:1:25)
//      at repl:1:1
//      at ContextifyScript.Script.runInThisContext (vm.js:44:33)
//      at REPLServer.defaultEval (repl.js:239:29)
//      at bound (domain.js:301:14)
//      at REPLServer.runBound [as eval] (domain.js:314:12)
//      at REPLServer.onLine (repl.js:440:10)
//      at emitOne (events.js:120:20)
//      at REPLServer.emit (events.js:210:7)
`,lang:"javascript"}),k,e(o,{code:`const doSomething = () => console.log('\u6D4B\u8BD5')
const measureDoingSomething = () => {
  console.time('doSomething()')
  //\u505A\u70B9\u4E8B\uFF0C\u5E76\u6D4B\u91CF\u6240\u9700\u7684\u65F6\u95F4\u3002
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()
//  doSomething(): 0.211ms
`,lang:"javascript"}),P,I,w,n("p",null,[s("\u4F7F\u7528\u8F6C\u4E49\u5E8F\u5217\u5728\u63A7\u5236\u53F0\u4E2D\u4E3A\u6587\u672C\u7684\u8F93\u51FA\u7740\u8272\u3002 "),e(l,{to:"https://gist.github.com/iamnewton/8754917"},{default:c(()=>[s("\u8F6C\u4E49\u5E8F\u5217\u662F\u4E00\u7EC4\u6807\u8BC6\u989C\u8272\u7684\u5B57\u7B26")]),_:1})]),e(o,{code:`console.log('\\x1b[33m%s\\x1b[0m', '\u4F60\u597D')  //  \u9EC4\u8272
console.log('\\x1b[34m%s\\x1b[0m', '\u4F60\u597D')  //  \u84DD\u8272
`,lang:"javascript"}),B,e(o,{code:`// npm install chalk
const chalk = require('chalk')
console.log(chalk.yellow('\u4F60\u597D'))
`,lang:"javascript"}),C,e(o,{code:`// npm install progress
const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)
`,lang:"javascript"}),L,R,e(o,{code:`const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(\`\u4F60\u53EB\u4EC0\u4E48\u540D\u5B57?\`, name => {
  console.log(\`\u4F60\u597D \${name}!\`)
  readline.close()
})
// question() \u65B9\u6CD5\u4F1A\u663E\u793A\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF08\u5373\u95EE\u9898\uFF09\uFF0C\u5E76\u7B49\u5F85\u7528\u6237\u7684\u8F93\u5165\u3002 \u5F53\u6309\u4E0B\u56DE\u8F66\u952E\u65F6\uFF0C\u5219\u5B83\u4F1A\u8C03\u7528\u56DE\u8C03\u51FD\u6570\u3002
`,lang:"javascript"}),D,e(o,{code:`// npm install inquirer
const inquirer = require('inquirer')

let questions = [
  {
    type: 'input',
    name: 'name',
    message: "\u4F60\u53EB\u4EC0\u4E48\u540D\u5B57?"
  }
]

inquirer.prompt(questions).then(answers => {
  console.log(\`\u4F60\u597D \${answers['name']}!\`)
})
`,lang:"javascript"})]),_:1})}}};export{z as default};
