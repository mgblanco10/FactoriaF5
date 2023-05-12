document.addEventListener("DOMContentLoaded", (e) => {
  obtenerProductos();
});

// listar productos
const listaProductos = document.querySelector("#lista-productos");
const footerCarrito = document.querySelector("#footer-carrito");
const itemsCarrito = document.querySelector("#items");
let carrito = [];

const obtenerProductos = async () => {
  try {
    const res = await fetch("js/productos.json");
    const data = await res.json();
    pintarTemplate(data);
    eventoBotones(data);
  } catch (error) {
    console.log(error);
  }
};

const pintarTemplate = (data) => {
  const template = document.querySelector("#template-producto").content;
  const fragment = new DocumentFragment();
  data.forEach((producto) => {
    template.querySelector("img").setAttribute("src", producto.thumbnailUrl);
    template.querySelector("h5").textContent = producto.title;
    template.querySelector(".card-text span").textContent = producto.precio;
    // https://developer.mozilla.org/es/docs/Web/API/HTMLElement/dataset
    template.querySelector("button").setAttribute("data-id", producto.id);
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
  });
  listaProductos.appendChild(fragment);
};

const eventoBotones = (data) => {
  const btnAgregar = document.querySelectorAll(".btn-dark");
  btnAgregar.forEach((btn) => {
    btn.addEventListener("click", () => {
        // console.log(btn.dataset.id)
        // Buscamos el producto en nuestra data
        // console.log(parseInt(btn.dataset.id))
        const [producto] = data.filter(
            (item) => item.id === parseInt(btn.dataset.id)
        );
        // console.log(producto)
        
        // creamos un producto para el carrito
        const productoCarrito = {
            id: producto.id,
            title: producto.title,
            cantidad: 1,
            precioTotal: producto.precio
        }

        const exiteEnCarrito = carrito.some(item => item.id === productoCarrito.id)
        // console.log(exiteEnCarrito)
        if (exiteEnCarrito) {
            const productos = carrito.map(item => {
                if (item.id === productoCarrito.id) {
                    item.cantidad++
                    item.precioTotal = item.precioTotal + productoCarrito.precioTotal
                    return item;
                } else {
                    return item
                }
            })
            carrito = [...productos]
        } else {
            carrito.push(productoCarrito);
        }
    
        pintarEnCarrito();
    });
  });
};

