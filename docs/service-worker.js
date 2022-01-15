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
    "revision": "39f9491ca4262c94b6b87e6eccbebc26"
  },
  {
    "url": "assets/css/0.styles.bbcde789.css",
    "revision": "5849dd6c3c284933e143139831db1930"
  },
  {
    "url": "assets/css/5.styles.cf7d4acf.css",
    "revision": "a6dcd78eef99476a6ba1ae0f4c01de62"
  },
  {
    "url": "assets/css/7.styles.1cf475e5.css",
    "revision": "4dfd954af9da41878ca5b77c1ec7d6f2"
  },
  {
    "url": "assets/css/77.styles.eac5093d.css",
    "revision": "169d6f7b23b70d80f3e60a762b518dd4"
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
    "url": "assets/js/10.de53e9b0.js",
    "revision": "e30783f3e1e60c4ccd20d8b907d90cf4"
  },
  {
    "url": "assets/js/11.c45b3f05.js",
    "revision": "d0bd5ac98ea24f414ffd48871f2a1fcf"
  },
  {
    "url": "assets/js/12.3f18f356.js",
    "revision": "7388e8cbd352d25e47777eff7d9c09c5"
  },
  {
    "url": "assets/js/13.3da51045.js",
    "revision": "a9b644764dc77d140f374e7e76236344"
  },
  {
    "url": "assets/js/14.06c79d7c.js",
    "revision": "ef6b687bf99fe27641d3d4329778852b"
  },
  {
    "url": "assets/js/15.8f575ad3.js",
    "revision": "47f5882042ce4dc518b8094cea2b591f"
  },
  {
    "url": "assets/js/16.6020394d.js",
    "revision": "b51b38282dfff4839430821275cb04d4"
  },
  {
    "url": "assets/js/17.ace0be1a.js",
    "revision": "6d8f3d0ce19a9070149995722aa09e59"
  },
  {
    "url": "assets/js/18.94265acf.js",
    "revision": "c10478dc71a3dc416e274aad92544c46"
  },
  {
    "url": "assets/js/19.65c8d5dc.js",
    "revision": "1c93cafa06403b43f13bc76b9c9db7a6"
  },
  {
    "url": "assets/js/20.9da6549f.js",
    "revision": "078a13667ac29097dbc317c286dac818"
  },
  {
    "url": "assets/js/21.3bb363c8.js",
    "revision": "5c12487ae25d1ab1a0866cf9322486ff"
  },
  {
    "url": "assets/js/22.f29ec6f2.js",
    "revision": "ffaf3448de2736626e6fff837c16d0a1"
  },
  {
    "url": "assets/js/23.209c3a33.js",
    "revision": "b4dcc262321e7a3f1cb74c0332a5cbe7"
  },
  {
    "url": "assets/js/24.29ef0402.js",
    "revision": "fff95cfe648428dbb1a03970de4d527f"
  },
  {
    "url": "assets/js/25.e700b4cc.js",
    "revision": "001db5c18010f72380b93cad38176928"
  },
  {
    "url": "assets/js/26.fd88919c.js",
    "revision": "332db6909caf9ec90b39ed56571ce6db"
  },
  {
    "url": "assets/js/27.3608cb4a.js",
    "revision": "6b8204d55ec96be3f9e4027df301dbec"
  },
  {
    "url": "assets/js/28.44529eeb.js",
    "revision": "94eae56f9aa9d5f8deef75ad76db434b"
  },
  {
    "url": "assets/js/29.a00d7269.js",
    "revision": "a873b7063a89ec6ed442c8bc813bf917"
  },
  {
    "url": "assets/js/30.0f07a7a0.js",
    "revision": "069a3d964dc6fc060e559b11854c1a81"
  },
  {
    "url": "assets/js/31.30a83876.js",
    "revision": "71aeb7aa09e89046ac8e8f7b4d447a98"
  },
  {
    "url": "assets/js/32.71de87f2.js",
    "revision": "6f44efb9450898c75f751148cae641a7"
  },
  {
    "url": "assets/js/33.616e94d4.js",
    "revision": "2fafe5808fff00ab05e8746749dc3143"
  },
  {
    "url": "assets/js/34.7cf2a69f.js",
    "revision": "1909c0e79b4917d3cf59ce7cd238d754"
  },
  {
    "url": "assets/js/35.4d6b2b7a.js",
    "revision": "10f36503314d1e19daaff9b1da2add1b"
  },
  {
    "url": "assets/js/36.a252a4a7.js",
    "revision": "d6a11ffbfc38dc4cd0b69e8fa542b71f"
  },
  {
    "url": "assets/js/37.1614216a.js",
    "revision": "13af881e0e359a681ad342dff0d201ff"
  },
  {
    "url": "assets/js/38.968d1a48.js",
    "revision": "d5c6fe4475540b1f93ad81a251ba3611"
  },
  {
    "url": "assets/js/39.8d202061.js",
    "revision": "05cbba9ab081246a5ca143b3fddd88c0"
  },
  {
    "url": "assets/js/4.19947b60.js",
    "revision": "512b7ba9b293d595ab49096c42bd8036"
  },
  {
    "url": "assets/js/40.37b3cc99.js",
    "revision": "8267dae74387121d612c41f3b66348e1"
  },
  {
    "url": "assets/js/41.21221538.js",
    "revision": "59930bed243560f15c2f83bc7ab445f7"
  },
  {
    "url": "assets/js/42.260a9727.js",
    "revision": "10827d921bd67b5cfedce4b8d9ddf6d3"
  },
  {
    "url": "assets/js/43.fcdd9472.js",
    "revision": "44aa38453c2cf3b6c659d6f83bb59962"
  },
  {
    "url": "assets/js/44.32d0ca40.js",
    "revision": "3120f2f4a34fa1980b3afbb65e5cfef3"
  },
  {
    "url": "assets/js/45.615bb19d.js",
    "revision": "961f03875e777588def988a0067816b6"
  },
  {
    "url": "assets/js/46.dfabf85d.js",
    "revision": "9bcba72a2c6ab77bcd562369865786ef"
  },
  {
    "url": "assets/js/47.6d46e0f1.js",
    "revision": "bb69b338d287c674785cc691ea7ac4b2"
  },
  {
    "url": "assets/js/48.5cb952b6.js",
    "revision": "7227de1ab82a7dfde5367ac5268fa7ee"
  },
  {
    "url": "assets/js/49.917d451c.js",
    "revision": "f63465bf458eda5e5c7b20bd04d2e037"
  },
  {
    "url": "assets/js/50.bae4e884.js",
    "revision": "536cdfb92602a22777714294d1bb2ce1"
  },
  {
    "url": "assets/js/51.a0a6bf61.js",
    "revision": "ee87b33057ac865f937527447254b770"
  },
  {
    "url": "assets/js/52.db765e31.js",
    "revision": "2cc8248b5f6d5ab18a00daa28e56ca04"
  },
  {
    "url": "assets/js/53.9bb2f701.js",
    "revision": "2ce01692cb0a4379c44deae5c732b220"
  },
  {
    "url": "assets/js/54.073710da.js",
    "revision": "659dd4039886f290e527b3239fd9eb36"
  },
  {
    "url": "assets/js/55.8516806c.js",
    "revision": "d933374e4ea6e7c0bc15a8922927a75f"
  },
  {
    "url": "assets/js/56.11a002a2.js",
    "revision": "eaf84845dce82be9af6991345b7b2cc1"
  },
  {
    "url": "assets/js/57.eb8ccc72.js",
    "revision": "52d16c2597b6b54ef8be233ca0eba621"
  },
  {
    "url": "assets/js/58.7df0ba26.js",
    "revision": "291c5026fafd5dc1fb85d23d79d9bed1"
  },
  {
    "url": "assets/js/59.2dfad1c6.js",
    "revision": "caa222c145eb5553e3cabe9104cd81ee"
  },
  {
    "url": "assets/js/6.71865519.js",
    "revision": "5403d0a865287cb4a235b26f7dfbae2a"
  },
  {
    "url": "assets/js/60.94932e38.js",
    "revision": "b79eda917424bdddcb65cb9fede62bba"
  },
  {
    "url": "assets/js/61.3721e844.js",
    "revision": "4abd0423f26a3a60e93ae9b2848a825a"
  },
  {
    "url": "assets/js/62.862baae7.js",
    "revision": "3412ff4665e7f872e9a6c4f0db1bbe55"
  },
  {
    "url": "assets/js/63.241c8db5.js",
    "revision": "9f098a84bdce05bce2ffaa01f0526477"
  },
  {
    "url": "assets/js/64.79cf3f56.js",
    "revision": "48f26f99646143624f3b7544941dbf6c"
  },
  {
    "url": "assets/js/65.09a49972.js",
    "revision": "68092786d4dfd31d86b9cb61417bb291"
  },
  {
    "url": "assets/js/66.1f6737ba.js",
    "revision": "c229add1fd1e412431a1f9e8e153b590"
  },
  {
    "url": "assets/js/67.a301f22a.js",
    "revision": "6effd67cf4060bd3137cca5f9bb0b1b5"
  },
  {
    "url": "assets/js/68.525872c2.js",
    "revision": "180a67d328d3e053ca34bbaff69b6408"
  },
  {
    "url": "assets/js/69.2628ee8c.js",
    "revision": "f5b0f81e2e068dfba949c3a98d3529dd"
  },
  {
    "url": "assets/js/7.d5d7feca.js",
    "revision": "af76f17aeddb924338ceb86db41e4bbf"
  },
  {
    "url": "assets/js/70.6a5ffcb3.js",
    "revision": "9272d417793c8cf361301eb642107e5a"
  },
  {
    "url": "assets/js/71.8572f4de.js",
    "revision": "677a0028385fc0b51da30a106251913a"
  },
  {
    "url": "assets/js/72.8880fba2.js",
    "revision": "755156fa38a353c70b2e1c7079981da6"
  },
  {
    "url": "assets/js/73.accd829f.js",
    "revision": "2669ab87dd452fa48f0d68958999420e"
  },
  {
    "url": "assets/js/76.46f12160.js",
    "revision": "5760744a9e59087509cb9236758b27f0"
  },
  {
    "url": "assets/js/77.95259b88.js",
    "revision": "f127dac14ed9030097bcdefba28804eb"
  },
  {
    "url": "assets/js/78.e854952f.js",
    "revision": "ac59106ca8b420250462a6a7c0dab0d6"
  },
  {
    "url": "assets/js/8.b8df2890.js",
    "revision": "37e815e18d5f809aa8393b8b2c019a6a"
  },
  {
    "url": "assets/js/app.4ebf6d32.js",
    "revision": "d75e98f162799d05a3564a6713dfb1c3"
  },
  {
    "url": "assets/js/chunk-default.226bcdc7.js",
    "revision": "6de99d8e615d0d04de56df98264c8898"
  },
  {
    "url": "assets/js/chunk-vuepress.ac14e595.js",
    "revision": "ce41a7f3fc132de37dd8e6f2e04ed6fb"
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
    "revision": "7ec1fe9abf31f94c435c4862f6e06610"
  },
  {
    "url": "css/reset.html",
    "revision": "347d8e207c56382469c25b285afc91ee"
  },
  {
    "url": "css/scrollBar.html",
    "revision": "3f07204382685670a906a560aaa1b3b5"
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
    "revision": "2f5c78b59d751035cd8264f4db9e5629"
  },
  {
    "url": "javascript/bom/Navigator.sendBeacon.html",
    "revision": "f6b5c167d3b398b8a842eb8844a23721"
  },
  {
    "url": "javascript/bom/sessionStorage.html",
    "revision": "287c31cdd79cecbdbbcc8f3b69a752f5"
  },
  {
    "url": "javascript/dom/api-drag.html",
    "revision": "c9b736924fc1f68dac53de85a94de8e8"
  },
  {
    "url": "javascript/dom/defer与async.html",
    "revision": "d4d963042e23c113ca20fe4de964191d"
  },
  {
    "url": "javascript/dom/preload与prefetch.html",
    "revision": "17e39089418d9dfae2d068d002f3bf39"
  },
  {
    "url": "javascript/ESM与现代浏览器.html",
    "revision": "f6955e8201d22b3948044165f207439f"
  },
  {
    "url": "javascript/微任务宏任务执行顺序.html",
    "revision": "8131fb6556ca1d7d57738c2af91ae616"
  },
  {
    "url": "others/interview/a == 1 && a == 2 && a == 3.html",
    "revision": "b14b5e6560e056e37efa9cc662c6ca3e"
  },
  {
    "url": "others/interview/遍历的异步写法.html",
    "revision": "079e3d4c01e94ea7d6f978ad48c453eb"
  },
  {
    "url": "others/JSON.html",
    "revision": "9e1888ea51808897d4646bf39154e1cb"
  },
  {
    "url": "others/unicode和utf-8/unicode.html",
    "revision": "2fdb7f8f06502b4f117ea037853a9f14"
  },
  {
    "url": "others/unicode和utf-8/utf-8.html",
    "revision": "971587723706e90c69b43c2a45c0bf9e"
  },
  {
    "url": "others/web安全.html",
    "revision": "29cbecb4c317e235770300f7dec7e6c2"
  },
  {
    "url": "others/待整理的.html",
    "revision": "fa28d16de4dbafed9e5e0bf01a223069"
  },
  {
    "url": "others/跨域问题.html",
    "revision": "017adb210fdfffb0dc14dc64adceecbf"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "0e2f227e844ed03c0004446bb78a6938"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "5160cd7f2bef8f69f2b6e23ab283d73e"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "869961dffce366c56debf6a9622707ac"
  },
  {
    "url": "tools/typora快捷键.html",
    "revision": "87322fb25b2b48348ea696d2003b295c"
  },
  {
    "url": "tools/webstorm/创建宏.html",
    "revision": "4ef3de99231f6bef3be7e6f937d39807"
  },
  {
    "url": "tools/webstorm/快捷键.html",
    "revision": "d549335030d0d23866267837089624ad"
  },
  {
    "url": "tools/yarn.html",
    "revision": "42090326af4eab6abd8d0c40f17016f6"
  },
  {
    "url": "tools/yed-graph-editor快捷键.html",
    "revision": "8d92c0b9264b6cce53f47fb6e51977b1"
  },
  {
    "url": "tools/版本管理工具-git/基础.html",
    "revision": "ecdbf0079bac3f7f279d7e2a4043abee"
  },
  {
    "url": "tools/版本管理工具-git/需要掌握的.html",
    "revision": "4eb2f7b91a7b3e44690f784dee8b78d4"
  },
  {
    "url": "脚手架工具/browserslist.html",
    "revision": "9056d22ef7ecfd7af4f8dc9ee4773f3c"
  },
  {
    "url": "脚手架工具/eslint/01-安装.html",
    "revision": "a671c15be91b3d55a23e955a6af69108"
  },
  {
    "url": "脚手架工具/eslint/02-使用.html",
    "revision": "254430c1ffcb80cd081eb08641269bd3"
  },
  {
    "url": "脚手架工具/eslint/03-vue开发通用的配置.html",
    "revision": "0f310282adf337106651a309629d2a79"
  },
  {
    "url": "脚手架工具/eslint/04-配合husky与lint-staged.html",
    "revision": "300c559c6421b497faf28d2879629117"
  },
  {
    "url": "脚手架工具/eslint/05-@babel下的eslint-parser.html",
    "revision": "4942f9b95908ede0ede1149672787cb3"
  },
  {
    "url": "脚手架工具/umd模块打包方法.html",
    "revision": "64f67e4d973c7963287d3da73c642191"
  },
  {
    "url": "脚手架工具/vue-cli/01-基本配置.html",
    "revision": "f8a0a0301e49f9402b58c48fd5432ccf"
  },
  {
    "url": "脚手架工具/vue-cli/02-loader.html",
    "revision": "ca8bc2db562558b9cb63334b0adb2084"
  },
  {
    "url": "脚手架工具/vue-cli/03-plugin.html",
    "revision": "9068aff1f2acbc3c4537eae877ca32bb"
  },
  {
    "url": "脚手架工具/vue-cli/env.html",
    "revision": "cad47523f9181e90a0de6b8676ecbe6b"
  },
  {
    "url": "脚手架工具/vue-cli/loader之image-webpack-loader.html",
    "revision": "f4895937b915e3f0bb525a56d200d0a5"
  },
  {
    "url": "脚手架工具/vue-cli/others.html",
    "revision": "ceb04b11408917e03b9d73cc1be2c8bf"
  },
  {
    "url": "脚手架工具/vue-cli/webpack-chain.html",
    "revision": "11ab61544276028469bee6ac6af9d2f2"
  },
  {
    "url": "脚手架工具/vue-cli/新增webpack配置.html",
    "revision": "d06d2ac13d4de372bf5a40cd1241238f"
  },
  {
    "url": "脚手架工具/vue-cli/查看webpack配置.html",
    "revision": "35c8ec686fdda71939c272c67c4d3750"
  },
  {
    "url": "脚手架工具/vue-cli/配置sass.html",
    "revision": "c47b855fd6da1c99a9ccf3628ee33c1a"
  },
  {
    "url": "脚手架工具/vue-cli/配置svg.html",
    "revision": "6b0c49efc87ecbda24b7942e20e899b1"
  },
  {
    "url": "脚手架工具/vuepress.html",
    "revision": "789174a2427e7a1bd9c420aee60941cd"
  },
  {
    "url": "脚手架工具/webpack/01-entry.html",
    "revision": "8d02c617f60b8983316fe846c005498d"
  },
  {
    "url": "脚手架工具/webpack/02-output.html",
    "revision": "f14774c437f6ac443f591feaae1c06af"
  },
  {
    "url": "脚手架工具/webpack/03-plugin.html",
    "revision": "d63e3f4f8486003cb778002b4eccb6ab"
  },
  {
    "url": "脚手架工具/webpack/04-module.html",
    "revision": "7893d2727af64b15ee71e18b2352af86"
  },
  {
    "url": "脚手架工具/webpack/05-resolve.html",
    "revision": "fc78f7a41090ed6b3904ce540e74c06d"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/others.html",
    "revision": "b980f1f045c49c4c34aab91d18b623f2"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/splitChunks.html",
    "revision": "47e0e819a51bf9a26d3c9de415c8c2af"
  },
  {
    "url": "脚手架工具/webpack/07-其他配置.html",
    "revision": "507c1bc6c76ff7f54c3874f8631f29b1"
  },
  {
    "url": "脚手架工具/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "55c9db50510bbb875a4a30c988c9748e"
  },
  {
    "url": "脚手架工具/webpack/others.html",
    "revision": "aa97babe4aef0ce883422398c22df248"
  },
  {
    "url": "脚手架工具/webpack/webpack之devtool .html",
    "revision": "73f8662cad87194b35aa67361b1b87cb"
  },
  {
    "url": "脚手架工具/webpack/webpack之hash.html",
    "revision": "99f4985731077b8c6c38b832c63bea12"
  },
  {
    "url": "脚手架工具/webpack/webpack之magic-comments.html",
    "revision": "a4cbde83b77654f10ac47be146342580"
  },
  {
    "url": "脚手架工具/webpack/webpack之runtime与manifest.html",
    "revision": "a765d6994b5fb0553b763b88dd3e787a"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理commonjs.html",
    "revision": "dd9553d9f66e4e54a14b7727149ba55d"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理esmodule.html",
    "revision": "68913d4f9971f025c2f20911602d4d90"
  },
  {
    "url": "脚手架工具/webpack/webpack之模块路径解析规则.html",
    "revision": "9edf49768d2457b8b1ac66cf4a47c01c"
  },
  {
    "url": "脚手架工具/webpack/模块方法之requireContext.html",
    "revision": "f4e85f7f3244465019f6b2c433bf4beb"
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
