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
    "revision": "e54cdfecd62f4bb3cf0762ed56722d31"
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
    "url": "assets/js/12.b02e649f.js",
    "revision": "e678d0cb9fa820dc54b98dee4de76c88"
  },
  {
    "url": "assets/js/13.d2a347e9.js",
    "revision": "ec7619e29e5228e07c4e082164f80814"
  },
  {
    "url": "assets/js/14.5b7cb441.js",
    "revision": "8ce5cf49727dad5e654c08b6ae91cfac"
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
    "url": "assets/js/18.2e159b28.js",
    "revision": "f46ed2fde1bb0311e7d0a389ed5d3978"
  },
  {
    "url": "assets/js/19.ed1debbf.js",
    "revision": "daf9ddc708356cba03bd2a2326d2cc08"
  },
  {
    "url": "assets/js/2.80b0109d.js",
    "revision": "cf535c0d24e344ba78d6bb16a4d8e861"
  },
  {
    "url": "assets/js/20.efb63462.js",
    "revision": "46857067a309ae6754b337d81a247223"
  },
  {
    "url": "assets/js/21.598bd6eb.js",
    "revision": "0e672cd64c7fccc115a4c68688bd04a1"
  },
  {
    "url": "assets/js/22.ae110b8c.js",
    "revision": "481aefe254c2e2d385fe7fd25501e03e"
  },
  {
    "url": "assets/js/23.6b9ce290.js",
    "revision": "384fafd67cdf225b451bdd23cd25783f"
  },
  {
    "url": "assets/js/24.ea9ec8be.js",
    "revision": "be2edb37fec9b411f276036bc6181cda"
  },
  {
    "url": "assets/js/25.d9f82d57.js",
    "revision": "08d7852383af402bdfbe614ea99f1681"
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
    "url": "assets/js/28.face0a18.js",
    "revision": "76a7f399a26ea5c358346ead9575b1ef"
  },
  {
    "url": "assets/js/29.e6255890.js",
    "revision": "776d46a1f54257f60983828e37eb67ea"
  },
  {
    "url": "assets/js/3.fc2efeae.js",
    "revision": "e49b792fa846270fe91290112055bce3"
  },
  {
    "url": "assets/js/30.5968d9d2.js",
    "revision": "e8db5ff5d2a5aa86c8c7b81643ce1c36"
  },
  {
    "url": "assets/js/31.47d0271d.js",
    "revision": "0260b9b7e3ab2e13fa2e2575436f6e4b"
  },
  {
    "url": "assets/js/32.58a314fa.js",
    "revision": "4d9caec0dcbc7ec7494c471b1b9750c9"
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
    "url": "assets/js/43.299690db.js",
    "revision": "75d5b8e6009e50164460d4f5aa003c61"
  },
  {
    "url": "assets/js/44.df0d6fd5.js",
    "revision": "d11a9e709a51491731947ea817e6ec7c"
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
    "url": "assets/js/48.697d2f0f.js",
    "revision": "23f862c0935ace106fbd1e593d7b5abd"
  },
  {
    "url": "assets/js/49.6c76cf83.js",
    "revision": "607b8e19c53f07f1277f781d0e34c87c"
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
    "url": "assets/js/51.96bb4bf3.js",
    "revision": "cf722511b4a712867984acd4962a2b20"
  },
  {
    "url": "assets/js/52.f7fd2a99.js",
    "revision": "f4f24858238a2c1511cd5d0ddf23f429"
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
    "url": "assets/js/8.61dc3a77.js",
    "revision": "409ecf9b8bedf4b7c25d64c6233cce1c"
  },
  {
    "url": "assets/js/9.023b60ea.js",
    "revision": "755e79f99b05e1fa53614c9dc85ce116"
  },
  {
    "url": "assets/js/app.02b6a761.js",
    "revision": "4b5de10138258063b346bb72824392d0"
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
    "revision": "d66e2e9abc84d3fbc844bc350070faf9"
  },
  {
    "url": "css/reset.html",
    "revision": "1666f8e63046c5fbc3a50a089b8ce6cb"
  },
  {
    "url": "css/scrollBar.html",
    "revision": "5907efdb73169b0fb0acfbd46ce67bdf"
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
    "revision": "458eb1077d093096ce02289554f59382"
  },
  {
    "url": "javascript/bom/Navigator.sendBeacon.html",
    "revision": "efbce7083c752fc705aa90aceeeaebd0"
  },
  {
    "url": "javascript/bom/sessionStorage.html",
    "revision": "bcd74290eee62655c40e75c902e010b5"
  },
  {
    "url": "javascript/dom/api-drag.html",
    "revision": "ddb3e4ce8b2a3640baf55805555c0436"
  },
  {
    "url": "javascript/dom/defer与async.html",
    "revision": "0088524e044fb9f4ab1168a5b5e1483b"
  },
  {
    "url": "javascript/dom/preload与prefetch.html",
    "revision": "ce2b2da8570efd9833e32e629b2a8f1b"
  },
  {
    "url": "javascript/ESM与现代浏览器.html",
    "revision": "198f02f44e48946b98f8c16907c0f08a"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "b7a94a295783edde80ce738c9ef4bb27"
  },
  {
    "url": "tools/browserslist.html",
    "revision": "eb401de79f1b724545bd6292be531ef3"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "1351f7cea85c45f9a509249ab31092d1"
  },
  {
    "url": "tools/env.html",
    "revision": "7c24f4f09376eb0cf47c214eb9f3f398"
  },
  {
    "url": "tools/eslint.html",
    "revision": "7de53dce5834cb5ad8116b000361c3b1"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "4bc01cb621c4d481148ce3a073c0a993"
  },
  {
    "url": "tools/vuepress.html",
    "revision": "a5177a9b63f4bd7866dcf38e6f5b9062"
  },
  {
    "url": "前端脚手架/umd模块打包方法.html",
    "revision": "ffe708decf854320ea3a35af80ae4261"
  },
  {
    "url": "前端脚手架/vue-cli/01-基本配置.html",
    "revision": "8217d56868ee21fc8d2daa6b14c1d612"
  },
  {
    "url": "前端脚手架/vue-cli/02-loader.html",
    "revision": "4ce1a8530e186808f706159dfd2e778e"
  },
  {
    "url": "前端脚手架/vue-cli/03-plugin.html",
    "revision": "09e20bbdd0d82fec24ea4390ed2ac199"
  },
  {
    "url": "前端脚手架/vue-cli/loader之image-webpack-loader.html",
    "revision": "430da5047476727d588023699e773fcb"
  },
  {
    "url": "前端脚手架/vue-cli/others.html",
    "revision": "c6807eec50d05addd0ed3dd1535666a8"
  },
  {
    "url": "前端脚手架/vue-cli/webpack-chain.html",
    "revision": "0344fd01fe2e311d34c8a25c4581ef37"
  },
  {
    "url": "前端脚手架/vue-cli/新增webpack配置.html",
    "revision": "af44fd2ee76dc8d1a0e049c907f34722"
  },
  {
    "url": "前端脚手架/vue-cli/查看webpack配置.html",
    "revision": "981d9756f3c88c62e4eed477bf646cc6"
  },
  {
    "url": "前端脚手架/vue-cli/配置sass.html",
    "revision": "184f9d455e6055c70ae49fa9a37b766d"
  },
  {
    "url": "前端脚手架/vue-cli/配置svg.html",
    "revision": "8673de85140bcdcaaa4d737b5a397cda"
  },
  {
    "url": "前端脚手架/webpack/01-entry.html",
    "revision": "35e78ed9609bdbcfb85c916f5c069c23"
  },
  {
    "url": "前端脚手架/webpack/02-output.html",
    "revision": "d33542ca224efed5227b9f9397b27e43"
  },
  {
    "url": "前端脚手架/webpack/03-plugin.html",
    "revision": "6fde1ef5d94c4677c176b036686bfd99"
  },
  {
    "url": "前端脚手架/webpack/04-module.html",
    "revision": "f9583146fb439337834c466953cbee87"
  },
  {
    "url": "前端脚手架/webpack/05-resolve.html",
    "revision": "51aee47eed1ebf7fee1f30f0742d3b69"
  },
  {
    "url": "前端脚手架/webpack/06-optimization/others.html",
    "revision": "dfdf48894914ccd02fad6a318ead26af"
  },
  {
    "url": "前端脚手架/webpack/06-optimization/splitChunks.html",
    "revision": "ad8d888f4f8ddb76f13aa5f174336376"
  },
  {
    "url": "前端脚手架/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "12b03430fb2add6fd59531ec730ee9df"
  },
  {
    "url": "前端脚手架/webpack/others.html",
    "revision": "697bcc86b00757824bf6d7105335042e"
  },
  {
    "url": "前端脚手架/webpack/webpack之devtool .html",
    "revision": "f27f3c33e69cf526a89c626bbf3c60b3"
  },
  {
    "url": "前端脚手架/webpack/webpack之hash.html",
    "revision": "66d5115aea65a0f137406d001bc04d9a"
  },
  {
    "url": "前端脚手架/webpack/webpack之magic-comments.html",
    "revision": "6e06be04d56edbebfae2072e3b52101a"
  },
  {
    "url": "前端脚手架/webpack/webpack之runtime与manifest.html",
    "revision": "97e3d8beb8d7cf76e090469137748f8b"
  },
  {
    "url": "前端脚手架/webpack/webpack之处理commonjs.html",
    "revision": "ab51d66fa0b336e7e81fe256d289efcc"
  },
  {
    "url": "前端脚手架/webpack/webpack之处理esmodule.html",
    "revision": "2dad466fff13b45304308c1ec1ac7944"
  },
  {
    "url": "前端脚手架/webpack/webpack之模块路径解析规则.html",
    "revision": "dd7d8d2c384b031382946c3c95bc7d7d"
  },
  {
    "url": "前端脚手架/webpack/模块方法之requireContext.html",
    "revision": "ebaf4f708a3f674a95f5850d61282ae1"
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
