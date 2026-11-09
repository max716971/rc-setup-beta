const CACHE_NAME = 'rc-setup-beta-v40';
const APP_SHELL = ['./', './index.html', './app.css?v=13', './materials.css?v=4', './app.js?v=12', './materials.js?v=5', './backup.js?v=4', './manifest.webmanifest', './assets/rc-setup-beta-logo.svg?v=2','./assets/rc-setup-beta-180.png?v=3', './icon.svg?v=2'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))); self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('rc-setup-beta-') && key !== CACHE_NAME).map(key => caches.delete(key))))); self.clients.claim(); });
const LOGO_HOSTS = new Set(['www.hobbywingdirect.com','apps.associatedelectrics.com','schumacher-racing.com','atomfire.com','6mik-racing.com','cdn.houseofrc.com','www.cmldistribution.co.uk','www.wartelle-shop.com','upload.wikimedia.org','www.pr-rc.com']);
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  const isBrandLogo = event.request.destination === 'image' && LOGO_HOSTS.has(url.hostname);
  if (url.origin !== self.location.origin && !isBrandLogo) return;
  event.respondWith((async () => {
    if (isBrandLogo) {
      const cached = await caches.match(event.request);
      if (cached) return cached;
      try {
        const response = await fetch(event.request);
        if (response.ok || response.type === 'opaque') {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        }
        return response;
      } catch {
        return (await caches.match(event.request)) || new Response('', { status: 504 });
      }
    }
    try {
      const response = await fetch(event.request);
      if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      }
      return response;
    } catch {
      const cached = await caches.match(event.request);
      if (cached) return cached;
      // Le HTML ne doit servir de secours qu'aux navigations.
      // Renvoyer index.html pour un script/CSS manquant provoque des erreurs
      // de parsing et peut laisser l'application sur un écran vide.
      if (event.request.mode === 'navigate') {
        return (await caches.match('./index.html')) || new Response('Application hors ligne indisponible', { status: 503 });
      }
      return new Response('Ressource indisponible', { status: 503 });
    }
  })());
});