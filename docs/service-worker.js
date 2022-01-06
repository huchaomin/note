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
    "revision": "13ebaeff2b069ed70dc1306da516d9b0"
  },
  {
    "url": "assets/css/1.styles.d2bd4b9e.css",
    "revision": "9226a73b657e17e3d136e992ff6eee4e"
  },
  {
    "url": "assets/css/2.styles.52de3b56.css",
    "revision": "e16549df4ad0bb59dcba75b640ed8db9"
  },
  {
    "url": "assets/css/4.styles.19a6906f.css",
    "revision": "41856c4745dee9bec4a5fdedff62c832"
  },
  {
    "url": "assets/css/5.styles.8347f709.css",
    "revision": "41856c4745dee9bec4a5fdedff62c832"
  },
  {
    "url": "assets/css/6.styles.4ced39b1.css",
    "revision": "4dfd954af9da41878ca5b77c1ec7d6f2"
  },
  {
    "url": "assets/css/styles.c6336a7c.css",
    "revision": "ddaed7107231ba2d78fba2618d7a855c"
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
    "url": "assets/js/10.7120e809.js",
    "revision": "5af46807958201670f29e707d4791e60"
  },
  {
    "url": "assets/js/11.d46f7f88.js",
    "revision": "bfec792ce6099417aa8fc51cecf75167"
  },
  {
    "url": "assets/js/12.84f26884.js",
    "revision": "7de568779a47b026d7d3ac4fcfb6db0a"
  },
  {
    "url": "assets/js/13.0da759b1.js",
    "revision": "0915f4cb872442a6a10f5eaf08fecd47"
  },
  {
    "url": "assets/js/14.892f97d7.js",
    "revision": "8081d586cb642494fe196a81fefe3126"
  },
  {
    "url": "assets/js/15.dd56c57d.js",
    "revision": "42f2af6528c893c89d45d4333e40286f"
  },
  {
    "url": "assets/js/16.392a7656.js",
    "revision": "bffb3c19ba1673bfde9318ae28921dc4"
  },
  {
    "url": "assets/js/17.05906a04.js",
    "revision": "576a7dd43fd68a863fcb433ec8f2b94a"
  },
  {
    "url": "assets/js/18.d7026726.js",
    "revision": "977da9529d4794e2559b8eaf6afd9b8d"
  },
  {
    "url": "assets/js/19.64523b58.js",
    "revision": "8dfbad7e44f039d0f8647a9e084bb5b1"
  },
  {
    "url": "assets/js/2.52de3b56.js",
    "revision": "d2a077dd557010b29c6d8bddae01bded"
  },
  {
    "url": "assets/js/20.cbf04415.js",
    "revision": "dcc32776d3ecb5390cfecb7fdb3d947e"
  },
  {
    "url": "assets/js/21.943820df.js",
    "revision": "a60cad24d67a81b57259f0b63f6032b7"
  },
  {
    "url": "assets/js/22.75e643ba.js",
    "revision": "a36418a68b7ae96edbbe64c56e14bf78"
  },
  {
    "url": "assets/js/23.51e4bc37.js",
    "revision": "bf7ff90dd2a49390fdb284e6e8a068e9"
  },
  {
    "url": "assets/js/24.fbc42a36.js",
    "revision": "bf189f4e2301f8c487a14ec4b107bad9"
  },
  {
    "url": "assets/js/25.d49a0913.js",
    "revision": "7befc9ea178b194e78749ec4152bb573"
  },
  {
    "url": "assets/js/26.a1d48b27.js",
    "revision": "e777961457d58cd03f6a5a97b6313b0f"
  },
  {
    "url": "assets/js/27.fbd14667.js",
    "revision": "daefa317139ec299c714222552e8fdde"
  },
  {
    "url": "assets/js/28.0af15dc6.js",
    "revision": "9c3dc5ae6e0680300a6d96f958f516e3"
  },
  {
    "url": "assets/js/29.81b0f757.js",
    "revision": "6ead4adda45a89c2c8cf70f0c82b4dc1"
  },
  {
    "url": "assets/js/3.05f7042c.js",
    "revision": "99b8927679ea5ebb57e181824ec795f0"
  },
  {
    "url": "assets/js/30.a475ccb2.js",
    "revision": "c89aa90cff669e328e13df805027320f"
  },
  {
    "url": "assets/js/31.3cc6a713.js",
    "revision": "33a2618cd4aaf6b85dc90746ef8cddd8"
  },
  {
    "url": "assets/js/32.5edbb0a0.js",
    "revision": "a19fec2bb29361eb5aaeb0fb69911bf3"
  },
  {
    "url": "assets/js/33.8fb8967b.js",
    "revision": "15e8b3fac5a31ae5167236ed659d1d49"
  },
  {
    "url": "assets/js/34.d37b1248.js",
    "revision": "221a0263790128fd314031f2cede7337"
  },
  {
    "url": "assets/js/35.56f87df8.js",
    "revision": "57f14ec1a10f14eafdc2d100e509a2c5"
  },
  {
    "url": "assets/js/36.820daeb5.js",
    "revision": "a97b57b9ba2a1fcb13355cc0ece859e2"
  },
  {
    "url": "assets/js/37.2e362b31.js",
    "revision": "5b13d56a881342309a9e0f3b6ccdceeb"
  },
  {
    "url": "assets/js/38.27e3b30f.js",
    "revision": "2fb2ba1ed9a6fc9c2824e030d9b4fd43"
  },
  {
    "url": "assets/js/39.5b26b0fa.js",
    "revision": "d8c185f539463f4c6d77aa9f530c0241"
  },
  {
    "url": "assets/js/4.19a6906f.js",
    "revision": "457fb9fa21f06b7b2112ec0a225162e3"
  },
  {
    "url": "assets/js/40.8fb779c5.js",
    "revision": "2384aa9747dec859652e7a1a1c6238bb"
  },
  {
    "url": "assets/js/41.52920c20.js",
    "revision": "90042ab3e51fbe406bedd3f667b1a396"
  },
  {
    "url": "assets/js/42.18bcb4e6.js",
    "revision": "d904a3f0b8d2b6727bd33de5ed8405f5"
  },
  {
    "url": "assets/js/43.e52028f2.js",
    "revision": "26ed906d6b21d81d10d70772dd67f551"
  },
  {
    "url": "assets/js/44.01389ec9.js",
    "revision": "c4a20cacc222e53dbeb86cf0ab88eb15"
  },
  {
    "url": "assets/js/45.9cd5ec6c.js",
    "revision": "6de3e76d38e6cef58df26319a3616b50"
  },
  {
    "url": "assets/js/46.11e8bf4b.js",
    "revision": "7aab172ac30a78e1dab9ab8b94aa3d37"
  },
  {
    "url": "assets/js/47.d049dc45.js",
    "revision": "d0817c6789981db4fd298fa42e339d18"
  },
  {
    "url": "assets/js/5.8347f709.js",
    "revision": "6c56fda788a3420f83edeb2ae2b1d73a"
  },
  {
    "url": "assets/js/6.4ced39b1.js",
    "revision": "0fb2a52debe5c856c4b8cd35479ab199"
  },
  {
    "url": "assets/js/7.147de702.js",
    "revision": "10f6b7a38215851a4c0288c69450d243"
  },
  {
    "url": "assets/js/8.2fff19d0.js",
    "revision": "2d7a4d32edf81acef2c02b92939f755d"
  },
  {
    "url": "assets/js/9.3dd7e6ff.js",
    "revision": "5fc18432b5ef5ee34b3cf76e54a10302"
  },
  {
    "url": "assets/js/app.c6336a7c.js",
    "revision": "926ca77b56633ddb5590ee930b85e4a5"
  },
  {
    "url": "assets/js/chunk-vendors.d2bd4b9e.js",
    "revision": "2d6066152ed2053c027eb7aad051fc83"
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
    "revision": "9f9e3d18aa21b6fad6bdd4a881fab867"
  },
  {
    "url": "html/preload与prefetch.html",
    "revision": "73390ea1b876e30a8b769af86df86870"
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
    "revision": "440846ca36786a9e149d18b55e79b085"
  },
  {
    "url": "javascript/es6/ESM与现代浏览器.html",
    "revision": "a4000479fc741ba1ff2829a5ac98866e"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "1775d973902d044bfce0f22d925e3049"
  },
  {
    "url": "tools/browserslist.html",
    "revision": "c42a5cb93cd686ea8bc2859d9e448eef"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "6787935988562c5a2343aa48f27fdbd3"
  },
  {
    "url": "tools/env.html",
    "revision": "3f66a85afcdf94f1c1c2e8212c390ebd"
  },
  {
    "url": "tools/eslintrc.js.html",
    "revision": "73bd551a2bf25928a6acc7d4858692ea"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "46af5ae11290830226033e6435038df9"
  },
  {
    "url": "tools/vuepress.html",
    "revision": "49d158f9488e19f76de3241fa079bb79"
  },
  {
    "url": "前端脚手架/vue-cli/01-基本配置.html",
    "revision": "8ca4a05734997d2899e919a4ac9abd8b"
  },
  {
    "url": "前端脚手架/vue-cli/02-loader.html",
    "revision": "0a4b3bdcf740c5730fc8a178d3b6e469"
  },
  {
    "url": "前端脚手架/vue-cli/03-plugin.html",
    "revision": "f79c3fb4044747db3c4407b3cddf474a"
  },
  {
    "url": "前端脚手架/vue-cli/loader之image-webpack-loader.html",
    "revision": "7c2c4f1ea1948f44281574c242d0499b"
  },
  {
    "url": "前端脚手架/vue-cli/others.html",
    "revision": "cbeabfbc79b1078fc5982bc950cf202b"
  },
  {
    "url": "前端脚手架/vue-cli/webpack-chain.html",
    "revision": "8741be6aec3dfd88a63e5faa64c85920"
  },
  {
    "url": "前端脚手架/vue-cli/新增webpack配置.html",
    "revision": "e7ba1aef3f040055f77aa71de532dae1"
  },
  {
    "url": "前端脚手架/vue-cli/查看webpack配置.html",
    "revision": "ab4a2aacb500c0067de831939904aa43"
  },
  {
    "url": "前端脚手架/vue-cli/配置sass.html",
    "revision": "a901807915091a8109a9ba461f4a4ed9"
  },
  {
    "url": "前端脚手架/vue-cli/配置svg.html",
    "revision": "c207654874fc60afbf38fad59c5d17da"
  },
  {
    "url": "前端脚手架/webpack/01-entry.html",
    "revision": "55b4f8a84737f16ddfcf5101d3a8fbb2"
  },
  {
    "url": "前端脚手架/webpack/02-output.html",
    "revision": "0643c071670cbe9a5ae299489a7daadb"
  },
  {
    "url": "前端脚手架/webpack/03-plugin.html",
    "revision": "c3aa75069f5a3cf3a439b625266d0f94"
  },
  {
    "url": "前端脚手架/webpack/04-module.html",
    "revision": "a3ba7b3abc2f6a9f4edb4dddc3f9e894"
  },
  {
    "url": "前端脚手架/webpack/05-resolve.html",
    "revision": "18f1d0e65ebd206419312a3d147e2862"
  },
  {
    "url": "前端脚手架/webpack/06-optimization/others.html",
    "revision": "00ca701d57465e090f5dde0eecc5a0dd"
  },
  {
    "url": "前端脚手架/webpack/06-optimization/splitChunks.html",
    "revision": "bf5615e0f07ab5adaa7ec6982f20eaf7"
  },
  {
    "url": "前端脚手架/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "d31b392256f052fa48d7aba07994f706"
  },
  {
    "url": "前端脚手架/webpack/others.html",
    "revision": "9d86053e67e797bdaee23becdc2238c4"
  },
  {
    "url": "前端脚手架/webpack/webpack之devtool .html",
    "revision": "5099277af4ab58758197eae7335f9e51"
  },
  {
    "url": "前端脚手架/webpack/webpack之hash.html",
    "revision": "5a49bc564bd9cf6e11f843eab3ab4bad"
  },
  {
    "url": "前端脚手架/webpack/webpack之magic-comments.html",
    "revision": "fd186e0f1560bb5161dd68146232fd39"
  },
  {
    "url": "前端脚手架/webpack/webpack之runtime与manifest.html",
    "revision": "cf9934b5aafec1fc537588c9d50b064d"
  },
  {
    "url": "前端脚手架/webpack/webpack之处理commonjs.html",
    "revision": "4e25484dfc8e6b79c84c0b09d7a0cbc8"
  },
  {
    "url": "前端脚手架/webpack/webpack之处理esmodule.html",
    "revision": "538b1fa140034a8d05c8286812cdf673"
  },
  {
    "url": "前端脚手架/webpack/webpack之模块路径解析规则.html",
    "revision": "a728a424da29ae4b81cca89d21637bec"
  },
  {
    "url": "前端脚手架/webpack/模块方法之requireContext.html",
    "revision": "981207fefde218739a9ec0a336b23f74"
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
