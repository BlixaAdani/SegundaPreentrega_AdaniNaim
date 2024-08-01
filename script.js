const signs = [
    { name: "Aries", description: "Iniciativa, valentía, y liderazgo. Se asocia con la carta de El Emperador." },
    { name: "Tauro", description: "Estabilidad, sensualidad, y determinación. Se asocia con la carta de El Hierofante." },
    { name: "Géminis", description: "Comunicación, adaptabilidad, y curiosidad. Se asocia con la carta de Los Enamorados." },
    { name: "Cáncer", description: "Emoción, protección, y sensibilidad. Se asocia con la carta de El Carro." },
    { name: "Leo", description: "Creatividad, confianza, y generosidad. Se asocia con la carta de La Fuerza." },
    { name: "Virgo", description: "Análisis, precisión, y servicio. Se asocia con la carta de El Ermitaño." },
    { name: "Libra", description: "Equilibrio, justicia, y sociabilidad. Se asocia con la carta de La Justicia." },
    { name: "Escorpio", description: "Intensidad, transformación, y misterio. Se asocia con la carta de La Muerte." },
    { name: "Sagitario", description: "Aventura, optimismo, y sabiduría. Se asocia con la carta de La Templanza." },
    { name: "Capricornio", description: "Disciplina, responsabilidad, y ambición. Se asocia con la carta de El Diablo." },
    { name: "Acuario", description: "Innovación, independencia, y originalidad. Se asocia con la carta de La Estrella." },
    { name: "Piscis", description: "Intuición, empatía, y espiritualidad. Se asocia con la carta de La Luna." }
];

const signEquivalencies = {
    "0": "El Loco, el punto de partida, la inocencia de la juventud, el inicio del camino",
    "1": "El Mago, el regreso del viaje, la adquisición de experiencia",
    "2": "La Sacerdotisa, la contraparte femenina del Loco, la joven amante",
    "3": "La Emperatriz, la contraparte femenina del Mago y el Emperador, el rostro mismo de Morgana",
    "4": "El Emperador, la fuerza ardiente y la perseverancia calmada",
    "5": "El Hierofante, El Papa, el toro dorado de la tradición",
    "6": "Los Enamorados, la unión de los opuestos, la fusión de caminos",
    "7": "El Carro, el triunfo de la voluntad, el viaje hacia adelante",
    "8": "La Fuerza, el dominio de las emociones, la fortaleza interior",
    "9": "El Ermitaño, la búsqueda de la verdad interior, el camino solitario",
    "10": "La Rueda de la Fortuna, los ciclos del destino, el punto de inflexión",
    "11": "La Justicia, el equilibrio de la verdad, las balanzas del karma",
    "12": "El Colgado, el sacrificio por la percepción, la pausa en la acción",
    "13": "La Muerte, el fin de un ciclo, la transformación a través del desprendimiento",
    "14": "La Templanza, la mezcla de opuestos, el camino de la moderación",
    "15": "El Diablo, la esclavitud del materialismo, el desafío de la libertad",
    "16": "La Torre, la conmoción repentina, la destrucción de las falsedades",
    "17": "La Estrella, la esperanza e inspiración, la guía desde arriba",
    "18": "La Luna, el reino de los sueños, la ilusión y la intuición",
    "19": "El Sol, la claridad y vitalidad, la alegría de vivir",
    "20": "El Juicio, el despertar y la renovación, el llamado a un propósito superior",
    "21": "El Mundo, la culminación de un viaje, la integración de la experiencia"
};

const majorArcana = [
    "El Loco", "El Mago", "La Sacerdotisa", "La Emperatriz", "El Emperador", 
    "El Hierofante", "Los Enamorados", "El Carro", "La Fuerza", "El Ermitaño", 
    "La Rueda de la Fortuna", "La Justicia", "El Colgado", "La Muerte", 
    "La Templanza", "El Diablo", "La Torre", "La Estrella", "La Luna", 
    "El Sol", "El Juicio", "El Mundo"
];

