// Imprimir los primeros 10 numeros de 3 en 3
//positivos y negativos
let numeroMin = -10
var numero = 1;
let numeroMax = 10;

while(numero <= numeroMax){
    console.log(numero);
    numero = numero + 3;
}
var numero = 1;
while(numero >= numeroMin){
    console.log(numero);
    numero = numero - 3;
}

for( let number = 1; number <= numeroMax; number += 3){
    console.log(number);
}
for( let number = 1; number >= numeroMin; number -= 3){
    console.log(number);

}