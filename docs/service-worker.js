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
    "revision": "5991ae49ae2a1da17c0444a4cb2e0929"
  },
  {
    "url": "assets/css/0.styles.f222c1c4.css",
    "revision": "f46f32f7bed8269819a2506637a86e21"
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
    "url": "assets/js/10.72cd1020.js",
    "revision": "e3f3900d85ec47a930f4fb0bcc5273d3"
  },
  {
    "url": "assets/js/11.baa6195e.js",
    "revision": "7f9578f8651174f4ba3272186e5c4c96"
  },
  {
    "url": "assets/js/12.5bd019be.js",
    "revision": "0c2afc33393db26d5c062d2cf7b52928"
  },
  {
    "url": "assets/js/13.77193293.js",
    "revision": "4b3d57891e66041e50d16f2a70fb338b"
  },
  {
    "url": "assets/js/14.8877fc40.js",
    "revision": "283f9acd4582c1a54e605f303f38493c"
  },
  {
    "url": "assets/js/15.1b0638f6.js",
    "revision": "0d942783330b874e7b97cdd4ad8fb6b1"
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
    "url": "assets/js/18.6efd241d.js",
    "revision": "345e809edcafe687f70006f0a8571271"
  },
  {
    "url": "assets/js/19.3c4b5cf4.js",
    "revision": "f5ce99539fcf97c46d1641a3aebe0150"
  },
  {
    "url": "assets/js/2.6927cabe.js",
    "revision": "302a95672ecd3dfbe45b44e7aa999c7b"
  },
  {
    "url": "assets/js/20.5a326b3e.js",
    "revision": "3093442dd74b4d8a59e63b4072d5ab45"
  },
  {
    "url": "assets/js/21.01d50fc6.js",
    "revision": "777bd9886875df07c7b7d0e0c0041933"
  },
  {
    "url": "assets/js/22.93fe4aeb.js",
    "revision": "f80cd362ea7ee66d7aa43ea818bc8b76"
  },
  {
    "url": "assets/js/23.474c36ee.js",
    "revision": "8dddbe6f4a7e652c785dd2def61102e9"
  },
  {
    "url": "assets/js/24.cd394b03.js",
    "revision": "b5edd47ffb2b43ed989bf2075240a1cf"
  },
  {
    "url": "assets/js/25.099fdc4d.js",
    "revision": "04530c4d821e76b7d4ac5496c1a18fa7"
  },
  {
    "url": "assets/js/26.5486ee17.js",
    "revision": "44f15804d4fc39b1b2bf2b618863ab82"
  },
  {
    "url": "assets/js/27.89a84f3d.js",
    "revision": "2f4a78cd13a83af1eb235bf94c472938"
  },
  {
    "url": "assets/js/28.434cf2d5.js",
    "revision": "6acbb1e4b15c9673cad417dca2c1f65f"
  },
  {
    "url": "assets/js/29.13c1a0fd.js",
    "revision": "e3a048b02b13fc73b42cb27b78f126e3"
  },
  {
    "url": "assets/js/3.09cce110.js",
    "revision": "4849eee9029bd92ae03c47299c0ad2f1"
  },
  {
    "url": "assets/js/30.ae323e1d.js",
    "revision": "51abe6cc4e60171184d33b9072b4957d"
  },
  {
    "url": "assets/js/31.21c569bb.js",
    "revision": "6eb83d6bcd6448c1ec0f2d2607431762"
  },
  {
    "url": "assets/js/32.0d375fe7.js",
    "revision": "d1f634129adb45fce7b18218b3054ee1"
  },
  {
    "url": "assets/js/33.2cdc4238.js",
    "revision": "d02014ba52b0da838d43e632a66f73ec"
  },
  {
    "url": "assets/js/34.5023d49a.js",
    "revision": "dd2995b9443b9e97628d4263f3b3d5e3"
  },
  {
    "url": "assets/js/35.31be1623.js",
    "revision": "774c0a1a02c700a76ffec01ff96fb29a"
  },
  {
    "url": "assets/js/36.7ec1f25a.js",
    "revision": "61044c3d861f12feb394154372b1d30d"
  },
  {
    "url": "assets/js/37.2f8fb461.js",
    "revision": "8b2da7738a3a9623fb80f7286070d5a7"
  },
  {
    "url": "assets/js/38.09764c61.js",
    "revision": "16aedecaef7e95c2af386b167f8c29e5"
  },
  {
    "url": "assets/js/39.7f6d7263.js",
    "revision": "d3992602692544f29b7bb66520f69ee2"
  },
  {
    "url": "assets/js/4.d4339d54.js",
    "revision": "568b91f935745641421e04e9093abc85"
  },
  {
    "url": "assets/js/40.00655eea.js",
    "revision": "dd8cf256ece5da0a9c890f5eb5d3f2ae"
  },
  {
    "url": "assets/js/41.840322b8.js",
    "revision": "1bff14f6da5e0cc474b4a7ab18a5643c"
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
    "url": "assets/js/46.5032d0b7.js",
    "revision": "0c2fad2a047b334c1e6ed58403ac5b1a"
  },
  {
    "url": "assets/js/47.66ba01ad.js",
    "revision": "664c5d10a7ce8b6998a82bb8c8021492"
  },
  {
    "url": "assets/js/48.0bc7adb7.js",
    "revision": "2e6adac7a34d86f8d90aed5659eeca3e"
  },
  {
    "url": "assets/js/49.f549f8f9.js",
    "revision": "0df5729b3ecd1b53f7ce02d20f3f1fc7"
  },
  {
    "url": "assets/js/5.db34ec49.js",
    "revision": "59a8a59eea979d90736520c8a3982e62"
  },
  {
    "url": "assets/js/50.008f7299.js",
    "revision": "a73dd05a0f72633f1e376ef350346020"
  },
  {
    "url": "assets/js/51.4f3f629b.js",
    "revision": "deb9f09704bf707b21c03f5ea1b4511a"
  },
  {
    "url": "assets/js/52.49fa98f5.js",
    "revision": "761a96f7e4694513727dde0913918f32"
  },
  {
    "url": "assets/js/53.8ad5a950.js",
    "revision": "ea1312e070ad8d86bb41f672408304ba"
  },
  {
    "url": "assets/js/54.f26ea782.js",
    "revision": "7367aec09b432df3d2b6fec38201a3af"
  },
  {
    "url": "assets/js/55.621f08ed.js",
    "revision": "3749b67d7f2475b7519678857723506a"
  },
  {
    "url": "assets/js/56.245621ec.js",
    "revision": "6c94c4c27a046b1499b86c766d2a6d8b"
  },
  {
    "url": "assets/js/57.d35f0830.js",
    "revision": "8f098f5b2d6b403adf3dda9da2017de9"
  },
  {
    "url": "assets/js/58.7476bf0f.js",
    "revision": "3f3725fdf6c3d25d755007f049fefcdc"
  },
  {
    "url": "assets/js/59.8c19d7e2.js",
    "revision": "83d88d17b5192daa5d7ae4cb551bf7fb"
  },
  {
    "url": "assets/js/6.c374ef02.js",
    "revision": "9d19c5e0ab9781edcb742eee42082f5a"
  },
  {
    "url": "assets/js/60.c1188183.js",
    "revision": "c54cbcdb6bcbc5630502363672238598"
  },
  {
    "url": "assets/js/61.202d7908.js",
    "revision": "47ff924886f205b22ba3b7176c171714"
  },
  {
    "url": "assets/js/62.ba074884.js",
    "revision": "305de4c66e71cba91cd7b82689f73eef"
  },
  {
    "url": "assets/js/63.b9d715dd.js",
    "revision": "f60e0aba57dfc5c42b3968c96e013248"
  },
  {
    "url": "assets/js/64.128e425e.js",
    "revision": "7376b5557afd5a823d535c3e5c998610"
  },
  {
    "url": "assets/js/65.f690e2dc.js",
    "revision": "a3d003a9264e6678dc85602680c1912a"
  },
  {
    "url": "assets/js/66.cb27cc3d.js",
    "revision": "859e0fcf9f6527135e37d4cd8abaee30"
  },
  {
    "url": "assets/js/67.8a93dfce.js",
    "revision": "c847e4eb17a6ed3fcb02ff90a3a88843"
  },
  {
    "url": "assets/js/68.23cc1ac7.js",
    "revision": "4822eaa0e602d7be91b2de939eac0d6f"
  },
  {
    "url": "assets/js/69.b3368daa.js",
    "revision": "eb1a8c150b9989e2bd1d2bb66a6b796c"
  },
  {
    "url": "assets/js/7.900f1c96.js",
    "revision": "cd06e3f2540369ebd74565f4219aa06a"
  },
  {
    "url": "assets/js/70.4b338fb7.js",
    "revision": "34110b98dd6e3d95231655956521a031"
  },
  {
    "url": "assets/js/71.735e324b.js",
    "revision": "44cb3fa120acfc496ae850684451ebeb"
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
    "url": "assets/js/9.13568e0d.js",
    "revision": "b90c5729043e1ca1796dfa8bc5bc88e3"
  },
  {
    "url": "assets/js/app.5fdba674.js",
    "revision": "60ecb093f06ae13b0b8571e1e388d085"
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
    "revision": "6e88f5d844803e24550a1e67c6b3c7eb"
  },
  {
    "url": "css/reset.html",
    "revision": "98df128ae8aada79bd2fe539266c785d"
  },
  {
    "url": "css/scrollBar.html",
    "revision": "82e709817cfced5c2a0326d716d41e6d"
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
    "revision": "e73d4ff446ea94bfb613f22cd432800d"
  },
  {
    "url": "javascript/bom/Navigator.sendBeacon.html",
    "revision": "9d902bec512befe661a82642c4410a24"
  },
  {
    "url": "javascript/bom/sessionStorage.html",
    "revision": "8e340e94f5e91c1ff6ed0a2eb44137c1"
  },
  {
    "url": "javascript/dom/api-drag.html",
    "revision": "2d1221f89cf61790f05fd64fc89a3f33"
  },
  {
    "url": "javascript/dom/defer与async.html",
    "revision": "1e87c049ddd3ef3bfcbce9890c9742e1"
  },
  {
    "url": "javascript/dom/preload与prefetch.html",
    "revision": "77ea39be0d748c4850a1f71a5e7477d8"
  },
  {
    "url": "javascript/ESM与现代浏览器.html",
    "revision": "e0813834c2491594c51fee418fa2d681"
  },
  {
    "url": "javascript/微任务宏任务执行顺序.html",
    "revision": "0b1a4e6eb8dca5396e598a94d78abd16"
  },
  {
    "url": "others/interview/a == 1 && a == 2 && a == 3.html",
    "revision": "c77db1cb6da79cf595def9d3e6cfdca2"
  },
  {
    "url": "others/interview/遍历的异步写法.html",
    "revision": "30d3c1784867b9a01a742bf6c1677850"
  },
  {
    "url": "others/JSON.html",
    "revision": "47c5b101d9c74b6552cfcdb421582fbb"
  },
  {
    "url": "others/unicode和utf-8/unicode.html",
    "revision": "9892f38cd3abd65c95b506124470bfd3"
  },
  {
    "url": "others/unicode和utf-8/utf-8.html",
    "revision": "dd90d462291d70756d82615da8ccc24a"
  },
  {
    "url": "others/web安全.html",
    "revision": "4a1d831941a96df74b51034bfd4988f8"
  },
  {
    "url": "others/待整理的.html",
    "revision": "d7a5bc51e375d5511d60ebbae12d5b2d"
  },
  {
    "url": "others/跨域问题.html",
    "revision": "bd3d9b410e77a6caa447c857ad680cae"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "a2918c2373d44fc00dfcac704fbfa9f3"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "c4ab80b6b7345598a923f1c9248e5943"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "66e2c45e3ced78045fb72fa1219f7fea"
  },
  {
    "url": "tools/typora快捷键.html",
    "revision": "a942b957be784a44b5845853d63560a4"
  },
  {
    "url": "tools/webstorm/创建宏.html",
    "revision": "acfad263cfffb878324009576ab5bd95"
  },
  {
    "url": "tools/webstorm/快捷键.html",
    "revision": "fb2374e70b4e5455ede5ccacfc0dd741"
  },
  {
    "url": "tools/yarn.html",
    "revision": "98a7c0df187c3fba791aa466efbba522"
  },
  {
    "url": "tools/yed-graph-editor快捷键.html",
    "revision": "f6a3f237eb97d8dc1f7a7fdf55e9b11e"
  },
  {
    "url": "tools/版本管理工具-git/基础.html",
    "revision": "a6c756afad65a70e200b6e094e2a5e51"
  },
  {
    "url": "tools/版本管理工具-git/需要掌握的.html",
    "revision": "36a5911f61784daeb9fb0f45751d1b61"
  },
  {
    "url": "脚手架工具/browserslist.html",
    "revision": "c246ab5217bbea6bf99ab3f00d79bcea"
  },
  {
    "url": "脚手架工具/eslint/01-安装.html",
    "revision": "c235c2ce31699468d1321dea1b739164"
  },
  {
    "url": "脚手架工具/eslint/02-使用.html",
    "revision": "2646391ffd2e0c4b0c66b94c5877b73e"
  },
  {
    "url": "脚手架工具/eslint/03-vue开发通用的配置.html",
    "revision": "04e8011f91022ac8e31652bbb14f93a5"
  },
  {
    "url": "脚手架工具/eslint/04-配合husky与lint-staged.html",
    "revision": "776228fa6a91b23cf1fbac4e2067549f"
  },
  {
    "url": "脚手架工具/eslint/05-@babel下的eslint-parser.html",
    "revision": "dab30af193b7e5c27c71166f12e591ef"
  },
  {
    "url": "脚手架工具/umd模块打包方法.html",
    "revision": "932cde820f33f7e156913f3f77bc0176"
  },
  {
    "url": "脚手架工具/vue-cli/01-基本配置.html",
    "revision": "33afd819719797e5779a092960e761e5"
  },
  {
    "url": "脚手架工具/vue-cli/02-loader.html",
    "revision": "8101e0505bd0aff8dc592eb72d6737ce"
  },
  {
    "url": "脚手架工具/vue-cli/03-plugin.html",
    "revision": "8d9cc1cd7ab21eca3c0311572f707b9e"
  },
  {
    "url": "脚手架工具/vue-cli/env.html",
    "revision": "9a5fabb84af020d6e48d002b940cb0a3"
  },
  {
    "url": "脚手架工具/vue-cli/loader之image-webpack-loader.html",
    "revision": "91ac4e9c24d7649b204d0932419836fe"
  },
  {
    "url": "脚手架工具/vue-cli/others.html",
    "revision": "0511952e995c8a77f30fb9a6f80f8d22"
  },
  {
    "url": "脚手架工具/vue-cli/webpack-chain.html",
    "revision": "5d0887e142f22c11abf6efa111e3b3c2"
  },
  {
    "url": "脚手架工具/vue-cli/新增webpack配置.html",
    "revision": "83789e5b64aef64f730ffd02db27d6b3"
  },
  {
    "url": "脚手架工具/vue-cli/查看webpack配置.html",
    "revision": "c8052a63ffc6f869ed63611cab9ca978"
  },
  {
    "url": "脚手架工具/vue-cli/配置sass.html",
    "revision": "b1db840259c9ab88fb8b77b2e6944648"
  },
  {
    "url": "脚手架工具/vue-cli/配置svg.html",
    "revision": "41a57474968bedae1a94ac2af5d90749"
  },
  {
    "url": "脚手架工具/vuepress.html",
    "revision": "4ff70d5d7e82d10ae45879ae43e6a7c2"
  },
  {
    "url": "脚手架工具/webpack/01-entry.html",
    "revision": "0d7a493284cae633fd4c4ba33ad40737"
  },
  {
    "url": "脚手架工具/webpack/02-output.html",
    "revision": "c03463ecb84536d61ab9953c180464b2"
  },
  {
    "url": "脚手架工具/webpack/03-plugin.html",
    "revision": "4437e100c0d40b74337357c8aaa32b63"
  },
  {
    "url": "脚手架工具/webpack/04-module.html",
    "revision": "32d326e3297652952e7b89948e32b661"
  },
  {
    "url": "脚手架工具/webpack/05-resolve.html",
    "revision": "44936b8f1683bd3cb2be0617e46479b0"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/others.html",
    "revision": "d007b1eb06a7972dc8c1c144f89cd344"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/splitChunks.html",
    "revision": "eb9d0c37535a95db0828b492786c394a"
  },
  {
    "url": "脚手架工具/webpack/07-其他配置.html",
    "revision": "f17a92ee6ee1f583c88b21f42895a2af"
  },
  {
    "url": "脚手架工具/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "d78178df816596d66d2f5cb3510e4932"
  },
  {
    "url": "脚手架工具/webpack/others.html",
    "revision": "f3690e6812e88777970d843dc8404210"
  },
  {
    "url": "脚手架工具/webpack/webpack之devtool .html",
    "revision": "ef03fa985d181d189a08e60fa1989476"
  },
  {
    "url": "脚手架工具/webpack/webpack之hash.html",
    "revision": "6c500d6093e1a0ba65af050f8d211ad3"
  },
  {
    "url": "脚手架工具/webpack/webpack之magic-comments.html",
    "revision": "30f8f45735e1f2690bc81d9478575ee4"
  },
  {
    "url": "脚手架工具/webpack/webpack之runtime与manifest.html",
    "revision": "a6096f6622737401e1aa16a07eb0033e"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理commonjs.html",
    "revision": "204759c6694f48cb81fe263bf26c9f03"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理esmodule.html",
    "revision": "1c99baea4a64131741d83dd3506774f7"
  },
  {
    "url": "脚手架工具/webpack/webpack之模块路径解析规则.html",
    "revision": "2d82d2770bd17fbbdbb9736469219d16"
  },
  {
    "url": "脚手架工具/webpack/模块方法之requireContext.html",
    "revision": "5421b4e27397695a543147769fbea89a"
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
