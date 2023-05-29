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