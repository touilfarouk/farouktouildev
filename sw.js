const version = 25;
let isOnline = true; // will get updated via messaging

const staticCache = "pwaEx3StaticCache" + version;
const dynamicCache = `pwaEx3DynamicCache${version}`;

const cacheList = [
  "/",
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
  "/a-propos-de-moi.html",
  "/a-propos-de-moi/community.html",
  "/a-propos-de-moi/currently.html",
  "/a-propos-de-moi/design.html",
  "/a-propos-de-moi/experience.html",

  "/linux-servers-security/avant-propos.html",
  "/linux-servers-security/community.html",
  "/linux-servers-security/design.html",
  "/linux-servers-security/experience.html",

  "/shared-source-code/avant-propos.html",
  "/shared-source-code/community.html",
  "/shared-source-code/design.html",
  "/shared-source-code/experience.html",

  "/_next/static/chunks/pages/a-propos-de-moi/community-42d732cc76444dab.js",
  "/_next/static/chunks/pages/a-propos-de-moi/currently-20e2f23c0e6408a2.js",
  "/_next/static/chunks/pages/a-propos-de-moi/design-70dbda01972abc09.js",
  "/_next/static/chunks/pages/a-propos-de-moi/experience-fed3eb643184ce91.js",

  "/_next/static/chunks/pages/linux-servers-security/avant-propos-85255eaaddb055dd.js",
  "/_next/static/chunks/pages/linux-servers-security/community-e38c6c0fb99b7fd9.js",
  "/_next/static/chunks/pages/linux-servers-security/design-f034fdcc4f193318.js",
  "/_next/static/chunks/pages/linux-servers-security/experience-013e554c46e9306e.js",

  "/_next/static/chunks/pages/shared-source-code/avant-propos-9bb97ca2222c3f02.js",
  "/_next/static/chunks/pages/shared-source-code/community-93baea15174f7d3d.js",
  "/_next/static/chunks/pages/shared-source-code/design-c249a2a3d887565e.js",
  "/_next/static/chunks/pages/shared-source-code/experience-bca496ccc1866cd4.js",

  "/_next/static/chunks/pages/_app-2553c03b23c0a9e7.js",
  "/_next/static/chunks/pages/_error-39dac43b1ea074c9.js",
  "/_next/static/chunks/pages/404-1fe87e0bd6bf8704.js",
  "/_next/static/chunks/pages/a-propos-de-moi-3823332195ead39c.js",
  "/_next/static/chunks/pages/index-56fdf8acd3302908.js",
  "/_next/static/chunks/pages/samples-8dd98e67a6c2c387.js",

  "/_next/static/chunks/299-9c200c3a9969f0d7.js",
  "/_next/static/chunks/framework-19f3649580393c10.js",
  "/_next/static/chunks/main-b0f97896e9bec7dd.js",
  "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
  "/_next/static/chunks/webpack-0b5d8249fb15f5f3.js",

  "/_next/static/css/3f135e1250fd1cd9.css",

  "/assets/community/apps/images/archiverpg.com.jpg",
  "/assets/community/apps/images/AssemblyRTS.jpg",
  "/assets/community/apps/images/badgeth.jpg",
  "/assets/community/apps/images/beko-primary-buffer-panel.jpg",
  "/assets/community/apps/images/beko-stream-overlay.jpg",
  "/assets/community/apps/images/cmdb.wrick17.jpg",
  "/assets/community/apps/images/darkgalaxies.io.jpg",
  "/assets/community/apps/images/incyberpunk.jpg",
  "/assets/community/apps/images/lady-of-shalott.jpg",
  "/assets/community/apps/images/paingthet.com.jpg",
  "/assets/community/apps/images/romelperez.dev.jpg",
  "/assets/community/apps/images/soulextract.com.jpg",
  "/assets/community/apps/images/starwards.jpg",
  "/assets/community/apps/images/universe-dawn.com.jpg",
  "/assets/images/background-large.jpg",
  "/assets/images/background-large.webp",
  "/assets/images/background-medium.jpg",
  "/assets/images/background-medium.webp",
  "/assets/images/background-small.jpg",
  "/assets/images/background-small.webp",
  "/assets/sounds/click.mp3",
  "/assets/sounds/error.mp3",
  "/assets/sounds/info.mp3",
  "/assets/sounds/intro.mp3",
  "/assets/sounds/type.mp3",
  "/img/android-chrome-192x192.png",
  "/img/android-chrome-512x512.png",
  "/img/apple-touch-icon.png",
  "/img/favicon-16x16.png",
  "/img/favicon-32x32.png",
  "/img/mstile-150x150.png",
  "/img/touilfarouk.jpg",
];
//TODO: complete the functions for these events
self.addEventListener("install", (ev) => {
  ev.waitUntil(
    caches.open(staticCache).then((cache) => {
      //save the whole cacheList
      cache.addAll(cacheList);
    })
  );
});

