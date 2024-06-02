let quantosCavalos = document.querySelector("#quantosCavalos");
let bVerificar = document.querySelector("#bVerificar");
let h3Results = document.querySelector("#h3Results");

function calcularFerraduras(){
    let qtCavalos = quantosCavalos.value
   
   
    let resultados = qtCavalos * 4
    h3Results.textContent = "o total de ferraduras sao" + resultados;
}

bVerificar.onclick = function(){
    calcularFerraduras()
}