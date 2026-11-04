/**
 * Archivo principal de JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            offset: 120
        });
    }
    
    initNavbarScroll();
    initSmoothScroll();
    updateCurrentYear();
    initDropdownScrollClose();
    initTaReviews();
    initTripadvisorHeroFloat();
    initPhotoGallery();
});

/**
 * Muestra el widget flotante de Tripadvisor solo dentro del hero
 */
function initTripadvisorHeroFloat() {
    const hero = document.getElementById('inicio');
    const widget = document.querySelector('.tripadvisor-float');

    if (!hero || !widget) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
            widget.classList.toggle('is-hidden', !entry.isIntersecting);
        },
        { threshold: 0.12 }
    );

    observer.observe(hero);
}

/**
 * Actualiza el año actual en el footer
 */
function updateCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = currentYear;
    }
}
/**
 * Maneja el cambio de estilo del navbar al hacer scroll
 * 
 * Comportamiento:
 * - Navbar visible por defecto al cargar la página
 * - Se oculta cuando el usuario hace scroll hacia abajo
 * - Se muestra cuando el usuario hace scroll hacia arriba o está en la parte superior
 * - Se mantiene visible cuando el menú desplegable de tours está abierto para permitir scroll en la lista
 */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    const brandText = document.getElementById('brand-text');
    
    if (!navbar || !brandText) return;
    
    // Navbar visible por defecto al cargar la página
    navbar.classList.add('scrolled');
    navbar.classList.add('navbar-visible'); // Clase que hace visible el navbar
    brandText.classList.remove('text-white');
    brandText.classList.add('text-dark');
    
    let lastScrollTop = 0; // Guarda la posición anterior del scroll
    const scrollThreshold = 50; // Umbral de píxeles desde arriba para considerar "parte superior"
    
    /**
     * Verifica si algún menú desplegable está abierto
     * @returns {boolean} true si algún dropdown está abierto, false en caso contrario
     */
    function isDropdownOpen() {
        const dropdownToggle = document.querySelector('.dropdown-toggle[aria-expanded="true"]');
        return dropdownToggle !== null;
    }
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Mantener estilos del navbar siempre aplicados
        navbar.classList.add('scrolled');
        brandText.classList.remove('text-white');
        brandText.classList.add('text-dark');
        
        // Si algún menú desplegable está abierto, mantener el navbar visible
        if (isDropdownOpen()) {
            navbar.classList.add('navbar-visible');
            return; // Salir temprano para evitar ocultar el navbar
        }
        
        // Si está en la parte superior (primeros 50px), mostrar el navbar siempre
        if (scrollTop <= scrollThreshold) {
            navbar.classList.add('navbar-visible');
        } else {
            // Si hace scroll hacia abajo (scrollTop > lastScrollTop), ocultar el navbar
            if (scrollTop > lastScrollTop) {
                navbar.classList.remove('navbar-visible');
            } 
            // Si hace scroll hacia arriba (scrollTop < lastScrollTop), mostrar el navbar
            else if (scrollTop < lastScrollTop) {
                navbar.classList.add('navbar-visible');
            }
        }
        
        // Actualizar la posición anterior del scroll para la siguiente comparación
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}

/**
 * Inicializa el smooth scroll para los enlaces de anclaje
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Cierra el menú desplegable cuando se hace scroll fuera de él
 * Solo cierra si el foco/hover está fuera del menú desplegable
 */
