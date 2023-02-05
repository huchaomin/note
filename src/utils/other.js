/* eslint-disable no-param-reassign */
function getFileNameFromUrl(url, withExtension = false) {
  const name = url.split('/').pop();
  if (withExtension) {
    return name;
  }
  const arr = name.split('.');
  arr.pop();
  return arr.join('.');
}

function fadeOut(el) {
  return new Promise((resolve) => {
    el.style.opacity = 1;

    (function fade() {
      // eslint-disable-next-line no-cond-assign
      if ((el.style.opacity -= 0.05) < 0) {
        el.style.display = 'none';
        resolve();
      } else {
        requestAnimationFrame(fade);
      }
    }());
  });
}

function fadeIn(el, display) {
  return new Promise((resolve) => {
    el.style.opacity = 0;
    el.style.display = display || 'block';

    (function fade() {
      let val = parseFloat(el.style.opacity);
      // eslint-disable-next-line no-cond-assign
      if (!((val += 0.05) > 1)) {
        el.style.opacity = val;
        requestAnimationFrame(fade);
      } else {
        resolve();
      }
    }());
  });
}

export {
  fadeOut,
  fadeIn,
  getFileNameFromUrl,
};
