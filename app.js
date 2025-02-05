// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


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
    actualizarListaAmigos();
          
        
}      

function limpiarcaja() {
    document.querySelector('#amigo').value = '';
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li')
        li.className = 'list-item';
        li.textContent = amigos[i]
        listaAmigos.appendChild(li);

    }
}

function sortearAmigo() {
    
    if(amigos.length === 0) {
        alert ('Agrega amigos primero!');
        return;
        
    }
    const indice = nombrealeatorio()
    console.log(indice)
    const nombresorteado = amigos[indice];

    const resultado = document.getElementById('resultado');
    console.log(nombresorteado)
    resultado.innerHTML = `El amigo sorteado es ${nombresorteado}`
}


function nombrealeatorio() {
    return Math.floor(Math.random() * amigos.length);
    
    
} 




