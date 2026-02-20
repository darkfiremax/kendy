// ===========================
// Translations
// ===========================
var translations = {
  es: {
    nav_inicio:       'Inicio',
    nav_experiencia:  'Experiencia',
    nav_proyectos:    'Proyectos',
    nav_contacto:     'Contáctame',

    hero_t1:   'Agencia Audiovisual',
    hero_t2:   'Fotografía & Video',
    hero_t3:   'Storytelling Visual',
    hero_t4:   'Contenido Creativo',
    hero_bio:  'Kendy es una agencia audiovisual dedicada a contar historias únicas a través de la fotografía, el video y el contenido creativo.',
    hero_cta:  'Trabajemos juntos →',

    exp_title:    'Experiencia',
    exp_viewall:  'ver proyectos →',
    exp_c1_title: 'Fotografía Comercial',
    exp_c1_sub:   'Marcas & Productos',
    exp_c2_title: 'Video Corporativo',
    exp_c2_sub:   'Empresas & Instituciones',
    exp_c3_title: 'Contenido Digital',
    exp_c3_sub:   'Redes Sociales',
    exp_c4_title: 'Eventos',
    exp_c4_sub:   'Cobertura Fotográfica',
    exp_c5_title: 'Retratos',
    exp_c5_sub:   'Personales & Profesionales',

    skills_label:      'MIS HERRAMIENTAS',
    skills_title:      'Competencias y Habilidades',
    skills_illustrator:'Vectorización & Branding',
    skills_photoshop:  'Edición & Retoque',
    skills_premiere:   'Edición de Video',
    skills_audition:   'Edición de Audio',

    proj_title:    'Proyectos',
    proj_subtitle: 'Trabajos que hablan por sí solos',
    proj_text:     'Cada proyecto es una oportunidad de contar una historia diferente. Desde campañas de marca hasta documentales cortos, el resultado siempre refleja la esencia de quien está detrás.',
    proj_btn:      'Ver más →',

    contact_title:    'Trabajemos juntos',
    contact_subtitle: 'Estoy lista para llevar tu próximo proyecto visual al siguiente nivel.',
    contact_location: 'Medellín, Colombia',
    contact_personal: 'Nacionalidad Colombiana • Estado Civil: Soltera',
    form_name:        'Nombre',
    form_message:     'Mensaje',
    form_submit:      'Enviar Mensaje',
    form_placeholder_name: 'Tu nombre',
    form_placeholder_msg:  'Cuéntame sobre tu proyecto...',

    port_label:      'MI TRABAJO',
    port_title:      'Portafolio Audiovisual',
    port_f_all:      'Todo',
    port_f_showreel: 'Videos',
    port_f_eventos:  'Eventos',
    port_f_foto:     'Fotos',
    port_feat_title: 'Showreel 2024',
    port_feat_desc:  'Un resumen de mis mejores proyectos, edición y cobertura audiovisual.',
    port_v1:         'Video 1',
    port_p1:         'Foto 1',
    port_v2:         'Video 2',
    port_cta_text:   'Visita mi canal para ver todos mis proyectos audiovisuales',
    port_cta_btn:    'Ir a mi Canal',

    footer_tagline: 'gracias por visitarnos',
    footer_copy:    'Kendy Agencia Audiovisual. Todos los derechos reservados.'
  },
  en: {
    nav_inicio:       'Home',
    nav_experiencia:  'Experience',
    nav_proyectos:    'Projects',
    nav_contacto:     'Contact Me',

    hero_t1:   'Audiovisual Agency',
    hero_t2:   'Photography & Video',
    hero_t3:   'Visual Storytelling',
    hero_t4:   'Creative Content',
    hero_bio:  'Kendy is an audiovisual agency dedicated to telling unique stories through photography, video, and creative content.',
    hero_cta:  "Let's work together →",

    exp_title:    'Experience',
    exp_viewall:  'view projects →',
    exp_c1_title: 'Commercial Photography',
    exp_c1_sub:   'Brands & Products',
    exp_c2_title: 'Corporate Video',
    exp_c2_sub:   'Companies & Institutions',
    exp_c3_title: 'Digital Content',
    exp_c3_sub:   'Social Media',
    exp_c4_title: 'Events',
    exp_c4_sub:   'Photo Coverage',
    exp_c5_title: 'Portraits',
    exp_c5_sub:   'Personal & Professional',

    skills_label:      'MY TOOLS',
    skills_title:      'Skills & Competencies',
    skills_illustrator:'Vectorization & Branding',
    skills_photoshop:  'Editing & Retouching',
    skills_premiere:   'Video Editing',
    skills_audition:   'Audio Editing',

    proj_title:    'Projects',
    proj_subtitle: 'Work that speaks for itself',
    proj_text:     'Each project is an opportunity to tell a different story. From brand campaigns to short documentaries, the result always reflects the essence of the person behind it.',
    proj_btn:      'See more →',

    contact_title:    "Let's work together",
    contact_subtitle: 'I am ready to take your next visual project to the next level.',
    contact_location: 'Medellín, Colombia',
    contact_personal: 'Colombian Nationality • Civil Status: Single',
    form_name:        'Name',
    form_message:     'Message',
    form_submit:      'Send Message',
    form_placeholder_name: 'Your name',
    form_placeholder_msg:  'Tell me about your project...',

    port_label:      'MY WORK',
    port_title:      'Audiovisual Portfolio',
    port_f_all:      'All',
    port_f_showreel: 'Videos',
    port_f_eventos:  'Events',
    port_f_foto:     'Photos',
    port_feat_title: 'Showreel 2024',
    port_feat_desc:  'A highlight of my best projects, editing, and audiovisual coverage.',
    port_v1:         'Video 1',
    port_p1:         'Photo 1',
    port_v2:         'Video 2',
    port_cta_text:   'Visit my channel to see all my audiovisual projects',
    port_cta_btn:    'Go to my Channel',

    footer_tagline: 'thanks for visiting',
    footer_copy:    'Kendy Audiovisual Agency. All rights reserved.'
  }
};

