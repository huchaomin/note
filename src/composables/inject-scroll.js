// hash 模式下，$route.hash 始终为’‘，获取hash可以通过$route.path获取
export default function injectScroll(store) {
  Object.assign(store.state, {
    scrollArea: null,
  });
  const { $route } = store;

  function getCurrentSearchId() {
    return decodeURIComponent($route.query.id || '');
  }

  function getEleBySearch() {
    const id = getCurrentSearchId();
    return id
      ? document.getElementById(id)
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
    const currentId = getCurrentSearchId();
    if (currentId === id) {
      scrollToEle(getEleBySearch());
    } else {
      // 触发$route.fullPath变化
      const enId = encodeURIComponent(id);
      if (currentId) {
        window.location.hash = window.location.hash.replace(encodeURIComponent(currentId), enId);
      } else {
        window.location.hash += `?id=${enId}`;
      }
    }
  }

  watch(() => $route.fullPath, (newVal, oldVal) => {
    const newArr = newVal.split('?id=');
    const oldArr = oldVal.split('?id=');
    if (newArr[0] === oldArr[0] && newArr[1] !== oldArr[1]) {
      const ele = getEleBySearch();
      nextTick(() => {
        scrollToEle(ele);
      });
    }
  });

  Object.assign(store, {
    getEleBySearch,
    scrollToEle,
    scrollTo,
  });
}
