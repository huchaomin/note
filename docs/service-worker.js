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
    "revision": "c30898a34ca2a5218d76ae5cb5b916e0"
  },
  {
    "url": "assets/css/0.styles.222f9ae2.css",
    "revision": "cd065e0af54371e0facd7b3eb3e64112"
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
    "url": "assets/js/14.3d4767a4.js",
    "revision": "7ab2229c3881715b5239f14ba27c1678"
  },
  {
    "url": "assets/js/15.77d98c96.js",
    "revision": "3f6049db263d2385a767920ae66c9243"
  },
  {
    "url": "assets/js/16.88043926.js",
    "revision": "c7db07cbb418eca4da0b521afff7820d"
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
    "url": "assets/js/2.95029f50.js",
    "revision": "92e80f591aedf6e365fe22392203e974"
  },
  {
    "url": "assets/js/20.d18490c8.js",
    "revision": "2bc3f3b22671651dc37f8f5dd8b58fb8"
  },
  {
    "url": "assets/js/21.a00b25ef.js",
    "revision": "4d6c3101c6761b69491f0e9dda2592b5"
  },
  {
    "url": "assets/js/22.a35a3951.js",
    "revision": "e62ee5993f409c3bd93ec92ac1a0eb9c"
  },
  {
    "url": "assets/js/23.4da02e14.js",
    "revision": "4646b3eea5f177b804dd0769af3e3829"
  },
  {
    "url": "assets/js/24.63b5d59c.js",
    "revision": "35d0df0c86429c2199cc266d3734871c"
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
    "url": "assets/js/27.f83105c9.js",
    "revision": "a0caa3d22e128b09fcd4f0f8ee2ca0dd"
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
    "url": "assets/js/3.aa9041c4.js",
    "revision": "25ab8c71a02e61aaf2382439d883913e"
  },
  {
    "url": "assets/js/30.2ac398b0.js",
    "revision": "6647fa4f5570fe25ec18449995a9ea59"
  },
  {
    "url": "assets/js/31.d2e7075b.js",
    "revision": "6f1abc7e180a5ff372283fdf269e18c1"
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
    "url": "assets/js/34.7013076c.js",
    "revision": "f8286a62b90770682583d5ff2f7a821e"
  },
  {
    "url": "assets/js/35.32db0d4c.js",
    "revision": "101a10d2e69359450b50e0ca813b00e6"
  },
  {
    "url": "assets/js/36.25d82b4e.js",
    "revision": "a5e02dcfc792c42cde932c3cfb72da83"
  },
  {
    "url": "assets/js/37.a453a073.js",
    "revision": "8f53ee5f4e0294b04de41851220aa5d8"
  },
  {
    "url": "assets/js/38.274072f7.js",
    "revision": "0189ec7379dab60a5e3e9612a26e374f"
  },
  {
    "url": "assets/js/39.4bc967ef.js",
    "revision": "9dc3adbbc164eb8e6b27885ab8d6ba33"
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
    "url": "assets/js/46.cb802fe5.js",
    "revision": "6c36dcafd30f01670723313cf91d7ece"
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
    "url": "assets/js/50.69d483c4.js",
    "revision": "7ec1dc12437f58c80575e71692ff82bf"
  },
  {
    "url": "assets/js/51.49272ae3.js",
    "revision": "b4e53fd1b1ab1e70251e252bf0ee19c5"
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
    "url": "assets/js/9.4d23d30b.js",
    "revision": "9e65f7a6058fcef2c73db8927020d85e"
  },
  {
    "url": "assets/js/app.addd5ca9.js",
    "revision": "6f70cbf4715ffa1c4d9956b23a936658"
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
    "revision": "600fef70c228c785f08b44e8bf0e0bdd"
  },
  {
    "url": "css/reset.html",
    "revision": "c4c6e6363d9ecc2a506a1f8df11bdcdf"
  },
  {
    "url": "css/scrollBar.html",
    "revision": "95e1dc328c721acc0e616b611578d208"
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
    "revision": "5baf3d2694980119978e7d9a27f0f0df"
  },
  {
    "url": "javascript/bom/Navigator.sendBeacon.html",
    "revision": "951767282107420b52164c6191c8d725"
  },
  {
    "url": "javascript/bom/sessionStorage.html",
    "revision": "50d27acd7ac1e513c1d9bb1e0db39407"
  },
  {
    "url": "javascript/dom/api-drag.html",
    "revision": "c9dece79f30c73af3889a1ba6c8b01cc"
  },
  {
    "url": "javascript/dom/defer与async.html",
    "revision": "b9b2ebfe50daa99e90e414eaa0ea32f3"
  },
  {
    "url": "javascript/dom/preload与prefetch.html",
    "revision": "368e81e35aed5a5e1dea00d129871a8b"
  },
  {
    "url": "javascript/ESM与现代浏览器.html",
    "revision": "177116c41dbda3ee32621bf5bb7ac4bf"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "3db2d21c4e8248d0b736d1c8751620f0"
  },
  {
    "url": "tools/browserslist.html",
    "revision": "69af835a3262f8ea554def44fa59afd5"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "fcc54daa79213f07bebe95ea3d84c00d"
  },
  {
    "url": "tools/env.html",
    "revision": "389ff0f391053d16debe377199138059"
  },
  {
    "url": "tools/eslintrc.js.html",
    "revision": "d786c0c40d6b8903f6ed4a1e85e848a2"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "25a758411d7a3b184a5faadd5dc3b211"
  },
  {
    "url": "tools/vuepress.html",
    "revision": "fee3946aad01a071b8856dbe8dcba143"
  },
  {
    "url": "前端脚手架/umd模块打包方法.html",
    "revision": "1d25058ab856da4005db7abebb2e6215"
  },
  {
    "url": "前端脚手架/vue-cli/01-基本配置.html",
    "revision": "9e1e7d18356eb002cb9b95ad94ce6b40"
  },
  {
    "url": "前端脚手架/vue-cli/02-loader.html",
    "revision": "f22c4c1633a0c6f71494c517c1e3d0d5"
  },
  {
    "url": "前端脚手架/vue-cli/03-plugin.html",
    "revision": "ac95f164dfc21ac944e4cfc3efd80124"
  },
  {
    "url": "前端脚手架/vue-cli/loader之image-webpack-loader.html",
    "revision": "4e286afcce3f503b502dc01054bb7228"
  },
  {
    "url": "前端脚手架/vue-cli/others.html",
    "revision": "dc499a0e7599616c84cdbf618cd6e958"
  },
  {
    "url": "前端脚手架/vue-cli/webpack-chain.html",
    "revision": "9002dde2595eaa9eb9d91144d2d8abfc"
  },
  {
    "url": "前端脚手架/vue-cli/新增webpack配置.html",
    "revision": "eba80903e47f9da2a8d93b79cc05acc6"
  },
  {
    "url": "前端脚手架/vue-cli/查看webpack配置.html",
    "revision": "f1b84130e26ab1b0cdea5abf1d62bace"
  },
  {
    "url": "前端脚手架/vue-cli/配置sass.html",
    "revision": "f1b02b4ad1479e5898f82dee42b2e1d4"
  },
  {
    "url": "前端脚手架/vue-cli/配置svg.html",
    "revision": "21536ebb6e4fee5293832704435c32c7"
  },
  {
    "url": "前端脚手架/webpack/01-entry.html",
    "revision": "5cc52860ff9004e3f53b21a1686e4cd1"
  },
  {
    "url": "前端脚手架/webpack/02-output.html",
    "revision": "9d314d0ad0ef0c2af17519115e4e7904"
  },
  {
    "url": "前端脚手架/webpack/03-plugin.html",
    "revision": "add47b3eb9280381a718d4fdb019a375"
  },
  {
    "url": "前端脚手架/webpack/04-module.html",
    "revision": "e490e40288c4b63201f6f56ac78ba35c"
  },
  {
    "url": "前端脚手架/webpack/05-resolve.html",
    "revision": "5e46c193db7d0ae51bb921ebf612a8f7"
  },
  {
    "url": "前端脚手架/webpack/06-optimization/others.html",
    "revision": "4f26d082479fd95425cf9280f14736dd"
  },
  {
    "url": "前端脚手架/webpack/06-optimization/splitChunks.html",
    "revision": "26270a5f57895cfbdbdf1c2683acdd91"
  },
  {
    "url": "前端脚手架/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "3599853ceea03f748e60e7959d54d631"
  },
  {
    "url": "前端脚手架/webpack/others.html",
    "revision": "4ab225cc2120afa2b4b51530ab1165f7"
  },
  {
    "url": "前端脚手架/webpack/webpack之devtool .html",
    "revision": "b31f011691d08d69281531bf084f5263"
  },
  {
    "url": "前端脚手架/webpack/webpack之hash.html",
    "revision": "9f3df3b4f59f480b853ff6423274a51a"
  },
  {
    "url": "前端脚手架/webpack/webpack之magic-comments.html",
    "revision": "122c13e10585224510f105c820104776"
  },
  {
    "url": "前端脚手架/webpack/webpack之runtime与manifest.html",
    "revision": "0c8cdcde3909d8071a84dd468b6cab9a"
  },
  {
    "url": "前端脚手架/webpack/webpack之处理commonjs.html",
    "revision": "78fa98ba377641fd7f6c7f487fe4387e"
  },
  {
    "url": "前端脚手架/webpack/webpack之处理esmodule.html",
    "revision": "412f113506fc25e2cda5f088a7000ebe"
  },
  {
    "url": "前端脚手架/webpack/webpack之模块路径解析规则.html",
    "revision": "6120b9dd6d013857fd5b7ae0c97b61c9"
  },
  {
    "url": "前端脚手架/webpack/模块方法之requireContext.html",
    "revision": "7b6b6ea7b17eefe50c69a96481b3bc1b"
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
