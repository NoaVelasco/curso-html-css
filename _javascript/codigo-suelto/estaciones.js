// sirve tanto si el valor es 1-12 o supera 12 por cantidad de meses:
// "en qué estacion estaremos dentro de 18 meses"
let mes = 12;
mes %= 12;

let estacion;

if (mes <= 2){
    estacion = "Invierno";
} else if (mes <= 5){
    estacion = "Primavera";
} else if (mes <= 8){   
    estacion = "Verano";
} else if (mes <= 11){
    estacion = "Otono";
} 

console.log(`Estamos en ${estacion}`);