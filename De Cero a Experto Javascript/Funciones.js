// Sintaxis de una función ( procedimiento)

function Imprimir(numero) {
    console.log(numero);
}

// llamar a la función imprimir

let variable = 130;
Imprimir(variable);

// Sintaxis de una función ( función)

function sumar(a, b) {
    let resultado = a + b;
    return resultado;
}

// llamar a la función imprimir

let a = 2; b = 3;
c = sumar (a, b);
console.log(c);


// Ejemplo

function saludar(mensaje) {
    console.log(`Mensaje: ${mensaje}`)
}

saludar('hola');


// Ejemplo sumar

function sumar(a, b) {
    let resultadoSuma = a + b;
    return resultadoSuma;
}
let argA = 5, argB = 7;
let result = sumar(argA, argB);
console.log(result);
