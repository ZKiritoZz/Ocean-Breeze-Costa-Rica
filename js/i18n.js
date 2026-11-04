/**
 * Internationalization (i18n) system for Ocean Breeze Costa Rica
 * Handles language switching between Spanish and English
 */

let currentLanguage = 'en'; // Default language

/**
 * Initialize the translation system
 */
function initI18n() {
    console.log('Initializing i18n system...');
    
    // Check if translations are loaded
    if (typeof translations === 'undefined') {
        console.error('Translations not loaded! Make sure translations.js is loaded before i18n.js');
        return;
    }
    
    // Load saved language preference or default to English
    const savedLang = localStorage.getItem('oceanBreezeLang');
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
        currentLanguage = savedLang;
    } else {
        // Default to English if no saved preference
        currentLanguage = 'en';
        localStorage.removeItem('oceanBreezeLanguage'); // clear legacy key
    }
    
    console.log('Current language:', currentLanguage);
    
    // Update the page language
    updateLanguage(currentLanguage);
    
    bindLanguageToggle();
}

/**
 * Attach a single click handler to the language toggle button
 */
function bindLanguageToggle() {
    if (document.documentElement.hasAttribute('data-lang-toggle-bound')) {
        return;
    }

    document.documentElement.setAttribute('data-lang-toggle-bound', 'true');
    document.addEventListener('click', function(e) {
        const languageToggle = e.target.closest('#languageToggle');
        if (!languageToggle) return;
        e.preventDefault();
        e.stopPropagation();
        toggleSiteLanguage();
    });

    console.log('Language toggle listener added successfully');
}

/**
 * Toggle between Spanish and English
 * Named uniquely to avoid collision with TripAdvisor's global toggleLanguage()
 */
function toggleSiteLanguage() {
    console.log('Toggle language called. Current:', currentLanguage);
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    console.log('New language:', currentLanguage);
    updateLanguage(currentLanguage);
    localStorage.setItem('oceanBreezeLang', currentLanguage);
}

/**
 * Update the entire page to the specified language
 */
