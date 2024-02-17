function convertirDolar(){
    var monto = parseFloat(document.getElementById('monto').value);

    if(!isNaN(monto)){
        let dolar =(monto/3.864).toFixed(2);
        mostrar("div", `${monto} soles son ${dolar} dolares`);
        limpiar();
    }else{
        alert("Ingresa un monto para convertir")
    }
}

function convertirSoles(){
    var monto = parseFloat(document.getElementById('monto').value);

    if(!isNaN(monto)){
        let soles = monto*3.870;
        mostrar("div", `${monto} dolares son ${soles} soles`);
        limpiar();
    }else{
        alert("Ingresa un monto para convertir")
    }


}

function mostrar(etiqueta,texto){
    const container = document.querySelector(etiqueta);
    if(container.firstElementChild){
        container.firstElementChild.textContent = texto;
    }else{
        const p = document.createElement("p");
        p.textContent = texto;
        container.appendChild(p);
    }
}

function limpiar(){
    document.querySelector("#monto").value = ""
}


