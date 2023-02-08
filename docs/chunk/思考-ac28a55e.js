import{r as t,o as r,c as i,f as s,g as e,a9 as o}from"./vendor-585b19a3.js";const d=o("h2",{id:"1-\u5947\u602A\u7684\u58F0\u660E\u63D0\u524D",class:"doc-heading"},"\u5947\u602A\u7684\u58F0\u660E\u63D0\u524D",-1),l=o("h2",{id:"2-i-\u4E0D\u51B2\u7A81",class:"doc-heading"},"i \u4E0D\u51B2\u7A81",-1),f={__name:"\u601D\u8003",setup(u){const c=[{id:"doc-title",title:"\u601D\u8003"},{id:"1-\u5947\u602A\u7684\u58F0\u660E\u63D0\u524D",title:"1. \u5947\u602A\u7684\u58F0\u660E\u63D0\u524D"},{id:"2-i-\u4E0D\u51B2\u7A81",title:"2. i \u4E0D\u51B2\u7A81"}];return(_,m)=>{const n=t("doc-code"),a=t("doc-page");return r(),i(a,{desc:"",toc:c},{default:s(()=>[d,e(n,{code:`function f() {
  var a = 1;

  a = 2;
  var b = g();
  a = 3;

  return b;

  function g() {
    return a;
  }
}
f(); // returns 2
`,lang:"javascript"}),l,e(n,{code:`function sumMatrix(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (let i = 0; i < currentRow.length; i++) { // let \u7684\u6682\u65F6\u6027\u6B7B\u533A
        sum += currentRow[i];
    }
  }
  return sum;
}

const matrix = [[1,2,3], [4,5]];
console.log(sumMatrix(matrix)); // 15
`,lang:"javascript"})]),_:1})}}};export{f as default};
