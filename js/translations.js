/**
 * Translation system for Ocean Breeze Costa Rica
 * Supports Spanish (es) and English (en)
 */

const translations = {
    es: {
        // Navigation
        nav: {
            home: "Inicio",
            tours: "Tours",
            destinations: "Destinos",
            transport: "Transporte",
            company: "Empresa",
            about: "Nosotros",
            sustainability: "Sostenibilidad",
            legal: "Legalidad",
            terms: "Términos",
            faq: "FAQ",
            contact: "Contacto"
        },

        whatsapp: {
            bookNow: "Reserva ahora"
        },
        
        // Hero Section
        hero: {
            title: "Descubre el Paraíso con Ocean Breeze Costa Rica",
            subtitle: "Tours inolvidables y transporte premium en Guanacaste",
            exploreTours: "Explorar Tours",
            reserveNow: "Reservar Ahora"
        },
        
        // Tours Section
        tours: {
            sectionTitle: "Nuestras Aventuras",
            sectionSubtitle: "Experiencias únicas diseñadas para crear recuerdos inolvidables en el paraíso de Guanacaste Costa Rica",
            
            // Service Cards
            services: {
                islands: {
                    title: "Islas Paradisíacas",
                    description: "Explora islas vírgenes con aguas cristalinas y playas de ensueño en el Pacífico costarricense."
                },
                beaches: {
                    title: "Playas Vírgenes",
                    description: "Descubre playas escondidas con arena blanca y naturaleza intacta en la costa de Guanacaste."
                },
                rivers: {
                    title: "Ríos y Rafting",
                    description: "Vive la adrenalina del rafting en ríos de aguas bravas rodeados de selva tropical exuberante."
                },
                mountains: {
                    title: "Montañas y Senderismo",
                    description: "Recorre senderos naturales con vistas espectaculares y biodiversidad única en cada paso."
                },
                waterfalls: {
                    title: "Cataratas Espectaculares",
                    description: "Admira cascadas impresionantes en medio de la selva tropical con piscinas naturales."
                },
                transport: {
                    title: "Transporte Premium",
                    description: "Viaja con comodidad en nuestras busetas modernas con aire acondicionado y guías expertos."
                }
            },
            
            // Common tour text
            common: {
                fullDay: "Día Completo",
                sunset: "Atardecer",
                fromPrice: "A partir de",
                moreInfo: "Más Info",
                reserveTour: "Reservar Tour",
                back: "Volver",
                description: "Description",
                details: "Details",
                rates: "Rates",
                regularTours: "Regular Tours",
                privateTours: "Private Tours",
                pickupTime: "Pick up time",
                zones: "Zonas",
                tourIncludes: "Tour incluye",
                duration: "Duración",
                returnTime: "Return time",
                drivingTime: "Driving time",
                tourLeavesFrom: "TOUR LEAVES FROM",
                whatToBring: "WHAT TO BRING",
                swimsuit: "Traje de baño",
                sneakers: "Tenis",
                towels: "Toallas",
                changeClothes: "Ropa para cambiarse",
                camera: "Cámara",
                insectRepellent: "Repelente de insectos",
                sunscreen: "Protector solar",
                hat: "Sombrero",
                sunglasses: "Lentes de sol",
                money: "Dinero",
                passportCopy: "Copia de tu pasaporte"
            },
            
            // Individual Tours
            "playa-conchal": {
                name: "Tour de Playas Blancas",
                location: "Guanacaste",
                description: "Descubre las playas blancas más espectaculares de Guanacaste en este tour único. Explorarás múltiples playas paradisíacas con arenas blancas y aguas cristalinas que caracterizan la hermosa costa del Pacífico costarricense. Este tour incluye manejar por hermosos paisajes y pintorescos pueblos que te sumergen en una experiencia auténtica en Costa Rica, visitando algunas de las playas más hermosas y vírgenes de la región.",
                details: {
                    includes: [
                        "Transporte con aire acondicionado",
                        "Guía bilingüe",
                        "Acceso a playa privada",
                        "Nevera de cortesía con agua y cerveza"
                    ],
                    duration: "8 horas"
                }
            },
            
            "volcan-arenal": {
                name: "Volcán Arenal y Catarata La Fortuna",
                location: "La Fortuna",
                description: "Este tour incluye manejar por hermosos paisajes y pintorescos pueblos que te sumergen en una experiencia auténtica en Costa Rica, viendo pueblos reales y cómo es el estilo de vida de los Ticos. El volcán Arenal ahora está inactivo... no hay flujos de lava desde hace varios años, pero puedes disfrutar de una forma hermosa y perfecta de este increíble volcán.",
                description2: "Además, visitarás la impresionante Catarata La Fortuna, una cascada de 70 metros de altura que cae en una piscina natural de aguas cristalinas, rodeada de selva virgen y biodiversidad única. Una caminata a través de senderos naturales te llevará hasta esta maravilla natural donde podrás disfrutar de un refrescante baño.",
                details: {
                    includes: [
                        "Transporte con aire acondicionado",
                        "Guía bilingüe",
                        "Desayuno y almuerzo",
                        "Caminata por selva tropical",
                        "Visita a la Catarata La Fortuna",
                        "Vistas del Volcán Arenal",
                        "Nevera de cortesía con agua y cerveza"
                    ],
                    duration: "Día completo"
                }
            },
            
            "monteverde": {
                name: "Monteverde Cloud Forest",
                location: "Monteverde",
                description: "Explora uno de los bosques nubosos más famosos del mundo. Monteverde es hogar de una biodiversidad increíble, con más de 2,500 especies de plantas, 100 especies de mamíferos, 400 especies de aves y miles de insectos. Este tour te lleva a través de senderos naturales donde podrás observar la flora y fauna única de este ecosistema especial.",
                details: {
                    includes: [
                        "Transporte con aire acondicionado",
                        "Guía bilingüe experto",
                        "Entrada al bosque nuboso",
                        "Caminata guiada por senderos naturales",
                        "Observación de vida silvestre",
                        "Almuerzo",
                        "Nevera de cortesía con agua y cerveza"
                    ],
                    duration: "Día completo"
                }
            },
            
            "borinquen-mountain": {
                name: "Borinquen Mountain Resort & Spa",
                location: "Guanacaste",
                description: "Experiencia completa de aventura y relajación en las montañas de Guanacaste. Este tour te lleva al Borinquen Mountain Resort & Spa donde disfrutarás de múltiples actividades en un solo día. Comienza con un relajante baño en aguas termales naturales y aplicación de barro volcánico, seguido de un emocionante paseo a caballo por senderos de montaña. Luego, experimenta la adrenalina del canopy tour (tirolesa) volando sobre la selva tropical, disfruta de un tour para ver heliconias donde podrás admirar estas hermosas flores tropicales en su hábitat natural, participa en un coffee tour donde aprenderás sobre el proceso de cultivo y producción del café costarricense, y completa la aventura con una caminata hasta una hermosa cascada donde podrás refrescarte en sus aguas cristalinas.",
                details: {
                    includes: [
                        "Transporte privado con aire acondicionado",
                        "Guía bilingüe profesional",
                        "Almuerzo",
                        "Aguas termales y barro volcánico",
                        "Paseo a caballo",
                        "Canopy tour (tirolesa)",
                        "Nevera de cortesía con agua y cerveza"
                    ],
                    duration: "Día completo"
                }
            },
            
            "la-leona-waterfall": {
                name: "La Leona Waterfall",
                location: "Guanacaste",
                description: "Descubre una de las cascadas más hermosas y escondidas de Guanacaste. La Leona Waterfall es una cascada espectacular escondida en la selva tropical, accesible solo a través de una emocionante caminata por senderos naturales. Este tour te lleva a través de paisajes impresionantes hasta llegar a esta maravilla natural donde podrás disfrutar de un refrescante baño en sus aguas cristalinas.",
                details: {
                    includes: [
                        "Transporte con aire acondicionado",
                        "Guía bilingüe",
                        "Caminata por senderos naturales",
                        "Acceso a la cascada",
                        "Tiempo para nadar y relajarse",
                        "Almuerzo",
                        "Nevera de cortesía con agua y cerveza"
                    ],
                    duration: "Día completo"
                }
            },
            
            "rio-celeste": {
                name: "Río Celeste",
                location: "Tenorio Volcano National Park",
                description: "Descubre el misterioso Río Celeste, famoso por sus aguas de color azul turquesa único. Este río debe su color especial a una reacción química natural entre minerales volcánicos. El tour incluye una caminata a través del Parque Nacional Volcán Tenorio donde podrás observar esta maravilla natural, así como la catarata del río y las aguas termales naturales.",
                description2: "El tour incluye almuerzo.",
                details: {
                    includes: [
                        "Transporte con aire acondicionado",
                        "Guía bilingüe",
                        "Entrada al parque nacional",
                        "Caminata por senderos naturales",
                        "Vista del Río Celeste y su catarata",
                        "Almuerzo",
                        "Nevera de cortesía con agua y cerveza"
                    ],
                    duration: "Día completo"
                }
            },
            
            "catamaran-sunset": {
                name: "Catamaran Sailing Sunset Tour",
                location: "Playa del Coco",
                description: "No te pierdas la oportunidad de disfrutar de los hermosos atardeceres en el Océano Pacífico. Sube a bordo, relájate con un cóctel y disfruta de una experiencia única en nuestros hermosos catamaranes. Este tour incluye navegación por las aguas del Pacífico, tiempo para nadar y hacer snorkel, y la oportunidad de observar la vida marina mientras disfrutas de un atardecer espectacular.",
                details: {
                    includes: [
                        "Transporte al puerto",
                        "Navegación en catamarán",
                        "Snorkel y equipo",
                        "Almuerzo",
                        "Bebidas y cócteles",
                        "Observación de vida marina",
                        "Atardecer en el océano"
                    ],
                    duration: "Atardecer"
                }
            },
            
            "miravalles": {
                name: "Miravalles Volcano and Waterfalls",
                location: "Guanacaste",
                description: "Explora el Volcán Miravalles y sus impresionantes cascadas. Este tour te lleva a través de paisajes volcánicos únicos donde podrás observar actividad geotérmica, aguas termales naturales y múltiples cascadas espectaculares. Disfruta de un día completo de aventura y naturaleza en uno de los volcanes más activos de Costa Rica.",
                details: {
                    includes: [
                        "Transporte con aire acondicionado",
                        "Guía bilingüe",
                        "Visita al Volcán Miravalles",
                        "Múltiples cascadas",
                        "Aguas termales naturales",
                        "Almuerzo",
                        "Nevera de cortesía con agua y cerveza"
                    ],
                    duration: "Día completo"
                }
            },
            
            "rincon-vieja": {
                name: "Rincón de La Vieja Hiking Tour",
                location: "Rincón de la Vieja National Park",
                description: "¿Eres amante de la vida silvestre? ¿Buscas hacer senderismo, ver vida silvestre y una hermosa cascada? En este tour de naturaleza a través del Parque Nacional Rincón de la Vieja.",
                description2: "Encontraremos el lodo burbujeante, estanques de agua sulfurosa humeante y fumarolas mientras exploramos las 2 millas de senderos en la jungla buscando monos, tucanes, agutíes, coatíes entre otros.",
                details: {
                    returnTime: "3:30 pm",
                    drivingTime: "80 minutos cada trayecto (aprox.)",
                    leavesFrom: "Hoteles principales en Playa Hermosa, Panamá y Coco, Golfo de Papagayo, Playa Tamarindo, Conchal, Brasilito y Flamingo.",
                    includes: [
                        "Almuerzo"
                    ]
                }
            },
            
            "palo-verde": {
                name: "Palo Verde Jungle and Cultural",
                location: "Palo Verde National Park",
                description: "Combina naturaleza y cultura en este tour único. Explora el Parque Nacional Palo Verde, uno de los humedales más importantes de Centroamérica, donde podrás observar una increíble variedad de aves acuáticas y vida silvestre. Luego, visita comunidades locales para aprender sobre la cultura costarricense y disfrutar de experiencias auténticas.",
                details: {
                    includes: [
                        "Transporte con aire acondicionado",
                        "Guía bilingüe",
                        "Tour en bote por el río",
                        "Observación de aves y vida silvestre",
                        "Visita cultural a comunidades locales",
                        "Almuerzo tradicional",
                        "Nevera de cortesía con agua y cerveza"
                    ],
                    duration: "Día completo"
                }
            },
            
            "hacienda-guachipelin": {
                name: "Hacienda Guachipelin Tubing and Canopy Tour",
                location: "Rincón de la Vieja",
                description: "Aventura completa en la Hacienda Guachipelin. Disfruta de múltiples actividades de aventura incluyendo tubing por ríos, canopy tour (tirolesa), caminatas por senderos naturales y más. Este tour combina adrenalina y naturaleza en un solo día inolvidable.",
                details: {
                    includes: [
                        "Transporte con aire acondicionado",
                        "Guía bilingüe",
                        "Tubing por ríos",
                        "Canopy tour (tirolesa)",
                        "Caminatas por senderos",
                        "Almuerzo",
                        "Nevera de cortesía con agua y cerveza"
                    ],
                    duration: "Día completo"
                }
            },
            
            "sport-fishing": {
                name: "Sport Fishing / Full Day",
                location: "Guanacaste",
                description: "Experiencia completa de pesca deportiva en las aguas del Pacífico costarricense. Disfruta de un día completo de pesca privada con bote privado, equipo profesional y todas las comodidades incluidas. Pesca especies como marlin, pez vela, dorado y más.",
                details: {
                    returnTime: "4:00 pm aprox",
                    drivingTime: "1 hora 20 minutos (aprox.)",
                    leavesFrom: "Hoteles principales en Playa Hermosa, Panamá y Coco, Golfo de Papagayo, Tamarindo Beach, Conchal, Brasilito y Flamingo.",
                    includes: [
                        "Bote privado",
                        "Equipo de pesca profesional",
                        "Capitán y tripulación experimentados",
                        "Almuerzo y bebidas",
                        "Todo el equipo incluido"
                    ]
                }
            },
            
            "colorado-river-rafting": {
                name: "Colorado River Rafting",
                location: "Guanacaste",
                description: "Vive la adrenalina del rafting en el Río Colorado. Este tour te lleva por aguas bravas rodeadas de selva tropical exuberante, donde podrás disfrutar de emocionantes rápidos y paisajes espectaculares. Perfecto para los amantes de la aventura.",
                details: {
                    includes: [
                        "Transporte con aire acondicionado",
                        "Guía bilingüe experto",
                        "Equipo de rafting profesional",
                        "Seguridad y chalecos salvavidas",
                        "Almuerzo",
                        "Nevera de cortesía con agua y cerveza"
                    ],
                    duration: "Día completo"
                }
            },
            
            "atvs": {
                name: "ATVs",
                location: "Guanacaste",
                description: "Explora los senderos y paisajes de Guanacaste en un emocionante tour en ATV. Recorre caminos rurales, cruza ríos y disfruta de vistas espectaculares mientras conduces tu propio vehículo todo terreno. Una aventura perfecta para los amantes de la adrenalina.",
                details: {
                    includes: [
                        "Transporte al punto de inicio",
                        "ATV por persona",
                        "Guía bilingüe",
                        "Equipo de seguridad",
                        "Almuerzo",
                        "Nevera de cortesía con agua y cerveza"
                    ],
                    duration: "Día completo"
                }
            },
            
            "llanos-cortez-sloth": {
                name: "Llanos de Cortez, sloth and coffee tour",
                location: "Guanacaste",
                description: "Aventura única que combina la belleza natural de la cascada Llanos del Cortez con la observación de perezosos en su hábitat natural. Este tour te lleva a uno de los destinos más hermosos de Guanacaste, donde podrás disfrutar de una cascada impresionante con aguas cristalinas perfectas para nadar y relajarse.",
                description2: "Después de disfrutar de la cascada, el tour continúa con una experiencia de observación de perezosos, donde tendrás la oportunidad de ver estos fascinantes animales en su entorno natural. Los guías expertos te ayudarán a localizar y observar a los perezosos mientras aprendes sobre su comportamiento y hábitat.",
                details: {
                    includes: [
                        "Transporte privado",
                        "Cascada Llanos del Cortez",
                        "Almuerzo",
                        "Sloth tour (tour de perezosos)",
                        "Tour de cafe",
                        "Guía experto bilingüe",
                        "Equipo de seguridad",
                        "Nevera de cortesía con agua, cerveza"
                    ],
                    duration: "Día completo"
                }
            },

            "paddleboard-kayak": {
                name: "Tour de Paddleboard y Kayak",
                location: "Costa de Guanacaste",
                description: "Paddleboard o kayak por bahías tranquilas del Pacífico en Playas del Coco, Ocotal, Hermosa y Panamá.",
                description2: "Disponible en Playas del Coco, Ocotal, Hermosa y Panamá: ideal para parejas, amigos y familias que buscan una aventura acuática cerca de la playa.",
                details: {
                    zones: "Playas del Coco, Ocotal, Hermosa, Panamá",
                    skipPickup: true,
                    includes: [
                        "Paddleboard o kayak",
                        "Chaleco salvavidas y equipo de seguridad",
                        "Guía bilingüe",
                        "Instrucción básica"
                    ],
                    duration: "Medio día"
                }
            }
        },
        
        // Destinations Section
        destinations: {
            title: "Destinos",
            subtitle: "Descubre los lugares más impresionantes de Costa Rica con nuestros tours guiados",
            mostPopular: "Más Popular"
        },
        
        // Transport Section
        transport: {
            title: "Transporte",
            title2: "Privado",
            subtitle: "Viaja seguro y cómodo a cualquier destino de Guanacaste con nuestro servicio de transporte premium.",
            features: {
                modernVans: "Busetas modernas con A/C",
                bilingualDrivers: "Choferes bilingües y profesionales",
                airportTransfers: "Traslados Aeropuerto - Hotel",
                availability: "Disponibilidad 24/7",
                lastMinute: "Transporte de último minuto",
                contact: "Contáctanos"
            },
            quoteButton: "Cotizar Transporte",
            previous: "Anterior",
            next: "Siguiente"
        },
        
        // Map Section
        map: {
            title: "Ubicación en",
            title2: "Costa Rica",
            subtitle: "Operamos en la hermosa provincia de Guanacaste"
        },

        reviews: {
            title: "Mira lo que",
            title2: "dicen los viajeros"
        },

        gallery: {
            title: "Galería de",
            title2: "Fotos",
            subtitle: "Recuerdos de nuestras aventuras en Costa Rica",
            previous: "Anterior",
            next: "Siguiente"
        },

        pages: {
            about: { title: "Nosotros", subtitle: "Empresa familiar de transporte turístico privado en Guanacaste" },
            sustainability: { title: "Sostenibilidad", subtitle: "Política ambiental alineada a esencial Costa Rica" },
            legal: { title: "Legalidad y Transparencia", subtitle: "Cumplimiento normativo verificable para CTP, ICT y PROCOMER" },
            terms: { title: "Términos, Cancelación y Privacidad", subtitle: "Condiciones claras para reservar con confianza" },
            faq: { title: "Preguntas Frecuentes", subtitle: "Respuestas claras sobre legalidad, seguros y servicio" }
        },
        
        // Contact Section
        contact: {
            title: "Contáctanos",
            subtitle: "¿Listo para tu próxima aventura? Escríbenos.",
            form: {
                fullName: "Nombre Completo",
                email: "Correo Electrónico",
                mainInterest: "Interés Principal",
                from: "Desde",
                destination: "Destino",
                message: "Tu mensaje...",
                sendMessage: "Enviar Mensaje",
                privateTransport: "Transporte Privado"
            },
            messages: {
                fillAllFields: "Por favor, completa todos los campos requeridos.",
                fillTransportFields: "Por favor, completa los campos Desde y Destino.",
                invalidEmail: "Por favor, ingresa un email válido.",
                success: "¡Mensaje enviado con éxito! Te contactaremos pronto."
            }
        },
        
        // Footer
        footer: {
            services: "Servicios",
            company: "Empresa",
            contact: "Contacto",
            followUs: "Síguenos",
            description: "Tours inolvidables y transporte premium en Guanacaste, Costa Rica. Vive la experiencia Pura Vida con nosotros.",
            rights: "Ocean Breeze Costa Rica. Todos los derechos reservados.",
            compliance: "Ocean Breeze Transport and Tourism | Sergio de Jesús Arrieta Fonseca | Cédula 3-0438-0812 | Permiso CTP TUR-N° 0045327 EXP TU-2073 Vigente 27/10/2025-30/09/2027 | ICT 4100-2025 | Placa GB-003813 | Tel/WhatsApp +506 7273 9813 | info@oceanbreezecostarica.com | Guanacaste, Costa Rica | En proceso de licenciamiento esencial Costa Rica"
        }
    },
    
    en: {
        // Navigation
        nav: {
            home: "Home",
            tours: "Tours",
            destinations: "Destinations",
            transport: "Transport",
            company: "Company",
            about: "About Us",
            sustainability: "Sustainability",
            legal: "Legal",
            terms: "Terms",
            faq: "FAQ",
            contact: "Contact"
        },

        whatsapp: {
            bookNow: "Book now"
        },
        
        // Hero Section
        hero: {
            title: "Discover Paradise with Ocean Breeze Costa Rica",
            subtitle: "Unforgettable tours and premium transportation in Guanacaste",
            exploreTours: "Explore Tours",
            reserveNow: "Reserve Now"
        },
        
        // Tours Section
        tours: {
            sectionTitle: "Our Adventures",
            sectionSubtitle: "Unique experiences designed to create unforgettable memories in the paradise of Guanacaste Costa Rica",
            
            // Service Cards
            services: {
                islands: {
                    title: "Paradise Islands",
                    description: "Explore pristine islands with crystal-clear waters and dream beaches in the Costa Rican Pacific."
                },
                beaches: {
                    title: "Virgin Beaches",
                    description: "Discover hidden beaches with white sand and untouched nature along the Guanacaste coast."
                },
                rivers: {
                    title: "Rivers and Rafting",
                    description: "Experience the adrenaline of rafting in white-water rivers surrounded by lush tropical jungle."
                },
                mountains: {
                    title: "Mountains and Hiking",
                    description: "Explore natural trails with spectacular views and unique biodiversity at every step."
                },
                waterfalls: {
                    title: "Spectacular Waterfalls",
                    description: "Admire impressive waterfalls in the middle of the tropical jungle with natural pools."
                },
                transport: {
                    title: "Premium Transportation",
                    description: "Travel comfortably in our modern air-conditioned vans with expert guides."
                }
            },
            
            // Common tour text
            common: {
                fullDay: "Full Day",
                sunset: "Sunset",
                fromPrice: "Starting from",
                moreInfo: "More Info",
                reserveTour: "Reserve Tour",
                back: "Back",
                description: "Description",
                details: "Details",
                rates: "Rates",
                regularTours: "Regular Tours",
                privateTours: "Private Tours",
                pickupTime: "Pick up time",
                zones: "Zones",
                tourIncludes: "Tour includes",
                duration: "Duration",
                returnTime: "Return time",
                drivingTime: "Driving time",
                tourLeavesFrom: "TOUR LEAVES FROM",
                whatToBring: "WHAT TO BRING",
                swimsuit: "Swimsuit",
                sneakers: "Sneakers",
                towels: "Towels",
                changeClothes: "Change of clothes",
                camera: "Camera",
                insectRepellent: "Insect repellent",
                sunscreen: "Sunscreen",
                hat: "Hat",
                sunglasses: "Sunglasses",
                money: "Money",
                passportCopy: "Copy of your passport"
            },
            
            // Individual Tours
            "playa-conchal": {
                name: "White Beaches Tour",
                location: "Guanacaste",
                description: "Discover the most spectacular white beaches of Guanacaste on this unique tour. You'll explore multiple paradise beaches with white sands and crystal-clear waters that characterize the beautiful Costa Rican Pacific coast. This tour includes driving through beautiful landscapes and picturesque towns that immerse you in an authentic Costa Rica experience, visiting some of the most beautiful and pristine beaches in the region.",
                details: {
                    includes: [
                        "Air-conditioned transportation",
                        "Bilingual guide",
                        "Access to private beach",
                        "Courtesy cooler with water and beer"
                    ],
                    duration: "8 hours"
                }
            },
            
            "volcan-arenal": {
                name: "Arenal Volcano and La Fortuna Waterfall",
                location: "La Fortuna",
                description: "This tour includes driving through beautiful landscapes and picturesque towns that immerse you in an authentic Costa Rica experience, seeing real towns and how Ticos live. Arenal Volcano is now inactive... there have been no lava flows for several years, but you can enjoy a beautiful and perfect view of this incredible volcano.",
                description2: "Additionally, you'll visit the impressive La Fortuna Waterfall, a 70-meter-high waterfall that falls into a natural pool of crystal-clear waters, surrounded by virgin jungle and unique biodiversity. A walk through natural trails will take you to this natural wonder where you can enjoy a refreshing swim.",
                details: {
                    includes: [
                        "Air-conditioned transportation",
                        "Bilingual guide",
                        "Breakfast and lunch",
                        "Tropical jungle hike",
                        "Visit to La Fortuna Waterfall",
                        "Views of Arenal Volcano",
                        "Courtesy cooler with water and beer"
                    ],
                    duration: "Full day"
                }
            },
            
            "monteverde": {
                name: "Monteverde Cloud Forest",
                location: "Monteverde",
                description: "Explore one of the world's most famous cloud forests. Monteverde is home to incredible biodiversity, with more than 2,500 plant species, 100 mammal species, 400 bird species, and thousands of insects. This tour takes you through natural trails where you can observe the unique flora and fauna of this special ecosystem.",
                details: {
                    includes: [
                        "Air-conditioned transportation",
                        "Expert bilingual guide",
                        "Cloud forest entrance",
                        "Guided hike through natural trails",
                        "Wildlife observation",
                        "Lunch",
                        "Courtesy cooler with water and beer"
                    ],
                    duration: "Full day"
                }
            },
            
            "borinquen-mountain": {
                name: "Borinquen Mountain Resort & Spa",
                location: "Guanacaste",
                description: "Complete adventure and relaxation experience in the mountains of Guanacaste. This tour takes you to Borinquen Mountain Resort & Spa where you'll enjoy multiple activities in one unforgettable day. Start with a relaxing bath in natural hot springs and volcanic mud application, followed by an exciting horseback ride through mountain trails. Then, experience the adrenaline of the canopy tour (zip line) flying over the tropical jungle, enjoy a heliconia tour where you can admire these beautiful tropical flowers in their natural habitat, participate in a coffee tour where you'll learn about the cultivation and production process of Costa Rican coffee, and complete the adventure with a hike to a beautiful waterfall where you can refresh yourself in its crystal-clear waters.",
                details: {
                    includes: [
                        "Private air-conditioned transportation",
                        "Professional bilingual guide",
                        "Lunch",
                        "Hot springs and volcanic mud",
                        "Horseback riding",
                        "Canopy tour (zip line)",
                        "Courtesy cooler with water and beer"
                    ],
                    duration: "Full day"
                }
            },
            
            "la-leona-waterfall": {
                name: "La Leona Waterfall",
                location: "Guanacaste",
                description: "Discover one of the most beautiful and hidden waterfalls in Guanacaste. La Leona Waterfall is a spectacular waterfall hidden in the tropical jungle, accessible only through an exciting hike along natural trails. This tour takes you through impressive landscapes until you reach this natural wonder where you can enjoy a refreshing swim in its crystal-clear waters.",
                details: {
                    includes: [
                        "Air-conditioned transportation",
                        "Bilingual guide",
                        "Hike through natural trails",
                        "Access to the waterfall",
                        "Time to swim and relax",
                        "Lunch",
                        "Courtesy cooler with water and beer"
                    ],
                    duration: "Full day"
                }
            },
            
            "rio-celeste": {
                name: "Río Celeste",
                location: "Tenorio Volcano National Park",
                description: "Discover the mysterious Río Celeste, famous for its unique turquoise blue waters. This river owes its special color to a natural chemical reaction between volcanic minerals. The tour includes a hike through Tenorio Volcano National Park where you can observe this natural wonder, as well as the river waterfall and natural hot springs.",
                description2: "The tour includes lunch.",
                details: {
                    includes: [
                        "Air-conditioned transportation",
                        "Bilingual guide",
                        "National park entrance",
                        "Hike through natural trails",
                        "View of Río Celeste and its waterfall",
                        "Lunch",
                        "Courtesy cooler with water and beer"
                    ],
                    duration: "Full day"
                }
            },
            
            "catamaran-sunset": {
                name: "Catamaran Sailing Sunset Tour",
                location: "Playa del Coco",
                description: "Don't miss the opportunity to enjoy beautiful sunsets on the Pacific Ocean. Board, relax with a cocktail and enjoy a unique experience on our beautiful catamarans. This tour includes sailing through Pacific waters, time to swim and snorkel, and the opportunity to observe marine life while enjoying a spectacular sunset.",
                details: {
                    includes: [
                        "Transportation to port",
                        "Catamaran sailing",
                        "Snorkel and equipment",
                        "Lunch",
                        "Drinks and cocktails",
                        "Marine life observation",
                        "Sunset on the ocean"
                    ],
                    duration: "Sunset"
                }
            },
            
            "miravalles": {
                name: "Miravalles Volcano and Waterfalls",
                location: "Guanacaste",
                description: "Explore Miravalles Volcano and its impressive waterfalls. This tour takes you through unique volcanic landscapes where you can observe geothermal activity, natural hot springs, and multiple spectacular waterfalls. Enjoy a full day of adventure and nature at one of Costa Rica's most active volcanoes.",
                details: {
                    includes: [
                        "Air-conditioned transportation",
                        "Bilingual guide",
                        "Visit to Miravalles Volcano",
                        "Multiple waterfalls",
                        "Natural hot springs",
                        "Lunch",
                        "Courtesy cooler with water and beer"
                    ],
                    duration: "Full day"
                }
            },
            
            "rincon-vieja": {
                name: "Rincón de La Vieja Hiking Tour",
                location: "Rincón de la Vieja National Park",
                description: "Are you a wildlife lover? Looking to hike, see wildlife and a beautiful waterfall? On this nature tour through Rincón de la Vieja National Park.",
                description2: "We'll find bubbling mud, steaming sulfurous water ponds and fumaroles as we explore the 2 miles of jungle trails looking for monkeys, toucans, agoutis, coatis and more.",
                details: {
                    returnTime: "3:30 pm",
                    drivingTime: "80 minutes each way (approx.)",
                    leavesFrom: "Main hotels in Playa Hermosa, Panamá and Coco, Papagayo Gulf, Tamarindo Beach, Conchal, Brasilito and Flamingo.",
                    includes: [
                        "Lunch"
                    ]
                }
            },
            
            "palo-verde": {
                name: "Palo Verde Jungle and Cultural",
                location: "Palo Verde National Park",
                description: "Combine nature and culture on this unique tour. Explore Palo Verde National Park, one of Central America's most important wetlands, where you can observe an incredible variety of waterfowl and wildlife. Then, visit local communities to learn about Costa Rican culture and enjoy authentic experiences.",
                details: {
                    includes: [
                        "Air-conditioned transportation",
                        "Bilingual guide",
                        "Boat tour on the river",
                        "Bird and wildlife observation",
                        "Cultural visit to local communities",
                        "Traditional lunch",
                        "Courtesy cooler with water and beer"
                    ],
                    duration: "Full day"
                }
            },
            
            "hacienda-guachipelin": {
                name: "Hacienda Guachipelin Tubing and Canopy Tour",
                location: "Rincón de la Vieja",
                description: "Complete adventure at Hacienda Guachipelin. Enjoy multiple adventure activities including river tubing, canopy tour (zip line), hikes through natural trails and more. This tour combines adrenaline and nature in one unforgettable day.",
                details: {
                    includes: [
                        "Air-conditioned transportation",
                        "Bilingual guide",
                        "River tubing",
                        "Canopy tour (zip line)",
                        "Trail hikes",
                        "Lunch",
                        "Courtesy cooler with water and beer"
                    ],
                    duration: "Full day"
                }
            },
            
            "sport-fishing": {
                name: "Sport Fishing / Full Day",
                location: "Guanacaste",
                description: "Complete sport fishing experience in Costa Rican Pacific waters. Enjoy a full day of private fishing with private boat, professional equipment and all amenities included. Fish for species like marlin, sailfish, dorado and more.",
                details: {
                    returnTime: "4:00 pm approx",
                    drivingTime: "1 hour 20 minutes (approx.)",
                    leavesFrom: "Main hotels in Playa Hermosa, Panamá and Coco, Papagayo Gulf, Tamarindo Beach, Conchal, Brasilito and Flamingo.",
                    includes: [
                        "Private boat",
                        "Professional fishing equipment",
                        "Experienced captain and crew",
                        "Lunch and drinks",
                        "All equipment included"
                    ]
                }
            },
            
            "colorado-river-rafting": {
                name: "Colorado River Rafting",
                location: "Guanacaste",
                description: "Experience the adrenaline of rafting on the Colorado River. This tour takes you through white waters surrounded by lush tropical jungle, where you can enjoy exciting rapids and spectacular landscapes. Perfect for adventure lovers.",
                details: {
                    includes: [
                        "Air-conditioned transportation",
                        "Expert bilingual guide",
                        "Professional rafting equipment",
                        "Safety and life jackets",
                        "Lunch",
                        "Courtesy cooler with water and beer"
                    ],
                    duration: "Full day"
                }
            },
            
            "atvs": {
                name: "ATVs",
                location: "Guanacaste",
                description: "Explore the trails and landscapes of Guanacaste on an exciting ATV tour. Ride rural roads, cross rivers and enjoy spectacular views while driving your own all-terrain vehicle. A perfect adventure for adrenaline lovers.",
                details: {
                    includes: [
                        "Transportation to starting point",
                        "ATV per person",
                        "Bilingual guide",
                        "Safety equipment",
                        "Lunch",
                        "Courtesy cooler with water and beer"
                    ],
                    duration: "Full day"
                }
            },
            
            "llanos-cortez-sloth": {
                name: "Llanos de Cortez, sloth and coffee tour",
                location: "Guanacaste",
                description: "Unique adventure that combines the natural beauty of Llanos del Cortez waterfall with sloth observation in their natural habitat. This tour takes you to one of the most beautiful destinations in Guanacaste, where you can enjoy an impressive waterfall with crystal-clear waters perfect for swimming and relaxing.",
                description2: "After enjoying the waterfall, the tour continues with a sloth observation experience, where you'll have the opportunity to see these fascinating animals in their natural environment. Expert guides will help you locate and observe sloths while learning about their behavior and habitat.",
                details: {
                    includes: [
                        "Private transportation",
                        "Llanos del Cortez waterfall",
                        "Lunch",
                        "Sloth tour",
                        "Coffee tour",
                        "Expert bilingual guide",
                        "Safety equipment",
                        "Courtesy cooler with water, beer"
                    ],
                    duration: "Full day"
                }
            },

            "paddleboard-kayak": {
                name: "Paddleboard and Kayak Tour",
                location: "Guanacaste coast",
                description: "Paddleboard or kayak along calm Pacific bays in Playas del Coco, Ocotal, Hermosa and Panamá.",
                description2: "Available in Playas del Coco, Ocotal, Hermosa and Panamá — perfect for couples, friends and families looking for a fun water adventure close to the beach.",
                details: {
                    zones: "Playas del Coco, Ocotal, Hermosa, Panamá",
                    skipPickup: true,
                    includes: [
                        "Paddleboard or kayak",
                        "Life jacket and safety equipment",
                        "Bilingual guide",
                        "Basic instruction"
                    ],
                    duration: "Half day"
                }
            }
        },
        
        // Destinations Section
        destinations: {
            title: "Destinations",
            subtitle: "Discover the most impressive places in Costa Rica with our guided tours",
            mostPopular: "Most Popular"
        },
        
        // Transport Section
        transport: {
            title: "Transport",
            title2: "Private",
            subtitle: "Travel safely and comfortably to any destination in Guanacaste with our premium transportation service.",
            features: {
                modernVans: "Modern vans with A/C",
                bilingualDrivers: "Bilingual and professional drivers",
                airportTransfers: "Airport - Hotel transfers",
                availability: "24/7 availability",
                lastMinute: "Last minute transportation",
                contact: "Contact us"
            },
            quoteButton: "Get Quote",
            previous: "Previous",
            next: "Next"
        },
        
        // Map Section
        map: {
            title: "Location in",
            title2: "Costa Rica",
            subtitle: "We operate in the beautiful province of Guanacaste"
        },

        reviews: {
            title: "See what",
            title2: "travelers are saying"
        },

        gallery: {
            title: "Photo",
            title2: "Gallery",
            subtitle: "Memories from our adventures in Costa Rica",
            previous: "Previous",
            next: "Next"
        },

        pages: {
            about: { title: "About Us", subtitle: "Family-owned private tourist transportation company in Guanacaste" },
            sustainability: { title: "Sustainability", subtitle: "Environmental policy aligned with esencial Costa Rica" },
            legal: { title: "Legal & Transparency", subtitle: "Verifiable compliance for CTP, ICT and PROCOMER" },
            terms: { title: "Terms, Cancellation & Privacy", subtitle: "Clear conditions so you can book with confidence" },
            faq: { title: "Frequently Asked Questions", subtitle: "Clear answers about legality, insurance and service" }
        },
        
        // Contact Section
        contact: {
            title: "Contact Us",
            subtitle: "Ready for your next adventure? Write to us.",
            form: {
                fullName: "Full Name",
                email: "Email",
                mainInterest: "Main Interest",
                from: "From",
                destination: "Destination",
                message: "Your message...",
                sendMessage: "Send Message",
                privateTransport: "Private Transport"
            },
            messages: {
                fillAllFields: "Please fill in all required fields.",
                fillTransportFields: "Please fill in the From and Destination fields.",
                invalidEmail: "Please enter a valid email.",
                success: "Message sent successfully! We'll contact you soon."
            }
        },
        
        // Footer
        footer: {
            services: "Services",
            company: "Company",
            contact: "Contact",
            followUs: "Follow Us",
            description: "Unforgettable tours and premium transportation in Guanacaste, Costa Rica. Experience Pura Vida with us.",
            rights: "Ocean Breeze Costa Rica. All rights reserved.",
            compliance: "Ocean Breeze Transport and Tourism | Sergio de Jesús Arrieta Fonseca | ID 3-0438-0812 | CTP Permit TUR-N° 0045327 FILE TU-2073 Valid 10/27/2025–09/30/2027 | ICT 4100-2025 | Plate GB-003813 | Tel/WhatsApp +506 7273 9813 | info@oceanbreezecostarica.com | Guanacaste, Costa Rica | In the process of licensing esencial Costa Rica"
        }
    }
};

