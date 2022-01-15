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
    "revision": "b6b0345e6a64551453c08ff1c4ac25bc"
  },
  {
    "url": "assets/css/4.styles.09052aad.css",
    "revision": "82374247195fb821da83fcf0f6f83f3b"
  },
  {
    "url": "assets/css/6.styles.1cf475e5.css",
    "revision": "4dfd954af9da41878ca5b77c1ec7d6f2"
  },
  {
    "url": "assets/css/9.styles.af38ca1c.css",
    "revision": "f8d5004f0f5c86dbc8712936df50ba14"
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
    "url": "assets/js/12.1ca97b8c.js",
    "revision": "1205ee152bc52f38f3e3dcd565ae7f00"
  },
  {
    "url": "assets/js/13.87af0361.js",
    "revision": "3957601d17d0e2ef60bf0353def7abc7"
  },
  {
    "url": "assets/js/14.a5e70c6e.js",
    "revision": "60fe76f002e3135e799be6138baeecad"
  },
  {
    "url": "assets/js/15.1bd5615d.js",
    "revision": "614925173ce7655e710cbc0a8ddf2c4e"
  },
  {
    "url": "assets/js/16.cee7fd67.js",
    "revision": "89164522f00479580692b9fbfce02265"
  },
  {
    "url": "assets/js/17.bdf821e6.js",
    "revision": "48d13ae25cf2aa84e0a9f3133fe24003"
  },
  {
    "url": "assets/js/18.4d229f96.js",
    "revision": "2229eabb19d250aea5b998eaa423c958"
  },
  {
    "url": "assets/js/19.19079126.js",
    "revision": "b8dbbc35aec88028563a0aee2b9f5d7d"
  },
  {
    "url": "assets/js/20.6a598027.js",
    "revision": "8e349623b1c60e95081444b9cade7faf"
  },
  {
    "url": "assets/js/21.51f500d8.js",
    "revision": "0ee59c8e35541de8f0e4b4ce57ebd7ce"
  },
  {
    "url": "assets/js/22.92d89588.js",
    "revision": "6eb76948f525b34f104d59f5031fe250"
  },
  {
    "url": "assets/js/23.e4d9b417.js",
    "revision": "7d205de8b6787daa2df326843ee1a4ee"
  },
  {
    "url": "assets/js/24.c627cdfd.js",
    "revision": "b5edd47ffb2b43ed989bf2075240a1cf"
  },
  {
    "url": "assets/js/25.e1cbc5f0.js",
    "revision": "b5bd11ade93c1cc90b9ef5754138c3e2"
  },
  {
    "url": "assets/js/26.95ae71e1.js",
    "revision": "a030bb8a39d6a5f7ea3c0a01961c9fcf"
  },
  {
    "url": "assets/js/27.c9d7e2af.js",
    "revision": "8493c3482949f1bc8e4e49bce40b2da2"
  },
  {
    "url": "assets/js/28.d3ca410d.js",
    "revision": "94ddeb607275f06b289d11ea2927b0e6"
  },
  {
    "url": "assets/js/29.b0407ca5.js",
    "revision": "1a3246edee31ac291009cf3e3987141d"
  },
  {
    "url": "assets/js/3.6be73013.js",
    "revision": "594ba9437d4ebfbbcf80c603523e6fa8"
  },
  {
    "url": "assets/js/30.bd3cf717.js",
    "revision": "d34e4fafb23a73f6d837dcf06f478226"
  },
  {
    "url": "assets/js/31.46a946cf.js",
    "revision": "6a5d7776a595aeaabe822c5873f3852c"
  },
  {
    "url": "assets/js/32.13fd664f.js",
    "revision": "a152928aa59e635f36720108149a2197"
  },
  {
    "url": "assets/js/33.4857bc36.js",
    "revision": "81b5d6575bb1aefd65722f5f6d508a93"
  },
  {
    "url": "assets/js/34.8eaa3425.js",
    "revision": "d56c9a7b87f3ea9ffd4ff384f696d75c"
  },
  {
    "url": "assets/js/35.dd199156.js",
    "revision": "0eaa8ca43783ef4a90fe2a1a24ac0e80"
  },
  {
    "url": "assets/js/36.2bf2a61e.js",
    "revision": "9a000fc622551c433895f11bbe220982"
  },
  {
    "url": "assets/js/37.29464865.js",
    "revision": "8889f6bf4e885a1989ee79d4bfc5fa17"
  },
  {
    "url": "assets/js/38.c11f3814.js",
    "revision": "3df3046110d918ddbdd6b7c512520642"
  },
  {
    "url": "assets/js/39.c47d01fb.js",
    "revision": "896db5186536d913994f21794a329c87"
  },
  {
    "url": "assets/js/40.9bea0ec6.js",
    "revision": "0fa3e97b8ee59041b689fdb3fcdfcc24"
  },
  {
    "url": "assets/js/41.afda4e18.js",
    "revision": "caf1bcbb430a774641dbc6def544795f"
  },
  {
    "url": "assets/js/42.242e5970.js",
    "revision": "c916c42a6a819e026f61771ca979b2a5"
  },
  {
    "url": "assets/js/43.474bcf4a.js",
    "revision": "ccf9ddf6faa709bae9f2a01726a4de8a"
  },
  {
    "url": "assets/js/44.3b82c884.js",
    "revision": "62313e0adffad2b8176028df3d8cb574"
  },
  {
    "url": "assets/js/45.c24bbcb7.js",
    "revision": "0ce53fff0af66883988f22bacc99ae14"
  },
  {
    "url": "assets/js/46.2d3374d8.js",
    "revision": "697c938a53aa1a261f2b313194cef99a"
  },
  {
    "url": "assets/js/47.805376db.js",
    "revision": "e71e7f48bb29a50b012b43c2f41683c4"
  },
  {
    "url": "assets/js/48.c69ff796.js",
    "revision": "92e122a078a7cedc0c606e6f358e03f4"
  },
  {
    "url": "assets/js/49.02fcd4de.js",
    "revision": "dfd3e137a81ffa99ceec87eaa6f98d10"
  },
  {
    "url": "assets/js/5.568e96a2.js",
    "revision": "f086999f516d1a4536896cf57fed3df0"
  },
  {
    "url": "assets/js/50.31d5268f.js",
    "revision": "95958ecd80e533f36c9e4734f4f44091"
  },
  {
    "url": "assets/js/51.fc376c18.js",
    "revision": "fab3b6c7c6ab09a7c8c3b0a2954c708d"
  },
  {
    "url": "assets/js/52.f8a3eb9d.js",
    "revision": "6e9b6b0a83c94b78fbdd7ef2d0e3b071"
  },
  {
    "url": "assets/js/53.51a35599.js",
    "revision": "ea1312e070ad8d86bb41f672408304ba"
  },
  {
    "url": "assets/js/54.7e7ec659.js",
    "revision": "bf3a5c5cdd2002345358ab8df705163d"
  },
  {
    "url": "assets/js/55.c801ad28.js",
    "revision": "3749b67d7f2475b7519678857723506a"
  },
  {
    "url": "assets/js/56.729ae0b8.js",
    "revision": "0dfe2cc51fbb6da05deca5ebb006db1a"
  },
  {
    "url": "assets/js/57.cb49a27d.js",
    "revision": "227807b76af2a6ee00afd7a9537b5c79"
  },
  {
    "url": "assets/js/58.977f8c44.js",
    "revision": "a768603926c7d4925a2fec235ec36fc4"
  },
  {
    "url": "assets/js/59.68ca851c.js",
    "revision": "83d88d17b5192daa5d7ae4cb551bf7fb"
  },
  {
    "url": "assets/js/6.57c31f95.js",
    "revision": "0d7852814273a622af5a199ab9a2a506"
  },
  {
    "url": "assets/js/60.e19c22ee.js",
    "revision": "ce05e35b302c2d2eb15669b0e12ba2dc"
  },
  {
    "url": "assets/js/61.c518ce67.js",
    "revision": "b661215898a0cc66e61c77db927f313b"
  },
  {
    "url": "assets/js/62.4dd952a5.js",
    "revision": "32483d6b83874468dedeab9b64d48709"
  },
  {
    "url": "assets/js/63.43345b30.js",
    "revision": "f007db7b16774a7f89a5005a13b9d5fe"
  },
  {
    "url": "assets/js/64.7089ff5d.js",
    "revision": "1b77b048ee884766b01e2dff5e14699c"
  },
  {
    "url": "assets/js/65.9a6d44b4.js",
    "revision": "ca0b388409bc7958558af9c853ced576"
  },
  {
    "url": "assets/js/66.eaad1032.js",
    "revision": "bac55bf5f7553656db1ef1e94c3424e0"
  },
  {
    "url": "assets/js/67.7e95b702.js",
    "revision": "2b78699bfe766c966bea7e55edd3a2b0"
  },
  {
    "url": "assets/js/68.4cc88826.js",
    "revision": "6913ce88f3b7145c8de8a04d76bb7485"
  },
  {
    "url": "assets/js/69.3687cd7a.js",
    "revision": "aabd44dc01d3c0b74182a016b9d1549a"
  },
  {
    "url": "assets/js/70.922fc0fc.js",
    "revision": "ff299242164fe3629114a4521e16ff07"
  },
  {
    "url": "assets/js/71.23834f08.js",
    "revision": "0f6bd61645c96ee7b0a4d27168259bab"
  },
  {
    "url": "assets/js/72.798eb868.js",
    "revision": "bea3c6292a037ba4103333d9d27d6f40"
  },
  {
    "url": "assets/js/73.8c855f19.js",
    "revision": "ebb59c4f206bb6c9ed66958a100b6ca2"
  },
  {
    "url": "assets/js/8.4ba636ce.js",
    "revision": "83e0a7eb74cb899d861703affa2feb52"
  },
  {
    "url": "assets/js/app.f784bfaa.js",
    "revision": "b6045d67bfdc350b7fd7bc5a3e2a32f8"
  },
  {
    "url": "assets/js/chunk-default.1104492d.js",
    "revision": "07206e95fd066f9a931c3ff95d9e9446"
  },
  {
    "url": "assets/js/chunk-vuepress-dev.58a7774a.js",
    "revision": "eab0a67d19c0354d8e571c89b9a376b8"
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
    "revision": "2f1e435f3ad55eed6e3ef8560c821855"
  },
  {
    "url": "css/reset.html",
    "revision": "367af040f90605d4f34b7622031ebe95"
  },
  {
    "url": "css/scrollBar.html",
    "revision": "c2180ea5b4477cd6791f1bc76a71e95c"
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
    "revision": "fd9841c9a5fb90a3a2cd8ee7f5c8e349"
  },
  {
    "url": "javascript/bom/Navigator.sendBeacon.html",
    "revision": "3ddbccb2ff456fbb74005fc732806b04"
  },
  {
    "url": "javascript/bom/sessionStorage.html",
    "revision": "4b96420d0fa0f4c57910aa4979a178fa"
  },
  {
    "url": "javascript/dom/api-drag.html",
    "revision": "1b023c9694d05a7dec145d9a3f21ec63"
  },
  {
    "url": "javascript/dom/defer与async.html",
    "revision": "bafea5a850c5e6d27719647cc234e338"
  },
  {
    "url": "javascript/dom/preload与prefetch.html",
    "revision": "d71f79a36b50036d1f49633e9a18e21d"
  },
  {
    "url": "javascript/ESM与现代浏览器.html",
    "revision": "fa159eeec4bf7c31d7ff9d7ec9abf07b"
  },
  {
    "url": "javascript/微任务宏任务执行顺序.html",
    "revision": "1ebf90de49a182281abdf71dd20ecb40"
  },
  {
    "url": "others/interview/a == 1 && a == 2 && a == 3.html",
    "revision": "633670db6163cd436929624ea9e21b39"
  },
  {
    "url": "others/interview/遍历的异步写法.html",
    "revision": "688a1b5ef626495c12d7ba8c1a9c382d"
  },
  {
    "url": "others/JSON.html",
    "revision": "f8dfa110ebe0a978b275a0dd896d8ecd"
  },
  {
    "url": "others/unicode和utf-8/unicode.html",
    "revision": "b83453b8f610f65495c6211aa4fb24c1"
  },
  {
    "url": "others/unicode和utf-8/utf-8.html",
    "revision": "ee785830636e05f6fc347450a2db8118"
  },
  {
    "url": "others/web安全.html",
    "revision": "91e754d171d21d74d042e73829efb13b"
  },
  {
    "url": "others/待整理的.html",
    "revision": "e9973e9386db7a972d5723518e72989c"
  },
  {
    "url": "others/跨域问题.html",
    "revision": "c03670d16cefdce5b860612cf6388d32"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "fd09faa19da3dae4343b59937714c751"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "25fd5ba3523eb8c7c78e772557b944d1"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "8e46fde0f4a6bfa5f7c3677be09e7b8f"
  },
  {
    "url": "tools/typora快捷键.html",
    "revision": "1ec8eb8bbf50d2f1eea1648cc8989be5"
  },
  {
    "url": "tools/webstorm/创建宏.html",
    "revision": "d070bd9610913280c3a86babfa26c242"
  },
  {
    "url": "tools/webstorm/快捷键.html",
    "revision": "c31a2c39193925d0bf3efc32c5b1e89d"
  },
  {
    "url": "tools/yarn.html",
    "revision": "da70b211dd9a05ed191b7392936a77df"
  },
  {
    "url": "tools/yed-graph-editor快捷键.html",
    "revision": "bdc70dc661b22824cda6723680cc4cab"
  },
  {
    "url": "tools/版本管理工具-git/基础.html",
    "revision": "11455c049a019fe0befb7825676582c4"
  },
  {
    "url": "tools/版本管理工具-git/需要掌握的.html",
    "revision": "eaa8d601105a268d0ec6d086c9c3b42b"
  },
  {
    "url": "脚手架工具/browserslist.html",
    "revision": "2b1a3efac92b4291b2f90351dcda39a8"
  },
  {
    "url": "脚手架工具/eslint/01-安装.html",
    "revision": "5cfa04a42ad78687ad7a7cfd0faf26a9"
  },
  {
    "url": "脚手架工具/eslint/02-使用.html",
    "revision": "fcd5acf42d438478b6ba62f71d57e0aa"
  },
  {
    "url": "脚手架工具/eslint/03-vue开发通用的配置.html",
    "revision": "1227e4cbef20ab3b3c9021ab9e041162"
  },
  {
    "url": "脚手架工具/eslint/04-配合husky与lint-staged.html",
    "revision": "e7179ba2f235e07807eb08be44206b93"
  },
  {
    "url": "脚手架工具/eslint/05-@babel下的eslint-parser.html",
    "revision": "b16f4cf00b282c6bda2e2303574b9b8c"
  },
  {
    "url": "脚手架工具/umd模块打包方法.html",
    "revision": "aa6537251e164d2dfaaaa6e62a42e402"
  },
  {
    "url": "脚手架工具/vue-cli/01-基本配置.html",
    "revision": "2a7671bd4f845a061293fc69b5fef239"
  },
  {
    "url": "脚手架工具/vue-cli/02-loader.html",
    "revision": "9a15b600f674198cb5f99aab0c57c8b2"
  },
  {
    "url": "脚手架工具/vue-cli/03-plugin.html",
    "revision": "5eda3834d740bd602b40b08c37beb2e8"
  },
  {
    "url": "脚手架工具/vue-cli/env.html",
    "revision": "700f761ea229bf679ea95d642e61986d"
  },
  {
    "url": "脚手架工具/vue-cli/loader之image-webpack-loader.html",
    "revision": "033cb6e4acc9ede4306e82f444f6bbb2"
  },
  {
    "url": "脚手架工具/vue-cli/others.html",
    "revision": "0152c79f48d0217e98ecae89152d35b3"
  },
  {
    "url": "脚手架工具/vue-cli/webpack-chain.html",
    "revision": "8bd511e8d84b0e5c4f19e51c52080588"
  },
  {
    "url": "脚手架工具/vue-cli/新增webpack配置.html",
    "revision": "88b8a9eec47c3dc8f70ab3ed8bb34465"
  },
  {
    "url": "脚手架工具/vue-cli/查看webpack配置.html",
    "revision": "54ffd139f5861107d9739d965d96bbb1"
  },
  {
    "url": "脚手架工具/vue-cli/配置sass.html",
    "revision": "7603a64ab6fbe55a4d1e896384caf8db"
  },
  {
    "url": "脚手架工具/vue-cli/配置svg.html",
    "revision": "31e5639c97e1b69465e019a55bf831c0"
  },
  {
    "url": "脚手架工具/vuepress.html",
    "revision": "e4fddb863c199f482a923680e5e9c476"
  },
  {
    "url": "脚手架工具/webpack/01-entry.html",
    "revision": "dda7f069459474339e8cd01f14250554"
  },
  {
    "url": "脚手架工具/webpack/02-output.html",
    "revision": "c6842f7b5c153bdeff2b0c5be324c2e2"
  },
  {
    "url": "脚手架工具/webpack/03-plugin.html",
    "revision": "6dd004ae65208bdf79daa9c285244907"
  },
  {
    "url": "脚手架工具/webpack/04-module.html",
    "revision": "c0b63841b377463cea63d102f1952138"
  },
  {
    "url": "脚手架工具/webpack/05-resolve.html",
    "revision": "f2cc2f2b4974e35cdd9d2616d8ef748d"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/others.html",
    "revision": "fbce6084e0485caf1f42a2f8b2e9a6ef"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/splitChunks.html",
    "revision": "80f13d686bf52cfb245694a47af3767f"
  },
  {
    "url": "脚手架工具/webpack/07-其他配置.html",
    "revision": "a9d441acdbafea461a92ee8563c3b564"
  },
  {
    "url": "脚手架工具/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "11f160414b622e75ce05fbf44089c64a"
  },
  {
    "url": "脚手架工具/webpack/others.html",
    "revision": "d9ece47b75217f22af13a43e97a7682c"
  },
  {
    "url": "脚手架工具/webpack/webpack之devtool .html",
    "revision": "4e28b1ed73587dfa75b64bcd4301bf98"
  },
  {
    "url": "脚手架工具/webpack/webpack之hash.html",
    "revision": "498065640fbc5f2dd5ce5c97ddcbd9c3"
  },
  {
    "url": "脚手架工具/webpack/webpack之magic-comments.html",
    "revision": "a78c86d55a7284fb8256fcef83f413df"
  },
  {
    "url": "脚手架工具/webpack/webpack之runtime与manifest.html",
    "revision": "41cc5a9a4a47643164c41f3d269526bb"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理commonjs.html",
    "revision": "2e956ebc67d6a61e90c99e2ef37c8191"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理esmodule.html",
    "revision": "93434097e328dd3191d345dda4871831"
  },
  {
    "url": "脚手架工具/webpack/webpack之模块路径解析规则.html",
    "revision": "cbdb2edb64c563c877be8d352197a5fb"
  },
  {
    "url": "脚手架工具/webpack/模块方法之requireContext.html",
    "revision": "1dd4ec03eee68e0270c2ffd0effe6189"
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
