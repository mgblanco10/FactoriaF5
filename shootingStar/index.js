const listaNombres = document.getElementById('listaNombres');
const inputNombre = document.getElementById('inputNombre');
const agregarBtn = document.getElementById('agregarBtn');

let nombres = [];

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

  agregarBtn.addEventListener('click', agregarNombre);
  