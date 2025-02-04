// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let Amigos = [];

//function asignarTextoElemento(elemento, texto) {
    //let elementoHTML = document.querySelector(elemento)
    //elementoHTML.innerHTML = texto;
    //return;
//}


function amigosIngresados () {
    let nombreAmigo = document.getElementById('amigo');
    if (nombreAmigo === null) {
        alert ("Por favor, inserte un nombre")
    }else{
          Amigos.push();
          limpiarcaja ();
          return; 
    }    
}      

function limpiarcaja () {
    document.querySelector('#amigo') = '';
}
