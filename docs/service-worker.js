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
    "revision": "d4e657236a953553c39b417dc809320f"
  },
  {
    "url": "assets/css/0.styles.23dd6fbe.css",
    "revision": "d57af179e48b3e864f29c9f7000b3959"
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
    "url": "assets/js/10.3b7d0674.js",
    "revision": "e50ac72b83ed52e3e8149973401c29de"
  },
  {
    "url": "assets/js/11.abd81a49.js",
    "revision": "3db9c963a9d3645e3653a29fd3dd7e4a"
  },
  {
    "url": "assets/js/12.bc29cbe1.js",
    "revision": "4be9b0453575f4627ce0339b72360666"
  },
  {
    "url": "assets/js/13.6fff73a2.js",
    "revision": "78bb8f3cec3157116135aa4d1bd71413"
  },
  {
    "url": "assets/js/14.525c56fd.js",
    "revision": "a2f22b5fdb8ed7c46967d7bfb13ff608"
  },
  {
    "url": "assets/js/15.3f6b0486.js",
    "revision": "0f0d7413da558b920f8186fba7691447"
  },
  {
    "url": "assets/js/16.a6fde529.js",
    "revision": "13c8b5074a9f75e6226f2db7f8df5b40"
  },
  {
    "url": "assets/js/17.33efe046.js",
    "revision": "884aa7f05af0a0b9f60ce536116d76db"
  },
  {
    "url": "assets/js/18.871aa0b5.js",
    "revision": "cc92c0fb1668dd081034e777796952ff"
  },
  {
    "url": "assets/js/19.3c4b5cf4.js",
    "revision": "f5ce99539fcf97c46d1641a3aebe0150"
  },
  {
    "url": "assets/js/2.3ad10982.js",
    "revision": "d6ef8098b4c5ee0042a307f30d939ed2"
  },
  {
    "url": "assets/js/20.cdb17dc3.js",
    "revision": "48e0db83128cddfb4730992e046e87a5"
  },
  {
    "url": "assets/js/21.ee613fce.js",
    "revision": "9352b8c3e6a7e624a6f2c00714c3be76"
  },
  {
    "url": "assets/js/22.ae110b8c.js",
    "revision": "481aefe254c2e2d385fe7fd25501e03e"
  },
  {
    "url": "assets/js/23.0dabf8ff.js",
    "revision": "90e50a2269b69479692ee7019063fa24"
  },
  {
    "url": "assets/js/24.4463c32a.js",
    "revision": "edc86eb7c255b525d526b9e432e09b26"
  },
  {
    "url": "assets/js/25.d9a554a6.js",
    "revision": "590ae0652f5262ef575af4eb2c9123ee"
  },
  {
    "url": "assets/js/26.ca81a31a.js",
    "revision": "fea64078c0cf7db88c8a980d9c93f3b0"
  },
  {
    "url": "assets/js/27.6cefd640.js",
    "revision": "12d55aef91f107525d84cb008de3ed14"
  },
  {
    "url": "assets/js/28.89fd1b45.js",
    "revision": "5d834f8123f6113ca20e8af686613415"
  },
  {
    "url": "assets/js/29.375a9361.js",
    "revision": "cfa862b908f90e063769c74699ef24fa"
  },
  {
    "url": "assets/js/3.1bf47bc0.js",
    "revision": "80b105e3bba1a2bbd96019d531c6f652"
  },
  {
    "url": "assets/js/30.0c1755ab.js",
    "revision": "741ddb6b171a3aadd31f9180e775d3cf"
  },
  {
    "url": "assets/js/31.3dbd9f2b.js",
    "revision": "8d1f13793a125b21bca08a0f13403c44"
  },
  {
    "url": "assets/js/32.7768051b.js",
    "revision": "735f9298fd4e576da4cc67e74be4e678"
  },
  {
    "url": "assets/js/33.0b82f591.js",
    "revision": "dc267ce166f241dfb4db9654e34b7269"
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
    "url": "assets/js/36.3fb3473c.js",
    "revision": "9fa3ce3afeaac253fcf4fc14ea282684"
  },
  {
    "url": "assets/js/37.d8c444c1.js",
    "revision": "2faac22b1596ad0f0b278038fae3fe5c"
  },
  {
    "url": "assets/js/38.a002110f.js",
    "revision": "d4f06b01fa652ca205dcb6e14c08144b"
  },
  {
    "url": "assets/js/39.ecb6f48a.js",
    "revision": "50f7f2082acd2f27c90b03d2ce4cb227"
  },
  {
    "url": "assets/js/4.9902e04a.js",
    "revision": "6cc850c862fc02ef404eaf3ad6ac3c5e"
  },
  {
    "url": "assets/js/40.76deba4c.js",
    "revision": "87209cf6b296ea7c9a635f2ee26d4265"
  },
  {
    "url": "assets/js/41.f7f22033.js",
    "revision": "f45999e0f64b551dc9fbce96780dc5e4"
  },
  {
    "url": "assets/js/42.2f9acf28.js",
    "revision": "740fca1832fe9533363b8afc5bba508d"
  },
  {
    "url": "assets/js/43.4f4a7543.js",
    "revision": "57be9183f62c53b8a4014e991d9cacf4"
  },
  {
    "url": "assets/js/44.d9041cc5.js",
    "revision": "2506d84d128e8ed03b90d80609e0a3aa"
  },
  {
    "url": "assets/js/45.d7c1b9b9.js",
    "revision": "ef6591eae6e9275f40fd08fecd50e6cb"
  },
  {
    "url": "assets/js/46.2946cc28.js",
    "revision": "0586a7e39a1c5286ebf165f01b105720"
  },
  {
    "url": "assets/js/47.8973da5c.js",
    "revision": "1dffe5863ca7573463bb8491f9c1eaa7"
  },
  {
    "url": "assets/js/48.1ed7550d.js",
    "revision": "20b081a1adeb30f5a84359d996122b14"
  },
  {
    "url": "assets/js/49.05f45fb5.js",
    "revision": "aecbbafc6d1fb2a93133b7d7477fd231"
  },
  {
    "url": "assets/js/5.9b7630b2.js",
    "revision": "b7364d0e4e8a915fcd1475e67bec3046"
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
    "url": "assets/js/52.aec3b200.js",
    "revision": "704a1f83b425371e7f3a94c266d098ed"
  },
  {
    "url": "assets/js/53.68fd0f6a.js",
    "revision": "2ec225b0e41289bc1a1992c013b097fc"
  },
  {
    "url": "assets/js/54.ece78b17.js",
    "revision": "7736e80729fa0da4ef5df3e629576a44"
  },
  {
    "url": "assets/js/55.3bf2d0c8.js",
    "revision": "2cfd717d9547d1f832b09e40daf72fbc"
  },
  {
    "url": "assets/js/56.b8f90f27.js",
    "revision": "29cdad7156bd76b202fe714614dea051"
  },
  {
    "url": "assets/js/57.0ebc403a.js",
    "revision": "b547db2dcf064d0a421d53136095fcc3"
  },
  {
    "url": "assets/js/58.5270c222.js",
    "revision": "5b123731921694bfb880c32eda61aeba"
  },
  {
    "url": "assets/js/59.001fafa4.js",
    "revision": "4c9a25e8ae6d2bb8efbd909a8f6e7b0e"
  },
  {
    "url": "assets/js/6.be9e513b.js",
    "revision": "0628596202c6d4765319a1febdec54ea"
  },
  {
    "url": "assets/js/60.d07ee831.js",
    "revision": "11e530a0cffd253afb689bed7c4c4923"
  },
  {
    "url": "assets/js/61.c9316302.js",
    "revision": "c69988797a895669e1a039f2f086f594"
  },
  {
    "url": "assets/js/62.1f6d9a5b.js",
    "revision": "694cbd718435dd622d7ef066ed5e6df4"
  },
  {
    "url": "assets/js/63.d4b2ce50.js",
    "revision": "420cc7547903153ce5a807f247603586"
  },
  {
    "url": "assets/js/64.3dea88e1.js",
    "revision": "e31fdf8d73389d551afea6e1470500a7"
  },
  {
    "url": "assets/js/65.6361a32a.js",
    "revision": "397b08706db9650c534dfd43d971c3c4"
  },
  {
    "url": "assets/js/66.47440b6e.js",
    "revision": "9a824668f54987a48e848f3287be1e21"
  },
  {
    "url": "assets/js/7.df51a559.js",
    "revision": "c32fe2dc58a9623b1c2d338095cb0891"
  },
  {
    "url": "assets/js/8.e404883f.js",
    "revision": "73dc4f708f8ad9a60beb09730a0aadb7"
  },
  {
    "url": "assets/js/9.c0b1986f.js",
    "revision": "f06fb2e4399eb4c8d3db16f2b0a9ec59"
  },
  {
    "url": "assets/js/app.0550d76e.js",
    "revision": "65906f6e0b77d17e4a4b896fa65c842c"
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
    "revision": "f850c991d193cbcf4dee659a070010a0"
  },
  {
    "url": "css/reset.html",
    "revision": "19dc8ad0aadcb3db4b52892867f8e494"
  },
  {
    "url": "css/scrollBar.html",
    "revision": "6403b9d05a5cae57c292a09b38264fb2"
  },
  {
    "url": "fonts/JetBrainsMono-Medium.ttf",
    "revision": "2ab3c46a017cadf52f504054eee882ad"
  },
  {
    "url": "fonts/JetBrainsMono-Regular.ttf",
    "revision": "a7151c5349c1aa20beefb3c5430c3a79"
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
    "revision": "bc52b52d51b4d7af2957d9af4b251466"
  },
  {
    "url": "javascript/bom/Navigator.sendBeacon.html",
    "revision": "b297749bbd29f1efd42109c0bfcbd760"
  },
  {
    "url": "javascript/bom/sessionStorage.html",
    "revision": "4f432139f811db47a671c0926bb845c5"
  },
  {
    "url": "javascript/dom/api-drag.html",
    "revision": "e46d2f063cb97a548644480af4d3a7bb"
  },
  {
    "url": "javascript/dom/defer与async.html",
    "revision": "c8f33ad5225420a81c5abc99935ac0d1"
  },
  {
    "url": "javascript/dom/preload与prefetch.html",
    "revision": "756cdfd296f7351635714a32081e8546"
  },
  {
    "url": "javascript/ESM与现代浏览器.html",
    "revision": "0f8f4af6621eac980420466c2a4eecfd"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "8787eff2638b5c6378bd124555842ba5"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "46d88248d306a3bfeb988538c5f072ec"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "779cb67857277c784f768f579a727096"
  },
  {
    "url": "tools/typora快捷键.html",
    "revision": "2bfaa7e5ad6ad2b6cfc898fb711081a2"
  },
  {
    "url": "tools/webstorm/创建宏.html",
    "revision": "aed4883066c11274c5c561cdcc0ca5e3"
  },
  {
    "url": "tools/webstorm/快捷键.html",
    "revision": "adba8b19f96e971ae733c3aeeaa5bac3"
  },
  {
    "url": "tools/yarn.html",
    "revision": "a405c0dc03fc0860e97ae55dc246952e"
  },
  {
    "url": "tools/yed-graph-editor快捷键.html",
    "revision": "a7b000eeb352e8a21da01516dfb9b0a1"
  },
  {
    "url": "tools/版本管理工具-git/基础.html",
    "revision": "15a65ee8c09149b74d2406d424bab621"
  },
  {
    "url": "tools/版本管理工具-git/需要掌握的.html",
    "revision": "db907c39166d9dfabce2d9583683a905"
  },
  {
    "url": "脚手架工具/browserslist.html",
    "revision": "8ac3514866d630de48b2d5971a93bc46"
  },
  {
    "url": "脚手架工具/eslint/01-安装.html",
    "revision": "bf1eca5a2473c936a5fef0bb78ab8892"
  },
  {
    "url": "脚手架工具/eslint/02-使用.html",
    "revision": "d5c6fad8dc59ddf919ebfba1fbdb948f"
  },
  {
    "url": "脚手架工具/eslint/03-vue开发通用的配置.html",
    "revision": "4373033d1451ea2aae80e75e3cd64134"
  },
  {
    "url": "脚手架工具/eslint/04-配合husky与lint-staged.html",
    "revision": "e3b7e8640ba75146edaa3ea2348107e4"
  },
  {
    "url": "脚手架工具/eslint/05-@babel下的eslint-parser.html",
    "revision": "274600b5eef80ed4955a934421f254cb"
  },
  {
    "url": "脚手架工具/umd模块打包方法.html",
    "revision": "04e1566bbe6496c60b71290ca2eba52f"
  },
  {
    "url": "脚手架工具/vue-cli/01-基本配置.html",
    "revision": "25d4a5c422150d4ffce70c62351141a1"
  },
  {
    "url": "脚手架工具/vue-cli/02-loader.html",
    "revision": "437c5682e9bb0ad869c3ccf9374f130c"
  },
  {
    "url": "脚手架工具/vue-cli/03-plugin.html",
    "revision": "9d572ea6acb0c1dadee303f2c7fe763c"
  },
  {
    "url": "脚手架工具/vue-cli/env.html",
    "revision": "5806b7ce06965b270e5af29cb7f23b0c"
  },
  {
    "url": "脚手架工具/vue-cli/loader之image-webpack-loader.html",
    "revision": "886ad946756de6ca52703b51e6b97574"
  },
  {
    "url": "脚手架工具/vue-cli/others.html",
    "revision": "b7a2c57a4a739ac4cf1349ecb96307f7"
  },
  {
    "url": "脚手架工具/vue-cli/webpack-chain.html",
    "revision": "b5c5bf233a712c861508afe0d39c3836"
  },
  {
    "url": "脚手架工具/vue-cli/新增webpack配置.html",
    "revision": "bf2efd9ea76cca04aa2e46ba338ec167"
  },
  {
    "url": "脚手架工具/vue-cli/查看webpack配置.html",
    "revision": "0e0c4d0d631aced3769aa94a906f516c"
  },
  {
    "url": "脚手架工具/vue-cli/配置sass.html",
    "revision": "2f971ed15578fbb6e2eb39a7f276eeb3"
  },
  {
    "url": "脚手架工具/vue-cli/配置svg.html",
    "revision": "03a168b8ad4eba064b0567ceddc28908"
  },
  {
    "url": "脚手架工具/vuepress.html",
    "revision": "04cd330abad6f5522a638a156c0d16d4"
  },
  {
    "url": "脚手架工具/webpack/01-entry.html",
    "revision": "7477abffcf0dfd7414feb01b479169b3"
  },
  {
    "url": "脚手架工具/webpack/02-output.html",
    "revision": "e81c40374f643b89dc0d954bd1b35b82"
  },
  {
    "url": "脚手架工具/webpack/03-plugin.html",
    "revision": "b6473983c6d45fed643867f51b2fde64"
  },
  {
    "url": "脚手架工具/webpack/04-module.html",
    "revision": "e6c0e2a05907e06379ea78f1d87fe434"
  },
  {
    "url": "脚手架工具/webpack/05-resolve.html",
    "revision": "4fa8e00986c33f75428715d5ae12d57a"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/others.html",
    "revision": "4269ba54a01690fd5fb2f9e55b5e6608"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/splitChunks.html",
    "revision": "28c748de6495efd59a1458718f92d20b"
  },
  {
    "url": "脚手架工具/webpack/07-其他配置.html",
    "revision": "e18b66239d03ba884b0d75227828eb72"
  },
  {
    "url": "脚手架工具/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "726fdc0174e77cfd8e3b5f0e68850aed"
  },
  {
    "url": "脚手架工具/webpack/others.html",
    "revision": "9b3e5f23e669173a64d4ed7dc58590af"
  },
  {
    "url": "脚手架工具/webpack/webpack之devtool .html",
    "revision": "12810bbe29c11a2e1465dcc16d15814b"
  },
  {
    "url": "脚手架工具/webpack/webpack之hash.html",
    "revision": "ffa728daed0a51ffb7e8c897b6bc325c"
  },
  {
    "url": "脚手架工具/webpack/webpack之magic-comments.html",
    "revision": "909e50f687dffb6c6c8a9ae99dd4d531"
  },
  {
    "url": "脚手架工具/webpack/webpack之runtime与manifest.html",
    "revision": "fe1e8b06f544143fe91ca8786e331ef2"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理commonjs.html",
    "revision": "f6655cf89f0e3f039c89bd1746e89311"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理esmodule.html",
    "revision": "6f6ea41e1d2b0b41b764af6f3d258ec5"
  },
  {
    "url": "脚手架工具/webpack/webpack之模块路径解析规则.html",
    "revision": "d887009fd894badf51ec3a15c96a431e"
  },
  {
    "url": "脚手架工具/webpack/模块方法之requireContext.html",
    "revision": "cb867c7ee55476d726c90b2394d64de0"
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
