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
    "revision": "1ebd50439de85e9f164356c486c9645a"
  },
  {
    "url": "assets/css/1.styles.95ec19c5.css",
    "revision": "b145802deabbd8a19aa2b7a3e7e9cd95"
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
    "url": "assets/css/styles.5b78ec60.css",
    "revision": "d5c337d18f71dcc9f8d9f004e59a71e4"
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
    "url": "assets/js/11.75b0596b.js",
    "revision": "a9a3894529faf4d72838ef403a2e6466"
  },
  {
    "url": "assets/js/12.7907e2b6.js",
    "revision": "bbae1f0ac5d190e974e29bfd948cc545"
  },
  {
    "url": "assets/js/13.f3cbc061.js",
    "revision": "9f02e7f678a95090f2ba3b72376496f7"
  },
  {
    "url": "assets/js/14.bd9e700f.js",
    "revision": "f3315efd341a6771bc57559cd2cf7ba1"
  },
  {
    "url": "assets/js/15.12ec7b1e.js",
    "revision": "c09f38a21155f25c3c0436ca14a46695"
  },
  {
    "url": "assets/js/16.9e35140d.js",
    "revision": "18c2a6583d66eb06f80f63852f1dcbbb"
  },
  {
    "url": "assets/js/17.49301a05.js",
    "revision": "5837955aafcd680be5fa456059cb03eb"
  },
  {
    "url": "assets/js/18.0ae04f5d.js",
    "revision": "27c98c7a6579b1bca26dbf4d5abd6b73"
  },
  {
    "url": "assets/js/19.5617460c.js",
    "revision": "1df76b3cf19160c03397272699a74ad2"
  },
  {
    "url": "assets/js/2.52de3b56.js",
    "revision": "d2a077dd557010b29c6d8bddae01bded"
  },
  {
    "url": "assets/js/20.e4204656.js",
    "revision": "e4cf3aefed8a1d68916fef13fae9cea4"
  },
  {
    "url": "assets/js/21.a8b39a5a.js",
    "revision": "39bf041256c72c2d564423de03a1c51d"
  },
  {
    "url": "assets/js/22.950d2048.js",
    "revision": "c8017dddbe6b7cee03152d88fa2586cd"
  },
  {
    "url": "assets/js/23.2443e2b1.js",
    "revision": "9b909a4b01ae3c1ba4fbb9c502205198"
  },
  {
    "url": "assets/js/24.4aa1bf9b.js",
    "revision": "4d29ae864fce41f23f255f0b2562d5ed"
  },
  {
    "url": "assets/js/25.1ab89a34.js",
    "revision": "7c2f1353e53adff9448b0da1adb9cad6"
  },
  {
    "url": "assets/js/26.f9b1b561.js",
    "revision": "32848a9f42f7ec9f22657bba76a4e19b"
  },
  {
    "url": "assets/js/27.8498a2fc.js",
    "revision": "4e158f71a5cc91d80f8b6c0354528810"
  },
  {
    "url": "assets/js/28.ffb41c49.js",
    "revision": "86befd8a23228e3574e130cb829b77f2"
  },
  {
    "url": "assets/js/29.3518c52d.js",
    "revision": "19b34ba73f51a5992f981fbe00354078"
  },
  {
    "url": "assets/js/3.61ba376a.js",
    "revision": "ae8cedfd299af1880821e59c6cefbcd3"
  },
  {
    "url": "assets/js/30.a475ccb2.js",
    "revision": "c89aa90cff669e328e13df805027320f"
  },
  {
    "url": "assets/js/31.fe6c3fcb.js",
    "revision": "ef8ad24d8f7f0a87159d940a14f3f5f7"
  },
  {
    "url": "assets/js/32.81dd6602.js",
    "revision": "55e814be4f724e07941bb5b02e852d7a"
  },
  {
    "url": "assets/js/33.6b9c586e.js",
    "revision": "b81bef1dfb55318d1450e23ecf5d739d"
  },
  {
    "url": "assets/js/34.d37b1248.js",
    "revision": "221a0263790128fd314031f2cede7337"
  },
  {
    "url": "assets/js/35.863ff611.js",
    "revision": "b9c6d445439de052bf2e0be4cd1103c9"
  },
  {
    "url": "assets/js/36.820daeb5.js",
    "revision": "a97b57b9ba2a1fcb13355cc0ece859e2"
  },
  {
    "url": "assets/js/37.3179cf8e.js",
    "revision": "76a557b54dd395f9bae3c0948cded8d7"
  },
  {
    "url": "assets/js/38.da405372.js",
    "revision": "66ba0bbb30fde73964ab3745223213f7"
  },
  {
    "url": "assets/js/39.acc900a6.js",
    "revision": "df421f9e3f1259067299c99f6bebe0fb"
  },
  {
    "url": "assets/js/4.19a6906f.js",
    "revision": "457fb9fa21f06b7b2112ec0a225162e3"
  },
  {
    "url": "assets/js/40.cbfa91cc.js",
    "revision": "e4b4772cf3e45815cc8499bfadb50e82"
  },
  {
    "url": "assets/js/41.494a48c2.js",
    "revision": "851e8967946853bbb68cc485d470b618"
  },
  {
    "url": "assets/js/42.995a89f6.js",
    "revision": "86df82d70115841367521bff6993cb8d"
  },
  {
    "url": "assets/js/43.2368c0ab.js",
    "revision": "f7c12286bd8090c4490dd6be5145506f"
  },
  {
    "url": "assets/js/44.44bed4ae.js",
    "revision": "773b8090f75634c87eecc973cffb19cc"
  },
  {
    "url": "assets/js/45.e18233e5.js",
    "revision": "6908d09004d31c366816dc18527b5013"
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
    "url": "assets/js/9.b37a34b1.js",
    "revision": "36f1a372365f35dedcb68063c740b8c3"
  },
  {
    "url": "assets/js/app.5b78ec60.js",
    "revision": "f31aa851a752b3b739ab9e79aa1e764c"
  },
  {
    "url": "assets/js/chunk-vendors.95ec19c5.js",
    "revision": "3928179ae29bd09d0b43d3349f4d40ab"
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
    "revision": "710740546266b56391b55da94a1ee776"
  },
  {
    "url": "html/preload与prefetch.html",
    "revision": "3b225f5a5b65877c28e986e81cc5330f"
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
    "revision": "29c54541fcd446305c432762472a68a3"
  },
  {
    "url": "javascript/es6/ESM与现代浏览器.html",
    "revision": "b60f3a401478996a0f48993bd8158418"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "1d56793755586db890c3b0957f4a025b"
  },
  {
    "url": "tools/browserslist.html",
    "revision": "4b4a3065d468f644354fc639828f8a03"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "478544e2c024cce8b3c56b5b06ba4a4d"
  },
  {
    "url": "tools/env.html",
    "revision": "66e614786ddfbdcdbc2abc0bcc38ebf8"
  },
  {
    "url": "tools/eslintrc.js.html",
    "revision": "81911d6158f5ca1e70daa4a8b91ccd9e"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "099964df7804acdea86d8e3f78d325ed"
  },
  {
    "url": "tools/vuepress.html",
    "revision": "957853eace2ee6380eca01989b882d6e"
  },
  {
    "url": "前端脚手架/vue-cli/01-基本配置.html",
    "revision": "f4287245edf4f16c63aa44c6e69b2fb0"
  },
  {
    "url": "前端脚手架/vue-cli/02-loader.html",
    "revision": "59e15efd1bc2d964e28b7ad5247d67f1"
  },
  {
    "url": "前端脚手架/vue-cli/03-plugin.html",
    "revision": "486facb72eef9af2436cfe7b5bb89928"
  },
  {
    "url": "前端脚手架/vue-cli/loader之image-webpack-loader.html",
    "revision": "26f77de454863070b17d966de2382320"
  },
  {
    "url": "前端脚手架/vue-cli/others.html",
    "revision": "7769c2411320c4e5e0546ae992fcd3c0"
  },
  {
    "url": "前端脚手架/vue-cli/webpack-chain.html",
    "revision": "70726e7d6ae13c6d2cdca0491c62ef09"
  },
  {
    "url": "前端脚手架/vue-cli/新增webpack配置.html",
    "revision": "5882e359af46b16418146a7f990cce98"
  },
  {
    "url": "前端脚手架/vue-cli/查看webpack配置.html",
    "revision": "e52af30629c5278ccb39daff88d1ba05"
  },
  {
    "url": "前端脚手架/vue-cli/配置sass.html",
    "revision": "2ffe40b85328b05007738dc7b3aea71f"
  },
  {
    "url": "前端脚手架/vue-cli/配置svg.html",
    "revision": "06c1b36f2d34cbc10de97ff70f4cacbb"
  },
  {
    "url": "前端脚手架/webpack/01-entry.html",
    "revision": "95f0f8f4fb9a5c154cf9c6499e6a9070"
  },
  {
    "url": "前端脚手架/webpack/02-output.html",
    "revision": "cbc764e0052d88dea2d0967b98c1e182"
  },
  {
    "url": "前端脚手架/webpack/03-plugin.html",
    "revision": "37459234de64e3da4b83a372753c7ca3"
  },
  {
    "url": "前端脚手架/webpack/04-module.html",
    "revision": "ae6e27ee74f5ebbb6d7160ce980649b9"
  },
  {
    "url": "前端脚手架/webpack/05-resolve.html",
    "revision": "13b51f929a6b9fe078ee609c7c8571a9"
  },
  {
    "url": "前端脚手架/webpack/06-optimization/others.html",
    "revision": "6f69c6c8a53ad525e73cf8703a0b5ab2"
  },
  {
    "url": "前端脚手架/webpack/06-optimization/splitChunks.html",
    "revision": "8014010d852a9188b80406283af78d50"
  },
  {
    "url": "前端脚手架/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "3e960d5b692043dd2e9ca53deb5f3c8e"
  },
  {
    "url": "前端脚手架/webpack/others.html",
    "revision": "a8a267e651313ce98a9fcf97a0744bdb"
  },
  {
    "url": "前端脚手架/webpack/webpack之devtool .html",
    "revision": "8c8f2bd9d97d2b5c88b4a0197674c650"
  },
  {
    "url": "前端脚手架/webpack/webpack之hash.html",
    "revision": "66f2e75eaba331fc215ffa25c621ca0b"
  },
  {
    "url": "前端脚手架/webpack/webpack之magic-comments.html",
    "revision": "8a87510d1b558119697a64edd082f37a"
  },
  {
    "url": "前端脚手架/webpack/webpack之runtime与manifest.html",
    "revision": "4d6afd3cbae09b989bc5f3e9ccfe1f2c"
  },
  {
    "url": "前端脚手架/webpack/webpack之处理commonjs.html",
    "revision": "15c9c45b5efad375a8f3c5811f503d3e"
  },
  {
    "url": "前端脚手架/webpack/webpack之处理esmodule.html",
    "revision": "0536021e2b413fd3c398c1e3f8700de5"
  },
  {
    "url": "前端脚手架/webpack/webpack之模块路径解析规则.html",
    "revision": "e8f3c4832c327dced5c230aca70e90ba"
  },
  {
    "url": "前端脚手架/webpack/模块方法之requireContext.html",
    "revision": "065f8c8921bb74e4cfed5302d30eac09"
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
