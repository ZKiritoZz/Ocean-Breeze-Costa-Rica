# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [Sin versionar] - 2026-01-03

### Agregado
- Sistema de traducción completo: agregado botón de idioma en el navbar que permite cambiar entre español e inglés
- Archivo de traducciones (js/translations.js): contiene todas las traducciones en español e inglés para toda la página
- Sistema de internacionalización (js/i18n.js): maneja el cambio de idioma y actualiza todos los textos dinámicamente
- Guardado de preferencia de idioma: el idioma seleccionado se guarda en localStorage
- Estilos CSS para el botón de idioma: diseño responsive y moderno
- Integración de EmailJS: el formulario de contacto ahora envía correos electrónicos a través de EmailJS
  - Service ID: service_vrb417d
  - Template ID: template_y9k3okj
  - Public Key: R0FA8pHcsTnIzZZpj
  - Mapeo de campos: name, customerEmail, service, message, title
  - Manejo de transporte privado con campos "Desde" y "Destino"
  - Estados de carga y manejo de errores mejorado

### Modificado
- Idioma por defecto: cambiado de español a inglés. La página ahora carga en inglés por defecto
- Textos iniciales del HTML: actualizados a inglés para que la página se muestre correctamente desde el inicio
- Todos los tours: cambiado "Desde" por "A partir de" en los precios de las tarjetas
- Navbar: ajustado para quedar pegado arriba de la pantalla (cambiado `top: 45px` a `top: 0`)
- Navbar móvil: corregido para que quede pegado arriba sin espacio en dispositivos móviles (cambiado `top: 50px` a `top: 0` en responsive.css)
- Banner de desarrollo: eliminado el banner que aparecía encima del header
- Formulario de contacto: 
  - Mensajes de validación ahora usan el sistema de traducción
  - Integrado con EmailJS para envío de correos
  - Agregados logs de depuración para facilitar troubleshooting
  - Mejorado el manejo de errores con mensajes en ambos idiomas
- Función updateFooter: corregido uso de selector CSS inválido (`:contains()` no es válido en JavaScript nativo)

- Todos los tours: eliminada la palabra "jugo" de todas las referencias
  - Tour de Playas Blancas: cambiado "agua, cerveza y jugo" a "agua y cerveza"
  - Monteverde Cloud Forest: cambiado "agua, cerveza y jugo" a "agua y cerveza"
  - Palo Verde Jungle and Cultural: cambiado "jugo de caña" a "caña" en la descripción
  - Colorado River Rafting: cambiado "agua, cerveza y jugo" a "agua y cerveza"

- Todos los tours: agregado "Pick up time: 7:00 am" en el tab de Details de los tours que no lo tenían
  - Tour de Playas Blancas
  - Volcán Arenal y Catarata La Fortuna
  - Monteverde Cloud Forest
  - Borinquen Mountain Resort & Spa
  - La Leona Waterfall
  - Palo Verde Jungle and Cultural
  - Sport Fishing / Full Day
  - Colorado River Rafting
  - ATVs
  - Llanos de Cortez, sloth and coffee tour

- Todos los tours: hora de salida (Pick up time) actualizada a las 7:00 am
  - Río Celeste: cambiado de 7:30 am a 7:00 am
  - Catamaran Sailing Sunset Tour: cambiado de 1:20 pm a 7:00 am
  - Miravalles Volcano and Waterfalls: cambiado de 7:30 am a 7:00 am
  - Rincón de La Vieja Hiking Tour: cambiado de 7:30 am a 7:00 am
  - Hacienda Guachipelin Tubing and Canopy Tour: cambiado de 7:30 am a 7:00 am

- Sección de Transporte: eliminada imagen van6.png del carrusel de imágenes

- Sección de Transporte: carrusel de imágenes actualizado con van1.jpg, van2.jpg, van3.jpg, van4.jpg y van5.png

- Tarjeta "Sport Fishing / Full Day": imagen actualizada a `fishing.webp`

- Tarjeta "Miravalles Volcano and Waterfalls": imagen actualizada a `miravalles.jpg`

- Tarjeta "ATVs": imagen actualizada a `atv.jpg`

- Tarjeta "La Leona Waterfall": imagen actualizada a `laleona.jpg`

