let numeroSecreto= 0;
let intentos = 0;
let listaNumerossorteados = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto) {
   let elementoHTML = document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
   return;
}

function verificarIntento() {
   let numeroDeUsuario = document.getElementById('valorUsuario').value;
   
   if (numeroDeUsuario == numeroSecreto) {
      asignarTextoElemento('p', `¡Felicidades! ¡Has adivinado el número secreto en ${intentos} ${intentos === 1 ? "vez": 'veces' }!`);
      document.getElementById('reiniciar').removeAttribute('disabled');
   }else{
      if (numeroDeUsuario > numeroSecreto) {
         asignarTextoElemento('p', 'El número secreto es menor');
   }else{
      asignarTextoElemento('p', 'El número secreto es mayor');
   }
   intentos++;
   limpiarCaja();
   }
}


function limpiarCaja() {
   document.querySelector('#valorUsuario').value = '';
}
   

function generarNumeroSecreto(p) {
   let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

   if (listaNumerossorteados.length === numeroMaximo) {
      asignarTextoElemento('p', 'No hay mas intentos disponibles');
      } else{
         if (listaNumerossorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
         }else{
            listaNumerossorteados.push(numeroGenerado);
            return numeroGenerado;
         }
         
      }
}

function mensajesIniciales() {
   asignarTextoElemento('h1', 'Juego del numero secreto');
   asignarTextoElemento('p', `indica un numero del 1 al ${numeroMaximo}`);
   numeroSecreto = generarNumeroSecreto();
   intentos = 1;
}

function reiniciarJuego() {
   limpiarCaja();
   
   //numeroSecreto = generarNumeroSecreto();
   document.getElementById('reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();