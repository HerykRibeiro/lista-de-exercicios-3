let Acidentes = document.querySelector("#Acidentes");
let btResults = document.querySelector("#bResults");
let h3results1 = document.querySelector("#h3results1");
let h3results2 = document.querySelector("#h3results2");
let h3results3 = document.querySelector("#h3results3");


function conversaoDeDias(){
    let dayAcidentes = Acidentes.value;
    let resultsAnos = dayAcidentes/ 365;
    let resultsMeses = dayAcidentes / 30;
    let resultsDias = dayAcidentes / 24;
    h3results1.textContent = "O número de dias sem acidentes, quando convertido em anos, é de " + resultsAnos + " anos";
    h3results2.textContent = "A quantidade de dias sem acidentes, quando convertida em meses, é de. " + resultsMeses + " meses";
    h3results3.textContent = "O total de dias sem acidentes, quando expresso em anos, é de" + resultsDias + " dias";
}

bResults.onclick = function(){
    conversaoDeDias();
}