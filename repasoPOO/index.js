class Coder {
    constructor(name){
        this.name = name
        this.state = "Estudiante"
    }
    talk(){
        return `hola soy ${this.name}`
    }
}

const alumno1 = new Coder("Sylvia");
const alumno2 = new Coder("Sofia");

console.log(alumno1);
console.log(alumno2.talk());

//herencia
class Person {
    constructor(age){
        this.age = age
    }
    number(){
        return `parece que tu tienes ${this.age}`
    }
}

class Coder extends Person{
    constructor(age, studies){
        super(age)
        this.state = studies
    }
}

const coder1 = new Coder("Samuel", "fullstack");

console.log(coder1.number())