let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function (titulo, telefono) {
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + telefono;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara',
}

// Uso de apply para usar el metodo persona1.nombreCompleto
// Con los datos de person2
console.log(persona1.nombreCompleto('Licenciado', '650457691'));

let arreglo = ["Ingeniero", "603562479"];
console.log(persona1.nombreCompleto.apply(persona2, arreglo ));
