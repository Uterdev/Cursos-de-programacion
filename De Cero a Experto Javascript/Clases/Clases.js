class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}


let persona1 = new Persona("Juan", "Alvarez");
console.log(persona1);

persona1.nombre = "Juan Carlos" ;
let persona2 = new Persona("Carlos", "Lara");
console.log(persona2);
console.log(persona1);