self.addEventListener("activate", (ev) => {
  ev.waitUntil(
    caches
      .keys()
      .then((keys) => {
        return Promise.all(
          keys
            .filter((key) => {
              if (key === staticCache || key === dynamicCache) {
                return false;
              } else {
                return true;
              }
            })
            .map((key) => caches.delete(key))
        ); //keys.filter().map() returns an array of Promises
      })
      .catch(console.warn)
  );
});

self.addEventListener("fetch", (ev) => {
  //TODO:
  //update the script here to look in the caches first
  //if not in the cache check if online
  //if online, do a fetch
  //if fetch returns 404 and request.mode == 'navigation'
  //return the 404 page from the cache
  //save any new fetched files in the dynamic cache
  ev.respondWith(
    caches.match(ev.request).then((cacheRes) => {
      return (
        cacheRes ||
        fetch(ev.request)
          .then((fetchRes) => {
            //TODO: check here for the 404 error
            if (!fetchRes.ok) throw new Error(fetchRes.statusText);

            return caches.open(dynamicCache).then((cache) => {
              let copy = fetchRes.clone(); //make a copy of the response
              cache.put(ev.request, copy); //put the copy into the cache
              return fetchRes; //send the original response back up the chain
            });
          })
          .catch((err) => {
            console.log("SW fetch failed");
            console.warn(err);
            if (ev.request.mode == "navigate") {
              //send the 404 page
              return caches.match("/404.html").then((page404Response) => {
                return page404Response;
              });
            }
            //if we were offline then the fetch() will fail
            //check for 404 and ev.request properties
            //ev.request.mode == 'navigate'
            //ev.request.url.pathname
            //ev.request.headers.get('Content-Type');
            // console.log(isOnline);
            // console.log('offline asked to go to new HTML file.');
            // console.log(ev.request.mode);
            // console.log(ev.request.url.pathname);
            // console.log(ev.request.headers.get('Content-Type'));
          })
      );
    })
  ); //what do we want to send to the browser?
});

self.addEventListener("message", (ev) => {
  console.log(ev.data);
  //message received from script
  if (ev.data.ONLINE) {
    isOnline = ev.data.ONLINE;
    //we could confirm if actually online and send a message to the browser if not
    // use a fetch with method: HEAD to do this
    // in the webpage-side code set a timer to resend the online message
    // which will trigger this code again
  }
  //handle other messages from the browser...
  //EG: CLEARDYNAMICCACHE, CLEARSTATICCACHE, LOADFILE, CONFIRMONLINE,
  //    GETFROMDB, etc
});

function sendMessage(msg) {
  //send a message to the browser
  //from the service Worker
  //code from messaging.js Client API send message code
  self.clients.matchAll().then(function (clients) {
    if (clients && clients.length) {
      //Respond to last focused tab
      clients[0].postMessage(msg);
    }
  });
  //See the code from the online video for the version that messages ALL Clients
}
