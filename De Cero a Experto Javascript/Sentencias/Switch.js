// El comando switch es parecido a if, else pero mas acotado

let diaSemana = 1;

// Revisar si el numero es positivo
switch (diaSemana){
    case 1:
        console.log(`Es Lunes`);
        break;
    case 2:
        console.log(`Es Martes`);
        break;
    case 3:
        console.log(`Es Miercoles`);
        break;
    case 4:
        console.log(`Es Jueves`);
        break;
    case 5:
        console.log(`Es Viernes`);
        break;
    case 6:
        console.log(`Es Sábado`);
        break;
    case 7:
        console.log(`Es Domingo`);
        break;
    default:
        console.log(`${diaSemana} Dia de la semana indefinido`);
        break;
}