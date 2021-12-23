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
    "revision": "375c8e55f78f7cac1056c5dba7927f45"
  },
  {
    "url": "aaa/a.html",
    "revision": "17bfcab56a4fb00536539b21761a227c"
  },
  {
    "url": "aaa/bbb/b.html",
    "revision": "66df56e19273e2e61a517a81fa76c537"
  },
  {
    "url": "aaa/bbb/c.html",
    "revision": "894db7facdedc84171b3b35c281f9562"
  },
  {
    "url": "aaa/bbb/index.html",
    "revision": "e2376070121290d6e7c94376a9b44a4e"
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
    "url": "assets/js/10.53dfc710.js",
    "revision": "dfe6fc407d12cfd44a1de4ecef1b7c66"
  },
  {
    "url": "assets/js/11.92a4ea27.js",
    "revision": "83367218de9414ed0c69a794cd4e7b69"
  },
  {
    "url": "assets/js/12.2a38e784.js",
    "revision": "c462772aa8938c463619ab7cdc1b25ce"
  },
  {
    "url": "assets/js/13.729c60ad.js",
    "revision": "4a219c7fcb4a4de0acbae278d9840cb6"
  },
  {
    "url": "assets/js/14.b2fc67d1.js",
    "revision": "6089bdab50a40fc09ee350542e37848f"
  },
  {
    "url": "assets/js/15.167a67f9.js",
    "revision": "2f174d3da812fd547f83493348bd0e21"
  },
  {
    "url": "assets/js/16.0af6d956.js",
    "revision": "9d11167f46c5cead03ea211294c18d26"
  },
  {
    "url": "assets/js/17.9cf9b81d.js",
    "revision": "88b1eda6d9aabd43415ec4d7eac20b84"
  },
  {
    "url": "assets/js/18.366dcd92.js",
    "revision": "db23548a24a6aada976f65176fcea88e"
  },
  {
    "url": "assets/js/19.450c2c10.js",
    "revision": "df3b87843d34fec8f7f486a47aeef0ae"
  },
  {
    "url": "assets/js/2.10316eb5.js",
    "revision": "84405d600c37d09b8a5ff2e4152d7829"
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
    "url": "assets/js/7.6dccc8cc.js",
    "revision": "b955a15d1f46a6066a830e6c0b8b013c"
  },
  {
    "url": "assets/js/8.ea3dcdcd.js",
    "revision": "03b1d187e14ce70047fab92ebf5ed9bb"
  },
  {
    "url": "assets/js/9.d6e2829e.js",
    "revision": "f0bb285322a5d86b73102cf0be3a8581"
  },
  {
    "url": "assets/js/app.6501c214.js",
    "revision": "fd1f68c1232714c9d61d15c35c272190"
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
    "revision": "8e43d5b9f7763116597cfba76cd6afcd"
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
    "revision": "4fff7d002148247ae3a95c7e536f3236"
  },
  {
    "url": "tools/demo.html",
    "revision": "5daaf3d52277668876e1cc288e6139cd"
  },
  {
    "url": "tools/tabs.html",
    "revision": "927fe5dab2a4a684729779c6348b69b1"
  },
  {
    "url": "tools/vuepress.html",
    "revision": "c9f6417034345d774abc84c66312f76f"
  },
  {
    "url": "tools/使用外部组件.html",
    "revision": "92687f3b616f477de35f48ca3708f55e"
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
