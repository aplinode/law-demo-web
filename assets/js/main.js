document.addEventListener('DOMContentLoaded', () => {

  /* --- Nav Scroll Effect --- */
  const nav = document.querySelector('nav, header#main-nav, header.sticky');
  if (nav) {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        nav.classList.add('shadow-md');
        nav.classList.remove('shadow-sm');
      } else {
        nav.classList.remove('shadow-md');
        nav.classList.add('shadow-sm');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  }

  /* --- Smooth Scroll for anchor links --- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* --- Mobile Navigation Toggle --- */
  const mobileNav = document.getElementById('mobile-nav');
  const mobilePanel = document.getElementById('mobile-nav-panel');
  const menuBtns = document.querySelectorAll('#mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-nav-close');
  const backdrop = document.getElementById('mobile-nav-backdrop');

  function openMobileNav() {
    if (!mobileNav || !mobilePanel) return;
    mobileNav.classList.remove('invisible');
    mobileNav.classList.add('visible');
    requestAnimationFrame(() => {
      mobileNav.classList.remove('opacity-0');
      mobilePanel.classList.remove('translate-x-full', '-translate-x-full');
    });
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    if (!mobileNav || !mobilePanel) return;
    mobileNav.classList.add('opacity-0');
    mobilePanel.classList.add('translate-x-full');
    mobilePanel.classList.add('-translate-x-full');
    setTimeout(() => {
      mobileNav.classList.add('invisible');
      mobileNav.classList.remove('visible');
      document.body.style.overflow = '';
    }, 300);
  }

  menuBtns.forEach(btn => btn.addEventListener('click', openMobileNav));
  if (closeBtn) closeBtn.addEventListener('click', closeMobileNav);
  if (mobileNav) {
    mobileNav.addEventListener('click', (e) => {
      if (e.target === mobileNav || e.target === backdrop) closeMobileNav();
    });
  }

  /* --- Contact Form --- */
  const contactForm = document.querySelector('section#contact form, form:not(#appointmentForm)');
  if (contactForm && !contactForm.closest('#appointmentForm')) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you. Your inquiry has been submitted and will be reviewed by Advocate Ahmed.');
      contactForm.reset();
    });
  }

  /* --- Appointment Form --- */
  const form = document.getElementById('appointmentForm');
  if (form) {
    const successUI = document.getElementById('successUI');
    const summaryPractice = document.getElementById('summaryPractice');
    const summaryDateTime = document.getElementById('summaryDateTime');
    const timeSlots = document.querySelectorAll('.time-slot');
    const selectedTimeInput = document.getElementById('selectedTime');
    const practiceAreaSelect = document.getElementById('practiceArea');
    const dateInput = document.getElementById('prefDate');

    if (practiceAreaSelect) {
      practiceAreaSelect.addEventListener('change', (e) => {
        if (summaryPractice) summaryPractice.textContent = e.target.value;
      });
    }

    function updateSummaryTime() {
      if (summaryDateTime) {
        const date = dateInput ? dateInput.value || '---' : '---';
        const time = selectedTimeInput ? selectedTimeInput.value || '---' : '---';
        summaryDateTime.textContent = `${date} at ${time}`;
      }
    }

    if (dateInput) dateInput.addEventListener('change', updateSummaryTime);

    if (timeSlots) {
      timeSlots.forEach(slot => {
        slot.addEventListener('click', () => {
          timeSlots.forEach(s => s.classList.remove('bg-tertiary-container', 'text-primary', 'font-bold', 'border-tertiary-container'));
          slot.classList.add('bg-tertiary-container', 'text-primary', 'font-bold', 'border-tertiary-container');
          if (selectedTimeInput) selectedTimeInput.value = slot.getAttribute('data-time');
          updateSummaryTime();
        });
      });
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.innerHTML = '<span class="material-symbols-outlined animate-spin">sync</span> Processing...';
        btn.disabled = true;
      }
      setTimeout(() => {
        form.classList.add('hidden');
        if (successUI) successUI.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 1500);
    });

    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        const label = input.parentElement ? input.parentElement.querySelector('label') : null;
        if (label) label.classList.add('text-secondary');
      });
      input.addEventListener('blur', () => {
        const label = input.parentElement ? input.parentElement.querySelector('label') : null;
        if (label) label.classList.remove('text-secondary');
      });
    });
  }

  /* --- FAQ Accordion --- */
  window.toggleAccordion = function (header) {
    const isExpanded = header.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.faq-accordion-header').forEach(h => {
      h.setAttribute('aria-expanded', 'false');
    });
    header.setAttribute('aria-expanded', !isExpanded);
  };

  const firstFaqHeader = document.querySelector('.faq-accordion-header');
  if (firstFaqHeader) firstFaqHeader.setAttribute('aria-expanded', 'true');

  /* --- Case Process: Intersection Observer --- */
  const processObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-10');
        entry.target.classList.add('opacity-100', 'translate-y-0');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('#process .group, section[id="process"] .group').forEach(el => {
    el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
    processObserver.observe(el);
  });

  /* --- Reviews: Intersection Observer --- */
  const reviewCards = document.querySelectorAll('.bento-item');
  if (reviewCards.length) {
    const reviewObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 100);
        }
      });
    }, { threshold: 0.1 });

    reviewCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      reviewObserver.observe(card);
    });
  }

  /* --- Practice Areas: Card Icon Fill --- */
  const practiceCards = document.querySelectorAll('.practice-card');
  practiceCards.forEach(card => {
    const icon = card.querySelector('.material-symbols-outlined');
    if (icon) {
      card.addEventListener('mouseenter', () => { icon.style.fontVariationSettings = "'FILL' 1"; });
      card.addEventListener('mouseleave', () => { icon.style.fontVariationSettings = "'FILL' 0"; });
    }
  });

  /* --- Admin: Table Row Click --- */
  document.querySelectorAll('tr').forEach(row => {
    row.addEventListener('click', () => {
      row.classList.add('scale-[0.98]');
      setTimeout(() => row.classList.remove('scale-[0.98]'), 150);
    });
  });

  /* --- Button Press Effect --- */
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mousedown', function () { this.style.transform = 'scale(0.96)'; });
    button.addEventListener('mouseup', function () { this.style.transform = 'scale(1)'; });
    button.addEventListener('mouseleave', function () { this.style.transform = 'scale(1)'; });
  });

});
