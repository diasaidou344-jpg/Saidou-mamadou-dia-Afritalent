/* ============================================================
   AfriTalent — main.js  |  JavaScript vanilla
   7 fonctionnalités obligatoires + effet 3D tilt + particules
   ============================================================ */

/* ================================================================
   FONCTIONNALITÉ 1 — DARK MODE avec localStorage
   ================================================================ */
function initDarkMode() {
  const toggle = document.getElementById('darkModeToggle');
  if (!toggle) return;

  const saved = localStorage.getItem('afri-theme');
  if (saved === 'light') {
    document.body.classList.remove('dark-mode');
    toggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
  } else {
    document.body.classList.add('dark-mode');
    toggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
  }

  toggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      toggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
      localStorage.setItem('afri-theme', 'dark');
    } else {
      toggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
      localStorage.setItem('afri-theme', 'light');
    }
  });
}

/* ================================================================
   FONCTIONNALITÉ 5 — NAVBAR DYNAMIQUE AU SCROLL
   ================================================================ */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

/* ================================================================
   FONCTIONNALITÉ 6 — BOUTON RETOUR EN HAUT
   ================================================================ */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', function () {
    btn.classList.toggle('visible', window.scrollY > 300);
  });
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ================================================================
   FONCTIONNALITÉ 7 — ANIMATIONS FADE-IN AU SCROLL
   IntersectionObserver : les sections apparaissent en fondu
   ================================================================ */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(function (el) { observer.observe(el); });
}

/* ================================================================
   FONCTIONNALITÉ 2 — COMPTEURS ANIMÉS (IntersectionObserver)
   ================================================================ */
function animateCounter(el, target, duration) {
  let start = null;
  function step(ts) {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); /* easeOutCubic */
    el.textContent = Math.floor(eased * target).toLocaleString('fr-FR');
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target.toLocaleString('fr-FR');
  }
  requestAnimationFrame(step);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target, parseInt(entry.target.dataset.count, 10), 2200);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(function (el) { el.textContent = '0'; observer.observe(el); });
}

/* ================================================================
   FONCTIONNALITÉ 3 — FILTRAGE DYNAMIQUE DES FREELANCES
   Affiche/masque les cartes par catégorie sans rechargement
   ================================================================ */
function initFilters() {
  const btns  = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.freelance-card-wrapper');
  if (!btns.length || !cards.length) return;

  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');

      cards.forEach(function (card) {
        card.style.display =
          (cat === 'all' || card.getAttribute('data-category') === cat)
            ? 'block' : 'none';
      });
    });
  });
}

/* ================================================================
   FONCTIONNALITÉ 4 — VALIDATION FORMULAIRE DE CONTACT
   Regex email, min 20 chars, messages d'erreur, succès stylisé
   ================================================================ */
function showError(field, msg) {
  field.classList.add('is-invalid');
  field.classList.remove('is-valid');
  const fb = field.parentElement.querySelector('.invalid-feedback');
  if (fb) { fb.textContent = msg; fb.style.display = 'block'; }
}
function showSuccess(field) {
  field.classList.remove('is-invalid');
  field.classList.add('is-valid');
  const fb = field.parentElement.querySelector('.invalid-feedback');
  if (fb) fb.style.display = 'none';
}
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let ok = true;

    const fn = document.getElementById('firstName');
    if (!fn.value.trim()) { showError(fn, 'Prénom obligatoire.'); ok = false; } else showSuccess(fn);

    const ln = document.getElementById('lastName');
    if (!ln.value.trim()) { showError(ln, 'Nom obligatoire.'); ok = false; } else showSuccess(ln);

    const em = document.getElementById('emailField');
    if (!em.value.trim()) { showError(em, 'Email obligatoire.'); ok = false; }
    else if (!validateEmail(em.value.trim())) { showError(em, 'Format invalide. Ex : nom@email.com'); ok = false; }
    else showSuccess(em);

    const su = document.getElementById('subjectField');
    if (!su.value) { showError(su, 'Choisissez un sujet.'); ok = false; } else showSuccess(su);

    const ms = document.getElementById('messageField');
    if (!ms.value.trim()) { showError(ms, 'Message obligatoire.'); ok = false; }
    else if (ms.value.trim().length < 20) { showError(ms, `Trop court (${ms.value.trim().length}/20 min).`); ok = false; }
    else showSuccess(ms);

    if (ok) {
      form.style.display = 'none';
      const s = document.getElementById('formSuccess');
      if (s) s.style.display = 'block';
    }
  });

  /* Effacer erreur dès que l'utilisateur tape */
  form.querySelectorAll('input, select, textarea').forEach(function (input) {
    input.addEventListener('input', function () {
      if (input.value.trim()) {
        input.classList.remove('is-invalid');
        const fb = input.parentElement.querySelector('.invalid-feedback');
        if (fb) fb.style.display = 'none';
      }
    });
  });
}