- Tarjeta "Borinquen Mountain Resort & Spa": imagen actualizada a `borinquen.jpg`

- Menú desplegable de tours: cierre automático al hacer scroll fuera del menú
  - El menú se cierra automáticamente cuando se hace scroll hacia abajo fuera del menú
  - Solo se cierra si el foco/hover está fuera del menú desplegable
  - Si el usuario está interactuando con el menú (focus o hover), el menú permanece abierto
  - Implementado con un delay de 150ms para evitar cerrar mientras el usuario interactúa
  - También se cierra al hacer click fuera del menú

- Botón "Tours" en el navbar:
  - Eliminada la línea inferior que aparecía en hover
  - Agregada flecha indicadora (▼) que indica que es un menú desplegable
  - La flecha rota 180° cuando el menú está abierto
  - Estilos aplicados tanto en desktop como en móviles

- Menú desplegable de tours en móviles: corrección del scroll bidireccional
  - Agregado `touch-action: pan-y !important` al dropdown para permitir scroll vertical táctil
  - Agregado `overscroll-behavior: contain !important` para evitar que el scroll se propague al contenedor padre
  - Agregado `will-change: scroll-position` para optimizar el rendimiento del scroll
  - Agregado `touch-action: auto !important` a `.navbar-collapse.show` y `.navbar-collapse.show .navbar-nav` para permitir interacciones táctiles
  - El scroll ahora funciona correctamente tanto hacia abajo como hacia arriba en dispositivos móviles

- Botón del menú (navbar-toggler) en móviles: tamaño reducido
  - Reducido el padding de `0.7rem` a `0.5rem`
  - Reducido el min-width de `50px` a `42px`
  - Reducido el min-height de `50px` a `42px`
  - Reducido el ancho del icono de `35px` a `28px`
  - Reducido el alto del icono y sus líneas de `4px` a `3px`
  - El botón ahora tiene un tamaño más proporcionado en pantallas móviles

- Menú desplegable de tours en móviles: corrección del scroll para mostrar todos los tours
  - Aumentada la altura máxima del dropdown a `calc(100vh - 100px)` para mostrar todos los 14 tours
  - Removido `overflow: visible !important` de `.navbar-nav` y `.navbar-collapse` que estaba bloqueando el scroll
  - Agregado `overflow-y: auto !important` al dropdown para habilitar el scroll vertical
  - Agregado `-webkit-overflow-scrolling: touch` para mejorar el scroll en dispositivos iOS
  - Agregado `min-height: 0 !important` para permitir que el contenido haga scroll cuando exceda la altura máxima
  - Agregados estilos de scrollbar personalizados para móviles con mejor visibilidad
  - Agregado `display: block !important` para asegurar que el contenido se muestre completamente
  - Agregado `white-space: normal` y `word-wrap: break-word` a los items del dropdown para que los textos largos se ajusten correctamente
  - Actualizado el keyframe `fadeIn` para coincidir con el nuevo `max-height`
  - Mejora la experiencia de usuario al permitir ver y hacer scroll por todos los 14 tours disponibles (incluyendo Sport Fishing, Colorado River Rafting, ATVs y Llanos de Cortez / Sloth Tour)

- Navbar: comportamiento mejorado cuando el menú de tours está desplegado
  - El navbar se mantiene visible cuando el menú desplegable de tours está abierto
  - Esto permite hacer scroll en la lista completa de tours sin que el navbar se oculte
  - Agregada función `isDropdownOpen()` para verificar si algún dropdown está abierto
  - Cuando un dropdown está abierto, el navbar permanece visible independientemente de la dirección del scroll
  - Mejora la experiencia de usuario al navegar por la lista de tours

- Sección de destinos: scroll eliminado para mejorar la navegación
  - Eliminado overflow que causaba scroll interno en la sección de destinos
  - Agregado `overflow: visible !important` a la sección #destinos y su contenedor
  - Aplicado tanto en desktop como en dispositivos móviles
  - Mejora la experiencia de navegación al eliminar el scroll que estorbaba

- Tour "Palo Verde Jungle and Cultural": características y precio actualizados
  - Agregada lista de actividades incluidas en el tour: transporte privado, entrada al parque, tour en bote, observación de aves, almuerzo y demostración de alfarería
  - Información agregada en la pestaña "Details" del tour
  - Precio actualizado de $180 a $150 US p/p (mínimo 4 adultos)
  - Precio de niños actualizado de $140 a $120 US p/kid (edades 5-11)

