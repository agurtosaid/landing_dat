(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var header = document.querySelector("[data-header]");
  if (header) {
    var setScrolled = function () {
      if (window.scrollY > 8) header.setAttribute("data-scrolled", "");
      else header.removeAttribute("data-scrolled");
    };
    setScrolled();
    window.addEventListener("scroll", setScrolled, { passive: true });
  }

  var boot = document.querySelector("[data-boot]");
  if (boot) {
    var lines = Array.prototype.slice.call(boot.querySelectorAll(".boot__line"));
    if (reduceMotion) {
      boot.setAttribute("data-done", "");
    } else {
      lines.forEach(function (line, i) {
        setTimeout(function () {
          line.style.transition = "opacity .25s ease-out, transform .25s ease-out";
          line.style.opacity = "1";
          line.style.transform = "none";
          if (i === lines.length - 1) boot.setAttribute("data-done", "");
        }, 220 * i + 120);
      });
    }
  }

  var pipeline = document.querySelector("[data-pipeline]");
  if (pipeline) {
    var fill = function () {
      pipeline.style.setProperty("--pipeline-fill", "1");
      pipeline.setAttribute("data-filled", "");
    };
    if (reduceMotion || !("IntersectionObserver" in window)) {
      fill();
    } else {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              fill();
              io.disconnect();
            }
          });
        },
        { threshold: 0.4 }
      );
      io.observe(pipeline);
    }
  }
})();