function updateLanguage(lang) {
    console.log('updateLanguage called with lang:', lang);
    
    if (!translations || !translations[lang]) {
        console.error('Translations not loaded or language not found:', lang);
        console.error('Available languages:', translations ? Object.keys(translations) : 'translations object not found');
        return;
    }
    
    currentLanguage = lang;
    const t = translations[lang];
    
    console.log('Translation object loaded, updating page...', {
        hasTours: !!t.tours,
        tourKeys: t.tours ? Object.keys(t.tours).slice(0, 5) : 'no tours'
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update language button text
    const currentLangSpan = document.getElementById('currentLang');
    if (currentLangSpan) {
        currentLangSpan.textContent = lang.toUpperCase();
    }
    
    // Update navigation
    updateNavigation(t);

    // Update WhatsApp float label
    updateWhatsApp(t);
    
    // Update hero section
    updateHero(t);
    
    // Update tours section
    updateToursSection(t);
    
    // Update destinations section
    updateDestinationsSection(t);
    
    // Update transport section
    updateTransportSection(t);
    
    // Update map section
    updateMapSection(t);

    // Update reviews section
    updateReviewsSection(t);

    // Update gallery section
    updateGallerySection(t);

    // Update institutional page heroes
    updateInstitutionalPages(t);
    
    // Update contact section
    updateContactSection(t);
    
    // Update footer
    updateFooter(t);

    // Show language-specific blocks on institutional pages
    updateLangBlocks(lang);
    
    // Update all tour cards - use setTimeout to ensure DOM is ready
    setTimeout(() => {
        updateTourCards(t);
    }, 50);
}

/**
 * Update navigation elements
 */
function updateNavigation(t) {
    const navLinks = document.querySelectorAll('[data-translate^="nav."]');
    navLinks.forEach(link => {
        const key = link.getAttribute('data-translate').replace('nav.', '');
        if (t.nav[key]) {
            link.textContent = t.nav[key];
        }
    });
}

/**
 * Update WhatsApp floating CTA label
 */
function updateWhatsApp(t) {
    const label = document.querySelector('[data-translate="whatsapp.bookNow"]');
    if (label && t.whatsapp && t.whatsapp.bookNow) {
        label.textContent = t.whatsapp.bookNow;
    }

    const floatBtn = document.querySelector('.whatsapp-float');
    if (floatBtn && t.whatsapp && t.whatsapp.bookNow) {
        floatBtn.setAttribute('aria-label', t.whatsapp.bookNow);
    }
}

/**
 * Update hero section
 */
function updateHero(t) {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) heroTitle.textContent = t.hero.title;
    
    const heroSubtitle = document.querySelector('.hero .lead');
    if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;
    
    const exploreBtn = document.querySelector('.btn-explorar');
    if (exploreBtn) exploreBtn.textContent = t.hero.exploreTours;
    
    const reserveBtn = document.querySelector('.btn-reservar');
    if (reserveBtn) reserveBtn.textContent = t.hero.reserveNow;
}

/**
 * Update tours section header
 */
function updateToursSection(t) {
    const sectionTitle = document.querySelector('#tours h2');
    if (sectionTitle) sectionTitle.textContent = t.tours.sectionTitle;
    
    const sectionSubtitle = document.querySelector('#tours p');
    if (sectionSubtitle) sectionSubtitle.textContent = t.tours.sectionSubtitle;
    
    // Update service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        const title = card.querySelector('.card-title');
        const description = card.querySelector('.card-text');
        
        const services = [
            'islands', 'beaches', 'rivers', 'mountains', 'waterfalls', 'transport'
        ];
        
        if (services[index] && t.tours.services[services[index]]) {
            if (title) title.textContent = t.tours.services[services[index]].title;
            if (description) description.textContent = t.tours.services[services[index]].description;
        }
    });
}

/**
 * Update destinations section header
 */
function updateDestinationsSection(t) {
    const titleElement = document.querySelector('#destinos h2 span:first-child');
    if (titleElement) titleElement.textContent = t.destinations.title;
    
    const subtitle = document.querySelector('#destinos .text-muted');
    if (subtitle) subtitle.textContent = t.destinations.subtitle;

    document.querySelectorAll('[data-translate="destinations.mostPopular"]').forEach((badge) => {
        badge.textContent = t.destinations.mostPopular;
    });
}

/**
 * Update transport section
 */
function updateTransportSection(t) {
    const titleElements = document.querySelectorAll('#transporte h2 span');
    if (titleElements[0]) titleElements[0].textContent = t.transport.title;
    if (titleElements[1]) titleElements[1].textContent = t.transport.title2;
    
    const subtitle = document.querySelector('#transporte .text-muted');
    if (subtitle) subtitle.textContent = t.transport.subtitle;
    
    // Update transport features
    const features = document.querySelectorAll('#transporte .list-unstyled li');
    const featureKeys = [
        'modernVans', 'bilingualDrivers', 'airportTransfers', 
        'availability', 'lastMinute', 'contact'
    ];
    
    features.forEach((feature, index) => {
        if (featureKeys[index] && t.transport.features[featureKeys[index]]) {
            const icon = feature.querySelector('i');
            const text = feature.textContent.trim();
            const newText = t.transport.features[featureKeys[index]];
            
            if (featureKeys[index] === 'contact') {
                // Keep the phone number
                const phoneLink = feature.querySelector('a');
                if (phoneLink) {
                    feature.innerHTML = `<i class="fas fa-phone me-2" style="color: var(--primary-green);"></i> ${newText}: ${phoneLink.outerHTML}`;
                }
            } else {
                feature.innerHTML = icon ? `${icon.outerHTML} ${newText}` : newText;
            }
        }
    });
    
    // Update quote button
    const quoteBtn = document.querySelector('#transporte .btn-mas-info');
    if (quoteBtn) quoteBtn.textContent = t.transport.quoteButton;
    
    // Update carousel controls
    const prevBtn = document.querySelector('#transportCarousel .carousel-control-prev .visually-hidden');
    if (prevBtn) prevBtn.textContent = t.transport.previous;
    
    const nextBtn = document.querySelector('#transportCarousel .carousel-control-next .visually-hidden');
    if (nextBtn) nextBtn.textContent = t.transport.next;
}

