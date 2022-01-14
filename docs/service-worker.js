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
    "revision": "f89e2710a6029b0a877d08557672220d"
  },
  {
    "url": "assets/css/0.styles.33af9a6d.css",
    "revision": "b7b1eff23b574f0da4c7789a27e96029"
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
    "url": "assets/js/10.daeaeafd.js",
    "revision": "fea33069c886e39969e2a6a170a97257"
  },
  {
    "url": "assets/js/11.baa6195e.js",
    "revision": "7f9578f8651174f4ba3272186e5c4c96"
  },
  {
    "url": "assets/js/12.d8eca574.js",
    "revision": "661271117c32a105ac2fc00838a2ebcb"
  },
  {
    "url": "assets/js/13.b2b0e1c3.js",
    "revision": "ee8d890a9f7a6b6a584f6e6632d49aac"
  },
  {
    "url": "assets/js/14.b99988d8.js",
    "revision": "5db551817dd020236a96d1766448fdc1"
  },
  {
    "url": "assets/js/15.8160c6aa.js",
    "revision": "63ca36b6536265caea0abcba0e969809"
  },
  {
    "url": "assets/js/16.cdeee57d.js",
    "revision": "512ce77ec74649a95440cf67932915a9"
  },
  {
    "url": "assets/js/17.6ef55016.js",
    "revision": "3ed0787a7a7c74d5b06ad8fcb99ee4c9"
  },
  {
    "url": "assets/js/18.3486f42d.js",
    "revision": "2229eabb19d250aea5b998eaa423c958"
  },
  {
    "url": "assets/js/19.3c4b5cf4.js",
    "revision": "f5ce99539fcf97c46d1641a3aebe0150"
  },
  {
    "url": "assets/js/2.36de0bee.js",
    "revision": "92d63ec1d66d9ae7112dd6dcea1dfd74"
  },
  {
    "url": "assets/js/20.3c850bf7.js",
    "revision": "8e349623b1c60e95081444b9cade7faf"
  },
  {
    "url": "assets/js/21.23030f51.js",
    "revision": "4bfab6545f06e1fe5a4143a823ff799b"
  },
  {
    "url": "assets/js/22.722d999e.js",
    "revision": "6eb76948f525b34f104d59f5031fe250"
  },
  {
    "url": "assets/js/23.734195b0.js",
    "revision": "8314d353969c3943d738036ea8577d9e"
  },
  {
    "url": "assets/js/24.672c5cd8.js",
    "revision": "ec5b9b95a065f8020392bd7cb3063274"
  },
  {
    "url": "assets/js/25.2841cca6.js",
    "revision": "ef7887a46d6916115c9db55381d025ad"
  },
  {
    "url": "assets/js/26.eaa6599c.js",
    "revision": "a030bb8a39d6a5f7ea3c0a01961c9fcf"
  },
  {
    "url": "assets/js/27.c7c9621a.js",
    "revision": "e503d7dbd712bb76944da830f729dad2"
  },
  {
    "url": "assets/js/28.eb5e96cf.js",
    "revision": "933e325726635cdaa1fdec2c471a165e"
  },
  {
    "url": "assets/js/29.cd6861b1.js",
    "revision": "a30bdac730f8b6f118e436330a4b4472"
  },
  {
    "url": "assets/js/3.86fd3127.js",
    "revision": "913c6a0b3dcfd857b8358e4b8ad0c651"
  },
  {
    "url": "assets/js/30.ae323e1d.js",
    "revision": "51abe6cc4e60171184d33b9072b4957d"
  },
  {
    "url": "assets/js/31.21c569bb.js",
    "revision": "6eb83d6bcd6448c1ec0f2d2607431762"
  },
  {
    "url": "assets/js/32.27c3ac71.js",
    "revision": "15ece5921fdcd2ab32bce9ab967302d1"
  },
  {
    "url": "assets/js/33.b0b9e269.js",
    "revision": "bcfcbecc57a037b3d54b3c55e5b53220"
  },
  {
    "url": "assets/js/34.fde6117e.js",
    "revision": "92486d03e547e068e100e600182767e2"
  },
  {
    "url": "assets/js/35.d14317c3.js",
    "revision": "976b9f754e89ab4cfcde05638b2e44e5"
  },
  {
    "url": "assets/js/36.43d82daf.js",
    "revision": "3664dd7a6ec6de45ae6e06e498748380"
  },
  {
    "url": "assets/js/37.9fe48f97.js",
    "revision": "21afe690955cab985ed9c297518faecd"
  },
  {
    "url": "assets/js/38.1db178d4.js",
    "revision": "3df3046110d918ddbdd6b7c512520642"
  },
  {
    "url": "assets/js/39.7f6d7263.js",
    "revision": "d3992602692544f29b7bb66520f69ee2"
  },
  {
    "url": "assets/js/4.d4339d54.js",
    "revision": "568b91f935745641421e04e9093abc85"
  },
  {
    "url": "assets/js/40.d60a2c55.js",
    "revision": "4368e42ebbc0aadb644adb011bd6b03d"
  },
  {
    "url": "assets/js/41.840322b8.js",
    "revision": "1bff14f6da5e0cc474b4a7ab18a5643c"
  },
  {
    "url": "assets/js/42.1797f774.js",
    "revision": "c916c42a6a819e026f61771ca979b2a5"
  },
  {
    "url": "assets/js/43.dbfdd292.js",
    "revision": "2f0982629ec174b87230e83f022d619e"
  },
  {
    "url": "assets/js/44.b2700eca.js",
    "revision": "d81329d04de3e3fe2008f47d706aaaf8"
  },
  {
    "url": "assets/js/45.f91fcc15.js",
    "revision": "5bd9e7c23ec84683a4ee744ff4bb41bf"
  },
  {
    "url": "assets/js/46.54d7ca46.js",
    "revision": "4750c416d94f34666fd703e06f3775e2"
  },
  {
    "url": "assets/js/47.7ae13b45.js",
    "revision": "f4405e900dfe82ae459171bf4fa2916a"
  },
  {
    "url": "assets/js/48.04268038.js",
    "revision": "20394ca1c7ac082e6ba30e044662fc24"
  },
  {
    "url": "assets/js/49.f549f8f9.js",
    "revision": "0df5729b3ecd1b53f7ce02d20f3f1fc7"
  },
  {
    "url": "assets/js/5.0aae2af5.js",
    "revision": "fc518581ddd59bebe7a76d155e624d71"
  },
  {
    "url": "assets/js/50.8fefe758.js",
    "revision": "95958ecd80e533f36c9e4734f4f44091"
  },
  {
    "url": "assets/js/51.65e78a41.js",
    "revision": "1511145d77fd2f63ef1478b6be9b5a14"
  },
  {
    "url": "assets/js/52.49fa98f5.js",
    "revision": "761a96f7e4694513727dde0913918f32"
  },
  {
    "url": "assets/js/53.db4fea53.js",
    "revision": "2493a69282a9c4b234a34a12a82a85f7"
  },
  {
    "url": "assets/js/54.583b648c.js",
    "revision": "4e08330e62c20264c6fc60082a27cefa"
  },
  {
    "url": "assets/js/55.fc8cfa5d.js",
    "revision": "324f63b257f7bb61a76df0497e2fdeae"
  },
  {
    "url": "assets/js/56.6e3a8941.js",
    "revision": "79310a6c393fc673dc818549f2f07fee"
  },
  {
    "url": "assets/js/57.d35f0830.js",
    "revision": "8f098f5b2d6b403adf3dda9da2017de9"
  },
  {
    "url": "assets/js/58.7476bf0f.js",
    "revision": "3f3725fdf6c3d25d755007f049fefcdc"
  },
  {
    "url": "assets/js/59.a0326c47.js",
    "revision": "dcd8b4c5f507f9efc9bfe699b19eeb6f"
  },
  {
    "url": "assets/js/6.c374ef02.js",
    "revision": "9d19c5e0ab9781edcb742eee42082f5a"
  },
  {
    "url": "assets/js/60.a9f1adcb.js",
    "revision": "09e1c2779753337e444148a05baa0679"
  },
  {
    "url": "assets/js/61.202d7908.js",
    "revision": "47ff924886f205b22ba3b7176c171714"
  },
  {
    "url": "assets/js/62.7231e036.js",
    "revision": "c3028d6f17b84c30364546d55cf19227"
  },
  {
    "url": "assets/js/63.6b716b17.js",
    "revision": "92172d7417f3847bb52bbcf060381c99"
  },
  {
    "url": "assets/js/64.19c19d75.js",
    "revision": "b292839ace8d52152284098f8a3d26a7"
  },
  {
    "url": "assets/js/65.58c26d3f.js",
    "revision": "f93719a4c7d17f6432529b2e9f1c6cbe"
  },
  {
    "url": "assets/js/66.3dae798f.js",
    "revision": "bac55bf5f7553656db1ef1e94c3424e0"
  },
  {
    "url": "assets/js/67.65b52fbf.js",
    "revision": "003f7502f23cc542a3dcb9315fd38d94"
  },
  {
    "url": "assets/js/68.23cc1ac7.js",
    "revision": "4822eaa0e602d7be91b2de939eac0d6f"
  },
  {
    "url": "assets/js/69.b3368daa.js",
    "revision": "eb1a8c150b9989e2bd1d2bb66a6b796c"
  },
  {
    "url": "assets/js/7.900f1c96.js",
    "revision": "cd06e3f2540369ebd74565f4219aa06a"
  },
  {
    "url": "assets/js/70.4b338fb7.js",
    "revision": "34110b98dd6e3d95231655956521a031"
  },
  {
    "url": "assets/js/71.735e324b.js",
    "revision": "44cb3fa120acfc496ae850684451ebeb"
  },
  {
    "url": "assets/js/72.aa68887b.js",
    "revision": "c332efcdc80193ab5fe6c7443867f119"
  },
  {
    "url": "assets/js/73.0c4984d0.js",
    "revision": "68632bc7441c3227dcf067ca2704352d"
  },
  {
    "url": "assets/js/74.f22844ae.js",
    "revision": "1fd9b7ce6fce6c9b7ceb3873dd172417"
  },
  {
    "url": "assets/js/75.9838d436.js",
    "revision": "a358fcfc173ec1e3b9006d461b6921a4"
  },
  {
    "url": "assets/js/8.17e9434f.js",
    "revision": "317601aad3a98c428473d2eaf2301e78"
  },
  {
    "url": "assets/js/9.998784bd.js",
    "revision": "88bc3f0cc77e258a16a2455d34304ac6"
  },
  {
    "url": "assets/js/app.0d648c78.js",
    "revision": "903e26d1aa3abe0f4772494967045f59"
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
    "revision": "69749604b4f67a0cdb4868a6ce5e9b15"
  },
  {
    "url": "css/reset.html",
    "revision": "3b1d5bbd9c50b6eb4e3bc6d23e744588"
  },
  {
    "url": "css/scrollBar.html",
    "revision": "9d2313c5333d56bffc2844c9056d090a"
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
    "revision": "40bbc0cf0a4eb5033901cf1a311a79e0"
  },
  {
    "url": "javascript/bom/Navigator.sendBeacon.html",
    "revision": "7c9726d3d5596e50cdc9ef09e112c276"
  },
  {
    "url": "javascript/bom/sessionStorage.html",
    "revision": "d29ade4550e648005805ee87f976c3e4"
  },
  {
    "url": "javascript/dom/api-drag.html",
    "revision": "bd1370fd3a05b4e258fe7daba6bfc8e5"
  },
  {
    "url": "javascript/dom/defer与async.html",
    "revision": "99fb1810958c53cb685e1252ba36d7db"
  },
  {
    "url": "javascript/dom/preload与prefetch.html",
    "revision": "6257947802b6791e7e4af6a79983ca0a"
  },
  {
    "url": "javascript/ESM与现代浏览器.html",
    "revision": "753b094eeec4d9122b3711b390bbe662"
  },
  {
    "url": "javascript/微任务宏任务执行顺序.html",
    "revision": "dfc4440d9a9c078548c569001a188368"
  },
  {
    "url": "others/interview/a == 1 && a == 2 && a == 3.html",
    "revision": "e2fc4b4d4f27d419b973d707dd91fd08"
  },
  {
    "url": "others/interview/遍历的异步写法.html",
    "revision": "164add7509971d7f0c85467892f6f9c1"
  },
  {
    "url": "others/JSON.html",
    "revision": "1e5e38ee581163f6703d73b3988239cd"
  },
  {
    "url": "others/unicode和utf-8/unicode.html",
    "revision": "5f9cd72fb15323129ba7b89618317163"
  },
  {
    "url": "others/unicode和utf-8/utf-8.html",
    "revision": "ee603b2141c26680759874b5b9310fdb"
  },
  {
    "url": "others/web安全.html",
    "revision": "678749568c2c46824d68a39dbf82348e"
  },
  {
    "url": "others/待整理的.html",
    "revision": "257542352181d9248a1bdf5736b5a5fd"
  },
  {
    "url": "others/跨域问题.html",
    "revision": "aba80caddcd0933bc435afb68c879f7e"
  },
  {
    "url": "tools/alias.config.js.html",
    "revision": "4c42fdc8e73b89304d8479522dd031a8"
  },
  {
    "url": "tools/editorconfig.html",
    "revision": "bb6a60b12ae4e004fae0c389b2cb4a79"
  },
  {
    "url": "tools/prettierrc.html",
    "revision": "35d585aec3b83237e592dca7d6ba87b6"
  },
  {
    "url": "tools/typora快捷键.html",
    "revision": "6ba2a57fa60c3244b1517bcc55d78c5f"
  },
  {
    "url": "tools/webstorm/创建宏.html",
    "revision": "9eec0e19774c59d2e54bb63c63a3e195"
  },
  {
    "url": "tools/webstorm/快捷键.html",
    "revision": "0060b7553b0af6cfe413a88efcde9798"
  },
  {
    "url": "tools/yarn.html",
    "revision": "4dc5ae5e10c4addb5dc06ff8490da199"
  },
  {
    "url": "tools/yed-graph-editor快捷键.html",
    "revision": "b302e5555549dc256bd418a17b34a1ed"
  },
  {
    "url": "tools/版本管理工具-git/基础.html",
    "revision": "34b32740946f354b03a84af8a5be5055"
  },
  {
    "url": "tools/版本管理工具-git/需要掌握的.html",
    "revision": "cc5a3f212094d2419a1b8d30967a738e"
  },
  {
    "url": "脚手架工具/browserslist.html",
    "revision": "cfb75da52bb025a1b3a44bf9810436ab"
  },
  {
    "url": "脚手架工具/eslint/01-安装.html",
    "revision": "95784031368988adbb750cb40046c7e9"
  },
  {
    "url": "脚手架工具/eslint/02-使用.html",
    "revision": "e901047f7f4d2f5bab3f1417063d8df6"
  },
  {
    "url": "脚手架工具/eslint/03-vue开发通用的配置.html",
    "revision": "5efad542ebfe05572a29e32a29315658"
  },
  {
    "url": "脚手架工具/eslint/04-配合husky与lint-staged.html",
    "revision": "fd76e7df68f695733bc84ae487efa042"
  },
  {
    "url": "脚手架工具/eslint/05-@babel下的eslint-parser.html",
    "revision": "dde588a201a88aec2ba582551cf07403"
  },
  {
    "url": "脚手架工具/umd模块打包方法.html",
    "revision": "fbed5967c1fa69609ab57e53b5e9d87e"
  },
  {
    "url": "脚手架工具/vue-cli/01-基本配置.html",
    "revision": "5c6a8b06b24ef0f744407ba732b5e14c"
  },
  {
    "url": "脚手架工具/vue-cli/02-loader.html",
    "revision": "cccbd6eba38209b3144da9f180dfcb1c"
  },
  {
    "url": "脚手架工具/vue-cli/03-plugin.html",
    "revision": "67554a3f79075ff2444f40aeff9d262d"
  },
  {
    "url": "脚手架工具/vue-cli/env.html",
    "revision": "ac2a5156491fd18d5d6ad3bb9cacffaf"
  },
  {
    "url": "脚手架工具/vue-cli/loader之image-webpack-loader.html",
    "revision": "12dc02466d44b97c6b2a8f7070d51120"
  },
  {
    "url": "脚手架工具/vue-cli/others.html",
    "revision": "3cc0859b4b7e049e71f018ec12688d8c"
  },
  {
    "url": "脚手架工具/vue-cli/webpack-chain.html",
    "revision": "fd94fbfb5d152700c81798a82455b5ca"
  },
  {
    "url": "脚手架工具/vue-cli/新增webpack配置.html",
    "revision": "282c44db51b2d478910281972bb6722e"
  },
  {
    "url": "脚手架工具/vue-cli/查看webpack配置.html",
    "revision": "6118fa684c6bf7eda2b9fce66f57662d"
  },
  {
    "url": "脚手架工具/vue-cli/配置sass.html",
    "revision": "1303ba1b4f0f826dc708fbeefc966f56"
  },
  {
    "url": "脚手架工具/vue-cli/配置svg.html",
    "revision": "e4ccd2dd0ea08061d8e10bd93c4d58a5"
  },
  {
    "url": "脚手架工具/vuepress.html",
    "revision": "49418f8499fcc65a9adb17adcd618670"
  },
  {
    "url": "脚手架工具/webpack/01-entry.html",
    "revision": "77eb92f46535b8d208de6768be083fa9"
  },
  {
    "url": "脚手架工具/webpack/02-output.html",
    "revision": "d6ab27dc3a9e583baaf2801a71818bec"
  },
  {
    "url": "脚手架工具/webpack/03-plugin.html",
    "revision": "a5ecc646263be6a0f71dd6b5272d1ad7"
  },
  {
    "url": "脚手架工具/webpack/04-module.html",
    "revision": "0d53db8d333cb5165d80b13e8c07d3aa"
  },
  {
    "url": "脚手架工具/webpack/05-resolve.html",
    "revision": "a97666a9699eb756116d354509d2524a"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/others.html",
    "revision": "b78dd6e506b7f25564e70cd412478622"
  },
  {
    "url": "脚手架工具/webpack/06-optimization/splitChunks.html",
    "revision": "6c68dcfa13d6246f9227d520c6dfacf5"
  },
  {
    "url": "脚手架工具/webpack/07-其他配置.html",
    "revision": "cc95b513143507d4138b4da90d012a64"
  },
  {
    "url": "脚手架工具/webpack/loader之webpack-bundle-analyzer.html",
    "revision": "dcb01f65f04b59043ea2b9dce0dff861"
  },
  {
    "url": "脚手架工具/webpack/others.html",
    "revision": "a60d46f4ab5817d9816b1474fb72ffb4"
  },
  {
    "url": "脚手架工具/webpack/webpack之devtool .html",
    "revision": "b41f5174fe1781f75bfa17a86ff6cb70"
  },
  {
    "url": "脚手架工具/webpack/webpack之hash.html",
    "revision": "e6a54ab7b4e5bab99f59f0719b7e743f"
  },
  {
    "url": "脚手架工具/webpack/webpack之magic-comments.html",
    "revision": "7e822558d75dc621222c852ee7aacb7c"
  },
  {
    "url": "脚手架工具/webpack/webpack之runtime与manifest.html",
    "revision": "7f62f4e88db812d03ebb6883febdbcfb"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理commonjs.html",
    "revision": "95ce34a78f6bf582664e8024e00aca60"
  },
  {
    "url": "脚手架工具/webpack/webpack之处理esmodule.html",
    "revision": "9f3e5255206733e3d7bbbbd70f5e6f70"
  },
  {
    "url": "脚手架工具/webpack/webpack之模块路径解析规则.html",
    "revision": "a8f5fffae0fd93d96bbec1bfe94f032d"
  },
  {
    "url": "脚手架工具/webpack/模块方法之requireContext.html",
    "revision": "f0cd6021efc3b2fc88fa80ec03e02fd4"
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
