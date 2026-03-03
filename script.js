(function () {
  'use strict';

  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      menuToggle.classList.toggle('is-open');
    });
  }

  // Inside Super 9 carousel: 2-second auto-advance
  var carousel = document.querySelector('.inside-carousel');
  if (carousel) {
    var track = carousel.querySelector('.inside-carousel-track');
    var slides = carousel.querySelectorAll('.inside-carousel-slide');
    var dotsContainer = carousel.querySelector('.inside-carousel-dots');
    var prevBtn = carousel.querySelector('.inside-carousel-prev');
    var nextBtn = carousel.querySelector('.inside-carousel-next');
    var count = slides.length;
    var current = 0;
    var intervalId = null;
    var INTERVAL_MS = 2000;

    function showSlide(index) {
      current = (index + count) % count;
      slides.forEach(function (slide, i) {
        slide.classList.toggle('is-active', i === current);
      });
      var dots = carousel.querySelectorAll('.inside-carousel-dot');
      dots.forEach(function (dot, i) {
        dot.classList.toggle('is-active', i === current);
      });
    }

    function nextSlide() {
      showSlide(current + 1);
    }

    function startInterval() {
      if (intervalId) clearInterval(intervalId);
      intervalId = setInterval(nextSlide, INTERVAL_MS);
    }

    function stopInterval() {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    }

    if (dotsContainer && count > 0) {
      for (var i = 0; i < count; i++) {
        var dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'inside-carousel-dot' + (i === 0 ? ' is-active' : '');
        dot.setAttribute('aria-label', 'Go to image ' + (i + 1));
        (function (idx) {
          dot.addEventListener('click', function () {
            showSlide(idx);
            startInterval();
          });
        })(i);
        dotsContainer.appendChild(dot);
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        showSlide(current - 1);
        startInterval();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        nextSlide();
        startInterval();
      });
    }

    carousel.addEventListener('mouseenter', stopInterval);
    carousel.addEventListener('mouseleave', startInterval);

    startInterval();
  }
})();