// ===========================
// Language Switcher
// ===========================
(function () {
  var currentLang = 'es';

  function applyLang(lang) {
    var dict = translations[lang];

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Update placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.placeholder = dict[key];
      }
    });

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Update all switcher buttons
    document.querySelectorAll('.lang-switcher').forEach(function (btn) {
      var active = btn.querySelector('.lang-active');
      var other  = btn.querySelector('.lang-other');
      if (active) active.textContent = lang.toUpperCase();
      if (other)  other.textContent  = (lang === 'es' ? 'EN' : 'ES');
    });

    currentLang = lang;
  }

  function toggle() {
    applyLang(currentLang === 'es' ? 'en' : 'es');
    // Close drawer if open
    var drawer = document.querySelector('.nav-drawer');
    if (drawer) drawer.classList.remove('open');
  }

  document.querySelectorAll('.lang-switcher').forEach(function (btn) {
    btn.addEventListener('click', toggle);
  });
})();

// ===========================
// Portfolio Filters
// ===========================
(function () {
  var filterBtns = document.querySelectorAll('.filter-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');

      // Update active state
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      // Show/hide items
      document.querySelectorAll('.portfolio-card, .portfolio-featured, .video-thumb[data-category], .video-featured[data-category]').forEach(function (el) {
        var cat = el.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          el.classList.remove('hidden');
        } else {
          el.classList.add('hidden');
        }
      });

      // Show/hide the video-grid wrapper based on whether any child is visible
      var videoGrid = document.querySelector('.video-grid');
      if (videoGrid) {
        var anyVisible = Array.from(videoGrid.querySelectorAll('.video-thumb')).some(function (t) {
          return !t.classList.contains('hidden');
        });
        videoGrid.style.display = anyVisible ? '' : 'none';
      }
    });
  });
})();

// ===========================
// Rotating Hero Titles
// ===========================
(function () {
  var titles = document.querySelectorAll('.rotating-titles .title');
  if (!titles.length) return;

  var current = 0;

  function rotate() {
    titles[current].classList.remove('active');
    current = (current + 1) % titles.length;
    titles[current].classList.add('active');
  }

  setInterval(rotate, 2800);
})();

// ===========================
// Mobile Nav Toggle
// ===========================
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var drawer = document.querySelector('.nav-drawer');
  if (!toggle || !drawer) return;

  toggle.addEventListener('click', function () {
    drawer.classList.toggle('open');
    toggle.setAttribute('aria-expanded', drawer.classList.contains('open'));
  });

  drawer.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      drawer.classList.remove('open');
    });
  });
})();

// ===========================
// Footer Year
// ===========================
(function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

// ===========================
// Scroll-reveal
// ===========================
(function () {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(
    '.destination-card, .musical-content, .podcast-content, .work-content, .skill-card'
  ).forEach(function (el) {
    el.classList.add('reveal');
    observer.observe(el);
  });
})();
