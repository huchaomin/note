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
    "revision": "f331714f3e302279abf6351db6237807"
  },
  {
    "url": "assets/css/0.styles.8e1f039e.css",
    "revision": "af32f6b5510171f5efef6343baeba456"
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
    "url": "assets/js/10.c86646a0.js",
    "revision": "e4b7b8d8942769a1e0f3d55896575f99"
  },
  {
    "url": "assets/js/11.89b0ffba.js",
    "revision": "a803589aed2456210d7f014ef3f64556"
  },
  {
    "url": "assets/js/12.fe9b8fe8.js",
    "revision": "fd68536ccd0550261d93fa1fa961a518"
  },
  {
    "url": "assets/js/13.2d9d1093.js",
    "revision": "661c0c73c03286b8790e5059cb2d1448"
  },
  {
    "url": "assets/js/14.1fe1b2d4.js",
    "revision": "2bf83e62094b5f83b17ac18cd1244f7b"
  },
  {
    "url": "assets/js/15.0bcdc9b1.js",
    "revision": "2e4124c5b421ef308986bf1dc02ed048"
  },
  {
    "url": "assets/js/16.ac86e510.js",
    "revision": "9a585f015cbe6038667e9eac49feeac3"
  },
  {
    "url": "assets/js/17.36587f69.js",
    "revision": "a28018efca1632e7a3802388aabede6b"
  },
  {
    "url": "assets/js/18.f20cc9f4.js",
    "revision": "f9abbc692ff59bb5d3d8b5a72d537b37"
  },
  {
    "url": "assets/js/19.ef2da6ae.js",
    "revision": "23455f8f7e09bd5e590dc7933aa42aa1"
  },
  {
    "url": "assets/js/2.95029f50.js",
    "revision": "92e80f591aedf6e365fe22392203e974"
  },
  {
    "url": "assets/js/20.85635205.js",
    "revision": "a81c33725e86afc0fe5aabd02b16d6a3"
  },
  {
    "url": "assets/js/21.e9593068.js",
    "revision": "a5298c438c4c39d1f799ea648facc388"
  },
  {
    "url": "assets/js/22.d67bf4fd.js",
    "revision": "22a56ea43834107cdb5bfab5e504d0ae"
  },
  {
    "url": "assets/js/23.30460103.js",
    "revision": "9b909a4b01ae3c1ba4fbb9c502205198"
  },
  {
    "url": "assets/js/24.0a15e03d.js",
    "revision": "51518f34e347a4a4e1cf73ed34cc4ea3"
  },
  {
    "url": "assets/js/25.76010eda.js",
    "revision": "1a2745082bdc3fed6508e4757c3f82fe"
  },
  {
    "url": "assets/js/26.c52ca967.js",
    "revision": "3e89b4897c7c984b1ccddb5959c36e07"
  },
  {
    "url": "assets/js/27.68017337.js",
    "revision": "f7862506ef53872571caa4bda6a7c000"
  },
  {
    "url": "assets/js/28.6c7bdd1f.js",
    "revision": "a9a730403fcfac59125aa5e751b42315"
  },
  {
    "url": "assets/js/29.4ffb4345.js",
    "revision": "c6efc20d4d63f6bf6956b72fa853aae0"
  },
  {
    "url": "assets/js/3.50ad17c5.js",
    "revision": "e4100de0440d22eac6c9ef49e198a3b8"
  },
  {
    "url": "assets/js/30.510168b3.js",
    "revision": "6a407db87dcadaf8b72578906b8f1537"
  },
  {
    "url": "assets/js/31.5ac31af4.js",
    "revision": "b64e7f7a2b401a6c403871ebe7cd0c00"
  },
  {
    "url": "assets/js/32.bbaee52d.js",
    "revision": "95d4be3a732e8be10cfa0a9c8d1978d1"
  },
  {
    "url": "assets/js/33.47e0148e.js",
    "revision": "94f9d917004d677ead31b5eb1beef1d5"
  },
  {
    "url": "assets/js/34.2e6c4e8b.js",
    "revision": "a33cace131bd0f842e38a8116f01bcc8"
  },
  {
    "url": "assets/js/35.2cd4a346.js",
    "revision": "32443bcb125fc2740d0043a18ac518ed"
  },
  {
    "url": "assets/js/36.26c82b4f.js",
    "revision": "aef0d7f29aaea5840fd9215546bc8295"
  },
  {
    "url": "assets/js/37.c5a7af82.js",
    "revision": "5b13d56a881342309a9e0f3b6ccdceeb"
  },
  {
    "url": "assets/js/38.195558c2.js",
    "revision": "f9f779498a4a2e4cc5f5fc49e1975d80"
  },
  {
    "url": "assets/js/39.5ccdf3e0.js",
    "revision": "f0fa8fb3e75c71563465cc33865b609b"
  },
  {
    "url": "assets/js/4.4cc53ee8.js",
    "revision": "03140c919f8d9f12d5ab2e8e68c38f0d"
  },
  {
    "url": "assets/js/40.a2b12e79.js",
    "revision": "f884f823d47e519ccc47a4745f20a1c2"
  },
  {
    "url": "assets/js/41.4fa2e83a.js",
    "revision": "9a9fc5d273f0e142c68d68a1cc39971f"
  },
  {
    "url": "assets/js/42.e67dea74.js",
    "revision": "caac29c30722afb56e9527448de258d1"
  },
  {
    "url": "assets/js/43.53baaef9.js",
    "revision": "26ed906d6b21d81d10d70772dd67f551"
  },
  {
    "url": "assets/js/44.5bf455fd.js",
    "revision": "40a2dabf0cea183465a3b413e7902079"
  },
  {
    "url": "assets/js/45.32e11a85.js",
    "revision": "fdf799c9cda6048379423ce5c61dacab"
  },
  {
    "url": "assets/js/46.bc97ac4c.js",
    "revision": "c542c5d512581e4d7b3b4d4649a65bcb"
  },
  {
    "url": "assets/js/47.2960b0e4.js",
    "revision": "e0faf937cf18c5d8067beaaa0deb01d6"
  },
  {
    "url": "assets/js/5.f498c13e.js",
    "revision": "7651b7246946ae98d09531c40ca35d78"
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
    "url": "assets/js/8.d9b06864.js",
    "revision": "fd11530cad565a9893e4e1918f625245"
  },
  {
    "url": "assets/js/9.0ebd126d.js",
    "revision": "3a4ba0c265041029b63dfc744b8be669"
  },
  {
    "url": "assets/js/app.fba9f4cb.js",
    "revision": "376d5d9f443a1701579f455d179a06f1"
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
    "url": "html/defer与async.html",
    "revision": "068b611c437e11b097038eb0a98e4e10"
  },
  {
    "url": "html/preload与prefetch.html",
    "revision": "64c33af525d6ac8388d67382191d1207"
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
    "revision": "830aa0521470ef30e10ab5277df4906b"
  },
  {
    "url": "javascript/es6/ESM与现代浏览器.html",
    "revision": "43f3d1fe38066193be379d73ee23a45e"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "dcdeef2f91bf616bd511c1de3a3473df"
  },
  {
    "url": "tools/browserslist.html",
    "revision": "558434bead2aefd9dd1bb5eeb0cb6d00"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "e4f7721d1d8d2ced39f04206caa3c6a3"
  },
  {
    "url": "tools/env.html",
    "revision": "38bb83a35cb1b34b322a9d860a84bbd4"
  },
  {
    "url": "tools/eslintrc.js.html",
    "revision": "2551a491368032d63c9021f3461458f4"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "52f4d80850ae7b23f56056defe97fe3d"
  },
  {
    "url": "tools/vuepress.html",
    "revision": "717ee8796e8aed6c9b11748ba71a5f64"
  },
  {
    "url": "前端脚手架/vue-cli/01-基本配置.html",
    "revision": "fb502cad67cb2e015256ac6aba11d48e"
  },
  {
    "url": "前端脚手架/vue-cli/02-loader.html",
    "revision": "ba4bad6872e699bbe81944cbe344db67"
  },
  {
    "url": "前端脚手架/vue-cli/03-plugin.html",
    "revision": "311b86bd9eba72f26e89ab4a075010f5"
  },
  {
    "url": "前端脚手架/vue-cli/loader之image-webpack-loader.html",
    "revision": "1e70c1dc6b107d6fdaee79a325a1bb9b"
  },
  {
    "url": "前端脚手架/vue-cli/others.html",
    "revision": "4158e99a72aa5edac9e6d2d2aeb03570"
  },
  {
    "url": "前端脚手架/vue-cli/webpack-chain.html",
    "revision": "70ee02d97fb60883fc9d97d19493f9a5"
  },
  {
    "url": "前端脚手架/vue-cli/新增webpack配置.html",
    "revision": "56861731ae60b33ec6daf299f065cfd2"
  },
  {
    "url": "前端脚手架/vue-cli/查看webpack配置.html",
    "revision": "7135e79264073dad6af5278a315a3e61"
  },
  {
    "url": "前端脚手架/vue-cli/配置sass.html",
    "revision": "d230d6596db421ad837410992923973b"
  },
  {
    "url": "前端脚手架/vue-cli/配置svg.html",
    "revision": "e376d32811e676589e2fbf1d25aac41e"
  },
  {
    "url": "前端脚手架/webpack/01-entry.html",
    "revision": "510ccc59c48b82d4de4fb8346fdfd228"
  },
  {
    "url": "前端脚手架/webpack/02-output.html",
    "revision": "3b3ae7022b4761010f4e05406f515416"
  },
  {
    "url": "前端脚手架/webpack/03-plugin.html",
    "revision": "9caf70180a1f744444f34104f04b50e7"
  },
  {
    "url": "前端脚手架/webpack/04-module.html",
    "revision": "7462c83df1b0f85d790353e11c7a3270"
  },
  {
    "url": "前端脚手架/webpack/05-resolve.html",
    "revision": "e9647af1a4fc16235f3d5289f783e660"
  },
  {
    "url": "前端脚手架/webpack/06-optimization/others.html",
    "revision": "9406e06c22cb4925fc6eca72dff0b2ea"
  },
  {
    "url": "前端脚手架/webpack/06-optimization/splitChunks.html",
    "revision": "da129dae94886c62376d911c1d39381e"
  },
  {
    "url": "前端脚手架/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "533cb4d5192430e5e15e918d53fc9d46"
  },
  {
    "url": "前端脚手架/webpack/others.html",
    "revision": "a358e59deee7bab348de3afe1ff79370"
  },
  {
    "url": "前端脚手架/webpack/webpack之devtool .html",
    "revision": "6a12c2526a9a2da53f9bb765cdacc46b"
  },
  {
    "url": "前端脚手架/webpack/webpack之hash.html",
    "revision": "30a9c0378e4e6d926a1be93e88d865db"
  },
  {
    "url": "前端脚手架/webpack/webpack之magic-comments.html",
    "revision": "ea227b6fe52978c7f3223d9d151d41f4"
  },
  {
    "url": "前端脚手架/webpack/webpack之runtime与manifest.html",
    "revision": "d3edc7ceaab9ad461915532d8567154c"
  },
  {
    "url": "前端脚手架/webpack/webpack之处理commonjs.html",
    "revision": "b43e59b0daa1c8732c631db10b9f5746"
  },
  {
    "url": "前端脚手架/webpack/webpack之处理esmodule.html",
    "revision": "df074745e8223d5183dadf6ee3ae3098"
  },
  {
    "url": "前端脚手架/webpack/webpack之模块路径解析规则.html",
    "revision": "be9dababebca794b0e084a1949630d45"
  },
  {
    "url": "前端脚手架/webpack/模块方法之requireContext.html",
    "revision": "6006a8fccae26b27b792c1a05c86d1ed"
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
