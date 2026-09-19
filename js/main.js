/* Davyd Shcherba — portfolio behaviour: theme toggle + scroll reveal. */
(function () {
  'use strict';

  /* --- theme ------------------------------------------------------------ */

  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');

  function currentTheme() {
    return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (toggle) {
      toggle.setAttribute('aria-label', 'Switch to ' + (theme === 'light' ? 'dark' : 'light') + ' theme');
    }
  }

  if (toggle) {
    applyTheme(currentTheme());

    toggle.addEventListener('click', function () {
      var next = currentTheme() === 'light' ? 'dark' : 'light';
      applyTheme(next);
      try { localStorage.setItem('theme', next); } catch (e) { /* private mode */ }
    });
  }

  /* Follow the OS only while the visitor has not chosen a theme themselves. */
  var scheme = window.matchMedia('(prefers-color-scheme: light)');
  var onSchemeChange = function (e) {
    var stored = null;
    try { stored = localStorage.getItem('theme'); } catch (err) { /* private mode */ }
    if (!stored) { applyTheme(e.matches ? 'light' : 'dark'); }
  };
  if (scheme.addEventListener) { scheme.addEventListener('change', onSchemeChange); }
  else if (scheme.addListener) { scheme.addListener(onSchemeChange); }

  /* --- reveal on scroll -------------------------------------------------- */

  var revealables = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(revealables, function (el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

  Array.prototype.forEach.call(revealables, function (el) { observer.observe(el); });
})();
