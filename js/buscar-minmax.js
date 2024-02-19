let lista = [];
let pHTML = document.getElementById('listaValores')


function anadirValor(){
    let valorInput = parseFloat(document.querySelector('input').value);
    if(!isNaN(valorInput)){
        lista.push(valorInput);
        limpiarInput('numero');
        pHTML.textContent = lista
    }else{
        alert("Ingresa valores")
    }
}

function buscar(){
    let valorInput = parseFloat(document.querySelector('input').value);
    if(lista.length === 0){
        alert("La lista esta vacia")
    }else{
        for(let i = 0; i < lista.length; i++){
            if(lista[i]== valorInput){
                return true
            }
        }
        return false
    }
}


function resultado(){
    let valorInput = parseFloat(document.querySelector('input').value);
    
    if(!isNaN(valorInput)){
        if(buscar()){
            let p = document.createElement('p')
            p.textContent = "Se encontro el numero"
            mostrar("#Resultado",p,"numero");
        }else{
            let p = document.createElement('p')
            p.textContent = "No se encontro el numero"
            mostrar("#Resultado",p,"numero")
    }
    }else{
        alert("Ingrese un valor para buscarlo")
    }
}