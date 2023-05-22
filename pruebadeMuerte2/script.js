// Coders disponibles
let coders = [];

// Obtener elementos del DOM
const homeScreen = document.getElementById('home');
const sacrificesScreen = document.getElementById('sacrifices');
const coderList = document.getElementById('coderList');
const sacrificeButton = document.getElementById('sacrificeButton');
const sacrificedCoder = document.getElementById('sacrificedCoder');
const resetButton = document.getElementById('resetButton');
const gameOver = document.getElementById('gameOver');

// Función para mostrar coders en la lista
function displayCoders() {
  coderList.innerHTML = '';
  coders.forEach((coder) => {
    const li = document.createElement('li');
    li.textContent = coder;
    coderList.appendChild(li);
  });
}

// Función para seleccionar un coder aleatorio y mostrarlo en el aviso
function selectCoder() {
  if (coders.length > 0) {
    const randomIndex = Math.floor(Math.random() * coders.length);
    const selectedCoder = coders[randomIndex];
    coders.splice(randomIndex, 1);
    sacrificedCoder.textContent = `Coder sacrificado: ${selectedCoder}`;
    if (coders.length === 0) {
      gameOver.textContent = '¡Todos los coders han sido sacrificados!';
      resetButton.style.display = 'block';
    }
  } else {
    sacrificedCoder.textContent = 'No hay más coders disponibles';
  }
}

// Evento para iniciar el juego
document.getElementById('startButton').addEventListener('click', () => {
  homeScreen.style.display = 'none';
  sacrificesScreen.style.display = 'block';
  resetButton.style.display = 'none';
});

// Evento para agregar un coder a la lista
document.getElementById('addCoderButton')
