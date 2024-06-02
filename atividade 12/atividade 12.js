let Centena = document.querySelector("#Centena");
let Dezena = document.querySelector("#Dezena");
let Unidade = document.querySelector("#Unidade");
let bresults = document.querySelector("#bresults");
let h3results = document.querySelector("#h3results");
let h3results2 = document.querySelector("#h3results2");

function contas(){
    let centenaa = Centena.value;
    let dezenaa = Dezena.value;
    let unidadee = Unidade.value;
    let results = centenaa + dezenaa + unidadee;
    h3results.textContent = "O número inteiro é  " + results; 
    h3results2.textContent = "A quantia de centenas é " + centenaa + "." + " A quantia de dezenas é " + dezenaa + "." +
    " A quantia de unidades é " + unidadee;
}

bresults.onclick = function(){
    contas();
}