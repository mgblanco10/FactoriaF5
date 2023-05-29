export default class Person{
    constructor(name){
        this.name = name
    }
    talk(){
        return `hola soy ${this.name}`
    }
}