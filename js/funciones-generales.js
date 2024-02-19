function mostrar(etiqueta,texto,cod){
    let container = document.querySelector(etiqueta);

    container.innerHTML = '';

    if(typeof texto === 'string'){
        limpiar(cod);
        let p = document.createElement("p");
        p.textContent = texto;
        container.appendChild(p);
        
    }else{
        limpiar(cod);
        container.appendChild(texto)
    }
}

function limpiar(id){
    document.getElementById(id).value = "";
}
