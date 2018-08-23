function animate(options) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction от 0 до 1
    let timeFraction = (time - start) / options.duration;
    if (timeFraction > 1) timeFraction = 1;

    // текущее состояние анимации
    let progress = options.timing(timeFraction);

    options.draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    } else {
      options.done();
    }

  });
};

function makeEaseOut(timing) {
  return function(timeFraction) {
    return 1 - timing(1 - timeFraction);
  }
};

function bounce(timeFraction) {
  for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
    }
  }
};

function quad(timeFraction) {
  return Math.pow(timeFraction, 2);
};

btn.onclick = function() {
  let width = field.clientWidth - ball.clientWidth;

  animate({
    duration: 700,
    timing: function(timeFraction) {
      return timeFraction;
    },
    draw: function(progress) {
        ball.style.left = 100 + ((width - 100) * progress) + "px";
        ball.style.top = 160 - (100 * progress) + "px";
        ball.style.transform = "rotate(" + (360 * progress)  + "deg)";
    },
    done: function() {
      startAnimation2();
    }
  });

  function startAnimation2() {
    animate({
      duration: 500,
      timing: function(timeFraction) {
        return timeFraction;
      },
      draw: function(progress) {
          ball.style.left = 460 - (100 * progress) + "px";
          ball.style.top = 60 - (60 * progress) + "px";
          ball.style.transform = "rotate(" + (360 * progress)  + "deg)";
      },
      done: function() {
        startAnimation3();
      }
    });
  };

  function startAnimation3() {
    animate({
      duration: 2000,
      timing: makeEaseOut(bounce),
      draw: function(progress) {
        ball.style.top = 160 * progress + 'px';
      },
      done: function() {
      }
    });

    animate({
      duration: 2000,
      timing: makeEaseOut(quad),
      draw: function(progress) {
        ball.style.left = 360 - (260 * progress) + "px";
        ball.style.transform = "rotate(" + (360 * progress)  + "deg)";
      },
      done: function() {
      }
    });
  };

}