### Agregado
- Nuevo tour "Llanos de Cortez / Sloth Tour" agregado a la sección de destinos
  - Tour combinado de cascada y observación de perezosos en Guanacaste
  - Precio: $160 US p/p (mínimo 4 adultos), $130 US p/kid (edades 5-11)
  - Incluye transporte privado, visita a la cascada Llanos del Cortez, almuerzo, sloth tour (tour de perezosos), guía experto bilingüe, equipo de seguridad y nevera de cortesía
  - Duración: Día completo
  - Opción agregada al menú desplegable de tours en el navbar
  - Opción agregada al formulario de contacto en el select de interés principal
  - Ubicación: Guanacaste

- Nuevo tour "ATVs" agregado a la sección de destinos
  - Tour de aventura en cuatrimotos por senderos naturales y ríos de Guanacaste
  - Precio: $120 US (ATV Individual), $160 US (ATV Doble) - precios por persona, mínimo 2 personas
  - Incluye transporte privado, ATV individual o doble, agua y snacks, equipo de seguridad (casco), guía experto e instrucciones
  - Duración: 2 - 2.5 horas
  - Opción agregada al menú desplegable de tours en el navbar
  - Opción agregada al formulario de contacto en el select de interés principal
  - Ubicación: Guanacaste

- Nuevo tour "Colorado River Rafting" agregado a la sección de destinos
  - Tour de rafting en aguas bravas por el río Colorado con rápidos desafiantes
  - Precio: $120 US p/p (mínimo 4 adultos), $100 US p/kid (edades 5-11)
  - Incluye transporte privado, equipo de rafting completo, guía experto, chaleco salvavidas, casco y remos
  - Nivel de actividad: Moderado a Activo
  - Opción agregada al menú desplegable de tours en el navbar
  - Opción agregada al formulario de contacto en el select de interés principal
  - Ubicación: Guanacaste
  - Duración: Día completo

- Nuevo tour "Sport Fishing / Full Day" agregado a la sección de destinos
  - Tour completo de pesca deportiva con bote privado en las aguas del Pacífico costarricense
  - Precio: $800 US y más (varía según tamaño del grupo)
  - Incluye transporte privado, bote privado, frutas/agua/snacks, cervezas y almuerzo, equipo de pesca profesional, capitán y tripulación experimentados
  - Opción agregada al menú desplegable de tours en el navbar
  - Opción agregada al formulario de contacto en el select de interés principal
  - Ubicación: Guanacaste
  - Duración: Día completo
  - Nota especial: Los precios varían según el tamaño del grupo

- Nuevo tour "Borinquen Mountain Resort & Spa" agregado a la sección de destinos
  - Tour completo con múltiples actividades: aguas termales, barro volcánico, paseo a caballo, canopy tour (tirolesa), tour de heliconias y caminata a cascada
  - Precio: $180 US p/p (mínimo 4 adultos), $150 US p/kid (edades 5-11)
  - Incluye transporte privado, guía bilingüe, almuerzo y todas las actividades mencionadas
  - Opción agregada al menú desplegable de tours en el navbar
  - Opción agregada al formulario de contacto en el select de interés principal
  - Ubicación: Guanacaste
  - Duración: Día completo

- Nuevo tour "La Leona Waterfall" agregado a la sección de destinos
  - Tour de aventura de alto nivel físico con caminata de 3 horas hasta la cascada
  - Precio: $150 US p/p (mínimo 4 adultos), $120 US p/kid (edades 5-11)
  - Incluye transporte privado, guía bilingüe, almuerzo y acceso a la cascada con piscina natural
  - Nivel de actividad: Alto - requiere buena condición física
  - Opción agregada al menú desplegable de tours en el navbar
  - Opción agregada al formulario de contacto en el select de interés principal
  - Ubicación: Guanacaste
  - Duración: Día completo (3 horas de hiking)

