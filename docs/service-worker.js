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
    "revision": "0375b24b11147e9ec48acd3a80c9f6c7"
  },
  {
    "url": "assets/css/0.styles.af38ca1c.css",
    "revision": "f8d5004f0f5c86dbc8712936df50ba14"
  },
  {
    "url": "assets/css/4.styles.cf7d4acf.css",
    "revision": "a6dcd78eef99476a6ba1ae0f4c01de62"
  },
  {
    "url": "assets/css/6.styles.1cf475e5.css",
    "revision": "4dfd954af9da41878ca5b77c1ec7d6f2"
  },
  {
    "url": "assets/css/9.styles.bbcde789.css",
    "revision": "5849dd6c3c284933e143139831db1930"
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
    "url": "assets/img/filing.d0289dc0.png",
    "revision": "d0289dc0a46fc5b15b3363ffa78cf6c7"
  },
  {
    "url": "assets/img/git-areas.93c7eec3.png",
    "revision": "93c7eec346188bbabdf255087762327e"
  },
  {
    "url": "assets/img/git-flow.2ff72e62.png",
    "revision": "2ff72e6268bd98c4213d190ca91a48e2"
  },
  {
    "url": "assets/img/git-lifecycle.b65dc1f4.png",
    "revision": "b65dc1f4245a9a1230e78bac21f5ee6f"
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
    "url": "assets/js/12.eab6d16b.js",
    "revision": "d88b6740d351a0600df5d9d15f8b6982"
  },
  {
    "url": "assets/js/13.09795986.js",
    "revision": "601b4950cc67b12be893c8b5284eec90"
  },
  {
    "url": "assets/js/14.90fe5c0c.js",
    "revision": "0d35d8b61d84f5b3e79fb1445b4a6f3c"
  },
  {
    "url": "assets/js/15.d09420af.js",
    "revision": "47f5882042ce4dc518b8094cea2b591f"
  },
  {
    "url": "assets/js/16.c5955aa9.js",
    "revision": "6e4906b10f9349900f4696abc46671f1"
  },
  {
    "url": "assets/js/17.70a1738a.js",
    "revision": "6d8f3d0ce19a9070149995722aa09e59"
  },
  {
    "url": "assets/js/18.54c7ff30.js",
    "revision": "0d4999d3662a61cd3d51cff02b33e350"
  },
  {
    "url": "assets/js/19.60de5be4.js",
    "revision": "0eb56d5ee392fc4a0a19bf813ed52377"
  },
  {
    "url": "assets/js/20.1df9f2bb.js",
    "revision": "b3195dacc8fe80775858b857585a7140"
  },
  {
    "url": "assets/js/21.42e86107.js",
    "revision": "b7881a14c5dfa6965b205f500b017b32"
  },
  {
    "url": "assets/js/22.47f5b50f.js",
    "revision": "d8d70829786222c3e08f805004b0276e"
  },
  {
    "url": "assets/js/23.0c2fd09c.js",
    "revision": "7d71fecfa3a62a73a873e95119a0e41e"
  },
  {
    "url": "assets/js/24.fffa3c11.js",
    "revision": "36e7658131d1297b1e8c08bd314ffd74"
  },
  {
    "url": "assets/js/25.7f1e02b5.js",
    "revision": "dc5b62c4f10c6f46a7f8bf2b0b0e4ac7"
  },
  {
    "url": "assets/js/26.4ae669c2.js",
    "revision": "b8c38577fc3ec41aa203311b1dad5f9b"
  },
  {
    "url": "assets/js/27.1fc85c03.js",
    "revision": "6b8204d55ec96be3f9e4027df301dbec"
  },
  {
    "url": "assets/js/28.e8828456.js",
    "revision": "5212e4be7e2dfa24f688a6d46c90aa7c"
  },
  {
    "url": "assets/js/29.d1f459f0.js",
    "revision": "a873b7063a89ec6ed442c8bc813bf917"
  },
  {
    "url": "assets/js/3.f829d01b.js",
    "revision": "a61f2dd9404d81d719d2bb892a1b5246"
  },
  {
    "url": "assets/js/30.de92816d.js",
    "revision": "344382c214e5fddf9b2ff9f5f4b3a77d"
  },
  {
    "url": "assets/js/31.bfdc74d9.js",
    "revision": "58087d74099422ff94deb6b2c24e10d4"
  },
  {
    "url": "assets/js/32.123b4b7e.js",
    "revision": "6f44efb9450898c75f751148cae641a7"
  },
  {
    "url": "assets/js/33.f11834f0.js",
    "revision": "780244b55a4e59f3541ec185473ee172"
  },
  {
    "url": "assets/js/34.20798a93.js",
    "revision": "9abf201658dc6ef0f801bed9973ffd4c"
  },
  {
    "url": "assets/js/35.8f1c285a.js",
    "revision": "9ebf8751cc5012cfbaf4c3610285ed19"
  },
  {
    "url": "assets/js/36.3d817f1b.js",
    "revision": "349849f0e0349fa23f39eb67f19c5ee1"
  },
  {
    "url": "assets/js/37.929b8e08.js",
    "revision": "c4ba6c6f38b4a3da640c44dc8013a39f"
  },
  {
    "url": "assets/js/38.1b066f55.js",
    "revision": "27288b857e56a7de09a9be7bedafe9bb"
  },
  {
    "url": "assets/js/39.5c586840.js",
    "revision": "2a7d29f798c198b4d54c491d9b0f7e07"
  },
  {
    "url": "assets/js/40.2589be9e.js",
    "revision": "38d1754f45f1cb564cb9fd65a7998ecd"
  },
  {
    "url": "assets/js/41.92c9a07f.js",
    "revision": "4387aa55537b5e4f5b8cde72ee5432b8"
  },
  {
    "url": "assets/js/42.b5c54c1f.js",
    "revision": "e6cbfc3ab7617ce5f3a6f24a0595e01c"
  },
  {
    "url": "assets/js/43.d7a69855.js",
    "revision": "a40edc3594f0f82a1a2db48145f73961"
  },
  {
    "url": "assets/js/44.19a053df.js",
    "revision": "2c59f3d76ab1d6399d7d02000b49dad5"
  },
  {
    "url": "assets/js/45.46f40f67.js",
    "revision": "96bd8a2d9f706aa0d22bcfb95b2869d3"
  },
  {
    "url": "assets/js/46.c70cc0f6.js",
    "revision": "f34434823682ada0d2368847b3e93301"
  },
  {
    "url": "assets/js/47.463485ec.js",
    "revision": "9cfaa376c95791758b66454754074d56"
  },
  {
    "url": "assets/js/48.c5d90da3.js",
    "revision": "7227de1ab82a7dfde5367ac5268fa7ee"
  },
  {
    "url": "assets/js/49.ac4eb64b.js",
    "revision": "7303d3a9fffb934720e8dd89e97be6a9"
  },
  {
    "url": "assets/js/5.65fe5a3b.js",
    "revision": "4442c438bc0eec73b1e55820a47cf5a8"
  },
  {
    "url": "assets/js/50.ca58295a.js",
    "revision": "638500f34207fed03a00c5802b56c7d5"
  },
  {
    "url": "assets/js/51.b033a03c.js",
    "revision": "f5d0b3daf17a8e2d945551e1e55e0949"
  },
  {
    "url": "assets/js/52.75db8826.js",
    "revision": "725a09c54a391c40c17ddd2b41990843"
  },
  {
    "url": "assets/js/53.8b52eded.js",
    "revision": "2ce01692cb0a4379c44deae5c732b220"
  },
  {
    "url": "assets/js/54.e926c30f.js",
    "revision": "659dd4039886f290e527b3239fd9eb36"
  },
  {
    "url": "assets/js/55.21f7a66f.js",
    "revision": "d933374e4ea6e7c0bc15a8922927a75f"
  },
  {
    "url": "assets/js/56.1d2f08f1.js",
    "revision": "efdad71a400142c0fc2230b54f082255"
  },
  {
    "url": "assets/js/57.8d87c718.js",
    "revision": "e7cabfe862afeaaf2f748ae174081eda"
  },
  {
    "url": "assets/js/58.2a64e45e.js",
    "revision": "662df4d7f6d11b374c6b173bfa5e3f84"
  },
  {
    "url": "assets/js/59.1bdf52aa.js",
    "revision": "15a58b4474e25a6b7254bd8b7292ecc3"
  },
  {
    "url": "assets/js/6.727b14be.js",
    "revision": "19eec47d693ddd62f23093317173b031"
  },
  {
    "url": "assets/js/60.56e3a23a.js",
    "revision": "fc91d7002829b30a2609e154559cbdd7"
  },
  {
    "url": "assets/js/61.463ea7aa.js",
    "revision": "4abd0423f26a3a60e93ae9b2848a825a"
  },
  {
    "url": "assets/js/62.5faa83b8.js",
    "revision": "3412ff4665e7f872e9a6c4f0db1bbe55"
  },
  {
    "url": "assets/js/63.8a87a008.js",
    "revision": "9f098a84bdce05bce2ffaa01f0526477"
  },
  {
    "url": "assets/js/64.6cafdc35.js",
    "revision": "48f26f99646143624f3b7544941dbf6c"
  },
  {
    "url": "assets/js/65.a932eb48.js",
    "revision": "9e977a0179340e888616fd2c63ce7f05"
  },
  {
    "url": "assets/js/66.d46ce0b3.js",
    "revision": "c229add1fd1e412431a1f9e8e153b590"
  },
  {
    "url": "assets/js/67.f79455b7.js",
    "revision": "6effd67cf4060bd3137cca5f9bb0b1b5"
  },
  {
    "url": "assets/js/68.0ee9f7c8.js",
    "revision": "afbeed9a1bf87c4dc357e95666d023ae"
  },
  {
    "url": "assets/js/69.5e5101fe.js",
    "revision": "1e57fcca2a455ad6329db216c03677eb"
  },
  {
    "url": "assets/js/70.b2862019.js",
    "revision": "494dbdb5935caa9a4e5fdfedbe11b2de"
  },
  {
    "url": "assets/js/71.ac006475.js",
    "revision": "648a798ff887bc35cdd5345bdfb4e511"
  },
  {
    "url": "assets/js/72.7bb3fb61.js",
    "revision": "e96886c579d12e61475bbdeacaf93794"
  },
  {
    "url": "assets/js/73.4255df8e.js",
    "revision": "ac88fb9dbe597cf7d27a17a0e2d2d557"
  },
  {
    "url": "assets/js/8.d98a9b9b.js",
    "revision": "55f94fa26ff75dd91327aab19c38510a"
  },
  {
    "url": "assets/js/app.cb4181d1.js",
    "revision": "4914d9bdc131d8a2d1ebfd2b936f3aa2"
  },
  {
    "url": "assets/js/chunk-default.95c54002.js",
    "revision": "444ebee861b0c5bf9d4937909f5d71af"
  },
  {
    "url": "assets/js/chunk-vuepress-dev.0e5dd05e.js",
    "revision": "d9ba86aca85e9810eae6e59468d668c5"
  },
  {
    "url": "assets/js/chunk-vuepress.a4460686.js",
    "revision": "8325ff72746a556200af61b0f0dc8efe"
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
    "revision": "e23e24a03d8a4472a09ee26e94a3b7c8"
  },
  {
    "url": "css/reset.html",
    "revision": "39cd2577fe0ba9f547ae7a598a18a128"
  },
  {
    "url": "css/scrollBar.html",
    "revision": "b9e0e8d3a98832de9af799d744d18cf7"
  },
  {
    "url": "fonts/JetBrainsMonoNL-Light.ttf",
    "revision": "dee3c485a9b31c177dd67c3889c18b7b"
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
    "revision": "4c3281a9a34afef86217c9b4277bb3db"
  },
  {
    "url": "javascript/bom/Navigator.sendBeacon.html",
    "revision": "65736e731a7c4cc8f71aa7d3901c6e98"
  },
  {
    "url": "javascript/bom/sessionStorage.html",
    "revision": "b0b91d6d32f035e16deb7c331669a000"
  },
  {
    "url": "javascript/dom/api-drag.html",
    "revision": "41d99f57f8dd468b0ead8642f236cadf"
  },
  {
    "url": "javascript/dom/defer与async.html",
    "revision": "b4c9f2b41def919fabb659e1a288469f"
  },
  {
    "url": "javascript/dom/preload与prefetch.html",
    "revision": "8f344fa96da48bdc87ead45a45c06694"
  },
  {
    "url": "javascript/ESM与现代浏览器.html",
    "revision": "6e3613719af26d99ba9e3a1da4b543f6"
  },
  {
    "url": "javascript/微任务宏任务执行顺序.html",
    "revision": "e93d7d313317824e718fe442a23f7f6c"
  },
  {
    "url": "others/interview/a == 1 && a == 2 && a == 3.html",
    "revision": "3af8cce7fbbab31af35ee827f2de21ff"
  },
  {
    "url": "others/interview/遍历的异步写法.html",
    "revision": "48cbae738c66a4e44728246e387aa27a"
  },
  {
    "url": "others/JSON.html",
    "revision": "7e2bb23789c90cfbbe878cc831780848"
  },
  {
    "url": "others/unicode和utf-8/unicode.html",
    "revision": "2e9d1a797ad88f48c9ba5e2ae39506ed"
  },
  {
    "url": "others/unicode和utf-8/utf-8.html",
    "revision": "3674571b90d94bfde9f97ec6729ace06"
  },
  {
    "url": "others/web安全.html",
    "revision": "4b2141bd93fc6632f8827e8162eeb124"
  },
  {
    "url": "others/待整理的.html",
    "revision": "d8bf05944e245e8fd00084affbc316c5"
  },
  {
    "url": "others/跨域问题.html",
    "revision": "45b4932e2f8d18e2fac7153ae002c4fa"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "1ab654cb4477423fd5159b86c257e602"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "5d83f21cad97de4daf1e15fd99f819ad"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "f9c5a24bb3dd42807e6471043b6f2730"
  },
  {
    "url": "tools/typora快捷键.html",
    "revision": "e8bd014e5d697931320be075d95bde92"
  },
  {
    "url": "tools/webstorm/创建宏.html",
    "revision": "20badacdaa17730671645e873d6e1bd6"
  },
  {
    "url": "tools/webstorm/快捷键.html",
    "revision": "f158601b93c0c131ca250a4fad6af7dd"
  },
  {
    "url": "tools/yarn.html",
    "revision": "16cea848d3b120f99fc516d497cd0e1b"
  },
  {
    "url": "tools/yed-graph-editor快捷键.html",
    "revision": "0a2eb47d6f64a247003343c23542eb0e"
  },
  {
    "url": "tools/版本管理工具-git/基础.html",
    "revision": "f013bf7d4d47d84a4077ad70fa4c43db"
  },
  {
    "url": "tools/版本管理工具-git/需要掌握的.html",
    "revision": "67d162412df8b8b4970f8621235444b4"
  },
  {
    "url": "脚手架工具/browserslist.html",
    "revision": "eeadb7fc3b1eca314983e66dc2ca8188"
  },
  {
    "url": "脚手架工具/eslint/01-安装.html",
    "revision": "3a42ce4357f96f6b81839e4528f262f6"
  },
  {
    "url": "脚手架工具/eslint/02-使用.html",
    "revision": "585c1e33d69b726872d971a18a863756"
  },
  {
    "url": "脚手架工具/eslint/03-vue开发通用的配置.html",
    "revision": "cf2b465bf8a2d9d79b3bb5f56cf94e33"
  },
  {
    "url": "脚手架工具/eslint/04-配合husky与lint-staged.html",
    "revision": "1582fcc7339df79420d4d851730674d0"
  },
  {
    "url": "脚手架工具/eslint/05-@babel下的eslint-parser.html",
    "revision": "2511853d9e4b0a5eaf4c0f7b548a26d8"
  },
  {
    "url": "脚手架工具/umd模块打包方法.html",
    "revision": "2dac30c1f471542041766bd8bcf73a3d"
  },
  {
    "url": "脚手架工具/vue-cli/01-基本配置.html",
    "revision": "413b7294d431f2af4da87f49a52b0e53"
  },
  {
    "url": "脚手架工具/vue-cli/02-loader.html",
    "revision": "5c23b69eef494171b2ae144ccc0b3831"
  },
  {
    "url": "脚手架工具/vue-cli/03-plugin.html",
    "revision": "7f367efd47eca21b095031d1bb0ff20e"
  },
  {
    "url": "脚手架工具/vue-cli/env.html",
    "revision": "1c346fa1b133d6e769e5b9965dea45fb"
  },
  {
    "url": "脚手架工具/vue-cli/loader之image-webpack-loader.html",
    "revision": "353c6dc4132c7f0a764b434b7a595dfd"
  },
  {
    "url": "脚手架工具/vue-cli/others.html",
    "revision": "c0d1efa7502b930e526875456f61cd3e"
  },
  {
    "url": "脚手架工具/vue-cli/webpack-chain.html",
    "revision": "90cb7c947f8e6d618e58f97a73325bb6"
  },
  {
    "url": "脚手架工具/vue-cli/新增webpack配置.html",
    "revision": "f5e78434b137aa4a7a2531f5de3ef838"
  },
  {
    "url": "脚手架工具/vue-cli/查看webpack配置.html",
    "revision": "063b7b7fac296afbb1dfa5c40e1ab1c4"
  },
  {
    "url": "脚手架工具/vue-cli/配置sass.html",
    "revision": "2a0571166f17fa43b5b00e15592c0676"
  },
  {
    "url": "脚手架工具/vue-cli/配置svg.html",
    "revision": "bddf9cb20b277d25cea6dfffea958cfc"
  },
  {
    "url": "脚手架工具/vuepress.html",
    "revision": "a2741acc51a68ce4e93a6534832f7bb3"
  },
  {
    "url": "脚手架工具/webpack/01-entry.html",
    "revision": "b0784c095fbb84383ee7a9840b8e32b2"
  },
  {
    "url": "脚手架工具/webpack/02-output.html",
    "revision": "a4a74099217c3e6769b3611e99861651"
  },
  {
    "url": "脚手架工具/webpack/03-plugin.html",
    "revision": "565b850b95efd33760a8f430ad18a35a"
  },
  {
    "url": "脚手架工具/webpack/04-module.html",
    "revision": "1b00b83db47b227b69d0f23ee618000f"
  },
  {
    "url": "脚手架工具/webpack/05-resolve.html",
    "revision": "bef543d95b4b016bb26b210c96a2fb92"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/others.html",
    "revision": "ca0c0fef165ec129fd977f6c7213f943"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/splitChunks.html",
    "revision": "e89d2b30158cefb1b9ba6430907090c6"
  },
  {
    "url": "脚手架工具/webpack/07-其他配置.html",
    "revision": "5dcbaa365b9e97a203babd10beb172c5"
  },
  {
    "url": "脚手架工具/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "eca2eab01ed2bc6d3ae80b42aee43ef5"
  },
  {
    "url": "脚手架工具/webpack/others.html",
    "revision": "b5e99af568131aa9ce6980f0e049b48c"
  },
  {
    "url": "脚手架工具/webpack/webpack之devtool .html",
    "revision": "19ce9f04f408a5470b67ab067878b73a"
  },
  {
    "url": "脚手架工具/webpack/webpack之hash.html",
    "revision": "dd8cc90138d05ed0ec6b0e29eeb81a7f"
  },
  {
    "url": "脚手架工具/webpack/webpack之magic-comments.html",
    "revision": "43cadaa86a515c1e79535e2f34f1ba21"
  },
  {
    "url": "脚手架工具/webpack/webpack之runtime与manifest.html",
    "revision": "5c4991e684f243d969e4a1f87854d4ba"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理commonjs.html",
    "revision": "4b8ce6d8fef9f60b09af7a0cd07572c4"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理esmodule.html",
    "revision": "72f9e3e1d6e57aa5d2e8d5884f28333e"
  },
  {
    "url": "脚手架工具/webpack/webpack之模块路径解析规则.html",
    "revision": "e944b4e2bbf2b5d50c92c195f136ad19"
  },
  {
    "url": "脚手架工具/webpack/模块方法之requireContext.html",
    "revision": "ca7d05d8d917a3c46c94304ae7e1aa33"
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
