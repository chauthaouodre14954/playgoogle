// public/sw.js
// Импортируем OneSignal Service Worker
importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');

// Твой код
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  clients.claim();
});

// Оставь fetch пустым или убери совсем