/**
 * Update map section
 */
function updateMapSection(t) {
    const titleElements = document.querySelectorAll('#mapa h2 span');
    if (titleElements[0]) titleElements[0].textContent = t.map.title;
    if (titleElements[1]) titleElements[1].textContent = t.map.title2;
    
    const subtitle = document.querySelector('#mapa .text-muted');
    if (subtitle) subtitle.textContent = t.map.subtitle;
}

/**
 * Update reviews section
 */
function updateReviewsSection(t) {
    const titleElements = document.querySelectorAll('#comentarios h2 span');
    if (titleElements[0]) titleElements[0].textContent = t.reviews.title;
    if (titleElements[1]) titleElements[1].textContent = t.reviews.title2;
}

/**
 * Update gallery section
 */
function updateGallerySection(t) {
    const titleElements = document.querySelectorAll('#galeria h2 span');
    if (titleElements[0]) titleElements[0].textContent = t.gallery.title;
    if (titleElements[1]) titleElements[1].textContent = t.gallery.title2;

    const subtitle = document.querySelector('#galeria .text-muted');
    if (subtitle) subtitle.textContent = t.gallery.subtitle;

    const prevLabel = document.querySelector('#galleryCarousel .gallery-prev .visually-hidden');
    if (prevLabel) prevLabel.textContent = t.gallery.previous;

    const nextLabel = document.querySelector('#galleryCarousel .gallery-next .visually-hidden');
    if (nextLabel) nextLabel.textContent = t.gallery.next;
}

/**
 * Update institutional inner-page heroes
 */
function updateInstitutionalPages(t) {
    if (!t.pages) return;
    const title = document.querySelector('[data-translate="pages.title"]');
    const subtitle = document.querySelector('[data-translate="pages.subtitle"]');
    const page = document.body.getAttribute('data-page');
    if (!page || !t.pages[page]) return;
    if (title) title.textContent = t.pages[page].title;
    if (subtitle) subtitle.textContent = t.pages[page].subtitle;
}

/**
 * Update contact section
 */
function updateContactSection(t) {
    const title = document.querySelector('#contacto h2 span');
    if (title) title.textContent = t.contact.title;
    
    const subtitle = document.querySelector('#contacto .text-muted');
    if (subtitle) subtitle.textContent = t.contact.subtitle;
    
    // Update form fields
    const fullNameInput = document.getElementById('nombreCompleto');
    if (fullNameInput) fullNameInput.placeholder = t.contact.form.fullName;
    
    const emailInput = document.getElementById('emailContacto');
    if (emailInput) emailInput.placeholder = t.contact.form.email;
    
    const interestSelect = document.getElementById('interesPrincipal');
    if (interestSelect) {
        const firstOption = interestSelect.querySelector('option[value=""]');
        if (firstOption) firstOption.textContent = t.contact.form.mainInterest;
        
        // Update tour options
        const tourOptions = interestSelect.querySelectorAll('option[data-tour]');
        tourOptions.forEach(option => {
            const tourId = option.getAttribute('data-tour');
            if (tourId && t.tours[tourId]) {
                option.textContent = t.tours[tourId].name;
            }
        });
        
        // Update private transport option
        const transportOption = interestSelect.querySelector('option[value="transporte-privado"]');
        if (transportOption) transportOption.textContent = t.contact.form.privateTransport;
    }
    
    const desdeInput = document.getElementById('desde');
    if (desdeInput) desdeInput.placeholder = t.contact.form.from;
    
    const hastaInput = document.getElementById('hasta');
    if (hastaInput) hastaInput.placeholder = t.contact.form.destination;
    
    const mensajeTextarea = document.getElementById('mensaje');
    if (mensajeTextarea) mensajeTextarea.placeholder = t.contact.form.message;
    
    const sendButton = document.querySelector('#contactForm button[type="submit"]');
    if (sendButton) sendButton.textContent = t.contact.form.sendMessage;
}

