import Person from "./person.js"

class Coder extends Person{
    constructor(name, studies){
        super(name)
        this.state = studies
    }
}

const coder1 = new Coder ('Sylvia', 'fullstack')
console.log(coder1.talk())

//ESMODULES