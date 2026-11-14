/**
 * Componentes reutilizables
 */

/**
 * Maneja el cambio del select de interés principal
 */
function initInterestSelect() {
    const interesSelect = document.getElementById('interesPrincipal');
    const transporteFields = document.getElementById('transporteFields');
    
    if (!interesSelect || !transporteFields) return;
    
    interesSelect.addEventListener('change', function() {
        if (this.value === 'transporte-privado') {
            transporteFields.style.display = 'block';
            document.getElementById('desde').setAttribute('required', 'required');
            document.getElementById('hasta').setAttribute('required', 'required');
        } else {
            transporteFields.style.display = 'none';
            document.getElementById('desde').removeAttribute('required');
            document.getElementById('hasta').removeAttribute('required');
            document.getElementById('desde').value = '';
            document.getElementById('hasta').value = '';
        }
    });
}

/**
 * Maneja el envío del formulario de contacto con EmailJS
 */
function initContactForm() {
    console.log('Initializing contact form...');
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) {
        console.error('Contact form not found!');
        return;
    }
    
    console.log('Contact form found, setting up EmailJS...');
    
    // Initialize EmailJS - wait for it to be available
    function initializeEmailJS() {
        if (typeof emailjs !== 'undefined') {
            console.log('EmailJS is available, initializing...');
            emailjs.init('R0FA8pHcsTnIzZZpj');
            console.log('EmailJS initialized successfully');
        } else {
            console.warn('EmailJS not yet loaded, retrying...');
            setTimeout(initializeEmailJS, 100);
        }
    }
    
    // Start initialization
    initializeEmailJS();
    
    // Add click event listener to button directly
    const submitButton = contactForm.querySelector('button[type="submit"]');
    if (submitButton) {
        console.log('Submit button found, adding click listener...');
        submitButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Submit button clicked directly!');
            handleFormSubmit(e);
        });
    } else {
        console.error('Submit button not found!');
    }
    
    // Also listen to form submit event
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Form submit event triggered!');
        handleFormSubmit(e);
    });
    
    // Main form submission handler
    function handleFormSubmit(e) {
        console.log('handleFormSubmit called');
        
        const nombreCompleto = document.getElementById('nombreCompleto');
        const emailContacto = document.getElementById('emailContacto');
        const interesSelect = document.getElementById('interesPrincipal');
        const mensaje = document.getElementById('mensaje');
        const desde = document.getElementById('desde');
        const hasta = document.getElementById('hasta');
        
        // Get current language translations
        const currentLang = localStorage.getItem('oceanBreezeLanguage') || 'en';
        const t = translations[currentLang] || translations.en;
        
        const data = {
            name: nombreCompleto ? nombreCompleto.value.trim() : '',
            email: emailContacto ? emailContacto.value.trim() : '',
            interest: interesSelect ? interesSelect.value : '',
            message: mensaje ? mensaje.value.trim() : ''
        };
        
        console.log('Form data collected:', data);
        
        // Validate required fields
        if (!data.name || !data.email || !data.message) {
            console.warn('Validation failed: missing required fields');
            if (typeof showNotification === 'function') {
                showNotification(t.contact.messages.fillAllFields, 'error');
            } else {
                alert(t.contact.messages.fillAllFields);
            }
            return;
        }
        
        // Validate transport fields if transport is selected
        if (interesSelect && interesSelect.value === 'transporte-privado') {
            const desdeValue = desde ? desde.value.trim() : '';
            const hastaValue = hasta ? hasta.value.trim() : '';
            if (!desdeValue || !hastaValue) {
                if (typeof showNotification === 'function') {
                    showNotification(t.contact.messages.fillTransportFields, 'error');
                }
                return;
            }
        }
        
        // Validate email format
        if (!validateEmail(data.email)) {
            if (typeof showNotification === 'function') {
                showNotification(t.contact.messages.invalidEmail, 'error');
            }
            return;
        }
        
        // Get service/tour name
        let serviceName = '';
        let titleName = '';
        
        if (data.interest && data.interest !== '') {
            if (data.interest === 'transporte-privado') {
                serviceName = t.contact.form.privateTransport;
                titleName = t.contact.form.privateTransport;
            } else if (t.tours[data.interest]) {
                serviceName = t.tours[data.interest].name;
                titleName = t.tours[data.interest].name;
            } else {
                // Fallback: get from select option text
                const selectedOption = interesSelect.options[interesSelect.selectedIndex];
                serviceName = selectedOption ? selectedOption.text : data.interest;
                titleName = serviceName;
            }
        }
        
        // Build message with transport details if applicable
        let fullMessage = data.message;
        if (data.interest === 'transporte-privado' && desde && hasta) {
            const desdeValue = desde.value.trim();
            const hastaValue = hasta.value.trim();
            fullMessage = `${t.contact.form.from}: ${desdeValue}\n${t.contact.form.destination}: ${hastaValue}\n\n${data.message}`;
        }
        
        // Prepare EmailJS template parameters
        const templateParams = {
            name: data.name,
            customerEmail: data.email,
            service: serviceName,
            message: fullMessage,
            title: titleName
        };
        
        console.log('Template parameters prepared:', templateParams);
        
        // Show loading state
        let submitButton = contactForm.querySelector('button[type="submit"]');
        if (!submitButton) {
            submitButton = contactForm.querySelector('.btn-mas-info');
        }
        const originalButtonText = submitButton ? submitButton.textContent : '';
        if (submitButton) {
            submitButton.disabled = true;
            const currentLang = localStorage.getItem('oceanBreezeLanguage') || 'en';
            submitButton.textContent = currentLang === 'es' ? 'Enviando...' : 'Sending...';
            console.log('Button disabled and text changed to:', submitButton.textContent);
        } else {
            console.warn('Submit button not found in handleFormSubmit!');
        }
        
        // Check if EmailJS is available
        if (typeof emailjs === 'undefined') {
            console.error('EmailJS is not loaded!');
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
            const errorMessage = currentLang === 'es' 
                ? 'Error: EmailJS no está cargado. Por favor, recarga la página.'
                : 'Error: EmailJS is not loaded. Please reload the page.';
            if (typeof showNotification === 'function') {
                showNotification(errorMessage, 'error');
            } else {
                alert(errorMessage);
            }
            return;
        }
        
        console.log('Sending email via EmailJS...');
        
        // Send email via EmailJS
        emailjs.send('service_vrb417d', 'template_y9k3okj', templateParams)
                .then(function(response) {
                    console.log('Email sent successfully!', response.status, response.text);
                    
                    // Show success message
                    if (typeof showNotification === 'function') {
                        showNotification(t.contact.messages.success, 'success');
                    }
                    
                    // Reset form
                    contactForm.reset();
                    const transporteFields = document.getElementById('transporteFields');
                    if (transporteFields) {
                        transporteFields.style.display = 'none';
                    }
                    
                    // Reset button
                    if (submitButton) {
                        submitButton.disabled = false;
                        submitButton.textContent = originalButtonText;
                    }
                }, function(error) {
                    console.error('Email sending failed:', error);
                    console.error('Error details:', JSON.stringify(error, null, 2));
                    
                    // Get current language for error message
                    const currentLang = localStorage.getItem('oceanBreezeLanguage') || 'en';
                    
                    // Show error message
                    const errorMessage = currentLang === 'es' 
                        ? 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.'
                        : 'Error sending message. Please try again later.';
                    
                    if (typeof showNotification === 'function') {
                        showNotification(errorMessage, 'error');
                    } else {
                        alert(errorMessage + '\n\nError: ' + (error.text || error.message || 'Unknown error'));
                    }
                    
                    // Reset button
                    if (submitButton) {
                        submitButton.disabled = false;
                        submitButton.textContent = originalButtonText;
                    }
                });
    }
    
    console.log('Contact form event listener added successfully');
}

