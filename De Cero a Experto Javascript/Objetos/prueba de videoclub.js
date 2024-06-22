// Constructor ficha videoclub

function Persona(nombre, apellido, edad, telefono,) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.telefono = telefono;
    this.mayorEdad = function(){
        if (this.edad >= 18) {
            return "true"
        }else{
            return "false"
        };
    };
};


let miembro1 = new Persona('Juan', 'Alvarez', '18', '952657694');
console.log(miembro1.mayorEdad());
