let titulo = document.querySelector('h1')
titulo.innerHTML= 'Hora del desafío'

function pulsarBoton(){
    console.log('El botón fue clicado');
}

 function clicPrompt(){
let clicPrompt = prompt ('nombra una ciudad de Brasil');
if (clicPrompt === 'Rio de Janeiro') 
    alert('estuve en Rio y me acode de ti')
}

function clicAlerta(){
    alert ('yo amo js')
}



function sumaDosNumeros(){
    let primerNumero = parseInt(prompt('Digite el primer numero'));
    let segunNumero = parseInt(prompt('Digite el segundo numero'));
    let resultado = primerNumero + segunNumero;
    alert(resultado)
}