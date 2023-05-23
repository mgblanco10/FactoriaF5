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
    reiniciarBtn.style.display = 'block';
    return;
  }

  const indice = Math.floor(Math.random() * nombres.length);
  const nombreSeleccionado = nombres[indice];
  nombres.splice(indice, 1);

  localStorage.setItem('sacrificados', JSON.stringify(nombres));

  nombreSacrificado.textContent = `¡${nombreSeleccionado} ha sido sacrificado!`;
  renderizarNombres();
}


function reiniciar() {
  nombres = [];
  nombreSacrificado.textContent = '';
  reiniciarBtn.style.display = 'none';
  inputNombre.value = '';
  inputNombre.disabled = false;
  renderizarNombres();
}

function agregarNombre() {
  const nuevoNombre = inputNombre.value.trim();

  if (nuevoNombre !== '') {
    nombres.push(nuevoNombre);
    renderizarNombres();
    inputNombre.value = '';
  }
}


function borrarNombre(nombre) {
  const indice = nombres.indexOf(nombre);
  if (indice !== -1) {
    nombres.splice(indice, 1);
    renderizarNombres();
  }
}


function renderizarNombres() {
  listaNombres.innerHTML = '';

  for (let i = 0; i < nombres.length; i++) {
    const nombre = nombres[i]; 

    const li = document.createElement('li');
    li.textContent = nombre;

    const botonBorrar = document.createElement('button');
    botonBorrar.innerHTML = '<i class="fas fa-times"></i>';
    botonBorrar.addEventListener('click', () => {
      borrarNombre(nombre); 
    });

    li.appendChild(botonBorrar);
    listaNombres.appendChild(li);
  }
}



// sacrificarBtn.addEventListener('click', seleccionarNombre);
reiniciarBtn.addEventListener('click', reiniciar);
agregarBtn.addEventListener('click', agregarNombre);

window.addEventListener('DOMContentLoaded', () => {
  const sacrificadosList = document.getElementById('sacrificadosList');
  const sacrificados = JSON.parse(localStorage.getItem('sacrificados'));

  if (sacrificados) {
    for (let i = 0; i < sacrificados.length; i++) {
      const li = document.createElement('li');
      li.textContent = sacrificados[i];
      sacrificadosList.appendChild(li);
    }
  }
});

sacrificarBtn.addEventListener('click', () => {
  seleccionarNombre();
  window.location.href = 'sacrificados.html';
});
