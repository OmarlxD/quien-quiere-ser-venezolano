// --- Elementos del DOM ---
const pantallaMenu = document.getElementById('pantalla-menu');
const pantallaCreditos = document.getElementById('pantalla-creditos');
const pantallaJuego = document.getElementById('pantalla-juego');
const pantallaFinJuego = document.getElementById('pantalla-fin-juego');

const btnJugar = document.getElementById('btn-jugar');
const btnCreditos = document.getElementById('btn-creditos');
const btnVolverMenu = document.getElementById('btn-volver-menu');
const btnReiniciar = document.getElementById('btn-reiniciar');

const preguntaTexto = document.getElementById('pregunta-texto');
const opcionesBotones = document.querySelectorAll('.opcion');
const timerElement = document.getElementById('timer');
const arepasVida = [
    document.getElementById('arepa1'),
    document.getElementById('arepa2'),
    document.getElementById('arepa3')
];

const mensajeFinal = document.getElementById('mensaje-final');
const puntuacionFinal = document.getElementById('puntuacion-final');

// --- Base de Datos de Preguntas y Fondos ---
const preguntasYColores = [
    {
        pregunta: "¿Qué significa la expresión 'dar la cola'?",
        opciones: ["Ofrecer un aventón", "Hacer una fila", "Compartir comida", "Pedir un favor"],
        respuesta: 0,
        colorFondo: "#e0b0ff" // Lavanda pastel
    },
    {
        pregunta: "¿Qué es una cachapa?",
        opciones: ["Un plato de maíz dulce", "Un tipo de pan", "Una bebida fría", "Un pastel de carne"],
        respuesta: 0,
        colorFondo: "#f5cba7" // Durazno pastel
    },
    {
        pregunta: "¿Qué animal es el Símbolo Nacional de Venezuela?",
        opciones: ["Águila arpía", "Cardenalito", "Turpial", "Jaguar"],
        respuesta: 2,
        colorFondo: "#a8e4a0" // Menta pastel
    },
    {
        pregunta: "¿Qué ciudad es conocida como 'La Ciudad de los Vientos'?",
        opciones: ["Maracaibo", "Mérida", "Coro", "Caracas"],
        respuesta: 2,
        colorFondo: "#9bc4e2" // Azul cielo pastel
    },
    {
        pregunta: "La frase '¡Chévere!' significa...",
        opciones: ["¡Qué bien!", "¡Qué mal!", "¡No lo sé!", "¡Hola!"],
        respuesta: 0,
        colorFondo: "#ffd1a8" // Naranja suave pastel
    },
    {
        pregunta: "¿Qué se celebra en Venezuela el 24 de diciembre?",
        opciones: ["Semana Santa", "Carnaval", "Día de la Chinita", "Nochebuena"],
        respuesta: 3,
        colorFondo: "#f7d794" // Oro pastel
    }
];

// --- Variables de Estado del Juego ---
let indicePreguntaActual = 0;
let vidas = 3;
let timer;
let tiempoRestante = 30;
let preguntasRespondidasCorrectamente = 0;

// --- Funciones para cambiar de pantalla ---
function mostrarPantalla(pantalla) {
    pantallaMenu.style.display = 'none';
    pantallaCreditos.style.display = 'none';
    pantallaJuego.style.display = 'none';
    pantallaFinJuego.style.display = 'none';
    pantalla.style.display = 'flex';
}

// --- Lógica del Juego ---
function iniciarJuego() {
    indicePreguntaActual = 0;
    vidas = 3;
    preguntasRespondidasCorrectamente = 0;
    actualizarVidas();
    cargarPregunta();
    mostrarPantalla(pantallaJuego);
}

function cargarPregunta() {
    if (indicePreguntaActual < preguntasYColores.length) {
        const pregunta = preguntasYColores[indicePreguntaActual];
        preguntaTexto.textContent = pregunta.pregunta;
        document.body.style.backgroundColor = pregunta.colorFondo;
        
        // Desactivar botones y remover clases de colores
        opcionesBotones.forEach(btn => {
            btn.disabled = false;
            btn.style.cursor = 'pointer';
            btn.classList.remove('correcta', 'incorrecta');
        });

        // Mezclar las opciones
        const opcionesMezcladas = [...pregunta.opciones];
        opcionesMezcladas.sort(() => Math.random() - 0.5);

        opcionesBotones.forEach((btn, index) => {
            btn.textContent = opcionesMezcladas[index];
        });

        iniciarTemporizador();
    } else {
        finalizarJuego(true); // Gana si responde todas
    }
}

function manejarRespuesta(textoOpcion) {
    clearTimeout(timer); // Detener el temporizador
    const pregunta = preguntasYColores[indicePreguntaActual];
    const respuestaCorrectaTexto = pregunta.opciones[pregunta.respuesta];
    
    opcionesBotones.forEach(btn => {
        btn.disabled = true;
        btn.style.cursor = 'default';

        if (btn.textContent === respuestaCorrectaTexto) {
            btn.classList.add('correcta');
        } else {
            btn.classList.add('incorrecta');
        }
    });

    if (textoOpcion === respuestaCorrectaTexto) {
        // Respuesta correcta
        preguntasRespondidasCorrectamente++;
    } else {
        // Respuesta incorrecta
        vidas--;
        actualizarVidas();
    }

    setTimeout(() => {
        if (vidas <= 0) {
            finalizarJuego(false);
        } else {
            indicePreguntaActual++;
            cargarPregunta();
        }
    }, 1500);
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
    timer = setInterval(() => {
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
    }, 1000);
}

function finalizarJuego(gano) {
    mostrarPantalla(pantallaFinJuego);
    if (gano) {
        mensajeFinal.textContent = "¡Felicidades, eres un venezolano de corazón!";
    } else {
        mensajeFinal.textContent = "¡Lo siento, perdiste!";
    }
    puntuacionFinal.textContent = `Preguntas correctas: ${preguntasRespondidasCorrectamente} de ${preguntasYColores.length}`;
}

// --- Event Listeners de Botones ---
btnJugar.addEventListener('click', iniciarJuego);
btnCreditos.addEventListener('click', () => mostrarPantalla(pantallaCreditos));
btnVolverMenu.addEventListener('click', () => {
    clearTimeout(timer);
    mostrarPantalla(pantallaMenu);
});
btnReiniciar.addEventListener('click', iniciarJuego);

opcionesBotones.forEach(btn => {
    btn.addEventListener('click', (e) => {
        manejarRespuesta(e.target.textContent);
    });
});

// Iniciar el juego mostrando el menú principal al cargar
document.addEventListener('DOMContentLoaded', () => {
    mostrarPantalla(pantallaMenu);
});