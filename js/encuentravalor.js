let lista = [];
let pHTML = document.getElementById('listaValores');
let rest = document.getElementById('Resultado');
let posicion;
let encontrado;

function anadirValor(){
    let valorInput = parseFloat(document.querySelector('input').value);
    if(!isNaN(valorInput)){
        lista.push(valorInput);
        pHTML.textContent = lista;
        limpiarInput('numero');
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
                posicion = i;
                return {encontrado: true,posicion:i}
            }
        }
        return {encontrado:false,posicion: -1}
    }
}


function resultado(){
    let valorInput = parseFloat(document.querySelector('input').value);
    
    if(!isNaN(valorInput)){
        if(buscar().encontrado){
            let p = document.createElement('p')
            p.textContent = `El numero se encontro, esta en la posicion ${buscar().posicion + 1 }`
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

function resetear(){
    rest.textContent = ""
    pHTML.textContent = ""
    lista.length = 0
}