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
    "revision": "87cc310aa0b3f1383c02037efaa2f928"
  },
  {
    "url": "assets/css/2.styles.56421f04.css",
    "revision": "5849dd6c3c284933e143139831db1930"
  },
  {
    "url": "assets/css/3.styles.1fb9a183.css",
    "revision": "e7b306552d77ecb9039512cfe150cde2"
  },
  {
    "url": "assets/css/7.styles.209db1ec.css",
    "revision": "4dfd954af9da41878ca5b77c1ec7d6f2"
  },
  {
    "url": "assets/css/75.styles.e5fa043e.css",
    "revision": "8a1c07907d554d95e1eb754342965883"
  },
  {
    "url": "assets/css/77.styles.e56dd3d3.css",
    "revision": "169d6f7b23b70d80f3e60a762b518dd4"
  },
  {
    "url": "assets/css/styles.ba9aafd3.css",
    "revision": "a7ead4d1c2020b407d5e6565c289b749"
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
    "url": "assets/js/10.2eb1e14b.js",
    "revision": "523d73e18d008e8261294a63690e03ff"
  },
  {
    "url": "assets/js/11.528b4b6a.js",
    "revision": "893639aa3ed8b75e930edce89299c045"
  },
  {
    "url": "assets/js/12.59759e00.js",
    "revision": "a95bcaf401db8a1557ca2c82f72fc8f9"
  },
  {
    "url": "assets/js/13.f189bcba.js",
    "revision": "777490220c35b7244c322d711e4e3b27"
  },
  {
    "url": "assets/js/14.1afe6e19.js",
    "revision": "bc6034e6c6d9e584e66b20f39b97f875"
  },
  {
    "url": "assets/js/15.e45d53dc.js",
    "revision": "154908e9e9fcc8cc2415d9b5d6d963ea"
  },
  {
    "url": "assets/js/16.16706568.js",
    "revision": "b51b38282dfff4839430821275cb04d4"
  },
  {
    "url": "assets/js/17.60ee7016.js",
    "revision": "1132d1f55a976277ce6cf411f8fc034d"
  },
  {
    "url": "assets/js/18.913a199d.js",
    "revision": "44c32e425370caf3c0e045b5d0e3ea48"
  },
  {
    "url": "assets/js/19.78aa8f6e.js",
    "revision": "f304de1a7cef1339cdb81d17bfdd37af"
  },
  {
    "url": "assets/js/20.34506c92.js",
    "revision": "078a13667ac29097dbc317c286dac818"
  },
  {
    "url": "assets/js/21.c3555590.js",
    "revision": "c495cb96764940ca70d09b8d91cb8835"
  },
  {
    "url": "assets/js/22.7b47eb6e.js",
    "revision": "2891f1b404cf6880eed520064e7d38fd"
  },
  {
    "url": "assets/js/23.d8abf30e.js",
    "revision": "bf09a6b9459ce744a05e8b8458535d6a"
  },
  {
    "url": "assets/js/24.9f0971ea.js",
    "revision": "36e7658131d1297b1e8c08bd314ffd74"
  },
  {
    "url": "assets/js/25.d6684594.js",
    "revision": "c3fc48af36b7f3bad4d7e3271fce0915"
  },
  {
    "url": "assets/js/26.d9f513b3.js",
    "revision": "0a730b94031963c4d65316a52a31c9db"
  },
  {
    "url": "assets/js/27.9a7dca51.js",
    "revision": "6d2b9d73775e69e8dd9ae066147ae9f8"
  },
  {
    "url": "assets/js/28.6a01f984.js",
    "revision": "a1abebd0e7a462438759d468dc815f8f"
  },
  {
    "url": "assets/js/29.ea979810.js",
    "revision": "8390848f55a1fbb42eceb07feec1c5f7"
  },
  {
    "url": "assets/js/30.853a4f4c.js",
    "revision": "069a3d964dc6fc060e559b11854c1a81"
  },
  {
    "url": "assets/js/31.e414f511.js",
    "revision": "faa96731909efe2d74abaad138690f1f"
  },
  {
    "url": "assets/js/32.2ad352e0.js",
    "revision": "d3ebe3a1b536e04315d7aacc1043b3ce"
  },
  {
    "url": "assets/js/33.1c6284ce.js",
    "revision": "2fafe5808fff00ab05e8746749dc3143"
  },
  {
    "url": "assets/js/34.47cdb25f.js",
    "revision": "327f88536e7a9227f5800653c75441e8"
  },
  {
    "url": "assets/js/35.93e28d5a.js",
    "revision": "9ebf8751cc5012cfbaf4c3610285ed19"
  },
  {
    "url": "assets/js/36.cbc17b44.js",
    "revision": "adea0e49ba5ed7ff53eeb2a81305feb3"
  },
  {
    "url": "assets/js/37.966a784d.js",
    "revision": "c4ba6c6f38b4a3da640c44dc8013a39f"
  },
  {
    "url": "assets/js/38.83cf01f7.js",
    "revision": "27288b857e56a7de09a9be7bedafe9bb"
  },
  {
    "url": "assets/js/39.04fe97ef.js",
    "revision": "e51d07746ee6786666e1d9b71101b65d"
  },
  {
    "url": "assets/js/4.ffbebbe3.js",
    "revision": "f48ff37475a8c63069ef56be6f0fb3f8"
  },
  {
    "url": "assets/js/40.83244662.js",
    "revision": "e280de4c1658c0c6ca3dc23904369fa9"
  },
  {
    "url": "assets/js/41.075a837c.js",
    "revision": "a6b7c1d147918bcf6b0dda654bcb01f3"
  },
  {
    "url": "assets/js/42.1e20fbb4.js",
    "revision": "61ca703335592aaad4305a437cf5f356"
  },
  {
    "url": "assets/js/43.a1f2d213.js",
    "revision": "200e57eca52c425aad3ee545798f52b7"
  },
  {
    "url": "assets/js/44.02f1d552.js",
    "revision": "dc9d8fdc3ea80df64bb3915a657da6cc"
  },
  {
    "url": "assets/js/45.f4372a84.js",
    "revision": "207960dd1452c83b12f0dd67683f3a92"
  },
  {
    "url": "assets/js/46.0358da92.js",
    "revision": "9bcba72a2c6ab77bcd562369865786ef"
  },
  {
    "url": "assets/js/47.0491660d.js",
    "revision": "8fab25030b3405514a867a3f2c77418f"
  },
  {
    "url": "assets/js/48.f48561ea.js",
    "revision": "7227de1ab82a7dfde5367ac5268fa7ee"
  },
  {
    "url": "assets/js/49.5f909ea1.js",
    "revision": "20f7741679d88dfffcf5d8f07249b41c"
  },
  {
    "url": "assets/js/50.3345563d.js",
    "revision": "638500f34207fed03a00c5802b56c7d5"
  },
  {
    "url": "assets/js/51.0e9e51ee.js",
    "revision": "70e8108233fbd72eeb9474a5c4f51752"
  },
  {
    "url": "assets/js/52.ae105c68.js",
    "revision": "94332d3ac9f6de2c506c746287a1f982"
  },
  {
    "url": "assets/js/53.94a266d7.js",
    "revision": "2ce01692cb0a4379c44deae5c732b220"
  },
  {
    "url": "assets/js/54.aeaef22e.js",
    "revision": "659dd4039886f290e527b3239fd9eb36"
  },
  {
    "url": "assets/js/55.5fb77880.js",
    "revision": "30946fa78a1eaab9c9c77c5fb25cd96f"
  },
  {
    "url": "assets/js/56.284d3ed7.js",
    "revision": "84a707485ac8dd83a938a67ffe77c44b"
  },
  {
    "url": "assets/js/57.866373e2.js",
    "revision": "52d16c2597b6b54ef8be233ca0eba621"
  },
  {
    "url": "assets/js/58.b5687765.js",
    "revision": "2198b26c327c374d378f900008da9371"
  },
  {
    "url": "assets/js/59.2bbd40da.js",
    "revision": "25678b37da872f72de0939056993e286"
  },
  {
    "url": "assets/js/6.8dc4a02c.js",
    "revision": "5403d0a865287cb4a235b26f7dfbae2a"
  },
  {
    "url": "assets/js/60.b616b4dc.js",
    "revision": "fc91d7002829b30a2609e154559cbdd7"
  },
  {
    "url": "assets/js/61.431634d3.js",
    "revision": "2ef61392eb5a5a5c7788e32a2ba85033"
  },
  {
    "url": "assets/js/62.5439b646.js",
    "revision": "3412ff4665e7f872e9a6c4f0db1bbe55"
  },
  {
    "url": "assets/js/63.debb7b92.js",
    "revision": "97d9ee30bc3bbd483feed791810ad587"
  },
  {
    "url": "assets/js/64.ec3ae410.js",
    "revision": "0d46a7e270e2e0954ef974f5be1f7ed2"
  },
  {
    "url": "assets/js/65.ef9b0de3.js",
    "revision": "68092786d4dfd31d86b9cb61417bb291"
  },
  {
    "url": "assets/js/66.c1657587.js",
    "revision": "56f63826a53e94fd0f49366a9158fdad"
  },
  {
    "url": "assets/js/67.5ca3bf35.js",
    "revision": "6effd67cf4060bd3137cca5f9bb0b1b5"
  },
  {
    "url": "assets/js/68.dce719da.js",
    "revision": "395142ef6870e1ba3bf3c55e60db3064"
  },
  {
    "url": "assets/js/69.454cb7b2.js",
    "revision": "1e57fcca2a455ad6329db216c03677eb"
  },
  {
    "url": "assets/js/7.209db1ec.js",
    "revision": "ab1fea5f0c93098bedb9007bc819bc95"
  },
  {
    "url": "assets/js/70.be68bc87.js",
    "revision": "546d9daa5cd50686ecd3a83b302de9e6"
  },
  {
    "url": "assets/js/71.bab81257.js",
    "revision": "16f35905d8fbd119a5b288154630af55"
  },
  {
    "url": "assets/js/72.dea3f2e1.js",
    "revision": "755156fa38a353c70b2e1c7079981da6"
  },
  {
    "url": "assets/js/73.f80d6236.js",
    "revision": "5a9a4ea4ba54f6e1edc5a41fe37b0dc4"
  },
  {
    "url": "assets/js/76.78562154.js",
    "revision": "57754e6773785eed4a3ab11b1f35de7d"
  },
  {
    "url": "assets/js/77.e56dd3d3.js",
    "revision": "1cbf8124ce80a5be748bb93ce6f8fc05"
  },
  {
    "url": "assets/js/78.f16cb717.js",
    "revision": "fb89b6dea7e5e47a35bca062ca9d2515"
  },
  {
    "url": "assets/js/8.c39fc5e7.js",
    "revision": "f15795091cb406e4508152bae4530164"
  },
  {
    "url": "assets/js/app.ba9aafd3.js",
    "revision": "e3986d49c2fdf6e6ff8568a43b1be9b5"
  },
  {
    "url": "assets/js/chunk-default.1fb9a183.js",
    "revision": "073f8394fa38d276ae687996f8390b88"
  },
  {
    "url": "assets/js/chunk-vuepress.56421f04.js",
    "revision": "5416fb3d22f82456d1ff6c50b7b4c5a6"
  },
  {
    "url": "assets/js/chunk-vuetify.e5fa043e.js",
    "revision": "a16cd8fd6bbca799bf873026b7c9c0c3"
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
    "revision": "641b34ce206f5474237e0b270f8f96f8"
  },
  {
    "url": "css/reset.html",
    "revision": "b15a74c9ce808221f35ed71e0b20565c"
  },
  {
    "url": "css/scrollBar.html",
    "revision": "8d0136440ed706b53605a38f55ec04a3"
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
    "revision": "b4a13c62cf26569970b48b8684a64adf"
  },
  {
    "url": "javascript/bom/Navigator.sendBeacon.html",
    "revision": "df19c771bea5d753399e6e73e4dfc108"
  },
  {
    "url": "javascript/bom/sessionStorage.html",
    "revision": "2fe75d156704dbcb4d37344385985114"
  },
  {
    "url": "javascript/dom/api-drag.html",
    "revision": "520ed0fd8e46297f9a6f492257f6ed6b"
  },
  {
    "url": "javascript/dom/defer与async.html",
    "revision": "62ad80677f561ea622559000ca94a607"
  },
  {
    "url": "javascript/dom/preload与prefetch.html",
    "revision": "45b43ca29020a503ab4ee1f760d2d0b9"
  },
  {
    "url": "javascript/ESM与现代浏览器.html",
    "revision": "66d6a3ffd768a5df35f4db8d1ce049b9"
  },
  {
    "url": "javascript/微任务宏任务执行顺序.html",
    "revision": "1ebbfb793722b72353184bdd1fea6346"
  },
  {
    "url": "others/interview/a == 1 && a == 2 && a == 3.html",
    "revision": "5658acb5be4fbc669e1d32ed49dc705c"
  },
  {
    "url": "others/interview/遍历的异步写法.html",
    "revision": "2b44170ec39d3460fafd3f623afacaac"
  },
  {
    "url": "others/JSON.html",
    "revision": "0887d9f998b78a634558ecefff799cad"
  },
  {
    "url": "others/unicode和utf-8/unicode.html",
    "revision": "ac4349bd8f19587923230a1e917b1bfb"
  },
  {
    "url": "others/unicode和utf-8/utf-8.html",
    "revision": "d3ee938625121debd9ad9b4437a02f1a"
  },
  {
    "url": "others/web安全.html",
    "revision": "68fdce22414ced83c0b6778328ad8bb1"
  },
  {
    "url": "others/待整理的.html",
    "revision": "1bf2b0e8547ec894354733334ef13126"
  },
  {
    "url": "others/跨域问题.html",
    "revision": "324e547fc8ba7e08cdf1a54a42a1fc73"
  },
  {
    "url": "report.html",
    "revision": "775e24c017a57da33d3645cf0dc9f2fc"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "ce0a654bb6cdf66753344c1979604400"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "eeed05df6af2ce3ea7e223aaffa9f69f"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "6ded37619ab05c1673edf695a8302281"
  },
  {
    "url": "tools/typora快捷键.html",
    "revision": "0a7ecf1e13ebafd5829fed3a7a47e259"
  },
  {
    "url": "tools/webstorm/创建宏.html",
    "revision": "72da29c0d47dbb8ffc6be88ff823eddf"
  },
  {
    "url": "tools/webstorm/快捷键.html",
    "revision": "b6cb4333c8a13f9f1ff14a0224d0bd7e"
  },
  {
    "url": "tools/yarn.html",
    "revision": "012ef900b9c5af90a6cfd27c3f177cc1"
  },
  {
    "url": "tools/yed-graph-editor快捷键.html",
    "revision": "f966234f81020a0090c608dd5a20b4f8"
  },
  {
    "url": "tools/版本管理工具-git/基础.html",
    "revision": "544c2aab82ab4343a9a1b6e72073de82"
  },
  {
    "url": "tools/版本管理工具-git/需要掌握的.html",
    "revision": "3e61c64e69883e0f49b90427de6e6985"
  },
  {
    "url": "脚手架工具/browserslist.html",
    "revision": "383b53f5f9c4e29c08822133f5affed3"
  },
  {
    "url": "脚手架工具/eslint/01-安装.html",
    "revision": "ae37ef8671d300a52553aef3bf6bff14"
  },
  {
    "url": "脚手架工具/eslint/02-使用.html",
    "revision": "4af0a68c901f582df9be0a2c9c28c0ad"
  },
  {
    "url": "脚手架工具/eslint/03-vue开发通用的配置.html",
    "revision": "030315edb3ef68eb789a59aca86d3006"
  },
  {
    "url": "脚手架工具/eslint/04-配合husky与lint-staged.html",
    "revision": "0db20ce572b4457216339a71f6027f3b"
  },
  {
    "url": "脚手架工具/eslint/05-@babel下的eslint-parser.html",
    "revision": "3c1c37fb598b0d419f9ac347280dbd38"
  },
  {
    "url": "脚手架工具/umd模块打包方法.html",
    "revision": "beb217574cc77d3d95ca9d5cf24c8bb7"
  },
  {
    "url": "脚手架工具/vue-cli/01-基本配置.html",
    "revision": "9c4a0d0da87a8cbbfb7134ed4fcba69a"
  },
  {
    "url": "脚手架工具/vue-cli/02-loader.html",
    "revision": "c09f54c8107c886bfe1c7d1c787eb00c"
  },
  {
    "url": "脚手架工具/vue-cli/03-plugin.html",
    "revision": "39ef211aeb53d3c4ab73022180046269"
  },
  {
    "url": "脚手架工具/vue-cli/env.html",
    "revision": "2166e6e3de856f7df97e0917b61faf5c"
  },
  {
    "url": "脚手架工具/vue-cli/loader之image-webpack-loader.html",
    "revision": "fbfe1bf69ab3123b14d7c58e07db15f8"
  },
  {
    "url": "脚手架工具/vue-cli/others.html",
    "revision": "90295b99888f5d977ba6227789d2f129"
  },
  {
    "url": "脚手架工具/vue-cli/webpack-chain.html",
    "revision": "ad952a6a1657610b78900b19b1179c81"
  },
  {
    "url": "脚手架工具/vue-cli/新增webpack配置.html",
    "revision": "0544867830111dc7b25a113d7582f552"
  },
  {
    "url": "脚手架工具/vue-cli/查看webpack配置.html",
    "revision": "97e3f4d434bb485ca1ac9bc7cd6b7da4"
  },
  {
    "url": "脚手架工具/vue-cli/配置sass.html",
    "revision": "d365a41abcad78e30287faed2b040a37"
  },
  {
    "url": "脚手架工具/vue-cli/配置svg.html",
    "revision": "8b2447fbae4066bf04d1374ad4b95182"
  },
  {
    "url": "脚手架工具/vuepress.html",
    "revision": "577ebf22526644d78b719f9da1e1113d"
  },
  {
    "url": "脚手架工具/webpack/01-entry.html",
    "revision": "8162aff754cadbe095e67b7e6626f1ac"
  },
  {
    "url": "脚手架工具/webpack/02-output.html",
    "revision": "cd72632fb4fe7e7ba9740fa2407e6a13"
  },
  {
    "url": "脚手架工具/webpack/03-plugin.html",
    "revision": "e287fa9cabe298fe20606426593c4cde"
  },
  {
    "url": "脚手架工具/webpack/04-module.html",
    "revision": "d7ba8d09e3512123a1b0234442430e23"
  },
  {
    "url": "脚手架工具/webpack/05-resolve.html",
    "revision": "6f9070acf1224fd95e069a87fc2452a9"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/others.html",
    "revision": "55050f21d8881dd8ee1772a3b88c97c4"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/splitChunks.html",
    "revision": "216b8b782f0160d0fa74abbce22233bc"
  },
  {
    "url": "脚手架工具/webpack/07-其他配置.html",
    "revision": "3144f021b592b69e85fc07cec189b1a1"
  },
  {
    "url": "脚手架工具/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "864a92af98d5de12d763e4bf13002a53"
  },
  {
    "url": "脚手架工具/webpack/others.html",
    "revision": "b96709e37edabe462d44bd9d6407165e"
  },
  {
    "url": "脚手架工具/webpack/webpack之devtool .html",
    "revision": "e9e15f0d260efaaeb24d4aa002f92538"
  },
  {
    "url": "脚手架工具/webpack/webpack之hash.html",
    "revision": "ab09dd010579bff13d2acd26cfe7c32a"
  },
  {
    "url": "脚手架工具/webpack/webpack之magic-comments.html",
    "revision": "f34264ae204d7ec2444f6f9a8bd8ca1d"
  },
  {
    "url": "脚手架工具/webpack/webpack之runtime与manifest.html",
    "revision": "0e380a71227df310df0067ba06ec18f8"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理commonjs.html",
    "revision": "6a025ce34d1473a9a1b1218e0add8ea5"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理esmodule.html",
    "revision": "dad3157d75209e961e0f2fe0c7630053"
  },
  {
    "url": "脚手架工具/webpack/webpack之模块路径解析规则.html",
    "revision": "14b84ad66c438b63677f17e105c4eb96"
  },
  {
    "url": "脚手架工具/webpack/模块方法之requireContext.html",
    "revision": "caa564a04bcda7c95e8a99387ffacbe5"
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
