let mes = document.querySelector("#Mounth");
let dia = document.querySelector("#Day");
let bResults = document.querySelector("#bResults");
let h3results = document.querySelector("#h3results");

function daysGone(){
    let daysOfMounth = 30; 
    let conta = daysOfMounth
    let dayMounth = Day.value;
    let numberMounth = Mounth.value;
    let results =  dayMounth + numberMounth * 30
    h3results.textContent = "A quantidade de dias que já passaram é" + results;
}

bResults.onclick = function(){
    daysGone();
}
    