### Modificado
- Tour "Borinquen Mountain Resort & Spa": información actualizada
  - Agregado tour de heliconias a la descripción del tour
  - Tour de heliconias incluido en la lista de actividades del tour
  - Descripción actualizada para mencionar la observación de heliconias en su hábitat natural
  - Agregado coffee tour a la descripción frontal del tour
  - Coffee tour incluido en la descripción larga (pestaña Description) con información sobre el proceso de cultivo y producción del café costarricense
  - Coffee tour agregado a la lista de actividades incluidas en la pestaña Details

### Modificado
- Tour "Volcán Arenal y Catarata La Fortuna": precio actualizado
  - Precio de adultos actualizado de $345 a $285 US p/p (mínimo 4 adultos)
  - Precio en la tarjeta frontal actualizado de $120 a $285
  - Precio de niños se mantiene en $285 US p/kid

### Eliminado
- Tour "Río Pacuare" removido del sitio web
  - Tarjeta del tour eliminada de la sección de destinos
  - Opción removida del menú desplegable de tours en el navbar
  - Opción removida del formulario de contacto
  - Delay de animación ajustado para el tour siguiente (Monteverde)

- Tour "Parque Nacional Manuel Antonio" removido del sitio web
  - Tarjeta del tour eliminada de la sección de destinos
  - Opción removida del menú desplegable de tours en el navbar
  - Opción removida del formulario de contacto
  - Delay de animación ajustado para el tour siguiente (Monteverde)

### Modificado
- Logo del navbar en dispositivos móviles: tamaño aumentado para mejor visibilidad
  - Tamaño del logo aumentado de 50px a 100px en pantallas móviles (max-width: 768px)
  - Mejora la visibilidad y protagonismo del logo en dispositivos pequeños
  - Código comentado con explicaciones sobre el cambio realizado

- Botón de menú (hamburguesa) en dispositivos móviles: tamaño aumentado para mejor accesibilidad
  - Padding del botón aumentado de 0.5rem a 1rem para área de toque más grande
  - Ancho y alto mínimo de 50px agregados para cumplir con estándares de accesibilidad
  - Tamaño del icono aumentado: ancho de 30px a 35px, altura de líneas de 3px a 4px
  - Mejora la usabilidad y facilita la interacción en dispositivos táctiles
  - Código comentado con explicaciones sobre los cambios realizados

- Navbar: comportamiento de visibilidad mejorado
  - Navbar visible por defecto al cargar la página
  - Se oculta automáticamente cuando el usuario hace scroll hacia abajo
  - Se muestra automáticamente cuando el usuario hace scroll hacia arriba o está en la parte superior (primeros 50px)
  - Transición suave de 0.4s para mostrar/ocultar el navbar
  - Comentarios agregados en el código para mejor comprensión del comportamiento

### Detalles técnicos
- Actualizado CSS en `css/responsive.css`:
  - Logo del navbar: `.navbar-brand img` con `height: 100px` en media query `@media (max-width: 768px)`
  - Botón de menú: `.navbar-toggler` con `padding: 1rem`, `min-width: 50px`, `min-height: 50px` en móviles
  - Icono del botón: `.navbar-toggler-icon` con `width: 35px` y `height: 4px` en móviles
  - Líneas del icono: `::before` y `::after` con `height: 4px` en móviles
  - Comentarios agregados explicando cada cambio y su propósito
- Actualizado CSS en `css/style.css`:
  - Estado inicial del navbar: `transform: translateY(-100%)` y `opacity: 0` (oculto)
  - Clase `.navbar.navbar-visible`: muestra el navbar con `transform: translateY(0)` y `opacity: 1`
  - Comentarios agregados explicando el estado inicial y la clase de visibilidad
- Actualizado JavaScript en `js/main.js`:
  - Función `initNavbarScroll()` mejorada con lógica de mostrar/ocultar según dirección del scroll
  - Navbar visible por defecto agregando clase `navbar-visible` al inicializar
  - Detección de dirección del scroll comparando `scrollTop` con `lastScrollTop`
  - Umbral de 50px desde arriba para considerar "parte superior" y mostrar siempre el navbar
  - Comentarios detallados agregados explicando el comportamiento y la lógica implementada

### Modificado
- Tour "Playa Conchal" renombrado a "Tour de Playas Blancas"
  - Actualizado nombre en la tarjeta frontal y trasera
  - Actualizado nombre en el menú desplegable del navbar
  - Actualizado nombre en el formulario de contacto
  - Actualizado texto alternativo de la imagen
