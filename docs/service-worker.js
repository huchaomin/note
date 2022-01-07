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
    "revision": "bce71213d37a8d9868b2dd08eca9a3d6"
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
    "url": "assets/js/12.a297f4bc.js",
    "revision": "b801e5597cbdf018ceaaf4dbfcabaf4a"
  },
  {
    "url": "assets/js/13.6b1f1b5d.js",
    "revision": "4dc7a433d01e967d1037a948addebbb2"
  },
  {
    "url": "assets/js/14.65930da4.js",
    "revision": "e2a5d19619f7376ca3b8fa5523914d88"
  },
  {
    "url": "assets/js/15.b1eb8ca8.js",
    "revision": "0ccc279ab376ce930ef80b2ea68a81d7"
  },
  {
    "url": "assets/js/16.d5a3f8dd.js",
    "revision": "1cccfafd4d3ac999d69c746ee77cfa37"
  },
  {
    "url": "assets/js/17.e61ccc2d.js",
    "revision": "f55d30ee011a60b63ea495907703f6a9"
  },
  {
    "url": "assets/js/18.c0298647.js",
    "revision": "2d7cb758a2eff568fedb1b2a02525aef"
  },
  {
    "url": "assets/js/19.28afc1ef.js",
    "revision": "b3a4b1fac377962af26c37bdbc04046f"
  },
  {
    "url": "assets/js/2.80b0109d.js",
    "revision": "cf535c0d24e344ba78d6bb16a4d8e861"
  },
  {
    "url": "assets/js/20.15d56819.js",
    "revision": "8ea81ebbde4f0b94dbb5798a66ddefc7"
  },
  {
    "url": "assets/js/21.598bd6eb.js",
    "revision": "0e672cd64c7fccc115a4c68688bd04a1"
  },
  {
    "url": "assets/js/22.45794e25.js",
    "revision": "faa3052cd791f1dd26d99c5008744876"
  },
  {
    "url": "assets/js/23.74751974.js",
    "revision": "7b2a56869e69184a07cda02b0eb2a4b8"
  },
  {
    "url": "assets/js/24.12c115aa.js",
    "revision": "7bce68ae04edd6a8b6fd1b221cc20db4"
  },
  {
    "url": "assets/js/25.769a5b92.js",
    "revision": "7065103c2e96b4984afb03b5a19d2fa3"
  },
  {
    "url": "assets/js/26.b73976a5.js",
    "revision": "1136ca77b3df5a46487acd74ac17e127"
  },
  {
    "url": "assets/js/27.ec8009d4.js",
    "revision": "fba1f22dbc65ce1a1381235e7f14e20f"
  },
  {
    "url": "assets/js/28.8997f87f.js",
    "revision": "80c6401356559cb453e037847cf430fd"
  },
  {
    "url": "assets/js/29.37739010.js",
    "revision": "a615f3a42432622764734b74964a231e"
  },
  {
    "url": "assets/js/3.1f017fc6.js",
    "revision": "143962becfde91573c8669d609cf16a4"
  },
  {
    "url": "assets/js/30.0c404ebc.js",
    "revision": "9f9247c7588e55ecaf2abc5d049d256d"
  },
  {
    "url": "assets/js/31.47d0271d.js",
    "revision": "0260b9b7e3ab2e13fa2e2575436f6e4b"
  },
  {
    "url": "assets/js/32.550a5d97.js",
    "revision": "b16dc8094282986dfc181e56ae5a2e8f"
  },
  {
    "url": "assets/js/33.513e9ada.js",
    "revision": "dabcb19aa7b08f455085ebf30ebf920f"
  },
  {
    "url": "assets/js/34.7013076c.js",
    "revision": "f8286a62b90770682583d5ff2f7a821e"
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
    "url": "assets/js/38.dde8e09b.js",
    "revision": "b92e1a3223fe7618e8d948ded50d92ca"
  },
  {
    "url": "assets/js/39.4bc967ef.js",
    "revision": "9dc3adbbc164eb8e6b27885ab8d6ba33"
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
    "url": "assets/js/41.692c9a5a.js",
    "revision": "09638d4750997860e54d0b5ee4e708a1"
  },
  {
    "url": "assets/js/42.ef1d95f9.js",
    "revision": "250cda260d71d5ec6c91cd9486e7a982"
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
    "url": "assets/js/45.33d74c73.js",
    "revision": "8ec6121b532909c9534bbb44ad1e2d4a"
  },
  {
    "url": "assets/js/46.ac5b10de.js",
    "revision": "45a90aba77825d1cc889bf2474a4375f"
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
    "url": "assets/js/6.93adb7f9.js",
    "revision": "233db2e894de4f4cd94390500b652140"
  },
  {
    "url": "assets/js/7.1755bce5.js",
    "revision": "2098c9d3f2fb3482f8a6b7b3222c1e82"
  },
  {
    "url": "assets/js/8.61dc3a77.js",
    "revision": "409ecf9b8bedf4b7c25d64c6233cce1c"
  },
  {
    "url": "assets/js/9.5b29ed59.js",
    "revision": "daf100867ac89736a997c5b8c64380b6"
  },
  {
    "url": "assets/js/app.fe97baf7.js",
    "revision": "d61f3ca7096336352deb1f1922b19acb"
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
    "revision": "bad93d328f5e0bf0c0be03f056fe6db2"
  },
  {
    "url": "css/reset.html",
    "revision": "a4f1f9b2e3672088cdcf6aeb7fee6126"
  },
  {
    "url": "css/scrollBar.html",
    "revision": "e66343e844a26f8a31463a5235a41607"
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
    "revision": "7206f0287850addc9ffd531df2e6c60b"
  },
  {
    "url": "javascript/bom/Navigator.sendBeacon.html",
    "revision": "786c9304d8690099f8b4f53afd60e896"
  },
  {
    "url": "javascript/bom/sessionStorage.html",
    "revision": "c540c9fa2a743f29a785f475d7168a26"
  },
  {
    "url": "javascript/dom/api-drag.html",
    "revision": "e9e4a72ec6db889f785bbe0d2edb536d"
  },
  {
    "url": "javascript/dom/defer与async.html",
    "revision": "167aa1afc1ea4adc1880295ad3aa74cb"
  },
  {
    "url": "javascript/dom/preload与prefetch.html",
    "revision": "b654d18830e905214634b4a785b03cd4"
  },
  {
    "url": "javascript/ESM与现代浏览器.html",
    "revision": "7928de74f14de392287b78bae6a9e34a"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "612a14f586f71d834d3fa012f27f671c"
  },
  {
    "url": "tools/browserslist.html",
    "revision": "921ad6861d5b949ca9716cbd5a57a1d9"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "1a46afecfe5ddcf93f98b598c7c2e387"
  },
  {
    "url": "tools/env.html",
    "revision": "56e6f8614a76cb2c72804ab927d2044d"
  },
  {
    "url": "tools/eslint.html",
    "revision": "2df820146ee6b99f708936560735b280"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "13ce42d642a86ead1e40cc11366cdc5b"
  },
  {
    "url": "tools/vuepress.html",
    "revision": "ab9f47af7996330780a1b95d2382df6a"
  },
  {
    "url": "前端脚手架/umd模块打包方法.html",
    "revision": "df9df6fb165390208aaf6524720a872c"
  },
  {
    "url": "前端脚手架/vue-cli/01-基本配置.html",
    "revision": "df7db265804b1566dc5085c202efd179"
  },
  {
    "url": "前端脚手架/vue-cli/02-loader.html",
    "revision": "cb90bdc0090a7d653a52c2a3132d8721"
  },
  {
    "url": "前端脚手架/vue-cli/03-plugin.html",
    "revision": "1511bc744b49339b02eba2dfa4a2a083"
  },
  {
    "url": "前端脚手架/vue-cli/loader之image-webpack-loader.html",
    "revision": "5a323bc2098346d5b1c1c1334d325da7"
  },
  {
    "url": "前端脚手架/vue-cli/others.html",
    "revision": "9a19043d24c247a39a4282abde1ddcbb"
  },
  {
    "url": "前端脚手架/vue-cli/webpack-chain.html",
    "revision": "bc6947381c670f1b9aebdc42f8d5e5af"
  },
  {
    "url": "前端脚手架/vue-cli/新增webpack配置.html",
    "revision": "5a4095101a643b9b2b5d38baf29cb909"
  },
  {
    "url": "前端脚手架/vue-cli/查看webpack配置.html",
    "revision": "2c93553175c0d1e8835f37431cc74fce"
  },
  {
    "url": "前端脚手架/vue-cli/配置sass.html",
    "revision": "064a3124430140322c17f027a4738847"
  },
  {
    "url": "前端脚手架/vue-cli/配置svg.html",
    "revision": "bd002fed3800863ee57381df412f6e92"
  },
  {
    "url": "前端脚手架/webpack/01-entry.html",
    "revision": "6bebd4722c2bb566db8c49eedbcb15e3"
  },
  {
    "url": "前端脚手架/webpack/02-output.html",
    "revision": "8bdabd1c98e058e81e0a9bc1674f8591"
  },
  {
    "url": "前端脚手架/webpack/03-plugin.html",
    "revision": "4fa6d226929e37c074d94728cebf80f4"
  },
  {
    "url": "前端脚手架/webpack/04-module.html",
    "revision": "845a7ac1d63146e623a76554a124d1ce"
  },
  {
    "url": "前端脚手架/webpack/05-resolve.html",
    "revision": "03efd49ac7b3a6020a1dc203c8d474c8"
  },
  {
    "url": "前端脚手架/webpack/06-optimization/others.html",
    "revision": "d63e43162a4f5efc7925300eb68ae03c"
  },
  {
    "url": "前端脚手架/webpack/06-optimization/splitChunks.html",
    "revision": "eaffe5952ba2392ae923152b0a2e266e"
  },
  {
    "url": "前端脚手架/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "2e035958b7f6f4ecd9beb87f895d6bf0"
  },
  {
    "url": "前端脚手架/webpack/others.html",
    "revision": "e44a2d8c0b34099bb806a14f25fa9232"
  },
  {
    "url": "前端脚手架/webpack/webpack之devtool .html",
    "revision": "4df8ce3ae558ba7ebd3bd1c1c13c8b03"
  },
  {
    "url": "前端脚手架/webpack/webpack之hash.html",
    "revision": "a2d235f5d40579bc6d525608e77fb92d"
  },
  {
    "url": "前端脚手架/webpack/webpack之magic-comments.html",
    "revision": "d8d0f897f93ab378fe331b99f4647d9c"
  },
  {
    "url": "前端脚手架/webpack/webpack之runtime与manifest.html",
    "revision": "36f972b1e5cb18b0348d7a36cd2d0e7d"
  },
  {
    "url": "前端脚手架/webpack/webpack之处理commonjs.html",
    "revision": "eb8ad86d54926aa1c3cea974f76a87d4"
  },
  {
    "url": "前端脚手架/webpack/webpack之处理esmodule.html",
    "revision": "820c87068a5c159925f904968abd59c1"
  },
  {
    "url": "前端脚手架/webpack/webpack之模块路径解析规则.html",
    "revision": "64a548f7898e2958b005eae4a2b17d94"
  },
  {
    "url": "前端脚手架/webpack/模块方法之requireContext.html",
    "revision": "ba6f9b83d2bf03feebc469d9fcbf27e6"
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