function initDropdownScrollClose() {
    let scrollTimeout;
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Rastrear qué dropdowns tienen el mouse sobre ellos
    const hoveredDropdowns = new Set();
    
    /**
     * Obtiene el toggle del dropdown desde el menú desplegable
     * @param {HTMLElement} dropdownMenu - El elemento del menú desplegable
     * @returns {HTMLElement|null} El elemento toggle del dropdown o null si no se encuentra
     */
    function getDropdownToggle(dropdownMenu) {
        // Buscar por aria-labelledby
        const ariaLabelledBy = dropdownMenu.getAttribute('aria-labelledby');
        if (ariaLabelledBy) {
            const toggle = document.getElementById(ariaLabelledBy);
            if (toggle) return toggle;
        }
        
        // Buscar el elemento anterior en el mismo contenedor padre
        const parent = dropdownMenu.parentElement;
        if (parent) {
            const toggle = parent.querySelector('.dropdown-toggle');
            if (toggle) return toggle;
        }
        
        return null;
    }
    
    /**
     * Obtiene el contenedor completo del dropdown (toggle + menú)
     * @param {HTMLElement} dropdownMenu - El elemento del menú desplegable
     * @returns {HTMLElement|null} El contenedor del dropdown o null si no se encuentra
     */
    function getDropdownContainer(dropdownMenu) {
        return dropdownMenu.closest('.dropdown') || dropdownMenu.parentElement;
    }
    
    /**
     * Verifica si el elemento activo (focus) o el mouse está dentro del dropdown
     * @param {HTMLElement} dropdownMenu - El elemento del menú desplegable
     * @returns {boolean} true si el foco/hover está dentro del dropdown, false en caso contrario
     */
    function isFocusOrHoverInsideDropdown(dropdownMenu) {
        const activeElement = document.activeElement;
        
        // Verificar si el elemento activo está dentro del dropdown
        if (activeElement && dropdownMenu.contains(activeElement)) {
            return true;
        }
        
        // Obtener el toggle y el contenedor del dropdown
        const dropdownToggle = getDropdownToggle(dropdownMenu);
        const dropdownContainer = getDropdownContainer(dropdownMenu);
        
        if (dropdownToggle) {
            // Verificar si el toggle tiene focus
            if (activeElement === dropdownToggle) {
                return true;
            }
        }
        
        // Verificar si el dropdown está en el set de hoveredDropdowns
        if (hoveredDropdowns.has(dropdownMenu)) {
            return true;
        }
        
        // Verificar usando el elemento bajo el mouse (último recurso)
        try {
            const hoveredElement = document.querySelector(':hover');
            if (hoveredElement) {
                if (dropdownMenu.contains(hoveredElement) || 
                    (dropdownToggle && dropdownToggle.contains(hoveredElement)) ||
                    (dropdownContainer && dropdownContainer.contains(hoveredElement))) {
                    return true;
                }
            }
        } catch (e) {
            // Ignorar errores de :hover
        }
        
        return false;
    }
    
    // Rastrear cuando el mouse entra y sale de los dropdowns
    document.addEventListener('mouseover', (e) => {
        const dropdownMenu = e.target.closest('.dropdown-menu');
        const dropdownToggle = e.target.closest('.dropdown-toggle');
        const dropdownContainer = e.target.closest('.dropdown');
        
        if (dropdownMenu) {
            hoveredDropdowns.add(dropdownMenu);
        } else if (dropdownToggle && dropdownContainer) {
            const menu = dropdownContainer.querySelector('.dropdown-menu');
            if (menu) {
                hoveredDropdowns.add(menu);
            }
        }
    });
    
    document.addEventListener('mouseout', (e) => {
        const dropdownMenu = e.target.closest('.dropdown-menu');
        const dropdownToggle = e.target.closest('.dropdown-toggle');
        const dropdownContainer = e.target.closest('.dropdown');
        
        // Verificar si el mouse realmente salió del contenedor completo
        const relatedTarget = e.relatedTarget;
        if (dropdownMenu) {
            if (!dropdownMenu.contains(relatedTarget)) {
                const toggle = getDropdownToggle(dropdownMenu);
                if (!toggle || !toggle.contains(relatedTarget)) {
                    hoveredDropdowns.delete(dropdownMenu);
                }
            }
        } else if (dropdownToggle && dropdownContainer) {
            const menu = dropdownContainer.querySelector('.dropdown-menu');
            if (menu && !dropdownContainer.contains(relatedTarget)) {
                hoveredDropdowns.delete(menu);
            }
        }
    });
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Solo procesar si se está haciendo scroll hacia abajo
        if (scrollTop <= lastScrollTop) {
            lastScrollTop = scrollTop;
            return;
        }
        
        lastScrollTop = scrollTop;
        
        // Limpiar timeout anterior
        clearTimeout(scrollTimeout);
        
        // Esperar un poco para evitar cerrar mientras el usuario está interactuando
        scrollTimeout = setTimeout(() => {
            // Buscar todos los menús desplegables abiertos
            const openDropdowns = document.querySelectorAll('.dropdown-menu.show');
            
            openDropdowns.forEach(dropdownMenu => {
                // Verificar si el foco o hover está dentro del dropdown
                if (!isFocusOrHoverInsideDropdown(dropdownMenu)) {
                    // Obtener el toggle del dropdown
                    const dropdownToggle = getDropdownToggle(dropdownMenu);
                    
                    if (dropdownToggle) {
                        // Usar Bootstrap para cerrar el dropdown
                        const bsDropdown = bootstrap.Dropdown.getInstance(dropdownToggle);
                        if (bsDropdown) {
                            bsDropdown.hide();
                        } else {
                            // Si no hay instancia de Bootstrap, cerrar manualmente
                            dropdownToggle.setAttribute('aria-expanded', 'false');
                            dropdownMenu.classList.remove('show');
                            dropdownMenu.setAttribute('data-bs-popper', 'none');
                        }
                        
                        // Limpiar del set de hoveredDropdowns
                        hoveredDropdowns.delete(dropdownMenu);
                    }
                }
            });
        }, 100); // Reducido a 100ms para respuesta más rápida
    });
    
    // También cerrar cuando se hace click fuera del dropdown
    document.addEventListener('click', (e) => {
        const openDropdowns = document.querySelectorAll('.dropdown-menu.show');
        
        openDropdowns.forEach(dropdownMenu => {
            const dropdownToggle = getDropdownToggle(dropdownMenu);
            const dropdownContainer = getDropdownContainer(dropdownMenu);
            
            // Si el click no está dentro del dropdown ni en su toggle ni en su contenedor
            if (!dropdownMenu.contains(e.target) && 
                dropdownToggle && 
                !dropdownToggle.contains(e.target) &&
                dropdownContainer &&
                !dropdownContainer.contains(e.target)) {
                
                const bsDropdown = bootstrap.Dropdown.getInstance(dropdownToggle);
                if (bsDropdown) {
                    bsDropdown.hide();
                }
                
                // Limpiar del set de hoveredDropdowns
                hoveredDropdowns.delete(dropdownMenu);
            }
        });
    });
}

