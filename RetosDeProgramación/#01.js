/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */
let a = 2;
let b = 5;
let c = true;
let d = false;
let e = '3';

let suma = (a + b);
let resta = (a - b);
let multiplicacion = (a * b);
let division = (a / b);
let potencia = (a**2);
let modulo = (a%b);
let incremento = a++;
let decremento = b--;

// Operador lógico && (and o Y)
console.log(c && d);
// Operador lógico || (or o O)
console.log(c || d);
// Operador lógico ! (not o NO)
console.log(!c);

console.log(
    `suma = ${suma}`,
    `resta = ${resta}`,
    `multiplicacion = ${multiplicacion}`,
    `division = ${division}`,
    `potencia = ${potencia}`,
    `modulo = ${modulo}`,
    `incremento = ${incremento}`,
    `decremento = ${decremento}`
);

// Operadores de comparación

console.log(a == e);
console.log(a === e);
console.log(a != e);
console.log(a !== e);
console.log(a < b);
console.log(a > b);
console.log(a >= e);
console.log(a <= e);

// Operadores de asignación

let miNumero = 4;

miNumero += 3;
console.log (miNumero);
miNumero -= 3;
console.log (miNumero);
miNumero *= 3;
console.log(miNumero);
miNumero /= 3;
console.log(miNumero);
miNumero **= 3;
console.log(miNumero);
miNumero %= 3;
console.log(miNumero);

// if, else

if (a < b) {
    console.log("es menor");    
}else{
    console.log("es mayor");
};

// Switch

let diaSemana = 2;

switch (diaSemana) {
    case 1:
        console.log("Es Lunes");
        break;
    case 2:
        console.log("Es Martes");
        break;
    case 3:
        console.log("Es Miercoles");
        break;
    case 4:
        console.log("Es Jueves");
        break;
    case 5:
        console.log("Es Viernes");
        break;
    case 6:
        console.log("Es Sabado");
        break;
    case 7:
        console.log("Es domingo");
        break;
    default:
        console.log("Error en dia de la semana")
        break;
}

// while, do-while, for

let i = 20;
let w = 35;


while (i <= w) {
    console.log(i);
    i++;   
}

let g = 14;
let h = 23;

do{
    console.log(g);
    g++;
}while (g <= h);


// blucle for

let numero = 34;
let repeticiones = 56;

for (numero = 34; numero < repeticiones; numero++){
    console.log(numero);
};

// Crea un programa que imprima por consola todos los números comprendidos
// entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.

let numeroMinimo = 10;
let numeroMaximo = 55;

for (numeroMinimo = 10; numeroMinimo <= numeroMaximo; numeroMinimo++) {
    if (numeroMinimo === 16 ) {
        console.log(numeroMinimo);
    }else if (numeroMinimo%2 === 1) {
        console.log(numeroMinimo);
    }else if (numeroMinimo%3 === 0){
        console.log(numeroMinimo);
    }else{
        console.log(numeroMinimo);
    }
}


for(let i=10; i<=55; i++)
    {
    
        if(i%2 == 0 && i!=16 && i%3 !=0)
        {
    
            console.log(i);}
    }



let j = 10

    for (j = 10; j <= numeroMaximo; j++) {
        if (j!=16 && j%2 ==0 && j%3 !=0) {
           console.log(j); 
        };
        
    }