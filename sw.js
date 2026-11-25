/* Service worker do Relatório de Vistoria – funciona offline depois da primeira visita */
const VERSION = "rv-2026-11-25i";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png", "./icons/favicon-32.png", "./icons/favicon-64.png"];
const LIBS = [
  "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"
];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then(async (c) => {
    await c.addAll(SHELL);
    await Promise.all(LIBS.map((u) => fetch(u, { mode: "cors" }).then((r) => r.ok && c.put(u, r)).catch(() => {})));
  }));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("message", (e) => { if (e.data === "SKIP_WAITING") self.skipWaiting(); });
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  /* páginas: rede primeiro (pega atualizações), cache se estiver offline */
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then((r) => { const copy = r.clone(); caches.open(VERSION).then((c) => c.put("./index.html", copy)); return r; })
      .catch(() => caches.match("./index.html", { ignoreSearch: true })));
    return;
  }
  /* bibliotecas, fontes e ícones: cache primeiro */
  const cacheable = url.origin === location.origin || /(^|\.)cdnjs\.cloudflare\.com$|fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (!cacheable) return;
  e.respondWith(caches.match(req, { ignoreSearch: url.origin === location.origin }).then((hit) => hit || fetch(req).then((r) => {
    if (r && (r.ok || r.type === "opaque")) { const copy = r.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); }
    return r;
  })));
});
