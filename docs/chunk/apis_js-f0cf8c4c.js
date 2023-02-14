import{r as e,o as t,c as r,f as a,g as c}from"./vendor-774b84b8.js";const i={__name:"apis_js",setup(p){const n=[];return(l,d)=>{const o=e("doc-code"),s=e("doc-page");return t(),r(s,{desc:"honor-hus \u5C01\u88C5 axios \u4E4Bapi\u5217\u8868\uFF0C\u653E\u7F6E\u6240\u6709\u8BF7\u6C42\u5730\u5740\u4EE5\u53CA\u521D\u59CB\u914D\u7F6E",toc:n},{default:a(()=>[c(o,{code:`/* eslint-disable no-template-curly-in-string */
/*
 * @\u529F\u80FD\u63CF\u8FF0 \u63A5\u53E3\u914D\u7F6E\u5217\u8868
 * type \u63A5\u53E3\u8BF7\u6C42\u65B9\u5F0F \u9ED8\u8BA4get
 * cache \u662F\u5426\u7F13\u5B58\u63A5\u53E3 \u9ED8\u8BA4false \u53EA\u4F1A\u7F13\u5B58get\u8BF7\u6C42
 * loading \u662F\u5426\u663E\u793A\u52A0\u8F7D\u6A21\u6001\u6846 \u9ED8\u8BA4false
 * formUrlencoded \u662F\u5426\u91C7\u7528formUrlencoded\u5F62\u5F0F \u53EA\u9488\u5BF9post\u8BF7\u6C42\uFF0C \u9ED8\u8BA4false
 * _showErrMsg response.data.code !== 0 \u65F6\u662F\u5426\u5F39\u51FAdata.msg\uFF0C \u9ED8\u8BA4true
 */
export default{
  getProcessById: { // \u67E5\u8BE2\u5DE5\u4F5C\u6D41
    loading: true,
    cache: true,
    url: 'process/select-by-id',
  },
  saveProcess: { // \u4FDD\u5B58\u5DE5\u4F5C\u6D41
    type: 'post',
    loading: true,
    url: 'process/save',
  },
  releaseProcess: { // \u5DE5\u4F5C\u6D41\u4E0A\u7EBF\u4E0B\u7EBF\u64CD\u4F5C
    type: 'post',
    loading: true,
    formUrlencoded: true,
    _showErrMsg: false,
    url: 'process/release',
  },
  getResourceListPaging: { // \u811A\u672C\u6216\u8005jar\u5305\u9875\u9762\u67E5\u8BE2\u5206\u9875\u63A5\u53E3
    type: 'post',
    loading: true,
    url: 'resources/list-paging?pageNo=\${pageNo}&pageSize=\${pageSize}',
  },
  // ...
}
`,lang:"javascript"})]),_:1})}}};export{i as default};
