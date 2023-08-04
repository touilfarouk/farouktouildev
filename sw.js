const version = 25;
let isOnline = true; // will get updated via messaging

const staticCache = "pwaEx3StaticCache" + version;
const dynamicCache = `pwaEx3DynamicCache${version}`;

const cacheList = [
  "/404.html",
  "/a-propos-de-moi.html",
  "/farouktouil_background.png",
  "/farouktouil_logo.png",
  "/farouktouil_logo.svg",
  "/favicon.ico",
  "/index.html",
  "/logotype.png",
  "/LogoType.svg",
  "/manifest.json",
  "/robots.txt",
  "/samples.html",
  "/_next/static/chunks/299-9c200c3a9969f0d7.js",
  "/_next/static/chunks/framework-19f3649580393c10.js",
  "/_next/static/chunks/main-b0f97896e9bec7dd.js",
  "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
  "/_next/static/chunks/webpack-0b5d8249fb15f5f3.js",
  "/_next/static/chunks/pages/_app-caa05b93f6da99a7.js",
  "/_next/static/chunks/pages/_error-39dac43b1ea074c9.js",
  "/_next/static/chunks/pages/404-1fe87e0bd6bf8704.js",
  "/_next/static/chunks/pages/a-propos-de-moi-99b7bbda345d6318.js",
  "/_next/static/chunks/pages/index-28856925d7fe4935.js",
  "/_next/static/chunks/pages/samples-8dd98e67a6c2c387.js",
  "/_next/static/chunks/pages/a-propos-de-moi/community-af725d639a548cfe.js",
  "/_next/static/chunks/pages/a-propos-de-moi/currently-f9894dc0c328f11a.js",
  "/_next/static/chunks/pages/a-propos-de-moi/design-3ca314c781961baf.js",
  "/_next/static/chunks/pages/a-propos-de-moi/experience-518ec9b790f06882.js",
  "/_next/static/css/3f135e1250fd1cd9.css",
  "/a-propos-de-moi/community.html",
  "/a-propos-de-moi/currently.html",
  "/a-propos-de-moi/design.html",
  "/a-propos-de-moi/experience.html",
  "/assets/community/apps/images/admission.jpg",
  "/assets/community/apps/apps.json",
  "/assets/images/background-large.jpg",
  "/assets/images/background-large.webp",
  "/assets/images/background-medium.jpg",
  "/assets/images/background-medium.webp",
  "/assets/images/background-small.jpg",
  "/assets/images/background-small.webp",
  "/img/android-chrome-192x192.png",
  "/img/android-chrome-512x512.png",
  "/img/apple-touch-icon.png",
  "/img/favicon-16x16.png",
  "/img/favicon-32x32.png",
  "/img/mstile-150x150.png",
  "/img/touilfarouk.png",
  "/js/app.js",
  "/ws.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(staticCache)
      .then((cache) => cache.addAll(cacheList))
      .catch((error) => {
        console.error("Failed to cache one or more resources:", error);
      })
      .then(() => self.skipWaiting()) // Activate the service worker immediately
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => {
        return Promise.all(
          keys
            .filter((key) => key !== staticCache && key !== dynamicCache)
            .map((key) => caches.delete(key))
        );
      })
      .catch(console.warn)
      .then(() => {
        if (self.clients && self.clients.claim) {
          self.clients.claim(); // Take control of all existing clients immediately
        }
      })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});

self.addEventListener("message", (event) => {
  const { data } = event;
  if (data && data.ONLINE) {
    isOnline = data.ONLINE;
  }
});

function sendMessage(msg) {
  self.clients.matchAll().then(function (clients) {
    if (clients && clients.length) {
      // Respond to last focused tab
      clients[0].postMessage(msg);
    }
  });
  // See the code from the online video for the version that messages ALL Clients
}
