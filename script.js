// ══════════════════════════════════════════════════════
//  ALL JAVASCRIPT — self-contained, no truncation
// ══════════════════════════════════════════════════════

// ── 1. Smooth Scroll (renamed to avoid window.scrollTo conflict) ──
function navScrollTo(sectionId) {
  var el = document.getElementById(sectionId);
  if (!el) return;
  var navEl = document.getElementById('navbar');
  var navHeight = navEl ? navEl.offsetHeight : 68;
  var top = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
  window.scrollTo({ top: top, behavior: 'smooth' });
}

// ── 2. Theme Toggle ───────────────────────────────────
var htmlEl = document.documentElement;

function updateThemeIcon() {
  var isDark = htmlEl.getAttribute('data-theme') === 'dark';
  var icon = document.getElementById('themeIcon');
  if (icon) icon.className = isDark ? 'fas fa-sun theme-icon' : 'fas fa-moon theme-icon';
}

var themeToggleBtn = document.getElementById('themeToggle');
var themeIconBtn   = document.getElementById('themeIcon');

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', function () {
    var cur = htmlEl.getAttribute('data-theme');
    htmlEl.setAttribute('data-theme', cur === 'dark' ? 'light' : 'dark');
    updateThemeIcon();
    updateGithubIcons();
  });
}
if (themeIconBtn) {
  themeIconBtn.addEventListener('click', function () {
    var cur = htmlEl.getAttribute('data-theme');
    htmlEl.setAttribute('data-theme', cur === 'dark' ? 'light' : 'dark');
    updateThemeIcon();
    updateGithubIcons();
  });
}
updateThemeIcon();

// ── 3. GitHub / Express icon colour fix for light mode ──
function updateGithubIcons() {
  var isDark = htmlEl.getAttribute('data-theme') === 'dark';
  document.querySelectorAll('img[alt="GitHub"]').forEach(function (img) {
    img.style.filter = isDark ? 'invert(1)' : 'invert(0)';
  });
  document.querySelectorAll('img[alt="Express"]').forEach(function (img) {
    img.style.filter = isDark ? 'invert(1)' : 'invert(0.2)';
  });
}
updateGithubIcons();

// ── 4. Typing Animation ───────────────────────────────
var roles    = ['Software Developer','Data Analyst','Programmer','Part Time Gamer','Chess Player','Web Developer'];
var roleIdx  = 0;
var charIdx  = 0;
var deleting = false;
var typingEl = document.getElementById('typingText');

function typeWriter() {
  if (!typingEl) return;
  var word = roles[roleIdx];
  if (!deleting) {
    charIdx++;
    typingEl.textContent = word.slice(0, charIdx);
    if (charIdx === word.length) {
      setTimeout(function () { deleting = true; typeWriter(); }, 1800);
      return;
    }
  } else {
    charIdx--;
    typingEl.textContent = word.slice(0, charIdx);
    if (charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
    }
  }
  setTimeout(typeWriter, deleting ? 60 : 90);
}
typeWriter();

// ── 5. Hamburger / Mobile Menu ────────────────────────
var hamburger  = document.getElementById('hamburger');
var mobileMenu = document.getElementById('mobileMenu');
var menuOpen   = false;

function openMobileMenu() {
  menuOpen = true;
  if (mobileMenu) mobileMenu.classList.add('open');
  if (hamburger) {
    var spans = hamburger.querySelectorAll('span');
    if (spans[0]) spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
    if (spans[1]) spans[1].style.opacity   = '0';
    if (spans[2]) spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
  }
}

function closeMobileMenu() {
  menuOpen = false;
  if (mobileMenu) mobileMenu.classList.remove('open');
  if (hamburger) {
    hamburger.querySelectorAll('span').forEach(function (s) {
      s.style.transform = '';
      s.style.opacity   = '';
    });
  }
}

// Expose closeMobile globally so onclick= in HTML can call it
window.closeMobile = closeMobileMenu;

if (hamburger) {
  hamburger.addEventListener('click', function () {
    if (menuOpen) { closeMobileMenu(); } else { openMobileMenu(); }
  });
}

// ── 6. Active Nav Highlight + Back-to-top on scroll ──
var allSections = document.querySelectorAll('section[id]');
var navAnchors  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function () {
  var scrollY = window.scrollY;
  var current = '';

  allSections.forEach(function (sec) {
    if (scrollY >= sec.offsetTop - 140) {
      current = sec.id;
    }
  });

  navAnchors.forEach(function (a) {
    var href = a.getAttribute('href');
    a.classList.toggle('active', href === '#' + current);
  });

  var bt = document.getElementById('backTop');
  if (bt) bt.classList.toggle('visible', scrollY > 400);
});

// ── 7. Read More / Read Less ──────────────────────────
function toggleReadMore() {
  var extra = document.getElementById('aboutExtra');
  var btn   = document.getElementById('readMoreBtn');
  if (!extra || !btn) return;
  var isOpen = extra.classList.toggle('open');
  btn.innerHTML = isOpen
    ? '<i class="fas fa-chevron-up"></i> Read Less'
    : '<i class="fas fa-chevron-down"></i> Read More';
}
// Expose globally for onclick= attribute
window.toggleReadMore = toggleReadMore;

// ── 8. Footer Year ────────────────────────────────────
var yearEl = document.getElementById('footerYear');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── 9. Send Message button feedback ──────────────────
function handleSend() {
  var btn = document.querySelector('.btn-send');
  if (!btn) return;
  btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
  btn.style.background = 'linear-gradient(135deg,#22c55e,#16a34a)';
  setTimeout(function () {
    btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    btn.style.background = '';
  }, 3000);
}
window.handleSend = handleSend;

// ── 10. Scroll Reveal ─────────────────────────────────
var revealEls = document.querySelectorAll(
  '.exp-card, .skill-card, .project-card, .cert-card, .contact-box, .info-box'
);
var revealObs = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) {
      e.target.style.opacity   = '1';
      e.target.style.transform = e.target.style.transform.replace('translateY(30px)', '');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(function (el) {
  el.style.opacity    = '0';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  el.style.transform  = (el.style.transform || '') + ' translateY(30px)';
  revealObs.observe(el);
});