// los array o arreglos nos permiten almacenar valores
// en una sola variable, en lugar de definir varias variables.

let numerosArreglo = [];

// MOdificar los valores

numerosArreglo[0] = 13;
numerosArreglo[1] = 21;
numerosArreglo[4] = 'hola';

// leer los valores

console.log(`Elemento 1 - [0]: ${numerosArreglo[0]}`);
console.log(`Elemento 3 - [2]: ${numerosArreglo[2]}`);
console.log(`Elemento 5 - [4]: ${numerosArreglo[4]}`);

// Sintaxis simplificada de array

let numerosArray = [13,21,0,0,62];

console.log(`Elemento 1 - [0]: ${numerosArray[0]}`);
console.log(`Elemento 3 - [2]: ${numerosArray[2]}`);
console.log(`Elemento 5 - [4]: ${numerosArray[4]}`);

// Iterar los array

for(let i = 0; i < numerosArray.length; i++){
    console.log(numerosArray[i]);
    console.log(`Array [${i}] = ${numerosArray[i]}`);
    
}
