const initMenu = () => {
  console.log('init menu');
  let menuOpen = false;

  const html = document.querySelector('html');
  const burger = document.querySelectorAll('.burger')[0];
  const menu = document.querySelectorAll('.main-menu')[0];

  const openMenu = () => {
    menuOpen = true;
    burger.classList.add('open');
    menu.classList.add('open');
    html.classList.add('overflow');
    TweenMax.to(menu, 1, {
      x: 0,
      ease: Power4.easeOut
    });
  }

  const closeMenu = () => {
    menuOpen = false;
    burger.classList.remove('open');
    menu.classList.remove('open');
    html.classList.remove('overflow');
    TweenMax.to(menu, 1, {
      x: '100vw',
      ease: Power4.easeOut
    });
  }

  burger.addEventListener('click', function() {
    menuOpen ? closeMenu() : openMenu();
  });


  window.addEventListener('resize', function() {
    if (window.innerWidth > 960) {
      TweenMax.to(menu, 1, {
        x: 0,
        ease: Power4.easeOut
      });
    } else if (window.innerWidth < 960 && !menuOpen) {
      TweenMax.to(menu, 1, {
        x: '100vw',
        ease: Power4.easeOut
      });
    }
  });
}
