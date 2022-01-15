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
    "revision": "5ca597b378cc216255c64e6855bd4d0d"
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
    "url": "assets/js/12.ce47eac4.js",
    "revision": "d88b6740d351a0600df5d9d15f8b6982"
  },
  {
    "url": "assets/js/13.711384ca.js",
    "revision": "5888b0188be46ac64aa916cee1ba5a16"
  },
  {
    "url": "assets/js/14.280ffc63.js",
    "revision": "7f8e9c4e88c195983e68d989cdcdbf6e"
  },
  {
    "url": "assets/js/15.d6a085a4.js",
    "revision": "166ae752e843c87648549456303b24c3"
  },
  {
    "url": "assets/js/16.4f2cc6f0.js",
    "revision": "611b7ba0418bd22b5afab03115361ad5"
  },
  {
    "url": "assets/js/17.350b4d83.js",
    "revision": "6c388e213816545adf7b217432ccdaee"
  },
  {
    "url": "assets/js/18.4500280b.js",
    "revision": "0d4999d3662a61cd3d51cff02b33e350"
  },
  {
    "url": "assets/js/19.3c18b71c.js",
    "revision": "0eb56d5ee392fc4a0a19bf813ed52377"
  },
  {
    "url": "assets/js/20.6f9c601e.js",
    "revision": "b3195dacc8fe80775858b857585a7140"
  },
  {
    "url": "assets/js/21.7d49ce87.js",
    "revision": "b7881a14c5dfa6965b205f500b017b32"
  },
  {
    "url": "assets/js/22.a2ad62db.js",
    "revision": "d8d70829786222c3e08f805004b0276e"
  },
  {
    "url": "assets/js/23.6c385c6d.js",
    "revision": "7d71fecfa3a62a73a873e95119a0e41e"
  },
  {
    "url": "assets/js/24.7f8882df.js",
    "revision": "36e7658131d1297b1e8c08bd314ffd74"
  },
  {
    "url": "assets/js/25.ea5db199.js",
    "revision": "9d78fab66e288639d6acfa73b0f584c2"
  },
  {
    "url": "assets/js/26.77dd46d0.js",
    "revision": "332db6909caf9ec90b39ed56571ce6db"
  },
  {
    "url": "assets/js/27.e2d9326a.js",
    "revision": "6b8204d55ec96be3f9e4027df301dbec"
  },
  {
    "url": "assets/js/28.8c47649f.js",
    "revision": "94eae56f9aa9d5f8deef75ad76db434b"
  },
  {
    "url": "assets/js/29.a467cdc9.js",
    "revision": "a873b7063a89ec6ed442c8bc813bf917"
  },
  {
    "url": "assets/js/3.4916305c.js",
    "revision": "352d07e8935c62253eae419c89c4ada3"
  },
  {
    "url": "assets/js/30.03993e37.js",
    "revision": "344382c214e5fddf9b2ff9f5f4b3a77d"
  },
  {
    "url": "assets/js/31.61af258c.js",
    "revision": "58087d74099422ff94deb6b2c24e10d4"
  },
  {
    "url": "assets/js/32.019bbcd8.js",
    "revision": "6f44efb9450898c75f751148cae641a7"
  },
  {
    "url": "assets/js/33.48591f30.js",
    "revision": "780244b55a4e59f3541ec185473ee172"
  },
  {
    "url": "assets/js/34.91c37571.js",
    "revision": "c3a17e8caba1e1e7349742ca0ae1701a"
  },
  {
    "url": "assets/js/35.1ffe3f49.js",
    "revision": "10aea2b1c62296e568d9b53dfa8ebebf"
  },
  {
    "url": "assets/js/36.d8da1f1c.js",
    "revision": "aa92dacc3f229525af00944883ed9929"
  },
  {
    "url": "assets/js/37.c7e3a7dc.js",
    "revision": "c4ba6c6f38b4a3da640c44dc8013a39f"
  },
  {
    "url": "assets/js/38.7c674f86.js",
    "revision": "ba3b47045b515cef150e9eda16b3d906"
  },
  {
    "url": "assets/js/39.a7524a3f.js",
    "revision": "05cbba9ab081246a5ca143b3fddd88c0"
  },
  {
    "url": "assets/js/40.5c0a0fc4.js",
    "revision": "38d1754f45f1cb564cb9fd65a7998ecd"
  },
  {
    "url": "assets/js/41.9c2c78a3.js",
    "revision": "4387aa55537b5e4f5b8cde72ee5432b8"
  },
  {
    "url": "assets/js/42.cb745b4b.js",
    "revision": "e6cbfc3ab7617ce5f3a6f24a0595e01c"
  },
  {
    "url": "assets/js/43.3e00434a.js",
    "revision": "a40edc3594f0f82a1a2db48145f73961"
  },
  {
    "url": "assets/js/44.50c8ec38.js",
    "revision": "2c59f3d76ab1d6399d7d02000b49dad5"
  },
  {
    "url": "assets/js/45.0ff19b45.js",
    "revision": "96bd8a2d9f706aa0d22bcfb95b2869d3"
  },
  {
    "url": "assets/js/46.ecae893b.js",
    "revision": "f34434823682ada0d2368847b3e93301"
  },
  {
    "url": "assets/js/47.2d6af6a8.js",
    "revision": "cc36b06bf646ddd9f121b3c2bbe40396"
  },
  {
    "url": "assets/js/48.3fce422d.js",
    "revision": "9a962b5fb2f5643205a2852b92b04b43"
  },
  {
    "url": "assets/js/49.f6aa6bcb.js",
    "revision": "7303d3a9fffb934720e8dd89e97be6a9"
  },
  {
    "url": "assets/js/5.11d1042b.js",
    "revision": "4442c438bc0eec73b1e55820a47cf5a8"
  },
  {
    "url": "assets/js/50.74500b88.js",
    "revision": "638500f34207fed03a00c5802b56c7d5"
  },
  {
    "url": "assets/js/51.d952e51a.js",
    "revision": "f5d0b3daf17a8e2d945551e1e55e0949"
  },
  {
    "url": "assets/js/52.83514d24.js",
    "revision": "8f06a2b1b9ca465942e25ce5d4198321"
  },
  {
    "url": "assets/js/53.2beb2473.js",
    "revision": "df117a041f9a97803eec2a552595ce86"
  },
  {
    "url": "assets/js/54.c960f8f1.js",
    "revision": "ce43f4bc0dde725237ee7c400cc86f52"
  },
  {
    "url": "assets/js/55.9da2887e.js",
    "revision": "5e4fad1c6b17b88a88b975783d9757f2"
  },
  {
    "url": "assets/js/56.399d8f44.js",
    "revision": "efdad71a400142c0fc2230b54f082255"
  },
  {
    "url": "assets/js/57.43987da9.js",
    "revision": "d9071609cc7c96db66df76ecefc2a8bb"
  },
  {
    "url": "assets/js/58.269e3444.js",
    "revision": "291c5026fafd5dc1fb85d23d79d9bed1"
  },
  {
    "url": "assets/js/59.8e99466c.js",
    "revision": "b757a328b7ff771ca19a75eddd35bcb9"
  },
  {
    "url": "assets/js/6.df4256c7.js",
    "revision": "19eec47d693ddd62f23093317173b031"
  },
  {
    "url": "assets/js/60.ff0ce336.js",
    "revision": "c62b8dca6f7e115981ca1dc9ece9aa6f"
  },
  {
    "url": "assets/js/61.18e99d2c.js",
    "revision": "3cfe18cd6bc9a903e314d29a54ad4a3c"
  },
  {
    "url": "assets/js/62.0608f75f.js",
    "revision": "e27706052ea2e786a3ccdb3dc9b57347"
  },
  {
    "url": "assets/js/63.5171f16f.js",
    "revision": "9f098a84bdce05bce2ffaa01f0526477"
  },
  {
    "url": "assets/js/64.cc30eda2.js",
    "revision": "48f26f99646143624f3b7544941dbf6c"
  },
  {
    "url": "assets/js/65.aa736142.js",
    "revision": "f5b58af42b11c5ff642a35267bb18d1a"
  },
  {
    "url": "assets/js/66.caf27640.js",
    "revision": "46fc6ec44b73311aa1625408f3a02b02"
  },
  {
    "url": "assets/js/67.60714780.js",
    "revision": "c5c0463dae0180a3caf282409af26ed0"
  },
  {
    "url": "assets/js/68.31ffabb5.js",
    "revision": "1b17c2e396250e100ceedaccdd0eafb8"
  },
  {
    "url": "assets/js/69.e652b6a4.js",
    "revision": "18c270c21e392275206b2fdb28ff7f22"
  },
  {
    "url": "assets/js/70.3704a3fe.js",
    "revision": "9c96292b8be8dea8362810bd95398108"
  },
  {
    "url": "assets/js/71.f46daa31.js",
    "revision": "677a0028385fc0b51da30a106251913a"
  },
  {
    "url": "assets/js/72.441fc738.js",
    "revision": "840ab95bddb67a35a838f0d432518e1c"
  },
  {
    "url": "assets/js/73.c1e6ff46.js",
    "revision": "985f8fbcc3651ae65376b7a481af12c9"
  },
  {
    "url": "assets/js/8.0c4ee436.js",
    "revision": "55f94fa26ff75dd91327aab19c38510a"
  },
  {
    "url": "assets/js/app.a2ab3e57.js",
    "revision": "5ac8dee459dfd42401e7172519993f38"
  },
  {
    "url": "assets/js/chunk-default.327149c2.js",
    "revision": "444ebee861b0c5bf9d4937909f5d71af"
  },
  {
    "url": "assets/js/chunk-vuepress-dev.7bed4209.js",
    "revision": "d9ba86aca85e9810eae6e59468d668c5"
  },
  {
    "url": "assets/js/chunk-vuepress.068e7f18.js",
    "revision": "07e89bc51e837506344e0b75cca129fc"
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
    "revision": "70990b7aa727afe225660e0e4c733972"
  },
  {
    "url": "css/reset.html",
    "revision": "abf8c6a40d959187d865c906c1b1ffab"
  },
  {
    "url": "css/scrollBar.html",
    "revision": "8a25c452d78ec179cf289edcf1bf6694"
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
    "revision": "b4ae98382638f2e98590594e5b0a56e0"
  },
  {
    "url": "javascript/bom/Navigator.sendBeacon.html",
    "revision": "10adfcae5a0f441bd9a5d6222597dbd3"
  },
  {
    "url": "javascript/bom/sessionStorage.html",
    "revision": "eeca96689663c9d3ce413cc00a228e05"
  },
  {
    "url": "javascript/dom/api-drag.html",
    "revision": "59e0868fe65fc9ae5bbe4bc3a496be1b"
  },
  {
    "url": "javascript/dom/defer与async.html",
    "revision": "001f730f382ee8461d63d0e369159144"
  },
  {
    "url": "javascript/dom/preload与prefetch.html",
    "revision": "528bd15a8acf72e3dda4fc1877dca350"
  },
  {
    "url": "javascript/ESM与现代浏览器.html",
    "revision": "c2d8bd359fc158dc19bd6ec42e04cb9b"
  },
  {
    "url": "javascript/微任务宏任务执行顺序.html",
    "revision": "41829c621d3dbb6f7ffe7a26384ad162"
  },
  {
    "url": "others/interview/a == 1 && a == 2 && a == 3.html",
    "revision": "818cb167519a0cff1f84f99b23829343"
  },
  {
    "url": "others/interview/遍历的异步写法.html",
    "revision": "9fc2ca79e45d53367296c6643a748c90"
  },
  {
    "url": "others/JSON.html",
    "revision": "d4b05d72557eda9e9f9ecff5d41cb634"
  },
  {
    "url": "others/unicode和utf-8/unicode.html",
    "revision": "bb7b7a9e688b615d0c3ccd5a231542d3"
  },
  {
    "url": "others/unicode和utf-8/utf-8.html",
    "revision": "a360e016dc30888cc9dc8f2efb9973ae"
  },
  {
    "url": "others/web安全.html",
    "revision": "af797c998b1bf2c905ca7ac8930f4ec0"
  },
  {
    "url": "others/待整理的.html",
    "revision": "a5d8aae1e75e79df732f04bf4b7c1a5a"
  },
  {
    "url": "others/跨域问题.html",
    "revision": "90502c3d555c4039b6a413682eb2db8b"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "a609fa9dfcf74eb89a560b19b9cac8b9"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "59bed8246c383ab3267761562a3de7ec"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "5252ddb2f0e2874c6db5cfac832a3873"
  },
  {
    "url": "tools/typora快捷键.html",
    "revision": "c96addee7d315de9cd0cdb95c2f11178"
  },
  {
    "url": "tools/webstorm/创建宏.html",
    "revision": "28c719f7ac740d97b06411d5736857b9"
  },
  {
    "url": "tools/webstorm/快捷键.html",
    "revision": "d0054dd358561c2b7bc424d85d621003"
  },
  {
    "url": "tools/yarn.html",
    "revision": "3d8e6529e087c83c586625ed515241ef"
  },
  {
    "url": "tools/yed-graph-editor快捷键.html",
    "revision": "3d03dbd7ed2d5528d62651b302aae580"
  },
  {
    "url": "tools/版本管理工具-git/基础.html",
    "revision": "36aaceaf5f3235b23fd4923ea88da940"
  },
  {
    "url": "tools/版本管理工具-git/需要掌握的.html",
    "revision": "23193c5b63fcb668672c056d269b7fc2"
  },
  {
    "url": "脚手架工具/browserslist.html",
    "revision": "15990b5500104471213c732a5c2f3b9d"
  },
  {
    "url": "脚手架工具/eslint/01-安装.html",
    "revision": "26463a43c23368edb9e5cb51625dd62e"
  },
  {
    "url": "脚手架工具/eslint/02-使用.html",
    "revision": "8fe9bc15b3bd856b5a61eef6f274b510"
  },
  {
    "url": "脚手架工具/eslint/03-vue开发通用的配置.html",
    "revision": "3736b288882811bd4cd61b9fe5a4f111"
  },
  {
    "url": "脚手架工具/eslint/04-配合husky与lint-staged.html",
    "revision": "ef37ef8b04622eca5cf5c6e406ff6a70"
  },
  {
    "url": "脚手架工具/eslint/05-@babel下的eslint-parser.html",
    "revision": "41fc850953f96e2683ca0fcb35e5e0be"
  },
  {
    "url": "脚手架工具/umd模块打包方法.html",
    "revision": "e4d998bde1e8dc8c071d53db91059f0e"
  },
  {
    "url": "脚手架工具/vue-cli/01-基本配置.html",
    "revision": "151857063d5d92fb38c77ffb9450ea1e"
  },
  {
    "url": "脚手架工具/vue-cli/02-loader.html",
    "revision": "d4422c18737e20ed569beb450890bb69"
  },
  {
    "url": "脚手架工具/vue-cli/03-plugin.html",
    "revision": "f23027890ccd43524a41aad3f2b1da04"
  },
  {
    "url": "脚手架工具/vue-cli/env.html",
    "revision": "2bd50026c4553357eafa8054fe785daa"
  },
  {
    "url": "脚手架工具/vue-cli/loader之image-webpack-loader.html",
    "revision": "5b4c7dd4201dcd89e8335351e992dac6"
  },
  {
    "url": "脚手架工具/vue-cli/others.html",
    "revision": "3597f7ac4a258e0e8df9bde50676d0a8"
  },
  {
    "url": "脚手架工具/vue-cli/webpack-chain.html",
    "revision": "c3c96d09ca25ce05f5548f92300627fb"
  },
  {
    "url": "脚手架工具/vue-cli/新增webpack配置.html",
    "revision": "eeec98170b900ace97710318b45993e5"
  },
  {
    "url": "脚手架工具/vue-cli/查看webpack配置.html",
    "revision": "a1c4d1ada30073c3e07e7e03ab9ae6c9"
  },
  {
    "url": "脚手架工具/vue-cli/配置sass.html",
    "revision": "a310b5f0e9552bae8bc75a19db65881e"
  },
  {
    "url": "脚手架工具/vue-cli/配置svg.html",
    "revision": "1d6232b00e6e36c754120428b1073401"
  },
  {
    "url": "脚手架工具/vuepress.html",
    "revision": "0a96ec81508e21b187824818db27dfaf"
  },
  {
    "url": "脚手架工具/webpack/01-entry.html",
    "revision": "37962eb0fc16eb555be3d856a0e7f7b2"
  },
  {
    "url": "脚手架工具/webpack/02-output.html",
    "revision": "622da46c4a75f9bdfcf1b214053f67f8"
  },
  {
    "url": "脚手架工具/webpack/03-plugin.html",
    "revision": "ef26f6cbecf508889b7e61f9f297d953"
  },
  {
    "url": "脚手架工具/webpack/04-module.html",
    "revision": "0d4c5f83ed539a3b80598ef08106d004"
  },
  {
    "url": "脚手架工具/webpack/05-resolve.html",
    "revision": "6c94fe24b21448048dbc479e09e35815"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/others.html",
    "revision": "ba35fdae0358e1dfd4eb8b4cc0e742a8"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/splitChunks.html",
    "revision": "c48eb96cc6bd0bb2f58bfa2eb06af395"
  },
  {
    "url": "脚手架工具/webpack/07-其他配置.html",
    "revision": "4678061599b58eed84643f4feaa141ed"
  },
  {
    "url": "脚手架工具/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "c6b1cb538305d10167f640f1c9073bab"
  },
  {
    "url": "脚手架工具/webpack/others.html",
    "revision": "7cf84a4d91e471ce348963c2691aef6f"
  },
  {
    "url": "脚手架工具/webpack/webpack之devtool .html",
    "revision": "04c5d993c71043e2a0a3daa2a6e82626"
  },
  {
    "url": "脚手架工具/webpack/webpack之hash.html",
    "revision": "1679f0c7a11734bb3ac2db0bafed588c"
  },
  {
    "url": "脚手架工具/webpack/webpack之magic-comments.html",
    "revision": "37a6786604183d823f2bbf885d1ff7f4"
  },
  {
    "url": "脚手架工具/webpack/webpack之runtime与manifest.html",
    "revision": "667f12f4eefa2bbdf92002a506f7bbf0"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理commonjs.html",
    "revision": "010f075ef5b2cc3128c0ea02fccb99fc"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理esmodule.html",
    "revision": "4c38dd5dfca1d3ff42f05393a6bf86b5"
  },
  {
    "url": "脚手架工具/webpack/webpack之模块路径解析规则.html",
    "revision": "6dd9182897f0aef887cbfc9d90c3a3c0"
  },
  {
    "url": "脚手架工具/webpack/模块方法之requireContext.html",
    "revision": "033ea65d39b353fd018ffb6600ad929a"
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
