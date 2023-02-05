```javascript
/*
 * 保存item的data,过期时间，保存时间
 */
class ItemCache {
  construct (data, timeout) {
    this.data = data
    // 设定超时时间，设定为多少秒
    this.timeout = timeout
    // 创建对象时候的时间，大约设定为数据获得的时间
    this.cacheTime = (new Date()).getTime
  }
}

class ExpriesCache {
  //  是否过期
  static isOverTime (name) {
    const itemCache = ExpriesCache.cacheMap.get(name)
    // 没有数据 一定超时
    if (!itemCache) return true

    const currentTime = (new Date()).getTime()
    const overTime = (currentTime - itemCache.cacheTime) / 1000
    if (overTime > itemCache.timeout) {
      ExpriesCache.cacheMap.delete(name)
      return true
    }
    // 不超时
    return false
  }

  // 获取
  static get (name) {
    const isDataOverTiem = ExpriesCache.isOverTime(name)
    return isDataOverTiem ? null : ExpriesCache.cacheMap.get(name).data
  }

  // 设置,默认存储30分钟
  static set (name, data, timeout = 1800) {
    const itemCache = new ItemCache(data, timeout)
    ExpriesCache.cacheMap.set(name, itemCache)
  }
}

ExpriesCache.cacheMap = new Map()
```
