(function () {
  'use strict';

  /* ---------- Theme (light/dark) ---------- */
  var THEME_KEY = 'ard-theme';
  var root = document.documentElement;

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    var toggle = document.getElementById('theme-toggle');
    if (toggle) toggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (e) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      /* storage unavailable — ignore */
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', function (e) {
        var next = root.classList.contains('dark') ? 'light' : 'dark';
        var commit = function () {
          applyTheme(next);
          setStoredTheme(next);
        };

        var reduced = window.matchMedia &&
                      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // Circular wipe from the toggle itself, where the browser supports it.
        if (!document.startViewTransition || reduced) {
          commit();
          return;
        }

        // The mobile button forwards its clicks here, so start the wipe from
        // whichever of the two controls is actually on screen.
        var origin = themeToggle;
        var mobile = document.getElementById('theme-toggle-mobile');
        if (themeToggle.getBoundingClientRect().width === 0 && mobile) origin = mobile;
        var r = origin.getBoundingClientRect();
        root.style.setProperty('--tx', ((r.left + r.width / 2) / window.innerWidth * 100) + '%');
        root.style.setProperty('--ty', ((r.top + r.height / 2) / window.innerHeight * 100) + '%');
        document.startViewTransition(commit);
      });
    }

    /* ---------- Icons ---------- */
    if (window.lucide) window.lucide.createIcons();

    /* ---------- Mobile menu ---------- */
    var menuBtn = document.getElementById('menu-btn');
    var mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
      var closeMenu = function () {
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
      };
      var openMenu = function () {
        mobileMenu.classList.remove('hidden');
        menuBtn.setAttribute('aria-expanded', 'true');
      };
      menuBtn.addEventListener('click', function () {
        var isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) openMenu(); else closeMenu();
      });
      document.querySelectorAll('.mobile-link').forEach(function (link) {
        link.addEventListener('click', closeMenu);
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu();
      });
      document.addEventListener('click', function (e) {
        if (!mobileMenu.classList.contains('hidden') &&
            !mobileMenu.contains(e.target) &&
            !menuBtn.contains(e.target)) {
          closeMenu();
        }
      });
    }

    /* ---------- Header scroll state + progress bar ---------- */
    var header = document.getElementById('main-header');
    var progress = document.getElementById('scroll-progress');
    var onScroll = function () {
      var y = window.scrollY || document.documentElement.scrollTop;
      if (header) {
        if (y > 40) {
          header.classList.add('backdrop-blur-md', 'shadow-sm');
          header.classList.remove('py-6');
          header.classList.add('py-3');
        } else {
          header.classList.remove('backdrop-blur-md', 'shadow-sm');
          header.classList.remove('py-3');
          header.classList.add('py-6');
        }
      }
      if (progress) {
        var doc = document.documentElement;
        var scrollTop = doc.scrollTop || document.body.scrollTop;
        var scrollHeight = (doc.scrollHeight || document.body.scrollHeight) - doc.clientHeight;
        var pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        progress.style.width = pct + '%';
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------- Scroll reveal ---------- */
    var revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealEls.length) {
      var revealObserver = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            obs.unobserve(entry.target);
          }
        });
      }, { root: null, rootMargin: '0px', threshold: 0.12 });
      revealEls.forEach(function (el) { revealObserver.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add('active'); });
    }

    /* ---------- Active nav link on scroll ---------- */
    var sections = document.querySelectorAll('main section[id]');
    var navLinks = document.querySelectorAll('.nav-link[data-section]');
    if ('IntersectionObserver' in window && sections.length && navLinks.length) {
      var navObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            if (link.getAttribute('data-section') === id) {
              if (entry.isIntersecting) {
                navLinks.forEach(function (l) { l.classList.remove('text-primary-600', 'dark:text-primary-400'); });
                link.classList.add('text-primary-600', 'dark:text-primary-400');
              }
            }
          });
        });
      }, { root: null, rootMargin: '-40% 0px -50% 0px', threshold: 0 });
      sections.forEach(function (s) { navObserver.observe(s); });
    }

    /* ---------- Back to top ---------- */
    var backToTop = document.getElementById('back-to-top');
    if (backToTop) {
      backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    /* ---------- Contact form (no backend — opens the user's email client) ---------- */
    var contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var name = document.getElementById('name');
        var email = document.getElementById('email');
        var subject = document.getElementById('subject');
        var message = document.getElementById('message');
        var status = document.getElementById('form-status');

        if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
          if (status) {
            status.textContent = 'Please fill in your name, email, and message.';
            status.className = 'text-sm mt-3 text-red-500';
          }
          return;
        }

        var to = 'adwrells@gmail.com';
        var subjectLine = encodeURIComponent(subject.value.trim() || 'Portfolio inquiry from ' + name.value.trim());
        var bodyLine = encodeURIComponent(
          message.value.trim() + '\n\n— ' + name.value.trim() + ' (' + email.value.trim() + ')'
        );
        var mailto = 'mailto:' + to + '?subject=' + subjectLine + '&body=' + bodyLine;

        window.location.href = mailto;

        if (status) {
          status.textContent = 'Opening your email client…';
          status.className = 'text-sm mt-3 text-primary-600 dark:text-primary-400';
        }
      });
    }
  });
})();


