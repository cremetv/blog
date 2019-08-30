const controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

// build scenes
let parallaxIntro = new ScrollMagic.Scene({
  triggerElement: '.intro',
  triggerHook: 1,
  duration: '200%'
}).setTween(TweenMax.from('.intro > img', 1, {
  y: '-50%',
  ease: Power0.easeNone
})).addTo(controller);
// .addIndicators()

// '.intro > img', {y: '-80%', ease: Power4.easeOut}
