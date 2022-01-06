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
    "revision": "c8d55241aa8a5f47afad927c2807748d"
  },
  {
    "url": "assets/css/1.styles.db258efe.css",
    "revision": "9226a73b657e17e3d136e992ff6eee4e"
  },
  {
    "url": "assets/css/2.styles.52de3b56.css",
    "revision": "e16549df4ad0bb59dcba75b640ed8db9"
  },
  {
    "url": "assets/css/4.styles.19a6906f.css",
    "revision": "41856c4745dee9bec4a5fdedff62c832"
  },
  {
    "url": "assets/css/5.styles.8347f709.css",
    "revision": "41856c4745dee9bec4a5fdedff62c832"
  },
  {
    "url": "assets/css/6.styles.4ced39b1.css",
    "revision": "4dfd954af9da41878ca5b77c1ec7d6f2"
  },
  {
    "url": "assets/css/styles.720749b7.css",
    "revision": "995deb3a7295f6f87d0248ffe4a2e478"
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
    "url": "assets/js/10.7120e809.js",
    "revision": "5af46807958201670f29e707d4791e60"
  },
  {
    "url": "assets/js/11.75b0596b.js",
    "revision": "a9a3894529faf4d72838ef403a2e6466"
  },
  {
    "url": "assets/js/12.7907e2b6.js",
    "revision": "bbae1f0ac5d190e974e29bfd948cc545"
  },
  {
    "url": "assets/js/13.709b23ee.js",
    "revision": "87714e8f408312923961051bb52b2562"
  },
  {
    "url": "assets/js/14.af50b64b.js",
    "revision": "1db8f82a95e6a2376aa2aa173f5ad8b2"
  },
  {
    "url": "assets/js/15.f546d319.js",
    "revision": "9641045f4f7ccce0ddf4839dca174797"
  },
  {
    "url": "assets/js/16.af478190.js",
    "revision": "322d10085ca9942c4fcd3426c43b545c"
  },
  {
    "url": "assets/js/17.c3b0bb2b.js",
    "revision": "7b29cfe5cc8ba149bd5ffe008a7abf09"
  },
  {
    "url": "assets/js/18.47a652fb.js",
    "revision": "d53dc4c6fed530739fffaa555edf74b7"
  },
  {
    "url": "assets/js/19.433a46bc.js",
    "revision": "2d3d09a43a97ef82bc25598181730ec3"
  },
  {
    "url": "assets/js/2.52de3b56.js",
    "revision": "d2a077dd557010b29c6d8bddae01bded"
  },
  {
    "url": "assets/js/20.cbf04415.js",
    "revision": "dcc32776d3ecb5390cfecb7fdb3d947e"
  },
  {
    "url": "assets/js/21.943820df.js",
    "revision": "a60cad24d67a81b57259f0b63f6032b7"
  },
  {
    "url": "assets/js/22.db820b51.js",
    "revision": "f74748162e54e0ed15141a939076bde8"
  },
  {
    "url": "assets/js/23.e749d3f8.js",
    "revision": "2ed2a83b203a4880bc7b12757607ef87"
  },
  {
    "url": "assets/js/24.4d4a6375.js",
    "revision": "5f4560105495a80d92a37c19396cf81e"
  },
  {
    "url": "assets/js/25.6a0923b6.js",
    "revision": "288970c1c9db60128e979306ed85af9d"
  },
  {
    "url": "assets/js/26.cccd2a62.js",
    "revision": "3d5017f16931a05c6570f57097f37805"
  },
  {
    "url": "assets/js/27.8498a2fc.js",
    "revision": "4e158f71a5cc91d80f8b6c0354528810"
  },
  {
    "url": "assets/js/28.ffb41c49.js",
    "revision": "86befd8a23228e3574e130cb829b77f2"
  },
  {
    "url": "assets/js/29.46b8df8d.js",
    "revision": "3ecff614c4b50e983991c383be26815b"
  },
  {
    "url": "assets/js/3.59db4218.js",
    "revision": "4e6eb283fffcc2f61b51896b05a3cff0"
  },
  {
    "url": "assets/js/30.6a29ba42.js",
    "revision": "2e21b9d6da65f9fa8c04568dcbbcd841"
  },
  {
    "url": "assets/js/31.fe6c3fcb.js",
    "revision": "ef8ad24d8f7f0a87159d940a14f3f5f7"
  },
  {
    "url": "assets/js/32.5e01dda2.js",
    "revision": "36592c0ff15617b0263b8655cd4b1a17"
  },
  {
    "url": "assets/js/33.6b9c586e.js",
    "revision": "b81bef1dfb55318d1450e23ecf5d739d"
  },
  {
    "url": "assets/js/34.d37b1248.js",
    "revision": "221a0263790128fd314031f2cede7337"
  },
  {
    "url": "assets/js/35.6cd990cd.js",
    "revision": "ac6ee6e37bbe38fd467aac4e1b4ade49"
  },
  {
    "url": "assets/js/36.312f565b.js",
    "revision": "13b0d16f9b6c5346934100d6e13e8f01"
  },
  {
    "url": "assets/js/37.1b81c00f.js",
    "revision": "bacac4ebc188b5463f921ace1a3835e0"
  },
  {
    "url": "assets/js/38.27e3b30f.js",
    "revision": "2fb2ba1ed9a6fc9c2824e030d9b4fd43"
  },
  {
    "url": "assets/js/39.5b26b0fa.js",
    "revision": "d8c185f539463f4c6d77aa9f530c0241"
  },
  {
    "url": "assets/js/4.19a6906f.js",
    "revision": "457fb9fa21f06b7b2112ec0a225162e3"
  },
  {
    "url": "assets/js/40.cbfa91cc.js",
    "revision": "e4b4772cf3e45815cc8499bfadb50e82"
  },
  {
    "url": "assets/js/41.e5d8fb16.js",
    "revision": "96ec2800ccd40340cc369f54850140cf"
  },
  {
    "url": "assets/js/42.3b904f50.js",
    "revision": "d6e063c79a0240a7e80759344db8ae89"
  },
  {
    "url": "assets/js/43.a9b1c94a.js",
    "revision": "b162e9c5b245f3aad5e1e4052eb553a4"
  },
  {
    "url": "assets/js/44.19f58e18.js",
    "revision": "35dfcb4bb5eeb9883269d8e87834a7b7"
  },
  {
    "url": "assets/js/45.e18233e5.js",
    "revision": "6908d09004d31c366816dc18527b5013"
  },
  {
    "url": "assets/js/46.11e8bf4b.js",
    "revision": "7aab172ac30a78e1dab9ab8b94aa3d37"
  },
  {
    "url": "assets/js/47.d049dc45.js",
    "revision": "d0817c6789981db4fd298fa42e339d18"
  },
  {
    "url": "assets/js/5.8347f709.js",
    "revision": "6c56fda788a3420f83edeb2ae2b1d73a"
  },
  {
    "url": "assets/js/6.4ced39b1.js",
    "revision": "0fb2a52debe5c856c4b8cd35479ab199"
  },
  {
    "url": "assets/js/7.147de702.js",
    "revision": "10f6b7a38215851a4c0288c69450d243"
  },
  {
    "url": "assets/js/8.2fff19d0.js",
    "revision": "2d7a4d32edf81acef2c02b92939f755d"
  },
  {
    "url": "assets/js/9.b37a34b1.js",
    "revision": "36f1a372365f35dedcb68063c740b8c3"
  },
  {
    "url": "assets/js/app.720749b7.js",
    "revision": "23835f3150ed5556b64e86563968a909"
  },
  {
    "url": "assets/js/chunk-vendors.db258efe.js",
    "revision": "ec8d7119fbd25aa14830ea2b0279bc38"
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
    "revision": "3181fdeaf2e2aafd46a7dddcbf4a8769"
  },
  {
    "url": "html/preload与prefetch.html",
    "revision": "be6023976cae2e13e3475d137c219b45"
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
    "revision": "98938ddcfd77d48585378f00ab302028"
  },
  {
    "url": "javascript/es6/ESM与现代浏览器.html",
    "revision": "d52f0ebb32e45e2943ed0054ccf1e5d0"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "030426849b76164e9c1baacdad50f1f9"
  },
  {
    "url": "tools/browserslist.html",
    "revision": "f7a465f042b7a28c50c473e1bb9fe396"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "a22d1cc621329dad7ba8a17065f34375"
  },
  {
    "url": "tools/env.html",
    "revision": "33757e1dd56236e54da97fbba0ddba6e"
  },
  {
    "url": "tools/eslintrc.js.html",
    "revision": "dfd08121da388c1bbceb2a7547d1a07b"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "692eb2fb2bcb548c6d521c827b811758"
  },
  {
    "url": "tools/vuepress.html",
    "revision": "d8cfa37a85219261b9a3541166c9ce88"
  },
  {
    "url": "前端脚手架/vue-cli/01-基本配置.html",
    "revision": "af667c6f62cd882dfcc0710d0281d864"
  },
  {
    "url": "前端脚手架/vue-cli/02-loader.html",
    "revision": "6f56e19e629b94a5d579bd71ad9045c2"
  },
  {
    "url": "前端脚手架/vue-cli/03-plugin.html",
    "revision": "936411fa3dde1de73b232cc9dad7f68f"
  },
  {
    "url": "前端脚手架/vue-cli/loader之image-webpack-loader.html",
    "revision": "8188ba83dc9072589a9f49af0681847c"
  },
  {
    "url": "前端脚手架/vue-cli/others.html",
    "revision": "64b6a16a54f15de5bf2f299548fe99ab"
  },
  {
    "url": "前端脚手架/vue-cli/webpack-chain.html",
    "revision": "3f096bae20ea66ac2e3c8af2119193c0"
  },
  {
    "url": "前端脚手架/vue-cli/新增webpack配置.html",
    "revision": "bf18bbe1419d2ec97820d1b8ab8de513"
  },
  {
    "url": "前端脚手架/vue-cli/查看webpack配置.html",
    "revision": "d3111c744a8a7e4e2256a94a596f48aa"
  },
  {
    "url": "前端脚手架/vue-cli/配置sass.html",
    "revision": "2d7ce75104c661ee48fa8747aeb609d5"
  },
  {
    "url": "前端脚手架/vue-cli/配置svg.html",
    "revision": "36f98e3543e346cdd1122db29068c7dd"
  },
  {
    "url": "前端脚手架/webpack/01-entry.html",
    "revision": "8fd87d0a7cd8bb9c322f4b30f64b5365"
  },
  {
    "url": "前端脚手架/webpack/02-output.html",
    "revision": "d07ef8011e51c1dae3527ae09f499877"
  },
  {
    "url": "前端脚手架/webpack/03-plugin.html",
    "revision": "6e638f351ebd368b30e570a18ef6ec43"
  },
  {
    "url": "前端脚手架/webpack/04-module.html",
    "revision": "7c119a25d23f5d4a8a016a60d6e9460e"
  },
  {
    "url": "前端脚手架/webpack/05-resolve.html",
    "revision": "a26a241052a68c7a221baa96987200fd"
  },
  {
    "url": "前端脚手架/webpack/06-optimization/others.html",
    "revision": "f32c39f2c459ff87160042786703dc7f"
  },
  {
    "url": "前端脚手架/webpack/06-optimization/splitChunks.html",
    "revision": "b745c0760c66938ba6eca790b6c0dca0"
  },
  {
    "url": "前端脚手架/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "7692674a9896fe874286e88daa33b028"
  },
  {
    "url": "前端脚手架/webpack/others.html",
    "revision": "8836ae4559b117e11cb2bf5869b2302e"
  },
  {
    "url": "前端脚手架/webpack/webpack之devtool .html",
    "revision": "abdd378f6d04811c360c8fd4ff862299"
  },
  {
    "url": "前端脚手架/webpack/webpack之hash.html",
    "revision": "01ffbeae88d53f8b221142a8f52849f8"
  },
  {
    "url": "前端脚手架/webpack/webpack之magic-comments.html",
    "revision": "98329220d531f78731b6674f60518c90"
  },
  {
    "url": "前端脚手架/webpack/webpack之runtime与manifest.html",
    "revision": "66d0e5c40b4a10420a56ab72319f9511"
  },
  {
    "url": "前端脚手架/webpack/webpack之处理commonjs.html",
    "revision": "e5118950bddf6a12c88f58f4f41a854c"
  },
  {
    "url": "前端脚手架/webpack/webpack之处理esmodule.html",
    "revision": "023ad58d076d8b97c358b9757b34b11d"
  },
  {
    "url": "前端脚手架/webpack/webpack之模块路径解析规则.html",
    "revision": "0688138c461b5a9cdc15810d23cdd2fb"
  },
  {
    "url": "前端脚手架/webpack/模块方法之requireContext.html",
    "revision": "bee7fdd6501f071a215dd540f55f55e6"
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
