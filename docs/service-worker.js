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
    "revision": "69f322525977363ab8054752cdbdbf48"
  },
  {
    "url": "aaa/a.html",
    "revision": "6e419452a6dfc3a46f831ed6f6c37588"
  },
  {
    "url": "aaa/bbb/b.html",
    "revision": "9288587a0de946ff451534f116178902"
  },
  {
    "url": "aaa/bbb/c.html",
    "revision": "962fd95615e2cee843b95eab13eee654"
  },
  {
    "url": "aaa/bbb/index.html",
    "revision": "60a85d0f9d8f484c13fb241ca8d813a9"
  },
  {
    "url": "assets/css/0.styles.86ec900b.css",
    "revision": "6d9feaa5a633084042842141e2844993"
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
    "url": "assets/js/11.0b1f2ebd.js",
    "revision": "010b610905e58c426fad77ce51092c2f"
  },
  {
    "url": "assets/js/12.3cb47a04.js",
    "revision": "16240a5b4d6d8c74f1c031f346b9c289"
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
    "url": "assets/js/15.efc81420.js",
    "revision": "a3272539910bb3661ada13c3edca1c3b"
  },
  {
    "url": "assets/js/16.917e18ac.js",
    "revision": "2d04b0fd852e93cc6ea3c5c4c7d72754"
  },
  {
    "url": "assets/js/2.9c3b466f.js",
    "revision": "66ef9008f3a79c5834b18eb9d7e4df11"
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
    "url": "assets/js/5.acde1e02.js",
    "revision": "13a3c1c6715ad21ac172f64d4a22b988"
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
    "url": "assets/js/8.7b102556.js",
    "revision": "1a17dccd280c0e1109b902871f635471"
  },
  {
    "url": "assets/js/9.d6e2829e.js",
    "revision": "f0bb285322a5d86b73102cf0be3a8581"
  },
  {
    "url": "assets/js/app.d074114e.js",
    "revision": "9e703db082ce83d7ad14719c61d291aa"
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
    "revision": "d2e1f1e278cf73f91b636426b7e86038"
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
    "revision": "91bcc2c7458099ae59c9f4fc290d7552"
  },
  {
    "url": "tools/vuepress.html",
    "revision": "60a0c209f210afef1727389f23d4699f"
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
