console.log("Hola");

const cena = {
    primero: "sopa",
    segundo: "pasta",
    comer(){
        return `Hoy comeré ${this.primero} y ${this.segundo}`;
    }
}
console.log(cena.comer());

const cena2 = {
    primero: "ensalada",
    segundo: "arroz"
}

let cena2reutilizada = cena.comer.bind(cena2);
console.log(cena2reutilizada());

// arrow function
const duplicate = function(num){
    return num*2;
}

console.log(duplicate(2));

const duplicate2 = (num) => num * 2;
console.log(duplicate2(4));

const otroEjemplo = ()=> 2+2;
console.log(otroEjemplo());


//filter
const ciudades = [
    {ciudad:"barcelona", soleada: true},
    {ciudad:"londres", soleada: false},
    {ciudad:"sevilla", soleada: true}
]

const ciudadesSoleadas = ciudades.filter((element)=> element.soleada)
console.log(ciudadesSoleadas);

// destructuración
const coder = {
    nombre: "Monica",
    edad: 18,
    sexo: "mujer"
}

let { nombre: name, edad, sexo} = coder;
console.log(name);
console.log(edad);

const coders = [
    {nameCoder: "Joseita",
    age: 25,
    sex: "mujer"
    },
    {nameCoder: "Andrés",
    age: 29,
    sex: "hombre"
    }
]
const {nameCoder, age, sex} = coders[1]
console.log(nameCoder)

const myData = (...data) =>{
    return console.log(data)
}
myData({nombre1: "Alex", nombre2: "Matias", nombre3: "Cindi"})