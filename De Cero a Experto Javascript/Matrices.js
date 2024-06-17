// Una matrix es un array de 2 dimensiones.
// Ej. let matriz [[],[]];

let matriz = [[],[]];

// Modificar los valores de nuestr matriz
// Fila 0
matriz[0][0] = 100;
matriz[0][1] = 200;
matriz[0][2] = 300;
// Fila 1
matriz[1][0] = 400;
matriz[1][1] = 500;
matriz[1][2] = 600;


//leer los valores de una matriz

console.log(`Elemento[0][1] = ${matriz[0][1]}`);
console.log(`Elemento[1][2] = ${matriz[1][2]}`);

// Simplificado de matriz

let ma = [[100, 200, 300],[400, 500, 600]];

console.log(`Elemento[0][1] = ${ma[0][1]}`);
console.log(`Elemento[1][2] = ${ma[1][2]}`);


console.log(ma.length);
console.log(ma[0].length);
console.log(ma[1].length);

// Iterar los elementos de una matriz de una fila

for(let fila = 0; fila < ma.length; fila++){
    console.log(ma[fila]);
    
// Iterar los elementos de una matriz de una columna    
    
    for(let col = 0; col < ma[fila].length; col++){
        console.log(ma[fila][col]);
        console.log(`Elemento [${fila}][${col}] = ${ma[fila][col]} `)
    }
}

