// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//function asignarTextoElemento(elemento, texto) {
    //let elementoHTML = document.querySelector(elemento)
    //elementoHTML.innerHTML = texto;
    //return;
//}


function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value.trim()

    if (nombreAmigo === "") {
        alert ("Por favor, inserte un nombre")
        return;
    }
    amigos.push(nombreAmigo);
    console.log (amigos)
    limpiarcaja();
          
        
}      

function limpiarcaja() {
    document.querySelector('#amigo').value = '';
}

function limpiarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li')
        li.className = 'list-item';
        li.textContent = amigos[i]
        listaAmigos.appendChild(li);

    }
}