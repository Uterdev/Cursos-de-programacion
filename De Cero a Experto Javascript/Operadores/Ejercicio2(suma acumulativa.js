//Realizar la suma de los primero 5 numeros utilizando un ciclo for

let maximo = 5;
let acumuladorSuma =0;
for(let numero = 1; numero <= maximo; numero++){
    console.log(`${acumuladorSuma} + ${numero}`)
    acumuladorSuma += numero;
    console.log(acumuladorSuma);
    }

//realizamos la suma de los primeros 5 numeros utilizando while
num = 1;
acu = 0;
while( num <= maximo){
    acu += num;
    num++;
console.log(acu)
}
//realizamos la suma de los primeros 5 numeros utilizando do while

let num1 = 1
let sumatorio = 0

do{
    sumatorio += num1;
    console.log(sumatorio)
    num1++
}while( num1 <= maximo);