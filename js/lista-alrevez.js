let listaValores = [];
let listaHTML = document.getElementById('ListaHTML');
let listaArrevez = document.getElementById("ListaAlrevez")

//Funcion para añadir valor a la lista
function anadirValor(){
    let datos = document.getElementById('texto').value;
    //Validamos que el input no esta vacio
        if(datos !== ''){
            listaValores.push(datos)
    //Mostramos los datos que se añadieron
            listaHTML.textContent=listaValores;
    //Limpiamos el input
            limpiarInput('texto');
        }else{
    //Si el input esta vacio muestra la alerta
            alert("Porfavor ingrese valor al input")
        }
}

//Funcion para voltear la lista
function mostrarAlrevez(){
    if(listaValores.length === 0 || listaValores.length === 1){
        alert("La lista esta vacia o solo tiene un elemento")
    }else{
        let listaMostrar = [];
        for(i = listaValores.length -1 ; i >= 0; i--){
            listaMostrar.push(listaValores[i]); 
            listaArrevez.textContent = listaMostrar;
    }
    }
    
}

function resetear(){
    listaArrevez.textContent = ""
    listaHTML.textContent = ""
    listaValores.length = 0
}
