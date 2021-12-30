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
    "revision": "5e18bf97c8192a60b795a973d8066542"
  },
  {
    "url": "assets/css/1.styles.338b976b.css",
    "revision": "2e76a29c39f9b7a3c03dc5de0fd722a6"
  },
  {
    "url": "assets/css/2.styles.636e3310.css",
    "revision": "e16549df4ad0bb59dcba75b640ed8db9"
  },
  {
    "url": "assets/css/3.styles.9a57981e.css",
    "revision": "41856c4745dee9bec4a5fdedff62c832"
  },
  {
    "url": "assets/css/4.styles.5ab2a898.css",
    "revision": "41856c4745dee9bec4a5fdedff62c832"
  },
  {
    "url": "assets/css/5.styles.d7628f97.css",
    "revision": "4dfd954af9da41878ca5b77c1ec7d6f2"
  },
  {
    "url": "assets/css/styles.b84ba57e.css",
    "revision": "1b727c6db7c3c7a82a6f9d18e57b9d3a"
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
    "url": "assets/js/10.fc39bdbe.js",
    "revision": "d9a29e581706229ef32f571bba1316fc"
  },
  {
    "url": "assets/js/11.3a9c83cc.js",
    "revision": "f6408641eb5ca753efbdc72bbfa1dec8"
  },
  {
    "url": "assets/js/12.48a542e6.js",
    "revision": "9441b6b26fa12c7a4b9b64d12ca69a20"
  },
  {
    "url": "assets/js/13.b922c3de.js",
    "revision": "10013da8634dcd4af765903696de5038"
  },
  {
    "url": "assets/js/14.a09188f1.js",
    "revision": "540daa6d806fcc33eb735a638daaf3c0"
  },
  {
    "url": "assets/js/15.27b15e84.js",
    "revision": "46726cd2affcc6397c7b374af92b0150"
  },
  {
    "url": "assets/js/16.891c5658.js",
    "revision": "d2a373acbce06317f04685bcb6178eb5"
  },
  {
    "url": "assets/js/17.582a4fed.js",
    "revision": "3f0a2a085e3f7c1f8c617c9be727b0e1"
  },
  {
    "url": "assets/js/2.636e3310.js",
    "revision": "a52e9d4b658565216adec2cff02333af"
  },
  {
    "url": "assets/js/3.9a57981e.js",
    "revision": "b30212c9608e679b8a78cd32a5850175"
  },
  {
    "url": "assets/js/4.5ab2a898.js",
    "revision": "d941d73b8fbab3380c1b36fc8a5bdc6f"
  },
  {
    "url": "assets/js/5.d7628f97.js",
    "revision": "eba900870ad58ca9a26b4577cfd28140"
  },
  {
    "url": "assets/js/6.6a6c3de3.js",
    "revision": "74f9d48fcf8ab6ce2826fd6beee4af20"
  },
  {
    "url": "assets/js/7.c97b273c.js",
    "revision": "54d5558b415f40cfb30497269a4bac3a"
  },
  {
    "url": "assets/js/8.5e09ad55.js",
    "revision": "34bf0c080f5875c6c2ce96ce6fd772f4"
  },
  {
    "url": "assets/js/9.65100feb.js",
    "revision": "ddc852a45abbdaf850c5d36dbccf211f"
  },
  {
    "url": "assets/js/app.b84ba57e.js",
    "revision": "1b60eaabf8508b2def60e38320c71fd1"
  },
  {
    "url": "assets/js/chunk-vendors.338b976b.js",
    "revision": "888e6ba15ea2a1ef9ffd5d972399412f"
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
    "revision": "d8652de3ece4e34aa0364ca785d58dfa"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "938d40b8a760c18ac2abbe2152a59334"
  },
  {
    "url": "tools/browserslist.html",
    "revision": "e4986a826fcc283b9c10f953cdcc79bd"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "96e5c3df1b9c74fa753e86c4b0d7f908"
  },
  {
    "url": "tools/env.html",
    "revision": "1803c2e3f889420a4cfcd94b28781dcf"
  },
  {
    "url": "tools/eslintrc.js.html",
    "revision": "229a37e1735b10aececaf8ab4cc23d70"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "10f552f5f450c8d64dda670ac797516a"
  },
  {
    "url": "tools/vuepress.html",
    "revision": "09023ece5d88da1e41aeb7aca81d4cc0"
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
