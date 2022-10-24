importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
if (workbox) {
    console.log('Yay! Workbox is loaded 🎉');
} else {
    console.log('Boo! Workbox didnt load 😬');
}
workbox.routing.registerRoute(
    new RegExp('\.*'),
    new workbox.strategies.NetworkFirst()
);