- Descripción del "Tour de Playas Blancas" actualizada
  - Cambiada la descripción para mencionar múltiples playas blancas espectaculares en Guanacaste
  - Enfasis en explorar múltiples playas paradisíacas con arenas blancas y aguas cristalinas
  - Descripción completa actualizada para reflejar que es un tour de varias playas vírgenes de la región
- Tarjetas de "Volcán Arenal" y "Catarata La Fortuna" unificadas en una sola tarjeta
  - Nueva tarjeta combinada: "Volcán Arenal y Catarata La Fortuna"
  - Información de ambos destinos combinada en una sola tarjeta
  - Descripción incluye detalles del volcán y la catarata
  - Lista de actividades del tour actualizada para incluir visita a la Catarata La Fortuna
  - Tags actualizados para incluir "Volcano" y "Waterfalls"
  - Tarjeta separada de "Catarata La Fortuna" eliminada
  - Menú desplegable del navbar actualizado para mostrar solo la opción unificada
  - Formulario de contacto actualizado para mostrar solo la opción unificada
  - Delays de animación de las tarjetas siguientes ajustados para mantener la secuencia

### Agregado
- Intercambio automático de imágenes en la tarjeta "Volcán Arenal y Catarata La Fortuna"
  - Implementado slideshow automático que intercambia entre dos imágenes cada 5 segundos
  - Imágenes: Volcán Arenal (93dbba4871c4f6bcf5812a9caceb26f3.webp) y Catarata La Fortuna (fortuna.jpg)
  - Transición suave con fade effect de 2 segundos usando curva cubic-bezier
  - Función `initTourImageSlideshow()` agregada en `js/components.js`
  - Estilos CSS agregados para `.tour-image-slide` con posicionamiento absoluto y transición de opacidad
  - Overlay de la tarjeta con z-index ajustado para mantenerse visible sobre las imágenes

### Detalles técnicos
- Actualizado HTML en `index.html`:
  - Agregadas dos imágenes en el contenedor `.destination-image` de la tarjeta del Volcán Arenal
  - Clase `tour-image-slide` y atributo `data-tour="volcan-arenal"` agregados a ambas imágenes
  - Primera imagen con clase `active` para mostrarse inicialmente
- Actualizado CSS en `css/style.css`:
  - Estilos para `.tour-image-slide` con posición absoluta y transición de opacidad
  - Transición configurada a 2 segundos con curva `cubic-bezier(0.4, 0, 0.2, 1)` para efecto suave
  - Clase `.active` con `opacity: 1` y `z-index: 2` para mostrar la imagen activa
  - Overlay con `z-index: 10` para mantenerse por encima de las imágenes
- Actualizado JavaScript en `js/components.js`:
  - Función `initTourImageSlideshow()` implementada para manejar el intercambio automático
  - Intervalo de 5 segundos configurado con `setInterval()`
  - Función agregada al evento `DOMContentLoaded` para inicialización automática

## [Sin versionar] - 2025-01-27

### Agregado
- Nuevo tour "Hacienda Guachipelin Tubing and Canopy Tour" agregado a la sección de destinos
  - Tour completo con información detallada sobre paseo a caballo, tirolesa (7 cables) y tubing por el río
  - Incluye almuerzo típico costarricense y acceso a aguas termales naturales
  - Precios: $250 US p/p (mínimo 4 adultos), $210 US p/kid (edades 5-11)
  - Opción agregada al formulario de contacto en el menú desplegable de interés principal
  - Imagen del tour: guachipelin.png
- Menú desplegable de tours en el navbar
  - Botón "Tours" en el navbar ahora muestra un menú desplegable con todos los tours disponibles
  - Lista completa de 12 tours con navegación directa a cada tarjeta de destino
  - Funcionalidad de scroll suave al hacer clic en un tour del menú
  - Resaltado visual breve de la tarjeta seleccionada al hacer scroll
  - Menú desplegable se posiciona directamente debajo del botón "Tours"
- IDs únicos agregados a todas las tarjetas de tours para navegación directa
  - Cada tarjeta de tour tiene un ID único (tour-playa-conchal, tour-volcan-arenal, etc.)
  - Permite scroll directo desde el menú desplegable a la tarjeta específica