const minorArcana = {
    "Copas": [
        { card: "As de Copas", description: "Emociones nuevas y abundantes. Significa un nuevo comienzo emocional." },
        { card: "Dos de Copas", description: "Unión y asociación. Representa relaciones y armonía." },
        { card: "Tres de Copas", description: "Celebración y comunidad. Se refiere a la alegría compartida." },
        { card: "Cuatro de Copas", description: "Descontento y reflexión. Indica una necesidad de reevaluar tus emociones." },
        { card: "Cinco de Copas", description: "Pérdida y dolor. Representa arrepentimiento y tristeza." },
        { card: "Seis de Copas", description: "Nostalgia y recuerdos. Conecta con el pasado y la inocencia infantil." },
        { card: "Siete de Copas", description: "Opciones y confusión. Sugiere muchas posibilidades y la necesidad de elegir." },
        { card: "Ocho de Copas", description: "Desaparecer y dejar atrás. Indica un cambio o la búsqueda de algo más significativo." },
        { card: "Nueve de Copas", description: "Satisfacción y realización. Representa la obtención de deseos y felicidad." },
        { card: "Diez de Copas", description: "Felicidad y armonía familiar. Simboliza la plenitud emocional y relaciones felices." },
        { card: "Sota de Copas", description: "Mensajes emocionales. Indica la llegada de noticias o propuestas relacionadas con el corazón." },
        { card: "Caballo de Copas", description: "Romanticismo y idealismo. Representa la búsqueda de romance y sueños." },
        { card: "Reina de Copas", description: "Empatía y compasión. Se refiere a la habilidad para cuidar y comprender a los demás." },
        { card: "Rey de Copas", description: "Madurez emocional y equilibrio. Representa la sabiduría y la estabilidad en las emociones." }
    ],
    "Oros": [
        { card: "As de Oros", description: "Nuevas oportunidades financieras y materiales. Indica un nuevo comienzo en la prosperidad." },
        { card: "Dos de Oros", description: "Equilibrio y adaptabilidad. Sugiere la gestión de múltiples prioridades o recursos." },
        { card: "Tres de Oros", description: "Trabajo en equipo y colaboración. Representa el éxito a través de la cooperación." },
        { card: "Cuatro de Oros", description: "Seguridad y estabilidad. Indica la necesidad de mantener el control sobre los recursos." },
        { card: "Cinco de Oros", description: "Dificultades financieras y pérdidas. Señala la falta de seguridad y la necesidad de apoyo." },
        { card: "Seis de Oros", description: "Generosidad y equilibrio. Representa la distribución equitativa de los recursos y la caridad." },
        { card: "Siete de Oros", description: "Paciencia y evaluación. Indica el tiempo de espera y la evaluación del progreso." },
        { card: "Ocho de Oros", description: "Dedicación y habilidad. Sugiere el trabajo duro y el perfeccionamiento de habilidades." },
        { card: "Nueve de Oros", description: "Logro y éxito material. Representa el disfrute de los frutos del esfuerzo." },
        { card: "Diez de Oros", description: "Riqueza y legado. Simboliza la estabilidad financiera y la seguridad a largo plazo." },
        { card: "Sota de Oros", description: "Aprendizaje y nuevas oportunidades. Indica la llegada de nuevas ideas o proyectos." },
        { card: "Caballo de Oros", description: "Responsabilidad y trabajo diligente. Representa el enfoque en los objetivos y la perseverancia." },
        { card: "Reina de Oros", description: "Abundancia y practicidad. Se refiere a la capacidad de cuidar y proporcionar estabilidad material." },
        { card: "Rey de Oros", description: "Éxito y autoridad financiera. Simboliza la capacidad de gestionar y controlar los recursos con habilidad." }
    ],
    "Espadas": [
        { card: "As de Espadas", description: "Claridad mental y verdad. Indica nuevos comienzos en la comprensión y la comunicación." },
        { card: "Dos de Espadas", description: "Conflicto y decisiones. Sugiere la necesidad de tomar decisiones difíciles y enfrentar conflictos." },
        { card: "Tres de Espadas", description: "Dolor y tristeza. Representa el sufrimiento emocional y la separación." },
        { card: "Cuatro de Espadas", description: "Descanso y recuperación. Indica la necesidad de tiempo para sanar y reflexionar." },
        { card: "Cinco de Espadas", description: "Conflicto y derrota. Señala el enfrentamiento y las consecuencias de las disputas." },
        { card: "Seis de Espadas", description: "Transición y cambio. Representa el movimiento hacia una situación más tranquila." },
        { card: "Siete de Espadas", description: "Estrategia y engaño. Sugiere la necesidad de ser astuto y cauteloso en los planes." },
        { card: "Ocho de Espadas", description: "Restricción y miedo. Indica sentimientos de atrapamiento y limitación." },
        { card: "Nueve de Espadas", description: "Ansiedad y preocupación. Representa la angustia mental y la preocupación." },
        { card: "Diez de Espadas", description: "Ruptura y dolor. Simboliza el final doloroso de una situación difícil." },
        { card: "Sota de Espadas", description: "Curiosidad y vigilancia. Sugiere la llegada de noticias y la necesidad de estar alerta." },
        { card: "Caballo de Espadas", description: "Acción y rapidez. Representa la energía y la rapidez en la resolución de problemas." },
        { card: "Reina de Espadas", description: "Claridad y justicia. Se refiere a la habilidad para tomar decisiones objetivas y justas." },
        { card: "Rey de Espadas", description: "Autoridad y poder mental. Simboliza la capacidad de liderar con sabiduría y autoridad." }
    ],
    "Bastos": [
        { card: "As de Bastos", description: "Inspiración y nuevos comienzos. Indica el inicio de un nuevo proyecto o idea." },
        { card: "Dos de Bastos", description: "Planificación y visión. Sugiere la necesidad de planificación y establecer metas." },
        { card: "Tres de Bastos", description: "Expansión y progreso. Representa el avance y la expansión en proyectos." },
        { card: "Cuatro de Bastos", description: "Celebración y estabilidad. Simboliza el éxito y la celebración de los logros." },
        { card: "Cinco de Bastos", description: "Competencia y conflicto. Indica la presencia de desafíos y rivalidades." },
        { card: "Seis de Bastos", description: "Victoria y reconocimiento. Representa el éxito y el reconocimiento por los logros." },
        { card: "Siete de Bastos", description: "Defensa y perseverancia. Sugiere la necesidad de defender tus posiciones y perseverar." },
        { card: "Ocho de Bastos", description: "Velocidad y acción. Indica el movimiento rápido y la acción decisiva." },
        { card: "Nueve de Bastos", description: "Resiliencia y fortaleza. Representa la resistencia y la capacidad para superar obstáculos." },
        { card: "Diez de Bastos", description: "Carga y responsabilidad. Sugiere la necesidad de gestionar cargas y responsabilidades." },
        { card: "Sota de Bastos", description: "Energía y aventura. Indica el inicio de nuevas aventuras y la búsqueda de inspiración." },
        { card: "Caballo de Bastos", description: "Acción y ambición. Representa la energía y el impulso para alcanzar metas." },
        { card: "Reina de Bastos", description: "Creatividad y confianza. Se refiere a la habilidad para inspirar y liderar con pasión." },
        { card: "Rey de Bastos", description: "Liderazgo y visión. Simboliza la habilidad para liderar con visión y determinación." }
    ]
};

