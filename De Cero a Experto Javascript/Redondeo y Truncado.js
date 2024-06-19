// Redondeo y Truncado en JS

let numero = 8.5, redondeo, truncado // Numero flotante
// Redondeo
// Math.round() redondea al valor entero mas cercano
// .5 o superior, redondea al valor entero superior mas cercano
redondeo = Math.round(numero);
console.log(redondeo);


// Truncado
// Math.trunc() Elimina la parte flotante (decimal)

truncado = Math.trunc(numero);
console.log(truncado);
