/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d26446761a9e04f3ecb91e46b3010294"
  },
  {
    "url": "aaa/a.html",
    "revision": "e63f777903b9976fcaa86fb8c61582a7"
  },
  {
    "url": "aaa/bbb/b.html",
    "revision": "6ee30458ea6ec25cf9ff1121f7ea5ba9"
  },
  {
    "url": "aaa/bbb/c.html",
    "revision": "4d205e7505d61119bbefd4253d777802"
  },
  {
    "url": "aaa/bbb/index.html",
    "revision": "72780907a923d2e3c29e6ad49a2a4b18"
  },
  {
    "url": "assets/css/0.styles.698a85d6.css",
    "revision": "af9d3aed8478f6039006d8cb8d6b2ed6"
  },
  {
    "url": "assets/fonts/materialdesignicons-webfont.9cacdc87.eot",
    "revision": "9cacdc876e2049988fcab540c21738d5"
  },
  {
    "url": "assets/fonts/materialdesignicons-webfont.9d243c16.woff2",
    "revision": "9d243c168a4f1c2cb3cec74884344de7"
  },
  {
    "url": "assets/fonts/materialdesignicons-webfont.a0711490.woff",
    "revision": "a0711490bcd581b647329230b3e915cf"
  },
  {
    "url": "assets/fonts/materialdesignicons-webfont.b62641af.ttf",
    "revision": "b62641afc9ab487008e996a5c5865e56"
  },
  {
    "url": "assets/img/404.d43a9191.svg",
    "revision": "d43a9191135a580b85ce304e7efdde4a"
  },
  {
    "url": "assets/img/me.fb408776.png",
    "revision": "fb408776b4995b76cf43892e12714d2d"
  },
  {
    "url": "assets/img/receivingQrCode.753ec20c.jpg",
    "revision": "753ec20cd6e75921958367e8f59483c6"
  },
  {
    "url": "assets/js/10.969d54ba.js",
    "revision": "f25af19900d0137d21d9abd281710317"
  },
  {
    "url": "assets/js/11.94b97c61.js",
    "revision": "8f4d461be089a2fcfc8aba137e27e9f1"
  },
  {
    "url": "assets/js/12.a156b50c.js",
    "revision": "6bf79e9a69a10efbd8eb63830b148223"
  },
  {
    "url": "assets/js/13.d9fbfed1.js",
    "revision": "7c9dedb8792f1e37e39276545bbf34f2"
  },
  {
    "url": "assets/js/14.b2fc67d1.js",
    "revision": "6089bdab50a40fc09ee350542e37848f"
  },
  {
    "url": "assets/js/15.8e5236c7.js",
    "revision": "3ecbaae72dba9429bd143b9dc9c627b0"
  },
  {
    "url": "assets/js/16.e0fc89b8.js",
    "revision": "9393a55b918f95eac508536427117f44"
  },
  {
    "url": "assets/js/17.9302c6af.js",
    "revision": "5702c530ee06c4d1d0dd900f5b8d0029"
  },
  {
    "url": "assets/js/18.bc4af599.js",
    "revision": "db3721aa03560272bd5060adfc495ac8"
  },
  {
    "url": "assets/js/19.017dcbf9.js",
    "revision": "f83bf7c863d49e7b5cc7af19c8c5fd4d"
  },
  {
    "url": "assets/js/2.bab218c1.js",
    "revision": "41617fc324aa03cf06ab703ff5af1894"
  },
  {
    "url": "assets/js/20.c5f24147.js",
    "revision": "2a994eaf76fedfc7308b9f8d24cfbcb9"
  },
  {
    "url": "assets/js/21.13ee53b8.js",
    "revision": "be7afda1d35d3ed215d4d632ab59de27"
  },
  {
    "url": "assets/js/3.557b2e11.js",
    "revision": "ff3282379e5a79aec69cb6aacaec822d"
  },
  {
    "url": "assets/js/4.6199fa53.js",
    "revision": "639383b860bd20230cd744db227c79a4"
  },
  {
    "url": "assets/js/5.4fa7070f.js",
    "revision": "8fc60e17282e5e80a0dd37a3e9da22f7"
  },
  {
    "url": "assets/js/6.d97bed69.js",
    "revision": "c5cffda10dee1b0a0e2f455d2edb67e2"
  },
  {
    "url": "assets/js/7.5ff37d2b.js",
    "revision": "d9dc7062929ab5abd5e5172bf0d7a6c5"
  },
  {
    "url": "assets/js/8.fad4139d.js",
    "revision": "5ff6537af4b4d5168a5112129c2e206f"
  },
  {
    "url": "assets/js/9.d6e2829e.js",
    "revision": "f0bb285322a5d86b73102cf0be3a8581"
  },
  {
    "url": "assets/js/app.882d1f61.js",
    "revision": "947a2815fb79619078364de6a3a9f260"
  },
  {
    "url": "bg/3Dparticles/index.html",
    "revision": "a2f67b6f68b32ec014f4bd312242a19a"
  },
  {
    "url": "bg/3Dparticles/three.min.js",
    "revision": "18eb03c97237a55687e8d79faee7e225"
  },
  {
    "url": "bg/chemicalMolecule/index.html",
    "revision": "87e31ef1c33097d083d652d152642bcb"
  },
  {
    "url": "bg/chemicalMolecule/js/jquery.min.js",
    "revision": "e39d7f174407886a84c437f14182e57a"
  },
  {
    "url": "bg/particleVortex/index.html",
    "revision": "f4ae0bc4035fc6bcae693d1d7356029c"
  },
  {
    "url": "bg/stars/index.html",
    "revision": "ee8615d88038d7a92f030b7110cb7907"
  },
  {
    "url": "bg/stars/starBg.js",
    "revision": "b0589674afb7e03cf58c5eae8f93da3c"
  },
  {
    "url": "bg/theMatrix/index.html",
    "revision": "ab558c4c04309275b2629cda7eae68a2"
  },
  {
    "url": "ddd/d.html",
    "revision": "445a0f0bfcd7c28f74134395c1cb36ac"
  },
  {
    "url": "fonts/JetBrainsMono-Medium.ttf",
    "revision": "2ab3c46a017cadf52f504054eee882ad"
  },
  {
    "url": "fonts/JetBrainsMono-Regular.ttf",
    "revision": "a7151c5349c1aa20beefb3c5430c3a79"
  },
  {
    "url": "icons/icon-114x114.png",
    "revision": "afe27beeab6adb0469fd013e7853ab2a"
  },
  {
    "url": "icons/icon-120x120.png",
    "revision": "fd6ee40f78088c58569dcb8caf16b5b1"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "d7322d0948f548d84360ec7417276a94"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "09f9d469262b8a2fdf3640af874a96da"
  },
  {
    "url": "icons/icon-16x16.png",
    "revision": "f308c5328983feff3c2b998076d5e438"
  },
  {
    "url": "icons/icon-180x180.png",
    "revision": "a39fe98a69ca949ef1494389f3c17ab9"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "d8cd7d2d4a4b63f37bae1589b0c6f78a"
  },
  {
    "url": "icons/icon-32x32.png",
    "revision": "ce25b1eb65fcb2f28f77e406af04ea3e"
  },
  {
    "url": "icons/icon-57x57.png",
    "revision": "54d910b3976ec4392975ffe555b4b968"
  },
  {
    "url": "icons/icon-60x60.png",
    "revision": "c9fb09871fa5ccebe7c7a49c88ef8f5f"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "49b8303355f7d35a26d819bb6a034b22"
  },
  {
    "url": "icons/icon-76x76.png",
    "revision": "b45e73056a0723474597c1cc72500cfd"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "e7453f55b562e9d92586307105bc131d"
  },
  {
    "url": "index.html",
    "revision": "9499fef2fff1d2b687efb86645124aac"
  },
  {
    "url": "tools/demo.html",
    "revision": "1d70c4706b3e5d8a133d1fda67f43e03"
  },
  {
    "url": "tools/tabs.html",
    "revision": "0c14d3ebd657ac95d568dee38a73fda2"
  },
  {
    "url": "tools/vuepress.html",
    "revision": "f6af5157de40e650202d8ece29cd51ec"
  },
  {
    "url": "tools/代码高亮.html",
    "revision": "abd49dd6649d2de60122da7508f9bc06"
  },
  {
    "url": "tools/使用外部组件.html",
    "revision": "724052c4aa7dbcabd1ef913393bf9d69"
  },
  {
    "url": "tools/导入代码片段.html",
    "revision": "422b172dbeea1fa6f645b70fc2279e3d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
