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
    "revision": "b48f1740ef67546d9da8a5d2982d19aa"
  },
  {
    "url": "assets/css/0.styles.6028740d.css",
    "revision": "5849dd6c3c284933e143139831db1930"
  },
  {
    "url": "assets/css/5.styles.b7226d41.css",
    "revision": "a6dcd78eef99476a6ba1ae0f4c01de62"
  },
  {
    "url": "assets/css/7.styles.2d9a0f8c.css",
    "revision": "4dfd954af9da41878ca5b77c1ec7d6f2"
  },
  {
    "url": "assets/css/77.styles.5b6c9b45.css",
    "revision": "169d6f7b23b70d80f3e60a762b518dd4"
  },
  {
    "url": "assets/css/styles.e5e079e8.css",
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
    "url": "assets/js/10.7eb5e4e3.js",
    "revision": "e30783f3e1e60c4ccd20d8b907d90cf4"
  },
  {
    "url": "assets/js/11.a1eb1357.js",
    "revision": "d0bd5ac98ea24f414ffd48871f2a1fcf"
  },
  {
    "url": "assets/js/12.17585dd1.js",
    "revision": "7388e8cbd352d25e47777eff7d9c09c5"
  },
  {
    "url": "assets/js/13.2f2809cb.js",
    "revision": "a9b644764dc77d140f374e7e76236344"
  },
  {
    "url": "assets/js/14.6ed7e909.js",
    "revision": "7f8e9c4e88c195983e68d989cdcdbf6e"
  },
  {
    "url": "assets/js/15.58e7dd86.js",
    "revision": "590654e22ddc524a6318b89f3f896a2c"
  },
  {
    "url": "assets/js/16.b38b658e.js",
    "revision": "e5ab14f4c52c227aa734d49401492cea"
  },
  {
    "url": "assets/js/17.e960242a.js",
    "revision": "e66d142f32bb0e52c6e9c5e1a92fb376"
  },
  {
    "url": "assets/js/18.0bf0f456.js",
    "revision": "a806f3ae1f965adbbe0f77a4165702d5"
  },
  {
    "url": "assets/js/19.11d80ff0.js",
    "revision": "1c93cafa06403b43f13bc76b9c9db7a6"
  },
  {
    "url": "assets/js/20.3fc7c806.js",
    "revision": "078a13667ac29097dbc317c286dac818"
  },
  {
    "url": "assets/js/21.b089d9ac.js",
    "revision": "5c12487ae25d1ab1a0866cf9322486ff"
  },
  {
    "url": "assets/js/22.9ddded7d.js",
    "revision": "ffaf3448de2736626e6fff837c16d0a1"
  },
  {
    "url": "assets/js/23.861d0cbc.js",
    "revision": "7d71fecfa3a62a73a873e95119a0e41e"
  },
  {
    "url": "assets/js/24.8911b92a.js",
    "revision": "804ba8fbf4596036605a297b9fee829e"
  },
  {
    "url": "assets/js/25.8d3a75de.js",
    "revision": "001db5c18010f72380b93cad38176928"
  },
  {
    "url": "assets/js/26.47d354d2.js",
    "revision": "332db6909caf9ec90b39ed56571ce6db"
  },
  {
    "url": "assets/js/27.92a1a423.js",
    "revision": "ddad4f81a1c560e82a14590c384f985d"
  },
  {
    "url": "assets/js/28.94c1f5e5.js",
    "revision": "cf0c2fbb26d76d297aba74e01cb98231"
  },
  {
    "url": "assets/js/29.f2cd46db.js",
    "revision": "33aa6a4ed42150593e43e81fd009fd5e"
  },
  {
    "url": "assets/js/30.cfd82fc6.js",
    "revision": "9752e7b576fde50a99bdcc19603f5a03"
  },
  {
    "url": "assets/js/31.ba2f9150.js",
    "revision": "71aeb7aa09e89046ac8e8f7b4d447a98"
  },
  {
    "url": "assets/js/32.13284ce7.js",
    "revision": "f29e38488999771adb02e88c0b4bbbdd"
  },
  {
    "url": "assets/js/33.cc99d43d.js",
    "revision": "f5fded1539a1f859ed1d7c84ed69398c"
  },
  {
    "url": "assets/js/34.510e5c39.js",
    "revision": "327f88536e7a9227f5800653c75441e8"
  },
  {
    "url": "assets/js/35.df867c9b.js",
    "revision": "00a3a20dcabeadbb54108dc601a562c2"
  },
  {
    "url": "assets/js/36.1cd3b889.js",
    "revision": "adea0e49ba5ed7ff53eeb2a81305feb3"
  },
  {
    "url": "assets/js/37.f7c73d93.js",
    "revision": "c4ba6c6f38b4a3da640c44dc8013a39f"
  },
  {
    "url": "assets/js/38.af83c268.js",
    "revision": "ba3b47045b515cef150e9eda16b3d906"
  },
  {
    "url": "assets/js/39.d4ee7d10.js",
    "revision": "8a5ff6c2535e5a61a9b379b7b310def7"
  },
  {
    "url": "assets/js/4.4e040e22.js",
    "revision": "512b7ba9b293d595ab49096c42bd8036"
  },
  {
    "url": "assets/js/40.f3447755.js",
    "revision": "7f3b51d839770c12ac4315c3ad7b24ce"
  },
  {
    "url": "assets/js/41.b7980f3f.js",
    "revision": "4387aa55537b5e4f5b8cde72ee5432b8"
  },
  {
    "url": "assets/js/42.b8708c8d.js",
    "revision": "61ca703335592aaad4305a437cf5f356"
  },
  {
    "url": "assets/js/43.6830d27f.js",
    "revision": "44aa38453c2cf3b6c659d6f83bb59962"
  },
  {
    "url": "assets/js/44.e7e1b8d8.js",
    "revision": "2c59f3d76ab1d6399d7d02000b49dad5"
  },
  {
    "url": "assets/js/45.7e24883e.js",
    "revision": "207960dd1452c83b12f0dd67683f3a92"
  },
  {
    "url": "assets/js/46.183509f9.js",
    "revision": "9bcba72a2c6ab77bcd562369865786ef"
  },
  {
    "url": "assets/js/47.a0285ba4.js",
    "revision": "bb69b338d287c674785cc691ea7ac4b2"
  },
  {
    "url": "assets/js/48.1f523a36.js",
    "revision": "9a962b5fb2f5643205a2852b92b04b43"
  },
  {
    "url": "assets/js/49.6f86dd87.js",
    "revision": "736a051bd03a87d1b082a51aaae349d7"
  },
  {
    "url": "assets/js/50.f5c6b67f.js",
    "revision": "536cdfb92602a22777714294d1bb2ce1"
  },
  {
    "url": "assets/js/51.b878df9e.js",
    "revision": "ee87b33057ac865f937527447254b770"
  },
  {
    "url": "assets/js/52.c16bd8c0.js",
    "revision": "2cc8248b5f6d5ab18a00daa28e56ca04"
  },
  {
    "url": "assets/js/53.bf9ba3b9.js",
    "revision": "df117a041f9a97803eec2a552595ce86"
  },
  {
    "url": "assets/js/54.20cf36ee.js",
    "revision": "eb27ae86bc4c39ef2a8cea6efbb62f58"
  },
  {
    "url": "assets/js/55.fa0817ee.js",
    "revision": "d933374e4ea6e7c0bc15a8922927a75f"
  },
  {
    "url": "assets/js/56.d20e44fb.js",
    "revision": "efdad71a400142c0fc2230b54f082255"
  },
  {
    "url": "assets/js/57.8cc6a882.js",
    "revision": "0d95beb616cb2c3e9b7b7aab16e4a930"
  },
  {
    "url": "assets/js/58.98fa0802.js",
    "revision": "662df4d7f6d11b374c6b173bfa5e3f84"
  },
  {
    "url": "assets/js/59.330c2555.js",
    "revision": "25678b37da872f72de0939056993e286"
  },
  {
    "url": "assets/js/6.73347db2.js",
    "revision": "1601a777141b47bbe26f35be4d9848e3"
  },
  {
    "url": "assets/js/60.72f71b81.js",
    "revision": "fc91d7002829b30a2609e154559cbdd7"
  },
  {
    "url": "assets/js/61.e6341c27.js",
    "revision": "8b9992b719abfb5eee66f82356ed5adc"
  },
  {
    "url": "assets/js/62.18fc09a5.js",
    "revision": "fbeda36408ce72452dd8ca568c4bae46"
  },
  {
    "url": "assets/js/63.918c0b63.js",
    "revision": "f7241a0e1cec06b9a520d8937b31cdf6"
  },
  {
    "url": "assets/js/64.65df7fe0.js",
    "revision": "0d46a7e270e2e0954ef974f5be1f7ed2"
  },
  {
    "url": "assets/js/65.e0b46a2d.js",
    "revision": "130bfde515de7c027ea67146864ee17f"
  },
  {
    "url": "assets/js/66.d0f1f2a5.js",
    "revision": "c229add1fd1e412431a1f9e8e153b590"
  },
  {
    "url": "assets/js/67.f746d0fd.js",
    "revision": "6effd67cf4060bd3137cca5f9bb0b1b5"
  },
  {
    "url": "assets/js/68.da43138f.js",
    "revision": "1b17c2e396250e100ceedaccdd0eafb8"
  },
  {
    "url": "assets/js/69.a7193a48.js",
    "revision": "1e57fcca2a455ad6329db216c03677eb"
  },
  {
    "url": "assets/js/7.2d9a0f8c.js",
    "revision": "af76f17aeddb924338ceb86db41e4bbf"
  },
  {
    "url": "assets/js/70.a698552e.js",
    "revision": "9272d417793c8cf361301eb642107e5a"
  },
  {
    "url": "assets/js/71.9a3df40a.js",
    "revision": "677a0028385fc0b51da30a106251913a"
  },
  {
    "url": "assets/js/72.6d1456a2.js",
    "revision": "755156fa38a353c70b2e1c7079981da6"
  },
  {
    "url": "assets/js/73.fc0b39fe.js",
    "revision": "2669ab87dd452fa48f0d68958999420e"
  },
  {
    "url": "assets/js/76.7031b942.js",
    "revision": "5760744a9e59087509cb9236758b27f0"
  },
  {
    "url": "assets/js/77.5b6c9b45.js",
    "revision": "f127dac14ed9030097bcdefba28804eb"
  },
  {
    "url": "assets/js/78.e7a7e4c4.js",
    "revision": "ac59106ca8b420250462a6a7c0dab0d6"
  },
  {
    "url": "assets/js/8.3e9d7d5a.js",
    "revision": "37e815e18d5f809aa8393b8b2c019a6a"
  },
  {
    "url": "assets/js/app.e5e079e8.js",
    "revision": "09699a386f9ea6fc3314248c71362268"
  },
  {
    "url": "assets/js/chunk-default.b7226d41.js",
    "revision": "6de99d8e615d0d04de56df98264c8898"
  },
  {
    "url": "assets/js/chunk-vuepress.6028740d.js",
    "revision": "aa8d99d87508261b356c5914f5c06d88"
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
    "revision": "6d5843b30110209ad915fcc7782ecf9e"
  },
  {
    "url": "css/reset.html",
    "revision": "d9489b0a2af8f4bfbd10d0c78229433d"
  },
  {
    "url": "css/scrollBar.html",
    "revision": "476bcd023f2d6527dabb72e856bab9e7"
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
    "revision": "c4b1cd7d11636f51ec5bd3160065007a"
  },
  {
    "url": "javascript/bom/Navigator.sendBeacon.html",
    "revision": "413234a3bd405cd483dc9c453c884330"
  },
  {
    "url": "javascript/bom/sessionStorage.html",
    "revision": "b98bf1a0459296a98659a9ea25176103"
  },
  {
    "url": "javascript/dom/api-drag.html",
    "revision": "65453daed0e9207f0bb383bc3e21dc83"
  },
  {
    "url": "javascript/dom/defer与async.html",
    "revision": "dbcbfdfdeb48707bb8637e48fddc145d"
  },
  {
    "url": "javascript/dom/preload与prefetch.html",
    "revision": "6df31bd0b5e5331b167de58c23994195"
  },
  {
    "url": "javascript/ESM与现代浏览器.html",
    "revision": "4dc9f49f13304cce7c6cf3b3e0dcbe7e"
  },
  {
    "url": "javascript/微任务宏任务执行顺序.html",
    "revision": "57b8ce19bdd38b370651c0ef40ca750f"
  },
  {
    "url": "others/interview/a == 1 && a == 2 && a == 3.html",
    "revision": "dd4735884c6d51fd7b376fe8760fd8f8"
  },
  {
    "url": "others/interview/遍历的异步写法.html",
    "revision": "cc1cf9c6db36677c1e94056b067aee0b"
  },
  {
    "url": "others/JSON.html",
    "revision": "1208eb442e59cb2b1485d2de32702d0b"
  },
  {
    "url": "others/unicode和utf-8/unicode.html",
    "revision": "75ae164d7524c4445a8ec62830a663fa"
  },
  {
    "url": "others/unicode和utf-8/utf-8.html",
    "revision": "4b08a3da09cd0372e55d62430200e2ef"
  },
  {
    "url": "others/web安全.html",
    "revision": "566037981509953affa5f823462445ff"
  },
  {
    "url": "others/待整理的.html",
    "revision": "99c3763223a33e6e9108c393b5314eed"
  },
  {
    "url": "others/跨域问题.html",
    "revision": "b83e2b615a047e14b6102360d01b57f1"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "70966efab0ce2173b2e5a3cccd332603"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "cc09f15d27dbe394b0c96b059a83b78a"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "3f3b450cda37573cd58747103d854457"
  },
  {
    "url": "tools/typora快捷键.html",
    "revision": "d5b151f7a7c0d43affa83e7cf4da851c"
  },
  {
    "url": "tools/webstorm/创建宏.html",
    "revision": "4746c41c94b87e84d0a536e536a0987c"
  },
  {
    "url": "tools/webstorm/快捷键.html",
    "revision": "88f0b07fafc1cc6e63d502b419098d46"
  },
  {
    "url": "tools/yarn.html",
    "revision": "002e5b49b0a60154f7542dbbcfd0d8b1"
  },
  {
    "url": "tools/yed-graph-editor快捷键.html",
    "revision": "e22ba1ef61e825045d9bf2cda8814027"
  },
  {
    "url": "tools/版本管理工具-git/基础.html",
    "revision": "0946d15bfde71379ff017eb770516ae0"
  },
  {
    "url": "tools/版本管理工具-git/需要掌握的.html",
    "revision": "60e4d5eebe5f4044b38db5cdb36bb150"
  },
  {
    "url": "脚手架工具/browserslist.html",
    "revision": "8ace714e97e9d9a42f9d3732701bc612"
  },
  {
    "url": "脚手架工具/eslint/01-安装.html",
    "revision": "4b0b6e27f6ec7b5d701db32dafcabfb4"
  },
  {
    "url": "脚手架工具/eslint/02-使用.html",
    "revision": "196e83add9008406db3863a309f3f4d4"
  },
  {
    "url": "脚手架工具/eslint/03-vue开发通用的配置.html",
    "revision": "a42d33c25badf2ad33eb8090ae15e2fe"
  },
  {
    "url": "脚手架工具/eslint/04-配合husky与lint-staged.html",
    "revision": "790665c9c34c3b4047986bd2b08add44"
  },
  {
    "url": "脚手架工具/eslint/05-@babel下的eslint-parser.html",
    "revision": "409d0f57a7922a185eb484e96f05a62b"
  },
  {
    "url": "脚手架工具/umd模块打包方法.html",
    "revision": "82e5e8ecfc07fed694c5806da1131fa6"
  },
  {
    "url": "脚手架工具/vue-cli/01-基本配置.html",
    "revision": "807b105039cb3c3518f0a38e73b24a8b"
  },
  {
    "url": "脚手架工具/vue-cli/02-loader.html",
    "revision": "3b0c25be1d4dcb089e32f9a5380c8f1a"
  },
  {
    "url": "脚手架工具/vue-cli/03-plugin.html",
    "revision": "49467712489899d07d3a2bcb088a3905"
  },
  {
    "url": "脚手架工具/vue-cli/env.html",
    "revision": "5392a4a76522abc69f703feec4aa5a9f"
  },
  {
    "url": "脚手架工具/vue-cli/loader之image-webpack-loader.html",
    "revision": "a87407d1472d4fc09f26a9cd94e8dc01"
  },
  {
    "url": "脚手架工具/vue-cli/others.html",
    "revision": "ebe9a1421f5196f2d20aa3f97c2230f1"
  },
  {
    "url": "脚手架工具/vue-cli/webpack-chain.html",
    "revision": "f526916d2bee4e297ce1ce3a086ca7b3"
  },
  {
    "url": "脚手架工具/vue-cli/新增webpack配置.html",
    "revision": "4a927737256bb8409d3bf9f6533f3f75"
  },
  {
    "url": "脚手架工具/vue-cli/查看webpack配置.html",
    "revision": "861c5e9d398df499445878139362c1a9"
  },
  {
    "url": "脚手架工具/vue-cli/配置sass.html",
    "revision": "f49e8606b971bb4acc650a0068e14137"
  },
  {
    "url": "脚手架工具/vue-cli/配置svg.html",
    "revision": "c2ad212595780714ac78a2207a4daf19"
  },
  {
    "url": "脚手架工具/vuepress.html",
    "revision": "08857af3635c732996708566d78527b0"
  },
  {
    "url": "脚手架工具/webpack/01-entry.html",
    "revision": "ce3c30e649991c2e8b74a439343dde32"
  },
  {
    "url": "脚手架工具/webpack/02-output.html",
    "revision": "dea4e0d1bd89addce609a95ff3afa0a9"
  },
  {
    "url": "脚手架工具/webpack/03-plugin.html",
    "revision": "39b5a9c9baae516feee9b43f7f918b92"
  },
  {
    "url": "脚手架工具/webpack/04-module.html",
    "revision": "28b02745daf6df9110dbe3134e0b8f17"
  },
  {
    "url": "脚手架工具/webpack/05-resolve.html",
    "revision": "2f7075bd91a871b05714c12e574f34fd"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/others.html",
    "revision": "8453c75e8b66187d9cfc27b5fbb032fa"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/splitChunks.html",
    "revision": "353f277553d6e2ae9617a29dc7594913"
  },
  {
    "url": "脚手架工具/webpack/07-其他配置.html",
    "revision": "a749ca44143a9ab328f511e077310ca8"
  },
  {
    "url": "脚手架工具/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "f635f5c665823aa5f250b407dfa679e1"
  },
  {
    "url": "脚手架工具/webpack/others.html",
    "revision": "3539c465e975abefaa189f94010321ea"
  },
  {
    "url": "脚手架工具/webpack/webpack之devtool .html",
    "revision": "e4e9285c6de9be48fc30032d37b142a5"
  },
  {
    "url": "脚手架工具/webpack/webpack之hash.html",
    "revision": "ad4830c45e41abe63abb792a8189e7cf"
  },
  {
    "url": "脚手架工具/webpack/webpack之magic-comments.html",
    "revision": "2603804f634e4a270abdafe6631156da"
  },
  {
    "url": "脚手架工具/webpack/webpack之runtime与manifest.html",
    "revision": "30129ed628458bda82bba6d76630a172"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理commonjs.html",
    "revision": "df907fc6bf3ebd6c98b34ef1613f367b"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理esmodule.html",
    "revision": "c2937ba56e28850e2c085aad859708d6"
  },
  {
    "url": "脚手架工具/webpack/webpack之模块路径解析规则.html",
    "revision": "0ed6f0e7335f68dd85b6e2fe75786f8f"
  },
  {
    "url": "脚手架工具/webpack/模块方法之requireContext.html",
    "revision": "8671b8abc6d02d134b68fa4178ae5a6c"
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
