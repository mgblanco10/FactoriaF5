// TextContent
const paragraph1 = document.getElementById("para1");
const paragraph2 = document.getElementById("para2");
// console.log(paragraph1);
// console.log(paragraph1.textContent);

// querySelector
const titleMovies = document.querySelector("h1");
// console.log(titleMovies);
const list = document.querySelector(".list");
// console.log(list);

//querySelectorAll
const listItems =  document.querySelectorAll("ul>li");
// console.log(listItems);

// mostrar cada elemento de la lista
const itemList = document.querySelectorAll("ul > li");
// itemList.forEach((item)=> {console.log(item)});

//create
let newListJs = document.createElement("ul");
document.body.appendChild(newListJs);

let elementOneListJs = document.createElement("li");
elementOneListJs.textContent = "It's Empowering from JS";
newListJs.appendChild(elementOneListJs);

let elementTwoListJs = document.createElement("li");
elementTwoListJs.textContent = "It's Awesome from JS";
newListJs.appendChild(elementTwoListJs);

// DELETE
let elementToRemove = document.getElementById("myDiv");
elementToRemove.remove();

//estilo desde js
const styleFromJs = document.querySelector("h2");
styleFromJs.style.color = "blue";

//event innerHTML

