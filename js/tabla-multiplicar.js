function calcularMultiplicacino() {
//Almaceno el valor ingresado en el input y lo guardo en una variable numero
    let numero = parseFloat(document.getElementById('numero').value); 
    let ul = document.createElement("ul")
    
//Reemplazo el texto de la pagina por la variable texto
    
ul.appendChild(document.createElement('li')).textContent = `La tabla de multiplicar de ${numero} es:`;      
//Añado cada valor a lista desorneda 
        for (var i = 0; i < 11; i++) {
            let li = document.createElement('li');  
            let resultado = numero * i;
            let texto = document.createTextNode(numero + 'x' + i + ' = ' + resultado)
            li.appendChild(texto);
            ul.appendChild(li)
            
    }        
//retorna ul que es un objeto DOM   
    return ul;
}  

//Funcion que muestra el resultado
function resultado(){
    let inp = parseFloat(document.getElementById("numero").value)

    if(!isNaN(inp)){
        mostrar('.contenedorTabla',calcularMultiplicacino(),'numero')// Funcion llamada del documento funciones generales
    }else{
        alert("Ingresa un numero")
    }
   
}

