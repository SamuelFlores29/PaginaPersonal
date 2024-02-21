//Funcion para mostrar, espera un elemento del DOM
function mostrar(etiqueta,texto,idInput){
    let container = document.querySelector(etiqueta);
    

    container.innerHTML = '';
    
        limpiarInput(idInput);
        container.appendChild(texto);
    }

//Limpiar el input
function limpiarInput(idInput){
    document.getElementById(idInput).value = "";
}

