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
    "revision": "074273c0303f504cbc6154e4ebf0d6ec"
  },
  {
    "url": "assets/css/0.styles.759751b8.css",
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
    "url": "assets/js/chunk-vuepress.759751b8.js",
    "revision": "3f889383515978a9b34bfce31b9f3e23"
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
    "revision": "4fa97241203c7b360e29ceabbae21211"
  },
  {
    "url": "css/reset.html",
    "revision": "4bd6484158a415a74d6fe4c8f26a2d85"
  },
  {
    "url": "css/scrollBar.html",
    "revision": "38a2e5652d3cfbd4872d37c55d15e017"
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
    "revision": "0aca369322cc6d0f870b6390e368c386"
  },
  {
    "url": "javascript/bom/Navigator.sendBeacon.html",
    "revision": "0313ac10cbae7259261f38994d0829f3"
  },
  {
    "url": "javascript/bom/sessionStorage.html",
    "revision": "0c3712ebef62eb4b9b10db6863a73eb7"
  },
  {
    "url": "javascript/dom/api-drag.html",
    "revision": "dd7121c3c8f5a030729340f2c389741e"
  },
  {
    "url": "javascript/dom/defer与async.html",
    "revision": "84f2d3fbff506182eeb01506a44e22cb"
  },
  {
    "url": "javascript/dom/preload与prefetch.html",
    "revision": "738862b38200b0f6dca984af5527ab80"
  },
  {
    "url": "javascript/ESM与现代浏览器.html",
    "revision": "49753de3fc35697babcb2a1b4bf88f5b"
  },
  {
    "url": "javascript/微任务宏任务执行顺序.html",
    "revision": "f5005892639c8367989718ceebbba586"
  },
  {
    "url": "others/interview/a == 1 && a == 2 && a == 3.html",
    "revision": "4ddd4dbf74be300fb3bf7b8de50ba044"
  },
  {
    "url": "others/interview/遍历的异步写法.html",
    "revision": "6f9a273d4f015d423238b539852c4d38"
  },
  {
    "url": "others/JSON.html",
    "revision": "d7def91145d30b9754e4cb3f8ab8c8e7"
  },
  {
    "url": "others/unicode和utf-8/unicode.html",
    "revision": "0358b0e39f66a16c1c9d0c4c2953bcd2"
  },
  {
    "url": "others/unicode和utf-8/utf-8.html",
    "revision": "8ab05d0c4238a300cb884ae8944b7782"
  },
  {
    "url": "others/web安全.html",
    "revision": "8268c977227cb72e656210254d8bd2c2"
  },
  {
    "url": "others/待整理的.html",
    "revision": "956e6b90482f7fbe2e587f78d264d13c"
  },
  {
    "url": "others/跨域问题.html",
    "revision": "89332ef5f77882460293b2fa78777970"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "afb3c1392f3a2624f66bada5d8244070"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "73bcd8687c83991a9dc2cf307e8d6901"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "84ae1ec39f02588a5ca0d665a9402066"
  },
  {
    "url": "tools/typora快捷键.html",
    "revision": "77dd68b2086bff67bb3eb275c146ba2e"
  },
  {
    "url": "tools/webstorm/创建宏.html",
    "revision": "bcc93d4482f9435c86cec34ab61b468c"
  },
  {
    "url": "tools/webstorm/快捷键.html",
    "revision": "854fd663abab3f085671f1b43ca92641"
  },
  {
    "url": "tools/yarn.html",
    "revision": "858a2151c3481fba7e69ffaada41a2f9"
  },
  {
    "url": "tools/yed-graph-editor快捷键.html",
    "revision": "410cd6048c3528d1a4cf6a356be0af85"
  },
  {
    "url": "tools/版本管理工具-git/基础.html",
    "revision": "e3faee16f30043c39efae05e67ca7367"
  },
  {
    "url": "tools/版本管理工具-git/需要掌握的.html",
    "revision": "91cd1e77e9e31663e05e06dc3c4c895e"
  },
  {
    "url": "脚手架工具/browserslist.html",
    "revision": "ed4c57585c8c953a02b996b4a5ca61d2"
  },
  {
    "url": "脚手架工具/eslint/01-安装.html",
    "revision": "8d3574a6eefe2efbc607a5c2d1c77d11"
  },
  {
    "url": "脚手架工具/eslint/02-使用.html",
    "revision": "cfed7f06542b0d009f23868e7c050b56"
  },
  {
    "url": "脚手架工具/eslint/03-vue开发通用的配置.html",
    "revision": "4b140230f1a202c0b8dc6213f0a2d657"
  },
  {
    "url": "脚手架工具/eslint/04-配合husky与lint-staged.html",
    "revision": "a2f5f89b935245d294f2330c9db71433"
  },
  {
    "url": "脚手架工具/eslint/05-@babel下的eslint-parser.html",
    "revision": "003b4c70d83470086b9bad126c90cda8"
  },
  {
    "url": "脚手架工具/umd模块打包方法.html",
    "revision": "8b4d28ed37420cb63bfd7c0524805f37"
  },
  {
    "url": "脚手架工具/vue-cli/01-基本配置.html",
    "revision": "f22ab2788cc343d6ccd0aaa7c133cebf"
  },
  {
    "url": "脚手架工具/vue-cli/02-loader.html",
    "revision": "fa7b500e6e388213df822d67d59b27e2"
  },
  {
    "url": "脚手架工具/vue-cli/03-plugin.html",
    "revision": "cdcb598404e49fae1e550f424cea91e3"
  },
  {
    "url": "脚手架工具/vue-cli/env.html",
    "revision": "d4f384770facd845ec332609eca9df20"
  },
  {
    "url": "脚手架工具/vue-cli/loader之image-webpack-loader.html",
    "revision": "06e0ec610f46185a1463a27d6477af4e"
  },
  {
    "url": "脚手架工具/vue-cli/others.html",
    "revision": "0ad3767b7e76aafb2f937fcbb35fb413"
  },
  {
    "url": "脚手架工具/vue-cli/webpack-chain.html",
    "revision": "00e9da2dda38ab9142ceaabe8987b0e2"
  },
  {
    "url": "脚手架工具/vue-cli/新增webpack配置.html",
    "revision": "d86418869572511eb9e82699a21dae42"
  },
  {
    "url": "脚手架工具/vue-cli/查看webpack配置.html",
    "revision": "7c2e28b8c5964dbb342098ba3074f760"
  },
  {
    "url": "脚手架工具/vue-cli/配置sass.html",
    "revision": "0840a2aa8ca439dd047c1589f78ee50c"
  },
  {
    "url": "脚手架工具/vue-cli/配置svg.html",
    "revision": "0a42cb295b78ab544950a639ab4fdd5e"
  },
  {
    "url": "脚手架工具/vuepress.html",
    "revision": "13038ca8cdb06ce92fa577544a8e13d3"
  },
  {
    "url": "脚手架工具/webpack/01-entry.html",
    "revision": "55c6ba18143601f65a6cc8bfb0c0681a"
  },
  {
    "url": "脚手架工具/webpack/02-output.html",
    "revision": "a9b0b673c71aad69fb82f37ec1c4707f"
  },
  {
    "url": "脚手架工具/webpack/03-plugin.html",
    "revision": "7a84f9d7af68f7eebf7abbced47bc3b5"
  },
  {
    "url": "脚手架工具/webpack/04-module.html",
    "revision": "3f95b2db5876470c6d4e7a1e14bdfd0f"
  },
  {
    "url": "脚手架工具/webpack/05-resolve.html",
    "revision": "e8466132b0dba4a0d3b3ba0e555a09b9"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/others.html",
    "revision": "569813cca614c2b91478032a390345ac"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/splitChunks.html",
    "revision": "7716a8e2fcbb97338fc6ed15836bb98c"
  },
  {
    "url": "脚手架工具/webpack/07-其他配置.html",
    "revision": "38133fee1f5ceb18ac2bb1f8cf8bbb4e"
  },
  {
    "url": "脚手架工具/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "78643387a417a4440d619c2e87383b7d"
  },
  {
    "url": "脚手架工具/webpack/others.html",
    "revision": "20b4a8242d216a62aaadb6d3099df755"
  },
  {
    "url": "脚手架工具/webpack/webpack之devtool .html",
    "revision": "41a984865c37ddada6bcc29b9e39311d"
  },
  {
    "url": "脚手架工具/webpack/webpack之hash.html",
    "revision": "c249d2c81e3d849b6ee01b31a3707111"
  },
  {
    "url": "脚手架工具/webpack/webpack之magic-comments.html",
    "revision": "e12ba48b002c8fe0ce3ce7062ee6807d"
  },
  {
    "url": "脚手架工具/webpack/webpack之runtime与manifest.html",
    "revision": "749aa4f6c7cfd642dece539f9e3236fe"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理commonjs.html",
    "revision": "976b0ac3c66b9847aa7b08c4b55b3e17"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理esmodule.html",
    "revision": "a70e0fa7f0e925d4f62bb3f84e5506f9"
  },
  {
    "url": "脚手架工具/webpack/webpack之模块路径解析规则.html",
    "revision": "282c6d81e4212866ab7d2e34600669b8"
  },
  {
    "url": "脚手架工具/webpack/模块方法之requireContext.html",
    "revision": "d91f2693534592eec6694ed822773537"
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
