let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    nombreCompleto: function () {
        return this.nombre + ' ' + this.apellido;
    },
    get informacionRelevante (){
        return this.edad + ', ' + this.email;
    },
    set lang(lang){
        this.idioma = lang.toUpperCase()
    }
}

console.log(persona.nombreCompleto());
console.log(persona.informacionRelevante);
console.log(`nombre = ${persona.nombre}`);
console.log(persona.lang);

persona.lang = "en";
console.log(persona.lang);
console.log(persona.idioma);