### Modificado
- Footer: año de copyright ahora se actualiza dinámicamente con el año actual usando JavaScript
  - Reemplazado texto estático "2025" por elemento `<span>` con ID `currentYear`
  - Agregada función `updateCurrentYear()` en `js/main.js` para obtener y mostrar el año actual automáticamente
  - El año se actualiza automáticamente cada año sin necesidad de modificar manualmente el código

### Agregado
- Banner de desarrollo restaurado en la parte superior del sitio
- Estilos responsive para centrar contenido del footer en móviles
- Formulario de contacto con campos dinámicos para transporte privado
  - Campos "Desde" y "Destino" que aparecen cuando se selecciona "Transporte Privado"
  - Validación de campos requeridos para transporte privado
  - Funcionalidad JavaScript para mostrar/ocultar campos según la selección
- Efecto flip card en tarjetas de destinos populares
  - Botón "Más Info" en cada tarjeta para voltear y mostrar información detallada
  - Parte trasera con sistema de tabs (Description, Details, Rates)
  - Información completa de cada tour con descripciones, detalles e incluidos, y precios
  - Botón "Volver" para regresar a la vista frontal de la tarjeta

### Modificado
- Botón "Reservar Ahora": aumentado el grosor del borde de 2px a 3px
- Botón "Cotizar Transporte": aumentado el tamaño para igualar los botones del hero (padding: 18px 45px, font-size: 1.3rem)
- Tarjeta "Volcán Arenal": reemplazada imagen de Unsplash por imagen local (93dbba4871c4f6bcf5812a9caceb26f3.webp)
- Sección "Nuestras Aventuras": aumentado el tamaño de fuente del título a 3.5rem
- Subtítulo de la sección "Nuestras Aventuras": aumentado el tamaño de fuente a 1.4rem
- Sección "Destinos Populares": aumentado el tamaño de fuente del título a 3.5rem
- Subtítulo de la sección "Destinos Populares": aumentado el tamaño de fuente a 1.4rem
- Agregados estilos responsive para las secciones de tours y destinos en diferentes tamaños de pantalla
- Sección "Transporte Privado": reorganizada la estructura para que el título esté como título principal centrado (igual que las demás secciones)
- Sección "Transporte Privado": aumentado el tamaño de fuente del título de 2.5rem a 3.5rem para igualar a las demás secciones
- Sección "Transporte Privado": aumentado el tamaño de fuente del párrafo descriptivo a 1.4rem para mantener consistencia con otras secciones
- Agregados estilos responsive para la sección de transporte en diferentes tamaños de pantalla (tablets: 2.8rem/1.2rem, móviles: 2.2rem/1.1rem)
- Sección de transporte: centrado de lista y botón en móviles
- Sección de transporte: aumento del tamaño de texto (1rem → 1.3rem) e iconos (1.1rem → 1.5rem) en la lista de características
- Sección de ubicación: aumento del tamaño de título (3.5rem) y texto (1.4rem) para uniformidad con otras secciones
- Sección de contacto: título "Contáctanos" movido arriba como título principal centrado
- Sección de contacto: eliminada información de contacto (Guanacaste, teléfono, email) de la columna izquierda
- Sección de contacto: formulario centrado en la página (col-md-8 col-lg-6)
- Footer: contenido centrado en móviles (Servicios, Contacto, enlaces y datos)
- Footer: logo centrado en desktop (medio entre izquierda y derecha)
- Limpieza de código: eliminadas funciones no utilizadas (formatPhone, debounce, throttle, initWhatsAppButton)
- Limpieza de código: eliminados estilos CSS no utilizados (.btn-custom, .map-container)
- Limpieza de código: eliminados comentarios HTML y JavaScript innecesarios
- Sección de transporte: ajustado posicionamiento vertical del contenido de texto y botón
  - Contenido centrado verticalmente en el espacio disponible a la derecha de las imágenes
  - Agregado padding-left para separar el texto de las imágenes del carrusel
  - Ajustes responsive para mantener centrado en móviles
