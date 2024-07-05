class Persona{

    static contadorPersonas = 0;//atributos de nuestra clase

     constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this.idPersona = ++Persona.contadorPersonas;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this.idPersona + ' ' + this._nombre + " " + this._apellido;
    }
    //Sobrescribiendo el metodo de la clase Padre ( Object)
    toString(){
        // Se aplica polimorfismo (multiples formas en tiempo de ejecución)
        //el metodo que se ejecuta depende si es una referencia de tipo padre
        //o de tipo hijo
        return this.nombreCompleto();
    }
    static saludar(){
        console.log('saludos desde metodo static');
    }
    static saludar2(Persona){
        console.log(Persona.nombre + ' ' + Persona.apellido);
    }
}


class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    // SObrescritura 
    //nombreCompleto(){
    //    return this._nombre + ' ' + this._apellido + ', ' + this._departamento;
    //}
    nombreCompleto(){
       return super.nombreCompleto() + ', ' + this._departamento;
    }
}
let persona1 = new Persona("Juan", "Alvarez");
console.log(persona1.toString());

let empleado1 = new Empleado("Maria", "Garcia", "Sistemas");
console.log(empleado1.toString());

console.log(Persona.contadorPersonas);

let persona2 = new Persona('Karla', 'Ramirez');
console.log(persona2.toString());
console.log(Persona.contadorPersonas);

