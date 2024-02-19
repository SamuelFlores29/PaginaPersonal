function multiplicar() {
    let numero = parseFloat(document.getElementById('numero').value);
    let texto = document.getElementById('texto')
    let ul = document.createElement('ul');
    
    if(!isNaN(numero)){
        texto.textContent = `La tabla de multiplicar del numero ${numero} es:`
        for (var i = 1; i < 11; i++) {
            let resultado = numero * i;
            let li = document.createElement('li');
            let texto = document.createTextNode(numero + 'x' + i + ' = ' + resultado)
            li.appendChild(texto);
            ul.appendChild(li);
    }
    }else{
        alert("Ingresa un valor en el input")
    }
    mostrar('#tabla',ul,"numero");// Agregamos cada resultado a la tabla
}  

