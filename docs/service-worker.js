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
    "revision": "4598d6753410e79d7e220370655a8e80"
  },
  {
    "url": "assets/css/0.styles.cf7d4acf.css",
    "revision": "a6dcd78eef99476a6ba1ae0f4c01de62"
  },
  {
    "url": "assets/css/1.styles.bbcde789.css",
    "revision": "5849dd6c3c284933e143139831db1930"
  },
  {
    "url": "assets/css/4.styles.eac5093d.css",
    "revision": "169d6f7b23b70d80f3e60a762b518dd4"
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
    "url": "assets/js/10.32fe3a9c.js",
    "revision": "2171789697d96d2e9518b9daff564d44"
  },
  {
    "url": "assets/js/11.50414c7b.js",
    "revision": "c1635972b7af952cc340347be810ac2a"
  },
  {
    "url": "assets/js/12.41f1349a.js",
    "revision": "187312e49e1947883d4b4720b5da8d31"
  },
  {
    "url": "assets/js/13.5a6c4f75.js",
    "revision": "a9b644764dc77d140f374e7e76236344"
  },
  {
    "url": "assets/js/14.2650e146.js",
    "revision": "d906984b96107f5fd86005da59907a0d"
  },
  {
    "url": "assets/js/15.a8a7122a.js",
    "revision": "590654e22ddc524a6318b89f3f896a2c"
  },
  {
    "url": "assets/js/16.c7a78c71.js",
    "revision": "611b7ba0418bd22b5afab03115361ad5"
  },
  {
    "url": "assets/js/17.08cdc01e.js",
    "revision": "6c388e213816545adf7b217432ccdaee"
  },
  {
    "url": "assets/js/18.2a8b1e34.js",
    "revision": "0d4999d3662a61cd3d51cff02b33e350"
  },
  {
    "url": "assets/js/19.486a9116.js",
    "revision": "0eb56d5ee392fc4a0a19bf813ed52377"
  },
  {
    "url": "assets/js/20.1aff0281.js",
    "revision": "b3195dacc8fe80775858b857585a7140"
  },
  {
    "url": "assets/js/21.013af4d8.js",
    "revision": "b7881a14c5dfa6965b205f500b017b32"
  },
  {
    "url": "assets/js/22.fe1bdcac.js",
    "revision": "d8d70829786222c3e08f805004b0276e"
  },
  {
    "url": "assets/js/23.e4422884.js",
    "revision": "7d71fecfa3a62a73a873e95119a0e41e"
  },
  {
    "url": "assets/js/24.c472f5fe.js",
    "revision": "36e7658131d1297b1e8c08bd314ffd74"
  },
  {
    "url": "assets/js/25.1660fb4f.js",
    "revision": "dc5b62c4f10c6f46a7f8bf2b0b0e4ac7"
  },
  {
    "url": "assets/js/26.df2c5a30.js",
    "revision": "b8c38577fc3ec41aa203311b1dad5f9b"
  },
  {
    "url": "assets/js/27.9d4762b9.js",
    "revision": "6b8204d55ec96be3f9e4027df301dbec"
  },
  {
    "url": "assets/js/28.5e2305e1.js",
    "revision": "5296d66e5ff4867524270f61b76f95ab"
  },
  {
    "url": "assets/js/29.2cfd7602.js",
    "revision": "33aa6a4ed42150593e43e81fd009fd5e"
  },
  {
    "url": "assets/js/3.f5602915.js",
    "revision": "be46c714396480643f66ae2aa221f56e"
  },
  {
    "url": "assets/js/30.518e4437.js",
    "revision": "344382c214e5fddf9b2ff9f5f4b3a77d"
  },
  {
    "url": "assets/js/31.408f3f24.js",
    "revision": "58087d74099422ff94deb6b2c24e10d4"
  },
  {
    "url": "assets/js/32.bb455523.js",
    "revision": "6f44efb9450898c75f751148cae641a7"
  },
  {
    "url": "assets/js/33.5a97dfcd.js",
    "revision": "780244b55a4e59f3541ec185473ee172"
  },
  {
    "url": "assets/js/34.878f3d35.js",
    "revision": "c3a17e8caba1e1e7349742ca0ae1701a"
  },
  {
    "url": "assets/js/35.d6adb9d4.js",
    "revision": "10aea2b1c62296e568d9b53dfa8ebebf"
  },
  {
    "url": "assets/js/36.264f2e54.js",
    "revision": "d6a11ffbfc38dc4cd0b69e8fa542b71f"
  },
  {
    "url": "assets/js/37.3f119dd5.js",
    "revision": "e494c2e41db534a2973a0b1cba0b1888"
  },
  {
    "url": "assets/js/38.96282fcb.js",
    "revision": "27288b857e56a7de09a9be7bedafe9bb"
  },
  {
    "url": "assets/js/39.6dbd6c65.js",
    "revision": "2a7d29f798c198b4d54c491d9b0f7e07"
  },
  {
    "url": "assets/js/4.d360aff1.js",
    "revision": "9d7acd2568fb3266d55a5cc76349e118"
  },
  {
    "url": "assets/js/40.36c44b2c.js",
    "revision": "38d1754f45f1cb564cb9fd65a7998ecd"
  },
  {
    "url": "assets/js/41.3dc5e775.js",
    "revision": "4387aa55537b5e4f5b8cde72ee5432b8"
  },
  {
    "url": "assets/js/42.78266b18.js",
    "revision": "e6cbfc3ab7617ce5f3a6f24a0595e01c"
  },
  {
    "url": "assets/js/43.c7e1eeec.js",
    "revision": "a40edc3594f0f82a1a2db48145f73961"
  },
  {
    "url": "assets/js/44.ab79081d.js",
    "revision": "2c59f3d76ab1d6399d7d02000b49dad5"
  },
  {
    "url": "assets/js/45.b72d4b14.js",
    "revision": "96bd8a2d9f706aa0d22bcfb95b2869d3"
  },
  {
    "url": "assets/js/46.ba515318.js",
    "revision": "fd211be635f243fe214be12cbc5cf7b8"
  },
  {
    "url": "assets/js/47.addf1c80.js",
    "revision": "bb69b338d287c674785cc691ea7ac4b2"
  },
  {
    "url": "assets/js/48.d90ace11.js",
    "revision": "9a962b5fb2f5643205a2852b92b04b43"
  },
  {
    "url": "assets/js/49.64528418.js",
    "revision": "7303d3a9fffb934720e8dd89e97be6a9"
  },
  {
    "url": "assets/js/5.e4a1ddaf.js",
    "revision": "4442c438bc0eec73b1e55820a47cf5a8"
  },
  {
    "url": "assets/js/50.6b0c0ef3.js",
    "revision": "638500f34207fed03a00c5802b56c7d5"
  },
  {
    "url": "assets/js/51.40254deb.js",
    "revision": "f5d0b3daf17a8e2d945551e1e55e0949"
  },
  {
    "url": "assets/js/52.5a945a02.js",
    "revision": "8f06a2b1b9ca465942e25ce5d4198321"
  },
  {
    "url": "assets/js/53.b975aea9.js",
    "revision": "df117a041f9a97803eec2a552595ce86"
  },
  {
    "url": "assets/js/54.c1c3b876.js",
    "revision": "ce43f4bc0dde725237ee7c400cc86f52"
  },
  {
    "url": "assets/js/55.09ecfffb.js",
    "revision": "5e4fad1c6b17b88a88b975783d9757f2"
  },
  {
    "url": "assets/js/56.bddd6c34.js",
    "revision": "efdad71a400142c0fc2230b54f082255"
  },
  {
    "url": "assets/js/57.7fd2cbc7.js",
    "revision": "e7cabfe862afeaaf2f748ae174081eda"
  },
  {
    "url": "assets/js/58.719de658.js",
    "revision": "662df4d7f6d11b374c6b173bfa5e3f84"
  },
  {
    "url": "assets/js/59.bf450323.js",
    "revision": "caa222c145eb5553e3cabe9104cd81ee"
  },
  {
    "url": "assets/js/6.beca2b50.js",
    "revision": "11baa74c15fe3569df80a2969f7977ab"
  },
  {
    "url": "assets/js/60.5c095b77.js",
    "revision": "c62b8dca6f7e115981ca1dc9ece9aa6f"
  },
  {
    "url": "assets/js/61.759fdb52.js",
    "revision": "8b9992b719abfb5eee66f82356ed5adc"
  },
  {
    "url": "assets/js/62.80ff4b66.js",
    "revision": "2d6bee4f4c28fd27cca9b8fce2dfd7c3"
  },
  {
    "url": "assets/js/63.68500f73.js",
    "revision": "f7241a0e1cec06b9a520d8937b31cdf6"
  },
  {
    "url": "assets/js/64.3e93153d.js",
    "revision": "48f26f99646143624f3b7544941dbf6c"
  },
  {
    "url": "assets/js/65.6be16cb6.js",
    "revision": "f5b58af42b11c5ff642a35267bb18d1a"
  },
  {
    "url": "assets/js/66.261b0839.js",
    "revision": "46fc6ec44b73311aa1625408f3a02b02"
  },
  {
    "url": "assets/js/67.a48390b1.js",
    "revision": "63d0d8ec91cb6218d8ee9674f5c6187c"
  },
  {
    "url": "assets/js/68.6e2ab994.js",
    "revision": "1b17c2e396250e100ceedaccdd0eafb8"
  },
  {
    "url": "assets/js/69.cd4a58ec.js",
    "revision": "18c270c21e392275206b2fdb28ff7f22"
  },
  {
    "url": "assets/js/7.42e6148f.js",
    "revision": "7c589c8109a2d2c4e4f63907e6382b98"
  },
  {
    "url": "assets/js/70.e6dc570b.js",
    "revision": "546d9daa5cd50686ecd3a83b302de9e6"
  },
  {
    "url": "assets/js/71.f8b9d38f.js",
    "revision": "b61e6e2435da069d0d3b677943628c2d"
  },
  {
    "url": "assets/js/72.05e264c4.js",
    "revision": "840ab95bddb67a35a838f0d432518e1c"
  },
  {
    "url": "assets/js/73.71196ac7.js",
    "revision": "985f8fbcc3651ae65376b7a481af12c9"
  },
  {
    "url": "assets/js/8.00dc5143.js",
    "revision": "55f94fa26ff75dd91327aab19c38510a"
  },
  {
    "url": "assets/js/9.e27be4ed.js",
    "revision": "bdd79c39e111c7bb8247635795bd276d"
  },
  {
    "url": "assets/js/app.9e900e48.js",
    "revision": "7146a0bce7f08a496f88f8c08a041246"
  },
  {
    "url": "assets/js/chunk-default.b6be5777.js",
    "revision": "ec86fa7f679ebfda7593e658a52d0b9f"
  },
  {
    "url": "assets/js/chunk-vuepress.66de3837.js",
    "revision": "d490fe4a853071e4d7827ac7c706ad1e"
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
    "revision": "1e3af6333e0a54575e6f1d1746124761"
  },
  {
    "url": "css/reset.html",
    "revision": "01a842a85038d26db4bc7a789aa5c446"
  },
  {
    "url": "css/scrollBar.html",
    "revision": "f2a09573fbd49810fd428b2638bcc8e4"
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
    "revision": "13282ec0f943e2c1c27c3fe649f0f156"
  },
  {
    "url": "javascript/bom/Navigator.sendBeacon.html",
    "revision": "5e6d0a806ca75d7d85db3258b63df579"
  },
  {
    "url": "javascript/bom/sessionStorage.html",
    "revision": "d74ddd2700d4dd826001c223af87c06b"
  },
  {
    "url": "javascript/dom/api-drag.html",
    "revision": "0a06abe57237cfad803abce02aa7b769"
  },
  {
    "url": "javascript/dom/defer与async.html",
    "revision": "87c7b00c74f615dc2014dfb4042bd15d"
  },
  {
    "url": "javascript/dom/preload与prefetch.html",
    "revision": "24424d92fb5e1fb6ce38f46c006af6a4"
  },
  {
    "url": "javascript/ESM与现代浏览器.html",
    "revision": "7244f41b02c281271057989f22b7f5da"
  },
  {
    "url": "javascript/微任务宏任务执行顺序.html",
    "revision": "8ec32b022e21c85b8fce3a3a77a3e05e"
  },
  {
    "url": "others/interview/a == 1 && a == 2 && a == 3.html",
    "revision": "e3151fadf12f82a1bd073a5d71e6e122"
  },
  {
    "url": "others/interview/遍历的异步写法.html",
    "revision": "1f605a2b19989f79b979be56ae924fa9"
  },
  {
    "url": "others/JSON.html",
    "revision": "1aba31e49c9a113c76096e9b6f018597"
  },
  {
    "url": "others/unicode和utf-8/unicode.html",
    "revision": "46be1e54c737592659215fe5449e2c9e"
  },
  {
    "url": "others/unicode和utf-8/utf-8.html",
    "revision": "cc07704d6502c18f7b177beef0ff210b"
  },
  {
    "url": "others/web安全.html",
    "revision": "b8a9d68a88b45e7f0c118541cb2044f9"
  },
  {
    "url": "others/待整理的.html",
    "revision": "d5a88f2902bbdebd067c89d1fb4e0b71"
  },
  {
    "url": "others/跨域问题.html",
    "revision": "f08487517f753ce7a07e6c3bfa2daff9"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "fcfd862e320e9dec4e6e153ec446f72c"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "bf0c3b068666813d54e66d7b7d54aa34"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "a507127c893e92563cda06ca1ffe4a70"
  },
  {
    "url": "tools/typora快捷键.html",
    "revision": "0820977f7fac4bb3dd74115b54745105"
  },
  {
    "url": "tools/webstorm/创建宏.html",
    "revision": "8330b8a6fe8a5aa1906c2135de0c9cc7"
  },
  {
    "url": "tools/webstorm/快捷键.html",
    "revision": "5cbe73fbed23d5605cf497d5c4c91083"
  },
  {
    "url": "tools/yarn.html",
    "revision": "96295270298ab08b36970e36a8102cc5"
  },
  {
    "url": "tools/yed-graph-editor快捷键.html",
    "revision": "cb4e52a19e352acb02cbe56eac5c4c4d"
  },
  {
    "url": "tools/版本管理工具-git/基础.html",
    "revision": "7beb7d78040a0c2152710a3093f2de92"
  },
  {
    "url": "tools/版本管理工具-git/需要掌握的.html",
    "revision": "eb8e3fc2d70a54505b8c4a666a1a9900"
  },
  {
    "url": "脚手架工具/browserslist.html",
    "revision": "f69568dbaa8f063fc01624f2390d9d4d"
  },
  {
    "url": "脚手架工具/eslint/01-安装.html",
    "revision": "9299f54bfeefe9d23c906ce1fc66ed76"
  },
  {
    "url": "脚手架工具/eslint/02-使用.html",
    "revision": "d8fe7f2fc55abc26cbd18663dd762225"
  },
  {
    "url": "脚手架工具/eslint/03-vue开发通用的配置.html",
    "revision": "09aee73bfef022479e48381c8b64e07e"
  },
  {
    "url": "脚手架工具/eslint/04-配合husky与lint-staged.html",
    "revision": "c267911f6d67b6b59feb336fd5aa4fac"
  },
  {
    "url": "脚手架工具/eslint/05-@babel下的eslint-parser.html",
    "revision": "7f8492897b0b4f2b0bfad794f2981a02"
  },
  {
    "url": "脚手架工具/umd模块打包方法.html",
    "revision": "7b20e6f95a5cb09ff7963bfe69ba18e3"
  },
  {
    "url": "脚手架工具/vue-cli/01-基本配置.html",
    "revision": "49576f03991d2ceed00e83d79abb4be9"
  },
  {
    "url": "脚手架工具/vue-cli/02-loader.html",
    "revision": "ff3925b605da5d5dc71dc148c5b59d1c"
  },
  {
    "url": "脚手架工具/vue-cli/03-plugin.html",
    "revision": "31569bd25a679fc92935bf00788c83e5"
  },
  {
    "url": "脚手架工具/vue-cli/env.html",
    "revision": "10a8cd41b7ff2a7b12e4881f1bfae202"
  },
  {
    "url": "脚手架工具/vue-cli/loader之image-webpack-loader.html",
    "revision": "adc02c9c41dbbcf362747ed87ec82200"
  },
  {
    "url": "脚手架工具/vue-cli/others.html",
    "revision": "884883346ef13c91699fda5c7d755559"
  },
  {
    "url": "脚手架工具/vue-cli/webpack-chain.html",
    "revision": "f9a4843448d11b19a63f2fd64eb5e286"
  },
  {
    "url": "脚手架工具/vue-cli/新增webpack配置.html",
    "revision": "d016b63d31dc28e81078f63e0fb88611"
  },
  {
    "url": "脚手架工具/vue-cli/查看webpack配置.html",
    "revision": "a983eecbef77b4e3d0a1cf69de3e8ad9"
  },
  {
    "url": "脚手架工具/vue-cli/配置sass.html",
    "revision": "94a54b730d36246d8fbfae1f6200ec8e"
  },
  {
    "url": "脚手架工具/vue-cli/配置svg.html",
    "revision": "3937a5e6ffde0cb5df7e157fe20b32a6"
  },
  {
    "url": "脚手架工具/vuepress.html",
    "revision": "122a9b98bdd72c8e1355cc211e3eebc5"
  },
  {
    "url": "脚手架工具/webpack/01-entry.html",
    "revision": "dc77bf89ab19de3adc6f2822e66d3a75"
  },
  {
    "url": "脚手架工具/webpack/02-output.html",
    "revision": "59bb095958875e6e5e04c22947030638"
  },
  {
    "url": "脚手架工具/webpack/03-plugin.html",
    "revision": "0cf2b3452c1bea352a0fea42f0685553"
  },
  {
    "url": "脚手架工具/webpack/04-module.html",
    "revision": "f41a9a2e599ea5e6892e8e580d7d3319"
  },
  {
    "url": "脚手架工具/webpack/05-resolve.html",
    "revision": "df5ab96f60dcbfbc4a6d68af0e6cc90d"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/others.html",
    "revision": "9fee568e98e2b5932cd4f1718e0607de"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/splitChunks.html",
    "revision": "121c26002e1dab696690833f3af6f142"
  },
  {
    "url": "脚手架工具/webpack/07-其他配置.html",
    "revision": "aedb77f8524c60bff8162ab89d20d177"
  },
  {
    "url": "脚手架工具/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "e096343f4b654174334415c0bc2b3533"
  },
  {
    "url": "脚手架工具/webpack/others.html",
    "revision": "75529b27cf239923b1712ed76e23a82f"
  },
  {
    "url": "脚手架工具/webpack/webpack之devtool .html",
    "revision": "2ffac5f35db4d73ced06a0a101aa8bbc"
  },
  {
    "url": "脚手架工具/webpack/webpack之hash.html",
    "revision": "28e7c2ddb95110dce8c888f61e45b500"
  },
  {
    "url": "脚手架工具/webpack/webpack之magic-comments.html",
    "revision": "3ccb2fd8f06f315bbdf70c1f82bf0ad2"
  },
  {
    "url": "脚手架工具/webpack/webpack之runtime与manifest.html",
    "revision": "fbfdc89524cbb36383efdc0c657ce7b3"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理commonjs.html",
    "revision": "6f782fbc553a375f9d58ea0303e2c0b0"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理esmodule.html",
    "revision": "f538495cc4586f31c3a3efa172f8fb84"
  },
  {
    "url": "脚手架工具/webpack/webpack之模块路径解析规则.html",
    "revision": "fc00f377970641cdd4008f7b755450b0"
  },
  {
    "url": "脚手架工具/webpack/模块方法之requireContext.html",
    "revision": "6e9c0aa0247fcdcd75242a98be908fc7"
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
