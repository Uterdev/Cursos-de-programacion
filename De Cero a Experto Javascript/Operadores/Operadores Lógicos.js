// Operadores lógicos

let a = true;
let b = false;
console.log(a);
console.log(b);

// Operador lógico && (and o Y)
// Regresa verdadero si ambos operandos
//son verdaderos
console.log(`${a} && ${b} -> ${a && b}`);

 // Operador lógico || (or o O)
console.log(`${a} || ${b} -> ${a || b}`);

 // Operador lógico ! (not o NO) invierte el resultado logico = true->false, false->true
 console.log(`!${a} -> ${!a}`);


 // Ejercicio valor dentro de rango

let minimo = 0;
let maximo = 5;
let numero = 3;

// Revisamos si esta dentro de rango

let dentroRango = numero >= minimo && numero <= maximo;

console.log("¿Esta "+ numero + " dentro de rango?" + "-> " +  dentroRango);


