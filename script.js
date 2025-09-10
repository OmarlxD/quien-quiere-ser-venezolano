// --- Elementos del DOM ---
const pantallaMenu = document.getElementById('pantalla-menu');
const pantallaCreditos = document.getElementById('pantalla-creditos');
const pantallaReglasCasual = document.getElementById('pantalla-reglas-casual');
const pantallaReglasSpeedrun = document.getElementById('pantalla-reglas-speedrun');
const pantallaJuego = document.getElementById('pantalla-juego');
const pantallaFinJuego = document.getElementById('pantalla-fin-juego');
const pantallaModos = document.getElementById('pantalla-modos');

const btnJugar = document.getElementById('btn-jugar');
const btnCreditos = document.getElementById('btn-creditos');
const btnVolverMenu = document.getElementById('btn-volver-menu');
const btnReiniciar = document.getElementById('btn-reiniciar');
const btnPausa = document.getElementById('btn-pausa');
const btnComenzarCasual = document.getElementById('btn-comenzar-casual');
const btnComenzarSpeedrun = document.getElementById('btn-comenzar-speedrun');
const btnModoCasual = document.getElementById('btn-modo-casual');
const btnModoSpeedrun = document.getElementById('btn-modo-speedrun');
const btnVolverMenuModos = document.getElementById('btn-volver-menu-modos');
const btnVolverMenuFinal = document.getElementById('btn-volver-menu-final');

const preguntaTexto = document.getElementById('pregunta-texto');
const opcionesBotones = document.querySelectorAll('.opcion');
const timerElement = document.getElementById('timer');
const arepasVida = [
    document.getElementById('arepa1'),
    document.getElementById('arepa2'),
    document.getElementById('arepa3')
];
const contadorPreguntasElement = document.getElementById('contador-preguntas');
const versionJuegoElement = document.getElementById('version-juego');
const vidasCasualElement = document.getElementById('vidas-casual');

const mensajeFinal = document.getElementById('mensaje-final');
const puntuacionFinal = document.getElementById('puntuacion-final');
const recordAnterior = document.getElementById('record-anterior');

const VERSION_JUEGO = "0.7";

