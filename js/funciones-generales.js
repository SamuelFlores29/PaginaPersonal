function mostrar(etiqueta,texto,idInput){
    let container = document.querySelector(etiqueta);
    

    container.innerHTML = '';
    
        limpiarInput(idInput);
        container.appendChild(texto);
    }

function limpiarInput(idInput){
    document.getElementById(idInput).value = "";
}