/**
 * Inicializa el scroll indicator
 */
function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const nextSection = document.querySelector('section:not(.hero)');
            if (nextSection) {
                const offsetTop = nextSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
}

/**
 * Inicializa el efecto flip de las tarjetas de destino
 */
function initDestinationFlipCards() {
    // Botones "Más Info" - Flip a la parte trasera
    const masInfoButtons = document.querySelectorAll('.btn-mas-info');
    masInfoButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const flipCard = this.closest('.flip-card');
            if (flipCard) {
                flipCard.classList.add('flipped');
            }
        });
    });

    // Botones "Volver" - Volver a la parte frontal
    const backButtons = document.querySelectorAll('.btn-back');
    backButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const flipCard = this.closest('.flip-card');
            if (flipCard) {
                flipCard.classList.remove('flipped');
            }
        });
    });
}

/**
 * Inicializa el menú desplegable de tours en el navbar
 */
function initToursDropdown() {
    const tourLinks = document.querySelectorAll('.dropdown-item[data-tour]');
    const dropdownToggle = document.getElementById('toursDropdown');
    const dropdownMenu = dropdownToggle ? dropdownToggle.nextElementSibling : null;
    const navbarCollapse = document.getElementById('navbarNav');
    
    // Manejar el comportamiento del dropdown en móviles sin expandir el navbar
    if (dropdownToggle && navbarCollapse && dropdownMenu) {
        dropdownToggle.addEventListener('click', function(e) {
            // Solo en móviles
            if (window.innerWidth < 992) {
                // Si el navbar está colapsado, prevenir que se expanda
                if (!navbarCollapse.classList.contains('show')) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Toggle manual del dropdown
                    const isExpanded = dropdownToggle.getAttribute('aria-expanded') === 'true';
                    
                    if (isExpanded) {
                        // Cerrar dropdown
                        dropdownMenu.classList.remove('show');
                        dropdownToggle.setAttribute('aria-expanded', 'false');
                    } else {
                        // Abrir dropdown
                        dropdownMenu.classList.add('show');
                        dropdownToggle.setAttribute('aria-expanded', 'true');
                    }
                    
                    return false;
                }
            }
        });
        
        // Cerrar dropdown cuando se hace clic fuera en móviles
        document.addEventListener('click', function(e) {
            if (window.innerWidth < 992 && !navbarCollapse.classList.contains('show')) {
                const isClickInside = dropdownToggle.contains(e.target) || dropdownMenu.contains(e.target);
                const isClickOnNavbarToggle = e.target.closest('.navbar-toggler');
                
                if (!isClickInside && !isClickOnNavbarToggle && dropdownMenu.classList.contains('show')) {
                    dropdownMenu.classList.remove('show');
                    dropdownToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    }
    
    // Mejorar animaciones del dropdown
    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener('show.bs.dropdown', function() {
            dropdownMenu.classList.add('show');
        });
        
        dropdownToggle.addEventListener('shown.bs.dropdown', function() {
            // Resetear animaciones de los items para que se ejecuten cada vez
            const items = dropdownMenu.querySelectorAll('.dropdown-item');
            items.forEach((item, index) => {
                item.style.animation = 'none';
                setTimeout(() => {
                    item.style.animation = '';
                }, 10);
            });
        });
        
        dropdownToggle.addEventListener('hide.bs.dropdown', function() {
            dropdownMenu.classList.remove('show');
        });
    }
    
    
    tourLinks.forEach(link => {
        link.addEventListener('click', function(e) {

            const tourId = this.getAttribute('data-tour');
            const tourCard = document.getElementById(`tour-${tourId}`);

            // Si el tour no existe en esta página,
            // permitir la navegación normal del enlace.
            if (!tourCard) {
                return;
            }

            // Evitar la navegación solo si estamos
            // en la página que contiene el tour.
            e.preventDefault();

            // Cerrar el menú desplegable
            const dropdownElement = this.closest('.dropdown');
            const dropdownToggle = dropdownElement
                ? dropdownElement.querySelector('.dropdown-toggle')
                : null;

            if (dropdownToggle && typeof bootstrap !== 'undefined') {
                const dropdown = bootstrap.Dropdown.getInstance(dropdownToggle);
                if (dropdown) {
                    dropdown.hide();
                }
            }

            // Calcular la posición de la tarjeta
            const navbar = document.getElementById('navbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 80;

            const cardPosition =
                tourCard.getBoundingClientRect().top + window.pageYOffset;

            const offsetPosition = cardPosition - navbarHeight - 20;

            // Desplazamiento suave
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Resaltar la tarjeta
            tourCard.style.transition = 'box-shadow 0.3s ease';
            tourCard.style.boxShadow = '0 0 20px rgba(74, 144, 226, 0.6)';

            setTimeout(() => {
                tourCard.style.boxShadow = '';
            }, 2000);
        });
    });
}

/**
 * Inicializa los tabs en las tarjetas de destino
 */
function initDestinationTabs() {
    // Obtener todas las tarjetas con tabs
    const flipCards = document.querySelectorAll('.flip-card');
    
    flipCards.forEach(card => {
        // Obtener los botones de tabs dentro de esta tarjeta
        const tabButtons = card.querySelectorAll('.tab-btn');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const tabName = this.getAttribute('data-tab');
                const tabContent = card.querySelector('.destination-tab-content');
                
                if (!tabContent) return;
                
                // Remover clase active de todos los tabs y paneles
                tabButtons.forEach(btn => btn.classList.remove('active'));
                const panels = tabContent.querySelectorAll('.tab-panel');
                
                // Encontrar el panel correspondiente por su posición (índice)
                const buttonIndex = Array.from(tabButtons).indexOf(this);
                panels.forEach((panel, index) => {
                    panel.classList.remove('active');
                    if (index === buttonIndex) {
                        panel.classList.add('active');
                    }
                });
                
                // Agregar clase active al tab seleccionado
                this.classList.add('active');
            });
        });
    });
}

