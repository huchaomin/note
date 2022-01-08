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
    "revision": "e2bd86a6b47396320cbed2b3a9008686"
  },
  {
    "url": "assets/css/0.styles.ee3fcf61.css",
    "revision": "298a5ff55b22ddc083522e1156f9b061"
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
    "url": "assets/js/10.2cf5275f.js",
    "revision": "c0b3bde521f53865c04dc1793ac1835d"
  },
  {
    "url": "assets/js/11.aa750fe0.js",
    "revision": "6cc995ad4b82202e2d7a9a0d7573677a"
  },
  {
    "url": "assets/js/12.f0864b39.js",
    "revision": "e11edad01076ae8b05067713ab254b51"
  },
  {
    "url": "assets/js/13.a700717d.js",
    "revision": "684483632a0f7532f5bf17cf8399ad05"
  },
  {
    "url": "assets/js/14.da37345c.js",
    "revision": "c6f960df092b2594e86fa0d352cc8a4b"
  },
  {
    "url": "assets/js/15.3f6b0486.js",
    "revision": "0f0d7413da558b920f8186fba7691447"
  },
  {
    "url": "assets/js/16.ed3137e3.js",
    "revision": "ea77d9a7fdb51cb08317ba62f489b5fb"
  },
  {
    "url": "assets/js/17.1037c093.js",
    "revision": "24907895acd5a6c8afb8e02857c73f7d"
  },
  {
    "url": "assets/js/18.82de6042.js",
    "revision": "54cf77a90de26b74b0cfaa89d5ed9a8d"
  },
  {
    "url": "assets/js/19.de71cca5.js",
    "revision": "71a32870362cff5c7ad72a6e0919214e"
  },
  {
    "url": "assets/js/2.36de0bee.js",
    "revision": "92d63ec1d66d9ae7112dd6dcea1dfd74"
  },
  {
    "url": "assets/js/20.013e42e8.js",
    "revision": "eaafe5ede74cd6938f883a01cc5616f6"
  },
  {
    "url": "assets/js/21.ea993861.js",
    "revision": "f98915be43a08ec7ed568ae90c702bfc"
  },
  {
    "url": "assets/js/22.ae110b8c.js",
    "revision": "481aefe254c2e2d385fe7fd25501e03e"
  },
  {
    "url": "assets/js/23.8df46c9c.js",
    "revision": "779dd274a20d8dfec7153323eb973aa4"
  },
  {
    "url": "assets/js/24.4463c32a.js",
    "revision": "edc86eb7c255b525d526b9e432e09b26"
  },
  {
    "url": "assets/js/25.76adbcea.js",
    "revision": "fd2a972c8614e34eee84b62d6e932652"
  },
  {
    "url": "assets/js/26.cd5e9612.js",
    "revision": "47469d8cf90ee06f6507b4b89ce0d14d"
  },
  {
    "url": "assets/js/27.91232f58.js",
    "revision": "a9c879fcebf52ff19be4ecff00ad8f51"
  },
  {
    "url": "assets/js/28.89fd1b45.js",
    "revision": "5d834f8123f6113ca20e8af686613415"
  },
  {
    "url": "assets/js/29.964389ff.js",
    "revision": "668db0ead64955144e1289624a1ad876"
  },
  {
    "url": "assets/js/3.de89b79a.js",
    "revision": "467169b88d059ae861f3c109705e78e9"
  },
  {
    "url": "assets/js/30.a01e3972.js",
    "revision": "027e71bf99112801d724712450839a7f"
  },
  {
    "url": "assets/js/31.231de9bb.js",
    "revision": "7c64b838ad4470a3c8ed35e2fb0082c7"
  },
  {
    "url": "assets/js/32.dd46a3b6.js",
    "revision": "ab8a595c71892d670131a3f50c5ff0bb"
  },
  {
    "url": "assets/js/33.3191e58d.js",
    "revision": "bed1f9209b391183af72b6e2a3ae2960"
  },
  {
    "url": "assets/js/34.b7d10feb.js",
    "revision": "60307053c7267bfcfeca999112acd3b6"
  },
  {
    "url": "assets/js/35.c2e8aa31.js",
    "revision": "b18808d8ce643657b14f485f651f22c6"
  },
  {
    "url": "assets/js/36.b069bc22.js",
    "revision": "d0b64724e50fb2efb49e0502043b4243"
  },
  {
    "url": "assets/js/37.817ce436.js",
    "revision": "6acdb2a564d3ef0474d0ce5c8cfe542d"
  },
  {
    "url": "assets/js/38.a204150f.js",
    "revision": "08180b6fd50679ffab662b2a1a0dc11b"
  },
  {
    "url": "assets/js/39.72d9358b.js",
    "revision": "0ff4d01784dc67925e685fe5f1cd5a13"
  },
  {
    "url": "assets/js/4.d4339d54.js",
    "revision": "568b91f935745641421e04e9093abc85"
  },
  {
    "url": "assets/js/40.ce6d278b.js",
    "revision": "205d7ff208ec4da405f537964b0f86d5"
  },
  {
    "url": "assets/js/41.764a77cc.js",
    "revision": "49d00f171ec155b411805839cbd8bf8c"
  },
  {
    "url": "assets/js/42.2f9acf28.js",
    "revision": "740fca1832fe9533363b8afc5bba508d"
  },
  {
    "url": "assets/js/43.9eac55a2.js",
    "revision": "a1ab4cbe5a67302bc4840bf0c1575003"
  },
  {
    "url": "assets/js/44.b59f7c60.js",
    "revision": "50791a3a08023abb9b93ee8dd1973b88"
  },
  {
    "url": "assets/js/45.5816eee3.js",
    "revision": "3ec33f259c7daee56a93c97315e89acd"
  },
  {
    "url": "assets/js/46.de9bc8b0.js",
    "revision": "ff61afad58a4953ac709f6747012ee60"
  },
  {
    "url": "assets/js/47.6389a47c.js",
    "revision": "0f174c5868e8cd88175659e5af1b01e0"
  },
  {
    "url": "assets/js/48.4c6a1bde.js",
    "revision": "95a09db2ba559d7549cb93b1e5d915eb"
  },
  {
    "url": "assets/js/49.05f45fb5.js",
    "revision": "aecbbafc6d1fb2a93133b7d7477fd231"
  },
  {
    "url": "assets/js/5.849e275e.js",
    "revision": "c66152945b92b8c5fde0e1a00ea00c13"
  },
  {
    "url": "assets/js/50.566958d8.js",
    "revision": "1608a11404e3d6796a7fe86fa4d1409b"
  },
  {
    "url": "assets/js/51.447df943.js",
    "revision": "843a63bb54d5c80aa31da615163b2f1a"
  },
  {
    "url": "assets/js/52.1901b49a.js",
    "revision": "51b6d6cb3f8b602eab14294b44384cf5"
  },
  {
    "url": "assets/js/53.83d93f77.js",
    "revision": "3a7a7ea9ec8553936de26cdbbf021e50"
  },
  {
    "url": "assets/js/54.c0c722af.js",
    "revision": "27bb8b4af8baaf1a5f067c1f24027995"
  },
  {
    "url": "assets/js/55.1f22a3ba.js",
    "revision": "ebd4cde5cd209911a4f31581c8e36000"
  },
  {
    "url": "assets/js/56.636bb10a.js",
    "revision": "f9e6b7ea43d0c683cb7ef350494ed8fd"
  },
  {
    "url": "assets/js/57.9b829fbe.js",
    "revision": "763e06ede5374997e0a9eeab0c96a57b"
  },
  {
    "url": "assets/js/58.5270c222.js",
    "revision": "5b123731921694bfb880c32eda61aeba"
  },
  {
    "url": "assets/js/59.d956ed06.js",
    "revision": "c7567a03723cb3f404d6ce8630473d5c"
  },
  {
    "url": "assets/js/6.c374ef02.js",
    "revision": "9d19c5e0ab9781edcb742eee42082f5a"
  },
  {
    "url": "assets/js/60.bc56d0c2.js",
    "revision": "1be5648981ba4b4b14f63a21f49aac61"
  },
  {
    "url": "assets/js/61.52755bdc.js",
    "revision": "05149a07dca3894a57a36687f35c12d9"
  },
  {
    "url": "assets/js/62.cfe1470d.js",
    "revision": "0a10d049c3aa2076652518c36368ccd1"
  },
  {
    "url": "assets/js/63.8415012a.js",
    "revision": "a5850631cd32d90c337403134036e6df"
  },
  {
    "url": "assets/js/64.07962881.js",
    "revision": "45c397646e9fa6d49e2b84b0febf3ba5"
  },
  {
    "url": "assets/js/65.d8272ae5.js",
    "revision": "098205a1e1aca89ed9c8b7e311decc56"
  },
  {
    "url": "assets/js/66.29c9f9eb.js",
    "revision": "7b64260ef0aff15d653020f74fe221b4"
  },
  {
    "url": "assets/js/7.0e0d2720.js",
    "revision": "c45bd0183c09c72128d1a76b90b1b980"
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
    "url": "assets/js/app.0263887d.js",
    "revision": "0831ad9b3650b2c5f9e1d5b1968d8260"
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
    "revision": "85e883e5a539ef797eb1a2f56714a937"
  },
  {
    "url": "css/reset.html",
    "revision": "2977cb70917723985fa2c5f4c6ed4508"
  },
  {
    "url": "css/scrollBar.html",
    "revision": "e248836f94331994743193c1670144c8"
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
    "revision": "1eb83db8645cf5e4f15d23d960db4769"
  },
  {
    "url": "javascript/bom/Navigator.sendBeacon.html",
    "revision": "33fc2683947d065854c340ee0a3dc4a1"
  },
  {
    "url": "javascript/bom/sessionStorage.html",
    "revision": "c6427afd9b61638a559392899938ab1a"
  },
  {
    "url": "javascript/dom/api-drag.html",
    "revision": "9d974b6a7c05c6c3ef9b680fc0deb5f5"
  },
  {
    "url": "javascript/dom/defer与async.html",
    "revision": "ee836b40acf2b25a5ff276b5d22cd650"
  },
  {
    "url": "javascript/dom/preload与prefetch.html",
    "revision": "8aad446bf3f82dc81b4f92f0c23a219c"
  },
  {
    "url": "javascript/ESM与现代浏览器.html",
    "revision": "212a60b4e7e2f6e914084050a4827417"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "403c385f3dbe36af3edb45e5783cedcf"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "c26c456720090e1ff88e0d3bcb58ea3d"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "29d8f90ffb9232fc89efa5c88abc5e51"
  },
  {
    "url": "tools/typora快捷键.html",
    "revision": "fd9d72af6000442955d4ba5a16873068"
  },
  {
    "url": "tools/webstorm/创建宏.html",
    "revision": "e69657c85ba7998d5192430f492e4630"
  },
  {
    "url": "tools/webstorm/快捷键.html",
    "revision": "c680b41a40b814947cc1af6590748437"
  },
  {
    "url": "tools/yarn.html",
    "revision": "ecd768c656a1a0a726db08bf85d2dc52"
  },
  {
    "url": "tools/yed-graph-editor快捷键.html",
    "revision": "d4853aefeb3eca8cd59b12a9b293f768"
  },
  {
    "url": "tools/版本管理工具-git/基础.html",
    "revision": "18257dd4abcfc71213d6228e2c7fe2c6"
  },
  {
    "url": "tools/版本管理工具-git/需要掌握的.html",
    "revision": "656f10b1cc00e8db326d663b37a1bd09"
  },
  {
    "url": "脚手架工具/browserslist.html",
    "revision": "9d6976d08414edf470205b60e551cc15"
  },
  {
    "url": "脚手架工具/eslint/01-安装.html",
    "revision": "f5976f5671741be7a11ece3a1df87758"
  },
  {
    "url": "脚手架工具/eslint/02-使用.html",
    "revision": "b23678df83dcf7c9edefd02a422b4735"
  },
  {
    "url": "脚手架工具/eslint/03-vue开发通用的配置.html",
    "revision": "a4c18ff74dd7c4321fc41c4e505a4c7d"
  },
  {
    "url": "脚手架工具/eslint/04-配合husky与lint-staged.html",
    "revision": "c1161c0c0ff39a433b2632434e48e1dd"
  },
  {
    "url": "脚手架工具/eslint/05-@babel下的eslint-parser.html",
    "revision": "c90029e2056d4b51a1c4d4990547a21b"
  },
  {
    "url": "脚手架工具/umd模块打包方法.html",
    "revision": "2bb74180890d7594bf59ac9e1ff33059"
  },
  {
    "url": "脚手架工具/vue-cli/01-基本配置.html",
    "revision": "43f898210e9ff49ce86529794b5fec22"
  },
  {
    "url": "脚手架工具/vue-cli/02-loader.html",
    "revision": "8b787e92c1c6f9318916c824bb14b8a3"
  },
  {
    "url": "脚手架工具/vue-cli/03-plugin.html",
    "revision": "68ec5715c22ab0c9505acba56d3d73eb"
  },
  {
    "url": "脚手架工具/vue-cli/env.html",
    "revision": "f02ddca851c574d98d5c3869a19d9080"
  },
  {
    "url": "脚手架工具/vue-cli/loader之image-webpack-loader.html",
    "revision": "d6fbc033ccd95bcd5ae1dc644faf67f9"
  },
  {
    "url": "脚手架工具/vue-cli/others.html",
    "revision": "603c417cda2e90f8751411c82c77c4a7"
  },
  {
    "url": "脚手架工具/vue-cli/webpack-chain.html",
    "revision": "f869306f24a9f5f7020d5214881cc1df"
  },
  {
    "url": "脚手架工具/vue-cli/新增webpack配置.html",
    "revision": "d92dd73003a6f161acdff188f54b2dc3"
  },
  {
    "url": "脚手架工具/vue-cli/查看webpack配置.html",
    "revision": "5a95ce399ce46e5dd84352742b06947f"
  },
  {
    "url": "脚手架工具/vue-cli/配置sass.html",
    "revision": "f96d22c9296743dfc70c1e39dc113a5d"
  },
  {
    "url": "脚手架工具/vue-cli/配置svg.html",
    "revision": "e5967efb5b55db7f1232ada4b3502275"
  },
  {
    "url": "脚手架工具/vuepress.html",
    "revision": "3696d848ea38b1ec5cd0d9b9d9ed68b3"
  },
  {
    "url": "脚手架工具/webpack/01-entry.html",
    "revision": "cdca7afd0c7db6d0dc07f28066050638"
  },
  {
    "url": "脚手架工具/webpack/02-output.html",
    "revision": "2e15af6c3003e79f01f137b1bc1fd1af"
  },
  {
    "url": "脚手架工具/webpack/03-plugin.html",
    "revision": "77c96fe2c507be706a93b41e33c09de2"
  },
  {
    "url": "脚手架工具/webpack/04-module.html",
    "revision": "ce9f9087bcc0151d2590e12bba2507ca"
  },
  {
    "url": "脚手架工具/webpack/05-resolve.html",
    "revision": "2205d905c4b3ca3131440795f041d05a"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/others.html",
    "revision": "d114cefa62fb8733694e00712a8cc385"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/splitChunks.html",
    "revision": "aba114013aab33102e2a9ffbb9d4e42f"
  },
  {
    "url": "脚手架工具/webpack/07-其他配置.html",
    "revision": "59421802a3cfa57d8940f3613d920433"
  },
  {
    "url": "脚手架工具/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "6ffaa60311e096760c3dfe052835a7ec"
  },
  {
    "url": "脚手架工具/webpack/others.html",
    "revision": "8724842e7bd1c8288d412e1336464886"
  },
  {
    "url": "脚手架工具/webpack/webpack之devtool .html",
    "revision": "72e37f76bddd86889e1182a740d6848f"
  },
  {
    "url": "脚手架工具/webpack/webpack之hash.html",
    "revision": "8065fd10700543c38be90a186f1f6d02"
  },
  {
    "url": "脚手架工具/webpack/webpack之magic-comments.html",
    "revision": "d6aec04ab5f9037bfdbbe6c0aa715436"
  },
  {
    "url": "脚手架工具/webpack/webpack之runtime与manifest.html",
    "revision": "f7c8ab862b0dadc30156a23eaf780133"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理commonjs.html",
    "revision": "97822af9e40091b50bd54a84a0548d7c"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理esmodule.html",
    "revision": "153a1884d80c96bc9dd46f731946a232"
  },
  {
    "url": "脚手架工具/webpack/webpack之模块路径解析规则.html",
    "revision": "966a65a7f63a5945b326251c0a5f253a"
  },
  {
    "url": "脚手架工具/webpack/模块方法之requireContext.html",
    "revision": "917731e791d1683b6ed13d2ba8c18c9a"
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