/* ================================================================
   EFFET 3D TILT AU SURVOL — la grille se déforme en 3D
   Appliqué sur tous les éléments .card-3d, .bento-card, .freelance-card,
   .category-card, .team-card, .value-card, .pricing-card
   ================================================================ */
function initTilt3D() {
  /* Sélectionne toutes les cartes qui doivent avoir l'effet 3D */
  const cards = document.querySelectorAll(
    '.card-3d, .bento-card, .freelance-card, .category-card, .team-card, .value-card, .pricing-card'
  );

  cards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      const rect   = card.getBoundingClientRect();
      /* Position de la souris relative à la carte (de -1 à 1) */
      const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
      const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;

      /* Inclinaison max : 14 degrés */
      const rotateY =  x * 14;
      const rotateX = -y * 14;

      card.style.transform =
        `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04,1.04,1.04)`;

      /* Reflet de lumière qui suit la souris */
      const glowX = ((e.clientX - rect.left) / rect.width  * 100).toFixed(0);
      const glowY = ((e.clientY - rect.top)  / rect.height * 100).toFixed(0);
      card.style.background =
        `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(0,200,150,.12) 0%, var(--bg-card) 60%)`;
    });

    /* Remet la carte à plat quand la souris part */
    card.addEventListener('mouseleave', function () {
      card.style.transform = '';
      card.style.background = '';
      card.style.transition = 'transform .6s cubic-bezier(.2,.8,.3,1), box-shadow .4s, background .4s';
    });

    card.addEventListener('mouseenter', function () {
      card.style.transition = 'transform .12s ease-out, box-shadow .4s, background .1s';
    });
  });
}

/* ================================================================
   PARTICULES ANIMÉES DANS LE HERO
   Canvas 2D : des points verts/dorés qui flottent et se relient
   ================================================================ */
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W = canvas.offsetWidth;
  let H = canvas.offsetHeight;
  canvas.width  = W;
  canvas.height = H;

  /* Redimensionnement responsive */
  window.addEventListener('resize', function () {
    W = canvas.offsetWidth; H = canvas.offsetHeight;
    canvas.width = W; canvas.height = H;
  });

  /* Créer 60 particules */
  const particles = [];
  const COLORS = ['rgba(0,200,150,', 'rgba(255,215,0,', 'rgba(0,255,178,'];
  const COUNT = 60;

  for (let i = 0; i < COUNT; i++) {
    particles.push({
      x:    Math.random() * W,
      y:    Math.random() * H,
      r:    Math.random() * 2 + 1,      /* rayon entre 1 et 3px */
      vx:   (Math.random() - 0.5) * 0.4, /* vitesse X */
      vy:   (Math.random() - 0.5) * 0.4, /* vitesse Y */
      col:  COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.6 + 0.2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    /* Déplacer et dessiner chaque particule */
    particles.forEach(function (p) {
      p.x += p.vx; p.y += p.vy;
      /* Rebond sur les bords */
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.col + p.alpha + ')';
      ctx.fill();
    });

    /* Relier les particules proches par une ligne */
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx   = particles[i].x - particles[j].x;
        const dy   = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) { /* Distance max de connexion */
          const opacity = (1 - dist / 120) * 0.25;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,200,150,${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }
  draw();
}

/* ================================================================
   EFFET TYPEWRITER — le texte s'écrit lettre par lettre
   Cible l'élément avec id="typewriter"
   ================================================================ */
function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const texts = [
    'développeurs talentueux',
    'designers créatifs',
    'data scientists brillants',
    'experts DevOps & Cloud',
    'marketeurs digitaux'
  ];
  let textIndex = 0;
  let charIndex  = 0;
  let deleting   = false;

  function type() {
    const current = texts[textIndex];

    if (!deleting) {
      /* Phase écriture */
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        /* Pause avant d'effacer */
        setTimeout(function () { deleting = true; type(); }, 1800);
        return;
      }
    } else {
      /* Phase effacement */
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    }
    setTimeout(type, deleting ? 60 : 100);
  }
  type();
}

/* ================================================================
   ANNÉE DYNAMIQUE DANS LE FOOTER
   ================================================================ */
function initFooterYear() {
  const el = document.getElementById('currentYear');
  if (el) el.textContent = new Date().getFullYear();
}

/* ================================================================
   LIEN ACTIF DANS LA NAVBAR
   ================================================================ */
function initActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
    if (link.getAttribute('href') === page) link.classList.add('active');
  });
}

/* ================================================================
   INITIALISATION — DOMContentLoaded
   ================================================================ */
document.addEventListener('DOMContentLoaded', function () {
  initDarkMode();         /* 1 */
  initCounters();         /* 2 */
  initFilters();          /* 3 */
  initContactForm();      /* 4 */
  initNavbarScroll();     /* 5 */
  initBackToTop();        /* 6 */
  initScrollAnimations(); /* 7 */
  initTilt3D();           /* Effet 3D tilt */
  initParticles();        /* Particules canvas */
  initTypewriter();       /* Texte animé */
  initFooterYear();       /* Année footer */
  initActiveNav();        /* Lien actif navbar */
});
