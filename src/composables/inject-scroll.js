export default function injectScroll(store) {
  Object.assign(store.state, {
    scrollArea: null,
  });
  const { $route, $router } = store;

  function getEleByHash() {
    const hash = decodeURIComponent(window.location.hash || '');
    return hash.length > 1
      ? document.getElementById(hash.substring(1))
      : null;
  }

  function scrollToEle(ele = null) {
    const { scrollArea } = store.state;
    if (ele === null) {
      scrollArea.setScrollPosition('vertical', 0, 0);
    } else {
      let offset = 0;
      if (ele.id !== 'doc-title') {
        const { top } = ele.getBoundingClientRect();
        offset = Math.max(0, top + scrollArea.getScrollPosition().top - 76);
      }
      scrollArea.setScrollPosition('vertical', offset, 300);
    }
  }

  function scrollTo(id) {
    const hash = `#${id}`;
    if ($route.hash === hash) {
      scrollToEle(getEleByHash());
    } else {
      // 触发hash变化
      $router.replace({ hash });
    }
  }

  watch(() => $route.fullPath, (newVal, oldVal) => {
    const newArr = newVal.split('#');
    const oldArr = oldVal.split('#');
    if (newArr[0] === oldArr[0] && newArr[1] !== oldArr[1]) {
      const ele = getEleByHash();
      nextTick(() => {
        scrollToEle(ele);
      });
    }
  });

  Object.assign(store, {
    getEleByHash,
    scrollToEle,
    scrollTo,
  });
}
