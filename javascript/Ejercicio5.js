// Para poder generar una serie de números
for (let i = 0; i < 8; i++) {
    // Código a ejecutar en cada iteración. En este caso sacamos por pantalla el valor de i
    console.log(i);
}

// Iterar sobre un array

const colours = ['black', 'white', 'red'];

for (let i = 0; i < colours.length; i++) {
    console.log(colours[i]);
}

// Recorrer una cadena de texto
const word = 'JavaScript';

for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
}

// Crea un bucle que recorra del número 0 al número 5 y en cada resultado muestre el número multiplicado por 2


for (let i = 0; i <=5 ; i++){
    console.log(i*2);
    }
    
    
     // Crea otro bucle que recorra el string bootcamp y muestre cada letra en mayúscula
     // PISTA 1: Recuerda utilizar la propiedad length para obtener la longitud del string
     // PISTA 2: Para poder poner en mayúscula utiliza el método toUpperCase 
        
    const string = "bootcamp";
    
    for (let i =0; i < string.length; i++){
        console.log(string.toUpperCase()[i]);
    }
    
        
     // Ejemplo: console.log('react'.toUpperCase()) // output REACT