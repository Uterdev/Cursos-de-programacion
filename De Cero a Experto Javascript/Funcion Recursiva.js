// Una funcion recursiva es una funcion que se llama así misma
// Imprimir 3, 2, 1

function funcionRecursiva(numero){
    if(numero ==1)
        console.log(numero);
    else{
        console.log(numero)
        funcionRecursiva(numero - 1);
    }
}

let variable = 3
funcionRecursiva(variable);
