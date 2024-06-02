let prato = document.querySelector("#prato");
let bResults = document.querySelector("#bResults");
let h3results = document.querySelector("#h3results");

function preço1(){
    let priceKg = 12.00
    let peso = prato.value;
    let results = priceKg * peso;
    h3results.textContent = "O valor do prato é" + results + " dinheiros";
}

bResults.onclick = function(){
    preço1();
}