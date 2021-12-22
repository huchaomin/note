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
    "revision": "0c8b4dfb23dee0a1512e0219528ed92a"
  },
  {
    "url": "aaa/a.html",
    "revision": "f26735fe5f61c6680d6a9ac7be1cb2b0"
  },
  {
    "url": "aaa/bbb/b.html",
    "revision": "5ded9200064cab48d6721d990f5d8592"
  },
  {
    "url": "aaa/bbb/c.html",
    "revision": "7f4236e67946fe54944ce6ee81667dcb"
  },
  {
    "url": "aaa/bbb/index.html",
    "revision": "eb54974fdcbffa2177c679962d510ea4"
  },
  {
    "url": "assets/css/0.styles.9efef958.css",
    "revision": "981c17125ea7b9cdb955aff8892b107b"
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
    "url": "assets/js/10.f830e3a5.js",
    "revision": "ef4035641e3563fa66445d03997678ab"
  },
  {
    "url": "assets/js/11.0b1f2ebd.js",
    "revision": "010b610905e58c426fad77ce51092c2f"
  },
  {
    "url": "assets/js/12.2a38e784.js",
    "revision": "c462772aa8938c463619ab7cdc1b25ce"
  },
  {
    "url": "assets/js/13.bd52ea06.js",
    "revision": "ac66059b120896ea952851d72c8cdeb7"
  },
  {
    "url": "assets/js/14.f9c76c77.js",
    "revision": "b0a6729ee5cc164e086638273e879fb4"
  },
  {
    "url": "assets/js/15.bf89a3e7.js",
    "revision": "60984d254e673d33e640efec5b125461"
  },
  {
    "url": "assets/js/16.8d25284e.js",
    "revision": "d5f473dfcf10e1ec8ba672946afcc8fd"
  },
  {
    "url": "assets/js/2.043782a1.js",
    "revision": "4a77509a4d7d154f90a75ba0f2f29515"
  },
  {
    "url": "assets/js/3.2a91af88.js",
    "revision": "778d3f309fe5b96a424e92edf21514b3"
  },
  {
    "url": "assets/js/4.dbab2be2.js",
    "revision": "b6847a09f8b4a016f00d4de77586a8fd"
  },
  {
    "url": "assets/js/5.7a3954f7.js",
    "revision": "c3d8cba5ae4a40ab357aa1e424b3b067"
  },
  {
    "url": "assets/js/6.b0c82614.js",
    "revision": "9683cf565492d70a97a4d462d20c214b"
  },
  {
    "url": "assets/js/7.8544f498.js",
    "revision": "32a18726ea4deaa4402672ad35b944ad"
  },
  {
    "url": "assets/js/8.15dc65cc.js",
    "revision": "ffebea6cfff32bd3ee5352a43acca1d2"
  },
  {
    "url": "assets/js/9.5ffcd7f9.js",
    "revision": "8210bdaaead5c99293f560ddfa5471dd"
  },
  {
    "url": "assets/js/app.2d4790d4.js",
    "revision": "9c8d31c9faeb890ee456d1eeeebc9f32"
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
    "revision": "84b6e5adf4dd9ac24a8b952a5a4d5123"
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
    "url": "icons/icon-128x128.png",
    "revision": "8132861d65a789e19a396809842391db"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "9ddb0fd372419aa44bfa6308311893f5"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "3caa04b85fa0b4bdf743adc1d04126d2"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "7e2f98ff0623f685166035d32a0f17f1"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "b02a5e003315d71c9c7b5b453729dafe"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "6c4b1e1d40929a39a6f133de09b2d555"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "f2cd44b5a48439028e60fb549d6ab88b"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "38515bb635e09c1a3812f0c6d008ae50"
  },
  {
    "url": "index.html",
    "revision": "151b50203e2a142c07da063b0e8c0ec2"
  },
  {
    "url": "tools/vuepress.html",
    "revision": "ae63674d8db59b93016e81e16f2ef4dd"
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