const totalFooter = () => {
    if (carrito.length === 0) {
        footerCarrito.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`
        return
    }

    const nProductos = carrito.reduce((a, b) => ({ cantidad: a.cantidad + b.cantidad }))
    // console.log(nProductos.cantidad)

    const nPrecio = carrito.reduce((a, b) => ({ precioTotal: a.precioTotal + b.precioTotal }))
    // console.log(nPrecio.precioTotal)

    // Limpiamos el elemento ya que necesitamos reemplazar su contenido
    footerCarrito.innerHTML = ''
    const template = document.querySelector("#template-footer").content;
    const fragment = document.createDocumentFragment();

    template.querySelectorAll('td')[0].textContent = nProductos.cantidad
    template.querySelector('.font-weight-bold span').textContent = nPrecio.precioTotal

    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
    footerCarrito.appendChild(fragment)


    const vaciarCarrito = document.querySelector('#vaciar-carrito')
    vaciarCarrito.addEventListener('click', () => {
        carrito = []
        pintarEnCarrito()
    })
}


const pintarEnCarrito = () => {

    // Limpiamos el elemento ya que necesitamos reemplazar su contenido
    itemsCarrito.innerHTML = ''

    const template = document.querySelector("#template-carrito").content;
    const fragment = document.createDocumentFragment();

    // console.log(carrito)
    carrito.forEach(item => {
        template.querySelector("th").textContent = item.id;
        template.querySelectorAll("td")[0].textContent = item.title;
        template.querySelectorAll("td")[1].textContent = item.cantidad;
        template.querySelector('.btn-danger').setAttribute('data-id', item.id)
        template.querySelector('.btn-info').setAttribute('data-id', item.id)
        template.querySelectorAll("td")[3].textContent = item.precioTotal;
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    })
    
    itemsCarrito.appendChild(fragment);  
    borrarItemCarrito()
    totalFooter();
};

const borrarItemCarrito = () => {
    // console.log('ejecutado')
    const btnAgregar = document.querySelectorAll('#items .btn-info')
    const btnEliminar = document.querySelectorAll('#items .btn-danger')

    btnAgregar.forEach(btn => {
        btn.addEventListener('click', () => {
            // console.log(parseInt(btn.dataset.id))
            const arrayFiltrado = carrito.map(item => {
                if (item.id === parseInt(btn.dataset.id)) {
                    item.precioTotal = item.precioTotal + item.precioTotal/item.cantidad
                    item.cantidad++
                    // console.log(item.cantidad)
                    return item;
                } else {
                    return item
                }
            })

            carrito = [...arrayFiltrado]
            pintarEnCarrito()
            totalFooter()
        })
    })

    btnEliminar.forEach(btn => {
        btn.addEventListener('click', () => {
            const arrayFiltrado = carrito.filter(item => {
                if (item.id === parseInt(btn.dataset.id)) {
                    item.precioTotal = item.precioTotal - item.precioTotal/item.cantidad
                    item.cantidad--
                    // console.log(item.cantidad)
                    if (item.cantidad === 0) {
                        return
                    }
                    return item;
                } else {
                    return item
                }
            })

            carrito = [...arrayFiltrado]
            pintarEnCarrito()
            totalFooter()
        })
    })

}


// // Obtener los elementos relevantes del DOM
// const template = document.getElementById("template-producto");
// const listaProductos = document.getElementById("lista-productos");
// const tabla = document.getElementById("tabla-carrito");

// // Crear una lista para almacenar los productos en el carrito
// const carrito = [];

// // Agregar un evento al botón de Comprar de cada producto
// listaProductos.addEventListener("click", (event) => {
//   // Verificar si el botón de Comprar fue presionado
//   if (event.target.dataset.id) {
//     // Obtener el producto seleccionado
//     const producto = {
//       id: event.target.dataset.id,
//       nombre: event.target.parentNode.querySelector(".card-title").textContent,
//       precio: event.target.parentNode.querySelector(".card-text span").textContent,
//       cantidad: 1,
//     };

//     // Verificar si el producto ya está en el carrito
//     const productoEnCarrito = carrito.find((p) => p.id === producto.id);
//     if (productoEnCarrito) {
//       // Si el producto ya está en el carrito, incrementar su cantidad
//       productoEnCarrito.cantidad++;
//     } else {
//       // Si el producto no está en el carrito, agregarlo a la lista
//       carrito.push(producto);
//     }

//     // Actualizar la tabla de compras
//     actualizarTablaCarrito();
//   }
// });

// // Actualizar la tabla de compras
// function actualizarTablaCarrito() {
//   // Limpiar la tabla
//   tabla.innerHTML = "";

//   // Recorrer la lista de productos en el carrito
//   carrito.forEach((producto, index) => {
//     // Crear una fila en la tabla para el producto
//     const fila = document.createElement("tr");

//     // Crear una celda para el número de producto
//     const numeroCelda = document.createElement("td");
//     numeroCelda.textContent = index + 1;
//     fila.appendChild(numeroCelda);

//     // Crear una celda para el nombre del producto
//     const nombreCelda = document.createElement("td");
//     nombreCelda.textContent = producto.nombre;
//     fila.appendChild(nombreCelda);

//     // Crear una celda para la cantidad del producto
//     const cantidadCelda = document.createElement("td");
//     cantidadCelda.textContent = producto.cantidad;
//     fila.appendChild(cantidadCelda);

//     // Crear una celda para el precio del producto
//     const precioCelda = document.createElement("td");
//     precioCelda.textContent = producto.precio;
//     fila.appendChild(precioCelda);

//     // Agregar la fila a la tabla
//     tabla.appendChild(fila);
//   });
// }
