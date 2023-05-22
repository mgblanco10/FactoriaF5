const nombreSacrificado = document.getElementById('nombreSacrificado');
const sacrificarBtn = document.getElementById('sacrificarBtn');
const reiniciarBtn = document.getElementById('reiniciarBtn');
const listaNombres = document.getElementById('listaNombres');
const inputNombre = document.getElementById('inputNombre');
const agregarBtn = document.getElementById('agregarBtn');

let nombres = [];

function seleccionarNombre() {
  if (nombres.length === 0) {
    nombreSacrificado.textContent = '¡Todos los coders han sido sacrificados!';
    listaNombres.innerHTML = '';
    reiniciarBtn.style.display = 'block';
    return;
  }

  const indice = Math.floor(Math.random() * nombres.length);
  const nombreSeleccionado = nombres[indice];
  nombres.splice(indice, 1);

  nombreSacrificado.textContent = `¡${nombreSeleccionado} ha sido sacrificado!`;
  listaNombres.innerHTML = '';

  for (let i = 0; i < nombres.length; i++) {
    const li = document.createElement('li');
    li.textContent = nombres[i];
    listaNombres.appendChild(li);
  }
}

function reiniciar() {
  nombres = [];
  nombreSacrificado.textContent = '';
  reiniciarBtn.style.display = 'none';
  inputNombre.value = '';
  inputNombre.disabled = false;
  listaNombres.innerHTML = '';
}

function agregarNombre() {
  const nuevoNombre = inputNombre.value.trim();

  if (nuevoNombre !== '') {
    nombres.push(nuevoNombre);
    const li = document.createElement('li');
    li.textContent = nuevoNombre;
    listaNombres.appendChild(li);

    inputNombre.value = '';
  }
}

sacrificarBtn.addEventListener('click', seleccionarNombre);
reiniciarBtn.addEventListener('click', reiniciar);
agregarBtn.addEventListener('click', agregarNombre);
