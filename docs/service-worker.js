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
    "revision": "7809e347e9ae584bd0f5de31b202b4f1"
  },
  {
    "url": "assets/css/0.styles.4aa326b8.css",
    "revision": "23ea7eef906a38c8d5dd905e1c010b74"
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
    "url": "assets/js/10.c86646a0.js",
    "revision": "e4b7b8d8942769a1e0f3d55896575f99"
  },
  {
    "url": "assets/js/11.72f14390.js",
    "revision": "3a4a2d1f4f3044ce8600f1fd856ad4c9"
  },
  {
    "url": "assets/js/12.bbe21486.js",
    "revision": "c32d3c0eda1a94ca2322962fed2fa7ac"
  },
  {
    "url": "assets/js/13.5b9bce9c.js",
    "revision": "95dfb8ee0410f23a78945e2290849d76"
  },
  {
    "url": "assets/js/14.839da422.js",
    "revision": "d278736b0ea6f084decee3aab4bbd02c"
  },
  {
    "url": "assets/js/15.8146e292.js",
    "revision": "db7fd28d42905aaa9016307748b15e50"
  },
  {
    "url": "assets/js/16.096af1b7.js",
    "revision": "dff4aed8c520af6257f59c9cd4fe9bef"
  },
  {
    "url": "assets/js/17.0d6f76d1.js",
    "revision": "545c8a0c36636f6ae75926fdb45fbf38"
  },
  {
    "url": "assets/js/18.ec8879e4.js",
    "revision": "38564ed5c8cea02b01296d9edf4a1dea"
  },
  {
    "url": "assets/js/19.fc6176ad.js",
    "revision": "787b8f14e978940c7e59616ceeb80ede"
  },
  {
    "url": "assets/js/2.95029f50.js",
    "revision": "92e80f591aedf6e365fe22392203e974"
  },
  {
    "url": "assets/js/20.4010216a.js",
    "revision": "70a63711753820fa588c6bb7b7059652"
  },
  {
    "url": "assets/js/21.30577181.js",
    "revision": "f39ca4126c360bfac1117c7474b667e2"
  },
  {
    "url": "assets/js/22.1951bf58.js",
    "revision": "850f7cb00aa3ceda4a38fafe8b8d48ec"
  },
  {
    "url": "assets/js/23.671de176.js",
    "revision": "0c0bdb41accc7e4e17e5b6eeac76d358"
  },
  {
    "url": "assets/js/24.3b371bd9.js",
    "revision": "bf189f4e2301f8c487a14ec4b107bad9"
  },
  {
    "url": "assets/js/25.e5ac70c9.js",
    "revision": "1ba6f4a426ac9c00f49404d29244f01e"
  },
  {
    "url": "assets/js/26.5c6471ab.js",
    "revision": "69243b84c5acc54e20963fc75c2bece6"
  },
  {
    "url": "assets/js/27.7c907d4f.js",
    "revision": "385f10d01145ecca2b379ae4fb94ede9"
  },
  {
    "url": "assets/js/28.5bbe6367.js",
    "revision": "3f9489228a578805f08bc2d042dea26d"
  },
  {
    "url": "assets/js/29.b3f6eb29.js",
    "revision": "d7832ca871edbedf3489188d8cd31920"
  },
  {
    "url": "assets/js/3.50ad17c5.js",
    "revision": "e4100de0440d22eac6c9ef49e198a3b8"
  },
  {
    "url": "assets/js/30.510168b3.js",
    "revision": "6a407db87dcadaf8b72578906b8f1537"
  },
  {
    "url": "assets/js/31.17cfafd5.js",
    "revision": "0ac1a90affc53ad31f410efaccb480af"
  },
  {
    "url": "assets/js/32.1780ad4b.js",
    "revision": "8f0882168ebc8d2f5ad9f693ced6d43a"
  },
  {
    "url": "assets/js/33.c320cfac.js",
    "revision": "15e8b3fac5a31ae5167236ed659d1d49"
  },
  {
    "url": "assets/js/34.2e6c4e8b.js",
    "revision": "a33cace131bd0f842e38a8116f01bcc8"
  },
  {
    "url": "assets/js/35.2cd4a346.js",
    "revision": "32443bcb125fc2740d0043a18ac518ed"
  },
  {
    "url": "assets/js/36.07814e9b.js",
    "revision": "ab36dbf20fb14e1a072748e8de28dbec"
  },
  {
    "url": "assets/js/37.94fd2734.js",
    "revision": "dc728f5456b8540bc6e0d0c913563cc8"
  },
  {
    "url": "assets/js/38.79cfcf10.js",
    "revision": "f627de388a6833b9e6a8f0a5efee2111"
  },
  {
    "url": "assets/js/39.4224a953.js",
    "revision": "af171427ec5bcfbd1fc880426c9ca9bc"
  },
  {
    "url": "assets/js/4.4cc53ee8.js",
    "revision": "03140c919f8d9f12d5ab2e8e68c38f0d"
  },
  {
    "url": "assets/js/40.076e9861.js",
    "revision": "447392a0b0526c3c852d07caaa78c3bf"
  },
  {
    "url": "assets/js/41.4fa2e83a.js",
    "revision": "9a9fc5d273f0e142c68d68a1cc39971f"
  },
  {
    "url": "assets/js/42.494113e9.js",
    "revision": "d904a3f0b8d2b6727bd33de5ed8405f5"
  },
  {
    "url": "assets/js/43.21acc9c3.js",
    "revision": "19a4b7d3765403a553b0605a5a8c5dad"
  },
  {
    "url": "assets/js/44.5bf455fd.js",
    "revision": "40a2dabf0cea183465a3b413e7902079"
  },
  {
    "url": "assets/js/45.e16f0c22.js",
    "revision": "a766a9c536b3e32aaee24474a25bfaaa"
  },
  {
    "url": "assets/js/46.bc97ac4c.js",
    "revision": "c542c5d512581e4d7b3b4d4649a65bcb"
  },
  {
    "url": "assets/js/47.2960b0e4.js",
    "revision": "e0faf937cf18c5d8067beaaa0deb01d6"
  },
  {
    "url": "assets/js/5.f498c13e.js",
    "revision": "7651b7246946ae98d09531c40ca35d78"
  },
  {
    "url": "assets/js/6.132489f7.js",
    "revision": "a00a63aff361419a2543d2a96401b2ce"
  },
  {
    "url": "assets/js/7.1755bce5.js",
    "revision": "2098c9d3f2fb3482f8a6b7b3222c1e82"
  },
  {
    "url": "assets/js/8.d9b06864.js",
    "revision": "fd11530cad565a9893e4e1918f625245"
  },
  {
    "url": "assets/js/9.0ebd126d.js",
    "revision": "3a4ba0c265041029b63dfc744b8be669"
  },
  {
    "url": "assets/js/app.63afa856.js",
    "revision": "64fd990a6004a652b5261eb82048ab29"
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
    "url": "fonts/JetBrainsMono-Medium.ttf",
    "revision": "2ab3c46a017cadf52f504054eee882ad"
  },
  {
    "url": "fonts/JetBrainsMono-Regular.ttf",
    "revision": "a7151c5349c1aa20beefb3c5430c3a79"
  },
  {
    "url": "html/defer与async.html",
    "revision": "d1486cb4299cd3e54670eb295579e4e4"
  },
  {
    "url": "html/preload与prefetch.html",
    "revision": "864213dc68988f33982684b97f9ef2b6"
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
    "revision": "d3b36a40cc0119275afd2b51c3a454ec"
  },
  {
    "url": "javascript/es6/ESM与现代浏览器.html",
    "revision": "ae4f746d9e000f10bd58b1bca0339b37"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "98f0f1927e3f9ef29ac6c684f27a74e5"
  },
  {
    "url": "tools/browserslist.html",
    "revision": "8c6e05ef7fdbbfcbf2c7c5e5d48f8199"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "4156296d0d5394ebc3b0a4c22a77092b"
  },
  {
    "url": "tools/env.html",
    "revision": "94cff0940d2795efd12f2e6c6d3c14d3"
  },
  {
    "url": "tools/eslintrc.js.html",
    "revision": "beaacc02f0e446a0aa0c03cf70acfd21"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "1a1cbfb66f137a4d2f1b82bec0615698"
  },
  {
    "url": "tools/vuepress.html",
    "revision": "149998635ff251eb6754733c91b82529"
  },
  {
    "url": "前端脚手架/vue-cli/01-基本配置.html",
    "revision": "ff1c22b36a5b681cabfea85fdc23fd15"
  },
  {
    "url": "前端脚手架/vue-cli/02-loader.html",
    "revision": "4dfdc31da98e847563912b3460e2cfee"
  },
  {
    "url": "前端脚手架/vue-cli/03-plugin.html",
    "revision": "8e965668b57a4fa09e0d8efc486fbc14"
  },
  {
    "url": "前端脚手架/vue-cli/loader之image-webpack-loader.html",
    "revision": "c14425a3c80170d56cad4c8571a980ac"
  },
  {
    "url": "前端脚手架/vue-cli/others.html",
    "revision": "9cab9c4fa3548e0d35e7ab24f26d69c1"
  },
  {
    "url": "前端脚手架/vue-cli/webpack-chain.html",
    "revision": "ea8b0df3ad4ce7e23cc107596526422a"
  },
  {
    "url": "前端脚手架/vue-cli/新增webpack配置.html",
    "revision": "30b9c9367355cf9008143534437b5452"
  },
  {
    "url": "前端脚手架/vue-cli/查看webpack配置.html",
    "revision": "d5fece726d34134ba5833c968115d34f"
  },
  {
    "url": "前端脚手架/vue-cli/配置sass.html",
    "revision": "5650cff5caf9ad37d87a300f98475999"
  },
  {
    "url": "前端脚手架/vue-cli/配置svg.html",
    "revision": "d75b6b48469129a3b9291740149e1d0c"
  },
  {
    "url": "前端脚手架/webpack/01-entry.html",
    "revision": "b162d4f209cc2d0ac7a7d0547a6ee786"
  },
  {
    "url": "前端脚手架/webpack/02-output.html",
    "revision": "ad48bf78a06fdaa7bd7929c494cf08a6"
  },
  {
    "url": "前端脚手架/webpack/03-plugin.html",
    "revision": "7f90a8a871d118fc066c9ee361674d90"
  },
  {
    "url": "前端脚手架/webpack/04-module.html",
    "revision": "62333c3eb066720ec6bec740f7723863"
  },
  {
    "url": "前端脚手架/webpack/05-resolve.html",
    "revision": "d3af6de4c2d0c9a7afa3d4da8f958223"
  },
  {
    "url": "前端脚手架/webpack/06-optimization/others.html",
    "revision": "bd50c2b0228a817468b45f41de851eac"
  },
  {
    "url": "前端脚手架/webpack/06-optimization/splitChunks.html",
    "revision": "f164c45b29045388972c478b7f237219"
  },
  {
    "url": "前端脚手架/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "8e56d5c3b4f27e59856dff15bcc2a5f1"
  },
  {
    "url": "前端脚手架/webpack/others.html",
    "revision": "7fba1e5b1fa4c3d9d84e713900c12f39"
  },
  {
    "url": "前端脚手架/webpack/webpack之devtool .html",
    "revision": "c03176572206f756633b38e201f06f1a"
  },
  {
    "url": "前端脚手架/webpack/webpack之hash.html",
    "revision": "8511d105182067c7c0606cb1083090ae"
  },
  {
    "url": "前端脚手架/webpack/webpack之magic-comments.html",
    "revision": "250c141027ac74c0a1287f0d30614d1e"
  },
  {
    "url": "前端脚手架/webpack/webpack之runtime与manifest.html",
    "revision": "597ba51417dc547181c717fd78dac0b8"
  },
  {
    "url": "前端脚手架/webpack/webpack之处理commonjs.html",
    "revision": "a969d2de5b716d4b37a641ca28590bcf"
  },
  {
    "url": "前端脚手架/webpack/webpack之处理esmodule.html",
    "revision": "d46bc6fc1217e26c0ac2e00fafaae3b3"
  },
  {
    "url": "前端脚手架/webpack/webpack之模块路径解析规则.html",
    "revision": "b3de6a13f8df39d811d55246f3d4ed16"
  },
  {
    "url": "前端脚手架/webpack/模块方法之requireContext.html",
    "revision": "ee11117b06112966483b6d10f9a87fa8"
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