// --- Base de Datos de Preguntas ---
const preguntasCasual = [
    {
        pregunta: "¿Qué significa 'dar la cola'?",
        opciones: ["Ofrecer un aventón", "Hacer una fila", "Compartir comida", "Pedir un favor"],
        respuesta: 0,
        colorFondo: "#e0b0ff"
    },
    {
        pregunta: "¿Qué es una cachapa?",
        opciones: ["Un plato de maíz dulce", "Un tipo de pan", "Una bebida fría", "Un pastel de carne"],
        respuesta: 0,
        colorFondo: "#f5cba7"
    },
    {
        pregunta: "¿Qué animal es el Símbolo Nacional de Venezuela?",
        opciones: ["Águila arpía", "Cardenalito", "Turpial", "Jaguar"],
        respuesta: 2,
        colorFondo: "#a8e4a0"
    },
    {
        pregunta: "¿Qué ciudad es conocida como 'La Ciudad de los Vientos'?",
        opciones: ["Maracaibo", "Mérida", "Coro", "Caracas"],
        respuesta: 2,
        colorFondo: "#9bc4e2"
    },
    {
        pregunta: "La frase '¡Chévere!' significa...",
        opciones: ["¡Qué bien!", "¡Qué mal!", "¡No lo sé!", "¡Hola!"],
        respuesta: 0,
        colorFondo: "#ffd1a8"
    },
    {
        pregunta: "¿Qué se celebra en Venezuela el 24 de diciembre?",
        opciones: ["Semana Santa", "Carnaval", "Día de la Chinita", "Nochebuena"],
        respuesta: 3,
        colorFondo: "#f7d794"
    },
    {
        pregunta: "¿Qué significa 'Echar el carro'?",
        opciones: ["Comer mucho", "Hacer una carrera", "Hacer un favor", "Descansar"],
        respuesta: 3,
        colorFondo: "#c4a8e2"
    },
    {
        pregunta: "Si un venezolano te dice 'No me la calo', ¿qué quiere decir?",
        opciones: ["Que no entiende", "Que tiene frío", "Que no se rinde", "Que no lo soporta"],
        respuesta: 3,
        colorFondo: "#e2c4a8"
    },
    {
        pregunta: "Cuando un venezolano está 'enratonado', ¿qué le pasa?",
        opciones: ["Está muy ocupado", "Está resfriado", "Tiene resaca", "Está muy emocionado"],
        respuesta: 2,
        colorFondo: "#a8e2c4"
    },
    {
        pregunta: "¿Qué es una 'chama'?",
        opciones: ["Un tipo de arepa", "Una muchacha joven", "Una broma", "Un licor"],
        respuesta: 1,
        colorFondo: "#e0b0ff"
    },
    {
        pregunta: "¿Qué significa la frase 'estar arrecho'?",
        opciones: ["Estar de mal humor", "Estar muy feliz", "Estar confundido", "Estar enfermo"],
        respuesta: 0,
        colorFondo: "#ff6f69"
    },
    {
        pregunta: "Si algo es 'un peo', ¿qué es?",
        opciones: ["Un problema o lío", "Una fiesta ruidosa", "Algo delicioso", "Una broma pesada"],
        respuesta: 0,
        colorFondo: "#88b04b"
    },
    {
        pregunta: "La palabra 'pana' se utiliza para referirse a...",
        opciones: ["Una persona molesta", "Un amigo cercano", "Un tipo de comida", "Una bebida alcohólica"],
        respuesta: 1,
        colorFondo: "#5d5c61"
    },
    {
        pregunta: "¿Qué es un 'mamarracho'?",
        opciones: ["Un postre venezolano", "Una persona elegante", "Una persona ridícula o mal vestida", "Un tipo de animal"],
        respuesta: 2,
        colorFondo: "#7e57c2"
    },
    {
        pregunta: "Si algo es 'chimbo', ¿qué es?",
        opciones: ["Muy caro", "Muy bueno", "De mala calidad", "Muy rápido"],
        respuesta: 2,
        colorFondo: "#424242"
    },
    {
        pregunta: "¿Qué se dice cuando alguien 'está en la luna'?",
        opciones: ["Que está viajando", "Que está muy atento", "Que está distraído", "Que está triste"],
        respuesta: 2,
        colorFondo: "#6d4c41"
    },
    {
        pregunta: "La expresión 'Dale con la lata' se usa para...",
        opciones: ["Animar a alguien a seguir", "Pedirle a alguien que se detenga", "Invitar a alguien a comer", "Decirle a alguien que no moleste"],
        respuesta: 0,
        colorFondo: "#a9a9a9"
    },
    {
        pregunta: "¿Qué es una 'malandra'?",
        opciones: ["Una mujer que baila mucho", "Una mujer criminal o problemática", "Una mujer muy alta", "Una mujer muy sociable"],
        respuesta: 1,
        colorFondo: "#e53935"
    },
    {
        pregunta: "¿Qué significa 'Un palo de agua'?",
        opciones: ["Un aguacero fuerte", "Una bebida alcohólica", "Una persona muy alta", "Un tipo de música"],
        respuesta: 0,
        colorFondo: "#00bfa5"
    },
    {
        pregunta: "¿Qué es 'un pasapalos'?",
        opciones: ["Un deporte popular", "Una comida para un viaje", "Una merienda", "Un aperitivo o botana"],
        respuesta: 3,
        colorFondo: "#ff9800"
    },
    // Nuevas preguntas para el modo Casual
    {
        pregunta: "¿Qué se celebra en Venezuela el 19 de abril?",
        opciones: ["Firma del Acta de la Independencia", "Batalla de Carabobo", "Día de la Bandera", "Día del Trabajador"],
        respuesta: 0,
        colorFondo: "#e0b0ff"
    },
    {
        pregunta: "¿Cuál es el plato nacional de Venezuela?",
        opciones: ["Pabellón Criollo", "Hallaca", "Arepa", "Sancocho"],
        respuesta: 0,
        colorFondo: "#f5cba7"
    },
    {
        pregunta: "¿Cómo se le dice a alguien con mala suerte?",
        opciones: ["Salado", "Pana", "Chevere", "Arrecho"],
        respuesta: 0,
        colorFondo: "#a8e4a0"
    },
    {
        pregunta: "¿Qué es un 'guayabo'?",
        opciones: ["Un tipo de árbol", "Una resaca", "Un sentimiento de nostalgia", "Un tipo de fruta"],
        respuesta: 2,
        colorFondo: "#9bc4e2"
    },
    {
        pregunta: "¿Qué significa 'ratón' en Venezuela?",
        opciones: ["Animal pequeño", "Persona cobarde", "Persona que roba", "Resaca"],
        respuesta: 3,
        colorFondo: "#ffd1a8"
    },
    {
        pregunta: "¿Cuál es la bebida nacional de Venezuela?",
        opciones: ["Cocuy", "Chicha", "Papelón con limón", "Ron"],
        respuesta: 2,
        colorFondo: "#f7d794"
    },
    {
        pregunta: "¿Qué es una 'pava'?",
        opciones: ["Un tipo de ave", "Mala suerte", "Un sombrero", "Un tipo de baile"],
        respuesta: 1,
        colorFondo: "#c4a8e2"
    },
    {
        pregunta: "¿Qué significa 'coroto'?",
        opciones: ["Un plato de comida", "Un objeto sin valor", "Un animal salvaje", "Un tipo de música"],
        respuesta: 1,
        colorFondo: "#e2c4a8"
    },
    {
        pregunta: "¿Qué significa 'echarle pichón'?",
        opciones: ["Ponerle ganas a algo", "Echarle agua a una planta", "Estar enojado", "Jugar con un ave"],
        respuesta: 0,
        colorFondo: "#a8e2c4"
    },
    {
        pregunta: "¿Qué es 'un perico'?",
        opciones: ["Un tipo de pájaro", "Un plato de huevos revueltos", "Una persona molesta", "Una bebida alcohólica"],
        respuesta: 1,
        colorFondo: "#e0b0ff"
    }
];

