if(!self.define){let e,c={};const n=(n,i)=>(n=new URL(n+".js",i).href,c[n]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=c,document.head.appendChild(e)}else e=n,importScripts(n),c()})).then((()=>{let e=c[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,s)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(c[a])return;let f={};const d=e=>n(e,a),o={module:{uri:a},exports:f,require:d};c[a]=Promise.all(i.map((e=>o[e]||d(e)))).then((e=>(s(...e),f)))}}define(["./workbox-330ce1d9"],(function(e){"use strict";e.setCacheNameDetails({prefix:"quasar-project"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/ErrorNotFound.979f8571.js",revision:"f92cf63bc51b3dbc00fbc816e2422144"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/index.ca37210b.js",revision:"61785c93d6ab1d802fa5ed595bd4e938"},{url:"assets/index.f55fc194.css",revision:"ae8a1afb3c6030d67fb7e8d53f129b14"},{url:"assets/IndexPage.c728a4e3.js",revision:"083725899b2b23c80ca5924993741043"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/MainLayout.5c597b8d.css",revision:"73c13ea0efe29d8ed3c574654ddc8637"},{url:"assets/MainLayout.98e7fbeb.js",revision:"db34122716e7935ce000e09ddf67bd9c"},{url:"assets/QBtn.4ed87e91.js",revision:"43702ed4e6d7d4fbc3d9ace0dcdb4d63"},{url:"assets/QIcon.079a276e.js",revision:"2865482a778cfa6a7ff59a83a9448275"},{url:"assets/use-dark.05feb5a6.js",revision:"3366f9379a2c3ef7c7c33bc642b1d44e"},{url:"favicon.ico",revision:"e5bbf93f903dc3f78b7869324db0054e"},{url:"icon.png",revision:"a0a54e148db764b4d18eac733e7b3a26"},{url:"icons/apple-icon-120x120.png",revision:"bcc3b8b2428199f7f43b05b960659e0b"},{url:"icons/apple-icon-152x152.png",revision:"9fd15a171a96dfd676595e0e5b1d010a"},{url:"icons/apple-icon-167x167.png",revision:"7981ac3da52578f5dead5c067c24e6e9"},{url:"icons/apple-icon-180x180.png",revision:"012bdf6254d01e8f86496f1b25563304"},{url:"icons/apple-launch-1080x2340.png",revision:"03c818449e8ff847038057f31ab1c269"},{url:"icons/apple-launch-1125x2436.png",revision:"ddeef47744b716c13bf526835a1b9f56"},{url:"icons/apple-launch-1170x2532.png",revision:"82e2011491869bf70970b01916a1c321"},{url:"icons/apple-launch-1179x2556.png",revision:"6af9740b39841c2ed44c2c2326a78a87"},{url:"icons/apple-launch-1242x2208.png",revision:"c60581cc95caa176ae72b02ca6f8b6f8"},{url:"icons/apple-launch-1242x2688.png",revision:"b846aa59cbf835c0eca79fdf45f130c0"},{url:"icons/apple-launch-1284x2778.png",revision:"7bef006ecf898e35cb86711d65e95d9b"},{url:"icons/apple-launch-1290x2796.png",revision:"a3f856ddc90883dba065ba5e92372664"},{url:"icons/apple-launch-1536x2048.png",revision:"7b6fa1fc2d2a641bf0943fdd6a4e72a7"},{url:"icons/apple-launch-1620x2160.png",revision:"38df63fe8f8c7b9e43edfc8f9d55e40b"},{url:"icons/apple-launch-1668x2224.png",revision:"e2b20130af9afbaa1aee0048bf221f4b"},{url:"icons/apple-launch-1668x2388.png",revision:"0e445bf705124800f9d8a151d7ccddf2"},{url:"icons/apple-launch-2048x2732.png",revision:"a10f48ed0b682cb80880aa744a17b894"},{url:"icons/apple-launch-750x1334.png",revision:"617fd5611736dbd71f1edea36edc3cd9"},{url:"icons/apple-launch-828x1792.png",revision:"1b8e9e68937c05c340bf08157819f749"},{url:"icons/favicon-128x128.png",revision:"604a44d2d23b66e68e02c7cb9597a112"},{url:"icons/favicon-16x16.png",revision:"949ca320c5e1477f64b1bfaa0820849d"},{url:"icons/favicon-32x32.png",revision:"a9e0284f745e5aeb74962f79f5051ca0"},{url:"icons/favicon-96x96.png",revision:"3d2fca9405d5862fc5d2bfa181bd3d9b"},{url:"icons/icon-128x128.png",revision:"604a44d2d23b66e68e02c7cb9597a112"},{url:"icons/icon-192x192.png",revision:"85bf0fdd9ab4b5cf4d1923e109b02518"},{url:"icons/icon-256x256.png",revision:"d236be8bb9ca3459489f331fc374d612"},{url:"icons/icon-384x384.png",revision:"dd8f3533a2706d5c267113b254916c87"},{url:"icons/icon-512x512.png",revision:"a99b5bf885f09e818d8ecb153e0f813e"},{url:"icons/ms-icon-144x144.png",revision:"3dab34ccd8cf9528ce97fd8c9f4c813c"},{url:"icons/safari-pinned-tab.svg",revision:"f888746ed12424ad67311849c7da50b8"},{url:"index.html",revision:"0262e9d3d3570b16d7d60337073d7771"},{url:"manifest.json",revision:"e91bc2ba42486231dbc867c7469d2dd2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
