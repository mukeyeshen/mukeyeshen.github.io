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
    "revision": "ac2f26baef339ee70591d18024d8ef53"
  },
  {
    "url": "assets/css/0.styles.bcb9eea7.css",
    "revision": "614d3a2d899297dee0ddb681d49b534e"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/iconfont.b555cd18.svg",
    "revision": "b555cd1856984a1bbcc86791b54db341"
  },
  {
    "url": "assets/js/1.d5e0f71c.js",
    "revision": "d72d93ca581739c743e6fa257d260b51"
  },
  {
    "url": "assets/js/10.80e10cd1.js",
    "revision": "46a9a9f282c3e2375e626c87318f294f"
  },
  {
    "url": "assets/js/11.785cc840.js",
    "revision": "b0d51fe4a8c48ce2ae7cfac35536332d"
  },
  {
    "url": "assets/js/12.a655c943.js",
    "revision": "3e9f5f6457b0d2f0a617c188314a36bd"
  },
  {
    "url": "assets/js/13.f1c0bb6f.js",
    "revision": "cdcd689c22fdaae8baddac3514151268"
  },
  {
    "url": "assets/js/14.2b074e15.js",
    "revision": "e34b67a39a02889334a090b32eb12818"
  },
  {
    "url": "assets/js/15.a366ff58.js",
    "revision": "15c435db00d631f108b7ea91c96e1c43"
  },
  {
    "url": "assets/js/16.40a28747.js",
    "revision": "9a865e3aabeda18edf1ad80effb10e62"
  },
  {
    "url": "assets/js/17.9ad767bf.js",
    "revision": "3105e61b1d8d064fbe904e9200867bb5"
  },
  {
    "url": "assets/js/18.401a50ee.js",
    "revision": "50cc143804313497b78300663665559d"
  },
  {
    "url": "assets/js/19.9ed72c92.js",
    "revision": "c3eb5029abc50936e165e79d745e5ce0"
  },
  {
    "url": "assets/js/20.dff61ce1.js",
    "revision": "21dcdf6ce803286377b19bdc65938b7a"
  },
  {
    "url": "assets/js/21.8001da72.js",
    "revision": "22fe9089bb754af512fbdef209f6d941"
  },
  {
    "url": "assets/js/22.9f5a28cd.js",
    "revision": "24e7e3aaddba953ecbf1f9175502d360"
  },
  {
    "url": "assets/js/23.a3c66226.js",
    "revision": "5e6bee3d6489560f8577ae97606278eb"
  },
  {
    "url": "assets/js/24.b88a1e8b.js",
    "revision": "1cc0b4eeab2f7c0398bfd17dfb6a1fb2"
  },
  {
    "url": "assets/js/25.2e4a9080.js",
    "revision": "33d336afa0e0384f65b2db7abe151f24"
  },
  {
    "url": "assets/js/4.55408942.js",
    "revision": "aeeb0b63fb31912be78f577773c0f897"
  },
  {
    "url": "assets/js/5.aeb2ddb2.js",
    "revision": "723b7a6ee270c40594ea749605876a20"
  },
  {
    "url": "assets/js/6.7132634e.js",
    "revision": "e31b371e7dbc61f346ce16b4e11a883d"
  },
  {
    "url": "assets/js/7.d805b5ed.js",
    "revision": "f41f8d902e7abdb30fbac11a95b1c01c"
  },
  {
    "url": "assets/js/8.43cbf92a.js",
    "revision": "884236e79c49dcddd366fd74812cd24b"
  },
  {
    "url": "assets/js/9.c89a0480.js",
    "revision": "ae0d2b145abc548c86cdea0f7ab9eb69"
  },
  {
    "url": "assets/js/app.3519669a.js",
    "revision": "de92473d62a58f81a4fd7d8602dbe3f2"
  },
  {
    "url": "assets/js/vendors~flowchart.06ba1d5e.js",
    "revision": "8093d7337b91d47f4cff2ee27f525d33"
  },
  {
    "url": "avatar.png",
    "revision": "faf48f93cf73879cc0112a71b3ecfd17"
  },
  {
    "url": "banner.jpg",
    "revision": "5a4d3155b54272e04fed6d2eead15c18"
  },
  {
    "url": "blogs/其他/国内免费公共dns.html",
    "revision": "66cd2ea259009a192b4e3453d4f7b527"
  },
  {
    "url": "blogs/其他/苹果破解安装.html",
    "revision": "4abaa902200583932f2aa2fadc19eccb"
  },
  {
    "url": "blogs/其他/网易云音乐mp3外链、真实地址下载方法.html",
    "revision": "7e1cd272a9a8b7e1ed93c632692d4290"
  },
  {
    "url": "blogs/图床/PicGo+Gitee搭建个人图床.html",
    "revision": "8c3817e664b6e54e4ae0bf0d6957f003"
  },
  {
    "url": "blogs/图床/Typora 支持自定义图片上传服务了.html",
    "revision": "566e8cf90c916d3b0a465c3130d2d6ed"
  },
  {
    "url": "blogs/blog搭建.html",
    "revision": "e21781ed5697599cf292cb48835d9881"
  },
  {
    "url": "blogs/Node/node环境搭建.html",
    "revision": "5eccf85220f6a8d6b7dba29472f3db55"
  },
  {
    "url": "blogs/NoteBook.html",
    "revision": "2e90d5581b3713d3251c86142b85c330"
  },
  {
    "url": "blogs/v2ray/从零开始史上最详尽V2Ray搭建.html",
    "revision": "35991ca55cf36c31a58acceb760447b0"
  },
  {
    "url": "blogs/v2ray/基于heroku部署v2ray.html",
    "revision": "b1be5922499963cace2385c9f1a5718d"
  },
  {
    "url": "blogs/v2ray/基于kintohub免费空间部署v2ray.html",
    "revision": "75a8f8b118de89271cd78c0974e13701"
  },
  {
    "url": "blogs/v2ray/Windows系统安装最新版Aria2客户端及使用教程.html",
    "revision": "32db974619360c054041a5c1d6400e9f"
  },
  {
    "url": "categories/百度网盘/index.html",
    "revision": "fc4710a9aa7612751cf93c2c1dc43573"
  },
  {
    "url": "categories/图床/index.html",
    "revision": "1a49349944b2f134f585372183bc9656"
  },
  {
    "url": "categories/学习记/index.html",
    "revision": "5bf3bb52e33393e7a02b660d31b62815"
  },
  {
    "url": "categories/index.html",
    "revision": "b66e4f19026e5cac9d36624c75f1e3ca"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "5347847f0c41c9309b8b23f1b5ee0911"
  },
  {
    "url": "categories/Node/index.html",
    "revision": "92dd11c3e7db822926af673b5a2a493f"
  },
  {
    "url": "categories/NoteBook/index.html",
    "revision": "b45d1f029a12dd8daa10a9428a02ccf5"
  },
  {
    "url": "categories/V2Ray/index.html",
    "revision": "09b84fd25b0f184e1f8722faa91aa1df"
  },
  {
    "url": "hero_write.png",
    "revision": "faf48f93cf73879cc0112a71b3ecfd17"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "images/line_bg.svg",
    "revision": "a568162c2e16b799f5d56634d9e23e46"
  },
  {
    "url": "index.html",
    "revision": "24272a641c7b334b36fd7d15770bd545"
  },
  {
    "url": "logo.png",
    "revision": "faf48f93cf73879cc0112a71b3ecfd17"
  },
  {
    "url": "tag/百度网盘/index.html",
    "revision": "578e593d400bf42747b848aa8ae7b3e6"
  },
  {
    "url": "tag/博客搭建/index.html",
    "revision": "5c6df2882a56d3c14524fcaacb501deb"
  },
  {
    "url": "tag/其他/index.html",
    "revision": "0cd0c3f33dd5a7920368f75e66027b19"
  },
  {
    "url": "tag/随手记/index.html",
    "revision": "fbc7c568d45318ea93f32d0b5e436bf3"
  },
  {
    "url": "tag/图床/index.html",
    "revision": "7248e982422e8c7144c3896083f1cb04"
  },
  {
    "url": "tag/index.html",
    "revision": "ff48852cacc54f26b3d3f03af87dea1a"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "7fd344cd89f0c33fecea7b6c7e4e8488"
  },
  {
    "url": "tag/V2Ray/index.html",
    "revision": "7befab4b73724fc8c894a8191ea5951c"
  },
  {
    "url": "timeline/index.html",
    "revision": "2f3aab8a519bb63ab1e4bddcb117f53b"
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
