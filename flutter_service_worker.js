'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "67128811eeeec67a3744556bda96e755",
"assets/assets/getStartedImage.png": "3d009e83d58694a7f303fe927d5bf725",
"assets/assets/gifs/splashScreen.gif": "d48f1d61f4d1f8e5d657fd63bcc92f63",
"assets/FontManifest.json": "9b7cd598c2610c799474ef4aa9b5777b",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "3e845e8658c6958387d9d424e17cd99b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "51d23d1c30deda6f34673e0d5600fd38",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "d51b09f7b8345b41dd3b2201f653c62b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ea892e09437fcaa050b2b15c53173b7",
"icons/android-icon-144x144.png": "7c7395b654f33a7a4d543b7bbeef611b",
"icons/android-icon-192x192.png": "a7e01a9718d4142da958ff429e5bf5ab",
"icons/android-icon-36x36.png": "fc71ffac68a370e1fb6c19aefde54ff3",
"icons/android-icon-48x48.png": "e74533414973114307b74eb2629fd1c7",
"icons/android-icon-72x72.png": "87bb6e16179eca5acda371c124e5f3c4",
"icons/android-icon-96x96.png": "be44f855d48f7372678ebdabce90faa1",
"icons/apple-icon-114x114.png": "c82f446ac6740f85b6cd8bb8a664324f",
"icons/apple-icon-120x120.png": "35f96c82e6298e13772b3516f955bba7",
"icons/apple-icon-144x144.png": "7c7395b654f33a7a4d543b7bbeef611b",
"icons/apple-icon-152x152.png": "22fc0811cd241edc080d882629568571",
"icons/apple-icon-180x180.png": "2949f1d6b7f869707b84e2a2c6aa00b0",
"icons/apple-icon-57x57.png": "7a1002053b0ade45932a1a6d61c5b178",
"icons/apple-icon-60x60.png": "cb7939ad6b3da257f05e7b9d3f5c7faa",
"icons/apple-icon-72x72.png": "87bb6e16179eca5acda371c124e5f3c4",
"icons/apple-icon-76x76.png": "0099374413a00294947b29fb564eb704",
"icons/apple-icon-precomposed.png": "654cc14fef2e4374f484789b9a134c41",
"icons/apple-icon.png": "654cc14fef2e4374f484789b9a134c41",
"icons/browserconfig.xml": "97775b1fd3b6e6c13fc719c2c7dd0ffe",
"icons/favicon-16x16.png": "a1bd24a855d4ad356f28bdf0a1b50b78",
"icons/favicon-32x32.png": "85aa521f110cb3445dc1295827d80a92",
"icons/favicon-96x96.png": "be44f855d48f7372678ebdabce90faa1",
"icons/favicon.ico": "c3009fee9e310728b06434ed75a49095",
"icons/manifest.json": "baf14da92e2653caaceebb43ab91763d",
"icons/ms-icon-144x144.png": "7c7395b654f33a7a4d543b7bbeef611b",
"icons/ms-icon-150x150.png": "826df29d0a88d22f8aba69461d4c77ed",
"icons/ms-icon-310x310.png": "5f60b224f49e2ee3fc2e21820b91e8bb",
"icons/ms-icon-70x70.png": "d3ac0a1113eb9e4c0454c06dae10ab5d",
"index.html": "8bdb57efb112e4e694a65630cd1b5fad",
"/": "8bdb57efb112e4e694a65630cd1b5fad",
"main.dart.js": "49be3ae5acfb35da5c8630fb0166471b"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
