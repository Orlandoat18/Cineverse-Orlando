'use strict';

//BLOQUE 1: ENTORNO Y PERFIL
const Elementousuario = document.getElementById('usuario');
const Elementorol = document.getElementById('rol'); 
const ElementoFecha = document.getElementById('Fecha'); 
const ElementoEstado = document.getElementById('Estado'); 


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
const correoLimpio = correoSocio.trim().toLowerCase(); //

//3. Separacion de usuario y dominio
const partes = correoLimpio.split('@'); //
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



//BLOQUE 3: DESCUENTO FLASH

//BLOQUE 4: RESEÑAS Y PERSISTENCIA

