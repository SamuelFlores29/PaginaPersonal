let lista = [];
let pHTML = document.getElementById('listaValores');
let rest = document.getElementById('Resultado');
let posicion;
let encontrado;

//Funcion para añadir valors a la lista
function anadirValor(){
    let valorInput = parseFloat(document.querySelector('input').value);

    //Validamos que el input no este vacio
    if(!isNaN(valorInput)){
        lista.push(valorInput);
        pHTML.textContent = lista;
        limpiarInput('numero');
    }else{
        alert("Ingresa valores")
    }
}

//Funcion para buscar el numero que coloquemos dentro del input
function buscar(){
    let valorInput = parseFloat(document.querySelector('input').value);

    //Validamos que la lista este vacia, si no esta vacia empezamos a buscar el numero y retornamos un objeto 
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

//Funcion para mostrar el resultado
function resultado(){
    let valorInput = parseFloat(document.querySelector('input').value);
   
    //Validamos que el input no este vacio
    if(!isNaN(valorInput)){
        //Si buscar().encontrado retorna true, creamos el elemento p para asignarlo al HTML
        if(buscar().encontrado){
            let p = document.createElement('p')
            p.textContent = `El numero se encontro, esta en la posicion ${buscar().posicion + 1 }`
            mostrar("#Resultado",p,"numero");
        }
        //Si no se encontro mostramos "No se encontro"
        else{
            let p = document.createElement('p')
            p.textContent = "No se encontro el numero"
            mostrar("#Resultado",p,"numero")
    }
    }else{
        alert("Ingrese un valor para buscarlo")
    }
}

//Resetamos la pagina
function resetear(){
    rest.textContent = ""
    pHTML.textContent = ""
    lista.length = 0
}