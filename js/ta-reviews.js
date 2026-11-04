/**
 * Reseñas estilo Tripadvisor para la sección #comentarios
 */
const TA_PROFILE_URL = 'https://www.tripadvisor.com/Attraction_Review-g309240-d34116223-Reviews-Ocean_Breeze_Costa_Rica-Liberia_Province_of_Guanacaste.html';

const TA_REVIEWS = [
    {
        author: 'Rick T',
        contributions: 1,
        visited: 'March 2026',
        traveled: 'Traveled as a couple',
        written: 'March 15, 2026',
        text: 'We had a great time touring the preserve and seeing crocodiles, birds, iguanas, bats and monkeys. Sergio is the best guide you can ask for. Not only is he knowledgeable, but super friendly, courteous and helpful!',
        response: 'Rick, thank you for the feedback! I had a great time with you guys! Pura Vida! Hope to see you again.',
        responseDate: 'March 20, 2026'
    },
    {
        author: 'Matthew W',
        contributions: 1,
        visited: 'February 2026',
        traveled: '',
        written: 'February 28, 2026',
        text: 'Sergio was by far the best driver for our beach-hopping day. He was very personable and very knowledgeable about the local culture and the country as a whole. He did not rush us between stops, was extremely polite and very punctual. I would use him again in a heartbeat.',
        response: 'Matt, thank you for the feedback! It was great getting to know you! Pura Vida',
        responseDate: 'March 20, 2026'
    },
    {
        author: 'Elizabeth U',
        contributions: 2,
        visited: 'February 2026',
        traveled: 'Traveled with friends',
        written: 'February 25, 2026',
        text: 'Sergio is amazing and worked hard to make our day trip to the cloud forest incredible. He is very helpful and was an absolutely delightful person to guide us on our journey.',
        response: 'Thank you so much for the kind words. It was a great day!',
        responseDate: 'February 26, 2026'
    },
    {
        author: 'Tracy C',
        contributions: 2,
        visited: 'February 2026',
        traveled: 'Traveled as a couple',
        written: 'February 21, 2026',
        text: 'Sergio was incredibly helpful and very knowledgeable about the area and tourist destinations. We did a full-day tour that included waterfalls, a rainforest hike, a coffee plantation and lunch. He took tons of photos and videos and was extremely professional and respectful.',
        response: 'Thank you so much for the feedback. It was a wonderful day with all of you. I hope you enjoy the photos and videos and have lifetime memories to look back on.',
        responseDate: 'February 26, 2026'
    },
    {
        author: 'Oren S',
        contributions: 1,
        visited: 'February 2026',
        traveled: 'Traveled with family',
        written: 'February 20, 2026',
        text: 'Our family booked a trip to Palo Verde. Sergio picked us up right on time and was amazing throughout the expedition, including sharing more than 40 photos with us afterward. I would highly recommend trips with this group.',
        response: 'It was great to spend the day with you. I appreciate the kind words. I hope you all enjoy the photos from your trip.',
        responseDate: 'February 26, 2026'
    },
    {
        author: 'Tim W',
        contributions: 1,
        visited: 'February 2026',
        traveled: 'Traveled as a couple',
        written: 'February 6, 2026',
        text: 'Ocean Breeze was great to use in Costa Rica. Sergio and Vanessa were very professional and genuinely seemed excited to make our trip amazing. Sergio arrived on time and knew all the great places we would never have found on our own.',
        response: 'We had a great time with you and your partner. Thank you for your feedback',
        responseDate: 'February 18, 2026'
    },
    {
        author: 'Relax16086893297',
        contributions: 1,
        visited: 'January 2026',
        traveled: 'Traveled with friends',
        written: 'February 2, 2026',
        text: 'We had a great experience using Ocean Breeze during our trip to Costa Rica. From start to finish, everything was smooth, reliable and well organized. The driver was professional, friendly and always on time.',
        response: 'Thank you so much for the wonderful feedback. It was great spending the day with you and your friends. We hope to see you again soon! Best wishes!',
        responseDate: 'February 6, 2026'
    },
    {
        author: 'Josefina F',
        contributions: 4,
        visited: 'January 2026',
        traveled: 'Traveled with family',
        written: 'February 1, 2026',
        text: 'Sergio was an incredibly attentive tour guide and driver. We went to Tenorio Volcano National Park and enjoyed talking with him so much that we even asked him to join us for lunch. He was fun, kind and knowledgeable.',
        response: 'It was great to meet you and your family. Thank you for allowing us to make your vacation dreams come true. We hope you return to Costa Rica soon!',
        responseDate: 'February 6, 2026'
    },
    {
        author: 'William T',
        contributions: 5,
        visited: 'December 2025',
        traveled: '',
        written: 'January 31, 2026',
        text: 'Sergio was a fantastic driver and guide. Very well informed, kind and professional. Full of great suggestions. Next time I visit Costa Rica I will definitely hire him again. Highly recommended! Pura Vida!',
        response: 'Thank you so much for the feedback and kind words. It was a great day with you and your family. Pura Vida! It was a pleasure',
        responseDate: 'February 26, 2026'
    },
    {
        author: 'Jasmine V',
        contributions: 4,
        visited: 'December 2025',
        traveled: 'Traveled with family',
        written: 'January 23, 2026',
        text: 'We had a great experience with Ocean Breeze on our recent family trip to Costa Rica. Sergio and Vanessa were very professional and genuinely excited to make our trip the best it could be. Sergio was very punctual and knew incredible places.',
        response: 'Thank you so much for taking the time to provide your feedback.',
        responseDate: 'January 23, 2026'
    }
];

