const filters = ['ramen', 'ryu', 'entradas', 'postres', 'bebidas'];

const products = [
    {
        id: 0,
        name: 'Miso Ramen',
        description: 'A elegir pasta entre tallarines caseras, fideo de arroz, o udon. A elegir principal entre pollo rebozado o pollo teriyaki.',
        price: 9.50
    },
    {
        id: 1,
        name: 'Paitan',
        description: 'Paitan significa sopa blanca en japonés, cremoso y aterciopelado a base de verduras y pollo, cocido según la tradición.',
        price: 12
    },
    {
        id: 2,
        name: 'Ryu Arroz al Curry',
        description: 'Delicioso curry japones con arroz blanco, pollo, tiernas piezas de zanahorias, cebolla, y patatas cocinadas en un sabrosa salsa de curry.',
        price: 9.75
    },
    {
        id: 3,
        name: 'Tonkotsu',
        description: 'El caldo de soya se prepara hirviendo huesos de cerdo en agua durante un tiempo considerable, hasta 12 horas, haciendo la soya espesa y cremosa.',
        price: 11.95
    },
    {
        id: 4,
        name: 'Chintan',
        description: 'El caldo Chintan tiene una base de pollo y cerdo con un color claro. Su sabor es delicado y puedes saborear cada ingrediente en el que está hecho el Chintan.',
        price: 11.60
    },
    {
        id: 5,
        name: 'Ryu Chashu Bowl',
        description: 'Chashu es un plato hecho con cortes de carne de cerdo más grasos que se estofan a fuego lento durante mucho tiempo.',
        price: 8.50
    },
    {
        id: 6,
        name: 'Ramen Vegetariano',
        description: 'Caldo a base de miso fermentado, ligeramente picante acompanado de bambu, huevo, cebolleta, brotes de soja y cebolla frita.',
        price: 11.60
    }
];

// console.log(filters);
// products.map(product=> {console.log(product.name)});
// console.log(products[0]);

function createFilterButtons() { 
    const filtersContainer = document.querySelector('.filters-container');
    // console.log(filtersContainer)
    filters.forEach(filter => {
      const button = document.createElement('button');
      button.classList.add('filter');
      button.textContent = filter;
      filtersContainer.appendChild(button);
    });
  }

  createFilterButtons();


function createProductCards() {
    
    const productsContainer = document.querySelector('.products-container');
  
    products.forEach(product => {
      const productContainer = document.createElement('div');
      productContainer.classList.add('product-container');
    
      const name = document.createElement('h3');
      name.textContent = product.name;
      productContainer.appendChild(name);
  
      const description = document.createElement('p');
      description.textContent = product.description;
      productContainer.appendChild(description);
  
      const price = document.createElement('h5');
      price.textContent = `${product.price} €`;
      productContainer.appendChild(price);
  
      productsContainer.appendChild(productContainer);
    });
  }
  createProductCards();
  