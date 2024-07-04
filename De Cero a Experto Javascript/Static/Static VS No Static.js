class Persona{

    static contadorObjetosPersona = 0;//atributos de nuestra clase

    email = 'Valor default email';//atributo de nuestros objetos

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
        console.log('Se incrementa contador:' + Persona.contadorObjetosPersona);
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
        return this._nombre + " " + this._apellido;
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
console.log(empleado1);
console.log(empleado1.nombreCompleto());

console.log(empleado1.toString());

//Persona1.saludar(); no es posible llamar un métod static desde un objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);

console.log(Empleado.contadorObjetosPersona);


console.log(persona1.email);
console.log(empleado1.email);
console.log(Persona.email);
console.log(Empleado.email);