const preguntasSpeedrun = [
    {
        pregunta: "¿Qué río venezolano es el segundo más largo del mundo?",
        opciones: ["Orinoco", "Amazonas", "Esequibo", "Apure"],
        respuesta: 0,
        colorFondo: "#d4a5a5"
    },
    {
        pregunta: "¿Quién fue el primer presidente de Venezuela?",
        opciones: ["Simón Bolívar", "José Antonio Páez", "Francisco de Miranda", "Antonio Guzmán Blanco"],
        respuesta: 1,
        colorFondo: "#a5d4a5"
    },
    {
        pregunta: "¿En qué año se firmó el Acta de la Independencia de Venezuela?",
        opciones: ["1810", "1811", "1821", "1830"],
        respuesta: 1,
        colorFondo: "#a5a5d4"
    },
    {
        pregunta: "¿Quién es conocido como 'El Catire' en la historia venezolana?",
        opciones: ["José Antonio Páez", "Arturo Uslar Pietri", "Rómulo Gallegos", "Simón Rodríguez"],
        respuesta: 0,
        colorFondo: "#d4a5c9"
    },
    {
        pregunta: "¿Cuál es el pico más alto de Venezuela?",
        opciones: ["Pico Bolívar", "Pico Naiguatá", "Pico El Águila", "Pico Espejo"],
        respuesta: 0,
        colorFondo: "#c9d4a5"
    },
    {
        pregunta: "¿Cuál de estos estados venezolanos no tiene salida al mar?",
        opciones: ["Falcón", "Zulia", "Lara", "Anzoátegui"],
        respuesta: 2,
        colorFondo: "#a5c9d4"
    },
    {
        pregunta: "¿Qué poeta venezolano es autor de 'Tierra de Gracia'?",
        opciones: ["Andrés Eloy Blanco", "Rómulo Gallegos", "Andrés Bello", "Antonio Uslar Pietri"],
        respuesta: 0,
        colorFondo: "#d4a5a5"
    },
    {
        pregunta: "¿Cuál es el lago más grande de Venezuela?",
        opciones: ["Lago de Maracaibo", "Lago de Valencia", "Laguna de Tacarigua", "Laguna de la Restinga"],
        respuesta: 0,
        colorFondo: "#a5d4a5"
    },
    {
        pregunta: "¿Qué dictador venezolano fue derrocado en 1958?",
        opciones: ["Juan Vicente Gómez", "Marcos Pérez Jiménez", "Isaías Medina Angarita", "Eleazar López Contreras"],
        respuesta: 1,
        colorFondo: "#a5a5d4"
    },
    {
        pregunta: "¿Cómo se llama el parque nacional que contiene el Salto Ángel?",
        opciones: ["Canaima", "Archipiélago Los Roques", "Henri Pittier", "Sierra Nevada"],
        respuesta: 0,
        colorFondo: "#d4a5c9"
    },
    // Nuevas preguntas para el modo Speedrun
    {
        pregunta: "¿Cuál es la capital del estado Guárico?",
        opciones: ["Calabozo", "San Juan de los Morros", "Valle de la Pascua", "Altagracia de Orituco"],
        respuesta: 1,
        colorFondo: "#a5a5a5"
    },
    {
        pregunta: "¿En qué estado se encuentra el Tepuy Roraima?",
        opciones: ["Bolívar", "Amazonas", "Delta Amacuro", "Anzoátegui"],
        respuesta: 0,
        colorFondo: "#ffc8d4"
    },
    {
        pregunta: "¿Cuál es la flor nacional de Venezuela?",
        opciones: ["Cayena", "Orquídea", "Flor de Mayo", "Rosa"],
        respuesta: 1,
        colorFondo: "#f5f5dc"
    },
    {
        pregunta: "¿En qué año se firmó el Tratado de Coche?",
        opciones: ["1863", "1859", "1870", "1846"],
        respuesta: 0,
        colorFondo: "#d3d3d3"
    },
    {
        pregunta: "¿Quién fue el primer Nobel de la Paz venezolano?",
        opciones: ["Simón Bolívar", "Rómulo Gallegos", "Arturo Uslar Pietri", "Ninguno"],
        respuesta: 3,
        colorFondo: "#add8e6"
    },
    {
        pregunta: "¿Cuál de estos instrumentos musicales no es de origen venezolano?",
        opciones: ["Cuatro", "Arpa llanera", "Bandola", "Charango"],
        respuesta: 3,
        colorFondo: "#e6e6fa"
    },
    {
        pregunta: "¿En qué estado se celebra la fiesta de San Juan Bautista?",
        opciones: ["Miranda", "Carabobo", "Aragua", "Todos los anteriores"],
        respuesta: 3,
        colorFondo: "#f08080"
    },
    {
        pregunta: "¿Cuál es el nombre original del Salto Ángel?",
        opciones: ["Kerepakupai Vená", "Churun Merú", "Tupana", "Kukenán"],
        respuesta: 0,
        colorFondo: "#f0e68c"
    },
    {
        pregunta: "¿Qué líder indígena resistió la conquista española en el estado Carabobo?",
        opciones: ["Cacique Guaicaipuro", "Cacique Yare", "Cacique Paramaconi", "Cacique Carabobo"],
        respuesta: 2,
        colorFondo: "#b0e0e6"
    },
    {
        pregunta: "¿Cuál es el puerto más importante de Venezuela?",
        opciones: ["Puerto La Cruz", "Puerto Cabello", "La Guaira", "Maracaibo"],
        respuesta: 1,
        colorFondo: "#98fb98"
    },
    {
        pregunta: "¿En qué año se inauguró el teleférico de Mérida?",
    opciones: ["1958", "1960", "1955", "1953"],
        respuesta: 2,
        colorFondo: "#bdb76b"
    },
    {
        pregunta: "¿Cuál es la moneda venezolana actual?",
        opciones: ["Bolívar Fuerte", "Bolívar Soberano", "Bolívar Digital", "Petro"],
        respuesta: 2,
        colorFondo: "#f4a460"
    },
    {
        pregunta: "¿Cómo se llama el parque nacional donde se encuentra la Cueva del Guácharo?",
        opciones: ["Parque Nacional El Ávila", "Parque Nacional Guatopo", "Parque Nacional Cueva del Guácharo", "Parque Nacional Morrocoy"],
        respuesta: 2,
        colorFondo: "#2e8b57"
    },
    {
        pregunta: "¿Qué plato típico se prepara con maíz pilado y chicharrón?",
        opciones: ["Hallaca", "Arepa", "Hervido de gallina", "Asado negro"],
        respuesta: 1,
        colorFondo: "#d2b48c"
    },
    {
        pregunta: "¿En qué estado se encuentra la isla de La Tortuga?",
        opciones: ["Dependencia Federal", "Sucre", "Nueva Esparta", "Miranda"],
        respuesta: 0,
        colorFondo: "#87cefa"
    },
    {
        pregunta: "¿Quién es el autor de la letra del Himno Nacional de Venezuela?",
        opciones: ["Vicente Salias", "Juan José Landaeta", "Simón Bolívar", "Andrés Bello"],
        respuesta: 0,
        colorFondo: "#fff8dc"
    },
    {
        pregunta: "¿Cuál es el baile típico del estado Táchira?",
        opciones: ["Joropo", "Pato", "Bambuco", "Sebucán"],
        respuesta: 2,
        colorFondo: "#ffe4b5"
    },
    {
        pregunta: "¿Qué significa el nombre 'Venezuela'?",
        opciones: ["Tierra de gracia", "Pequeña Venecia", "Gran llanura", "Tierra de arepas"],
        respuesta: 1,
        colorFondo: "#b0e0e6"
    },
    {
        pregunta: "¿Qué ciudad venezolana es conocida como la 'Ciudad de los techos rojos'?",
        opciones: ["Coro", "Mérida", "Caracas", "Maracaibo"],
        respuesta: 2,
        colorFondo: "#f08080"
    },
    {
        pregunta: "¿Qué animal es el emblema del estado Apure?",
        opciones: ["Chigüire", "Caimán del Orinoco", "Vaca", "Pez pavón"],
        respuesta: 0,
        colorFondo: "#d2b48c"
    }
];

