// Comprueba si hay descuento:

let totalCompra = 2000;
let dto = 0;
let cliente = "Juan";

if (cliente) {
  console.log("Acumula puntos por ser cliente");

  if (totalCompra > 2000) {
    dto = totalCompra * 0.1;
  }
}

console.log(`Total: ${totalCompra}`);
console.log(`Descuento: ${dto}`);
console.log(`A pagar: ${totalCompra - dto}`);


// Comprueba la hora para dar los buenos días / tardes / noches

let hora = new Date().getHours();
console.log(hora);

if (hora < 12 && hora > 6) {
  console.log("Buenos dias");
} else if (hora < 20) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}

let dia = new Date().getDay();
console.log(dia);
switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("No existe ese día");
}

let mes = new Date().getMonth();
let ano = new Date().getFullYear();
console.log(mes);
switch (mes) {
  case 0:
    console.log("Enero");
    break;
  case 1:
    console.log("Febrero");
    if (ano % 4 == 0) {
      console.log("Tiene 29");
    } else {
      console.log("Tiene 28");
    }
    break;
  case 2:
    console.log("Marzo");
    break;
  case 3:
    console.log("Abril");
    break;
  case 4:
    console.log("Mayo");
    break;
  case 5:
    console.log("Junio");
    break;
  case 6:
    console.log("Julio");
    break;
  case 7:
    console.log("Agosto");
    break;
  case 8:
    console.log("Septiembre");
    break;
  case 9:
    console.log("Octubre");
    break;
  case 10:
    console.log("Noviembre");
    break;
  case 11:
    console.log("Diciembre");
    break;
}