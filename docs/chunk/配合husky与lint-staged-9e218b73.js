import{r as t,o,c as a,f as c,g as n,aa as s}from"./vendor-90615676.js";const l=s("h2",{id:"1-\u5B89\u88C5husky\u548Clint-staged",class:"doc-heading"},"\u5B89\u88C5husky\u548Clint-staged",-1),h=s("h2",{id:"2--husky-pre-commit-\u6587\u4EF6\u4FEE\u6539",class:"doc-heading"},".husky\\pre-commit \u6587\u4EF6\u4FEE\u6539",-1),p=s("h2",{id:"3-\u4FEE\u6539package-json",class:"doc-heading"},"\u4FEE\u6539package.json",-1),g=s("h2",{id:"4-01\u548C04\u6700\u7EC8\u7684devdependencies-\u4EC5\u4F5C\u53C2\u8003-",class:"doc-heading"},"01\u548C04\u6700\u7EC8\u7684devDependencies(\u4EC5\u4F5C\u53C2\u8003)",-1),m={__name:"\u914D\u5408husky\u4E0Elint-staged",setup(u){const d=[{id:"doc-title",title:"eslint\u914D\u5408husky\u4E0Elint-staged"},{id:"1-\u5B89\u88C5husky\u548Clint-staged",title:"1. \u5B89\u88C5husky\u548Clint-staged"},{id:"2--husky-pre-commit-\u6587\u4EF6\u4FEE\u6539",title:"2. .husky\\pre-commit \u6587\u4EF6\u4FEE\u6539"},{id:"3-\u4FEE\u6539package-json",title:"3. \u4FEE\u6539package.json"},{id:"4-01\u548C04\u6700\u7EC8\u7684devdependencies-\u4EC5\u4F5C\u53C2\u8003-",title:"4. 01\u548C04\u6700\u7EC8\u7684devDependencies(\u4EC5\u4F5C\u53C2\u8003)"}];return(_,r)=>{const e=t("doc-code"),i=t("doc-page");return o(),a(i,{desc:"eslint\u914D\u5408husky\u4E0Elint-staged,\u4E3A\u4EE3\u7801\u6D01\u7656\u4FDD\u9A7E\u62A4\u822A",toc:d},{default:c(()=>[l,n(e,{code:`yarn add husky lint-staged -D
npx husky-init
`,lang:"sh"}),h,n(e,{code:`#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
`,lang:"sh"}),p,n(e,{code:`"lint-staged": {
  "*.{js,jsx,vue}": [
    "eslint"
  ]
},
`,lang:"json"}),g,n(e,{code:`"devDependencies": {
  "eslint": "^7.32.0",
  "eslint-config-standard": "^16.0.3",
  "eslint-plugin-import": "^2.25.4",
  "eslint-plugin-node": "^11.1.0",
  "eslint-plugin-promise": "^5.2.0",
  "eslint-plugin-vue": "^8.2.0",
  "husky": "^7.0.0",
  "lint-staged": "^12.1.6"
}
`,lang:"json"})]),_:1})}}};export{m as default};
