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
    "revision": "b47e3df670319a62ac02b4da4ccac258"
  },
  {
    "url": "aaa/a.html",
    "revision": "1db87dc9cbe1f14c170e3e49b3467965"
  },
  {
    "url": "aaa/bbb/b.html",
    "revision": "4ac7d89d2bb399d5c7a1cbd49637c9e7"
  },
  {
    "url": "aaa/bbb/c.html",
    "revision": "29e73445c559df876951240248d3117f"
  },
  {
    "url": "aaa/bbb/index.html",
    "revision": "4d3de28e279f50d284edb6341cf43d85"
  },
  {
    "url": "assets/css/0.styles.93031f56.css",
    "revision": "d36f064209a7a06dddb8bc506812a446"
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
    "url": "assets/js/10.53dfc710.js",
    "revision": "dfe6fc407d12cfd44a1de4ecef1b7c66"
  },
  {
    "url": "assets/js/11.92a4ea27.js",
    "revision": "83367218de9414ed0c69a794cd4e7b69"
  },
  {
    "url": "assets/js/12.e7d24f9c.js",
    "revision": "ca6f52ebf7d6cc435597432cf60e09fe"
  },
  {
    "url": "assets/js/13.1e5ec025.js",
    "revision": "c7b8ffa1224939b9abb51a638233d4bc"
  },
  {
    "url": "assets/js/14.38e5f44c.js",
    "revision": "ed519ad4a9f7db6eaeb5a1ae15f017a7"
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
    "url": "assets/js/2.4132c17f.js",
    "revision": "36439f08800e182bfe95091e224941ec"
  },
  {
    "url": "assets/js/3.6f5ca2a0.js",
    "revision": "a12b6adfa159e9d3d87a27bcf22c3ebd"
  },
  {
    "url": "assets/js/4.62a98863.js",
    "revision": "30581b271b7831c48e39f9a43e2fe7d2"
  },
  {
    "url": "assets/js/5.5dae17f0.js",
    "revision": "c07f74e72491e93332b8d06dc545785c"
  },
  {
    "url": "assets/js/6.d97bed69.js",
    "revision": "c5cffda10dee1b0a0e2f455d2edb67e2"
  },
  {
    "url": "assets/js/7.af1883c8.js",
    "revision": "2a2bba6d643d6d32217e225b73319bbb"
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
    "url": "assets/js/app.f41b5c24.js",
    "revision": "d41deafad1b5641ce4bf896389c52c65"
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
    "revision": "6d16378ecbe26f10bffe0ded12d8c8a7"
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
    "revision": "8452e10f5f9a3aaa4d01ec6dd30bd509"
  },
  {
    "url": "tools/vuepress.html",
    "revision": "035967efb3edccb904ffeb7f615d4a09"
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
