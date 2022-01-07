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
    "revision": "245772cff530343ae4e28cd92bee3e52"
  },
  {
    "url": "assets/css/0.styles.5e3bb2c6.css",
    "revision": "e5c791808270f241560ba15ab169af73"
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
    "url": "assets/img/defer-async.dc5fe641.png",
    "revision": "dc5fe6413f79c28353b70ef97059ee01"
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
    "url": "assets/js/10.8380ccb6.js",
    "revision": "4ef71556b2db7e5281841518b2b5cfaa"
  },
  {
    "url": "assets/js/11.1cc0499f.js",
    "revision": "43cd46e7db2e34ed963c3ebbe0762b56"
  },
  {
    "url": "assets/js/12.d4769ce8.js",
    "revision": "806fd68f5e3b098ceff2030e43b0ba39"
  },
  {
    "url": "assets/js/13.d2a347e9.js",
    "revision": "ec7619e29e5228e07c4e082164f80814"
  },
  {
    "url": "assets/js/14.65930da4.js",
    "revision": "e2a5d19619f7376ca3b8fa5523914d88"
  },
  {
    "url": "assets/js/15.40799b27.js",
    "revision": "c656e2d42ba17899e4a5bd4f0c7b6b7d"
  },
  {
    "url": "assets/js/16.be5a2ec3.js",
    "revision": "ea165121d3fb6cfd16009b95bec96d45"
  },
  {
    "url": "assets/js/17.bd30b1ea.js",
    "revision": "c27ce6a9a1109cb9ff3369d83fc39081"
  },
  {
    "url": "assets/js/18.d5237660.js",
    "revision": "6ca1b2ba8b00082232efebdf47457ac3"
  },
  {
    "url": "assets/js/19.28afc1ef.js",
    "revision": "b3a4b1fac377962af26c37bdbc04046f"
  },
  {
    "url": "assets/js/2.48e0759d.js",
    "revision": "779b4620bcd592537d3de911939f973d"
  },
  {
    "url": "assets/js/20.7300caff.js",
    "revision": "6e83324fd3d8af1c808e40e9a8a6104e"
  },
  {
    "url": "assets/js/21.a00b25ef.js",
    "revision": "4d6c3101c6761b69491f0e9dda2592b5"
  },
  {
    "url": "assets/js/22.d71af2b0.js",
    "revision": "eafbc7a3fca3995bcac27c79a8f83ecc"
  },
  {
    "url": "assets/js/23.574b0961.js",
    "revision": "fc3ed3770997f473e31dbf4bc5fe7676"
  },
  {
    "url": "assets/js/24.b556bcce.js",
    "revision": "d0c80daf0c42efb62e371c2988b152ba"
  },
  {
    "url": "assets/js/25.0b2469c1.js",
    "revision": "6faea2bf2bc03f6827302a15170d3bbf"
  },
  {
    "url": "assets/js/26.8f912f6a.js",
    "revision": "0b4874a10165b830f3f0e7512093291b"
  },
  {
    "url": "assets/js/27.18ea6094.js",
    "revision": "b11928956e641615f1ad63b397bccbe7"
  },
  {
    "url": "assets/js/28.4603c21a.js",
    "revision": "09edead67d21e9448192282e821e1516"
  },
  {
    "url": "assets/js/29.28c78c46.js",
    "revision": "4d8f8fd1a3a7e9e29040576981e9aa91"
  },
  {
    "url": "assets/js/3.c59db067.js",
    "revision": "5072aa6f89e643a92fe1d3d850de4038"
  },
  {
    "url": "assets/js/30.5968d9d2.js",
    "revision": "e8db5ff5d2a5aa86c8c7b81643ce1c36"
  },
  {
    "url": "assets/js/31.c441dea7.js",
    "revision": "59efd8ec81fcbe352ef6d303956e4316"
  },
  {
    "url": "assets/js/32.550a5d97.js",
    "revision": "b16dc8094282986dfc181e56ae5a2e8f"
  },
  {
    "url": "assets/js/33.0721defc.js",
    "revision": "f02d0ecacc638500af9b3258e9be6620"
  },
  {
    "url": "assets/js/34.e2173df3.js",
    "revision": "17dff0b8696e764b2e7afa68aa16d057"
  },
  {
    "url": "assets/js/35.32db0d4c.js",
    "revision": "101a10d2e69359450b50e0ca813b00e6"
  },
  {
    "url": "assets/js/36.2642117b.js",
    "revision": "8260f4df58192321b84bca4751328bac"
  },
  {
    "url": "assets/js/37.a453a073.js",
    "revision": "8f53ee5f4e0294b04de41851220aa5d8"
  },
  {
    "url": "assets/js/38.c43e52ca.js",
    "revision": "03eebe07d4c5ba3bbe98f95f7fa5c646"
  },
  {
    "url": "assets/js/39.2697f098.js",
    "revision": "2088e2d2d487004039f212998df40427"
  },
  {
    "url": "assets/js/4.55f09dbc.js",
    "revision": "e70df703e95b994e042adbcc2382f969"
  },
  {
    "url": "assets/js/40.9358a6e2.js",
    "revision": "c7f9223606b7cac97e8abbe4c0bcc845"
  },
  {
    "url": "assets/js/41.42898be9.js",
    "revision": "f0ff2d6b8c2192acb051c68202b9bd16"
  },
  {
    "url": "assets/js/42.6b9ecab1.js",
    "revision": "6cbf0e152331f7ade41c710cd8797e62"
  },
  {
    "url": "assets/js/43.2522d791.js",
    "revision": "b95240fb823355b2ad6b49f2b6903fb7"
  },
  {
    "url": "assets/js/44.68567544.js",
    "revision": "cda86e517b23ee90dbcff30a266913c9"
  },
  {
    "url": "assets/js/45.b824cc50.js",
    "revision": "405b1dcbe02db3c8c2a046b8f2b1668f"
  },
  {
    "url": "assets/js/46.3edd54ad.js",
    "revision": "a8d487089cdf3ecc53ed5f8fca0d72c1"
  },
  {
    "url": "assets/js/47.0caf9efd.js",
    "revision": "c1a36e7c4ba29ad541969dc42b79889c"
  },
  {
    "url": "assets/js/48.6cbcee5b.js",
    "revision": "3f7d7088410f9fa279481dde7a6ab171"
  },
  {
    "url": "assets/js/49.de85d4b5.js",
    "revision": "cf94338f5096c3c7dc6287991c8ecad2"
  },
  {
    "url": "assets/js/5.5b871641.js",
    "revision": "047ae0c32db9c76d5cd1276aaf8b2483"
  },
  {
    "url": "assets/js/50.0dd3b5b1.js",
    "revision": "6eefdcd500e57baabe6d6f81405ca7f0"
  },
  {
    "url": "assets/js/51.1428eee1.js",
    "revision": "a463954fcfd152e18960552234351f6d"
  },
  {
    "url": "assets/js/52.f7fd2a99.js",
    "revision": "f4f24858238a2c1511cd5d0ddf23f429"
  },
  {
    "url": "assets/js/53.577a1e21.js",
    "revision": "c983c8ee80a96d76c2798bea90646607"
  },
  {
    "url": "assets/js/54.bab61655.js",
    "revision": "0930e6432bbfee34681f7370d1eb02d5"
  },
  {
    "url": "assets/js/6.132489f7.js",
    "revision": "a00a63aff361419a2543d2a96401b2ce"
  },
  {
    "url": "assets/js/7.1755bce5.js",
    "revision": "2098c9d3f2fb3482f8a6b7b3222c1e82"
  },
  {
    "url": "assets/js/8.9105fe18.js",
    "revision": "d6cff0c1c0ad74af598a5eb7515c80bc"
  },
  {
    "url": "assets/js/9.a4cc62e8.js",
    "revision": "362f03da6395760151792a55b7feba1e"
  },
  {
    "url": "assets/js/app.51d89ed4.js",
    "revision": "299503509f8363c9835801437bc5a6f3"
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
    "url": "css/others.html",
    "revision": "2a82fafe01230b0d0bf5c6e407bc1d65"
  },
  {
    "url": "css/reset.html",
    "revision": "cce46e4c844e2281547c348fb37ff049"
  },
  {
    "url": "css/scrollBar.html",
    "revision": "5cd9bc1ccc791255cae3eb55e73ebede"
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
    "revision": "b88dabee6796bc95646debe8e521a945"
  },
  {
    "url": "javascript/bom/Navigator.sendBeacon.html",
    "revision": "ad41b8bab6d7ce4fa436e55c22446078"
  },
  {
    "url": "javascript/bom/sessionStorage.html",
    "revision": "e3d5e1a31ec756dc62ab11ca2e0fa811"
  },
  {
    "url": "javascript/dom/api-drag.html",
    "revision": "5a9b3e5343b2db0d8d7a97be3b934e24"
  },
  {
    "url": "javascript/dom/defer与async.html",
    "revision": "19ec91d04f5ecf1a3435f111aff75e58"
  },
  {
    "url": "javascript/dom/preload与prefetch.html",
    "revision": "3e18f1914a32223255826f57ce591665"
  },
  {
    "url": "javascript/ESM与现代浏览器.html",
    "revision": "3b9aa1340f379dbffb732a42327493f1"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "d231f3b6f39d5b9389ea5e167125b579"
  },
  {
    "url": "tools/browserslist.html",
    "revision": "d264196a41d97db37e90876235ccf0a2"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "e1b4ce34f7fa6c65c3c14d08bb7317f0"
  },
  {
    "url": "tools/env.html",
    "revision": "32c4c1c27c9fc7e4dbc9764ba9a1e12d"
  },
  {
    "url": "tools/eslint.html",
    "revision": "9d401620aed5a49f1a4e4e65dedef2aa"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "878fba77c25f63ca817df63d1e0645a7"
  },
  {
    "url": "tools/vuepress.html",
    "revision": "c34f252f4fc0d185002fd75a83ecdad0"
  },
  {
    "url": "前端脚手架/umd模块打包方法.html",
    "revision": "2963add212d73723644ec3824d0e4984"
  },
  {
    "url": "前端脚手架/vue-cli/01-基本配置.html",
    "revision": "e6382efd8e9e4c7a7839ba93668b18fc"
  },
  {
    "url": "前端脚手架/vue-cli/02-loader.html",
    "revision": "3f52dd93135604ef60f203af05fc6273"
  },
  {
    "url": "前端脚手架/vue-cli/03-plugin.html",
    "revision": "063fe5b4274d5dbca451c70badfc7b1b"
  },
  {
    "url": "前端脚手架/vue-cli/loader之image-webpack-loader.html",
    "revision": "f67aa0b4e811fd79fb10e176669173e7"
  },
  {
    "url": "前端脚手架/vue-cli/others.html",
    "revision": "f6f244d4cbfc6b00c2f36a24b1067dd9"
  },
  {
    "url": "前端脚手架/vue-cli/webpack-chain.html",
    "revision": "50381d7cf0efeed74fb50640eaad1721"
  },
  {
    "url": "前端脚手架/vue-cli/新增webpack配置.html",
    "revision": "5960f1df164814c5da3f6a2ddb790939"
  },
  {
    "url": "前端脚手架/vue-cli/查看webpack配置.html",
    "revision": "32bd5e970e107488e9756aa827f3430b"
  },
  {
    "url": "前端脚手架/vue-cli/配置sass.html",
    "revision": "cd4a15da350e43d5aaccb47f5d0261ed"
  },
  {
    "url": "前端脚手架/vue-cli/配置svg.html",
    "revision": "9cfe0ec219f5fb8bece8366b51292f86"
  },
  {
    "url": "前端脚手架/webpack/01-entry.html",
    "revision": "d3f137d54b95404e2f0a51363557ad05"
  },
  {
    "url": "前端脚手架/webpack/02-output.html",
    "revision": "d206a74297a31dc75d6880b9351a9912"
  },
  {
    "url": "前端脚手架/webpack/03-plugin.html",
    "revision": "aa9cdab9f1a18f0cb5857e73aac5f34a"
  },
  {
    "url": "前端脚手架/webpack/04-module.html",
    "revision": "9ab5f2718c0945c10fa62c6ede6be687"
  },
  {
    "url": "前端脚手架/webpack/05-resolve.html",
    "revision": "6da86816ce131718f478c621ed3f3940"
  },
  {
    "url": "前端脚手架/webpack/06-optimization/others.html",
    "revision": "b369297f7fff8547078696da7b29dd1e"
  },
  {
    "url": "前端脚手架/webpack/06-optimization/splitChunks.html",
    "revision": "baf8ab0c870fe7538230e2b4d3d397a5"
  },
  {
    "url": "前端脚手架/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "3402856d4e4e82cee9757f5395664582"
  },
  {
    "url": "前端脚手架/webpack/others.html",
    "revision": "4ee33c4e56133cd8cc19832cac1d4871"
  },
  {
    "url": "前端脚手架/webpack/webpack之devtool .html",
    "revision": "d15d45a7320c830a5de29dc34628c254"
  },
  {
    "url": "前端脚手架/webpack/webpack之hash.html",
    "revision": "89af6e9762b561369735762daa65486e"
  },
  {
    "url": "前端脚手架/webpack/webpack之magic-comments.html",
    "revision": "48ce303cb623d1b83ab6971a5b02a127"
  },
  {
    "url": "前端脚手架/webpack/webpack之runtime与manifest.html",
    "revision": "c55be4f5f9af20829f11ab56be293994"
  },
  {
    "url": "前端脚手架/webpack/webpack之处理commonjs.html",
    "revision": "e320609761860f38eb52c06408446233"
  },
  {
    "url": "前端脚手架/webpack/webpack之处理esmodule.html",
    "revision": "99ba40d36639a72bc45919760f475c35"
  },
  {
    "url": "前端脚手架/webpack/webpack之模块路径解析规则.html",
    "revision": "7b627e85d87ee77d5609287e93d9b751"
  },
  {
    "url": "前端脚手架/webpack/模块方法之requireContext.html",
    "revision": "e261b3f42c156247a0bf3cf191ad471e"
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
