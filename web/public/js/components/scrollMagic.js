// const controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

// build scenes
// let parallaxIntro = new ScrollMagic.Scene({
//   triggerElement: '.intro',
//   triggerHook: 1,
//   duration: '200%'
// }).setTween(TweenMax.from('.intro > img', 1, {
//   y: '-50%',
//   ease: Power0.easeNone
// })).addTo(controller);
// .addIndicators()

// '.intro > img', {y: '-80%', ease: Power4.easeOut}
const parallax = () => {
  const parallaxElements = document.querySelectorAll('.intro');

  const sidebar = document.querySelectorAll('.sidebar')[0];
  let sidebarOffset = sidebar.offsetTop;

  const nav = document.querySelectorAll('.main-menu')[0];
  const footer = document.querySelectorAll('.main-footer')[0];

  /* set parallax image to initial value */
  parallaxElements.forEach(parallax => {
		let img = parallax.getElementsByTagName('img')[0];
		let height = parallax.offsetHeight;
		let top = parallax.offsetTop;
		let bot = top + height;

		let perc = (0 - top) / height;
    let scroll = perc * height / 2;

		TweenMax.set(img, {
			y: `${scroll}px`
		});
	});

  window.addEventListener('scroll', function(e) {
  	/* get scroll values */
  	let scrollTop = window.scrollY;
  	let scrollBot = scrollTop +  window.innerHeight;

  	/* Loop through parallax elements */
  	parallaxElements.forEach(parallax => {

  		/* get the child image element */
  		let img = parallax.getElementsByTagName('img')[0];

  		/* get the dimenstions of the parallax element */
  		let height = parallax.offsetHeight;
  		let top = parallax.offsetTop;
  		let bot = top + height;

  		/* if parallax element is in viewport */
  		if (scrollBot >= top && scrollTop <= bot) {
  			let perc = (scrollTop - top) / height;

        let scroll = perc * height / 2;

  			TweenMax.to(img, 0, {
  				y: `${scroll}px`,
  				ease: Power0.easeNone
  			});
  		}

  	});

    if (window.innerWidth > 960) {
      /* sidebar */
      if (scrollTop < sidebarOffset - nav.offsetHeight - 40) {
        TweenMax.to(sidebar, 0, {
          y: 0,
          ease: Power0.easeNone,
        });
      } else if (scrollTop >= sidebarOffset - nav.offsetHeight - 40 && scrollTop < document.body.offsetHeight - footer.offsetHeight - sidebar.offsetHeight - nav.offsetHeight - 80) {
        TweenMax.to(sidebar, 0, {
          y: scrollTop - (sidebarOffset - nav.offsetHeight - 40),
          ease: Power0.easeNone,
        });
      }
    }

  });
}
