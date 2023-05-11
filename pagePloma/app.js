// Obtener los elementos relevantes del DOM
const template = document.getElementById("template-producto");
const listaProductos = document.getElementById("lista-productos");
const tabla = document.getElementById("tabla-carrito");

// Crear una lista para almacenar los productos en el carrito
const carrito = [];

// Agregar un evento al botón de Comprar de cada producto
listaProductos.addEventListener("click", (event) => {
  // Verificar si el botón de Comprar fue presionado
  if (event.target.dataset.id) {
    // Obtener el producto seleccionado
    const producto = {
      id: event.target.dataset.id,
      nombre: event.target.parentNode.querySelector(".card-title").textContent,
      precio: event.target.parentNode.querySelector(".card-text span").textContent,
      cantidad: 1,
    };

    // Verificar si el producto ya está en el carrito
    const productoEnCarrito = carrito.find((p) => p.id === producto.id);
    if (productoEnCarrito) {
      // Si el producto ya está en el carrito, incrementar su cantidad
      productoEnCarrito.cantidad++;
    } else {
      // Si el producto no está en el carrito, agregarlo a la lista
      carrito.push(producto);
    }

    // Actualizar la tabla de compras
    actualizarTablaCarrito();
  }
});

// Actualizar la tabla de compras
function actualizarTablaCarrito() {
  // Limpiar la tabla
  tabla.innerHTML = "";

  // Recorrer la lista de productos en el carrito
  carrito.forEach((producto, index) => {
    // Crear una fila en la tabla para el producto
    const fila = document.createElement("tr");

    // Crear una celda para el número de producto
    const numeroCelda = document.createElement("td");
    numeroCelda.textContent = index + 1;
    fila.appendChild(numeroCelda);

    // Crear una celda para el nombre del producto
    const nombreCelda = document.createElement("td");
    nombreCelda.textContent = producto.nombre;
    fila.appendChild(nombreCelda);

    // Crear una celda para la cantidad del producto
    const cantidadCelda = document.createElement("td");
    cantidadCelda.textContent = producto.cantidad;
    fila.appendChild(cantidadCelda);

    // Crear una celda para el precio del producto
    const precioCelda = document.createElement("td");
    precioCelda.textContent = producto.precio;
    fila.appendChild(precioCelda);

    // Agregar la fila a la tabla
    tabla.appendChild(fila);
  });
}
