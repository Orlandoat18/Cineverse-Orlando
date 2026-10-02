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

//BLOQUE 3: DESCUENTO FLASH

// Elementos del HTML
const botonDescuento = document.getElementById('btn-ActivarDescuento');
const contador = document.getElementById('contador');

// Estado del temporizador
let temporizador = null;
let segundos = 20;

// Activar descuento
botonDescuento.addEventListener('click', () => {

    // Evitar varios temporizadores al mismo tiempo
    if (temporizador !== null) {
        return;
    }

    segundos = 20;
    contador.textContent = segundos;

    temporizador = setInterval(() => {

        segundos--;
        contador.textContent = segundos;

        if (segundos <= 0) {

            clearInterval(temporizador);
            temporizador = null;

            alert('La promoción ha caducado.');
        }

    }, 1000);
});

//BLOQUE 4: RESEÑAS Y PERSISTENCIA


// Elementos del HTML
const campoResenia = document.getElementById('resenia');
const botonResenia = document.getElementById('btn-resenia');

// Contenedor donde aparecerán las reseñas
const listaResenias = document.createElement('div');
listaResenias.id = 'listaResenias';

document.getElementById('Resenias').appendChild(listaResenias);


// 1. RECUPERAR RESEÑAS DEL LOCALSTORAGE

let resenias = [];

try {

    const reseniasGuardadas = localStorage.getItem('resenias');

    if (reseniasGuardadas) {
        resenias = JSON.parse(reseniasGuardadas);
    }

} catch (error) {

    console.error('No se pudieron recuperar las reseñas:', error);

}



// 2. MOSTRAR RESEÑAS
function mostrarResenias() {

    // Limpiar el contenedor antes de volver a pintar
    listaResenias.replaceChildren();

    resenias.forEach((resenia) => {

        // Tarjeta de la reseña
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('resenia');

        // Nombre del socio
        const nombre = document.createElement('h3');
        nombre.textContent = resenia.nombreSocio;

        // Fecha y hora
        const fecha = document.createElement('p');
        fecha.textContent = resenia.horaLocal;

        // Opinión
        const opinion = document.createElement('p');
        opinion.textContent = resenia.opinion;

        // Añadir elementos a la tarjeta
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(fecha);
        tarjeta.appendChild(opinion);

        // Añadir tarjeta al listado
        listaResenias.appendChild(tarjeta);
    });
}

// 3. PUBLICAR NUEVA RESEÑA


botonResenia.addEventListener('click', () => {

    // Obtener el texto escrito y eliminar espacios
    const opinion = campoResenia.value.trim();

    // No permitir reseñas vacías
    if (opinion === '') {
        return;
    }

    // Crear nueva reseña
    const nuevaResenia = {

        // Marca temporal de creación
        timestamp: Date.now(),

        // Nombre del socio
        nombreSocio: usuario,

        // Fecha y hora local
        horaLocal: new Date().toLocaleString('es-ES'),

        // Opinión escrita
        opinion: opinion
    };


    // Añadir la reseña al array
    resenias.push(nuevaResenia);


 
    // 4. GUARDAR EN LOCALSTORAGE
    try {

        localStorage.setItem(
            'resenias',
            JSON.stringify(resenias)
        );

    } catch (error) {

        console.error(
            'No se pudieron guardar las reseñas:',
            error
        );

    }


    // Vaciar el textarea
    campoResenia.value = '';

    // Actualizar las reseñas mostradas
    mostrarResenias();

});

// 5. MOSTRAR RESEÑAS AL CARGAR
mostrarResenias();

