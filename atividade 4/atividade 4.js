
let name1 = document.querySelector("#name1");
let idadePessoa = document.querySelector("#idade1")
let btResultado = document.querySelector("#bResults");
let h3Resultado = document.querySelector("#h3Results");

function tempo(){
    let nome1 = name1.value;
    let idadeee1 = idade1.value;
    let results = idade1 * 365;
    h3Results.textContent = nome1 + "," + " você já viveu " + results + " dias";
}

bResults.onclick = function(){
    tempo   ();
}