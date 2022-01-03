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
    "revision": "ef4859252727cbc9708db3eb2edbf022"
  },
  {
    "url": "assets/css/1.styles.97231b75.css",
    "revision": "91942ccd6c95f320d630c684f499b104"
  },
  {
    "url": "assets/css/2.styles.b5c6276b.css",
    "revision": "e16549df4ad0bb59dcba75b640ed8db9"
  },
  {
    "url": "assets/css/4.styles.c5274e74.css",
    "revision": "41856c4745dee9bec4a5fdedff62c832"
  },
  {
    "url": "assets/css/5.styles.8347f709.css",
    "revision": "41856c4745dee9bec4a5fdedff62c832"
  },
  {
    "url": "assets/css/6.styles.45b29894.css",
    "revision": "4dfd954af9da41878ca5b77c1ec7d6f2"
  },
  {
    "url": "assets/css/styles.53caa6c8.css",
    "revision": "9c57594ce44b611d5decf0f0a7990a62"
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
    "url": "assets/img/me.fb408776.png",
    "revision": "fb408776b4995b76cf43892e12714d2d"
  },
  {
    "url": "assets/img/receivingQrCode.753ec20c.jpg",
    "revision": "753ec20cd6e75921958367e8f59483c6"
  },
  {
    "url": "assets/js/10.84fc0d64.js",
    "revision": "656de12c463e75ff6306f1f7584192f3"
  },
  {
    "url": "assets/js/11.0738c0b6.js",
    "revision": "a5ced037d496fc8f4706fd6a3e313a96"
  },
  {
    "url": "assets/js/12.8f92ff02.js",
    "revision": "dc65f70d2d7b13ef55b0f3dcda9f6c58"
  },
  {
    "url": "assets/js/13.3fa0cf94.js",
    "revision": "87179d19bd8631755582bfc04f71dbba"
  },
  {
    "url": "assets/js/14.ed22255d.js",
    "revision": "7e8d9672403465b7b1aa6a6724547db9"
  },
  {
    "url": "assets/js/15.57814628.js",
    "revision": "eb75a53c1c9640bfa790ad4824e17bd0"
  },
  {
    "url": "assets/js/16.6230760f.js",
    "revision": "5da941a80efe089c71f84ce9a805d6f4"
  },
  {
    "url": "assets/js/17.2e2b0e05.js",
    "revision": "5845f7fb3bfb48e01a636826200f5f25"
  },
  {
    "url": "assets/js/18.ccd78600.js",
    "revision": "6e443329d0614e98c3585f4354de2cd3"
  },
  {
    "url": "assets/js/19.e5af444a.js",
    "revision": "06df8f66c311e11ed88ddc04a1897ea7"
  },
  {
    "url": "assets/js/2.b5c6276b.js",
    "revision": "8b2b7a68cb4a8176c61ab6e87d8240ae"
  },
  {
    "url": "assets/js/20.2f273772.js",
    "revision": "de7ea805b05f344f74655ec21de36921"
  },
  {
    "url": "assets/js/21.2d97e4ed.js",
    "revision": "1138b1e7bec18b015146e2374c1d9d81"
  },
  {
    "url": "assets/js/22.43a82fbb.js",
    "revision": "3cceba6b5dbb910b8a764079214c999e"
  },
  {
    "url": "assets/js/23.c2bd982c.js",
    "revision": "3a8defe1ce2030e971e907f9d43310b3"
  },
  {
    "url": "assets/js/24.49441361.js",
    "revision": "b63749d0d74699456964591065e58cab"
  },
  {
    "url": "assets/js/25.7db0b0cb.js",
    "revision": "479ad047c64d82db2358a31c34e996e5"
  },
  {
    "url": "assets/js/26.932a18ed.js",
    "revision": "e0aa0c714f3259903b456680685cce62"
  },
  {
    "url": "assets/js/27.79df443a.js",
    "revision": "6be62fad99e8cae3dfa888c1a660a8f2"
  },
  {
    "url": "assets/js/28.d6474d93.js",
    "revision": "9877515454d9008734ffd6835f6728c9"
  },
  {
    "url": "assets/js/29.c2a4c59e.js",
    "revision": "9d1bf781dac2f5d2dea3a37ee1fc5dba"
  },
  {
    "url": "assets/js/3.11e43219.js",
    "revision": "b5bd07cc9144a7fa8951b1170204df1d"
  },
  {
    "url": "assets/js/30.a884475d.js",
    "revision": "ef2c823625aa66393c50a3f388f0fda6"
  },
  {
    "url": "assets/js/31.5e1573c3.js",
    "revision": "168a0da424662a2c75498202fa9410b1"
  },
  {
    "url": "assets/js/32.46456a2c.js",
    "revision": "13e3d5be0ddaaf3db334be00dfaaa836"
  },
  {
    "url": "assets/js/33.38ccd8ae.js",
    "revision": "4f8dfa0f44a5b97f9f95c87badce857c"
  },
  {
    "url": "assets/js/34.9856ee5b.js",
    "revision": "33a55210f52199628df3cef5f4324354"
  },
  {
    "url": "assets/js/35.82c799bf.js",
    "revision": "3dd7db5d5db5556c2b340952b6b78b9a"
  },
  {
    "url": "assets/js/36.9bd17ebd.js",
    "revision": "4931ee0f78ff1ec67732be37f1dd9e18"
  },
  {
    "url": "assets/js/37.dd1c14b1.js",
    "revision": "337198faf9cf86782dd661e7602ffc7f"
  },
  {
    "url": "assets/js/38.2c3769e9.js",
    "revision": "74678cf51059696b3a3845dc916c3972"
  },
  {
    "url": "assets/js/39.19b69e11.js",
    "revision": "26eea49f440b9314cd4fa90781de3cef"
  },
  {
    "url": "assets/js/4.c5274e74.js",
    "revision": "0b1a53e28f137b6d40abdcb077482c26"
  },
  {
    "url": "assets/js/40.804613dc.js",
    "revision": "f2626b4fff2b1cc950be9a40a55a2eab"
  },
  {
    "url": "assets/js/41.05f92b33.js",
    "revision": "eddbeff38d24a1132619b30ae3c63aae"
  },
  {
    "url": "assets/js/42.4e2131b7.js",
    "revision": "f10237645fbda9b029212d6fc8bebca0"
  },
  {
    "url": "assets/js/5.8347f709.js",
    "revision": "6c56fda788a3420f83edeb2ae2b1d73a"
  },
  {
    "url": "assets/js/6.45b29894.js",
    "revision": "300eb312dbdd34245ba45c842440d1f4"
  },
  {
    "url": "assets/js/7.3ff8bafc.js",
    "revision": "4cc6dfc574a193712918a47390c68cec"
  },
  {
    "url": "assets/js/8.2178790e.js",
    "revision": "1627fc624b64f27c6aaa03dff6488599"
  },
  {
    "url": "assets/js/9.ebf777aa.js",
    "revision": "86bad8665140dde53bae1b6b0ec5e8e4"
  },
  {
    "url": "assets/js/app.53caa6c8.js",
    "revision": "9dcf6a27dae0ffb342bebe172811c998"
  },
  {
    "url": "assets/js/chunk-vendors.97231b75.js",
    "revision": "8ec4158cd95254ba76d9fdf5c8b66f7f"
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
    "url": "html/preload与prefetch.html",
    "revision": "21b4791cb0b628eccbec6134344926b5"
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
    "revision": "268100766e1ca03e172250c3885ae190"
  },
  {
    "url": "javascript/es6/ESM与现代浏览器.html",
    "revision": "7a3f673bb96abe21ffac5899f9a74670"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "6f7f70cfa554f89c2ad95124724e11de"
  },
  {
    "url": "tools/browserslist.html",
    "revision": "0c173aea8844528f6924bba4118e0b1c"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "8f4ae55945be53ac0c4188bfb652cc79"
  },
  {
    "url": "tools/env.html",
    "revision": "324e74a2e6e953cc7343efc26c397ef7"
  },
  {
    "url": "tools/eslintrc.js.html",
    "revision": "f1ebc61549f9b039067a56a612312c75"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "db99917ea58665ade72c4c5f76253175"
  },
  {
    "url": "tools/vuepress.html",
    "revision": "375455e17d0f4066a12262271cdc39bd"
  },
  {
    "url": "前端脚手架/vue-cli/01-基本配置.html",
    "revision": "1d1e4b7b85f3942af4c8562e92ae4685"
  },
  {
    "url": "前端脚手架/vue-cli/02-loader.html",
    "revision": "0666ce15d9e8411a40262542cf7f2c64"
  },
  {
    "url": "前端脚手架/vue-cli/03-plugin.html",
    "revision": "4eaa974d6ca45fa48355e3afe641131f"
  },
  {
    "url": "前端脚手架/vue-cli/loader之image-webpack-loader.html",
    "revision": "34aa9031d41282e567d4a363cf132fb2"
  },
  {
    "url": "前端脚手架/vue-cli/others.html",
    "revision": "ed593cd42fe09d398a88d2e15a27a806"
  },
  {
    "url": "前端脚手架/vue-cli/新增webpack配置.html",
    "revision": "8ba54ef7095fb0b3811876ed965471b6"
  },
  {
    "url": "前端脚手架/vue-cli/查看webpack配置.html",
    "revision": "b97bc7b98466edbdec247743757a417d"
  },
  {
    "url": "前端脚手架/vue-cli/配置sass.html",
    "revision": "b686ee108f76253880e2eac955299ad8"
  },
  {
    "url": "前端脚手架/vue-cli/配置svg.html",
    "revision": "5b7b5a988095f48246cc6229c1f56914"
  },
  {
    "url": "前端脚手架/webpack/01-entry.html",
    "revision": "9ca0c5f6a69dbdeff70ad9c07f666f5f"
  },
  {
    "url": "前端脚手架/webpack/02-output.html",
    "revision": "1ca73a46209620070ff0d3ce2c7c41a4"
  },
  {
    "url": "前端脚手架/webpack/03-plugin.html",
    "revision": "5b60688021f2d83e58b32fb0094e5826"
  },
  {
    "url": "前端脚手架/webpack/04-module.html",
    "revision": "6512b83b5ff6fbfcd33b1722eeb15f19"
  },
  {
    "url": "前端脚手架/webpack/05-resolve.html",
    "revision": "066792f39d78eb481f95fd5f69f9e06e"
  },
  {
    "url": "前端脚手架/webpack/others.html",
    "revision": "54dc90a546b777c22d8d8dd3299a68f0"
  },
  {
    "url": "前端脚手架/webpack/webpack之devtool .html",
    "revision": "38dac12143bbeabfd1fc67accca3b63c"
  },
  {
    "url": "前端脚手架/webpack/webpack之hash.html",
    "revision": "e609bbe4e9f20fd6bf1bf092c483a947"
  },
  {
    "url": "前端脚手架/webpack/webpack之magic-comments.html",
    "revision": "7cfbcd95c1ab6c6bdff412243575680c"
  },
  {
    "url": "前端脚手架/webpack/webpack之runtime与manifest.html",
    "revision": "bb06d04e4310cda18f3f26038b1cc523"
  },
  {
    "url": "前端脚手架/webpack/webpack之处理commonjs.html",
    "revision": "79fe05f1aa8c362f8ff9ff463d5596e0"
  },
  {
    "url": "前端脚手架/webpack/webpack之处理esmodule.html",
    "revision": "f0295580ec1af64664dbd6b9c9c8131f"
  },
  {
    "url": "前端脚手架/webpack/webpack之模块路径解析规则.html",
    "revision": "dc1d81ec6b9ab88f776cc5d3da760ce0"
  },
  {
    "url": "前端脚手架/webpack/模块方法之requireContext.html",
    "revision": "a36795f5b0c74fd51f5d977033dc8503"
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
