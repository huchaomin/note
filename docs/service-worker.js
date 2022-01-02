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
    "revision": "a5da20466de9586a89115c89966d76cf"
  },
  {
    "url": "assets/css/1.styles.e4f57189.css",
    "revision": "2e76a29c39f9b7a3c03dc5de0fd722a6"
  },
  {
    "url": "assets/css/2.styles.d723f98b.css",
    "revision": "e16549df4ad0bb59dcba75b640ed8db9"
  },
  {
    "url": "assets/css/3.styles.374c2d93.css",
    "revision": "41856c4745dee9bec4a5fdedff62c832"
  },
  {
    "url": "assets/css/4.styles.5c504533.css",
    "revision": "41856c4745dee9bec4a5fdedff62c832"
  },
  {
    "url": "assets/css/5.styles.0ea28808.css",
    "revision": "4dfd954af9da41878ca5b77c1ec7d6f2"
  },
  {
    "url": "assets/css/styles.d4a5af53.css",
    "revision": "090f3b834f331ef3204da3236b56c190"
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
    "url": "assets/js/10.b38cc5ec.js",
    "revision": "630586def0b8a07213eff02a9e7e58a6"
  },
  {
    "url": "assets/js/11.1c5b4f06.js",
    "revision": "356353a768410c050cb4966d91e92eba"
  },
  {
    "url": "assets/js/12.f76efe76.js",
    "revision": "6c9ce67cda9340d9e7793352ee84d94a"
  },
  {
    "url": "assets/js/13.7d613ea3.js",
    "revision": "d4089d3d5e0a92cb89be080cb1a8f243"
  },
  {
    "url": "assets/js/14.9107fce9.js",
    "revision": "270ed623e82244db010e76ac887e110a"
  },
  {
    "url": "assets/js/15.348f29ab.js",
    "revision": "4ed94b602ffb66ce6c5b6df4fb55d4f2"
  },
  {
    "url": "assets/js/16.7152dc02.js",
    "revision": "1e896125ee48e88c511fe8d2a670c200"
  },
  {
    "url": "assets/js/17.cca32280.js",
    "revision": "7ff29f644f66c220e32cd9f7ee80be40"
  },
  {
    "url": "assets/js/18.2bfe0680.js",
    "revision": "1269890b8cd6399d5b8d8dbaff5ec4b1"
  },
  {
    "url": "assets/js/19.41fb8874.js",
    "revision": "5964276a6c6617853ca6b0be980336c7"
  },
  {
    "url": "assets/js/2.d723f98b.js",
    "revision": "80e4fdd01c61c19563728afcbb9d9a29"
  },
  {
    "url": "assets/js/20.b8cd2916.js",
    "revision": "75e63482143eb57d6ebe0dad233e50bb"
  },
  {
    "url": "assets/js/21.a37a963b.js",
    "revision": "d0e3613371af6ca55287bb5fb43db475"
  },
  {
    "url": "assets/js/22.70a35382.js",
    "revision": "d21b7f2bb5c074882a84e456af81e278"
  },
  {
    "url": "assets/js/23.c7003420.js",
    "revision": "e59f7816672e9906af4a4824691ff1cb"
  },
  {
    "url": "assets/js/24.f5a1e1ec.js",
    "revision": "829878ba613f59867e2f73a19948b15e"
  },
  {
    "url": "assets/js/25.27824c84.js",
    "revision": "f2ba334b0ef5b1f8009afe1bb8671dcc"
  },
  {
    "url": "assets/js/26.f95569a2.js",
    "revision": "2c521cf0c927c0ff4dfaf4a726093c46"
  },
  {
    "url": "assets/js/3.374c2d93.js",
    "revision": "d11e106a1a011f64622831cf81dfb076"
  },
  {
    "url": "assets/js/4.5c504533.js",
    "revision": "a015d30306535db93d44a6c6ced79c5c"
  },
  {
    "url": "assets/js/5.0ea28808.js",
    "revision": "2d32410a469e20c4a1474704bb014fd4"
  },
  {
    "url": "assets/js/6.efff91a9.js",
    "revision": "df6e8df4f3f4b5e8e876070b5d552900"
  },
  {
    "url": "assets/js/7.f2e8eb1e.js",
    "revision": "2c6e56d91e808beae4e0e4d5297de37e"
  },
  {
    "url": "assets/js/8.036f87fd.js",
    "revision": "d14e0efab56c79347edbdbc3e44706b9"
  },
  {
    "url": "assets/js/9.72f46374.js",
    "revision": "aa797ffaab7fc070395a89d198d717c1"
  },
  {
    "url": "assets/js/app.d4a5af53.js",
    "revision": "6dc10bec362603c66908b417b048fa0d"
  },
  {
    "url": "assets/js/chunk-vendors.e4f57189.js",
    "revision": "e79098d17826a83b88359fca352063f2"
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
    "revision": "756ff75b537e590adc43288d5ff8f1b3"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "506eea56cf5be95e190b456a64ac2340"
  },
  {
    "url": "tools/browserslist.html",
    "revision": "6d13011191316a09f61b69df0edaf195"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "c4a754fa70e4c0001ba6a5201bee7fb2"
  },
  {
    "url": "tools/env.html",
    "revision": "beeacd373e232088b4d06287890cf0de"
  },
  {
    "url": "tools/eslintrc.js.html",
    "revision": "61e4e4a1cb53b6a75423a8100acb9e0f"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "8f0e716c908fa3839f3d0ddbcbfbb206"
  },
  {
    "url": "tools/vuepress.html",
    "revision": "328de78df299a11367a18f2040d1f5b2"
  },
  {
    "url": "前端脚手架/vue-cli/01-基本配置.html",
    "revision": "1f9b1f447cbbf7972c99f011873c120d"
  },
  {
    "url": "前端脚手架/vue-cli/02-loader.html",
    "revision": "2d2ec7d035c6b35a612ad724a0b17ea9"
  },
  {
    "url": "前端脚手架/vue-cli/03-plugin.html",
    "revision": "67ef8930a3bde8306e0636efcc57a27c"
  },
  {
    "url": "前端脚手架/vue-cli/loader之image-webpack-loader.html",
    "revision": "f029dbd9cdd298e80e17790d840cf0e6"
  },
  {
    "url": "前端脚手架/vue-cli/others.html",
    "revision": "d09fc4cfc4319167c59e9a727fd885d0"
  },
  {
    "url": "前端脚手架/vue-cli/新增webpack配置.html",
    "revision": "3cc5fae23d9a217b6262cecbd659dc26"
  },
  {
    "url": "前端脚手架/vue-cli/查看webpack配置.html",
    "revision": "112d611a7cac9252e79100f7778a6334"
  },
  {
    "url": "前端脚手架/vue-cli/配置sass.html",
    "revision": "1c27956b1c0726e1d818759b33ebe606"
  },
  {
    "url": "前端脚手架/vue-cli/配置svg.html",
    "revision": "1dfbaa1d7187b58d9aef3b65e803c5fb"
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
