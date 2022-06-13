'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7a1094b0bca6ada78a09c9ec5d4e4c1d",
".git/config": "282c287aa35bd98be06fbb7569c54657",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e21dfa14957fd3c6f275c9324b6109db",
".git/HEAD": "dfebbe193e255e26c1b45fa445375b01",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0c81a40d22d777e6c5cd65ac491d2af0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "efc7a6044c73083554e5d6bfc11b2d91",
".git/logs/refs/heads/release": "efc7a6044c73083554e5d6bfc11b2d91",
".git/logs/refs/remotes/origin/main": "65b40c62539045c641b50f61c8c2c6a9",
".git/logs/refs/remotes/origin/release": "c836bdef62cda179cbea7101b298b1c7",
".git/objects/00/504883bda5a6503210b0e60a69e5c8f95880b1": "765fa37b8fffde98fc5bf718a1ac05c0",
".git/objects/02/a13b566a703bef8351b8a29ea006ba35d6a59a": "04ee57aaa06404aa857b59ac0e6cc177",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/18/479281eb7efe2afb28f9daa1012917f82dfbeb": "394bfa6e370b56d37b9281065b367c93",
".git/objects/24/476c5d1eb55824c76d8b01a3965f94abad1ef8": "272edacb42df12790f46462d08bc4696",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2a/e9633073b1cfff728d77fe8375f9d477619328": "d1ce62b5d7dac642ed54c2124228ab4e",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/35/d011730ad80ed5569ac3465cba58233fa12d4d": "5fdb82718eeb921b3134a1f422afb18d",
".git/objects/36/b014451d2aa7f9257e3276387c57c71a0091a4": "45297fddf57bba14c20f8d308dcbe014",
".git/objects/45/e4ce44e18dbaa8fbdef18a6868038d8349b209": "91667609f13f62d5f6983ff105983a57",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/51/2360419769f1642290ac6dd77eb88a3cd91006": "99e510b80c6e62b43f535cf4dfc73ae9",
".git/objects/51/d3975796e5da6a481f26b33e48a149590ae935": "91f3537ac3692137d34830073cf4d4eb",
".git/objects/52/2989884ef70796d48585b3928e4518f05b8ece": "2c78cd88e8529dfd69b6d2b51f70fb7d",
".git/objects/58/1c3bd4490c8e8d224b9ab5372ce3570dab71aa": "fd0d6195f1789416d1ebe8f4f44dfa9f",
".git/objects/61/b6c4de17c96863d24279f06b85e01b6ebbdb34": "5486bd6a506a32f8c081890c2befb8eb",
".git/objects/63/56d502d7187a62bd9b356731dbfe3fd4577d92": "375526f3415a5210cdbb508a1322432b",
".git/objects/65/2b6609b7514193d02025fad36868ad207c5402": "843ce43286c2bda02f73680dbe8bbb99",
".git/objects/6b/19a6ac4d39361e8830173361d8b4f39c727ace": "9a541bd9e138bf029610e2dae1398dab",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/85f402a8421558c5a3e49101a5952bad6ce1ff": "112d6a8fef8321d86326b21d7aece0de",
".git/objects/82/75e1754a29dda94f5b8b5af52e3a4d957641c7": "783ca6619cfaa8f9e1060b7aedb72c12",
".git/objects/83/eaa7de854b5c28d0f2d4f44021eb2a7f10355e": "af5fd1d3e34b1f3b3d62dc562e84ba97",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/d9227ea569c5354ffe45557086462f70b6b934": "5e71b094f5074fe51aa6a2a732aab734",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/caa8fdc3674ff555efa7a499b451271bdbd60b": "de5050db3fe529602d1c6940f12d1cbf",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/aa/1b875ade73be8896123dbd56d409749b733d6b": "9652c2da0a2068ce979b93a96e78fc31",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b1/9f08cb0193b54ae1f9f59306f8de53d9f425e6": "36abd224c8a6a0a16ba57aa77bac7bc5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/cd992e24eead00cd5bda26d0a268db60f1baf0": "506d1b3d55db7289ff00800a587d5cae",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d1/0b9db8c71f8873732891df36660d4e91e16205": "4d257664ada6ac37071838ebf6f2a232",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/07e90f2228d045c9e39c74425ce908aea2474f": "3f66ac39f0388235520fac99e39d66f6",
".git/objects/d8/b4f5a0d4de95adab165543d5f5b71db44e5fb1": "792de286cc4464ead07515e7e293dda9",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/e0c4196e9b8c7339f55e02b1d581534e38220f": "bd9a9cc99edef096dc28e8ecdf4a8229",
".git/objects/df/5cc3288fc52ea2dc99adaff13ac82f8b7acd7e": "b33723c64100dac9dfc2140319f154c6",
".git/objects/e0/160294b96da00efca6ced5138d92d0d73c2f6a": "2891a01e740a99bdbefc291c6da88d3d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/02541bf41a7434806ea2f1d1a3b69e0359edef": "d4ce35c54f9704dbce7167a0c74ab0ae",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/605f684ad3435c7d11aba5930c391ed9916906": "79960743b98939ab1342324e97a346c0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f6/153dc00836c4b7e1b5b9b56bf74a8bb90d4de2": "92e1c02ac83500858ccfc773d028076c",
".git/objects/f6/dcae558681103b45a090cd335efafab16177a9": "4a36b7082dfba34a31441e7c4c546f3c",
".git/ORIG_HEAD": "4a6233a425714a1236da8683c48a5663",
".git/refs/heads/release": "a2d4e24bb280c51d3910df7bbdbb511d",
".git/refs/remotes/origin/main": "21218b5a3d689af15d9fae28b772cdc1",
".git/refs/remotes/origin/release": "a2d4e24bb280c51d3910df7bbdbb511d",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "7250435993f6ea0e72ff1ccf29264e4a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "4887036f2b55ace7dea72d1005d9a396",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6c7ec89cddde0cbe59f2439772fb050b",
"/": "6c7ec89cddde0cbe59f2439772fb050b",
"main.dart.js": "e3c42681c83c6af4e992a20d82c1ffdd",
"manifest.json": "d342142643194c2401336ed5e02b889a",
"version.json": "1218a30a84760abd8850b19750d2d809"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
