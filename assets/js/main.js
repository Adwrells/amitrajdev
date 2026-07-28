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
      themeToggle.addEventListener('click', function () {
        var next = root.classList.contains('dark') ? 'light' : 'dark';
        applyTheme(next);
        setStoredTheme(next);
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
