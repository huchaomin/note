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
    "revision": "f1b2c338872b526f21dd29373b98b724"
  },
  {
    "url": "assets/css/1.styles.02fba14f.css",
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
    "url": "assets/css/styles.b0e71c6e.css",
    "revision": "9ea7be7c55de78e2598c6e725c474291"
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
    "url": "assets/js/13.caf6fc87.js",
    "revision": "3836e148b5dd82903d5447d125b7bbaf"
  },
  {
    "url": "assets/js/14.0a65adde.js",
    "revision": "19b709a3c8eceb874ac9269ec9341099"
  },
  {
    "url": "assets/js/15.dd56c57d.js",
    "revision": "42f2af6528c893c89d45d4333e40286f"
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
    "url": "assets/js/18.809c989a.js",
    "revision": "c3cb5d5c3414f4ead88e12e5c066057e"
  },
  {
    "url": "assets/js/19.433a46bc.js",
    "revision": "2d3d09a43a97ef82bc25598181730ec3"
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
    "url": "assets/js/21.943820df.js",
    "revision": "a60cad24d67a81b57259f0b63f6032b7"
  },
  {
    "url": "assets/js/22.950d2048.js",
    "revision": "c8017dddbe6b7cee03152d88fa2586cd"
  },
  {
    "url": "assets/js/23.39d14b28.js",
    "revision": "bc57077e418974fdc61041aa55a4ea7c"
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
    "url": "assets/js/26.a1d48b27.js",
    "revision": "e777961457d58cd03f6a5a97b6313b0f"
  },
  {
    "url": "assets/js/27.25182128.js",
    "revision": "0fcde4a11b283b2c9afc6b476cfa86ca"
  },
  {
    "url": "assets/js/28.0af15dc6.js",
    "revision": "9c3dc5ae6e0680300a6d96f958f516e3"
  },
  {
    "url": "assets/js/29.3518c52d.js",
    "revision": "19b34ba73f51a5992f981fbe00354078"
  },
  {
    "url": "assets/js/3.05f7042c.js",
    "revision": "99b8927679ea5ebb57e181824ec795f0"
  },
  {
    "url": "assets/js/30.64fac878.js",
    "revision": "4956e3959c12ba1b6ae01643bb6a5d01"
  },
  {
    "url": "assets/js/31.8de9b1d8.js",
    "revision": "b8e3599eee6ab60b695f2acb053cf5ae"
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
    "url": "assets/js/40.8fb779c5.js",
    "revision": "2384aa9747dec859652e7a1a1c6238bb"
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
    "url": "assets/js/43.9362c471.js",
    "revision": "29cbea9cd27e9749748f91b58d640f55"
  },
  {
    "url": "assets/js/44.19f58e18.js",
    "revision": "35dfcb4bb5eeb9883269d8e87834a7b7"
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
    "url": "assets/js/8.d795f857.js",
    "revision": "f0a9e7eac8313a83ddd43d64fbc3a902"
  },
  {
    "url": "assets/js/9.b37a34b1.js",
    "revision": "36f1a372365f35dedcb68063c740b8c3"
  },
  {
    "url": "assets/js/app.b0e71c6e.js",
    "revision": "ebd5d59dbb77f3cf649a26da36371057"
  },
  {
    "url": "assets/js/chunk-vendors.02fba14f.js",
    "revision": "035bdd95fa4772c731249742bb623a11"
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
    "revision": "34eca57c3a628ef5800d5b97b07a2004"
  },
  {
    "url": "html/preload与prefetch.html",
    "revision": "e324d83d55cbd9bf4b7064594b65b793"
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
    "revision": "5b2f85d7b551baeec15e26214ab3995d"
  },
  {
    "url": "javascript/es6/ESM与现代浏览器.html",
    "revision": "3ebb93bf6376755566625b180d2093ad"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "907ec2d575a808a17447941503f4445c"
  },
  {
    "url": "tools/browserslist.html",
    "revision": "2f5b3380c33bbad40ca0bd361fcaea86"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "5c35306843587d132ab774dcf8431de0"
  },
  {
    "url": "tools/env.html",
    "revision": "13cf718e1f85d0a4a553629a27846e36"
  },
  {
    "url": "tools/eslintrc.js.html",
    "revision": "98a758d5abf7d3b83b6f15a996aad0a5"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "95ec3330f4e15cdf023a1a6f94ad9f3c"
  },
  {
    "url": "tools/vuepress.html",
    "revision": "0820e3ff448e3d50aa575d70869d56ca"
  },
  {
    "url": "前端脚手架/vue-cli/01-基本配置.html",
    "revision": "4d7524e700ef031527a3cbf98ecccf5b"
  },
  {
    "url": "前端脚手架/vue-cli/02-loader.html",
    "revision": "70945a3bbf01a7a26a07d90a4f3729a6"
  },
  {
    "url": "前端脚手架/vue-cli/03-plugin.html",
    "revision": "e6f33438b23db37d9727778ecb39d986"
  },
  {
    "url": "前端脚手架/vue-cli/loader之image-webpack-loader.html",
    "revision": "122ca5101e182bc6cd64befb2449c33e"
  },
  {
    "url": "前端脚手架/vue-cli/others.html",
    "revision": "32eb64f84f7638c556ea5cf280f005fb"
  },
  {
    "url": "前端脚手架/vue-cli/webpack-chain.html",
    "revision": "b8c55abc9b9075f77779fa1e46da8ea5"
  },
  {
    "url": "前端脚手架/vue-cli/新增webpack配置.html",
    "revision": "ea0cb7b49dc82f252bd0380001f49703"
  },
  {
    "url": "前端脚手架/vue-cli/查看webpack配置.html",
    "revision": "5ce0089430bd82c653606ad654ddc3a9"
  },
  {
    "url": "前端脚手架/vue-cli/配置sass.html",
    "revision": "e9976f08f0168cefe1e0070d9d53164f"
  },
  {
    "url": "前端脚手架/vue-cli/配置svg.html",
    "revision": "c567248e2f3338c30bd835705150c752"
  },
  {
    "url": "前端脚手架/webpack/01-entry.html",
    "revision": "368ec6db9e4545022beff26754268862"
  },
  {
    "url": "前端脚手架/webpack/02-output.html",
    "revision": "d7240ada893010782067f793b9b006b3"
  },
  {
    "url": "前端脚手架/webpack/03-plugin.html",
    "revision": "6dd74db65644a4b8c69c087c8422ae7b"
  },
  {
    "url": "前端脚手架/webpack/04-module.html",
    "revision": "d1995abc3f77ad1e0d21655252b654c7"
  },
  {
    "url": "前端脚手架/webpack/05-resolve.html",
    "revision": "7d404d37553563e5f89e962a5a59b56b"
  },
  {
    "url": "前端脚手架/webpack/06-optimization/others.html",
    "revision": "6b04227eae7f753a4e77f22c742c6e0a"
  },
  {
    "url": "前端脚手架/webpack/06-optimization/splitChunks.html",
    "revision": "b3b683b6f78d2433bbc213cb70978dc2"
  },
  {
    "url": "前端脚手架/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "98ac2c7ed1bf6fb65da734370d3274c5"
  },
  {
    "url": "前端脚手架/webpack/others.html",
    "revision": "265b8da880cab0d72ed6aeb63b774dcb"
  },
  {
    "url": "前端脚手架/webpack/webpack之devtool .html",
    "revision": "a13e585c5b13957ace53bf46cd7bc904"
  },
  {
    "url": "前端脚手架/webpack/webpack之hash.html",
    "revision": "162e96ae79ba19095d7577c588fe2b9d"
  },
  {
    "url": "前端脚手架/webpack/webpack之magic-comments.html",
    "revision": "5ed80cee9af0e0fe06d04d3335376d75"
  },
  {
    "url": "前端脚手架/webpack/webpack之runtime与manifest.html",
    "revision": "ffe9779c61936494529c2c1b69100f70"
  },
  {
    "url": "前端脚手架/webpack/webpack之处理commonjs.html",
    "revision": "9bcf86f7480b1271ffff0fc6a1f79e64"
  },
  {
    "url": "前端脚手架/webpack/webpack之处理esmodule.html",
    "revision": "e97017e7159405e94f45c55eacc13cc4"
  },
  {
    "url": "前端脚手架/webpack/webpack之模块路径解析规则.html",
    "revision": "4f4d4abb7cffe60c5efa7fab187ab32c"
  },
  {
    "url": "前端脚手架/webpack/模块方法之requireContext.html",
    "revision": "7927844398eb82bc5815116040c730fb"
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
