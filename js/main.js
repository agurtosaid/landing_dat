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

  var tour = document.querySelector("[data-tour]");
  if (tour) {
    var tablist = tour.querySelector("[role='tablist']");
    var tabs = Array.prototype.slice.call(tour.querySelectorAll("[role='tab']"));
    var panels = tabs.map(function (tab) {
      return document.getElementById(tab.getAttribute("aria-controls"));
    });

    var selectTab = function (index, moveFocus, animate) {
      tabs.forEach(function (tab, i) {
        var active = i === index;
        tab.setAttribute("aria-selected", active ? "true" : "false");
        if (active) tab.removeAttribute("tabindex");
        else tab.setAttribute("tabindex", "-1");
        panels[i].hidden = !active;
        panels[i].removeAttribute("data-scan");
      });
      if (animate && !reduceMotion) {
        void panels[index].offsetWidth; // reinicia la animación de escaneo
        panels[index].setAttribute("data-scan", "");
      }
      if (moveFocus) tabs[index].focus();
    };

    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () {
        selectTab(i, false, true);
      });
      tab.addEventListener("keydown", function (event) {
        var last = tabs.length - 1;
        var next = null;
        if (event.key === "ArrowRight") next = i === last ? 0 : i + 1;
        else if (event.key === "ArrowLeft") next = i === 0 ? last : i - 1;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = last;
        if (next === null) return;
        event.preventDefault();
        selectTab(next, true, true);
      });
    });

    tour.addEventListener("animationend", function (event) {
      if (event.animationName !== "scan") return;
      var panel = event.target.closest(".tour__panel");
      if (panel) panel.removeAttribute("data-scan");
    });

    tablist.hidden = false;
    tour.setAttribute("data-ready", "");
    selectTab(0, false, false);
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
