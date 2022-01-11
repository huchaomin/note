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
    "revision": "936189f039a63501033483fdbc615dd6"
  },
  {
    "url": "assets/css/0.styles.7824a579.css",
    "revision": "a1a61b4839aa7dca227e131dec8f59a0"
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
    "url": "assets/js/10.af25f8db.js",
    "revision": "f3d933484bc338ca4bc902e4401e8a91"
  },
  {
    "url": "assets/js/11.fe42dfd3.js",
    "revision": "fe37482766c2edc545002e560c612a8c"
  },
  {
    "url": "assets/js/12.d8eca574.js",
    "revision": "661271117c32a105ac2fc00838a2ebcb"
  },
  {
    "url": "assets/js/13.77193293.js",
    "revision": "4b3d57891e66041e50d16f2a70fb338b"
  },
  {
    "url": "assets/js/14.b99988d8.js",
    "revision": "5db551817dd020236a96d1766448fdc1"
  },
  {
    "url": "assets/js/15.e0b6a87d.js",
    "revision": "1832992529a5b0eb21ac7e3b03a0e482"
  },
  {
    "url": "assets/js/16.cdeee57d.js",
    "revision": "512ce77ec74649a95440cf67932915a9"
  },
  {
    "url": "assets/js/17.6ef55016.js",
    "revision": "3ed0787a7a7c74d5b06ad8fcb99ee4c9"
  },
  {
    "url": "assets/js/18.2addaf88.js",
    "revision": "b178e6d09a2b0b1525ce6df673e973f4"
  },
  {
    "url": "assets/js/19.3c4b5cf4.js",
    "revision": "f5ce99539fcf97c46d1641a3aebe0150"
  },
  {
    "url": "assets/js/2.36de0bee.js",
    "revision": "92d63ec1d66d9ae7112dd6dcea1dfd74"
  },
  {
    "url": "assets/js/20.cdb17dc3.js",
    "revision": "48e0db83128cddfb4730992e046e87a5"
  },
  {
    "url": "assets/js/21.ae4e626f.js",
    "revision": "a0002bd42d0ac68cae9d1205e2b9cd2d"
  },
  {
    "url": "assets/js/22.ef353017.js",
    "revision": "26604614ae58738029bc9b4a29bc040c"
  },
  {
    "url": "assets/js/23.bce58878.js",
    "revision": "8da394c6238646b89c94b5e396692789"
  },
  {
    "url": "assets/js/24.2d8c62fc.js",
    "revision": "76821fce4747f93a0017c14b19cf0dc7"
  },
  {
    "url": "assets/js/25.6f64c12c.js",
    "revision": "b5bd11ade93c1cc90b9ef5754138c3e2"
  },
  {
    "url": "assets/js/26.08a1ce02.js",
    "revision": "24bfe02051f141cafc4c7a8017af4fb7"
  },
  {
    "url": "assets/js/27.4742e95c.js",
    "revision": "103569a14b0c9ebb7c6e27bc38a62e55"
  },
  {
    "url": "assets/js/28.fd8cc10c.js",
    "revision": "04e8fa3d1b969dd6f62edd009a32e7bc"
  },
  {
    "url": "assets/js/29.847973e1.js",
    "revision": "b8c9002448cc87b88b54db1674e75c90"
  },
  {
    "url": "assets/js/3.ff779900.js",
    "revision": "677b9f4bbdaa9374a654cc0e42b974c9"
  },
  {
    "url": "assets/js/30.70ffe733.js",
    "revision": "574d548e640a8673d929188016b1c417"
  },
  {
    "url": "assets/js/31.6d4987bb.js",
    "revision": "503cb9e0e6df7e08df8ed15d12099c97"
  },
  {
    "url": "assets/js/32.95d88a56.js",
    "revision": "80549806bac52657513f93321d47f104"
  },
  {
    "url": "assets/js/33.4152a726.js",
    "revision": "83948103d7d0bfe6a87cca1d058adecf"
  },
  {
    "url": "assets/js/34.50912b16.js",
    "revision": "0914fe1d906e6b3b6508de0de0859754"
  },
  {
    "url": "assets/js/35.3a0f2fa5.js",
    "revision": "f39788633928305921b52091bb0bf2d8"
  },
  {
    "url": "assets/js/36.e6501949.js",
    "revision": "faae46b676021f743376c53661d3be04"
  },
  {
    "url": "assets/js/37.684b65fc.js",
    "revision": "5872a6fe9f8849bf10793fbebe00f3b0"
  },
  {
    "url": "assets/js/38.f4f89340.js",
    "revision": "3f5cdf86248e2af1039f509936c2dd78"
  },
  {
    "url": "assets/js/39.7cf64a4f.js",
    "revision": "4be4487b18922b3b425fcdbf8fc5c587"
  },
  {
    "url": "assets/js/4.d4339d54.js",
    "revision": "568b91f935745641421e04e9093abc85"
  },
  {
    "url": "assets/js/40.b7bf3703.js",
    "revision": "05ec0144d3fc84248c376eccbce64db2"
  },
  {
    "url": "assets/js/41.524ad1b3.js",
    "revision": "c8a6a7d2f8793a7a974a629fa0ce974f"
  },
  {
    "url": "assets/js/42.b6e4ea54.js",
    "revision": "c7e296684798ecbe37faa63841262c32"
  },
  {
    "url": "assets/js/43.cc47977b.js",
    "revision": "9284682e9bc4b17d363b7e04dd428d20"
  },
  {
    "url": "assets/js/44.38028758.js",
    "revision": "229c4afa1a4d95ae642a8d4ac48970b0"
  },
  {
    "url": "assets/js/45.65f267c5.js",
    "revision": "cfc5f0016c7a8b70331a4372859cce9e"
  },
  {
    "url": "assets/js/46.0df60efe.js",
    "revision": "46c082c55a4ae683b990ec926a64b872"
  },
  {
    "url": "assets/js/47.cf9080e9.js",
    "revision": "f31b339b3fc92ed0a9ad299af6dcf48a"
  },
  {
    "url": "assets/js/48.6f8acf80.js",
    "revision": "463997958ad56e85632c57bd1b92e3f6"
  },
  {
    "url": "assets/js/49.33a0e8b6.js",
    "revision": "4b31d953cf1f1ab1dba70af266dcd3a7"
  },
  {
    "url": "assets/js/5.1557105d.js",
    "revision": "945fa1eae8afbc2ee50751354c4ab438"
  },
  {
    "url": "assets/js/50.f118c964.js",
    "revision": "27c313f6a31c0e3e4c6c23180e0578ce"
  },
  {
    "url": "assets/js/51.67b432b3.js",
    "revision": "929d0cf7ba301270b676a9ac35e51dc6"
  },
  {
    "url": "assets/js/52.746e15d8.js",
    "revision": "e793f82910ef562712d94f4ce40751d8"
  },
  {
    "url": "assets/js/53.3ae81a59.js",
    "revision": "aab939e0231bab3989a43f1d22e12196"
  },
  {
    "url": "assets/js/54.266279f7.js",
    "revision": "2390fbc478b0ef03b6f18a645ccbc878"
  },
  {
    "url": "assets/js/55.5df9900b.js",
    "revision": "5abbbbd2afa89693d29b63a66c490030"
  },
  {
    "url": "assets/js/56.5eba1bd1.js",
    "revision": "dd9e164ac7b60e03061e16e5659d3d73"
  },
  {
    "url": "assets/js/57.3aa6a3c3.js",
    "revision": "ad70028cb76fd545f8218a9d3736ed87"
  },
  {
    "url": "assets/js/58.2dee944c.js",
    "revision": "7c60e948c4551586a6ade43396b1022a"
  },
  {
    "url": "assets/js/59.0910d050.js",
    "revision": "1caa767d06869326204f1e5c300b6d8d"
  },
  {
    "url": "assets/js/6.c374ef02.js",
    "revision": "9d19c5e0ab9781edcb742eee42082f5a"
  },
  {
    "url": "assets/js/60.a49637b1.js",
    "revision": "bcf054c24ae1ad4612ef9ecd96f48e07"
  },
  {
    "url": "assets/js/61.9870fb1c.js",
    "revision": "69185d3b3eeedc2e6c9bcb113932c7eb"
  },
  {
    "url": "assets/js/62.060612bd.js",
    "revision": "c3a545759d72c6d31fbbb7afc5d7a495"
  },
  {
    "url": "assets/js/63.558c3532.js",
    "revision": "a1f55c9fe6b3c4654450951711fb388f"
  },
  {
    "url": "assets/js/64.a67a91f2.js",
    "revision": "52c1f8fd4499fdc5f5674d1bd7d3db5c"
  },
  {
    "url": "assets/js/65.0efe2de2.js",
    "revision": "a55cc0668999bd1ce451668930d5c691"
  },
  {
    "url": "assets/js/66.83c96b05.js",
    "revision": "9e0bca93b3b0e29f358045ae80c72937"
  },
  {
    "url": "assets/js/67.d4ff7b8e.js",
    "revision": "f68c9ea01076cef89dd31861af9446dd"
  },
  {
    "url": "assets/js/68.87faf006.js",
    "revision": "3c9906760e0dcb8088e4cd63761b71c1"
  },
  {
    "url": "assets/js/69.3267a3a0.js",
    "revision": "bbdac09f9b5550d8877dca03864df473"
  },
  {
    "url": "assets/js/7.900f1c96.js",
    "revision": "cd06e3f2540369ebd74565f4219aa06a"
  },
  {
    "url": "assets/js/70.bbd57d18.js",
    "revision": "f83793e0cd05b50daa507348cd6bbcf4"
  },
  {
    "url": "assets/js/71.2491c663.js",
    "revision": "3e67d533fc1254fff638aa150029bc43"
  },
  {
    "url": "assets/js/72.c0fc8fb3.js",
    "revision": "ddb92ae9539033c7a3a22248293a7f4b"
  },
  {
    "url": "assets/js/73.aeeac243.js",
    "revision": "bccd22228de717690872b204c8634c0a"
  },
  {
    "url": "assets/js/74.1d31832d.js",
    "revision": "2492c40807ca25334109a8db145a8d2e"
  },
  {
    "url": "assets/js/8.17e9434f.js",
    "revision": "317601aad3a98c428473d2eaf2301e78"
  },
  {
    "url": "assets/js/9.998784bd.js",
    "revision": "88bc3f0cc77e258a16a2455d34304ac6"
  },
  {
    "url": "assets/js/app.e3d1cd94.js",
    "revision": "e8c6e5e376db29af2364c9addb6f6236"
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
    "revision": "ea3129c2ab791476aedd1c99643b4357"
  },
  {
    "url": "css/reset.html",
    "revision": "e9018ab45dab2b285c2641a30dda379a"
  },
  {
    "url": "css/scrollBar.html",
    "revision": "af9a43e1d0072731c3a33110324624d1"
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
    "revision": "fda9c812e4539dfedc549c5cb4d59161"
  },
  {
    "url": "javascript/bom/Navigator.sendBeacon.html",
    "revision": "cdbb1d645479f8d88fbf1e788a645027"
  },
  {
    "url": "javascript/bom/sessionStorage.html",
    "revision": "a141e77a08de925faded6def7c44f273"
  },
  {
    "url": "javascript/dom/api-drag.html",
    "revision": "0ab82a6872e6e56c48c3c9db15a7ff14"
  },
  {
    "url": "javascript/dom/defer与async.html",
    "revision": "5a24869d49cf51e79e9285903d774b46"
  },
  {
    "url": "javascript/dom/preload与prefetch.html",
    "revision": "ee6221967d8b2fba2ae69447e6d20e15"
  },
  {
    "url": "javascript/ESM与现代浏览器.html",
    "revision": "2a40c89245ce480328be7736b63aaca4"
  },
  {
    "url": "javascript/微任务宏任务执行顺序.html",
    "revision": "385147bb28beed202e77fdfc60208dc8"
  },
  {
    "url": "others/interview/a == 1 && a == 2 && a == 3.html",
    "revision": "e4ea5c3939611a1acec9ba34e22e9913"
  },
  {
    "url": "others/interview/遍历的异步写法.html",
    "revision": "3c5bbe69a1cc868964e5e7a4df459788"
  },
  {
    "url": "others/JSON.html",
    "revision": "2b1c3f80fd417a5b44215cbe3febda34"
  },
  {
    "url": "others/unicode和utf-8/unicode.html",
    "revision": "8e7934f438119ca0b31d1b9f756266f1"
  },
  {
    "url": "others/unicode和utf-8/utf-8.html",
    "revision": "78e797ecccfa5547034d1fe98bf3d35b"
  },
  {
    "url": "others/web安全.html",
    "revision": "4f3718e9ed6b8bdc50b85d0263849e85"
  },
  {
    "url": "others/跨域问题.html",
    "revision": "3c7d60b11aa943d49b8315fec5a49211"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "281a9f2806ad6dc28ef61ad00d832c02"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "05e5de7b90023a2011e633fa63530908"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "b6244a637b30c7da6c62e15c3e241c72"
  },
  {
    "url": "tools/typora快捷键.html",
    "revision": "3a74dca317e4fd7cb504453bca8d2c8b"
  },
  {
    "url": "tools/webstorm/创建宏.html",
    "revision": "c6b7b407a4bdd284b92b34f07530f366"
  },
  {
    "url": "tools/webstorm/快捷键.html",
    "revision": "e9c1b36a994d95174a23a825e789110d"
  },
  {
    "url": "tools/yarn.html",
    "revision": "2183587e8869183985a9d8b1d6beaf4b"
  },
  {
    "url": "tools/yed-graph-editor快捷键.html",
    "revision": "a83286731f56537660654194f06039fd"
  },
  {
    "url": "tools/版本管理工具-git/基础.html",
    "revision": "e3970d8cdd2c08dd8e3ba2c1cbef9136"
  },
  {
    "url": "tools/版本管理工具-git/需要掌握的.html",
    "revision": "88a2956e7f4384d94ce73c0caa080a63"
  },
  {
    "url": "脚手架工具/browserslist.html",
    "revision": "f26014abe672e9296f986a9210658b89"
  },
  {
    "url": "脚手架工具/eslint/01-安装.html",
    "revision": "6f711a2d91e265b6cbc410854e77d6b9"
  },
  {
    "url": "脚手架工具/eslint/02-使用.html",
    "revision": "3c160e8a52a4f3b875af11f7592ffdcf"
  },
  {
    "url": "脚手架工具/eslint/03-vue开发通用的配置.html",
    "revision": "d03415c40f99708c367ed75161027213"
  },
  {
    "url": "脚手架工具/eslint/04-配合husky与lint-staged.html",
    "revision": "59c9990b8b14aa20fdd564d67a4aa585"
  },
  {
    "url": "脚手架工具/eslint/05-@babel下的eslint-parser.html",
    "revision": "ce9a682d786f1df781905a388671bb72"
  },
  {
    "url": "脚手架工具/umd模块打包方法.html",
    "revision": "e097be0b11271fee7e099036a7b651c3"
  },
  {
    "url": "脚手架工具/vue-cli/01-基本配置.html",
    "revision": "4f0f4447161777b51eb8e234862797a9"
  },
  {
    "url": "脚手架工具/vue-cli/02-loader.html",
    "revision": "8eb621a3302aac4b43230fbc01170f85"
  },
  {
    "url": "脚手架工具/vue-cli/03-plugin.html",
    "revision": "0715101971fc18bd33c770ca5b46cf2d"
  },
  {
    "url": "脚手架工具/vue-cli/env.html",
    "revision": "6354799cde6c02847c2f89d8760a98ba"
  },
  {
    "url": "脚手架工具/vue-cli/loader之image-webpack-loader.html",
    "revision": "af4bd244117c2717a70da90adb660f9d"
  },
  {
    "url": "脚手架工具/vue-cli/others.html",
    "revision": "75c13600c97b8b561e26f2cde83bceab"
  },
  {
    "url": "脚手架工具/vue-cli/webpack-chain.html",
    "revision": "dcc4f9c391fd37cb64babc307a0689e9"
  },
  {
    "url": "脚手架工具/vue-cli/新增webpack配置.html",
    "revision": "0ec6ab6d54ac9fb542e0616429c01628"
  },
  {
    "url": "脚手架工具/vue-cli/查看webpack配置.html",
    "revision": "01e1e1244d133b69f669a4e28e25b36e"
  },
  {
    "url": "脚手架工具/vue-cli/配置sass.html",
    "revision": "237403c362ea3df7b618bad28a3f4756"
  },
  {
    "url": "脚手架工具/vue-cli/配置svg.html",
    "revision": "dd975876202dacdd3326a0ac06fbb6e1"
  },
  {
    "url": "脚手架工具/vuepress.html",
    "revision": "cc6e7c290e16530cf20f836b82de9b94"
  },
  {
    "url": "脚手架工具/webpack/01-entry.html",
    "revision": "f7efb24a2cdee5d8eab777c10940c41e"
  },
  {
    "url": "脚手架工具/webpack/02-output.html",
    "revision": "c7d5fa99970e3d3474b734051dcffd8f"
  },
  {
    "url": "脚手架工具/webpack/03-plugin.html",
    "revision": "72b5d19c9f58988c84a36e45eff40b18"
  },
  {
    "url": "脚手架工具/webpack/04-module.html",
    "revision": "4d77f2d88c75ed8db41d867374cf9076"
  },
  {
    "url": "脚手架工具/webpack/05-resolve.html",
    "revision": "5040518869ee1159c794e871548fdac8"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/others.html",
    "revision": "aa4ac426d0f182ca1b38f9cb93cbead1"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/splitChunks.html",
    "revision": "2429d08fa724084a795d3e46e6724aa8"
  },
  {
    "url": "脚手架工具/webpack/07-其他配置.html",
    "revision": "89c84d018b63fced66dd4f0e97904a04"
  },
  {
    "url": "脚手架工具/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "8194694cf3368fc734b8d0ffb978bd23"
  },
  {
    "url": "脚手架工具/webpack/others.html",
    "revision": "a828c4fd456ea1cea521a78dc128f0a7"
  },
  {
    "url": "脚手架工具/webpack/webpack之devtool .html",
    "revision": "a2487b0bca128c0a9a3dec0f193cd7a9"
  },
  {
    "url": "脚手架工具/webpack/webpack之hash.html",
    "revision": "4d470001fcb57652d7d245f3caad05f4"
  },
  {
    "url": "脚手架工具/webpack/webpack之magic-comments.html",
    "revision": "0f4574589ea9ec1939f4484250bff535"
  },
  {
    "url": "脚手架工具/webpack/webpack之runtime与manifest.html",
    "revision": "e057fb2c7fa24a87f38bc1e02b652f7a"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理commonjs.html",
    "revision": "75255b9d19ac4e050c25481664044df9"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理esmodule.html",
    "revision": "b57eb715804d4a91cc3a9478afc57572"
  },
  {
    "url": "脚手架工具/webpack/webpack之模块路径解析规则.html",
    "revision": "cb1e41acad764aafd85021dfc25fa732"
  },
  {
    "url": "脚手架工具/webpack/模块方法之requireContext.html",
    "revision": "60533898bd6d561c0f9c889234eacc40"
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
