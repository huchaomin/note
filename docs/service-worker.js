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
    "revision": "5fb23c440219c6ca257aa94fc1377dd0"
  },
  {
    "url": "aaa/a.html",
    "revision": "1ba161401c71e5b210566d826136e23d"
  },
  {
    "url": "aaa/bbb/b.html",
    "revision": "43d617faf100a091dafeded08acb638d"
  },
  {
    "url": "aaa/bbb/c.html",
    "revision": "e9a0c3cc60a38dcffca5c24f70f8b7fe"
  },
  {
    "url": "aaa/bbb/index.html",
    "revision": "8f2f08c70a2c3d688d6aa61909343486"
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
    "url": "assets/js/11.4ec45a71.js",
    "revision": "894c7196fac1017356f7fcd3d5e8a5c9"
  },
  {
    "url": "assets/js/12.239f223c.js",
    "revision": "b51c0b2be09a53c916e95a06e5044235"
  },
  {
    "url": "assets/js/13.729c60ad.js",
    "revision": "4a219c7fcb4a4de0acbae278d9840cb6"
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
    "url": "assets/js/5.ddf08d56.js",
    "revision": "b65fa2629b3c7309edec6b3a303e2ef6"
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
    "url": "assets/js/app.bead4030.js",
    "revision": "710c6e07b850494f3a60f134c1954f26"
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
    "revision": "d5ac0902c0f0f97271f95e4ada93643f"
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
    "url": "icons/android-icon-192x192-seochecker-manifest-222.png",
    "revision": "d8cd7d2d4a4b63f37bae1589b0c6f78a"
  },
  {
    "url": "icons/apple-icon-114x114-seochecker-manifest-222.png",
    "revision": "afe27beeab6adb0469fd013e7853ab2a"
  },
  {
    "url": "icons/apple-icon-120x120-seochecker-manifest-222.png",
    "revision": "fd6ee40f78088c58569dcb8caf16b5b1"
  },
  {
    "url": "icons/apple-icon-144x144-seochecker-manifest-222.png",
    "revision": "d7322d0948f548d84360ec7417276a94"
  },
  {
    "url": "icons/apple-icon-152x152-seochecker-manifest-222.png",
    "revision": "09f9d469262b8a2fdf3640af874a96da"
  },
  {
    "url": "icons/apple-icon-180x180-seochecker-manifest-222.png",
    "revision": "a39fe98a69ca949ef1494389f3c17ab9"
  },
  {
    "url": "icons/apple-icon-57x57-seochecker-manifest-222.png",
    "revision": "54d910b3976ec4392975ffe555b4b968"
  },
  {
    "url": "icons/apple-icon-60x60-seochecker-manifest-222.png",
    "revision": "c9fb09871fa5ccebe7c7a49c88ef8f5f"
  },
  {
    "url": "icons/apple-icon-72x72-seochecker-manifest-222.png",
    "revision": "49b8303355f7d35a26d819bb6a034b22"
  },
  {
    "url": "icons/apple-icon-76x76-seochecker-manifest-222.png",
    "revision": "b45e73056a0723474597c1cc72500cfd"
  },
  {
    "url": "icons/favicon-16x16-seochecker-manifest-222.png",
    "revision": "f308c5328983feff3c2b998076d5e438"
  },
  {
    "url": "icons/favicon-32x32-seochecker-manifest-222.png",
    "revision": "ce25b1eb65fcb2f28f77e406af04ea3e"
  },
  {
    "url": "icons/favicon-96x96-seochecker-manifest-222.png",
    "revision": "e7453f55b562e9d92586307105bc131d"
  },
  {
    "url": "index.html",
    "revision": "2d7a67b8ced39402d828ccc38e8fe9de"
  },
  {
    "url": "tools/vuepress.html",
    "revision": "b7002aced0018186fb791666159b04d7"
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
