
const CACHE_NAME = 'techsafi-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  self.skipWaiting(); // Force the waiting service worker to become the active service worker
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName); // Delete old caches (v1)
          }
        })
      );
    })
  );
  self.clients.claim(); // Take control of all clients immediately
});

self.addEventListener('fetch', (event) => {
  // 1. Navigation Requests (HTML pages) - Network First, Fallback to Cache
  // This ensures the user always gets the latest index.html from Vercel
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Check for valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          // Clone and cache the fresh version
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });
          return response;
        })
        .catch(() => {
          // If offline, return cached version
          return caches.match('/index.html');
        })
    );
    return;
  }

  // 2. Asset Requests (Images, JS, CSS) - Cache First, Fallback to Network
  // These usually have hashed filenames in Vite, so caching them is safe and fast
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
