// Paso por referencia JS
// Objeto (array) se pasan por referencia

function cambiarValor(parametro) {
    parametro[0] = 20;
}

// Llamamos a la funcion
let arreglo = [10];
console.log(`Antes Funcion: ${arreglo[0]}`);
cambiarValor(arreglo);
console.log(`Despues Funcion: ${arreglo[0]}`);

