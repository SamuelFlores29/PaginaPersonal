function calcularMultiplicacino() {
//Almaceno el valor ingresado en el input y lo guardo en una variable numero
    let numero = parseFloat(document.getElementById('numero').value);
    let ul = document.createElement('ul');
    
//Reemplazo el texto de la pagina por la variable texto
    let texto = document.getElementById('texto')
    texto.textContent = `La tabla de multiplicar del numero ${numero} es:`
        
//Añado cada valor a lista desorneda 
        for (var i = 0; i < 11; i++) {
            let resultado = numero * i;
            let li = document.createElement('li');
            let texto = document.createTextNode(numero + 'x' + i + ' = ' + resultado)
            li.appendChild(texto);
            ul.appendChild(li);
    }        
//retorna ul que es un objeto DOM   
    return ul;
}  

function resultado(){
    let inp = parseFloat(document.getElementById("numero").value)

    if(!isNaN(inp)){
        mostrar('#tabla',calcularMultiplicacino(),'numero')
    }else{
        alert("Ingresa un numero")
    }
   
}

