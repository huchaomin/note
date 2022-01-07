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
    "revision": "70c2b4a40956e4c473010ab5983e75f6"
  },
  {
    "url": "assets/css/0.styles.4f8b91e4.css",
    "revision": "4a050fdb1897807a022743a896f82398"
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
    "url": "assets/img/me.fb408776.png",
    "revision": "fb408776b4995b76cf43892e12714d2d"
  },
  {
    "url": "assets/img/receivingQrCode.753ec20c.jpg",
    "revision": "753ec20cd6e75921958367e8f59483c6"
  },
  {
    "url": "assets/js/10.8380ccb6.js",
    "revision": "4ef71556b2db7e5281841518b2b5cfaa"
  },
  {
    "url": "assets/js/11.6d5695ef.js",
    "revision": "aef8a5a7b090a5c6757965cd0eea2962"
  },
  {
    "url": "assets/js/12.101f890c.js",
    "revision": "2b49b0220f241449c4e869b0d4f74244"
  },
  {
    "url": "assets/js/13.8315c6c0.js",
    "revision": "6435e39468d8c1e3783c56ea2c04c73f"
  },
  {
    "url": "assets/js/14.65930da4.js",
    "revision": "e2a5d19619f7376ca3b8fa5523914d88"
  },
  {
    "url": "assets/js/15.3ad72fa2.js",
    "revision": "00c5a3332595f2ee01402042f6dd35c3"
  },
  {
    "url": "assets/js/16.d06e7f3a.js",
    "revision": "5bbaea76a4ca113f12aee08c5ba2e07c"
  },
  {
    "url": "assets/js/17.e61ccc2d.js",
    "revision": "f55d30ee011a60b63ea495907703f6a9"
  },
  {
    "url": "assets/js/18.d5237660.js",
    "revision": "6ca1b2ba8b00082232efebdf47457ac3"
  },
  {
    "url": "assets/js/19.b990fbbf.js",
    "revision": "c768baed1b1f07f3c2c8408ac12bc40d"
  },
  {
    "url": "assets/js/2.80b0109d.js",
    "revision": "cf535c0d24e344ba78d6bb16a4d8e861"
  },
  {
    "url": "assets/js/20.7300caff.js",
    "revision": "6e83324fd3d8af1c808e40e9a8a6104e"
  },
  {
    "url": "assets/js/21.598bd6eb.js",
    "revision": "0e672cd64c7fccc115a4c68688bd04a1"
  },
  {
    "url": "assets/js/22.0971ac46.js",
    "revision": "282fc65bd2d66a228ea9aba58188890c"
  },
  {
    "url": "assets/js/23.74751974.js",
    "revision": "7b2a56869e69184a07cda02b0eb2a4b8"
  },
  {
    "url": "assets/js/24.7243b3df.js",
    "revision": "58e351eafeeb9614647e8a83833f93ec"
  },
  {
    "url": "assets/js/25.34551887.js",
    "revision": "e57981f7a5b256891b54ba872ca88158"
  },
  {
    "url": "assets/js/26.8f912f6a.js",
    "revision": "0b4874a10165b830f3f0e7512093291b"
  },
  {
    "url": "assets/js/27.18ea6094.js",
    "revision": "b11928956e641615f1ad63b397bccbe7"
  },
  {
    "url": "assets/js/28.4603c21a.js",
    "revision": "09edead67d21e9448192282e821e1516"
  },
  {
    "url": "assets/js/29.1ac7c5de.js",
    "revision": "55a65bba060fcf6704622bf0100b90b9"
  },
  {
    "url": "assets/js/3.fc2efeae.js",
    "revision": "e49b792fa846270fe91290112055bce3"
  },
  {
    "url": "assets/js/30.4db7c3bb.js",
    "revision": "72466179d7463e92a285dc9e14db1cd1"
  },
  {
    "url": "assets/js/31.aa01354c.js",
    "revision": "20d8cf4b21fadc806c2b564f88c45779"
  },
  {
    "url": "assets/js/32.b7da1c31.js",
    "revision": "1d83ac7198f37440839e68fa30c93804"
  },
  {
    "url": "assets/js/33.513e9ada.js",
    "revision": "dabcb19aa7b08f455085ebf30ebf920f"
  },
  {
    "url": "assets/js/34.56a19fcd.js",
    "revision": "b0c09b16bfcf61253b74b3b561290e76"
  },
  {
    "url": "assets/js/35.32db0d4c.js",
    "revision": "101a10d2e69359450b50e0ca813b00e6"
  },
  {
    "url": "assets/js/36.401c641f.js",
    "revision": "d2cafcff73b537fdf6f54fc70c38bf3a"
  },
  {
    "url": "assets/js/37.0a4d8bf8.js",
    "revision": "34cebbea3b856de0f118c90058c80b71"
  },
  {
    "url": "assets/js/38.c43e52ca.js",
    "revision": "03eebe07d4c5ba3bbe98f95f7fa5c646"
  },
  {
    "url": "assets/js/39.2697f098.js",
    "revision": "2088e2d2d487004039f212998df40427"
  },
  {
    "url": "assets/js/4.83b7dc70.js",
    "revision": "edd2ccb01624ded8a1853bf7f231635e"
  },
  {
    "url": "assets/js/40.9358a6e2.js",
    "revision": "c7f9223606b7cac97e8abbe4c0bcc845"
  },
  {
    "url": "assets/js/41.42898be9.js",
    "revision": "f0ff2d6b8c2192acb051c68202b9bd16"
  },
  {
    "url": "assets/js/42.3e0744e0.js",
    "revision": "669959ea3633cd57a944cf4e9a5f49da"
  },
  {
    "url": "assets/js/43.83c03c45.js",
    "revision": "ca1f3ba629bc8a3c32426903e6b8cba5"
  },
  {
    "url": "assets/js/44.772e07bd.js",
    "revision": "a5a0a32667d600c279b99ac21d7ac707"
  },
  {
    "url": "assets/js/45.b824cc50.js",
    "revision": "405b1dcbe02db3c8c2a046b8f2b1668f"
  },
  {
    "url": "assets/js/46.42d68d4a.js",
    "revision": "4211af1a37232100ae2132d14ca62eda"
  },
  {
    "url": "assets/js/47.653df1e3.js",
    "revision": "eeb4e2778ed07fc90e6b3ad178d2ca04"
  },
  {
    "url": "assets/js/48.ac7a155e.js",
    "revision": "5e1a4118f7edde9515919e88d7978dab"
  },
  {
    "url": "assets/js/49.4aadef54.js",
    "revision": "5354abb18db74a020bf6a526abde7bde"
  },
  {
    "url": "assets/js/5.ca70aed2.js",
    "revision": "7a01c5e97a0a309fdedf58a4301b67cc"
  },
  {
    "url": "assets/js/50.b1140168.js",
    "revision": "6243b021c65167f29cdc4e0c8e08a124"
  },
  {
    "url": "assets/js/51.5d07eaf4.js",
    "revision": "ca396eacf5c757a9d6b3436a5d995e8a"
  },
  {
    "url": "assets/js/52.a424fd62.js",
    "revision": "fe2a3a2daadb367f7399e44200fb9438"
  },
  {
    "url": "assets/js/53.577a1e21.js",
    "revision": "c983c8ee80a96d76c2798bea90646607"
  },
  {
    "url": "assets/js/54.bab61655.js",
    "revision": "0930e6432bbfee34681f7370d1eb02d5"
  },
  {
    "url": "assets/js/6.a63552dd.js",
    "revision": "f5a27d4b00ef5bdbdbc64d198b7129de"
  },
  {
    "url": "assets/js/7.1755bce5.js",
    "revision": "2098c9d3f2fb3482f8a6b7b3222c1e82"
  },
  {
    "url": "assets/js/8.f1f38c4e.js",
    "revision": "ad5fde802917cacf03a81ec7ae040ace"
  },
  {
    "url": "assets/js/9.023b60ea.js",
    "revision": "755e79f99b05e1fa53614c9dc85ce116"
  },
  {
    "url": "assets/js/app.050a90d5.js",
    "revision": "32909ea205bda8e234c35d7f2a29316e"
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
    "revision": "0131eea01c5a8614c1af6239335fc78a"
  },
  {
    "url": "css/reset.html",
    "revision": "207ade0b9f508cdb425b5cac1beeee68"
  },
  {
    "url": "css/scrollBar.html",
    "revision": "29e9c1eab11e963be49b700c5a72fc4b"
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
    "revision": "c648091b65d37ef7d5d4172f722f80ff"
  },
  {
    "url": "javascript/bom/Navigator.sendBeacon.html",
    "revision": "a9f3adcc24f350d6eab704666a8b6cda"
  },
  {
    "url": "javascript/bom/sessionStorage.html",
    "revision": "7d7245035f886ef7399c0b468d4c9251"
  },
  {
    "url": "javascript/dom/api-drag.html",
    "revision": "0a7f294a27c922545e1ad3bb2e647135"
  },
  {
    "url": "javascript/dom/defer与async.html",
    "revision": "dd881bdf5c1068e43b70f5e672dbb53c"
  },
  {
    "url": "javascript/dom/preload与prefetch.html",
    "revision": "9af3ee2728ba0db0fc83cc10dcc34987"
  },
  {
    "url": "javascript/ESM与现代浏览器.html",
    "revision": "0c3b2496ab0814b6031cee6e06e342a9"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "55583c47de665622dffd15ea1068a586"
  },
  {
    "url": "tools/browserslist.html",
    "revision": "4749ba2a6dd05c38bd8103b75da80d2a"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "e99d89e7a4ad8256c51a83af8bb57187"
  },
  {
    "url": "tools/env.html",
    "revision": "74393d9fe79b2904bfd29c67f2e2e037"
  },
  {
    "url": "tools/eslint.html",
    "revision": "e5999bf6a84997916b6be6274a16b44e"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "a7f0f5aa51542628866ad7b37506e6cb"
  },
  {
    "url": "tools/vuepress.html",
    "revision": "eb0e0be4ed5923b10002999bcd59d3fa"
  },
  {
    "url": "前端脚手架/umd模块打包方法.html",
    "revision": "d3128dc58d694c1a2568956a98198a77"
  },
  {
    "url": "前端脚手架/vue-cli/01-基本配置.html",
    "revision": "947795677ae1614707cb83cf36266f39"
  },
  {
    "url": "前端脚手架/vue-cli/02-loader.html",
    "revision": "0fed9acc36cfd3bc95d9c6a968ba692b"
  },
  {
    "url": "前端脚手架/vue-cli/03-plugin.html",
    "revision": "b6ae78f5c3fa7bf2089b5c23e5729ea7"
  },
  {
    "url": "前端脚手架/vue-cli/loader之image-webpack-loader.html",
    "revision": "e43fbd61ddd07da4b49a2e1f1a3f02ab"
  },
  {
    "url": "前端脚手架/vue-cli/others.html",
    "revision": "6ef8b72d947df34732e34884b40832d3"
  },
  {
    "url": "前端脚手架/vue-cli/webpack-chain.html",
    "revision": "9e98055eb5a8036887e455c9d4fee27d"
  },
  {
    "url": "前端脚手架/vue-cli/新增webpack配置.html",
    "revision": "773879c760981601e2a1d433b391566a"
  },
  {
    "url": "前端脚手架/vue-cli/查看webpack配置.html",
    "revision": "bafed1ca83421ebfd7b6efdc2574e47d"
  },
  {
    "url": "前端脚手架/vue-cli/配置sass.html",
    "revision": "f83e55f99e98567f0921d92ea606b27f"
  },
  {
    "url": "前端脚手架/vue-cli/配置svg.html",
    "revision": "8c1e15c49c662b77a332ecccc84c32ba"
  },
  {
    "url": "前端脚手架/webpack/01-entry.html",
    "revision": "70c6d2631871f5e396bce07dc6a07afd"
  },
  {
    "url": "前端脚手架/webpack/02-output.html",
    "revision": "07cc8b66b09efa5d23fb89c27b9a746b"
  },
  {
    "url": "前端脚手架/webpack/03-plugin.html",
    "revision": "5ec36060bee2e145541b0bacc849f831"
  },
  {
    "url": "前端脚手架/webpack/04-module.html",
    "revision": "62abee0f5e020382c45323ac718dd277"
  },
  {
    "url": "前端脚手架/webpack/05-resolve.html",
    "revision": "60a9b5d62bba52477e33d2ad2c0cbbc9"
  },
  {
    "url": "前端脚手架/webpack/06-optimization/others.html",
    "revision": "c93f987fda9543af987877f86ad76f29"
  },
  {
    "url": "前端脚手架/webpack/06-optimization/splitChunks.html",
    "revision": "efb2c9c77ddf2b4ac55d9736872ccd9c"
  },
  {
    "url": "前端脚手架/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "f1ce56c71dfdeb98e101a722e1bbf5ff"
  },
  {
    "url": "前端脚手架/webpack/others.html",
    "revision": "5575d3bc34bef1781dd60ede8fca82c4"
  },
  {
    "url": "前端脚手架/webpack/webpack之devtool .html",
    "revision": "7bdee6931052da5c5d2800355e817cc7"
  },
  {
    "url": "前端脚手架/webpack/webpack之hash.html",
    "revision": "0d582df192fb5051d94dd6fec44cc500"
  },
  {
    "url": "前端脚手架/webpack/webpack之magic-comments.html",
    "revision": "be75780350651da7529407b0af8b2573"
  },
  {
    "url": "前端脚手架/webpack/webpack之runtime与manifest.html",
    "revision": "55293d727a27d9e94bd3474a2fc79731"
  },
  {
    "url": "前端脚手架/webpack/webpack之处理commonjs.html",
    "revision": "9ec8e961aee24922f6b01e22ea81290b"
  },
  {
    "url": "前端脚手架/webpack/webpack之处理esmodule.html",
    "revision": "a754e479a360ce055344c7bc919a66fc"
  },
  {
    "url": "前端脚手架/webpack/webpack之模块路径解析规则.html",
    "revision": "e0c51e1de6b29a5a8408fb2e9c56eae0"
  },
  {
    "url": "前端脚手架/webpack/模块方法之requireContext.html",
    "revision": "eb5435b9740f49dd4970777db8f34de4"
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
