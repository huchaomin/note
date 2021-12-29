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
    "revision": "ddd8f906e4044d752425c6b11ccda124"
  },
  {
    "url": "aaa/a.html",
    "revision": "0a13163bc3c11e7ab8dadfd10630b747"
  },
  {
    "url": "aaa/bbb/b.html",
    "revision": "7554fff915d71d9f0256692e2a4f8005"
  },
  {
    "url": "aaa/bbb/index.html",
    "revision": "3caac3225dd76810bbaecb0225cfbf7b"
  },
  {
    "url": "assets/css/0.styles.bb8bcf30.css",
    "revision": "c5d48eee0da5f90e53745d3418c4ff70"
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
    "url": "assets/js/10.969d54ba.js",
    "revision": "f25af19900d0137d21d9abd281710317"
  },
  {
    "url": "assets/js/11.9ed1c3d0.js",
    "revision": "320b130ddd29baabc10b3685afbc0d0e"
  },
  {
    "url": "assets/js/12.d4014376.js",
    "revision": "1fe77e428d4b97eee365c282c3b91cda"
  },
  {
    "url": "assets/js/13.f52d7e5d.js",
    "revision": "8e5680301861c062f0b51c3d4fb8f325"
  },
  {
    "url": "assets/js/14.298c9dbe.js",
    "revision": "e9dc3747f81c6be58964dad95c57bd56"
  },
  {
    "url": "assets/js/15.f93f2182.js",
    "revision": "0ee47a9a166a50efdf10401836f2ba25"
  },
  {
    "url": "assets/js/16.cfebab3b.js",
    "revision": "7fdd3434037ebd510688950ea7c26b37"
  },
  {
    "url": "assets/js/17.5cfc64ce.js",
    "revision": "4c4ebf4ff49c73c564de1ad6caa2a4da"
  },
  {
    "url": "assets/js/18.dc06ff62.js",
    "revision": "6d982fd708deb987b2613b460587f4e6"
  },
  {
    "url": "assets/js/19.5c07aba4.js",
    "revision": "2d842d2c29539c64d6f32bc9aee2de28"
  },
  {
    "url": "assets/js/2.10316eb5.js",
    "revision": "84405d600c37d09b8a5ff2e4152d7829"
  },
  {
    "url": "assets/js/20.376e345e.js",
    "revision": "7a8ed56e2083244b3f29f020dd8deef6"
  },
  {
    "url": "assets/js/3.5f08ba86.js",
    "revision": "3d5b540b94f1b1ce60ecd17b5ff8882a"
  },
  {
    "url": "assets/js/4.928eefc4.js",
    "revision": "4ff916f07be59aeb8a734a248297d866"
  },
  {
    "url": "assets/js/5.4fa7070f.js",
    "revision": "8fc60e17282e5e80a0dd37a3e9da22f7"
  },
  {
    "url": "assets/js/6.d97bed69.js",
    "revision": "c5cffda10dee1b0a0e2f455d2edb67e2"
  },
  {
    "url": "assets/js/7.5ff37d2b.js",
    "revision": "d9dc7062929ab5abd5e5172bf0d7a6c5"
  },
  {
    "url": "assets/js/8.43ecb1fd.js",
    "revision": "1b2028c9183e3b278a7734061a380090"
  },
  {
    "url": "assets/js/9.d6e2829e.js",
    "revision": "f0bb285322a5d86b73102cf0be3a8581"
  },
  {
    "url": "assets/js/app.3d07433b.js",
    "revision": "ec3219c6247c646b6261bbbb7b839268"
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
    "url": "ddd/d.html",
    "revision": "0d97918a65891f2f38b0d8f619c9cbe9"
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
    "revision": "ed5535023df6a2ce0488d54dfbbf6d36"
  },
  {
    "url": "tools/demo.html",
    "revision": "82a864a81680a07a247dd8aff7e75552"
  },
  {
    "url": "tools/tabs.html",
    "revision": "a56c2f253b8b821066be575dcbd46d60"
  },
  {
    "url": "tools/vuepress.html",
    "revision": "721c4924776903e3fa171c105389c1d3"
  },
  {
    "url": "tools/代码高亮.html",
    "revision": "0cf1b69e1651cad8b71157bd76cbefcf"
  },
  {
    "url": "tools/使用外部组件.html",
    "revision": "04cff20f2c55115b6686b02fdc5dabbc"
  },
  {
    "url": "tools/导入代码片段.html",
    "revision": "fffff493d7d254ec61606a7df9589fb8"
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
