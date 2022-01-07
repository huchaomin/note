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
    "revision": "360f33237ed2d498d40b81f9d1dfd44b"
  },
  {
    "url": "assets/css/0.styles.5e3bb2c6.css",
    "revision": "e5c791808270f241560ba15ab169af73"
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
    "url": "assets/js/13.bb7bf6ba.js",
    "revision": "d77171d2a7e2892e9d02ff87380b8cfe"
  },
  {
    "url": "assets/js/14.e6732790.js",
    "revision": "628448ac33f5449e8a05daca78385145"
  },
  {
    "url": "assets/js/15.3ad72fa2.js",
    "revision": "00c5a3332595f2ee01402042f6dd35c3"
  },
  {
    "url": "assets/js/16.d5a3f8dd.js",
    "revision": "1cccfafd4d3ac999d69c746ee77cfa37"
  },
  {
    "url": "assets/js/17.b9bd4745.js",
    "revision": "56fae6864b5bdf979ab347b31da52df6"
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
    "url": "assets/js/2.48e0759d.js",
    "revision": "779b4620bcd592537d3de911939f973d"
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
    "url": "assets/js/22.45794e25.js",
    "revision": "faa3052cd791f1dd26d99c5008744876"
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
    "url": "assets/js/25.769a5b92.js",
    "revision": "7065103c2e96b4984afb03b5a19d2fa3"
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
    "url": "assets/js/29.37739010.js",
    "revision": "a615f3a42432622764734b74964a231e"
  },
  {
    "url": "assets/js/3.fc2efeae.js",
    "revision": "e49b792fa846270fe91290112055bce3"
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
    "url": "assets/js/35.d6023056.js",
    "revision": "5887781b6eaad8ba07914ecd4dd5787c"
  },
  {
    "url": "assets/js/36.bc236f44.js",
    "revision": "e7b6a05eccf7593bad0d73778b937799"
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
    "url": "assets/js/4.9d7559e3.js",
    "revision": "be931d0cb35f5f880b0c667f8cf71fad"
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
    "url": "assets/js/5.5b871641.js",
    "revision": "047ae0c32db9c76d5cd1276aaf8b2483"
  },
  {
    "url": "assets/js/50.0dd3b5b1.js",
    "revision": "6eefdcd500e57baabe6d6f81405ca7f0"
  },
  {
    "url": "assets/js/51.49272ae3.js",
    "revision": "b4e53fd1b1ab1e70251e252bf0ee19c5"
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
    "url": "assets/js/9.023b60ea.js",
    "revision": "755e79f99b05e1fa53614c9dc85ce116"
  },
  {
    "url": "assets/js/app.248d9096.js",
    "revision": "726f38629e2c7a0a598c39b60dc0f646"
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
    "revision": "671a0d4dcfa312181f95f85ae8e5d285"
  },
  {
    "url": "css/reset.html",
    "revision": "456f470ab7ec64c91e4bdedb434d646e"
  },
  {
    "url": "css/scrollBar.html",
    "revision": "1c406ccd86aaecc1a1178431943e6f79"
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
    "revision": "b44ce6c12bf46cfb76b2f877a2151cba"
  },
  {
    "url": "javascript/bom/Navigator.sendBeacon.html",
    "revision": "2068b4203ae50f7e35273c1ec5f50a60"
  },
  {
    "url": "javascript/bom/sessionStorage.html",
    "revision": "165e6e2a667b513ce6886804428bb9d5"
  },
  {
    "url": "javascript/dom/api-drag.html",
    "revision": "6ab9bd08214c233ec70bbcc2b7256d70"
  },
  {
    "url": "javascript/dom/defer与async.html",
    "revision": "889dda9721fc638d1d85e63c34701dec"
  },
  {
    "url": "javascript/dom/preload与prefetch.html",
    "revision": "5c0399268f1d54119a7a0abe78580407"
  },
  {
    "url": "javascript/ESM与现代浏览器.html",
    "revision": "3efe1e1878fe13c8b42ff6cb8848803a"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "6619184b2fd63e0e8209148678251436"
  },
  {
    "url": "tools/browserslist.html",
    "revision": "3e26c7e94d0038b1267dd7300a2c0414"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "28b3a79b45f928c0635bb4519c69b7f7"
  },
  {
    "url": "tools/env.html",
    "revision": "20fd6faaef1dbdc71f0be3900093ad97"
  },
  {
    "url": "tools/eslint.html",
    "revision": "1296b85e046a58f52c35f81b8fc1d157"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "66b6c0f8c34df166e1a66fbec7d65196"
  },
  {
    "url": "tools/vuepress.html",
    "revision": "1202525acdb38e79716e7912721fb044"
  },
  {
    "url": "前端脚手架/umd模块打包方法.html",
    "revision": "88ff1961074f224ba1350ee22bc11329"
  },
  {
    "url": "前端脚手架/vue-cli/01-基本配置.html",
    "revision": "57dc43d41e5ac45553cd739afe189048"
  },
  {
    "url": "前端脚手架/vue-cli/02-loader.html",
    "revision": "d85a8809796fe4821717561cab08ca20"
  },
  {
    "url": "前端脚手架/vue-cli/03-plugin.html",
    "revision": "1849f222a4076cf8b3cfd03977ccb651"
  },
  {
    "url": "前端脚手架/vue-cli/loader之image-webpack-loader.html",
    "revision": "89a677eca576899904728eb7e4fe7b72"
  },
  {
    "url": "前端脚手架/vue-cli/others.html",
    "revision": "1f6693b9ae9dbac150814d91a2ca57df"
  },
  {
    "url": "前端脚手架/vue-cli/webpack-chain.html",
    "revision": "94294a40bfde284a36921a05aebb3e78"
  },
  {
    "url": "前端脚手架/vue-cli/新增webpack配置.html",
    "revision": "8b08af17055c104153902d74f7809da6"
  },
  {
    "url": "前端脚手架/vue-cli/查看webpack配置.html",
    "revision": "d7e99b19a1945e7d22fc091bdda82ed4"
  },
  {
    "url": "前端脚手架/vue-cli/配置sass.html",
    "revision": "982cf7d22a0e2e99499873002e89829a"
  },
  {
    "url": "前端脚手架/vue-cli/配置svg.html",
    "revision": "219393c3f24777c544c0d21bfbb4e5fd"
  },
  {
    "url": "前端脚手架/webpack/01-entry.html",
    "revision": "8d7842e26506b43656b474449418f28f"
  },
  {
    "url": "前端脚手架/webpack/02-output.html",
    "revision": "d898a903a11a596e1271330938d695fd"
  },
  {
    "url": "前端脚手架/webpack/03-plugin.html",
    "revision": "250da0af7cc28ebf5ef7911ce86a4037"
  },
  {
    "url": "前端脚手架/webpack/04-module.html",
    "revision": "77f7da7279c002ef92dbeb5908f045be"
  },
  {
    "url": "前端脚手架/webpack/05-resolve.html",
    "revision": "b2fe3675c0dff36cac1e36b8f4404745"
  },
  {
    "url": "前端脚手架/webpack/06-optimization/others.html",
    "revision": "9fb8906c4fb96a63b5d4a89eb9bd0a98"
  },
  {
    "url": "前端脚手架/webpack/06-optimization/splitChunks.html",
    "revision": "dd34fdcb316ba6e1597f7e5d37789987"
  },
  {
    "url": "前端脚手架/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "8e44b84db79a431ea933531e6af5b345"
  },
  {
    "url": "前端脚手架/webpack/others.html",
    "revision": "5707d016a6f20d5ef2853bcb408d8487"
  },
  {
    "url": "前端脚手架/webpack/webpack之devtool .html",
    "revision": "91498e0bd6e7620b1a23a8700a20e181"
  },
  {
    "url": "前端脚手架/webpack/webpack之hash.html",
    "revision": "5400ff1c8c89ad2cda20eb679833469b"
  },
  {
    "url": "前端脚手架/webpack/webpack之magic-comments.html",
    "revision": "e89757c22bb0f8d3130f3fc8466b285a"
  },
  {
    "url": "前端脚手架/webpack/webpack之runtime与manifest.html",
    "revision": "afe565c27c58e8a8b5e101f09d781966"
  },
  {
    "url": "前端脚手架/webpack/webpack之处理commonjs.html",
    "revision": "4d5f58866bd3d39d7ad58bed552bb416"
  },
  {
    "url": "前端脚手架/webpack/webpack之处理esmodule.html",
    "revision": "b0f5da47e397c5aa009f4e53f2939e68"
  },
  {
    "url": "前端脚手架/webpack/webpack之模块路径解析规则.html",
    "revision": "545e6a16aee74fc0a68c87d3bb777823"
  },
  {
    "url": "前端脚手架/webpack/模块方法之requireContext.html",
    "revision": "90e11ae4df32f88a532152fc2262fa97"
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
