// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Se inicializa la lista para poder guardar el nombre de los amigos
let amigos = [];

function agregarAmigo (){
    // función encargada de agregar los amigos tanto al array como a la lista html
    let nombre = document.getElementById('amigo');
    //verifica que no este vacio el nombre
    if (nombre.value.length < 1){
        alert('Debe ingresar un nombre valido');
    } else {
        // agrega el nombre al array amigos
        amigos.push(nombre.value);
        let lista = document.querySelector('.name-list');
        lista.innerHTML = '';
        //iteracion de la lista para mostrar todos los nombres en pantalla
        for (let i=0;i<amigos.length;i++){
            let nombreAmigo = document.createElement('li');
            nombreAmigo.textContent = amigos[i];
            lista.appendChild(nombreAmigo);
        }
        // limpia el input
        nombre.value = '';
    }
}

function sortearAmigo(){
    //funcion para elegir aleatoriamante un nombre dentro del array amigos
    if (amigos.length == 0){
        //verificacion de que al menos exista un nombre en la lista
        alert('Ingrese al menos un amigo para realizar sorteo');
    } else {
        // se genera un numero aleatorio para seleccionar un nombre
        let numeroAmigo = Math.floor(Math.random()*amigos.length);
        let amigoSorteado = document.querySelector('.result-list');
        // el numero generado se utiliza como indice del array para devolver el nombre
        amigoSorteado.innerHTML = amigos[numeroAmigo]
    }
    
}