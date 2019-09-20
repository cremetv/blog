var cacheName = 'hello-pwa';
var filesToCache = [
  './',
  './index.php',
  './ueber-uns',
  './public/css/style.min.css',
  './public/js/main.min.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      // return response || fetch(e.request);
      if (response) return response;

      // return fetch(e.request);

      return fetch(e.request).then(function(response) {
        // check if we receive a valid response
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        let responseToCache = response.clone();

        caches.open(cacheName).then(function(cache) {
          cache.put(e.request, responseToCache);
        });

        return response;
      });

    })
  );
});
