export default () => {
  if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
    var _hmt = _hmt || [];
    (function () {
      var hm = document.createElement('script')
      hm.src = 'https://hm.baidu.com/hm.js?ed1ab63bfd0067ce75ba91ad9b7b4d37'
      var s = document.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(hm, s)
    })()
    // 单页面应用配置
    _hmt.push(['_requirePlugin', 'UrlChangeTracker', {
      shouldTrackUrlChange: function (newPath, oldPath) {
        return newPath && oldPath;
      }}
    ]);
  }
}

