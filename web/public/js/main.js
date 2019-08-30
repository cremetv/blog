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

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  }
}
