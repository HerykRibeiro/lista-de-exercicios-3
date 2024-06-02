let Total = document.querySelector("#Total");
let bResults = document.querySelector("#bresults");
let results1 = document.querySelector("#results1");

function Conta(){
    let v1 = Total.value;
    let Andre = parseInt(v1 / 3);
    let Carlos = parseInt(v1 / 3);
    let Felipe = v1 - (Andre + Carlos);
    results1.textContent = "André deverá pagar " + Andre + ". " + "Carlos vai pagar " + Carlos + ". " +
    "Felipe vai pagar " + Felipe + ".";
}

bResults.onclick = function(){
    Conta();
}