/* eslint-disable no-underscore-dangle */
if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
  window._hmt = window._hmt || [];
  const hm = document.createElement('script');
  hm.src = 'https://hm.baidu.com/hm.js?ed1ab63bfd0067ce75ba91ad9b7b4d37';
  const s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
  // 单页面应用配置
  window._hmt.push(['_requirePlugin', 'UrlChangeTracker', {
    shouldTrackUrlChange(newPath, oldPath) {
      const np = newPath.split('?')[0]; // 去除query在比较
      const op = oldPath.split('?')[0];
      return np !== op;
    },
  }]);
}
