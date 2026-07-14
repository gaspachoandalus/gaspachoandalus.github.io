/* ==========================================================================
   Ninon — Illustration portfolio
   Shared JS: mobile nav toggle + portfolio lightbox
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  // ---- Mobile nav toggle ----
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
    });
  }

  // ---- Lightbox for portfolio gallery ----
  var galleryItems = document.querySelectorAll('.gallery-item img');
  var lightbox = document.querySelector('.lightbox');

  if (galleryItems.length && lightbox) {
    var lightboxImg = lightbox.querySelector('img');
    var closeBtn = lightbox.querySelector('.lightbox-close');

    galleryItems.forEach(function (img) {
      img.addEventListener('click', function () {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('is-open');
      });
    });

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      lightboxImg.src = '';
    }

    closeBtn.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    });
  }
});