let preguntasActuales = [];
let modoJuegoActual = '';

// --- Variables de Estado del Juego ---
let indicePreguntaActual = 0;
let vidas = 3;
let timer;
let tiempoRestante = 30;
let preguntasRespondidasCorrectamente = 0;
let isPaused = false;
const highScoreKeyCasual = 'highScore_casual';
const highScoreKeySpeedrun = 'highScore_speedrun';

// Función para mezclar el array de preguntas
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// --- Funciones para cambiar de pantalla ---
function mostrarPantalla(pantalla) {
    pantallaMenu.style.display = 'none';
    pantallaCreditos.style.display = 'none';
    pantallaReglasCasual.style.display = 'none';
    pantallaReglasSpeedrun.style.display = 'none';
    pantallaJuego.style.display = 'none';
    pantallaFinJuego.style.display = 'none';
    pantallaModos.style.display = 'none';
    pantalla.style.display = 'flex';
}

// --- Lógica del Juego ---
function iniciarJuego() {
    clearTimeout(timer);
    indicePreguntaActual = 0;
    preguntasRespondidasCorrectamente = 0;
    isPaused = false;

    if (modoJuegoActual === 'casual') {
        preguntasActuales = [...preguntasCasual];
        vidas = 3;
        vidasCasualElement.style.display = 'flex';
        actualizarVidas();
        tiempoRestante = 30;
    } else if (modoJuegoActual === 'speedrun') {
        preguntasActuales = [...preguntasSpeedrun];
        vidasCasualElement.style.display = 'none';
        tiempoRestante = 10;
    }
    shuffleArray(preguntasActuales);
    cargarPregunta();
    mostrarPantalla(pantallaJuego);
}

