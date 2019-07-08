importScripts('/scholarships/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/scholarships/_nuxt/79f862cbbba570ae28d0.js",
    "revision": "7aea506ce59aaf616b31e68fc6610017"
  },
  {
    "url": "/scholarships/_nuxt/c663abdd645dda31e836.js",
    "revision": "c9b931153814431ada552883698b04dc"
  },
  {
    "url": "/scholarships/_nuxt/f3cdce1a87e8100807c9.js",
    "revision": "6ba87b868581f939798a8ee050fa88b0"
  },
  {
    "url": "/scholarships/_nuxt/f59d7ecd09eaa7bc8fa6.js",
    "revision": "b241406e22f779f73c4f1d0d95f4950f"
  }
], {
  "cacheId": "scholarships",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/scholarships/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/scholarships/.*'), workbox.strategies.networkFirst({}), 'GET')