/**
 * Update footer
 */
function updateFooter(t) {
    const footerTitles = Array.from(document.querySelectorAll('footer h5[data-translate]'));
    footerTitles.forEach((title) => {
        const key = title.getAttribute('data-translate').replace('footer.', '');
        if (t.footer[key]) title.textContent = t.footer[key];
    });

    const footerDescription = document.querySelector('footer [data-translate="footer.description"]');
    if (footerDescription) footerDescription.textContent = t.footer.description;

    const compliance = document.querySelector('[data-translate="footer.compliance"]');
    if (compliance && t.footer.compliance) compliance.textContent = t.footer.compliance;

    const rightsText = document.querySelector('footer [data-translate="footer.rights"]');
    if (rightsText) {
        const yearSpan = document.getElementById('currentYear');
        const year = yearSpan ? yearSpan.textContent : new Date().getFullYear();
        rightsText.innerHTML = `&copy; <span id="currentYear">${year}</span> ${t.footer.rights}`;
    }
}

/**
 * Toggle bilingual blocks on institutional pages
 */
function updateLangBlocks(lang) {
    document.querySelectorAll('[data-lang]').forEach((block) => {
        const isMatch = block.getAttribute('data-lang') === lang;
        block.hidden = !isMatch;
        block.setAttribute('aria-hidden', isMatch ? 'false' : 'true');
    });
}

/**
 * Update all tour cards
 */
