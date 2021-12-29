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
    "revision": "acf6ca2f3b7f678aa2eeca01deb606c4"
  },
  {
    "url": "aaa/a.html",
    "revision": "f96ade317b3fa0bc2653caabc09b11ec"
  },
  {
    "url": "aaa/bbb/b.html",
    "revision": "b8ed0aef1b742391003bc60330569f9f"
  },
  {
    "url": "aaa/bbb/index.html",
    "revision": "9cff563a36412f29fd8551885dd095d8"
  },
  {
    "url": "assets/css/0.styles.cb7bbc99.css",
    "revision": "0b677b03cdd018c7c482d92afecdeed9"
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
    "url": "assets/js/10.2ec3fe75.js",
    "revision": "5b2cfadeb9f58eaf1a01fd3f05358aa4"
  },
  {
    "url": "assets/js/11.1bee5845.js",
    "revision": "8a98221ff0912ad56021215da4e058bd"
  },
  {
    "url": "assets/js/12.df50b5be.js",
    "revision": "66c15869aff5e89066f10113c45def75"
  },
  {
    "url": "assets/js/13.e71942e0.js",
    "revision": "9c47ed6f0378b6caab8dd8d17cc314de"
  },
  {
    "url": "assets/js/14.7f8cbe7d.js",
    "revision": "59bfbbafb7eac594175bdbc681a76153"
  },
  {
    "url": "assets/js/15.f3a2f229.js",
    "revision": "58544cfe45e11fcaf51652f9d0e147e8"
  },
  {
    "url": "assets/js/16.470279d7.js",
    "revision": "2697ad1e55553fb9373b8c86422c1583"
  },
  {
    "url": "assets/js/17.e4fa0e47.js",
    "revision": "0c83460739d58b79b63a5f35e5ba8737"
  },
  {
    "url": "assets/js/18.a4cb50ed.js",
    "revision": "67cf13035ed0755e55274a3606aee831"
  },
  {
    "url": "assets/js/19.30604782.js",
    "revision": "0b9f685fe7158b5011d921c7332518ce"
  },
  {
    "url": "assets/js/2.e2c1967b.js",
    "revision": "2b8f71e928f37a81540c755cc1e5c893"
  },
  {
    "url": "assets/js/20.76b63d8e.js",
    "revision": "e69faf1bbe4f21fc4832b5c320f9d124"
  },
  {
    "url": "assets/js/3.ebd7afd3.js",
    "revision": "b8bc017fb24bfda9934f6e316117a292"
  },
  {
    "url": "assets/js/4.d532db60.js",
    "revision": "a29f2bbae5682f0f25716ac1c8c624d4"
  },
  {
    "url": "assets/js/5.09c45b76.js",
    "revision": "adb055300dfc4317c7685b7999b7ab42"
  },
  {
    "url": "assets/js/6.e8573d2a.js",
    "revision": "b11bd7fd538a521979d710876f2082a7"
  },
  {
    "url": "assets/js/7.4993cd60.js",
    "revision": "99d1a969428829c841dbbf397b555f43"
  },
  {
    "url": "assets/js/8.ed5b7005.js",
    "revision": "8c815a299cf02ab981f20e4083dc3037"
  },
  {
    "url": "assets/js/9.764b445a.js",
    "revision": "d161a4246ce22200a6268eb20e7a4f80"
  },
  {
    "url": "assets/js/app.728b7384.js",
    "revision": "689ac6406804048fee8c9da77122dacf"
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
    "revision": "261baada5bd66aea72344e837bfd3ef2"
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
    "revision": "90cfaa013d38e87eb27b2d9009313c61"
  },
  {
    "url": "tools/demo.html",
    "revision": "aba3a42a17cc2850dca7e6f1ab11da8a"
  },
  {
    "url": "tools/tabs.html",
    "revision": "30be31779c85b9194cd6c5f7046473ee"
  },
  {
    "url": "tools/vuepress.html",
    "revision": "4a70e67df4d1c9aea2efdb769a8272aa"
  },
  {
    "url": "tools/代码高亮.html",
    "revision": "13a78d6613c93f42a7bd4711cb5f7559"
  },
  {
    "url": "tools/使用外部组件.html",
    "revision": "073cba10a779d94d79c168fc6c553f40"
  },
  {
    "url": "tools/导入代码片段.html",
    "revision": "f5cc407a62d144f2b54442cf4a22db0f"
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