// Handle card number selection
function selectANumber() {
    const selectedCardNumber = parseInt(prompt("Por favor, selecciona un número entre 0 y 21"));

    if (isNaN(selectedCardNumber) || selectedCardNumber < 0 || selectedCardNumber > 21) {
        alert("Error, por favor selecciona un número válido");
    } else {
        const selectedCard = majorArcana[selectedCardNumber];
        alert(`Has seleccionado: ${selectedCard}`);
        window.selectedCardNumber = selectedCardNumber;
        
        // Allow the user to view the related sign
        const viewSign = confirm("¿Quieres ver el signo zodiacal relacionado con esta carta?");
        if (viewSign) {
            relateCardWithSign();
        }
    }
}

// Relate selected card with zodiac sign
function relateCardWithSign() {
    if (window.selectedCardNumber === null || window.selectedCardNumber === undefined) {
        alert("Por favor, selecciona un número de carta primero.");
        return;
    }

    const cardDescription = signEquivalencies[window.selectedCardNumber];
    let relatedSign = null;

    switch (window.selectedCardNumber) {
        case 4: relatedSign = signs[0]; break; // Aries
        case 5: relatedSign = signs[1]; break; // Tauro
        case 6: relatedSign = signs[2]; break; // Géminis
        case 7: relatedSign = signs[3]; break; // Cáncer
        case 8: relatedSign = signs[4]; break; // Leo
        case 9: relatedSign = signs[5]; break; // Virgo
        case 11: relatedSign = signs[6]; break; // Libra
        case 13: relatedSign = signs[7]; break; // Escorpio
        case 14: relatedSign = signs[8]; break; // Sagitario
        case 15: relatedSign = signs[9]; break; // Capricornio
        case 17: relatedSign = signs[10]; break; // Acuario
        case 18: relatedSign = signs[11]; break; // Piscis
        default:
            alert(`${cardDescription} no está relacionado con ningún signo zodiacal.`);
            return;
    }

    if (relatedSign) {
        alert(`${cardDescription} se relaciona con ${relatedSign.name}`);
    }
}

