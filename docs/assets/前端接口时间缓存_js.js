import{r as e,o as c,c as i,f as s,g as o}from"./vendor.js";const u={__name:"\u524D\u7AEF\u63A5\u53E3\u65F6\u95F4\u7F13\u5B58_js",setup(m){const t=[];return(r,h)=>{const n=e("doc-code"),a=e("doc-page");return c(),i(a,{desc:"",toc:t},{default:s(()=>[o(n,{code:`/*
 * \u4FDD\u5B58item\u7684data,\u8FC7\u671F\u65F6\u95F4\uFF0C\u4FDD\u5B58\u65F6\u95F4
 */
class ItemCache {
  construct (data, timeout) {
    this.data = data
    // \u8BBE\u5B9A\u8D85\u65F6\u65F6\u95F4\uFF0C\u8BBE\u5B9A\u4E3A\u591A\u5C11\u79D2
    this.timeout = timeout
    // \u521B\u5EFA\u5BF9\u8C61\u65F6\u5019\u7684\u65F6\u95F4\uFF0C\u5927\u7EA6\u8BBE\u5B9A\u4E3A\u6570\u636E\u83B7\u5F97\u7684\u65F6\u95F4
    this.cacheTime = (new Date()).getTime
  }
}

class ExpriesCache {
  //  \u662F\u5426\u8FC7\u671F
  static isOverTime (name) {
    const itemCache = ExpriesCache.cacheMap.get(name)
    // \u6CA1\u6709\u6570\u636E \u4E00\u5B9A\u8D85\u65F6
    if (!itemCache) return true

    const currentTime = (new Date()).getTime()
    const overTime = (currentTime - itemCache.cacheTime) / 1000
    if (overTime > itemCache.timeout) {
      ExpriesCache.cacheMap.delete(name)
      return true
    }
    // \u4E0D\u8D85\u65F6
    return false
  }

  // \u83B7\u53D6
  static get (name) {
    const isDataOverTiem = ExpriesCache.isOverTime(name)
    return isDataOverTiem ? null : ExpriesCache.cacheMap.get(name).data
  }

  // \u8BBE\u7F6E,\u9ED8\u8BA4\u5B58\u50A830\u5206\u949F
  static set (name, data, timeout = 1800) {
    const itemCache = new ItemCache(data, timeout)
    ExpriesCache.cacheMap.set(name, itemCache)
  }
}

ExpriesCache.cacheMap = new Map()
`,lang:"javascript"})]),_:1})}}};export{u as default};
