'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5163a309bf717f813bbb4830294af051",
"assets/assets/appicon.png": "a1f95a8c056aec4b5fd4817be4d6c3a0",
"assets/assets/getStartedImage.png": "3d009e83d58694a7f303fe927d5bf725",
"assets/assets/gifs/splashScreen.gif": "d48f1d61f4d1f8e5d657fd63bcc92f63",
"assets/FontManifest.json": "9b7cd598c2610c799474ef4aa9b5777b",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "3e845e8658c6958387d9d424e17cd99b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "51d23d1c30deda6f34673e0d5600fd38",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "d51b09f7b8345b41dd3b2201f653c62b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ea892e09437fcaa050b2b15c53173b7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "4e31b32e0b32d604692aef3d6bdc0d28",
"/": "4e31b32e0b32d604692aef3d6bdc0d28",
"main.dart.js": "d579300b2bd80e3fe86cf14fabb1bdad",
"manifest.json": "75b3153513826bf4fb115aa696b8d4fb"
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
