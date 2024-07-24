class Persona{

    static contadorpersonas = 0;

    constructor (nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorpersonas;
    }
    get idPersona (){
        return this._idPersona;
    }

    get nombre (){
        return this._nombre;
    }
    set nombre (nombre){
        this._nombre = nombre;
    }

    get apellido (){
        return this._apellido;
    }
    set apellido (apellido){
        this._apellido = apellido;
    }

    get edad (){
        return this._edad;
    }
    set edad (edad){
        this._edad = edad;
    }

    nombreCompleto (){
        return this._idPersona + ' ' + this._nombre + ' ' + this._apellido + ' ' + this._edad;
    }

    toString (){
        return this.nombreCompleto();
    }
}

class Empleado extends Persona{
    constructor (nombre, apellido, edad, sueldo){
        super (nombre, apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado = this.idPersona;
    }

    get idEmpleado (){
        return this._idEmpleado;
    }

    get sueldo (){
        return this._sueldo;
    }
    set sueldo (sueldo){
        this.sueldo = sueldo;
    }
    nombreCompleto (){
        return super.nombreCompleto() + ', ' + this._sueldo;
    }
}

class Cliente extends Persona{
    constructor (nombre, apellido, edad, fechaRegistro){
        super (nombre, apellido, edad);
        this._fechaRegistro = fechaRegistro;
        this._idCliente = this.idPersona;
    }
    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
    this._fechaRegistro = fechaRegistro;
    }
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._fechaRegistro;
    }
}




let empleado1 = new Empleado ('Daniel', 'Garcia', 35, 1900);
console.log(empleado1.toString());

let cliente1 = new Cliente ('Juan', 'Mendez', 35, '9/6/2024');
console.log(cliente1.idCliente);