/* ---------------------------------------------------------
   Motion layer — cursor spotlight on cards, counting figures.
   Both are skipped entirely when the visitor asks for reduced
   motion, and the spotlight only runs for real pointers.
--------------------------------------------------------- */
(function () {
  'use strict';

  var reduced = window.matchMedia &&
                window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.addEventListener('DOMContentLoaded', function () {

    /* ---------- Cursor spotlight ---------- */
    var finePointer = window.matchMedia &&
                      window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (finePointer && !reduced) {
      var pending = false;
      var lastCard = null;
      var lastX = 0;
      var lastY = 0;

      document.addEventListener('pointermove', function (e) {
        var card = e.target.closest ? e.target.closest('.card-hover') : null;
        if (!card) return;
        lastCard = card;
        lastX = e.clientX;
        lastY = e.clientY;
        if (pending) return;
        pending = true;
        window.requestAnimationFrame(function () {
          pending = false;
          if (!lastCard) return;
          var r = lastCard.getBoundingClientRect();
          lastCard.style.setProperty('--mx', ((lastX - r.left) / r.width * 100) + '%');
          lastCard.style.setProperty('--my', ((lastY - r.top) / r.height * 100) + '%');
        });
      }, { passive: true });
    }

    /* ---------- Counting figures ----------
       <span data-countup="175.8" data-decimals="1" data-suffix="M">175.8M</span> */
    var counters = document.querySelectorAll('[data-countup]');
    if (!counters.length) return;

    var render = function (el, value) {
      var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
      el.textContent = (el.getAttribute('data-prefix') || '') +
                       value.toFixed(decimals) +
                       (el.getAttribute('data-suffix') || '');
    };

    var run = function (el) {
      var target = parseFloat(el.getAttribute('data-countup'));
      if (isNaN(target)) return;
      if (reduced) { render(el, target); return; }

      var duration = 1100;
      var started = null;
      var step = function (now) {
        if (started === null) started = now;
        var t = Math.min((now - started) / duration, 1);
        var eased = 1 - Math.pow(1 - t, 3);      // ease-out cubic
        render(el, target * eased);
        if (t < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    };

    if ('IntersectionObserver' in window) {
      var counterObserver = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          run(entry.target);
          obs.unobserve(entry.target);
        });
      }, { threshold: 0.4 });
      counters.forEach(function (el) {
        render(el, 0);
        counterObserver.observe(el);
      });
    } else {
      counters.forEach(function (el) { run(el); });
    }
  });
})();
