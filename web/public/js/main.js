/*! @license
 * Marco & Gloria
 *
 * copyright Ice-Creme (https://ice-creme.de/)
*/
//@prepros-prepend utility/imagesLoaded.js
//@prepros-prepend components/barba.js

//@prepros-append components/instaFeed.js
//@prepros-append components/menu.js

window.onload = () => {

  console.log('sw!!');
  let swRegistration;

  if ('serviceWorker' in navigator && 'PushManager' in window) {
    navigator.serviceWorker.register('./sw.js')
    .then(swReg => {
      console.log('Service Worker is registered', swReg);

      swRegistration = swReg;
    })
    .catch(err => {
      console.error('Service Worker Error', err);
    });
  }

  self.addEventListener('push', function(event) {
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

    const title = 'Push Codelab';
    const options = {
      body: 'Yay it works.',
      icon: 'images/icon.png',
      badge: 'images/badge.png'
    };

    event.waitUntil(self.registration.showNotification(title, options));
  });
}
