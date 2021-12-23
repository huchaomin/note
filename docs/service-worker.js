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
    "revision": "cb4258ef587a4127f31def2275da038f"
  },
  {
    "url": "aaa/a.html",
    "revision": "8ee598cc25decbdbfc03e16b2e814205"
  },
  {
    "url": "aaa/bbb/b.html",
    "revision": "afc307c2e48b66ee5f9ca8f04fe7b844"
  },
  {
    "url": "aaa/bbb/c.html",
    "revision": "991e97e7f5c889edae1b9d3e790b401a"
  },
  {
    "url": "aaa/bbb/index.html",
    "revision": "1256caf0039262d56798aa6b1df06927"
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
    "url": "assets/js/10.cffb1054.js",
    "revision": "3b8d64b16e3008ca91783da0c4290c3d"
  },
  {
    "url": "assets/js/11.0713e99e.js",
    "revision": "3859c84dc54f663b78c956e5ddbd3b47"
  },
  {
    "url": "assets/js/12.a156b50c.js",
    "revision": "6bf79e9a69a10efbd8eb63830b148223"
  },
  {
    "url": "assets/js/13.4ed5dc8d.js",
    "revision": "ce26cd34193b9c5ca2e34a77c699cb6e"
  },
  {
    "url": "assets/js/14.0b59586c.js",
    "revision": "1c41992853a5b8f40c089fb0c8f09f41"
  },
  {
    "url": "assets/js/15.167a67f9.js",
    "revision": "2f174d3da812fd547f83493348bd0e21"
  },
  {
    "url": "assets/js/16.955175b0.js",
    "revision": "21ba1a4ef2fce85a827e87eb6cef141a"
  },
  {
    "url": "assets/js/17.c246ea5d.js",
    "revision": "dcdbb10669c9ef4032e55e43ff18bc45"
  },
  {
    "url": "assets/js/18.aa5f83f7.js",
    "revision": "d221fdb80748cf7150fc58c9a93a5890"
  },
  {
    "url": "assets/js/2.fa3f8df5.js",
    "revision": "89310cf6b89ec7bae27c9e42c249d1ac"
  },
  {
    "url": "assets/js/3.5f08ba86.js",
    "revision": "3d5b540b94f1b1ce60ecd17b5ff8882a"
  },
  {
    "url": "assets/js/4.928eefc4.js",
    "revision": "4ff916f07be59aeb8a734a248297d866"
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
    "url": "assets/js/7.3fb06128.js",
    "revision": "62bd321f1387b258c575413408211d12"
  },
  {
    "url": "assets/js/8.2f3a7bce.js",
    "revision": "3629358603cd5ff2c0a89d0e54523d73"
  },
  {
    "url": "assets/js/9.d6e2829e.js",
    "revision": "f0bb285322a5d86b73102cf0be3a8581"
  },
  {
    "url": "assets/js/app.3f1315ff.js",
    "revision": "36f9310f050248f85dffed63186bcff4"
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
    "revision": "3a07e7fdc009eef0479e684e83a0952f"
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
    "revision": "715eeb42ce043ef8a98a75baf59f259f"
  },
  {
    "url": "tools/demo.html",
    "revision": "7b5997e6ae059561ba81533a16c3fc16"
  },
  {
    "url": "tools/tabs.html",
    "revision": "72578072e6ded95ede590023a781ee74"
  },
  {
    "url": "tools/vuepress.html",
    "revision": "41050374bee1a570d4fb093aba34077b"
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
