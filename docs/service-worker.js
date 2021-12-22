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
    "revision": "3715db48625c445487714d35d55fbd15"
  },
  {
    "url": "aaa/a.html",
    "revision": "8af0bef5f615e06ffe70ef550d9b3f62"
  },
  {
    "url": "aaa/bbb/b.html",
    "revision": "d7223f1471980e60afe59754bf27fc60"
  },
  {
    "url": "aaa/bbb/c.html",
    "revision": "55d81477e2986fab08c4a051d730ce4f"
  },
  {
    "url": "aaa/bbb/index.html",
    "revision": "80e1e91496531f717516373183403e76"
  },
  {
    "url": "assets/css/0.styles.471ae491.css",
    "revision": "deda4adc445c5b1a0b1eee4f165f238e"
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
    "url": "assets/js/10.d90d7a7c.js",
    "revision": "997d5fc8c01b07085d9cc5a1908a4954"
  },
  {
    "url": "assets/js/11.801743e5.js",
    "revision": "548bf4d025bfe17db88be86ee76955f7"
  },
  {
    "url": "assets/js/12.867679e0.js",
    "revision": "cb85ba69aa8a35904febf5cd19aebeb6"
  },
  {
    "url": "assets/js/13.f15cc091.js",
    "revision": "b65cbc80b54e3bddcf7d32cc202ceaa2"
  },
  {
    "url": "assets/js/14.7fc14d0c.js",
    "revision": "cb9147ebf72ea270083667fdadb0ae40"
  },
  {
    "url": "assets/js/15.4cb065be.js",
    "revision": "2f2a42e76b6322b1417c35f016e36e80"
  },
  {
    "url": "assets/js/16.7e6c1708.js",
    "revision": "9e1ef2e1e9fa44f800901d1bea369350"
  },
  {
    "url": "assets/js/2.d102f3fe.js",
    "revision": "fde8decd9c43f035493da37f2c4fd904"
  },
  {
    "url": "assets/js/3.3165407f.js",
    "revision": "08f9cc480aecf02e1b09f006b7dbf35d"
  },
  {
    "url": "assets/js/4.3fbaf8a6.js",
    "revision": "051ec5ef9c07eca14d2272f439cc9dcb"
  },
  {
    "url": "assets/js/5.daa9edbd.js",
    "revision": "8a74c2dbc6d7ba3b1561efcf14186569"
  },
  {
    "url": "assets/js/6.0169d239.js",
    "revision": "b81d03e04fdb6dcc54cb25c5b54fb51a"
  },
  {
    "url": "assets/js/7.8cadb47d.js",
    "revision": "aa0b888ecf04ee61c7917617b0e79bb1"
  },
  {
    "url": "assets/js/8.ecb3d2e1.js",
    "revision": "83d8e18699034410cee0c5d7867c7384"
  },
  {
    "url": "assets/js/9.5d0b9a09.js",
    "revision": "688b2df5218ed9aff58ae39459516121"
  },
  {
    "url": "assets/js/app.6157b056.js",
    "revision": "4d2842de72370ceacb1c86ee9f010dff"
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
    "revision": "f2193079cf6f20baaf119beee99a2dbc"
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
    "revision": "ceac0a5ce0baeb015fdd1e52ed1daa2c"
  },
  {
    "url": "tools/vuepress.html",
    "revision": "2b4cce1ede0eda63b8227d6a5eabf536"
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
