(function () {
  "use strict";

  if (typeof window.particlesJS !== "function") return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.particlesJS("particles-js", {
    particles: {
      number: {
        value: reduceMotion ? 26 : 46,
        density: { enable: true, value_area: 900 }
      },
      color: { value: ["#00EB7A", "#00F8D2"] },
      shape: { type: "circle" },
      opacity: {
        value: 0.4,
        random: true,
        anim: { enable: !reduceMotion, speed: 0.4, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 2.5,
        random: true,
        anim: { enable: false }
      },
      line_linked: {
        enable: true,
        distance: 130,
        color: "#00EB7A",
        opacity: 0.16,
        width: 1
      },
      move: {
        enable: !reduceMotion,
        speed: 0.9,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: { enable: !reduceMotion, mode: "grab" },
        onclick: { enable: !reduceMotion, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 0.45 } },
        push: { particles_nb: 3 }
      }
    },
    retina_detect: true
  });
})();
