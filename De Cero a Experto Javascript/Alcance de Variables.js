// Alcance de variables en JS

let variableGlobal = 5;

// Modificamos el valor

variableGlobal = 10;

// Definicion funcion
function miFuncion(variableLocal) {
    console.log(variableLocal);
    variableGlobal = 20;
}

// Llamamos la funcion
miFuncion(variableGlobal);
console.log(variableGlobal);
