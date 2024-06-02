let qtPao = document.querySelector("#qtPao");
let qtBroa = document.querySelector("#qtBroa");
let bResult = document.querySelector("#bResult");
let h3Resultad = document.querySelector("#h3Resultad");
let h3Resultad2 = document.querySelector("#h3Resultad2");

function quantias(){
    let paozinho = qtPao.value;
    let broa = qtBroa.value;
    let contaFrances = paozinho * 0.12;
   let contabroa = broa * 1.50
    h3Resultad.textContent = "total de vendas em reias" + (contabroa + contaFrances);
    
    let contaDep = (contabroa + contaFrances) /10;
    h3Resultad2.textContent = "a quantia a depositar e" + (contaDep);

    
}

bResult.onclick = function(){
    quantias()
}