let lista = [];

function AnadirValor(){
    let valorCaja = document.querySelector("input").value;
        if(valorCaja != ""){
            lista.push(valorCaja);
            limpiar();
        }else{
            alert("Ingresa un valor valido")
        }

    console.log(lista);
}

function limpiar(){
    document.querySelector("input").value = ""
}

function modificarDocumento(elemento,valor){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = valor;
}

function EncuentraValor(){
    let encuentro = false;
    let indice = -1 
    let valorCaja = document.querySelector("input").value
        for(let i = 0; i <= lista.length -1 ; i++){
            if(valorCaja == lista[i]){
                encuentro = true;
                indice = i;
                break
            }
    }
    if(encuentro){
        modificarDocumento("p", "El valor si se encuentra y esta en la posicion "+ indice)
    }else{
        modificarDocumento("p", "El valor no se encuentra")

    }
    
}