function saludar() {
  let nombre = document.getElementById("txtNombre").value;

  document.getElementById("respNombre").innerHTML = `¡Hola, ${nombre}!`;
}

function calcularArea() {
  let base = document.getElementById("txtBase").value;
  let altura = document.getElementById("txtAltura").value;
  let area = (base * altura) / 2;
  document.getElementById("respArea").innerHTML = `El área es ${area}`;
}

function cambiaValor() {
  let n1 = document.getElementById("intNumber1").value;
  let n2 = document.getElementById("intNumber2").value;
  n3 = n1;
  n1 = n2;
  n2 = n3;
  document.getElementById(
    "respNumbers"
  ).innerHTML = `Ahora n1 vale ${n1} y n2 vale ${n2}`;
}

function calcularTicket() {
  let km = document.getElementById("intKm").value;
  let dia = document.getElementById("txtDia").value;
  let precio = km * 0.3;

  if (km > 80) {
    precio -= precio * 0.15;
  }
  if (dia == "L") {
    precio -= precio * 0.05;
  }

  precio = Math.round(precio * 100) / 100;
  document.getElementById(
    "respTicket"
  ).innerHTML = `El importe del billete es ${precio} €`;
}

function calcularPension() {
  let sueldo = document.getElementById("intSueldo").value;
  sueldo *= 0.8;
  if (sueldo > 1300) {
    sueldo = 1300;
  }
  document.getElementById(
    "respPension"
  ).innerHTML = `El importe de la pensión es ${sueldo} €`;
}

function calcularVenta() {
  let venta = document.getElementById("intVenta").value;
  let dto = 0;
  if (venta > 5000) {
    dto = 0.2;
  } else if (venta > 3000) {
    dto = 0.1;
  } else if (venta > 1000) {
    dto = 0.05;
  }
  venta -= venta * dto;
  document.getElementById(
    "respVenta"
  ).innerHTML = `El descuento es del ${dto * 100}% y el importe total es ${venta} €`;
}

function esMultiplo() {
    let numMult = document.getElementById("intMultip").value;
    let respuesta = "";
    if (numMult % 5 == 0 && numMult > 0) {
        respuesta = `El número ${numMult} es múltiplo de 5.`;
      } else {
      respuesta = `El número ${numMult} no es múltiplo de 5.`;
    }
// También vale la siguiente sintaxis:
/*     respuesta = (numMult % 5 == 0 && numMult != 0) 
    ? `El número ${numMult} es múltiplo de 5.` 
    : `El número ${numMult} no es múltiplo de 5.` */

    document.getElementById("respMultiplo").innerHTML = respuesta
}