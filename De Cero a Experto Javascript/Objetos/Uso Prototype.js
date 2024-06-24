// Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function () {
        return this.nombre + ' ' + this.apellido
    };
}

// Con el metodo prototype podemos agregar una propiedad a todos los objetos fuera de la funcion constructor

Persona.prototype.telefono = "600000000";

let padre = new Persona('Juan Jose', 'Perez', 'jjperez@mail.com');
console.log(padre);

let madre = new Persona('Maria', 'Lopez', 'marialopez@mail.com');
console.log(madre);

// observamos que al implementarlo en la funcion contructor no sucede nada

let hijo = new Persona('Daniel', 'Perez', 'danielperez@mail.com', '605497861');
console.log(hijo);

// agregamos manualmente la propiedad telefono a hijo

hijo.telefono = "609201065";
console.log(hijo);
