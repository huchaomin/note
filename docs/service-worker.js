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
    "revision": "15afbc5e537c3189de132b28649456d2"
  },
  {
    "url": "assets/css/0.styles.35b757ad.css",
    "revision": "5849dd6c3c284933e143139831db1930"
  },
  {
    "url": "assets/css/5.styles.d10b4edd.css",
    "revision": "a6dcd78eef99476a6ba1ae0f4c01de62"
  },
  {
    "url": "assets/css/7.styles.16e3760e.css",
    "revision": "4dfd954af9da41878ca5b77c1ec7d6f2"
  },
  {
    "url": "assets/css/77.styles.20f7f6be.css",
    "revision": "169d6f7b23b70d80f3e60a762b518dd4"
  },
  {
    "url": "assets/css/styles.266e169f.css",
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
    "url": "assets/js/10.7c73147f.js",
    "revision": "523d73e18d008e8261294a63690e03ff"
  },
  {
    "url": "assets/js/11.b8a2c412.js",
    "revision": "d0bd5ac98ea24f414ffd48871f2a1fcf"
  },
  {
    "url": "assets/js/12.b68a1e7a.js",
    "revision": "7388e8cbd352d25e47777eff7d9c09c5"
  },
  {
    "url": "assets/js/13.4e853439.js",
    "revision": "601b4950cc67b12be893c8b5284eec90"
  },
  {
    "url": "assets/js/14.296a43ec.js",
    "revision": "ef6b687bf99fe27641d3d4329778852b"
  },
  {
    "url": "assets/js/15.aee4244a.js",
    "revision": "dc4e7d0cf0584b628632d7398fd87300"
  },
  {
    "url": "assets/js/16.b3de8cf4.js",
    "revision": "e5ab14f4c52c227aa734d49401492cea"
  },
  {
    "url": "assets/js/17.0afb5ba3.js",
    "revision": "e66d142f32bb0e52c6e9c5e1a92fb376"
  },
  {
    "url": "assets/js/18.a52eae40.js",
    "revision": "a806f3ae1f965adbbe0f77a4165702d5"
  },
  {
    "url": "assets/js/19.74faff7d.js",
    "revision": "0eb56d5ee392fc4a0a19bf813ed52377"
  },
  {
    "url": "assets/js/20.b6ea6b95.js",
    "revision": "078a13667ac29097dbc317c286dac818"
  },
  {
    "url": "assets/js/21.629d4763.js",
    "revision": "5c12487ae25d1ab1a0866cf9322486ff"
  },
  {
    "url": "assets/js/22.a6895e01.js",
    "revision": "ffaf3448de2736626e6fff837c16d0a1"
  },
  {
    "url": "assets/js/23.630839cf.js",
    "revision": "b4dcc262321e7a3f1cb74c0332a5cbe7"
  },
  {
    "url": "assets/js/24.38043132.js",
    "revision": "fff95cfe648428dbb1a03970de4d527f"
  },
  {
    "url": "assets/js/25.f24dd028.js",
    "revision": "001db5c18010f72380b93cad38176928"
  },
  {
    "url": "assets/js/26.ca1ec424.js",
    "revision": "332db6909caf9ec90b39ed56571ce6db"
  },
  {
    "url": "assets/js/27.0af71120.js",
    "revision": "ddad4f81a1c560e82a14590c384f985d"
  },
  {
    "url": "assets/js/28.b3b27730.js",
    "revision": "879c45a61a18d3a2097558784caa2ed0"
  },
  {
    "url": "assets/js/29.6c0095c7.js",
    "revision": "8390848f55a1fbb42eceb07feec1c5f7"
  },
  {
    "url": "assets/js/30.c7fcb844.js",
    "revision": "9752e7b576fde50a99bdcc19603f5a03"
  },
  {
    "url": "assets/js/31.b7c67a12.js",
    "revision": "71aeb7aa09e89046ac8e8f7b4d447a98"
  },
  {
    "url": "assets/js/32.c7b5e8cd.js",
    "revision": "f29e38488999771adb02e88c0b4bbbdd"
  },
  {
    "url": "assets/js/33.a188c0b0.js",
    "revision": "59af93a1aea7d08e1053e4b56974825e"
  },
  {
    "url": "assets/js/34.c0d34625.js",
    "revision": "6bfd0284a16c4aa44678e6af47c3a9f1"
  },
  {
    "url": "assets/js/35.147b68fb.js",
    "revision": "9ebf8751cc5012cfbaf4c3610285ed19"
  },
  {
    "url": "assets/js/36.dea80ea5.js",
    "revision": "349849f0e0349fa23f39eb67f19c5ee1"
  },
  {
    "url": "assets/js/37.ea7fb75d.js",
    "revision": "e494c2e41db534a2973a0b1cba0b1888"
  },
  {
    "url": "assets/js/38.79b83a4a.js",
    "revision": "a6138d5430fd26534819cd6577fcfff0"
  },
  {
    "url": "assets/js/39.3578f91e.js",
    "revision": "05cbba9ab081246a5ca143b3fddd88c0"
  },
  {
    "url": "assets/js/4.2bfd608c.js",
    "revision": "512b7ba9b293d595ab49096c42bd8036"
  },
  {
    "url": "assets/js/40.228ccd43.js",
    "revision": "8267dae74387121d612c41f3b66348e1"
  },
  {
    "url": "assets/js/41.abf8277b.js",
    "revision": "59930bed243560f15c2f83bc7ab445f7"
  },
  {
    "url": "assets/js/42.655a19b3.js",
    "revision": "10827d921bd67b5cfedce4b8d9ddf6d3"
  },
  {
    "url": "assets/js/43.8786226f.js",
    "revision": "44aa38453c2cf3b6c659d6f83bb59962"
  },
  {
    "url": "assets/js/44.45e475df.js",
    "revision": "3120f2f4a34fa1980b3afbb65e5cfef3"
  },
  {
    "url": "assets/js/45.fb12bd92.js",
    "revision": "961f03875e777588def988a0067816b6"
  },
  {
    "url": "assets/js/46.1254d7bb.js",
    "revision": "f34434823682ada0d2368847b3e93301"
  },
  {
    "url": "assets/js/47.d9897931.js",
    "revision": "7a8a862a50aa1800fda3712ae57f7666"
  },
  {
    "url": "assets/js/48.2325320a.js",
    "revision": "7227de1ab82a7dfde5367ac5268fa7ee"
  },
  {
    "url": "assets/js/49.92c0a6aa.js",
    "revision": "f63465bf458eda5e5c7b20bd04d2e037"
  },
  {
    "url": "assets/js/50.49a51e51.js",
    "revision": "536cdfb92602a22777714294d1bb2ce1"
  },
  {
    "url": "assets/js/51.514cc931.js",
    "revision": "ee87b33057ac865f937527447254b770"
  },
  {
    "url": "assets/js/52.c451af0e.js",
    "revision": "2cc8248b5f6d5ab18a00daa28e56ca04"
  },
  {
    "url": "assets/js/53.66c8cd82.js",
    "revision": "2ce01692cb0a4379c44deae5c732b220"
  },
  {
    "url": "assets/js/54.e86ed050.js",
    "revision": "659dd4039886f290e527b3239fd9eb36"
  },
  {
    "url": "assets/js/55.657f2a0d.js",
    "revision": "d933374e4ea6e7c0bc15a8922927a75f"
  },
  {
    "url": "assets/js/56.42243e29.js",
    "revision": "eaf84845dce82be9af6991345b7b2cc1"
  },
  {
    "url": "assets/js/57.d9db195d.js",
    "revision": "52d16c2597b6b54ef8be233ca0eba621"
  },
  {
    "url": "assets/js/58.b50bd96e.js",
    "revision": "291c5026fafd5dc1fb85d23d79d9bed1"
  },
  {
    "url": "assets/js/59.5e4d2a13.js",
    "revision": "b757a328b7ff771ca19a75eddd35bcb9"
  },
  {
    "url": "assets/js/6.089258c8.js",
    "revision": "76e94cbcf30b6e4192b2613dee832f34"
  },
  {
    "url": "assets/js/60.e99900f9.js",
    "revision": "fc91d7002829b30a2609e154559cbdd7"
  },
  {
    "url": "assets/js/61.eca5b014.js",
    "revision": "4abd0423f26a3a60e93ae9b2848a825a"
  },
  {
    "url": "assets/js/62.4107855c.js",
    "revision": "3412ff4665e7f872e9a6c4f0db1bbe55"
  },
  {
    "url": "assets/js/63.d19770d2.js",
    "revision": "9f098a84bdce05bce2ffaa01f0526477"
  },
  {
    "url": "assets/js/64.c24302c4.js",
    "revision": "98b6f9ce8d6faf0a368e8e172f8c7d98"
  },
  {
    "url": "assets/js/65.e81270be.js",
    "revision": "130bfde515de7c027ea67146864ee17f"
  },
  {
    "url": "assets/js/66.78f06e06.js",
    "revision": "c229add1fd1e412431a1f9e8e153b590"
  },
  {
    "url": "assets/js/67.af09ebad.js",
    "revision": "6effd67cf4060bd3137cca5f9bb0b1b5"
  },
  {
    "url": "assets/js/68.6b17132c.js",
    "revision": "180a67d328d3e053ca34bbaff69b6408"
  },
  {
    "url": "assets/js/69.a3316260.js",
    "revision": "f5b0f81e2e068dfba949c3a98d3529dd"
  },
  {
    "url": "assets/js/7.16e3760e.js",
    "revision": "af76f17aeddb924338ceb86db41e4bbf"
  },
  {
    "url": "assets/js/70.76ed4df2.js",
    "revision": "9272d417793c8cf361301eb642107e5a"
  },
  {
    "url": "assets/js/71.03a64d22.js",
    "revision": "677a0028385fc0b51da30a106251913a"
  },
  {
    "url": "assets/js/72.c2a86467.js",
    "revision": "755156fa38a353c70b2e1c7079981da6"
  },
  {
    "url": "assets/js/73.2a6cd4a5.js",
    "revision": "2669ab87dd452fa48f0d68958999420e"
  },
  {
    "url": "assets/js/76.dd322fc9.js",
    "revision": "5760744a9e59087509cb9236758b27f0"
  },
  {
    "url": "assets/js/77.20f7f6be.js",
    "revision": "f127dac14ed9030097bcdefba28804eb"
  },
  {
    "url": "assets/js/78.3398cb31.js",
    "revision": "ac59106ca8b420250462a6a7c0dab0d6"
  },
  {
    "url": "assets/js/8.4321eac4.js",
    "revision": "37e815e18d5f809aa8393b8b2c019a6a"
  },
  {
    "url": "assets/js/app.266e169f.js",
    "revision": "51f8d7fd5a07392ae0d3073a2f575ab3"
  },
  {
    "url": "assets/js/chunk-default.d10b4edd.js",
    "revision": "6de99d8e615d0d04de56df98264c8898"
  },
  {
    "url": "assets/js/chunk-vuepress.35b757ad.js",
    "revision": "d3bb682ab809a185ca5b1959ecc91cf1"
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
    "revision": "9eb71b4a02bc14231eb71fed86d1850b"
  },
  {
    "url": "css/reset.html",
    "revision": "518f1cf4c5d536c0cd19a872597612a5"
  },
  {
    "url": "css/scrollBar.html",
    "revision": "e3c039778d124f82d2225b59f32e8665"
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
    "revision": "d23f8fc1f22a206e180caa0b87002671"
  },
  {
    "url": "javascript/bom/Navigator.sendBeacon.html",
    "revision": "dab921051c34fed9c8840f382e2df4fd"
  },
  {
    "url": "javascript/bom/sessionStorage.html",
    "revision": "d53db0d2291eaa63b58224f2e3bf7aac"
  },
  {
    "url": "javascript/dom/api-drag.html",
    "revision": "61d80ccd3e50ad6e9495b878a2f7b22a"
  },
  {
    "url": "javascript/dom/defer与async.html",
    "revision": "8698c071f5805b7f82f5c0a1afc73ca4"
  },
  {
    "url": "javascript/dom/preload与prefetch.html",
    "revision": "0b1a6539e170942abb9bd2c9c2475e8e"
  },
  {
    "url": "javascript/ESM与现代浏览器.html",
    "revision": "bd35b754b0d1de70aea386b3589695f8"
  },
  {
    "url": "javascript/微任务宏任务执行顺序.html",
    "revision": "5aac3e780ab261b6338afe4af76b9d4a"
  },
  {
    "url": "others/interview/a == 1 && a == 2 && a == 3.html",
    "revision": "9adf47007991be6ce98fe635a03da112"
  },
  {
    "url": "others/interview/遍历的异步写法.html",
    "revision": "d9b57f885b447066ea37ee8258775519"
  },
  {
    "url": "others/JSON.html",
    "revision": "c08ce38208a7c4e71dd009054752f3e0"
  },
  {
    "url": "others/unicode和utf-8/unicode.html",
    "revision": "96c86ce047f15bdd61f0bf4b72641c36"
  },
  {
    "url": "others/unicode和utf-8/utf-8.html",
    "revision": "83de229138215ec68a01ec5b3ff3ac6d"
  },
  {
    "url": "others/web安全.html",
    "revision": "ba12354786be7b494f5fec32c5a809e2"
  },
  {
    "url": "others/待整理的.html",
    "revision": "58f233db7120fe2278887af3cd2e0eb1"
  },
  {
    "url": "others/跨域问题.html",
    "revision": "a2582e50a8b9d316e5a55d8c03f542a4"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "d0a2288bcaf3f86f8eb579915dc93978"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "82fc18ae989e872bd548622bde596fef"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "31c1a2ded613550d1bbec99f6a5afaff"
  },
  {
    "url": "tools/typora快捷键.html",
    "revision": "a28388af5f1ad46eaa56bb6f67ad3fb6"
  },
  {
    "url": "tools/webstorm/创建宏.html",
    "revision": "c59a5e198d7b2863e42564a91a14d281"
  },
  {
    "url": "tools/webstorm/快捷键.html",
    "revision": "e7af858bb2692c9329bf71c08b14f69d"
  },
  {
    "url": "tools/yarn.html",
    "revision": "adb19135ed54f33fc70443ec6b8c7e57"
  },
  {
    "url": "tools/yed-graph-editor快捷键.html",
    "revision": "ce0e1f1885cdaa0eecaa3b65b032b2f9"
  },
  {
    "url": "tools/版本管理工具-git/基础.html",
    "revision": "c83e0afb8dc5e52b4a65693ae175b7db"
  },
  {
    "url": "tools/版本管理工具-git/需要掌握的.html",
    "revision": "34e299658f640e328ebb1598e6203dd6"
  },
  {
    "url": "脚手架工具/browserslist.html",
    "revision": "7513d700e3502bec12739741f0649109"
  },
  {
    "url": "脚手架工具/eslint/01-安装.html",
    "revision": "82117461e47484c1105bdcf7614ed5bf"
  },
  {
    "url": "脚手架工具/eslint/02-使用.html",
    "revision": "9af2e00498af5b651dedc231c01b6769"
  },
  {
    "url": "脚手架工具/eslint/03-vue开发通用的配置.html",
    "revision": "52829ff12c5274b1c913dd615bad4b70"
  },
  {
    "url": "脚手架工具/eslint/04-配合husky与lint-staged.html",
    "revision": "5422a33430110294f7f4ec85f4676269"
  },
  {
    "url": "脚手架工具/eslint/05-@babel下的eslint-parser.html",
    "revision": "6eb49304358062a95366d0d95bdd67c6"
  },
  {
    "url": "脚手架工具/umd模块打包方法.html",
    "revision": "148542ed0eb7245cdf7c37d666934e68"
  },
  {
    "url": "脚手架工具/vue-cli/01-基本配置.html",
    "revision": "2447f2d6c2d508dd75e7d13a93f650f8"
  },
  {
    "url": "脚手架工具/vue-cli/02-loader.html",
    "revision": "a8fba27e531305e13866417f79d69a51"
  },
  {
    "url": "脚手架工具/vue-cli/03-plugin.html",
    "revision": "b574d2292784e865fa6056bf22227b70"
  },
  {
    "url": "脚手架工具/vue-cli/env.html",
    "revision": "7960d78ac8d205d9ac06dfa3e3bc9ce3"
  },
  {
    "url": "脚手架工具/vue-cli/loader之image-webpack-loader.html",
    "revision": "698d6507afddd6b58a5439fdd9a8a165"
  },
  {
    "url": "脚手架工具/vue-cli/others.html",
    "revision": "20957b1739f7d3ecf09d43cb9d12eb4e"
  },
  {
    "url": "脚手架工具/vue-cli/webpack-chain.html",
    "revision": "39e4aa43031d416f649226b33c284717"
  },
  {
    "url": "脚手架工具/vue-cli/新增webpack配置.html",
    "revision": "9c81fe2cdf3f3a9f65300593be0b90ec"
  },
  {
    "url": "脚手架工具/vue-cli/查看webpack配置.html",
    "revision": "9d49b0119bdb08ed08301d31f50047b1"
  },
  {
    "url": "脚手架工具/vue-cli/配置sass.html",
    "revision": "47b53d20acf056ed62eb8e38a3a47de4"
  },
  {
    "url": "脚手架工具/vue-cli/配置svg.html",
    "revision": "b23fe62638f9c9abe3e200a264b0fe39"
  },
  {
    "url": "脚手架工具/vuepress.html",
    "revision": "d553dad96e89197df470d179b09735c4"
  },
  {
    "url": "脚手架工具/webpack/01-entry.html",
    "revision": "3840ad383fda4565f9e73e9e2cf7d852"
  },
  {
    "url": "脚手架工具/webpack/02-output.html",
    "revision": "affff53955b4621eaf36648712b5e88d"
  },
  {
    "url": "脚手架工具/webpack/03-plugin.html",
    "revision": "f7a5cdbad2e93821b4340f48e9c472d6"
  },
  {
    "url": "脚手架工具/webpack/04-module.html",
    "revision": "99da24f1ba9cd909921203d16c111b97"
  },
  {
    "url": "脚手架工具/webpack/05-resolve.html",
    "revision": "9df1458751a01e5c55a2d6e994004fee"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/others.html",
    "revision": "9ebef83030cfa0954991ad2faef91c32"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/splitChunks.html",
    "revision": "345503ceba903240b1ace542dda07df7"
  },
  {
    "url": "脚手架工具/webpack/07-其他配置.html",
    "revision": "7e3678b0c1ab6ba2a547a6ed4d0439a4"
  },
  {
    "url": "脚手架工具/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "6aa271ff2afa367d959562515e62648e"
  },
  {
    "url": "脚手架工具/webpack/others.html",
    "revision": "3ba65a49777979fe2674c35ae788345c"
  },
  {
    "url": "脚手架工具/webpack/webpack之devtool .html",
    "revision": "842c12f70f408c708ff6448f8e65ac76"
  },
  {
    "url": "脚手架工具/webpack/webpack之hash.html",
    "revision": "e5df10ef71bd38d4132371bf86555959"
  },
  {
    "url": "脚手架工具/webpack/webpack之magic-comments.html",
    "revision": "f7301b247b363a08cbad167419dc5f26"
  },
  {
    "url": "脚手架工具/webpack/webpack之runtime与manifest.html",
    "revision": "cdd83d8f36e0f2692493273fcfa6de36"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理commonjs.html",
    "revision": "63342439c06f4e98876c2605a9b3d863"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理esmodule.html",
    "revision": "3dd526ba8e125df51ba05afc6ee7af36"
  },
  {
    "url": "脚手架工具/webpack/webpack之模块路径解析规则.html",
    "revision": "3760d4980afd0c0c4e7d2b7c1f9df65d"
  },
  {
    "url": "脚手架工具/webpack/模块方法之requireContext.html",
    "revision": "bf6de1b9fb5d41c21a6b12324531bb84"
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
