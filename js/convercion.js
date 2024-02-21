//Funcion para convertir soles a dolares
function convertirDolar(){
    var monto = parseFloat(document.getElementById('monto').value);

    //Validamos que el input no este vacio
    if(!isNaN(monto)){
        let dolar =(monto/3.864).toFixed(2);
        mostrar("div", `${monto} soles son ${dolar} dolares`);
        limpiar();
    }else{
        alert("Ingresa un monto para convertir")
    }
}

//Funcion para convertir dolares a soles
function convertirSoles(){
    var monto = parseFloat(document.getElementById('monto').value);

    //Validamos que el input no este vacio
    if(!isNaN(monto)){
        let soles = monto*3.870;
        mostrar("div", `${monto} dolares son ${soles} soles`);
        limpiar();
    }else{
        alert("Ingresa un monto para convertir")
    }


}

//Funcion para mostrar el resultado dentro del HTML
function mostrar(etiqueta,texto){
    const container = document.querySelector(etiqueta);

    //Validamos que el espacio donde va a estar nuestro resultado este vacio, si esta ocupado lo sobreescribimos
    if(container.firstElementChild){
        container.firstElementChild.textContent = texto;
    }else{
        const p = document.createElement("p");
        p.textContent = texto;
        container.appendChild(p);
    }
}

//Funcion para limpiar la pagina
function limpiar(){
    document.querySelector("#monto").value = ""
}