/**
 * Inicializa los botones "Reservar Tour" para seleccionar automáticamente el tour en el formulario
 */
function initReserveTourButtons() {
    const reserveButtons = document.querySelectorAll('.btn-destination[data-tour]');
    
    reserveButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const tourId = this.getAttribute('data-tour');
            const interesSelect = document.getElementById('interesPrincipal');
            
            if (interesSelect && tourId) {
                // Seleccionar el tour en el select
                interesSelect.value = tourId;
                
                // Disparar evento change para activar cualquier lógica relacionada (como campos de transporte)
                const changeEvent = new Event('change', { bubbles: true });
                interesSelect.dispatchEvent(changeEvent);
                
                // Calcular posición del formulario de contacto
                const contactoSection = document.getElementById('contacto');
                const navbar = document.getElementById('navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 80;
                
                if (contactoSection) {
                    const contactoPosition = contactoSection.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = contactoPosition - navbarHeight - 20; // 20px de espacio adicional
                    
                    // Scroll suave al formulario
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Opcional: resaltar el select brevemente
                    setTimeout(() => {
                        interesSelect.style.transition = 'box-shadow 0.3s ease';
                        interesSelect.style.boxShadow = '0 0 10px rgba(74, 144, 226, 0.5)';
                        setTimeout(() => {
                            interesSelect.style.boxShadow = '';
                        }, 2000);
                    }, 500);
                }
            }
        });
    });
}

/**
 * Inicializa el intercambio automático de imágenes para tours específicos
 */
function initTourImageSlideshow() {
    const tourImageContainers = document.querySelectorAll('.tour-image-slide[data-tour="volcan-arenal"]');
    
    if (tourImageContainers.length < 2) return;
    
    const images = Array.from(tourImageContainers);
    let currentIndex = 0;
    
    function switchImage() {
        // Remover clase active de todas las imágenes
        images.forEach(img => img.classList.remove('active'));
        
        // Agregar clase active a la siguiente imagen
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }
    
    // Iniciar el intercambio cada 5 segundos
    setInterval(switchImage, 5000);
}

document.addEventListener('DOMContentLoaded', function() {
    initInterestSelect();
    initContactForm();
    initScrollIndicator();
    initDestinationFlipCards();
    initDestinationTabs();
    initToursDropdown();
    initReserveTourButtons();
    initTourImageSlideshow();
});

