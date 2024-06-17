//Realizar la suma de los primero 5 numeros utilizando un ciclo for
let numeroMax = 5;
let sumatorio = 0;
for(numero = 1; numero <= numeroMax; numero++){
    console.log(`${sumatorio} + ${numero}`);
    sumatorio += numero;
    console.log(sumatorio);
    }

//realizamos la suma de los primeros 5 numeros utilizando while
let num = 1;
let suma = 0;
while(num <= numeroMax){
    suma += num;
    num++
    console.log(suma);
    }

//realizamos la suma de los primeros 5 numeros utilizando do while
let nu1 = 1
let sum = 0
do{
sum += nu1;
nu1++;
console.log(sum);
}while(nu1 <= numeroMax);