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
    "revision": "cc08e3bf1e679fe7273aae89430c4418"
  },
  {
    "url": "assets/css/0.styles.cf7d4acf.css",
    "revision": "a6dcd78eef99476a6ba1ae0f4c01de62"
  },
  {
    "url": "assets/css/1.styles.eac5093d.css",
    "revision": "169d6f7b23b70d80f3e60a762b518dd4"
  },
  {
    "url": "assets/css/4.styles.bbcde789.css",
    "revision": "5849dd6c3c284933e143139831db1930"
  },
  {
    "url": "assets/css/6.styles.1cf475e5.css",
    "revision": "4dfd954af9da41878ca5b77c1ec7d6f2"
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
    "url": "assets/js/1.b2d924d5.js",
    "revision": "4a3d17c27c249572172ccd995b7ae76c"
  },
  {
    "url": "assets/js/10.418b276d.js",
    "revision": "15f3cd5568977f7f635937d58e49bb64"
  },
  {
    "url": "assets/js/11.1cef681f.js",
    "revision": "549b314a5e0e26414298620b649a55be"
  },
  {
    "url": "assets/js/12.39233d25.js",
    "revision": "d88b6740d351a0600df5d9d15f8b6982"
  },
  {
    "url": "assets/js/13.c999af83.js",
    "revision": "7ce7b116a91fca185a48220fde843ba5"
  },
  {
    "url": "assets/js/14.9cf9218c.js",
    "revision": "7f8e9c4e88c195983e68d989cdcdbf6e"
  },
  {
    "url": "assets/js/15.5ace5ec7.js",
    "revision": "590654e22ddc524a6318b89f3f896a2c"
  },
  {
    "url": "assets/js/16.344e2736.js",
    "revision": "611b7ba0418bd22b5afab03115361ad5"
  },
  {
    "url": "assets/js/17.4b524f91.js",
    "revision": "6c388e213816545adf7b217432ccdaee"
  },
  {
    "url": "assets/js/18.46a4706f.js",
    "revision": "0d4999d3662a61cd3d51cff02b33e350"
  },
  {
    "url": "assets/js/19.04e0d15b.js",
    "revision": "0eb56d5ee392fc4a0a19bf813ed52377"
  },
  {
    "url": "assets/js/20.2704d980.js",
    "revision": "b3195dacc8fe80775858b857585a7140"
  },
  {
    "url": "assets/js/21.120ed787.js",
    "revision": "b7881a14c5dfa6965b205f500b017b32"
  },
  {
    "url": "assets/js/22.d3fe36b9.js",
    "revision": "d8d70829786222c3e08f805004b0276e"
  },
  {
    "url": "assets/js/23.3da1179c.js",
    "revision": "7d71fecfa3a62a73a873e95119a0e41e"
  },
  {
    "url": "assets/js/24.a415d37d.js",
    "revision": "36e7658131d1297b1e8c08bd314ffd74"
  },
  {
    "url": "assets/js/25.684c9c55.js",
    "revision": "dc5b62c4f10c6f46a7f8bf2b0b0e4ac7"
  },
  {
    "url": "assets/js/26.0b7e8c1e.js",
    "revision": "c16b490fa40e3ff2706cd0657a0684f5"
  },
  {
    "url": "assets/js/27.e832bf79.js",
    "revision": "ddad4f81a1c560e82a14590c384f985d"
  },
  {
    "url": "assets/js/28.23b8cc67.js",
    "revision": "5212e4be7e2dfa24f688a6d46c90aa7c"
  },
  {
    "url": "assets/js/29.164d7e87.js",
    "revision": "a873b7063a89ec6ed442c8bc813bf917"
  },
  {
    "url": "assets/js/3.4bfc6043.js",
    "revision": "be46c714396480643f66ae2aa221f56e"
  },
  {
    "url": "assets/js/30.b6be6767.js",
    "revision": "13e79ce27d4e9c64ef81811bd725cf0b"
  },
  {
    "url": "assets/js/31.aee8b3f7.js",
    "revision": "71aeb7aa09e89046ac8e8f7b4d447a98"
  },
  {
    "url": "assets/js/32.49ebe51c.js",
    "revision": "f29e38488999771adb02e88c0b4bbbdd"
  },
  {
    "url": "assets/js/33.f0c122c4.js",
    "revision": "54e4f74e72a4ee0e557400b70b5681eb"
  },
  {
    "url": "assets/js/34.8c5359be.js",
    "revision": "6bfd0284a16c4aa44678e6af47c3a9f1"
  },
  {
    "url": "assets/js/35.c822f1b4.js",
    "revision": "10aea2b1c62296e568d9b53dfa8ebebf"
  },
  {
    "url": "assets/js/36.b4fdb631.js",
    "revision": "aa92dacc3f229525af00944883ed9929"
  },
  {
    "url": "assets/js/37.00d2373d.js",
    "revision": "c4ba6c6f38b4a3da640c44dc8013a39f"
  },
  {
    "url": "assets/js/38.7f8c8bc5.js",
    "revision": "27288b857e56a7de09a9be7bedafe9bb"
  },
  {
    "url": "assets/js/39.6dcb6aab.js",
    "revision": "2a7d29f798c198b4d54c491d9b0f7e07"
  },
  {
    "url": "assets/js/40.92094b8a.js",
    "revision": "38d1754f45f1cb564cb9fd65a7998ecd"
  },
  {
    "url": "assets/js/41.af26733e.js",
    "revision": "4387aa55537b5e4f5b8cde72ee5432b8"
  },
  {
    "url": "assets/js/42.0d492aac.js",
    "revision": "e6cbfc3ab7617ce5f3a6f24a0595e01c"
  },
  {
    "url": "assets/js/43.f3266fd4.js",
    "revision": "a40edc3594f0f82a1a2db48145f73961"
  },
  {
    "url": "assets/js/44.430fee48.js",
    "revision": "2c59f3d76ab1d6399d7d02000b49dad5"
  },
  {
    "url": "assets/js/45.607b8a4c.js",
    "revision": "02c1e694af9941efea6f271966e801ee"
  },
  {
    "url": "assets/js/46.ec604008.js",
    "revision": "9bcba72a2c6ab77bcd562369865786ef"
  },
  {
    "url": "assets/js/47.f4fa9139.js",
    "revision": "bb69b338d287c674785cc691ea7ac4b2"
  },
  {
    "url": "assets/js/48.06fde40f.js",
    "revision": "7227de1ab82a7dfde5367ac5268fa7ee"
  },
  {
    "url": "assets/js/49.8fb60a17.js",
    "revision": "7303d3a9fffb934720e8dd89e97be6a9"
  },
  {
    "url": "assets/js/5.38b7d1a3.js",
    "revision": "4442c438bc0eec73b1e55820a47cf5a8"
  },
  {
    "url": "assets/js/50.03c9774c.js",
    "revision": "638500f34207fed03a00c5802b56c7d5"
  },
  {
    "url": "assets/js/51.1e8c8a91.js",
    "revision": "f5d0b3daf17a8e2d945551e1e55e0949"
  },
  {
    "url": "assets/js/52.a6f162a9.js",
    "revision": "8f06a2b1b9ca465942e25ce5d4198321"
  },
  {
    "url": "assets/js/53.06c5f7c5.js",
    "revision": "df117a041f9a97803eec2a552595ce86"
  },
  {
    "url": "assets/js/54.f9af05b5.js",
    "revision": "ce43f4bc0dde725237ee7c400cc86f52"
  },
  {
    "url": "assets/js/55.d95fc33c.js",
    "revision": "5e4fad1c6b17b88a88b975783d9757f2"
  },
  {
    "url": "assets/js/56.8fea795f.js",
    "revision": "efdad71a400142c0fc2230b54f082255"
  },
  {
    "url": "assets/js/57.54c3b056.js",
    "revision": "e7cabfe862afeaaf2f748ae174081eda"
  },
  {
    "url": "assets/js/58.37e48468.js",
    "revision": "662df4d7f6d11b374c6b173bfa5e3f84"
  },
  {
    "url": "assets/js/59.aa8739b0.js",
    "revision": "caa222c145eb5553e3cabe9104cd81ee"
  },
  {
    "url": "assets/js/6.f0358bea.js",
    "revision": "11baa74c15fe3569df80a2969f7977ab"
  },
  {
    "url": "assets/js/60.81d209d3.js",
    "revision": "c62b8dca6f7e115981ca1dc9ece9aa6f"
  },
  {
    "url": "assets/js/61.f759221d.js",
    "revision": "8b9992b719abfb5eee66f82356ed5adc"
  },
  {
    "url": "assets/js/62.6d4edfc4.js",
    "revision": "2d6bee4f4c28fd27cca9b8fce2dfd7c3"
  },
  {
    "url": "assets/js/63.bc858903.js",
    "revision": "f7241a0e1cec06b9a520d8937b31cdf6"
  },
  {
    "url": "assets/js/64.bc067c3c.js",
    "revision": "48f26f99646143624f3b7544941dbf6c"
  },
  {
    "url": "assets/js/65.397e6dc0.js",
    "revision": "3ba53d2c6b9b706379d46084fd71789e"
  },
  {
    "url": "assets/js/66.6b7ae903.js",
    "revision": "c229add1fd1e412431a1f9e8e153b590"
  },
  {
    "url": "assets/js/67.9106e5ae.js",
    "revision": "63d0d8ec91cb6218d8ee9674f5c6187c"
  },
  {
    "url": "assets/js/68.4cb5e10d.js",
    "revision": "1b17c2e396250e100ceedaccdd0eafb8"
  },
  {
    "url": "assets/js/69.832e1017.js",
    "revision": "18c270c21e392275206b2fdb28ff7f22"
  },
  {
    "url": "assets/js/7.e6ff73be.js",
    "revision": "7c589c8109a2d2c4e4f63907e6382b98"
  },
  {
    "url": "assets/js/70.dceff8e3.js",
    "revision": "546d9daa5cd50686ecd3a83b302de9e6"
  },
  {
    "url": "assets/js/71.f6a5db6d.js",
    "revision": "b61e6e2435da069d0d3b677943628c2d"
  },
  {
    "url": "assets/js/72.08d75b54.js",
    "revision": "840ab95bddb67a35a838f0d432518e1c"
  },
  {
    "url": "assets/js/73.1af1cb02.js",
    "revision": "985f8fbcc3651ae65376b7a481af12c9"
  },
  {
    "url": "assets/js/74.72535cd1.js",
    "revision": "e591229061769edcb87abfa88193d04e"
  },
  {
    "url": "assets/js/8.f21c83e8.js",
    "revision": "55f94fa26ff75dd91327aab19c38510a"
  },
  {
    "url": "assets/js/app.4ab48a21.js",
    "revision": "9e98d35741c87a5da8d92987e87da363"
  },
  {
    "url": "assets/js/chunk-default.bc9d0dcf.js",
    "revision": "ec86fa7f679ebfda7593e658a52d0b9f"
  },
  {
    "url": "assets/js/chunk-vuepress.089db08f.js",
    "revision": "0a748600ea718fd2d154e560b1be81f6"
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
    "revision": "d64a37dbdc4a4d760f2375b80afc3614"
  },
  {
    "url": "css/reset.html",
    "revision": "9a37784f3418643379663a4ff185eea9"
  },
  {
    "url": "css/scrollBar.html",
    "revision": "ea7a28e19eac2b418cdd05241b695c18"
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
    "revision": "b2cc41f19df36a1e08e3ae2b3de7fb9a"
  },
  {
    "url": "javascript/bom/Navigator.sendBeacon.html",
    "revision": "8a0963048fc01cdd9aacb505c68a5a8f"
  },
  {
    "url": "javascript/bom/sessionStorage.html",
    "revision": "72c3ede6d463c96220bf93646e25d89a"
  },
  {
    "url": "javascript/dom/api-drag.html",
    "revision": "43fa380693c0565aea740c88f0e8b9a0"
  },
  {
    "url": "javascript/dom/defer与async.html",
    "revision": "b61fb404f29f79163599ee6dc440b114"
  },
  {
    "url": "javascript/dom/preload与prefetch.html",
    "revision": "2d450f39872fa2b1e72062e6a14b2c42"
  },
  {
    "url": "javascript/ESM与现代浏览器.html",
    "revision": "77494ddfd86fb63cf5cfa94be5a3452b"
  },
  {
    "url": "javascript/微任务宏任务执行顺序.html",
    "revision": "a313fa05ab9275cafda07818ba448808"
  },
  {
    "url": "others/interview/a == 1 && a == 2 && a == 3.html",
    "revision": "94431e5cf78ba056e64e193a4e424fc9"
  },
  {
    "url": "others/interview/遍历的异步写法.html",
    "revision": "390a6c599e81376b83bd7c0653a98889"
  },
  {
    "url": "others/JSON.html",
    "revision": "c22066660378861ef5b3039fc023ea36"
  },
  {
    "url": "others/unicode和utf-8/unicode.html",
    "revision": "632cb6e7670ba0c3cac31f461488f161"
  },
  {
    "url": "others/unicode和utf-8/utf-8.html",
    "revision": "80c096f05c5ccaa2049269f95625d6c0"
  },
  {
    "url": "others/web安全.html",
    "revision": "1a79205d1c256ac7a0994898a6956aeb"
  },
  {
    "url": "others/待整理的.html",
    "revision": "1460928cef1d65abb6b500df9843bd70"
  },
  {
    "url": "others/跨域问题.html",
    "revision": "7fb58fae75fda3e568b3fa2810103853"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "53c33fd33de1322abd2fb06395d7e745"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "e9dd9f89967dbcef3bb0b28c3a45b32d"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "6cd0cbe8931294293538493b2c733efb"
  },
  {
    "url": "tools/typora快捷键.html",
    "revision": "e419c056647b3deb7c31893c6dd0ae56"
  },
  {
    "url": "tools/webstorm/创建宏.html",
    "revision": "a5b4c4472a6d96d4e56631e770567837"
  },
  {
    "url": "tools/webstorm/快捷键.html",
    "revision": "da2b8781da4e0ea7a4f5f333362adc2d"
  },
  {
    "url": "tools/yarn.html",
    "revision": "500c6c7723bbfd4358673d5caab1f4ad"
  },
  {
    "url": "tools/yed-graph-editor快捷键.html",
    "revision": "778f5c4efe010a2803834f80f02d9206"
  },
  {
    "url": "tools/版本管理工具-git/基础.html",
    "revision": "23b201926ef269306ac90729c827fac6"
  },
  {
    "url": "tools/版本管理工具-git/需要掌握的.html",
    "revision": "ceb9ba39b3ce829799499f6b03afc9ce"
  },
  {
    "url": "脚手架工具/browserslist.html",
    "revision": "a36d436ca421d2b4863d7272a5d802a5"
  },
  {
    "url": "脚手架工具/eslint/01-安装.html",
    "revision": "86c9918b7af8f5b4cf98f5b89751a0e1"
  },
  {
    "url": "脚手架工具/eslint/02-使用.html",
    "revision": "2ac116e6a514268c1cabfc73996ce6ae"
  },
  {
    "url": "脚手架工具/eslint/03-vue开发通用的配置.html",
    "revision": "e5e3be1879bacdfcbac33d846815064e"
  },
  {
    "url": "脚手架工具/eslint/04-配合husky与lint-staged.html",
    "revision": "c79661cafc44079193b1dfc6c25202af"
  },
  {
    "url": "脚手架工具/eslint/05-@babel下的eslint-parser.html",
    "revision": "d055ba0bb4ba3605ffec09841fb6b77e"
  },
  {
    "url": "脚手架工具/umd模块打包方法.html",
    "revision": "347ba7bd17a79fd3dbca8ab9a4956e5f"
  },
  {
    "url": "脚手架工具/vue-cli/01-基本配置.html",
    "revision": "9db76c230c4e5c42eaf3e6bb70d1d0b8"
  },
  {
    "url": "脚手架工具/vue-cli/02-loader.html",
    "revision": "66c71c90a9528014e080172304c74388"
  },
  {
    "url": "脚手架工具/vue-cli/03-plugin.html",
    "revision": "6d4292016606302620b2c2bd274919c0"
  },
  {
    "url": "脚手架工具/vue-cli/env.html",
    "revision": "0bcffb9b80dbb28ad7c9886ff8dc1d0a"
  },
  {
    "url": "脚手架工具/vue-cli/loader之image-webpack-loader.html",
    "revision": "6e6619893793765d90ef9d5d1c0752fa"
  },
  {
    "url": "脚手架工具/vue-cli/others.html",
    "revision": "9a60fc606ac04fa7c668d52b91461d8d"
  },
  {
    "url": "脚手架工具/vue-cli/webpack-chain.html",
    "revision": "c70165e2127f0ffb52f533b3fa9e05f4"
  },
  {
    "url": "脚手架工具/vue-cli/新增webpack配置.html",
    "revision": "f71129cb313b940b4f4e674ef0865583"
  },
  {
    "url": "脚手架工具/vue-cli/查看webpack配置.html",
    "revision": "c37708880deef76a61484a64a421d8aa"
  },
  {
    "url": "脚手架工具/vue-cli/配置sass.html",
    "revision": "bc3ea24fcf0454fe99ac1d2de1f9750b"
  },
  {
    "url": "脚手架工具/vue-cli/配置svg.html",
    "revision": "0805540580ccbd223e8f7aa272727467"
  },
  {
    "url": "脚手架工具/vuepress.html",
    "revision": "17526760dcaff4fc179198194e909bd7"
  },
  {
    "url": "脚手架工具/webpack/01-entry.html",
    "revision": "caad11f8a161a37886506a44289fc844"
  },
  {
    "url": "脚手架工具/webpack/02-output.html",
    "revision": "68d2798b1fb8506237dddbb601d2110d"
  },
  {
    "url": "脚手架工具/webpack/03-plugin.html",
    "revision": "7521fb7184ccb21631ddf0aec31d6cd8"
  },
  {
    "url": "脚手架工具/webpack/04-module.html",
    "revision": "8f705836b0a962ffe9bed0d85459755a"
  },
  {
    "url": "脚手架工具/webpack/05-resolve.html",
    "revision": "688f8075029480b5eb5f031f0332fe66"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/others.html",
    "revision": "42f50a4ee937f8a29da5df70d8e677d3"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/splitChunks.html",
    "revision": "f74dc227d15e1801d87527d21209f86e"
  },
  {
    "url": "脚手架工具/webpack/07-其他配置.html",
    "revision": "2d97c9c8b166f3ce862f33f8d59fa352"
  },
  {
    "url": "脚手架工具/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "caba45fe5612b9500a2ccfe871986b5f"
  },
  {
    "url": "脚手架工具/webpack/others.html",
    "revision": "07d0656b0f43fc732d8972e94165248b"
  },
  {
    "url": "脚手架工具/webpack/webpack之devtool .html",
    "revision": "c91684ab281e7a0fc7144a065a42f85d"
  },
  {
    "url": "脚手架工具/webpack/webpack之hash.html",
    "revision": "ac9e8556c3e814bf894f5379fe9e7b41"
  },
  {
    "url": "脚手架工具/webpack/webpack之magic-comments.html",
    "revision": "9c8c70107c3a756433d6e13167ac9548"
  },
  {
    "url": "脚手架工具/webpack/webpack之runtime与manifest.html",
    "revision": "c43ecd2ce1061286653f0be4635dcc7f"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理commonjs.html",
    "revision": "8a1d39605a3d7826c95b0dc986166a52"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理esmodule.html",
    "revision": "031f6509badbce631bfe7a45e1418f66"
  },
  {
    "url": "脚手架工具/webpack/webpack之模块路径解析规则.html",
    "revision": "12a51d35bb0016f944199062be3cae2d"
  },
  {
    "url": "脚手架工具/webpack/模块方法之requireContext.html",
    "revision": "95f993f8f1c962830b2cd68a0f94e7c6"
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
