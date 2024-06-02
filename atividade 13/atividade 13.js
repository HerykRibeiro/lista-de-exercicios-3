let diametro = document.querySelector("#diametro");
let bRaio = document.querySelector("#bRaio");
let h3results = document.querySelector("#h3results");

function Pizza(){
    let diametroPizza = diametro.value;
    let results = diametroPizza / 2;
    h3results.textContent = "O raio da pizza é de " + results + " centímetros"
}

bRaio.onclick = function(){
    Pizza();
}