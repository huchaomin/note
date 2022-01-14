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
    "revision": "5ab5cb7561a7e57919cda0864c3aa313"
  },
  {
    "url": "assets/css/0.styles.d7005c55.css",
    "revision": "52fffa058b74f96c26c3cbdfa74e86b6"
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
    "url": "assets/js/10.e4607e00.js",
    "revision": "90bcf9889b8d516a85730ebc97558ea0"
  },
  {
    "url": "assets/js/11.baa6195e.js",
    "revision": "7f9578f8651174f4ba3272186e5c4c96"
  },
  {
    "url": "assets/js/12.a5a3aadc.js",
    "revision": "8ec271dc977d3e7bc6688c31b6be0839"
  },
  {
    "url": "assets/js/13.7a3ec797.js",
    "revision": "383dca53040982abd7fa9d4a53aab339"
  },
  {
    "url": "assets/js/14.525c56fd.js",
    "revision": "a2f22b5fdb8ed7c46967d7bfb13ff608"
  },
  {
    "url": "assets/js/15.1b0638f6.js",
    "revision": "0d942783330b874e7b97cdd4ad8fb6b1"
  },
  {
    "url": "assets/js/16.ed3137e3.js",
    "revision": "ea77d9a7fdb51cb08317ba62f489b5fb"
  },
  {
    "url": "assets/js/17.0f85c5be.js",
    "revision": "48d13ae25cf2aa84e0a9f3133fe24003"
  },
  {
    "url": "assets/js/18.a19c63a1.js",
    "revision": "4ec08a659dadd042d1b3f100e4eeaaed"
  },
  {
    "url": "assets/js/19.ebe4e99e.js",
    "revision": "7fa5bdcabaff84f6fe2bf067ebf13512"
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
    "url": "assets/js/24.e43eeb19.js",
    "revision": "6eaa5c334d9e04fdbed97becbd1e2513"
  },
  {
    "url": "assets/js/25.6f64c12c.js",
    "revision": "b5bd11ade93c1cc90b9ef5754138c3e2"
  },
  {
    "url": "assets/js/26.5486ee17.js",
    "revision": "44f15804d4fc39b1b2bf2b618863ab82"
  },
  {
    "url": "assets/js/27.db04464a.js",
    "revision": "253df8a92ab9f34c519b6b201af205c4"
  },
  {
    "url": "assets/js/28.3b1a3369.js",
    "revision": "4671183a137b9dc348477cf7681798f9"
  },
  {
    "url": "assets/js/29.e2b6dab9.js",
    "revision": "6ed0fb8e93685833733ec8a680cc9917"
  },
  {
    "url": "assets/js/3.86fd3127.js",
    "revision": "913c6a0b3dcfd857b8358e4b8ad0c651"
  },
  {
    "url": "assets/js/30.40fde176.js",
    "revision": "f97444d287cbedb9b7be191a7b66a1a4"
  },
  {
    "url": "assets/js/31.ddd944b7.js",
    "revision": "1b48826fc2cae69b8289b98225938542"
  },
  {
    "url": "assets/js/32.f6bf1817.js",
    "revision": "30bbe62aa5406a8c32da8d4673a91248"
  },
  {
    "url": "assets/js/33.776daebc.js",
    "revision": "81b5d6575bb1aefd65722f5f6d508a93"
  },
  {
    "url": "assets/js/34.00eea95b.js",
    "revision": "f8495f4460f8e37361e56cd2dd0222c0"
  },
  {
    "url": "assets/js/35.c624b8e9.js",
    "revision": "bf63cef062e15184d7a72a99044bbbd9"
  },
  {
    "url": "assets/js/36.9ca3ed2f.js",
    "revision": "5cd14d0bd52c6b30f170d898d38f898d"
  },
  {
    "url": "assets/js/37.3c66b92f.js",
    "revision": "c3d56e1106f6a4aa73e3378f1512507e"
  },
  {
    "url": "assets/js/38.ed5ce69d.js",
    "revision": "8813a20dedb6a3c373d276be10b44816"
  },
  {
    "url": "assets/js/39.df0f37b9.js",
    "revision": "a486b50de932c2a6574edc326fee9bbd"
  },
  {
    "url": "assets/js/4.d4339d54.js",
    "revision": "568b91f935745641421e04e9093abc85"
  },
  {
    "url": "assets/js/40.adbf84a6.js",
    "revision": "5087eb68aa49fde2606426d3090089b2"
  },
  {
    "url": "assets/js/41.fa8e37bf.js",
    "revision": "9449bf9e916a6e2cbaca4121dbaab2be"
  },
  {
    "url": "assets/js/42.29f5e5f7.js",
    "revision": "47e2e563b01a56f1ee4d25932f5d3a7e"
  },
  {
    "url": "assets/js/43.2f206dc3.js",
    "revision": "102e281021a3b6326b3d7c26cce08c9f"
  },
  {
    "url": "assets/js/44.bfb62740.js",
    "revision": "77d2790e535c3933b8003006a39d85cd"
  },
  {
    "url": "assets/js/45.b179ec4a.js",
    "revision": "541e0b521612e5db0c37abf221c14e1c"
  },
  {
    "url": "assets/js/46.db17099a.js",
    "revision": "97f8a0c64a9c6548496601dd280d5ace"
  },
  {
    "url": "assets/js/47.7ae13b45.js",
    "revision": "f4405e900dfe82ae459171bf4fa2916a"
  },
  {
    "url": "assets/js/48.04268038.js",
    "revision": "20394ca1c7ac082e6ba30e044662fc24"
  },
  {
    "url": "assets/js/49.cabb1ebb.js",
    "revision": "f1738d79c2ed7e30862c8f25e774790d"
  },
  {
    "url": "assets/js/5.0aae2af5.js",
    "revision": "fc518581ddd59bebe7a76d155e624d71"
  },
  {
    "url": "assets/js/50.3bbe9031.js",
    "revision": "75bbd02c49b112cd7295150cc86a32d4"
  },
  {
    "url": "assets/js/51.f84349b1.js",
    "revision": "e7318fe76464ab109c8d41face716c55"
  },
  {
    "url": "assets/js/52.ab2d9a5f.js",
    "revision": "c522ec7c2773624d2974c4ad063e5a34"
  },
  {
    "url": "assets/js/53.db4fea53.js",
    "revision": "2493a69282a9c4b234a34a12a82a85f7"
  },
  {
    "url": "assets/js/54.583b648c.js",
    "revision": "4e08330e62c20264c6fc60082a27cefa"
  },
  {
    "url": "assets/js/55.fc8cfa5d.js",
    "revision": "324f63b257f7bb61a76df0497e2fdeae"
  },
  {
    "url": "assets/js/56.6e3a8941.js",
    "revision": "79310a6c393fc673dc818549f2f07fee"
  },
  {
    "url": "assets/js/57.d35f0830.js",
    "revision": "8f098f5b2d6b403adf3dda9da2017de9"
  },
  {
    "url": "assets/js/58.8c9cfadd.js",
    "revision": "d9501dd961722c263a889f0640796cc8"
  },
  {
    "url": "assets/js/59.0cdb4901.js",
    "revision": "0bb937a6878441a4cea4ae03b85ac7ed"
  },
  {
    "url": "assets/js/6.c374ef02.js",
    "revision": "9d19c5e0ab9781edcb742eee42082f5a"
  },
  {
    "url": "assets/js/60.ab23c091.js",
    "revision": "3b50efcc1ae264af0596947ce4c24265"
  },
  {
    "url": "assets/js/61.45c64728.js",
    "revision": "559a3e942b84ae8d1a7b4485d7d9068a"
  },
  {
    "url": "assets/js/62.7231e036.js",
    "revision": "c3028d6f17b84c30364546d55cf19227"
  },
  {
    "url": "assets/js/63.5accc730.js",
    "revision": "8c82ede5e0c886c91f5dab7be52b8c10"
  },
  {
    "url": "assets/js/64.9d711007.js",
    "revision": "125059d0c0a636a35349fc45c2b63a22"
  },
  {
    "url": "assets/js/65.e5c55ad9.js",
    "revision": "099cd68fe2eb7fccfb16d60207b2b38e"
  },
  {
    "url": "assets/js/66.cb27cc3d.js",
    "revision": "859e0fcf9f6527135e37d4cd8abaee30"
  },
  {
    "url": "assets/js/67.65b52fbf.js",
    "revision": "003f7502f23cc542a3dcb9315fd38d94"
  },
  {
    "url": "assets/js/68.be8844a2.js",
    "revision": "6913ce88f3b7145c8de8a04d76bb7485"
  },
  {
    "url": "assets/js/69.6bcb9e39.js",
    "revision": "8cf3394b0bde81a82588d56c72946f40"
  },
  {
    "url": "assets/js/7.900f1c96.js",
    "revision": "cd06e3f2540369ebd74565f4219aa06a"
  },
  {
    "url": "assets/js/70.ec984c4a.js",
    "revision": "36d3c16d6ec6e7f1b7973cea80b5078d"
  },
  {
    "url": "assets/js/71.e39934f5.js",
    "revision": "d0cb61b38ebaf1a00f6027c7c398170a"
  },
  {
    "url": "assets/js/72.aa68887b.js",
    "revision": "c332efcdc80193ab5fe6c7443867f119"
  },
  {
    "url": "assets/js/73.0c4984d0.js",
    "revision": "68632bc7441c3227dcf067ca2704352d"
  },
  {
    "url": "assets/js/74.f22844ae.js",
    "revision": "1fd9b7ce6fce6c9b7ceb3873dd172417"
  },
  {
    "url": "assets/js/75.9838d436.js",
    "revision": "a358fcfc173ec1e3b9006d461b6921a4"
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
    "url": "assets/js/app.4b1a2c97.js",
    "revision": "20f153d873f7913cce8aab05c30a402c"
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
    "revision": "7cb6cad367cae26d4c85c8fafee3e286"
  },
  {
    "url": "css/reset.html",
    "revision": "e860df19d7a04e4b343daef573e19a32"
  },
  {
    "url": "css/scrollBar.html",
    "revision": "52979ea7fe5daf6646aab7e7852162c7"
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
    "revision": "625b0861306001fc1fbb0131398ef4cd"
  },
  {
    "url": "javascript/bom/Navigator.sendBeacon.html",
    "revision": "6d0d9894f246f137986d02eafc8c69fa"
  },
  {
    "url": "javascript/bom/sessionStorage.html",
    "revision": "7c9604b9eae332ff13a30f77e32417e9"
  },
  {
    "url": "javascript/dom/api-drag.html",
    "revision": "cff91214c74e097d361adb8617b61943"
  },
  {
    "url": "javascript/dom/defer与async.html",
    "revision": "94936d040a9fb57cadf4a064cc7c242b"
  },
  {
    "url": "javascript/dom/preload与prefetch.html",
    "revision": "9f77d088679818b74aaaafc1d757945c"
  },
  {
    "url": "javascript/ESM与现代浏览器.html",
    "revision": "1b442b2310e17efeb70d915f074b59d4"
  },
  {
    "url": "javascript/微任务宏任务执行顺序.html",
    "revision": "e0e82da4b3bcc6ba58b57679e4ec2110"
  },
  {
    "url": "others/interview/a == 1 && a == 2 && a == 3.html",
    "revision": "a86da626f3c319ed256ec46ad6a95e56"
  },
  {
    "url": "others/interview/遍历的异步写法.html",
    "revision": "45cfbaf42f09876dec682851b03e5fc2"
  },
  {
    "url": "others/JSON.html",
    "revision": "99c749d91472f3dc4f37e81120cd615a"
  },
  {
    "url": "others/unicode和utf-8/unicode.html",
    "revision": "d749e8716046a9e1e347e85c668cc5ff"
  },
  {
    "url": "others/unicode和utf-8/utf-8.html",
    "revision": "f9d4f5c6b20e84da9fa46406d6546377"
  },
  {
    "url": "others/web安全.html",
    "revision": "2fee2449006b4f6ce2c05f7762db9340"
  },
  {
    "url": "others/待整理的.html",
    "revision": "4372f8d29a6ebb5c3ae9a4de441afd85"
  },
  {
    "url": "others/跨域问题.html",
    "revision": "546fb96b825a02de7edf5d04d9645cb4"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "bc5c3715bc5e384931851dd1455df3d5"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "25cbd8c1f8c506309f032f354db9e74a"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "4e08e40517868b8383d09c383dc20a2b"
  },
  {
    "url": "tools/typora快捷键.html",
    "revision": "6998055d5a6131ec34b7801c9bdc8953"
  },
  {
    "url": "tools/webstorm/创建宏.html",
    "revision": "f22937161b01b91438b30186d5fe38a4"
  },
  {
    "url": "tools/webstorm/快捷键.html",
    "revision": "1478cd567084359de4a243906cb93e29"
  },
  {
    "url": "tools/yarn.html",
    "revision": "c4ac816a3ba0266c7725baa0f2701af4"
  },
  {
    "url": "tools/yed-graph-editor快捷键.html",
    "revision": "18a39e5c6200d035975433b070e3477d"
  },
  {
    "url": "tools/版本管理工具-git/基础.html",
    "revision": "bcad64a2d4d1fe5233bb99511b819f9b"
  },
  {
    "url": "tools/版本管理工具-git/需要掌握的.html",
    "revision": "3492174308b49ce64de0d3769d64ab97"
  },
  {
    "url": "脚手架工具/browserslist.html",
    "revision": "cd05bfade77809c31bfb26988cb6fe66"
  },
  {
    "url": "脚手架工具/eslint/01-安装.html",
    "revision": "306ed5d4fd31682e19f01aaa652234e2"
  },
  {
    "url": "脚手架工具/eslint/02-使用.html",
    "revision": "a0d7793366e2810beeb9ad638fd2ac98"
  },
  {
    "url": "脚手架工具/eslint/03-vue开发通用的配置.html",
    "revision": "18bf873bf364eda128ded08bdbe8f42e"
  },
  {
    "url": "脚手架工具/eslint/04-配合husky与lint-staged.html",
    "revision": "8fc7009b2302204500e87cf2feb12b2f"
  },
  {
    "url": "脚手架工具/eslint/05-@babel下的eslint-parser.html",
    "revision": "b85dad37942089c46275b36357820340"
  },
  {
    "url": "脚手架工具/umd模块打包方法.html",
    "revision": "0e06ad472e328371d88df1a7355dfe9b"
  },
  {
    "url": "脚手架工具/vue-cli/01-基本配置.html",
    "revision": "8a48ad80f3071a1454016b0dcfef9f59"
  },
  {
    "url": "脚手架工具/vue-cli/02-loader.html",
    "revision": "c9fb6ac641c864847fb1cc231dfd7963"
  },
  {
    "url": "脚手架工具/vue-cli/03-plugin.html",
    "revision": "0fa6b5336c0fbc153486a2a6550e0ba8"
  },
  {
    "url": "脚手架工具/vue-cli/env.html",
    "revision": "9a0b322ca094e6b6fedf6d73d721af61"
  },
  {
    "url": "脚手架工具/vue-cli/loader之image-webpack-loader.html",
    "revision": "191a40b5c7c8db8f938f08db6197db09"
  },
  {
    "url": "脚手架工具/vue-cli/others.html",
    "revision": "361551c6d281305aef98d1b19eecb227"
  },
  {
    "url": "脚手架工具/vue-cli/webpack-chain.html",
    "revision": "d54b91094ab6a3f7ab1a92bdde5b2f31"
  },
  {
    "url": "脚手架工具/vue-cli/新增webpack配置.html",
    "revision": "ba540d8fcc82b298a990fa6764ba4843"
  },
  {
    "url": "脚手架工具/vue-cli/查看webpack配置.html",
    "revision": "5f7c6de449fcae4970a8948b8ac0d932"
  },
  {
    "url": "脚手架工具/vue-cli/配置sass.html",
    "revision": "20ad0c76e6661180746d99b868c10327"
  },
  {
    "url": "脚手架工具/vue-cli/配置svg.html",
    "revision": "6e250feef2f1e47845c23478a37d4b28"
  },
  {
    "url": "脚手架工具/vuepress.html",
    "revision": "dc047deaa464d8debc257e73e74c5a20"
  },
  {
    "url": "脚手架工具/webpack/01-entry.html",
    "revision": "fc4f2883ea65efe57ee451aba2c57105"
  },
  {
    "url": "脚手架工具/webpack/02-output.html",
    "revision": "fca4df3fe2a4adfeee89ccd122bc3010"
  },
  {
    "url": "脚手架工具/webpack/03-plugin.html",
    "revision": "0d28bc514e86741eb6547ede5d4ee1b7"
  },
  {
    "url": "脚手架工具/webpack/04-module.html",
    "revision": "46899ef94cdb598035a584271b9d88f1"
  },
  {
    "url": "脚手架工具/webpack/05-resolve.html",
    "revision": "3304ee87178ad6f871d7b2a18c9ddda8"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/others.html",
    "revision": "1c1566b8d420a31e4760d1bdd121e97b"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/splitChunks.html",
    "revision": "4bac6990714e1a256321fcb7195ffac6"
  },
  {
    "url": "脚手架工具/webpack/07-其他配置.html",
    "revision": "f1a891d3c77346198e4977635cfbce3c"
  },
  {
    "url": "脚手架工具/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "a8ac49b1805edaaa2f113ccdd31ff658"
  },
  {
    "url": "脚手架工具/webpack/others.html",
    "revision": "bb12f6724d1db237423df597a18492ec"
  },
  {
    "url": "脚手架工具/webpack/webpack之devtool .html",
    "revision": "2982432aed86cee15417c23a55cea564"
  },
  {
    "url": "脚手架工具/webpack/webpack之hash.html",
    "revision": "0c8d9a4dfe2de560f897b965335be34e"
  },
  {
    "url": "脚手架工具/webpack/webpack之magic-comments.html",
    "revision": "e56439efed9809aaa10b4ca71e1cd0e3"
  },
  {
    "url": "脚手架工具/webpack/webpack之runtime与manifest.html",
    "revision": "ef37a7647345393ea9a7230c1ec29cbf"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理commonjs.html",
    "revision": "7fde27118fe2413995e9693bf6c5b4da"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理esmodule.html",
    "revision": "7187444af94137013bad20babc2ce82a"
  },
  {
    "url": "脚手架工具/webpack/webpack之模块路径解析规则.html",
    "revision": "f85ab75896497c5c52f57765940d8325"
  },
  {
    "url": "脚手架工具/webpack/模块方法之requireContext.html",
    "revision": "254bf46abb7f3b401b8d82fe30fc194b"
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
