// Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function () {
        return this.nombre + ' ' + this.apellido
    };
}

let padre = new Persona('Juan Jose', 'Perez', 'jjperez@mail.com');
console.log(padre);

let madre = new Persona('Maria', 'Lopez', 'marialopez@mail.com');
console.log(madre);

padre.nombre = 'Carlos';
console.log(padre);
console.log(madre.nombreCompleto());


// Forma formal y simplificada de crear objetos

let miObjeto = new Object();
let miObjeto2 = {};


let miCadena = new String('Hola');
let miCadena2 = ('Hola');

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(false);
let miBoolean2 = false;

let miArray = new Array();
let miArray2 = [];

let miFuncion = new Function ();
let miFuncion2 = function (){};

