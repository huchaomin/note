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
    "revision": "3ce445373a2fc83865ed33251d31a86b"
  },
  {
    "url": "assets/css/0.styles.1f7aa43e.css",
    "revision": "2401f19ee705b1d85180f104b5031eff"
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
    "url": "assets/js/10.b8021c1e.js",
    "revision": "0b5a4767d6a13102a8d8a97365ee858e"
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
    "url": "assets/js/15.11c5be55.js",
    "revision": "8eb2a0da7b52d6ab7d3946cd6f832230"
  },
  {
    "url": "assets/js/16.d5a3f8dd.js",
    "revision": "1cccfafd4d3ac999d69c746ee77cfa37"
  },
  {
    "url": "assets/js/17.78778c22.js",
    "revision": "e01a46af8440f8b02b0cbbeb63587498"
  },
  {
    "url": "assets/js/18.c790078a.js",
    "revision": "852b1f352943cb9c194e09737e194885"
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
    "url": "assets/js/20.4ab4df93.js",
    "revision": "92bab8c7508a8481cae4c35c49c6837d"
  },
  {
    "url": "assets/js/21.4ecf1151.js",
    "revision": "dc90986725bd774eb390dd2bf0cbf071"
  },
  {
    "url": "assets/js/22.2bec1e3c.js",
    "revision": "d4799fd7c3492558ced7bbf9c17b70b2"
  },
  {
    "url": "assets/js/23.4b2aadab.js",
    "revision": "30e5b719b17cee976a6ebd5bdad40f28"
  },
  {
    "url": "assets/js/24.eb202c75.js",
    "revision": "e26eff1fbed351f01ec0d2884ca6e33f"
  },
  {
    "url": "assets/js/25.22313dad.js",
    "revision": "74c00faed929bf3362e3586d8dc64b1b"
  },
  {
    "url": "assets/js/26.8507071b.js",
    "revision": "311b009e9f762df6fa3356e2047b230a"
  },
  {
    "url": "assets/js/27.ea7df817.js",
    "revision": "d89105ed8105322b642945184ea0c3b3"
  },
  {
    "url": "assets/js/28.1899ed27.js",
    "revision": "76f95275945a8cfc549846dac9e8309a"
  },
  {
    "url": "assets/js/29.206e69ea.js",
    "revision": "c8b280ca0560387e88948f614e5717c1"
  },
  {
    "url": "assets/js/3.a6046d08.js",
    "revision": "e7440949e0940ae83139569a131fae88"
  },
  {
    "url": "assets/js/30.15249b24.js",
    "revision": "dc74d887131bbcc73435ab2542447b11"
  },
  {
    "url": "assets/js/31.6b2108dc.js",
    "revision": "d9e39f57bf4d865f8f149ddef435965b"
  },
  {
    "url": "assets/js/32.450d620e.js",
    "revision": "0ce7f394911d93b7f9b313a862bfac0c"
  },
  {
    "url": "assets/js/33.6700f8e4.js",
    "revision": "48e980ea59c9735ef2c13baa802a15f0"
  },
  {
    "url": "assets/js/34.0db46a8a.js",
    "revision": "02049e67f9ef00b744befd31a8ecb71e"
  },
  {
    "url": "assets/js/35.38fb7217.js",
    "revision": "4b821082d03c7d10c429507676bdd919"
  },
  {
    "url": "assets/js/36.ba1a0da4.js",
    "revision": "70458a1dc492345649ef41a282bed3b6"
  },
  {
    "url": "assets/js/37.7eaf194c.js",
    "revision": "11aea02ca0cab86ce38030ef297c74a7"
  },
  {
    "url": "assets/js/38.2e874c0a.js",
    "revision": "4668b9d661801a81f347c41512f488ac"
  },
  {
    "url": "assets/js/39.b9c5be64.js",
    "revision": "1bbf1d4fc8c02696324806966616ccf6"
  },
  {
    "url": "assets/js/4.c457352c.js",
    "revision": "74cefa748034bbe07180daa3ef0adaf7"
  },
  {
    "url": "assets/js/40.1fda8fc9.js",
    "revision": "d21b7bb70a501cc4ede96245568d3a01"
  },
  {
    "url": "assets/js/41.3bc406ff.js",
    "revision": "164b2cae515fa70c5b9bcdc7a60cba2d"
  },
  {
    "url": "assets/js/42.8e19b438.js",
    "revision": "7b72faaa424f6ddd386b4b04d7b4911f"
  },
  {
    "url": "assets/js/43.f55f9335.js",
    "revision": "f544f128c23a2da21922e459a84a4b62"
  },
  {
    "url": "assets/js/44.86271c7c.js",
    "revision": "bb9e9b47427856c974ef886551861a05"
  },
  {
    "url": "assets/js/45.3302720f.js",
    "revision": "68efada39bd82bf936567061ade67926"
  },
  {
    "url": "assets/js/46.bc4302c3.js",
    "revision": "a89d9c3eae86f19c4e05f4ad446d1110"
  },
  {
    "url": "assets/js/47.316c8387.js",
    "revision": "68efedcd324c6bc662333e78c7ea0656"
  },
  {
    "url": "assets/js/48.88427cf4.js",
    "revision": "9aab0dda18d5434fb4de93fc1d01ca1a"
  },
  {
    "url": "assets/js/49.a9cf8d2d.js",
    "revision": "036938e11eed9bb2b7ef44dec612294e"
  },
  {
    "url": "assets/js/5.9fb5ef97.js",
    "revision": "ffd8ef661b442c93a768ccb41596777f"
  },
  {
    "url": "assets/js/50.68569d72.js",
    "revision": "610dce3f4642c308d4b8fffb1d1fc308"
  },
  {
    "url": "assets/js/51.0f8072bb.js",
    "revision": "d4f64cd2cc58b64cd7520c8f374fc6a2"
  },
  {
    "url": "assets/js/52.1f7bbde5.js",
    "revision": "54ae9a0f01345ef2e65cd8a3ff1516e5"
  },
  {
    "url": "assets/js/53.a55df976.js",
    "revision": "1622f2efeff79c3090140a1399a8d5b7"
  },
  {
    "url": "assets/js/54.c370e82f.js",
    "revision": "94ce6c1fc4069464b309c1c83e5598f3"
  },
  {
    "url": "assets/js/55.16b4e064.js",
    "revision": "3b19a79b4ab7f4e89ab4ee00cd13707d"
  },
  {
    "url": "assets/js/56.e0206ea1.js",
    "revision": "9b466768b9f5fbeccaa7ed3db975baec"
  },
  {
    "url": "assets/js/57.0711cd28.js",
    "revision": "6af0e7c804ab93e43bdf3bc647fd1f4c"
  },
  {
    "url": "assets/js/58.be6d824a.js",
    "revision": "6f31e96fbc23acf6524ab6e7c17dcc76"
  },
  {
    "url": "assets/js/6.f283f060.js",
    "revision": "f5a27d4b00ef5bdbdbc64d198b7129de"
  },
  {
    "url": "assets/js/7.1755bce5.js",
    "revision": "2098c9d3f2fb3482f8a6b7b3222c1e82"
  },
  {
    "url": "assets/js/8.a5370454.js",
    "revision": "66841f8a56a819635b92f619a370add2"
  },
  {
    "url": "assets/js/9.a4cc62e8.js",
    "revision": "362f03da6395760151792a55b7feba1e"
  },
  {
    "url": "assets/js/app.efde5853.js",
    "revision": "26d92062530c8ce6e6824b3f27e3dd82"
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
    "revision": "8c6354142d8687a3f75fa14ca8324e3e"
  },
  {
    "url": "css/reset.html",
    "revision": "a544005238fd6ce7c82a7abe8b3f2c6b"
  },
  {
    "url": "css/scrollBar.html",
    "revision": "902936b6fc60ceb516a9ab8504a1348c"
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
    "revision": "4f0851316714cf26dbbddebbf4cff0c1"
  },
  {
    "url": "javascript/bom/Navigator.sendBeacon.html",
    "revision": "4e18ca97df0936afd1d1c166ede1451a"
  },
  {
    "url": "javascript/bom/sessionStorage.html",
    "revision": "7039cca0db107a7760ee4d5a24abd813"
  },
  {
    "url": "javascript/dom/api-drag.html",
    "revision": "ece44e800fcc148425493ad5251b07a1"
  },
  {
    "url": "javascript/dom/defer与async.html",
    "revision": "b2b2a53f728c3e748ae90cfd6d75bc50"
  },
  {
    "url": "javascript/dom/preload与prefetch.html",
    "revision": "6af35b3489ea6e5b7e7643b17371cab5"
  },
  {
    "url": "javascript/ESM与现代浏览器.html",
    "revision": "76f968b0716761487bb7870172ea5b17"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "dc26786633fbf9d1120740daf12c10f3"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "e1e47b03b9b511e68cf86f8939b8297b"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "924bafa81c0e8aedaaea0c4b43b2a66a"
  },
  {
    "url": "脚手架工具/browserslist.html",
    "revision": "383eec8bc7fd7d536689b86bb6c88552"
  },
  {
    "url": "脚手架工具/eslint/01-安装.html",
    "revision": "9238bf4869d3a8887d9b822f9822caf5"
  },
  {
    "url": "脚手架工具/eslint/02-使用.html",
    "revision": "e52215243c6e0cccbf7208b9a134c4b5"
  },
  {
    "url": "脚手架工具/eslint/03-vue开发通用的配置.html",
    "revision": "42d60c3e3add2c90336be974d8ef88dc"
  },
  {
    "url": "脚手架工具/eslint/04-配合husky与lint-staged.html",
    "revision": "6bdcaa5d37ef849d7c76f74bf980c008"
  },
  {
    "url": "脚手架工具/eslint/05-@babel下的eslint-parser.html",
    "revision": "26dae6a8568bc30c6cd394a7d2e66ef1"
  },
  {
    "url": "脚手架工具/umd模块打包方法.html",
    "revision": "36d1f887ed1c389d0d0a8e29b0d2a363"
  },
  {
    "url": "脚手架工具/vue-cli/01-基本配置.html",
    "revision": "33a66e735b0f1dbe7d7d666e9032c87e"
  },
  {
    "url": "脚手架工具/vue-cli/02-loader.html",
    "revision": "5a8b41664dcd7b56772e0912220e5037"
  },
  {
    "url": "脚手架工具/vue-cli/03-plugin.html",
    "revision": "0077214eeb96841973266af005ccd649"
  },
  {
    "url": "脚手架工具/vue-cli/env.html",
    "revision": "05c6a55a868bf6b5f33b8dafc366acbc"
  },
  {
    "url": "脚手架工具/vue-cli/loader之image-webpack-loader.html",
    "revision": "e66229526ac156e7a87c907dea6b6424"
  },
  {
    "url": "脚手架工具/vue-cli/others.html",
    "revision": "075defe84df050b3abc588d807da9ed1"
  },
  {
    "url": "脚手架工具/vue-cli/webpack-chain.html",
    "revision": "4ec0a9d38c82d01861d6cc6a2c4f5395"
  },
  {
    "url": "脚手架工具/vue-cli/新增webpack配置.html",
    "revision": "2085ee2cb4abced709e49d7151b63768"
  },
  {
    "url": "脚手架工具/vue-cli/查看webpack配置.html",
    "revision": "6d8e8f9b98e0f6312a25df2c1d404d44"
  },
  {
    "url": "脚手架工具/vue-cli/配置sass.html",
    "revision": "32192b3ea609ed32c6c256250a7beafd"
  },
  {
    "url": "脚手架工具/vue-cli/配置svg.html",
    "revision": "3b239f94e087754b4976c660f2bf8fa5"
  },
  {
    "url": "脚手架工具/vuepress.html",
    "revision": "60f0fbb02e918a67d72190b37ee92e68"
  },
  {
    "url": "脚手架工具/webpack/01-entry.html",
    "revision": "fc1c705c3d5570ea9f38f8405786da19"
  },
  {
    "url": "脚手架工具/webpack/02-output.html",
    "revision": "6eef0be3f35b92e69c163b3a4920be6c"
  },
  {
    "url": "脚手架工具/webpack/03-plugin.html",
    "revision": "1c4d24ff26899191095528e86e0d3fdc"
  },
  {
    "url": "脚手架工具/webpack/04-module.html",
    "revision": "cf359c19b15d3fcdf0564eaf0ec76cc9"
  },
  {
    "url": "脚手架工具/webpack/05-resolve.html",
    "revision": "c42aea68f6637159a6ee900318e6f1b3"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/others.html",
    "revision": "9655b3ffa59b949699426edc553efe41"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/splitChunks.html",
    "revision": "bababafb0471843df8097ad923b5836f"
  },
  {
    "url": "脚手架工具/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "1b265567d9b3ac03c97d1dd79827ae3f"
  },
  {
    "url": "脚手架工具/webpack/others.html",
    "revision": "edf153f4e70b0879c76694e578d4eef5"
  },
  {
    "url": "脚手架工具/webpack/webpack之devtool .html",
    "revision": "bbe58cc6333c1189c023e7504d8f9100"
  },
  {
    "url": "脚手架工具/webpack/webpack之hash.html",
    "revision": "7cfc7a44966db225c1d0166eb39d3da8"
  },
  {
    "url": "脚手架工具/webpack/webpack之magic-comments.html",
    "revision": "3a037ddce9f9302c36a486957f53eeda"
  },
  {
    "url": "脚手架工具/webpack/webpack之runtime与manifest.html",
    "revision": "8feedc70d723b77bc3bed781f5b4ca98"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理commonjs.html",
    "revision": "3c44a47b0633a6f380396f0948945abf"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理esmodule.html",
    "revision": "f068e914d487fa03ba56f863e29040c9"
  },
  {
    "url": "脚手架工具/webpack/webpack之模块路径解析规则.html",
    "revision": "b36f5d8df2b9c4d500a819c176d64617"
  },
  {
    "url": "脚手架工具/webpack/模块方法之requireContext.html",
    "revision": "951084746abf311e419cfab3cd338f95"
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
