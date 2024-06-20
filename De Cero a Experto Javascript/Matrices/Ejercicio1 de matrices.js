// manifestamos la matriz

let matriz = [[5,6,9,4],[3,2,5,6],[1,3,5,8]];

// Iteramos todos los datos de una matriz con dos ciclos for
console.log(matriz.length);
for(fila = 0; fila < matriz.length; fila++){
    for(col = 0; col < matriz[fila].length; col++){
        console.log(`Elemento [${fila}][${col}] = ${matriz[fila][col]}`)
    }

}
