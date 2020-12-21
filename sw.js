self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('fox-store').then(function(cache) {
     return cache.addAll([
       'index.html',
       'index.js',
       'style.css',
       'images/img1.jpg',
       'images/img2.jpg',
       'images/img3.jpg',
       'images/img4.jpg',
       'images/img5.jpg',
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