- Navbar: aumento del tamaño de fuente del texto "Ocean Breeze Costa Rica" en móviles (0.9rem → 1.1rem)
- Tarjetas de destinos: estilos de la parte trasera del flip card ajustados para mantener consistencia con el diseño del sitio
  - Fondo blanco en lugar de marrón oscuro
  - Tabs y botones con colores del tema del sitio (verde/azul)
  - Corrección de problemas de solapamiento de contenido con el botón "Volver" en móviles
- Hero section: mejorado el brillo del texto del título principal "Descubre el Paraíso con Ocean Breeze Costa Rica"
  - Agregados efectos de resplandor (glow) con múltiples capas de text-shadow en blanco
  - Agregado filtro `brightness(1.1)` para aumentar la luminosidad del texto
  - Color explícito blanco (#ffffff) aplicado al título
- Secciones en móviles: eliminado scroll interno en todas las secciones para dispositivos móviles
  - Agregado `overflow-y: visible` a las secciones en media queries móviles
  - Eliminado `min-height: 100vh` de `.tours-section` en móviles
  - Eliminado `overflow-y: auto` de `.destination-tab-content` y `.destination-card-back` en móviles
  - Cambiado `background-attachment: fixed` a `scroll` para `.tours-section::before` en móviles
  - Agregado `overflow-x: hidden` a body y html en móviles para prevenir scroll horizontal

### Detalles técnicos
- Agregada función `initInterestSelect()` en `js/components.js` para manejar la visibilidad de campos
- Actualizada función `initContactForm()` para validar campos de transporte privado
- Agregados IDs a los campos del formulario para mejor manipulación
- Mejorados los estilos responsive en `css/responsive.css` para la sección de tours
- Actualizados estilos en `css/style.css` para `.transport-section h2` (3.5rem) y `.transport-section p.text-muted` (1.4rem)
- Actualizados estilos responsive en `css/responsive.css` para `.transport-section h2` y `.transport-section p.text-muted` en media queries
- Reorganizada estructura HTML de la sección de transporte: título y descripción ahora están en un contenedor centrado antes del contenido principal
- Agregados estilos responsive en `css/responsive.css` para centrar lista y botón de transporte en móviles
- Actualizados estilos en `css/style.css` para `.transport-section .list-unstyled li` (1.3rem) y `.transport-section .list-unstyled i` (1.5rem)
- Agregados estilos para sección de ubicación en `css/style.css` (#mapa h2: 3.5rem, #mapa p.text-muted: 1.4rem)
- Agregados estilos responsive para sección de ubicación en `css/responsive.css`
- Reorganizada estructura HTML de la sección de contacto: título movido arriba como título de sección
- Eliminada columna de información de contacto del HTML, formulario ahora centrado
- Agregados estilos responsive para footer en `css/responsive.css` (centrado de listas y elementos en móviles)
- Actualizado HTML del footer: agregadas clases `text-center text-md-start` a columnas de Servicios y Contacto
- Actualizado HTML del footer: logo con clase `text-center` para centrado en desktop
- Restaurado banner de desarrollo en `index.html` y estilos en `css/style.css` y `css/responsive.css`
- Ajustado `top` del navbar de 0 a 45px (desktop) y 50px (móviles) para posicionarse debajo del banner
- Eliminadas funciones no utilizadas de `js/utils.js` (formatPhone, debounce, throttle)
- Eliminada función `initWhatsAppButton()` de `js/components.js`
- Eliminados estilos `.btn-custom` y `.map-container` de `css/style.css`
- Eliminados comentarios HTML innecesarios del `index.html`
- Agregados estilos CSS para efecto flip card en `css/style.css`
  - Estructura `.flip-card`, `.flip-card-inner`, `.flip-card-front`, `.flip-card-back`
  - Estilos para tabs (`.destination-tabs`, `.tab-btn`, `.tab-panel`)
  - Estilos para botones de tipo de tour (`.tour-type-btn`)
  - Estilos para parte trasera con fondo blanco y colores del tema
- Agregadas funciones JavaScript en `js/components.js`
  - `initDestinationFlipCards()`: maneja el efecto flip al hacer clic en "Más Info" y "Volver"
  - `initDestinationTabs()`: maneja el cambio entre tabs en la parte trasera de las tarjetas
- Actualizado HTML de tarjetas de destinos en `index.html`
  - Estructura flip card con cara frontal y trasera
  - Datos completos de cada tour con tabs de descripción, detalles y precios
  - Botón "Más Info" agregado a cada tarjeta frontal
- Actualizados estilos responsive en `css/responsive.css`
  - Ajustes para parte trasera del flip card en móviles (evitar solapamiento)
  - Ajustes de tamaño de fuente del navbar en móviles
  - Ajustes de posicionamiento en sección de transporte para móviles
- Actualizado HTML del footer en `index.html`: año estático reemplazado por `<span id="currentYear">2025</span>`
- Agregada función `updateCurrentYear()` en `js/main.js` para actualizar el año dinámicamente usando `new Date().getFullYear()`
- Llamada a `updateCurrentYear()` agregada al evento `DOMContentLoaded` en `js/main.js`
- Funcionalidad mejorada en botones "Reservar Tour"
  - Agregado atributo `data-tour` a todos los botones "Reservar Tour" con el ID del tour correspondiente
  - Implementada función `initReserveTourButtons()` en `js/components.js` que captura clics en los botones de reserva
  - Al hacer clic en "Reservar Tour", se selecciona automáticamente el tour en el formulario de contacto
  - Scroll suave al formulario de contacto al hacer clic en "Reservar Tour"
  - Resaltado visual breve del select del formulario cuando se selecciona un tour automáticamente
  - Disparo automático del evento `change` en el select para activar lógica relacionada (como campos de transporte)
  - Mejora significativa en la experiencia de usuario al agilizar el proceso de reserva
- Agregada nueva tarjeta de destino en `index.html` para el tour "Hacienda Guachipelin Tubing and Canopy Tour"
  - Estructura flip card completa con información detallada en tabs (Description, Details, Rates)
  - Imagen del tour actualizada a `guachipelin.png`
- Actualizado formulario de contacto en `index.html`: agregada opción "Hacienda Guachipelin Tubing and Canopy Tour" al select de interés principal
- Actualizados estilos del hero en `css/style.css`: mejorado brillo del título con efectos de resplandor y filtro de brillo
- Actualizados estilos responsive en `css/responsive.css`: eliminado scroll interno en secciones para móviles
  - Reglas específicas para `.tours-section`, `.destination-tab-content`, `.destination-card-back` y `.flip-card-back`
  - Ajustes de overflow y background-attachment para mejor experiencia en móviles
- Agregada función `initToursDropdown()` en `js/components.js` para manejar el menú desplegable de tours
  - Detecta clics en elementos del menú desplegable
  - Cierra automáticamente el dropdown al seleccionar un tour
  - Realiza scroll suave hasta la tarjeta del tour seleccionado
  - Resalta brevemente la tarjeta con efecto de sombra al llegar
- Actualizados estilos del navbar en `css/style.css` para el menú desplegable
  - Estilos para `.dropdown-menu`, `.dropdown-item` y `.dropdown-toggle`
  - Posicionamiento relativo del `.nav-item.dropdown` para alinear el dropdown con el botón
  - Z-index ajustado (1050) para que el dropdown aparezca por encima del navbar
  - Overflow visible en navbar, navbar-nav, navbar-collapse y container para permitir que el dropdown se muestre correctamente
  - Efectos hover y active en los elementos del dropdown
- Actualizado HTML del navbar en `index.html`: agregado menú desplegable con lista completa de tours
  - Estructura dropdown de Bootstrap 5 con todos los tours disponibles
  - Atributos `data-tour` en cada elemento del menú para identificar el tour seleccionado
  - Atributo `data-bs-popper="static"` para posicionamiento estático del dropdown

### Modificado
- Tarjetas de destinos: corregido problema de traslape de texto con botón "Volver" en la parte trasera de las tarjetas
  - Aumentado padding-bottom del contenido de tabs de 1rem a 2rem para dar más espacio
  - Agregado margin-bottom de 0.5rem al contenido de tabs
  - Implementado max-height con cálculo dinámico (calc(100% - 200px)) para limitar altura del contenido y permitir scroll
  - Mejorado layout flexbox de `.destination-card-back` agregando height: 100%
  - Botón "Volver" ahora usa margin-top: auto para posicionarse automáticamente en la parte inferior
  - Agregado z-index: 10 al botón "Volver" para asegurar que siempre esté visible
  - Ajustes responsive para móviles manteniendo funcionalidad y evitando traslapes

