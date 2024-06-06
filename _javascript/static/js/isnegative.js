let numero;
numero = parseInt(prompt("Escribe un número: "));
if (isNaN(numero)){
    console.log("No es un número.");
} else {
    if (numero < 0) {
        console.log("Es negativo.");
    } else if (numero > 0) {
        console.log("Es positivo.");
    } else {
        console.log("Es cero.");
    }
}