const barbaWrap = document.querySelectorAll('.barba-container')[0];

barba.init({
  views: [{
    namespace: 'home',
    afterEnter(data) {
      console.log('after enter home');
    }
  }, {
    namespace: 'post',
    afterEnter(data) {
      console.log('after enter post');
    }
  }, {
    namespace: 'about',
    afterEnter(data) {
      console.log('after enter ueber uns');
    }
  }, {
    namespace: 'legal',
    afterEnter(data) {
      console.log('after enter legal');
    }
  }],

  transitions: [{
    leave({ current, next, trigger }) {
      const done = this.async();

      console.log('leave');
      console.log(current);

      TweenMax.to(current.container, 1, {
        y: 300,
        // scale: 0.5,
        autoAlpha: 0,
        ease: Power4.easeOut,
        onComplete: function() {
          done();
        }
      });
    },
    enter({ current, next, trigger }) {
      const done = this.async();

      console.log('enter');
      console.log(next);

      done();

      TweenMax.from(next.container, 1, {
        y: 300,
        // scale: 0.5,
        autoAlpha: 0,
        ease: Power4.easeOut
      });
    }
  }]
});
