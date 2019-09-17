// barba.init({
//   views: [{
//     namespace: 'home',
//     afterEnter(data) {
//       console.log('after enter home');
//     }
//   }, {
//     namespace: 'post',
//     afterEnter(data) {
//       console.log('after enter post');
//     }
//   }, {
//     namespace: 'about',
//     afterEnter(data) {
//       console.log('after enter ueber uns');
//     }
//   }, {
//     namespace: 'legal',
//     afterEnter(data) {
//       console.log('after enter legal');
//     }
//   }],
//
//   transitions: [{
//     leave({ current, next, trigger }) {
//       const done = this.async();
//
//       const tl = new TimelineMax({
//         onComplete: () => {
//           done();
//         }
//       });
//
//       tl.to(current.container, 1, {
//         y: 300,
//         // scale: 0.5,
//         autoAlpha: 0,
//         ease: Power4.easeOut,
//       });
//     },
//     enter({ current, next, trigger }) {
//       const done = this.async();
//       done();
//
//       $('body, html').scrollTop(0);
//       $('html').removeClass('overflow');
//
//       const tl = new TimelineMax({
//         onComplete: () => {
//           parallax();
//           initMenu();
//         }
//       });
//
//       tl.from(next.container, 1, {
//         y: 300,
//         // scale: 0.5,
//         autoAlpha: 0,
//         ease: Power4.easeOut,
//       });
//     }
//   }]
// });