function cargarPregunta() {
    if (indicePreguntaActual < preguntasActuales.length) {
        const pregunta = preguntasActuales[indicePreguntaActual];
        preguntaTexto.textContent = pregunta.pregunta;
        document.body.style.backgroundColor = pregunta.colorFondo;

        contadorPreguntasElement.textContent = `Pregunta ${indicePreguntaActual + 1}`;

        opcionesBotones.forEach(btn => {
            btn.disabled = false;
            btn.style.cursor = 'pointer';
            btn.classList.remove('correcta', 'incorrecta');
        });

        const opcionesMezcladas = [...pregunta.opciones];
        opcionesMezcladas.sort(() => Math.random() - 0.5);

        opcionesBotones.forEach((btn, index) => {
            btn.textContent = opcionesMezcladas[index];
        });

        iniciarTemporizador();
    } else {
        finalizarJuego(true);
    }
}

function manejarRespuesta(textoOpcion) {
    if (isPaused) return;

    const pregunta = preguntasActuales[indicePreguntaActual];
    const respuestaCorrectaTexto = pregunta.opciones[pregunta.respuesta];
    const botonSeleccionado = Array.from(opcionesBotones).find(btn => btn.textContent === textoOpcion);

    if (textoOpcion === respuestaCorrectaTexto) {
        clearTimeout(timer);
        botonSeleccionado.classList.add('correcta');
        opcionesBotones.forEach(btn => {
            btn.disabled = true;
            btn.style.cursor = 'default';
        });

        preguntasRespondidasCorrectamente++;

        if (modoJuegoActual === 'speedrun') {
            tiempoRestante += 10;
        }

        setTimeout(() => {
            indicePreguntaActual++;
            if (modoJuegoActual === 'casual' && vidas <= 0) {
                 finalizarJuego(false);
            } else {
                cargarPregunta();
            }
        }, 1500);

    } else {
        botonSeleccionado.classList.add('incorrecta');
        botonSeleccionado.disabled = true;

        if (modoJuegoActual === 'casual') {
            vidas--;
            actualizarVidas();
        } else if (modoJuegoActual === 'speedrun') {
            tiempoRestante -= 5;
        }

        if (modoJuegoActual === 'casual' && vidas <= 0) {
            clearTimeout(timer);
            finalizarJuego(false);
        }
    }
}

