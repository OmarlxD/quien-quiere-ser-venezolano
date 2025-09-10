// --- Elementos del DOM ---
const pantallaMenu = document.getElementById('pantalla-menu');
const pantallaCreditos = document.getElementById('pantalla-creditos');
const pantallaReglas = document.getElementById('pantalla-reglas');
const pantallaJuego = document.getElementById('pantalla-juego');
const pantallaFinJuego = document.getElementById('pantalla-fin-juego');

const btnJugar = document.getElementById('btn-jugar');
const btnCreditos = document.getElementById('btn-creditos');
const btnVolverMenu = document.getElementById('btn-volver-menu');
const btnReiniciar = document.getElementById('btn-reiniciar');
const btnPausa = document.getElementById('btn-pausa');
const btnComenzar = document.getElementById('btn-comenzar');

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

const mensajeFinal = document.getElementById('mensaje-final');
const puntuacionFinal = document.getElementById('puntuacion-final');

const VERSION_JUEGO = "0.5";

// --- Base de Datos de Preguntas (¡Con 20 preguntas aleatorias!) ---
const preguntasOriginales = [
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
        pregunta: "¿Qué significa 'Echar un carrito'?",
        opciones: ["Comer mucho", "Hacer una carrera", "Hacer un favor", "Mentir o echar una broma"],
        respuesta: 3,
        colorFondo: "#c4a8e2"
    },
    {
        pregunta: "Si un venezolano te dice 'No me cala', ¿qué quiere decir?",
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
    }
];

let preguntasYColores = [];

// --- Variables de Estado del Juego ---
let indicePreguntaActual = 0;
let vidas = 3;
let timer;
let tiempoRestante = 30;
let preguntasRespondidasCorrectamente = 0;
let isPaused = false;

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
    pantallaReglas.style.display = 'none';
    pantallaJuego.style.display = 'none';
    pantallaFinJuego.style.display = 'none';
    pantalla.style.display = 'flex';
}

// --- Lógica del Juego ---
function iniciarJuego() {
    preguntasYColores = [...preguntasOriginales];
    shuffleArray(preguntasYColores);

    indicePreguntaActual = 0;
    vidas = 3;
    preguntasRespondidasCorrectamente = 0;
    isPaused = false;
    actualizarVidas();
    cargarPregunta();
    mostrarPantalla(pantallaJuego);
}

function cargarPregunta() {
    if (indicePreguntaActual < preguntasYColores.length) {
        const pregunta = preguntasYColores[indicePreguntaActual];
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

    const pregunta = preguntasYColores[indicePreguntaActual];
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
        
        setTimeout(() => {
            indicePreguntaActual++;
            if (vidas <= 0) {
                 finalizarJuego(false);
            } else {
                cargarPregunta();
            }
        }, 1500);

    } else {
        botonSeleccionado.classList.add('incorrecta');
        botonSeleccionado.disabled = true;
        
        vidas--;
        actualizarVidas();

        if (vidas <= 0) {
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
    tiempoRestante = 30;
    timerElement.textContent = tiempoRestante;
    clearTimeout(timer);
    timer = setInterval(() => {
        if (!isPaused) {
            tiempoRestante--;
            timerElement.textContent = tiempoRestante;
            if (tiempoRestante <= 0) {
                clearTimeout(timer);
                vidas--;
                actualizarVidas();
                
                if (vidas <= 0) {
                    finalizarJuego(false);
                } else {
                    indicePreguntaActual++;
                    cargarPregunta();
                }
            }
        }
    }, 1000);
}

function finalizarJuego(gano) {
    clearTimeout(timer);
    mostrarPantalla(pantallaFinJuego);
    if (gano) {
        mensajeFinal.textContent = "¡Felicidades, eres un venezolano de corazón!";
    } else {
        mensajeFinal.textContent = "¡Lo siento, perdiste!";
    }
    puntuacionFinal.textContent = `Preguntas correctas: ${preguntasRespondidasCorrectamente} de ${preguntasYColores.length}`;
}

// --- Event Listeners de Botones ---
btnJugar.addEventListener('click', () => mostrarPantalla(pantallaReglas));
btnComenzar.addEventListener('click', iniciarJuego);

btnCreditos.addEventListener('click', () => mostrarPantalla(pantallaCreditos));
btnVolverMenu.addEventListener('click', () => {
    clearTimeout(timer);
    mostrarPantalla(pantallaMenu);
});
btnReiniciar.addEventListener('click', iniciarJuego);

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