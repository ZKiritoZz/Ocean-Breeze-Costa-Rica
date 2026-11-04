/**
 * Galería de fotos - carrusel con imágenes WhatsApp
 */
const GALLERY_IMAGES = [
    'WhatsApp Image 2026-06-03 at 10.41.19 AM (1).webp',
    'WhatsApp Image 2026-06-03 at 10.41.19 AM (4).webp',
    'WhatsApp Image 2026-06-03 at 10.41.19 AM (5).webp',
    'WhatsApp Image 2026-06-03 at 10.41.19 AM.webp',
    'WhatsApp Image 2026-06-03 at 10.46.51 AM (1).webp',
    'WhatsApp Image 2026-06-03 at 10.46.51 AM (2).webp',
    'WhatsApp Image 2026-06-03 at 10.46.51 AM (3).webp',
    'WhatsApp Image 2026-06-03 at 10.46.51 AM.webp',
    'WhatsApp Image 2026-06-03 at 10.46.52 AM (1).webp',
    'WhatsApp Image 2026-06-03 at 10.46.52 AM (2).webp',
    'WhatsApp Image 2026-06-03 at 10.46.52 AM (3).webp',
    'WhatsApp Image 2026-06-03 at 10.46.52 AM (4).webp',
    'WhatsApp Image 2026-06-03 at 10.46.52 AM (5).webp',
    'WhatsApp Image 2026-06-03 at 10.46.52 AM.webp',
    'WhatsApp Image 2026-06-03 at 10.46.53 AM (1).webp',
    'WhatsApp Image 2026-06-03 at 10.46.53 AM.webp',
    'lapas.webp',
    'pere.webp',
    'perezoso.webp',
    'tapir.webp',
    'tucan 2.webp',
    'tucan.webp',
    'tucan3.webp',
    'volcano.webp'
];

const GALLERY_DESKTOP_BREAKPOINT = 992;
const GALLERY_AUTOPLAY_MS = 5000;

let galleryCurrentIndex = 0;
let galleryAutoplayTimer = null;
let galleryResizeTimer = null;
let galleryLastSlidesPerView = null;

function getGalleryImageSrc(filename) {
    return `images/${encodeURIComponent(filename)}`;
}

function getGallerySlidesPerView() {
    return window.innerWidth >= GALLERY_DESKTOP_BREAKPOINT ? 2 : 1;
}

function chunkGalleryImages(images, chunkSize) {
    const chunks = [];
    for (let i = 0; i < images.length; i += chunkSize) {
        chunks.push(images.slice(i, i + chunkSize));
    }
    return chunks;
}

function createGalleryImageHtml(filename, photoNumber, eager) {
    return `
        <div class="gallery-frame">
            <img src="${getGalleryImageSrc(filename)}" class="gallery-carousel-img" alt="Ocean Breeze Costa Rica - Photo ${photoNumber}" loading="${eager ? 'eager' : 'lazy'}">
        </div>
    `;
}

function buildGallerySlidesHtml(slidesPerView) {
    const groups = chunkGalleryImages(GALLERY_IMAGES, slidesPerView);

    return groups.map((group, slideIndex) => {
        const imagesHtml = group.map((filename, imageIndex) => {
            const photoNumber = slideIndex * slidesPerView + imageIndex + 1;
            return createGalleryImageHtml(filename, photoNumber, slideIndex < 2);
        }).join('');

        const pairClass = slidesPerView > 1 ? ' gallery-slide--pair' : '';

        return `
            <div class="gallery-slide${pairClass}">
                ${imagesHtml}
            </div>
        `;
    }).join('');
}

function getGalleryElements() {
    return {
        track: document.getElementById('galleryTrack'),
        viewport: document.getElementById('galleryViewport'),
        dots: document.getElementById('galleryDots'),
        prev: document.querySelector('.gallery-prev'),
        next: document.querySelector('.gallery-next')
    };
}

function getGallerySlideCount() {
    const { track } = getGalleryElements();
    if (!track) return 0;
    return track.querySelectorAll('.gallery-slide').length;
}

function updateGalleryPosition(animate = true) {
    const { track, viewport } = getGalleryElements();
    if (!track || !viewport) return;

    track.style.transition = animate
        ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
        : 'none';
    track.style.transform = `translateX(-${galleryCurrentIndex * viewport.offsetWidth}px)`;
}