function actualizarVidas() {
    arepasVida.forEach((arepa, index) => {
        if (index < vidas) {
            arepa.classList.remove('perdida');
        } else {
            arepa.classList.add('perdida');
        }
    });
}

function iniciarTemporizador() {
    timerElement.textContent = tiempoRestante;
    clearTimeout(timer);
    timer = setInterval(() => {
        if (!isPaused) {
            tiempoRestante--;
            timerElement.textContent = tiempoRestante;
            if (tiempoRestante <= 0) {
                clearTimeout(timer);
                if (modoJuegoActual === 'casual') {
                    vidas--;
                    actualizarVidas();
                    if (vidas <= 0) {
                        finalizarJuego(false);
                    } else {
                        indicePreguntaActual++;
                        cargarPregunta();
                    }
                } else if (modoJuegoActual === 'speedrun') {
                    finalizarJuego(false);
                }
            }
        }
    }, 1000);
}

function finalizarJuego(gano) {
    clearTimeout(timer);
    mostrarPantalla(pantallaFinJuego);
    const highScoreKey = modoJuegoActual === 'casual' ? highScoreKeyCasual : highScoreKeySpeedrun;
    let oldHighScore = parseInt(localStorage.getItem(highScoreKey)) || 0;

    if (gano) {
        mensajeFinal.textContent = "¡Felicidades, eres un venezolano de corazón!";
        puntuacionFinal.textContent = `Preguntas correctas: ${preguntasRespondidasCorrectamente} de ${preguntasActuales.length}`;
        recordAnterior.textContent = '';
        localStorage.setItem(highScoreKey, preguntasActuales.length);
    } else {
        let mensajeRecord = "";
        let nuevoRecord = false;
        if (preguntasRespondidasCorrectamente > oldHighScore) {
            localStorage.setItem(highScoreKey, preguntasRespondidasCorrectamente);
            oldHighScore = preguntasRespondidasCorrectamente;
            nuevoRecord = true;
        }
        
        if (nuevoRecord) {
            mensajeRecord = `¡Superaste tu récord anterior de ${oldHighScore} preguntas! Sigue así y te llevarás una arepa de regalo.`;
        } else {
            mensajeRecord = `Tu récord actual es de ${oldHighScore} preguntas. ¡Inténtalo de nuevo, tú puedes!`;
        }

        mensajeFinal.textContent = "¡Lo siento, perdiste!";
        puntuacionFinal.textContent = `Preguntas correctas: ${preguntasRespondidasCorrectamente}`;
        recordAnterior.textContent = mensajeRecord;
    }
}

// --- Event Listeners de Botones ---
btnJugar.addEventListener('click', () => mostrarPantalla(pantallaModos));

btnModoCasual.addEventListener('click', () => {
    modoJuegoActual = 'casual';
    mostrarPantalla(pantallaReglasCasual);
});

btnModoSpeedrun.addEventListener('click', () => {
    modoJuegoActual = 'speedrun';
    mostrarPantalla(pantallaReglasSpeedrun);
});

btnComenzarCasual.addEventListener('click', iniciarJuego);
btnComenzarSpeedrun.addEventListener('click', iniciarJuego);

btnCreditos.addEventListener('click', () => mostrarPantalla(pantallaCreditos));
btnVolverMenu.addEventListener('click', () => {
    clearTimeout(timer);
    mostrarPantalla(pantallaMenu);
});
btnVolverMenuModos.addEventListener('click', () => {
    clearTimeout(timer);
    mostrarPantalla(pantallaMenu);
});

btnReiniciar.addEventListener('click', iniciarJuego);
btnVolverMenuFinal.addEventListener('click', () => {
    clearTimeout(timer);
    mostrarPantalla(pantallaMenu);
});

btnPausa.addEventListener('click', () => {
    isPaused = true;
    mostrarPantalla(pantallaMenu);
});

opcionesBotones.forEach(btn => {
    btn.addEventListener('click', (e) => {
        manejarRespuesta(e.target.textContent);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    mostrarPantalla(pantallaMenu);
    versionJuegoElement.textContent = `v${VERSION_JUEGO}`;
});