function updateTourCards(t) {
    console.log('updateTourCards called with language:', currentLanguage);
    console.log('Available tours in translations:', Object.keys(t.tours));
    
    const tourIds = [
        'playa-conchal', 'volcan-arenal', 'monteverde', 'borinquen-mountain',
        'la-leona-waterfall', 'rio-celeste', 'catamaran-sunset', 'miravalles',
        'rincon-vieja', 'palo-verde', 'hacienda-guachipelin', 'sport-fishing',
        'colorado-river-rafting', 'atvs', 'llanos-cortez-sloth', 'paddleboard-kayak'
    ];
    
    let updatedCount = 0;
    tourIds.forEach(tourId => {
        const tourCard = document.getElementById(`tour-${tourId}`);
        if (!tourCard) {
            console.warn(`Tour card not found: ${tourId}`);
            return;
        }
        if (!t.tours[tourId]) {
            console.warn(`Translation missing for tour: ${tourId}`, {
                availableTours: Object.keys(t.tours).filter(k => k !== 'common' && k !== 'sectionTitle' && k !== 'sectionSubtitle' && !k.startsWith('services'))
            });
            return;
        }
        
        const tourData = t.tours[tourId];
        const common = t.tours.common;
        
        if (!common) {
            console.error('Common translations not found!');
            return;
        }
        
        console.log(`Updating tour: ${tourId}`, {
            name: tourData.name,
            hasLocation: !!tourData.location,
            hasDescription: !!tourData.description,
            hasDetails: !!tourData.details
        });
        
        // Update front card - Title
        const frontTitle = tourCard.querySelector('.destination-title');
        if (frontTitle) frontTitle.textContent = tourData.name;
        
        // Update front card - Location (if exists)
        const locationP = tourCard.querySelector('.destination-location');
        if (locationP && tourData.location) {
            const icon = locationP.querySelector('i');
            locationP.innerHTML = icon ? `${icon.outerHTML}${tourData.location}` : tourData.location;
        }
        
        // Update front card - Description (use first sentence or full description)
        const frontDescription = tourCard.querySelector('.destination-description');
        if (frontDescription && tourData.description) {
            // Use the first sentence for the front card if it's too long
            const desc = tourData.description;
            const firstSentence = desc.split('.')[0];
            frontDescription.textContent = desc.length > 200 ? firstSentence + '.' : desc;
        }
        
        // Update front card - Duration
        const durationSpan = tourCard.querySelector('.destination-duration');
        if (durationSpan) {
            const icon = durationSpan.querySelector('i');
            let durationText = '';
            if (tourData.details && tourData.details.duration) {
                durationText = tourData.details.duration;
            } else if (tourId === 'catamaran-sunset') {
                durationText = common.sunset;
            } else {
                durationText = common.fullDay;
            }
            durationSpan.innerHTML = icon ? `${icon.outerHTML}${durationText}` : durationText;
        }
        
        // Update front card - Price text
        const priceSpan = tourCard.querySelector('.destination-price');
        if (priceSpan) {
            const priceAmount = priceSpan.querySelector('.price-amount');
            const priceText = priceAmount ? priceAmount.textContent : '';
            priceSpan.innerHTML = `${common.fromPrice} <strong class="price-amount">${priceText}</strong>`;
        }
        
        // Update front card - Buttons
        const moreInfoBtn = tourCard.querySelector('.btn-mas-info');
        if (moreInfoBtn) moreInfoBtn.textContent = common.moreInfo;
        
        const reserveBtn = tourCard.querySelector('.btn-destination[data-tour]');
        if (reserveBtn) reserveBtn.textContent = common.reserveTour;
        
        // Update back card - Title
        const backTitle = tourCard.querySelector('.destination-back-title');
        if (backTitle) backTitle.textContent = tourData.name;
        
        // Update tabs
        const tabButtons = tourCard.querySelectorAll('.tab-btn');
        if (tabButtons.length >= 3) {
            tabButtons[0].textContent = common.description;
            tabButtons[1].textContent = common.details;
            tabButtons[2].textContent = common.rates;
        }
        
        // Update description tab - Replace all paragraphs
        const descriptionPanel = tourCard.querySelectorAll('.tab-panel')[0];
        if (descriptionPanel && tourData.description) {
            // Clear existing content
            descriptionPanel.innerHTML = '';
            
            // Add first paragraph
            const p1 = document.createElement('p');
            p1.textContent = tourData.description;
            descriptionPanel.appendChild(p1);
            
            // Add second paragraph if exists
            if (tourData.description2) {
                const p2 = document.createElement('p');
                p2.className = 'mt-3';
                p2.textContent = tourData.description2;
                descriptionPanel.appendChild(p2);
            }
        }
        
        // Update details tab - Complete rewrite
        const detailsPanel = tourCard.querySelectorAll('.tab-panel')[1];
        if (detailsPanel && tourData.details) {
            const details = tourData.details;
            
            // Clear existing content
            detailsPanel.innerHTML = '';
            
            // Add zones if exists
            if (details.zones) {
                const zonesP = document.createElement('p');
                zonesP.innerHTML = `<strong>${common.zones || 'Zones'}:</strong> ${details.zones}`;
                detailsPanel.appendChild(zonesP);
            }

            // Add pickup time (unless skipped for this tour)
            if (!details.skipPickup) {
                const pickupP = document.createElement('p');
                pickupP.innerHTML = `<strong>${common.pickupTime}:</strong> ${details.pickupTime || '7:00 am'}`;
                detailsPanel.appendChild(pickupP);
            }
            
            // Add return time if exists
            if (details.returnTime) {
                const returnP = document.createElement('p');
                returnP.innerHTML = `<strong>${common.returnTime}:</strong> ${details.returnTime}`;
                detailsPanel.appendChild(returnP);
            }
            
            // Add driving time if exists
            if (details.drivingTime) {
                const drivingP = document.createElement('p');
                drivingP.innerHTML = `<strong>${common.drivingTime}:</strong> ${details.drivingTime}`;
                detailsPanel.appendChild(drivingP);
            }
            
            // Add tour leaves from if exists
            if (details.leavesFrom) {
                const leavesP = document.createElement('p');
                leavesP.innerHTML = `<strong>${common.tourLeavesFrom}:</strong> ${details.leavesFrom}`;
                detailsPanel.appendChild(leavesP);
            }
            
            // Add tour includes
            if (details.includes && details.includes.length > 0) {
                const includesP = document.createElement('p');
                includesP.innerHTML = `<strong>${common.tourIncludes}:</strong>`;
                detailsPanel.appendChild(includesP);
                
                const ul = document.createElement('ul');
                details.includes.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    ul.appendChild(li);
                });
                detailsPanel.appendChild(ul);
            }
            
            // Add duration
            if (details.duration) {
                const durationP = document.createElement('p');
                durationP.innerHTML = `<strong>${common.duration}:</strong> ${details.duration}`;
                detailsPanel.appendChild(durationP);
            }
            
            // Add what to bring (for tours that have it)
            const toursWithWhatToBring = ['rincon-vieja', 'sport-fishing', 'hacienda-guachipelin'];
            if (toursWithWhatToBring.includes(tourId)) {
                const whatToBringP = document.createElement('p');
                whatToBringP.innerHTML = `<strong>${common.whatToBring}:</strong>`;
                detailsPanel.appendChild(whatToBringP);
                
                const ul = document.createElement('ul');
                const items = [
                    common.swimsuit, common.sneakers, common.towels, 
                    common.changeClothes, common.camera, common.insectRepellent,
                    common.sunscreen, common.hat, common.sunglasses, common.money
                ];
                if (tourId === 'rincon-vieja') {
                    items.push(common.passportCopy);
                }
                items.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    ul.appendChild(li);
                });
                detailsPanel.appendChild(ul);
            }
        }
        
        // Update rates tab
        const ratesPanel = tourCard.querySelectorAll('.tab-panel')[2];
        if (ratesPanel) {
            const regularBtn = ratesPanel.querySelector('.tour-type-btn[data-type="regular"]');
            if (regularBtn) regularBtn.textContent = common.regularTours;
            
            const privateBtn = ratesPanel.querySelector('.tour-type-btn[data-type="private"]');
            if (privateBtn) privateBtn.textContent = common.privateTours;
        }
        
        // Update back button
        const backBtn = tourCard.querySelector('.btn-back');
        if (backBtn) backBtn.textContent = common.back;
        
        updatedCount++;
        console.log(`Tour card updated: ${tourId}`);
    });
    
    console.log(`Tour cards updated successfully: ${updatedCount}/${tourIds.length}`);
}

// Initialize immediately when script loads
// This ensures English is set as default before page renders
(function() {
    // Set default language to English immediately
    if (typeof translations !== 'undefined') {
        currentLanguage = 'en';
        document.documentElement.lang = 'en';
        
        // Update language button text immediately
        const currentLangSpan = document.getElementById('currentLang');
        if (currentLangSpan) {
            currentLangSpan.textContent = 'EN';
        }
    }
    
    // Initialize when DOM is ready
    function initializeI18n() {
        if (typeof translations === 'undefined') {
            console.warn('Translations not loaded yet, retrying...');
            setTimeout(initializeI18n, 50);
            return;
        }
        
        // Load saved language preference or default to English
        const savedLang = localStorage.getItem('oceanBreezeLang');
        if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
            currentLanguage = savedLang;
        } else {
            currentLanguage = 'en'; // Default to English
            localStorage.removeItem('oceanBreezeLanguage'); // clear legacy key
        }
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                initI18n();
            });
        } else {
            // DOM already loaded, initialize immediately
            initI18n();
        }
    }
    
    // Start initialization
    initializeI18n();
    
    // Backup bind in case the button was not ready on first init
    setTimeout(function() {
        bindLanguageToggle();
    }, 300);
})();

