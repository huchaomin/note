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
    "revision": "8605502b654bbc1b5c35df2db2cf3bd6"
  },
  {
    "url": "assets/css/1.styles.a0a5e887.css",
    "revision": "2e76a29c39f9b7a3c03dc5de0fd722a6"
  },
  {
    "url": "assets/css/2.styles.f4f258b2.css",
    "revision": "e16549df4ad0bb59dcba75b640ed8db9"
  },
  {
    "url": "assets/css/3.styles.7f3f3dd1.css",
    "revision": "41856c4745dee9bec4a5fdedff62c832"
  },
  {
    "url": "assets/css/4.styles.69dcd5b4.css",
    "revision": "41856c4745dee9bec4a5fdedff62c832"
  },
  {
    "url": "assets/css/5.styles.b2b30403.css",
    "revision": "4dfd954af9da41878ca5b77c1ec7d6f2"
  },
  {
    "url": "assets/css/styles.c05fa75e.css",
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
    "url": "assets/js/10.959173b4.js",
    "revision": "94650f231295d6ac4c416e3cc6b550bf"
  },
  {
    "url": "assets/js/11.fbb9c592.js",
    "revision": "4a8ab5024e1a0c07407f45165dfcffbf"
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
    "url": "assets/js/14.202e55c6.js",
    "revision": "790af5fadf3e874db1694f088d3ed11c"
  },
  {
    "url": "assets/js/15.20f86392.js",
    "revision": "5c4eb63db201f6b64383715efd0d93ec"
  },
  {
    "url": "assets/js/16.f77cb9c2.js",
    "revision": "5f7d7dede4924213692f11746898d278"
  },
  {
    "url": "assets/js/17.d9844f23.js",
    "revision": "29a4748323ea8c2ae5b7ea77c158a81d"
  },
  {
    "url": "assets/js/18.978796b5.js",
    "revision": "9efd7df01e5359a3ce166f87b24c9064"
  },
  {
    "url": "assets/js/19.0105c80c.js",
    "revision": "111f932f39607d6de5cef8a376b872e2"
  },
  {
    "url": "assets/js/2.f4f258b2.js",
    "revision": "2a8bc0e48c59b50572b674ef3f361205"
  },
  {
    "url": "assets/js/20.feaa0e9f.js",
    "revision": "8d02c17ecd3dbb79599149aa24597945"
  },
  {
    "url": "assets/js/21.6ace52b5.js",
    "revision": "375d2a9175cefbba7bedf9bbac4af096"
  },
  {
    "url": "assets/js/22.93977d3b.js",
    "revision": "e6f7e60cd086cb409c974b8af67f2790"
  },
  {
    "url": "assets/js/23.4cbc9bdc.js",
    "revision": "b7715e2f793e0d73459140ebe762681e"
  },
  {
    "url": "assets/js/3.7f3f3dd1.js",
    "revision": "6762d1e15d369bf8fd2c5e3ac62b259c"
  },
  {
    "url": "assets/js/4.69dcd5b4.js",
    "revision": "cbadaa650e639139621518a70fc45b48"
  },
  {
    "url": "assets/js/5.b2b30403.js",
    "revision": "097aadd786400fab3d33e2253aeb38c9"
  },
  {
    "url": "assets/js/6.6a6c3de3.js",
    "revision": "74f9d48fcf8ab6ce2826fd6beee4af20"
  },
  {
    "url": "assets/js/7.344a9647.js",
    "revision": "c053de9614a55d6703710706831885dd"
  },
  {
    "url": "assets/js/8.3bab40d7.js",
    "revision": "41965b175d71cbf5b9519ee7b32950d6"
  },
  {
    "url": "assets/js/9.1440c6e6.js",
    "revision": "4dd12c9adc3dc3b18c5785a5f7d0527a"
  },
  {
    "url": "assets/js/app.c05fa75e.js",
    "revision": "d3531336efb6cdf5ec69bdfe37174f2e"
  },
  {
    "url": "assets/js/chunk-vendors.a0a5e887.js",
    "revision": "4f7bc30894e99e3393c3cd801ba0fb65"
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
    "revision": "9cd19655956ced0af6c9e2dbeff5da70"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "ab6e9721fe17b7bea74be376461f2aea"
  },
  {
    "url": "tools/browserslist.html",
    "revision": "4a422c57434e1b4437b5690a09bb1758"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "2aabfaf59f9578352da9a13a71fbd7aa"
  },
  {
    "url": "tools/env.html",
    "revision": "a9a37f127fb22503e38280863874e2e0"
  },
  {
    "url": "tools/eslintrc.js.html",
    "revision": "157d53c875273d6694dc3561792149cc"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "dfe8ebebcd1d2c759cd1beace63da52f"
  },
  {
    "url": "tools/vuepress.html",
    "revision": "e7ea59be64ff928d2da9f334d73fafc3"
  },
  {
    "url": "前端脚手架/vue-cli/01-基本配置.html",
    "revision": "db2c9428ea2b002644e99d2c440c525b"
  },
  {
    "url": "前端脚手架/vue-cli/02-loader.html",
    "revision": "a99f02c4602515d2176e0c16069cdf70"
  },
  {
    "url": "前端脚手架/vue-cli/03-plugin.html",
    "revision": "1505d20fa31de5e16251d6cce34cc77d"
  },
  {
    "url": "前端脚手架/vue-cli/others.html",
    "revision": "3ecfe47301488b67ff4c843413a88b44"
  },
  {
    "url": "前端脚手架/vue-cli/新增webpack配置.html",
    "revision": "9043b095057a003fe156c081a3c9ea30"
  },
  {
    "url": "前端脚手架/vue-cli/查看webpack配置.html",
    "revision": "70c273a034f765f00a77586c8c74422f"
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