function getAuthorInitial(author) {
    const match = author.match(/[A-Za-z]/);
    return match ? match[0].toUpperCase() : '?';
}

function buildRatingBubbles(rating) {
    return Array.from({ length: rating }, () => '<span class="ta-rating-bubble" aria-hidden="true"></span>').join('');
}

function createReviewCard(review) {
    const traveledHtml = review.traveled
        ? `<p class="ta-review-meta">${review.traveled}</p>`
        : '';

    const responseHtml = review.response
        ? `<div class="ta-review-response">
                <p class="ta-review-response-label">Response from Ocean Breeze Transport and Tourism</p>
                <p class="ta-review-response-text">${review.response}</p>
                ${review.responseDate ? `<p class="ta-review-response-date">Written ${review.responseDate}</p>` : ''}
           </div>`
        : '';

    return `
        <div class="ta-review-slide">
        <article class="ta-review-card">
            <div class="ta-review-card-top">
                <div class="ta-review-user">
                    <div class="ta-review-avatar" aria-hidden="true">${getAuthorInitial(review.author)}</div>
                    <div>
                        <h3 class="ta-review-author">${review.author}</h3>
                        <p class="ta-review-contributions">${review.contributions} contribution${review.contributions === 1 ? '' : 's'}</p>
                    </div>
                </div>
            </div>
            <div class="ta-review-rating" aria-label="Rating: 5 out of 5">
                ${buildRatingBubbles(5)}
            </div>
            <p class="ta-review-text">${review.text}</p>
            <button type="button" class="ta-review-read-more" aria-expanded="false">
                Read more <i class="fas fa-chevron-down" aria-hidden="true"></i>
            </button>
            <a class="ta-review-of" href="${TA_PROFILE_URL}" target="_blank" rel="noopener noreferrer">Review of: Ocean Breeze Costa Rica</a>
            <p class="ta-review-meta">Visited ${review.visited}</p>
            ${traveledHtml}
            <p class="ta-review-written">Written ${review.written}</p>
            ${responseHtml}
        </article>
        </div>
    `;
}

function getTaSlidesPerView() {
    if (window.innerWidth >= 1200) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
}

