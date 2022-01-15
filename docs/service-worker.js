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
    "revision": "97205d1d0d19ffe61b6a64709f6b5e3c"
  },
  {
    "url": "assets/css/0.styles.b6cc9d51.css",
    "revision": "f68fe41811e4f2f4e453ea12c1d2d669"
  },
  {
    "url": "assets/css/1.styles.eac5093d.css",
    "revision": "169d6f7b23b70d80f3e60a762b518dd4"
  },
  {
    "url": "assets/css/6.styles.1cf475e5.css",
    "revision": "4dfd954af9da41878ca5b77c1ec7d6f2"
  },
  {
    "url": "assets/css/9.styles.02698b1b.css",
    "revision": "af916296c15e5e41449e91485aea9e81"
  },
  {
    "url": "assets/css/styles.2f8f6c2a.css",
    "revision": "7b8f3536705bedfe29b78a7423bdf8c0"
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
    "url": "assets/js/1.5eb589ec.js",
    "revision": "4a3d17c27c249572172ccd995b7ae76c"
  },
  {
    "url": "assets/js/10.41978583.js",
    "revision": "15f3cd5568977f7f635937d58e49bb64"
  },
  {
    "url": "assets/js/11.1dfa9970.js",
    "revision": "549b314a5e0e26414298620b649a55be"
  },
  {
    "url": "assets/js/12.228e382f.js",
    "revision": "d88b6740d351a0600df5d9d15f8b6982"
  },
  {
    "url": "assets/js/13.2cf0569a.js",
    "revision": "5888b0188be46ac64aa916cee1ba5a16"
  },
  {
    "url": "assets/js/14.7232ff75.js",
    "revision": "d906984b96107f5fd86005da59907a0d"
  },
  {
    "url": "assets/js/15.3fe9ef58.js",
    "revision": "154908e9e9fcc8cc2415d9b5d6d963ea"
  },
  {
    "url": "assets/js/16.441f5415.js",
    "revision": "b51b38282dfff4839430821275cb04d4"
  },
  {
    "url": "assets/js/17.9d120861.js",
    "revision": "6c388e213816545adf7b217432ccdaee"
  },
  {
    "url": "assets/js/18.dc4ee032.js",
    "revision": "0d4999d3662a61cd3d51cff02b33e350"
  },
  {
    "url": "assets/js/19.91ee73b9.js",
    "revision": "5df650607f0ef58e46941250c4406166"
  },
  {
    "url": "assets/js/20.a4018906.js",
    "revision": "cbc9be4dff54d6f58efeb308fd913e7a"
  },
  {
    "url": "assets/js/21.db82d844.js",
    "revision": "5c12487ae25d1ab1a0866cf9322486ff"
  },
  {
    "url": "assets/js/22.ac2ce070.js",
    "revision": "ffaf3448de2736626e6fff837c16d0a1"
  },
  {
    "url": "assets/js/23.bb3ee9d2.js",
    "revision": "7d71fecfa3a62a73a873e95119a0e41e"
  },
  {
    "url": "assets/js/24.224f99d5.js",
    "revision": "36e7658131d1297b1e8c08bd314ffd74"
  },
  {
    "url": "assets/js/25.8e1ac443.js",
    "revision": "3f5aef395af91c0431ba3ee9bce722cf"
  },
  {
    "url": "assets/js/26.4ea26885.js",
    "revision": "332db6909caf9ec90b39ed56571ce6db"
  },
  {
    "url": "assets/js/27.0388b6db.js",
    "revision": "6b8204d55ec96be3f9e4027df301dbec"
  },
  {
    "url": "assets/js/28.97f4cc89.js",
    "revision": "94eae56f9aa9d5f8deef75ad76db434b"
  },
  {
    "url": "assets/js/29.29237230.js",
    "revision": "33aa6a4ed42150593e43e81fd009fd5e"
  },
  {
    "url": "assets/js/3.5e766cde.js",
    "revision": "be46c714396480643f66ae2aa221f56e"
  },
  {
    "url": "assets/js/30.e6b94dcc.js",
    "revision": "344382c214e5fddf9b2ff9f5f4b3a77d"
  },
  {
    "url": "assets/js/31.4166ccda.js",
    "revision": "58087d74099422ff94deb6b2c24e10d4"
  },
  {
    "url": "assets/js/32.4331b1d5.js",
    "revision": "41b6354732e2645117014a5ce847ce15"
  },
  {
    "url": "assets/js/33.2f58c6dc.js",
    "revision": "54e4f74e72a4ee0e557400b70b5681eb"
  },
  {
    "url": "assets/js/34.596f16b8.js",
    "revision": "327f88536e7a9227f5800653c75441e8"
  },
  {
    "url": "assets/js/35.7a2266ce.js",
    "revision": "10aea2b1c62296e568d9b53dfa8ebebf"
  },
  {
    "url": "assets/js/36.d6ebfafb.js",
    "revision": "aa92dacc3f229525af00944883ed9929"
  },
  {
    "url": "assets/js/37.528def3f.js",
    "revision": "3cebf16c33fddae77517700dde14c7a7"
  },
  {
    "url": "assets/js/38.1f0ed4eb.js",
    "revision": "ba3b47045b515cef150e9eda16b3d906"
  },
  {
    "url": "assets/js/39.a65f7dec.js",
    "revision": "b7833e305dad4a936de144dd523c262d"
  },
  {
    "url": "assets/js/40.8a8e5a96.js",
    "revision": "55078eaccd030b8be6dceb8172b0bb36"
  },
  {
    "url": "assets/js/41.62a6ae33.js",
    "revision": "59930bed243560f15c2f83bc7ab445f7"
  },
  {
    "url": "assets/js/42.1da9931a.js",
    "revision": "cf7b9e5c62e2cf310d4523181dee4106"
  },
  {
    "url": "assets/js/43.e8090548.js",
    "revision": "44aa38453c2cf3b6c659d6f83bb59962"
  },
  {
    "url": "assets/js/44.ba41bfa9.js",
    "revision": "d1aaec6801fb35af92e42ed62277d08d"
  },
  {
    "url": "assets/js/45.edf2835a.js",
    "revision": "961f03875e777588def988a0067816b6"
  },
  {
    "url": "assets/js/46.454a139e.js",
    "revision": "f34434823682ada0d2368847b3e93301"
  },
  {
    "url": "assets/js/47.281413d1.js",
    "revision": "cc36b06bf646ddd9f121b3c2bbe40396"
  },
  {
    "url": "assets/js/48.2f239f29.js",
    "revision": "9a962b5fb2f5643205a2852b92b04b43"
  },
  {
    "url": "assets/js/49.a531b8b5.js",
    "revision": "7303d3a9fffb934720e8dd89e97be6a9"
  },
  {
    "url": "assets/js/5.d8eea166.js",
    "revision": "168f873133f37cfb3b5d42314c8099da"
  },
  {
    "url": "assets/js/50.c5f59070.js",
    "revision": "08399e99e93a5dbe6d0ada1d576feb21"
  },
  {
    "url": "assets/js/51.b1312efc.js",
    "revision": "ee87b33057ac865f937527447254b770"
  },
  {
    "url": "assets/js/52.0184c5d1.js",
    "revision": "8f06a2b1b9ca465942e25ce5d4198321"
  },
  {
    "url": "assets/js/53.f30d9ccf.js",
    "revision": "df117a041f9a97803eec2a552595ce86"
  },
  {
    "url": "assets/js/54.70913b42.js",
    "revision": "4b1accf7f0d3158d82283ab9bb2feff4"
  },
  {
    "url": "assets/js/55.3f2885fc.js",
    "revision": "5e4fad1c6b17b88a88b975783d9757f2"
  },
  {
    "url": "assets/js/56.96ffcbcc.js",
    "revision": "84a707485ac8dd83a938a67ffe77c44b"
  },
  {
    "url": "assets/js/57.fddf9f81.js",
    "revision": "dff5a5ca35c6dfffb1d68186a8811305"
  },
  {
    "url": "assets/js/58.0dcd0e40.js",
    "revision": "291c5026fafd5dc1fb85d23d79d9bed1"
  },
  {
    "url": "assets/js/59.1cf0e73c.js",
    "revision": "caa222c145eb5553e3cabe9104cd81ee"
  },
  {
    "url": "assets/js/6.3c5be236.js",
    "revision": "11baa74c15fe3569df80a2969f7977ab"
  },
  {
    "url": "assets/js/60.2c8fd63d.js",
    "revision": "c62b8dca6f7e115981ca1dc9ece9aa6f"
  },
  {
    "url": "assets/js/61.314e1203.js",
    "revision": "71fc71589ce31972eb3ea988765cd7f0"
  },
  {
    "url": "assets/js/62.fc837099.js",
    "revision": "3412ff4665e7f872e9a6c4f0db1bbe55"
  },
  {
    "url": "assets/js/63.6838f85f.js",
    "revision": "6f8fbc5c0d5c50d2dc646446e270c512"
  },
  {
    "url": "assets/js/64.0b9d81a4.js",
    "revision": "98b6f9ce8d6faf0a368e8e172f8c7d98"
  },
  {
    "url": "assets/js/65.8a8a1587.js",
    "revision": "3ba53d2c6b9b706379d46084fd71789e"
  },
  {
    "url": "assets/js/66.d6795dc8.js",
    "revision": "c229add1fd1e412431a1f9e8e153b590"
  },
  {
    "url": "assets/js/67.c81fcc6c.js",
    "revision": "63d0d8ec91cb6218d8ee9674f5c6187c"
  },
  {
    "url": "assets/js/68.c3f659bc.js",
    "revision": "1b17c2e396250e100ceedaccdd0eafb8"
  },
  {
    "url": "assets/js/69.bfdc08da.js",
    "revision": "18c270c21e392275206b2fdb28ff7f22"
  },
  {
    "url": "assets/js/7.a7c59083.js",
    "revision": "7c589c8109a2d2c4e4f63907e6382b98"
  },
  {
    "url": "assets/js/70.65737223.js",
    "revision": "546d9daa5cd50686ecd3a83b302de9e6"
  },
  {
    "url": "assets/js/71.14b7a609.js",
    "revision": "b61e6e2435da069d0d3b677943628c2d"
  },
  {
    "url": "assets/js/72.a9847fea.js",
    "revision": "76cd0cd80dcc6a4df98762fe30b5d065"
  },
  {
    "url": "assets/js/73.f2514363.js",
    "revision": "2669ab87dd452fa48f0d68958999420e"
  },
  {
    "url": "assets/js/74.4e62dbee.js",
    "revision": "e591229061769edcb87abfa88193d04e"
  },
  {
    "url": "assets/js/8.d109f3a1.js",
    "revision": "535622ce8973ac7cd3170fab75f93687"
  },
  {
    "url": "assets/js/app.abcebbea.js",
    "revision": "74907774e4ee8dd2a7b45dcd4f741131"
  },
  {
    "url": "assets/js/chunk-default.db4f15f3.js",
    "revision": "6fd1911a42bd2b22e8778c6d9b26c7de"
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
    "revision": "b4b796fa7a6ded4458067c64a85b3ad5"
  },
  {
    "url": "css/reset.html",
    "revision": "0747b4c5a4b92f89fc9f4367035413ad"
  },
  {
    "url": "css/scrollBar.html",
    "revision": "091ac007fdb2b6a7aac41db0342f086f"
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
    "revision": "6406cece7ddfb7076dcb0e7cbdfe9c19"
  },
  {
    "url": "javascript/bom/Navigator.sendBeacon.html",
    "revision": "3653b6e098e9631a62e4dc6b72267784"
  },
  {
    "url": "javascript/bom/sessionStorage.html",
    "revision": "b4767ad7db2ab4d0d827746d9b6e7b3a"
  },
  {
    "url": "javascript/dom/api-drag.html",
    "revision": "a0ccc825e2c2597c6fb31c87f59c4562"
  },
  {
    "url": "javascript/dom/defer与async.html",
    "revision": "4aa56094a408faea7b585a705f302376"
  },
  {
    "url": "javascript/dom/preload与prefetch.html",
    "revision": "6a7cee5e7365e00a72ca7f9d1bbc962b"
  },
  {
    "url": "javascript/ESM与现代浏览器.html",
    "revision": "5faa23b8af5e4bdb71647af0506b6556"
  },
  {
    "url": "javascript/微任务宏任务执行顺序.html",
    "revision": "9678f7ac45719b32a08a89ad29a5e7ad"
  },
  {
    "url": "others/interview/a == 1 && a == 2 && a == 3.html",
    "revision": "cdcd71ade4b4f6d289e836e933d46f5d"
  },
  {
    "url": "others/interview/遍历的异步写法.html",
    "revision": "b643a3b5f5c779afa463a308cd4027cd"
  },
  {
    "url": "others/JSON.html",
    "revision": "800819a3c3e074a6cfd765cd2e5e4345"
  },
  {
    "url": "others/unicode和utf-8/unicode.html",
    "revision": "0fdb2d3427d4e527f71edb212477b7a8"
  },
  {
    "url": "others/unicode和utf-8/utf-8.html",
    "revision": "f728f39257d75af36928b404efe5200f"
  },
  {
    "url": "others/web安全.html",
    "revision": "b45ce7e9131fa6916ade76ec0b946f24"
  },
  {
    "url": "others/待整理的.html",
    "revision": "09fc7e4ae1d983fff165f2dea7b31821"
  },
  {
    "url": "others/跨域问题.html",
    "revision": "6e82cfe6c4cf052f1e374cd6d3e5f438"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "8b30f572d485abe9f1f56f030593bf27"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "653343e5d8ed28a0657af942d26e4e5b"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "05727d01b6b009810a31fadb304328f5"
  },
  {
    "url": "tools/typora快捷键.html",
    "revision": "8ba44eb1291fe353674776231c2a1c6d"
  },
  {
    "url": "tools/webstorm/创建宏.html",
    "revision": "c901943b52c6c736c1feddb478f193db"
  },
  {
    "url": "tools/webstorm/快捷键.html",
    "revision": "355dd7e993a6d797ecb3319b6acceb56"
  },
  {
    "url": "tools/yarn.html",
    "revision": "615164e9d19bdad874abd37d534dcbd3"
  },
  {
    "url": "tools/yed-graph-editor快捷键.html",
    "revision": "a72afc284ac358ec9f16db235eb28e9b"
  },
  {
    "url": "tools/版本管理工具-git/基础.html",
    "revision": "2ae49ce41792ed493fbcdce21e610c99"
  },
  {
    "url": "tools/版本管理工具-git/需要掌握的.html",
    "revision": "09e0dfda60d1fdea6bc8a5fb253ba503"
  },
  {
    "url": "vuepress~app.6831b394.bundle.js",
    "revision": "6327891473fc7e0d8e987b5d93ea7ebe"
  },
  {
    "url": "脚手架工具/browserslist.html",
    "revision": "1411cfe10b8f32c0f572c7b20f1f3425"
  },
  {
    "url": "脚手架工具/eslint/01-安装.html",
    "revision": "50befd25ffd2f6682e674f98002cb851"
  },
  {
    "url": "脚手架工具/eslint/02-使用.html",
    "revision": "e24c5aa3bd3ae8d099465e05437cc70d"
  },
  {
    "url": "脚手架工具/eslint/03-vue开发通用的配置.html",
    "revision": "2c76b63042be52ca1310558c86b0d6e9"
  },
  {
    "url": "脚手架工具/eslint/04-配合husky与lint-staged.html",
    "revision": "fb104551de8322335cf3fd0d1dddb4bb"
  },
  {
    "url": "脚手架工具/eslint/05-@babel下的eslint-parser.html",
    "revision": "575d65a7a4b37620038957135124e029"
  },
  {
    "url": "脚手架工具/umd模块打包方法.html",
    "revision": "d2510bb8bed4a89cb8500a3b54de3be0"
  },
  {
    "url": "脚手架工具/vue-cli/01-基本配置.html",
    "revision": "c4d8609616b3c1026a17e2be07c7adf1"
  },
  {
    "url": "脚手架工具/vue-cli/02-loader.html",
    "revision": "b79d570f4d49331bd3831e761070e729"
  },
  {
    "url": "脚手架工具/vue-cli/03-plugin.html",
    "revision": "e69a8d11965023e229facfe5806ccdac"
  },
  {
    "url": "脚手架工具/vue-cli/env.html",
    "revision": "10389e0fcd059479f68b32fffc9165b6"
  },
  {
    "url": "脚手架工具/vue-cli/loader之image-webpack-loader.html",
    "revision": "2b9d33c36f2fdb6f8b623540be685eed"
  },
  {
    "url": "脚手架工具/vue-cli/others.html",
    "revision": "c5464792809b43214b7c148e7b6daff4"
  },
  {
    "url": "脚手架工具/vue-cli/webpack-chain.html",
    "revision": "fddcb5fb957bd74e002f838efea46b65"
  },
  {
    "url": "脚手架工具/vue-cli/新增webpack配置.html",
    "revision": "47c1514bfcd6ce2cd82f72fa38e8e49c"
  },
  {
    "url": "脚手架工具/vue-cli/查看webpack配置.html",
    "revision": "41e696b4486e8e78e74bf52efc6b2fc5"
  },
  {
    "url": "脚手架工具/vue-cli/配置sass.html",
    "revision": "38dd8c9d065e33f815074f66985fe88f"
  },
  {
    "url": "脚手架工具/vue-cli/配置svg.html",
    "revision": "9d00c18d5c631d438ba85f81b7970270"
  },
  {
    "url": "脚手架工具/vuepress.html",
    "revision": "cfe464c6a4129f9578a10d96398d453d"
  },
  {
    "url": "脚手架工具/webpack/01-entry.html",
    "revision": "925098ca39e6afd194cd611b95fa75cf"
  },
  {
    "url": "脚手架工具/webpack/02-output.html",
    "revision": "5e4c6ed416d897987bcced080041b92f"
  },
  {
    "url": "脚手架工具/webpack/03-plugin.html",
    "revision": "9a9b909a2107d9c88aabfcd4c5af8798"
  },
  {
    "url": "脚手架工具/webpack/04-module.html",
    "revision": "c2cd9f67784315c5ac6b581158694163"
  },
  {
    "url": "脚手架工具/webpack/05-resolve.html",
    "revision": "d45a2dc86ce9283fce28e6e0650a68d8"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/others.html",
    "revision": "d2e946e84286ada532b2804723f52d83"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/splitChunks.html",
    "revision": "fb76339bf4a6228585887b9fbbaf0a04"
  },
  {
    "url": "脚手架工具/webpack/07-其他配置.html",
    "revision": "9d386aa85fef1faf3f227e8e33a7c3c8"
  },
  {
    "url": "脚手架工具/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "da9ef7dd0a6826cf2c08aad953c7b2ba"
  },
  {
    "url": "脚手架工具/webpack/others.html",
    "revision": "f417e6360aeab8e5290bac264dbd124f"
  },
  {
    "url": "脚手架工具/webpack/webpack之devtool .html",
    "revision": "b820da98eff3c918d7a6c4d23eebfa41"
  },
  {
    "url": "脚手架工具/webpack/webpack之hash.html",
    "revision": "84fcc336f082bffb6931a8beb72ef907"
  },
  {
    "url": "脚手架工具/webpack/webpack之magic-comments.html",
    "revision": "b402f57d75f40304d5fc8aead78b6f44"
  },
  {
    "url": "脚手架工具/webpack/webpack之runtime与manifest.html",
    "revision": "8bfcecb261b15fed424bdc3e0b5e1525"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理commonjs.html",
    "revision": "cde727ac509a4aa5b3bc9beaf7147f84"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理esmodule.html",
    "revision": "f2dc2699dc05fd673f2bd109d9e89a74"
  },
  {
    "url": "脚手架工具/webpack/webpack之模块路径解析规则.html",
    "revision": "e80cead05410b283d9b1bbf748134416"
  },
  {
    "url": "脚手架工具/webpack/模块方法之requireContext.html",
    "revision": "4268fb53cae6cb731254844a6cb2efcd"
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