// Get a random card (Major or Minor Arcana)
function getRandomCard() {
    const arcanaType = Math.random() < 0.5 ? 'major' : 'minor';

    if (arcanaType === 'major') {
        const cardIndex = Math.floor(Math.random() * majorArcana.length);
        return { type: 'major', card: majorArcana[cardIndex] };
    } else {
        const suits = Object.keys(minorArcana);
        const suit = suits[Math.floor(Math.random() * suits.length)];
        const cardIndex = Math.floor(Math.random() * minorArcana[suit].length);
        return { type: 'minor', card: minorArcana[suit][cardIndex].card, suit: suit, description: minorArcana[suit][cardIndex].description };
    }
}

// Perform a full tarot reading by selecting 3 random cards
function fullTarotReading() {
    const reading = [];
    for (let i = 0; i < 3; i++) { // Select 3 cards for the reading
        reading.push(getRandomCard());
    }

    let readingSummary = "Tu lectura de tarot es:\n";
    reading.forEach((card, index) => {
        if (card.type === 'major') {
            readingSummary += `Carta ${index + 1}: ${card.card} (Arcano Mayor)\n`;
        } else {
            readingSummary += `Carta ${index + 1}: ${card.card} de ${card.suit} (Arcano Menor) - ${card.description}\n`;
        }
    });

    alert(readingSummary);
}

// Search for a specific card
function searchCard() {
    const searchTerm = prompt("Introduce el nombre de la carta a buscar (por ejemplo, 'El Loco', 'As de Copas'):");
    let found = false;

    // Check in Major Arcana
    const majorIndex = majorArcana.indexOf(searchTerm);
    if (majorIndex !== -1) {
        alert(`${searchTerm} es una carta del Arcano Mayor. ${signEquivalencies[majorIndex]}`);
        found = true;
    }

    // Check in Minor Arcana
    for (const suit in minorArcana) {
        const card = minorArcana[suit].find(c => c.card === searchTerm);
        if (card) {
            alert(`${searchTerm} es una carta del Arcano Menor en el palo de ${suit}. ${card.description}`);
            found = true;
            break;
        }
    }

    if (!found) {
        alert(`${searchTerm} no se encuentra en el mazo.`);
    }
}

// Search for a zodiac sign
function searchSign() {
    const searchSign = prompt("Introduce el nombre del signo zodiacal (por ejemplo, 'Aries', 'Tauro'):");
    const sign = signs.find(s => s.name === searchSign);

    if (sign) {
        alert(`${sign.name} es el signo zodiacal en la posición ${signs.indexOf(sign)}. ${sign.description}`);
    } else {
        alert(`${searchSign} no se encuentra en la lista de signos zodiacales.`);
    }
}

// Main function to handle user interaction
function main() {
    let choice;

    do {
        choice = prompt("Selecciona una opción:\n1. Seleccionar Número de Carta\n2. Relacionar Carta con Signo\n3. Lectura Completa de Tarot\n4. Buscar Carta\n5. Buscar Signo Zodiacal\n6. Salir");

        switch (choice) {
            case '1':
                selectANumber();
                break;
            case '2':
                relateCardWithSign();
                break;
            case '3':
                fullTarotReading();
                break;
            case '4':
                searchCard();
                break;
            case '5':
                searchSign();
                break;
            case '6':
                alert("Saliendo...");
                break;
            default:
                alert("Opción no válida.");
        }
    } while (choice !== '6');
}

// Run the main function when the script loads
main();