function initTaReviewReadMore() {
    document.querySelectorAll('.ta-review-read-more').forEach((button) => {
        const card = button.closest('.ta-review-card');
        const text = card?.querySelector('.ta-review-text');
        if (!text) return;

        const isTruncated = text.scrollHeight > text.clientHeight + 2;
        if (!isTruncated) {
            button.style.display = 'none';
            return;
        }

        button.addEventListener('click', () => {
            const expanded = card.classList.toggle('is-expanded');
            button.setAttribute('aria-expanded', expanded ? 'true' : 'false');
            button.innerHTML = expanded
                ? 'Read less <i class="fas fa-chevron-up" aria-hidden="true"></i>'
                : 'Read more <i class="fas fa-chevron-down" aria-hidden="true"></i>';
        });
    });
}

function initTaReviewsCarousel() {
    const viewport = document.getElementById('taReviewsViewport');
    const track = document.getElementById('taReviewsTrack');
    const dotsContainer = document.getElementById('taReviewsDots');
    const prev = document.querySelector('.ta-reviews-prev');
    const next = document.querySelector('.ta-reviews-next');

    if (!viewport || !track || !prev || !next) return;

    let currentIndex = 0;
    let touchStartX = 0;
    let touchDeltaX = 0;

    const getSlides = () => track.querySelectorAll('.ta-review-slide');

    const getMaxIndex = () => Math.max(0, getSlides().length - getTaSlidesPerView());

    const getSlideStep = () => viewport.offsetWidth / getTaSlidesPerView();

    const updatePosition = (animate = true) => {
        track.style.transition = animate
            ? 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)'
            : 'none';
        track.style.transform = `translateX(-${currentIndex * getSlideStep()}px)`;
    };

    const updateControls = () => {
        const maxIndex = getMaxIndex();
        prev.disabled = currentIndex <= 0;
        next.disabled = currentIndex >= maxIndex;

        if (!dotsContainer) return;

        const dots = dotsContainer.querySelectorAll('.ta-reviews-dot');
        dots.forEach((dot, index) => {
            const isActive = index === currentIndex;
            dot.classList.toggle('is-active', isActive);
            dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
    };

    const buildDots = () => {
        if (!dotsContainer) return;

        dotsContainer.innerHTML = '';
        const totalSlides = getSlides().length;
        const showDots = getTaSlidesPerView() === 1;

        dotsContainer.classList.toggle('is-visible', showDots);

        if (!showDots) return;

        for (let i = 0; i < totalSlides; i += 1) {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'ta-reviews-dot';
            dot.setAttribute('role', 'tab');
            dot.setAttribute('aria-label', `Go to review ${i + 1}`);
            dot.addEventListener('click', () => goTo(i));
            dotsContainer.appendChild(dot);
        }
    };

    const goTo = (index, animate = true) => {
        currentIndex = Math.max(0, Math.min(index, getMaxIndex()));
        updatePosition(animate);
        updateControls();
    };

    prev.addEventListener('click', () => goTo(currentIndex - 1));
    next.addEventListener('click', () => goTo(currentIndex + 1));

    viewport.addEventListener('touchstart', (event) => {
        if (!event.touches.length) return;
        touchStartX = event.touches[0].clientX;
        touchDeltaX = 0;
        track.style.transition = 'none';
    }, { passive: true });

    viewport.addEventListener('touchmove', (event) => {
        if (!event.touches.length) return;
        touchDeltaX = event.touches[0].clientX - touchStartX;
        track.style.transform = `translateX(-${currentIndex * getSlideStep() - touchDeltaX}px)`;
    }, { passive: true });

    viewport.addEventListener('touchend', () => {
        const threshold = 50;
        if (touchDeltaX > threshold) {
            goTo(currentIndex - 1);
        } else if (touchDeltaX < -threshold) {
            goTo(currentIndex + 1);
        } else {
            goTo(currentIndex);
        }
        touchDeltaX = 0;
    });

    window.addEventListener('resize', () => {
        if (currentIndex > getMaxIndex()) {
            currentIndex = getMaxIndex();
        }
        buildDots();
        updatePosition(false);
        updateControls();
    });

    buildDots();
    goTo(0, false);
}

function initTaReviews() {
    const track = document.getElementById('taReviewsTrack');
    if (!track) return;

    track.innerHTML = TA_REVIEWS.map(createReviewCard).join('');
    initTaReviewReadMore();
    initTaReviewsCarousel();
}
