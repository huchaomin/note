/* eslint-disable no-param-reassign */
export default function injectToc(store) {
  Object.assign(store.state, {
    toc: [],
    activeToc: null,
  });

  function setActiveToc() {
    let last;
    const { toc } = store.state;
    for (let i = 0; i < toc.length; i++) {
      const section = toc[i];
      const item = document.getElementById(section.id);
      const { top } = item.getBoundingClientRect();
      const { verticalContainerSize, verticalPercentage } = store.state.scrollArea.getScroll();
      if (top >= 0 && top <= verticalContainerSize * 0.66) {
        last = section.id;
        break;
      }
      if (i > 0) {
        const lastSection = toc[i - 1];
        const lastItem = document.getElementById(lastSection.id);
        const { top: lastTop } = lastItem.getBoundingClientRect();
        if (top >= 0 && top <= verticalContainerSize && lastTop <= -50) {
          last = section.id;
          break;
        }
      }
      if (verticalPercentage === 1) {
        last = toc[toc.length - 1].id;
        break;
      }
    }
    if (last !== void 0) {
      store.state.activeToc = last;
      const tocEl = document.getElementById(`toc--${last}`);
      if (tocEl) {
        tocEl.scrollIntoView({
          block: 'start',
          inline: 'nearest',
          behavior: 'smooth',
        });
      }
    }
  }

  Object.assign(store, {
    setActiveToc,
  });
}
