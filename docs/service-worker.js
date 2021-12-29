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
    "revision": "e8c119ed75e58edd8efaa7832b21b48b"
  },
  {
    "url": "aaa/a.html",
    "revision": "55e667c2c2c76a9960fc4849dd48f763"
  },
  {
    "url": "aaa/bbb/b.html",
    "revision": "cacbdbca2a565507e7471427a3ebb390"
  },
  {
    "url": "aaa/bbb/index.html",
    "revision": "9b93401319f6e5112b0cc7f31926e422"
  },
  {
    "url": "assets/css/0.styles.423702e6.css",
    "revision": "8808e5b8ca2ec9b65861dbc42d3c1d1e"
  },
  {
    "url": "assets/css/3.styles.9a7b8c46.css",
    "revision": "4dfd954af9da41878ca5b77c1ec7d6f2"
  },
  {
    "url": "assets/css/styles.048f4aa9.css",
    "revision": "c787fa7d8ca34bbc4a14c87cadc68893"
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
    "url": "assets/js/10.17af3204.js",
    "revision": "a1090c751c3faf7950e2db103d0e6ae4"
  },
  {
    "url": "assets/js/11.dda08d27.js",
    "revision": "e52a8cd2169687687108f1a68d0e88ae"
  },
  {
    "url": "assets/js/12.b64b4742.js",
    "revision": "4f0aedfb079ab778b35832c799159581"
  },
  {
    "url": "assets/js/13.081e1fce.js",
    "revision": "2012d0fcc6df6e4c080a6ed03842c9a0"
  },
  {
    "url": "assets/js/14.6ae681d7.js",
    "revision": "e1c0705e269424703d0b0e5d8ce934e7"
  },
  {
    "url": "assets/js/15.954a57d3.js",
    "revision": "99606154d1910e4c70a8975a31eaff5f"
  },
  {
    "url": "assets/js/16.f28a5e66.js",
    "revision": "440d2e867fe57ab8034ad13f6be1f104"
  },
  {
    "url": "assets/js/17.68b56432.js",
    "revision": "701c06b56baaab6e12d75c88eb881d5c"
  },
  {
    "url": "assets/js/18.ed64535e.js",
    "revision": "9c460e4e43583f04215b122f6956d79e"
  },
  {
    "url": "assets/js/3.9a7b8c46.js",
    "revision": "34b621e6caa0b17a4dfa30bdd1bc54bb"
  },
  {
    "url": "assets/js/4.f43cb861.js",
    "revision": "990ae33a8c27285d3476ababd8a71203"
  },
  {
    "url": "assets/js/5.aa95773c.js",
    "revision": "912792af8bc4830daf0b94e60298736a"
  },
  {
    "url": "assets/js/6.d5d64476.js",
    "revision": "e158e351600c1493e1aea13763497b1a"
  },
  {
    "url": "assets/js/7.6d863c7b.js",
    "revision": "3041b61d3f4cb744212020372d5d750a"
  },
  {
    "url": "assets/js/8.812d0e9a.js",
    "revision": "e4fcff40e798c01bc5e9c517674a5205"
  },
  {
    "url": "assets/js/9.efb774de.js",
    "revision": "9d1a5d6bb749c12bd140b72cfe6aad09"
  },
  {
    "url": "assets/js/app.048f4aa9.js",
    "revision": "98ea5e848931cbc2b04940c045fa4740"
  },
  {
    "url": "assets/js/vendor.commons.423702e6.js",
    "revision": "7f6598ec9d5361f5feb4e8a1ca84bed8"
  },
  {
    "url": "assets/js/vendor.vue.7e843669.js",
    "revision": "45c5c4d6a622f68c63f514bae9d42ef3"
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
    "revision": "cb081f6ecf266a1a0d28adfe04d111f7"
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
    "revision": "b04a14f83aa2d50a1c86d700d9835f17"
  },
  {
    "url": "tools/demo.html",
    "revision": "4b7ae821328ddffae79f998dd9101d2c"
  },
  {
    "url": "tools/tabs.html",
    "revision": "218db3e5afa4ebd02586c3648b46a43e"
  },
  {
    "url": "tools/vuepress.html",
    "revision": "8a37a66067368552284fb5311f7ddc50"
  },
  {
    "url": "tools/代码高亮.html",
    "revision": "30f5df36c5203c52b7c3953bf4f858a6"
  },
  {
    "url": "tools/使用外部组件.html",
    "revision": "61d545c62bcc455eee568e5444e7357c"
  },
  {
    "url": "tools/导入代码片段.html",
    "revision": "daadb6436af12be387aeab5120ffe9b6"
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
