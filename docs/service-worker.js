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
    "revision": "f10ccffe5dd0d6ae457ad35b95bc40f9"
  },
  {
    "url": "assets/css/0.styles.5fde4283.css",
    "revision": "d23ee3d76f4730ad23fe1858dbb21d93"
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
    "url": "assets/js/12.84ddf265.js",
    "revision": "e6b5cb7e66d7fc12f3a6250b9a865d3d"
  },
  {
    "url": "assets/js/13.f4299b3e.js",
    "revision": "7d23983a872566f08d6f0782bc28b58e"
  },
  {
    "url": "assets/js/14.5b7cb441.js",
    "revision": "8ce5cf49727dad5e654c08b6ae91cfac"
  },
  {
    "url": "assets/js/15.4439c3ef.js",
    "revision": "57d758f2e50079f3df6ff93ff8d2d17b"
  },
  {
    "url": "assets/js/16.b46a8223.js",
    "revision": "e01bc4117088596d2588b1536b868241"
  },
  {
    "url": "assets/js/17.bd30b1ea.js",
    "revision": "c27ce6a9a1109cb9ff3369d83fc39081"
  },
  {
    "url": "assets/js/18.cc769d1d.js",
    "revision": "a772bbd2551ebdfa118d4c8a4b517f06"
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
    "url": "assets/js/20.8615349d.js",
    "revision": "0f364ccabc8882bfa0c6edc2d6fa3217"
  },
  {
    "url": "assets/js/21.a00b25ef.js",
    "revision": "4d6c3101c6761b69491f0e9dda2592b5"
  },
  {
    "url": "assets/js/22.e7253f47.js",
    "revision": "ef77b77127ca8af90fac48caabcf5a43"
  },
  {
    "url": "assets/js/23.6b9ce290.js",
    "revision": "384fafd67cdf225b451bdd23cd25783f"
  },
  {
    "url": "assets/js/24.b556bcce.js",
    "revision": "d0c80daf0c42efb62e371c2988b152ba"
  },
  {
    "url": "assets/js/25.d9f82d57.js",
    "revision": "08d7852383af402bdfbe614ea99f1681"
  },
  {
    "url": "assets/js/26.d28dd876.js",
    "revision": "9e6633a05bcf5077932070d06328e1e9"
  },
  {
    "url": "assets/js/27.1d937da1.js",
    "revision": "73a033283379c0f8468eba563aa1a409"
  },
  {
    "url": "assets/js/28.8997f87f.js",
    "revision": "80c6401356559cb453e037847cf430fd"
  },
  {
    "url": "assets/js/29.28c78c46.js",
    "revision": "4d8f8fd1a3a7e9e29040576981e9aa91"
  },
  {
    "url": "assets/js/3.6142b319.js",
    "revision": "38265cc0d5035fdc1c81c2f0f0cbd1d3"
  },
  {
    "url": "assets/js/30.2ac398b0.js",
    "revision": "6647fa4f5570fe25ec18449995a9ea59"
  },
  {
    "url": "assets/js/31.8c9c779d.js",
    "revision": "f4644a071247401a4272f773de946621"
  },
  {
    "url": "assets/js/32.d23a533b.js",
    "revision": "7169185a093b0128f12045af152775a7"
  },
  {
    "url": "assets/js/33.8ea432b9.js",
    "revision": "34d2e0f9ec2fa7a3693a731ae0d4db6c"
  },
  {
    "url": "assets/js/34.56a19fcd.js",
    "revision": "b0c09b16bfcf61253b74b3b561290e76"
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
    "url": "assets/js/39.65e8ace9.js",
    "revision": "249811d597f2d522f2948636ca40b789"
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
    "url": "assets/js/42.ad9b72ca.js",
    "revision": "868ed6e09f928c281002e9eec9db365d"
  },
  {
    "url": "assets/js/43.87876782.js",
    "revision": "f144fe1421fa523d7210ad7a7f5a747c"
  },
  {
    "url": "assets/js/44.df0d6fd5.js",
    "revision": "d11a9e709a51491731947ea817e6ec7c"
  },
  {
    "url": "assets/js/45.9d23b722.js",
    "revision": "f9bddf62c23751d57adae8883d520e5b"
  },
  {
    "url": "assets/js/46.cb802fe5.js",
    "revision": "6c36dcafd30f01670723313cf91d7ece"
  },
  {
    "url": "assets/js/47.c4692611.js",
    "revision": "1cf851ae9ff71e0b3a738d0cea50e464"
  },
  {
    "url": "assets/js/48.8d56d2af.js",
    "revision": "fa387156b50bc477729dd19a6bcb4278"
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
    "url": "assets/js/9.4d23d30b.js",
    "revision": "9e65f7a6058fcef2c73db8927020d85e"
  },
  {
    "url": "assets/js/app.99bf8643.js",
    "revision": "adc7ec6f0df47a60fe9ba458a2815696"
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
    "revision": "2bea46913d8271eb3156ab99702bd623"
  },
  {
    "url": "css/reset.html",
    "revision": "426128f0b17d3f71b11fc1019d19c9d1"
  },
  {
    "url": "css/scrollBar.html",
    "revision": "e9c2666ed7ac82c60eef5c571f550bf5"
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
    "revision": "c242e9628b23f1f7731a8cc2316a6839"
  },
  {
    "url": "javascript/bom/Navigator.sendBeacon.html",
    "revision": "abf786b2942b971f0d04766395b0323f"
  },
  {
    "url": "javascript/bom/sessionStorage.html",
    "revision": "51eced07c22512a953a1bba1557dc803"
  },
  {
    "url": "javascript/dom/api-drag.html",
    "revision": "399d08fddcd5726f577e91226170ba0e"
  },
  {
    "url": "javascript/dom/defer与async.html",
    "revision": "6886f5ca2d039c76ad4553d1ecec76db"
  },
  {
    "url": "javascript/dom/preload与prefetch.html",
    "revision": "5fbb149ac2bff54fe403dc3664a68478"
  },
  {
    "url": "javascript/ESM与现代浏览器.html",
    "revision": "6ab6759c599635e656f1bfcd59be2a84"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "6c18ce7f6dc6037441b2baca4efee2f6"
  },
  {
    "url": "tools/browserslist.html",
    "revision": "340120d3f73cc44722a64d6bf9501eea"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "5cec00cd266e3530d0196433cb58bdec"
  },
  {
    "url": "tools/env.html",
    "revision": "60ae7f9da8259fdde5c76e4744e4736e"
  },
  {
    "url": "tools/eslint.html",
    "revision": "a638a92669733ea1659f2bffbf97985b"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "397fa2bbeb707a17daf88668d3585edb"
  },
  {
    "url": "tools/vuepress.html",
    "revision": "e4f181783ed6be3b057b7456600908d6"
  },
  {
    "url": "前端脚手架/umd模块打包方法.html",
    "revision": "10fed147abe525f001d734b9ad39c688"
  },
  {
    "url": "前端脚手架/vue-cli/01-基本配置.html",
    "revision": "7596de8e10e29674a3698782ab29be4f"
  },
  {
    "url": "前端脚手架/vue-cli/02-loader.html",
    "revision": "cc9ab683a231001eb5dfb3c2a67f13c5"
  },
  {
    "url": "前端脚手架/vue-cli/03-plugin.html",
    "revision": "16992227ffbb067ea63170875b02de19"
  },
  {
    "url": "前端脚手架/vue-cli/loader之image-webpack-loader.html",
    "revision": "5e81a08a2ea63a1bac802acb67338639"
  },
  {
    "url": "前端脚手架/vue-cli/others.html",
    "revision": "56813abb4f45390318a44a3da519ff3d"
  },
  {
    "url": "前端脚手架/vue-cli/webpack-chain.html",
    "revision": "4140dee0831150b19c95c6798547709a"
  },
  {
    "url": "前端脚手架/vue-cli/新增webpack配置.html",
    "revision": "75dccc210d10e58830cbb7c3be45e0eb"
  },
  {
    "url": "前端脚手架/vue-cli/查看webpack配置.html",
    "revision": "993d30bb447a654b66460ec431ef0cab"
  },
  {
    "url": "前端脚手架/vue-cli/配置sass.html",
    "revision": "8e4aaaad5c992ec73a50712e4edb2756"
  },
  {
    "url": "前端脚手架/vue-cli/配置svg.html",
    "revision": "651d3aa1b427da2b011609a69ea8afde"
  },
  {
    "url": "前端脚手架/webpack/01-entry.html",
    "revision": "99f465c72aca87db1ac84c981d126447"
  },
  {
    "url": "前端脚手架/webpack/02-output.html",
    "revision": "d0223e165fd54f913d3d15f5a3980dd2"
  },
  {
    "url": "前端脚手架/webpack/03-plugin.html",
    "revision": "803977776a56627852c4dae9859bef2a"
  },
  {
    "url": "前端脚手架/webpack/04-module.html",
    "revision": "8cf72eef33d6bbf55c0e50978c120bca"
  },
  {
    "url": "前端脚手架/webpack/05-resolve.html",
    "revision": "cad3c656992f60ffa49c84c2ee1c4bf3"
  },
  {
    "url": "前端脚手架/webpack/06-optimization/others.html",
    "revision": "648e3a4acbd5a22a045189ad648b7318"
  },
  {
    "url": "前端脚手架/webpack/06-optimization/splitChunks.html",
    "revision": "734d1b61ef7b6f58505da4131ffa60ce"
  },
  {
    "url": "前端脚手架/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "48d60045a286797b1836dcddec6b6692"
  },
  {
    "url": "前端脚手架/webpack/others.html",
    "revision": "e3f3146bdac28379a7f82a17d8089764"
  },
  {
    "url": "前端脚手架/webpack/webpack之devtool .html",
    "revision": "0bd99224624ed7d1d0c5d41678a3ace6"
  },
  {
    "url": "前端脚手架/webpack/webpack之hash.html",
    "revision": "c357c4627f1e319b8660567395fb4a14"
  },
  {
    "url": "前端脚手架/webpack/webpack之magic-comments.html",
    "revision": "c0ab0894c39e19ddff248d53a9b060cf"
  },
  {
    "url": "前端脚手架/webpack/webpack之runtime与manifest.html",
    "revision": "785b7354a7a8297a48171cde51188663"
  },
  {
    "url": "前端脚手架/webpack/webpack之处理commonjs.html",
    "revision": "8851c7212acab85c6226141de8ac1b77"
  },
  {
    "url": "前端脚手架/webpack/webpack之处理esmodule.html",
    "revision": "ffe84b5095668dbf03521734de6bd510"
  },
  {
    "url": "前端脚手架/webpack/webpack之模块路径解析规则.html",
    "revision": "63458914b1a02c72812510e978ad8ec3"
  },
  {
    "url": "前端脚手架/webpack/模块方法之requireContext.html",
    "revision": "6130d0ca72592cc5c3ca75a86a3413f4"
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
