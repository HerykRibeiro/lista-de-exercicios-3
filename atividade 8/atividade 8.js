let Pequena = document.querySelector("#Pequena")
let Media = document.querySelector("#Media");
let Grande = document.querySelector("#Grande");
let bResults = document.querySelector("#bResults");
let h3results = document.querySelector("#h3results")

function Arrecadação(){
    let precoPequena = 10
    let precoMedia = 12
    let precoGrande = 15

    let camisaPequena = Pequena.value;
    let camisaMedia = Media.value;
    let camisaGrande = Grande.value;

    let arrecadado = precoPequena * camisaPequena + Media * camisaMedia + Grande * camisaGrande;
    h3results.textContent = "O valor arrecadado com as vendas é" + arrecadado;
}

bResults.onclick = function(){
    Arrecadação();
}