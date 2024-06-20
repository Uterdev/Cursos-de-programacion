let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function () {
        return this.nombre + ' ' + this.apellido;
    }
}

persona.telefono = '654342958';

console.log(persona);

persona.telefono = '600431837';

console.log(persona);

delete persona.telefono;

console.log(persona);
