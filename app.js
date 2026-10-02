'use strict';

//BLOQUE 1: ENTORNO Y PERFIL
const Elementousuario = document.getElementById('usuario');
const Elementorol = document.getElementById('socio'); 
const ElementoFecha = document.getElementById('fecha'); 
const ElementoEstado = document.getElementById('estado');


const parametros = new URLSearchParams(window.location.search); 

// Identificación del usuario y rol
const usuario = parametros.get("usuario") || "Invitado"; 
const rol = parametros.get("rol") || "Básico";

console.log(usuario); 
console.log(rol); 

// Fecha actual y estado de conexión
const fecha = new Date().toLocaleDateString('es-ES', {dateStyle: 'full' });
const estado = navigator.onLine ? 'Conectado 🟢' : 'Sin conexión 🔴'; 

// Obtener el idioma del navegador
const idioma = navigator.language; 

// Identificador único de sesión
const idSesion = crypto.randomUUID();


// Mostrar los datos en la página
Elementousuario.textContent = usuario;
Elementorol.textContent = rol; 
ElementoFecha.textContent = fecha; 
ElementoEstado.textContent = estado; 

//Limpieza y procesamiento del correo
const correoSocio = " orlando@gmail.com ";
const correoLimpio = correoSocio.trim().toLowerCase(); 

//3. Separacion de usuario y dominio
const partes = correoLimpio.split('@'); //Aqui tenemos dos elementos, uno antes del @ y otro después
const nombre_correo = partes[0];
const dominio = partes[1]; 

//Código del socio

const codigoSocio = 7;
const codigoPedido = String(codigoSocio).padStart(6, '0'); //

//Asignación de preferencias

// Apodo
let apodo = "";
apodo ||= "Espectador VIP";

// Suscripción
let suscripcion;
suscripcion ??= "Básica";

// Saldo de entradas de regalo
let saldoRegalo;
saldoRegalo ??= 2;

// Comprobaciones

console.log(`Usario de correo: ${nombre_correo}`);
console.log(`Dominio: ${dominio}`);
console.log(`Correo limpio: ${correoLimpio}`);
console.log(`Codigo de socio: ${codigoPedido}`);

console.log(`Apoyo: ${apodo}`);
console.log(`Suscripción: ${suscripcion}`);
console.log(`Saldo de regalo: ${saldoRegalo}`);
console.log(`Idioma: ${idioma}`);
console.log(`Estado: ${estado}`);
console.log(`ID de sesión: ${idSesion}`);

//BLOQUE 2: TAQUILLA Y FACTURACIÓN

// 1. Precios recibidos como texto
const precioGeneral = "8.50€";
const precioCombo = "12.00€";

// Convertir los precios a números
const precioGeneralNumero = parseFloat(precioGeneral);
const precioComboNumero = parseFloat(precioCombo);

// Calcular el subtotal
const subtotal = precioGeneralNumero + precioComboNumero;


// 2. Validación y aplicación del descuento e IVA

const formatoEuro = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
});

if (Number.isFinite(subtotal)) {

    const descuentoTexto = "3";
    const descuento = Number(descuentoTexto);

    const totalConDescuento = subtotal - descuento;
    const iva = totalConDescuento * 0.21;
    const total = totalConDescuento + iva;

    console.log(`Subtotal: ${subtotal}`);
    console.log(`Descuento: ${descuento}`);
    console.log(`IVA: ${iva}`);
    console.log(`Total: ${total}`);

    document.getElementById('Subtotal').textContent =
        `Subtotal: ${formatoEuro.format(subtotal)}`;

    document.getElementById('descuento').textContent =
        `Descuento: ${formatoEuro.format(descuento)}`;

    document.getElementById('IVA').textContent =
        `IVA: ${formatoEuro.format(iva)}`;

    document.getElementById('total').textContent =
        `TOTAL: ${formatoEuro.format(total)}`;

} else {

    console.log("El subtotal no es un número válido.");

}


// 3. Número de reserva

let numeroReserva = 100;

const siguienteReserva = ++numeroReserva;

console.log(`Número de reserva: ${siguienteReserva}`);


// 4. Formateo de moneda

console.log(`Subtotal: ${formatoEuro.format(subtotal)}`);

