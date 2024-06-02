let priceGasoline = document.querySelector("#priceGasoline");
let valor1 = document.querySelector("#valor1");
let bResults = document.querySelector("#bResults");
let h3results = document.querySelector("#h3results");

function gasoline(){
    let valueGasoline = priceGasoline.value;
    let valor2 = valor1.value;
    let results =  valor2 / valueGasoline;
    h3results.textContent = "Com o dinheiro que você possui, poderá abastecer " + results + " litros";
}

bResults.onclick = function(){
    gasoline();
}