function updateGalleryControls() {
    const { prev, next, dots } = getGalleryElements();
    const maxIndex = Math.max(0, getGallerySlideCount() - 1);

    if (galleryCurrentIndex > maxIndex) {
        galleryCurrentIndex = maxIndex;
    }

    if (prev) prev.disabled = galleryCurrentIndex <= 0;
    if (next) next.disabled = galleryCurrentIndex >= maxIndex;

    if (!dots) return;

    const dotButtons = dots.querySelectorAll('.gallery-dot');
    dotButtons.forEach((dot, index) => {
        const isActive = index === galleryCurrentIndex;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
}

function buildGalleryDots() {
    const { dots } = getGalleryElements();
    if (!dots) return;

    const slideCount = getGallerySlideCount();
    dots.innerHTML = '';

    for (let i = 0; i < slideCount; i += 1) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'gallery-dot';
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => goToGallerySlide(i));
        dots.appendChild(dot);
    }
}

function goToGallerySlide(index, animate = true) {
    const maxIndex = Math.max(0, getGallerySlideCount() - 1);
    galleryCurrentIndex = Math.max(0, Math.min(index, maxIndex));
    updateGalleryPosition(animate);
    updateGalleryControls();
    restartGalleryAutoplay();
}

function nextGallerySlide() {
    const maxIndex = Math.max(0, getGallerySlideCount() - 1);
    goToGallerySlide(galleryCurrentIndex >= maxIndex ? 0 : galleryCurrentIndex + 1);
}

function prevGallerySlide() {
    const maxIndex = Math.max(0, getGallerySlideCount() - 1);
    goToGallerySlide(galleryCurrentIndex <= 0 ? maxIndex : galleryCurrentIndex - 1);
}

function stopGalleryAutoplay() {
    if (galleryAutoplayTimer) {
        clearInterval(galleryAutoplayTimer);
        galleryAutoplayTimer = null;
    }
}

function startGalleryAutoplay() {
    stopGalleryAutoplay();
    galleryAutoplayTimer = setInterval(nextGallerySlide, GALLERY_AUTOPLAY_MS);
}

function restartGalleryAutoplay() {
    startGalleryAutoplay();
}

function renderGallerySlides(slidesPerView, resetIndex = false) {
    const { track } = getGalleryElements();
    if (!track) return;

    if (resetIndex) {
        galleryCurrentIndex = 0;
    }

    track.innerHTML = buildGallerySlidesHtml(slidesPerView);
    buildGalleryDots();
    updateGalleryPosition(false);
    updateGalleryControls();
}

function initGalleryTouch() {
    const { viewport, track } = getGalleryElements();
    if (!viewport || !track) return;

    let touchStartX = 0;
    let touchDeltaX = 0;

    viewport.addEventListener('touchstart', (event) => {
        if (!event.touches.length) return;
        touchStartX = event.touches[0].clientX;
        touchDeltaX = 0;
        track.style.transition = 'none';
        stopGalleryAutoplay();
    }, { passive: true });

    viewport.addEventListener('touchmove', (event) => {
        if (!event.touches.length) return;
        touchDeltaX = event.touches[0].clientX - touchStartX;
        track.style.transform = `translateX(-${galleryCurrentIndex * viewport.offsetWidth - touchDeltaX}px)`;
    }, { passive: true });

    viewport.addEventListener('touchend', () => {
        const threshold = 50;
        if (touchDeltaX > threshold) {
            prevGallerySlide();
        } else if (touchDeltaX < -threshold) {
            nextGallerySlide();
        } else {
            goToGallerySlide(galleryCurrentIndex);
        }
        touchDeltaX = 0;
        restartGalleryAutoplay();
    });
}

function initGalleryControls() {
    const { prev, next } = getGalleryElements();
    if (!prev || !next) return;

    prev.addEventListener('click', () => {
        prevGallerySlide();
        restartGalleryAutoplay();
    });

    next.addEventListener('click', () => {
        nextGallerySlide();
        restartGalleryAutoplay();
    });
}

function handleGalleryResize() {
    clearTimeout(galleryResizeTimer);
    galleryResizeTimer = setTimeout(() => {
        const slidesPerView = getGallerySlidesPerView();
        if (slidesPerView === galleryLastSlidesPerView) {
            updateGalleryPosition(false);
            return;
        }

        galleryLastSlidesPerView = slidesPerView;
        renderGallerySlides(slidesPerView, true);
    }, 150);
}

function initPhotoGallery() {
    const { track } = getGalleryElements();
    if (!track) return;

    galleryLastSlidesPerView = getGallerySlidesPerView();
    renderGallerySlides(galleryLastSlidesPerView, true);
    initGalleryControls();
    initGalleryTouch();
    startGalleryAutoplay();

    window.addEventListener('resize', handleGalleryResize);
}
