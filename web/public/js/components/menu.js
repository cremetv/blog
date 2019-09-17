const initMenu = () => {
  console.log('init menu');
  let menuOpen = false;

  let scrolling = false,
      previousTop = 0,
      currentTop = 0,
      scrollDelta = 10,
      scrollOffset = 150;

  const html = document.querySelector('html');
  const burger = document.querySelectorAll('.burger')[0];
  const menu = document.querySelectorAll('.main-menu')[0];
  const header = document.querySelectorAll('.main-header')[0];
  const sidebar = document.querySelectorAll('.sidebar')[0];
  const footer = document.querySelectorAll('.main-footer')[0];

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



  const checkSimpleNavigation = (currentTop) => {
    let target = window.innerWidth < 960 ? menu : header;
    let other = window.innerWidth < 960 ? header : menu;
    other.classList.remove('fixed');
    other.classList.remove('slide-up');
    
    if (currentTop == 0) {
      target.classList.remove('fixed');
    } else {
      target.classList.add('fixed');
    }

    if (previousTop - currentTop > scrollDelta) {
      target.classList.remove('slide-up');
      burger.classList.remove('slide-up');
    } else if (currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
      target.classList.add('slide-up');
      burger.classList.add('slide-up');
    }
  }



  const scrollSidebar = (currentTop) => {
    let sidebarOffset = sidebar.offsetTop;

    if (window.innerWidth > 960) {
      /* sidebar */
      if (currentTop < sidebarOffset - menu.offsetHeight - 40) {
        TweenMax.to(sidebar, 0, {
          y: 0,
          ease: Power0.easeNone,
        });
      } else if (currentTop >= sidebarOffset - menu.offsetHeight - 40 && currentTop < document.body.offsetHeight - footer.offsetHeight - sidebar.offsetHeight - menu.offsetHeight - 80) {
        TweenMax.to(sidebar, 0, {
          y: currentTop - (sidebarOffset - menu.offsetHeight - 40),
          ease: Power0.easeNone,
        });
      }
    }
  }



  const autoHideHeader = () => {
    let currentTop = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0)
    checkSimpleNavigation(currentTop);

    scrollSidebar(currentTop);

    previousTop = currentTop;
    scrolling = false;
  }


  window.addEventListener('scroll', function() {
    if (!scrolling) {
      scrolling = true;
      (!window.requestAnimationFrame)
        ? setTimeout(autoHideHeader, 250)
        : requestAnimationFrame(autoHideHeader);
    }
  });

}
