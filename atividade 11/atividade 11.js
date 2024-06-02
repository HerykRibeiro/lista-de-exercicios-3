let salario = document.querySelector("#salario")
let bResults = document.querySelector("#bResults");
let results1 = document.querySelector("#results1");
let results2 = document.querySelector("#results2");

function salarioComAjuste(){
    let salarioInformado = parseFloat(salario.value);
    let reajuste = salarioInformado * 0.15;
    results1.textContent = "O salário  com mais ajuste de 15% é de " + (reajuste + salarioInformado);
    let salarioComRedução =  (reajuste + salarioInformado) * (1 - 0.08);
    results2.textContent = "O salario após o reajuste com menos 8% é " + salarioComRedução ;
}

bResults.onclick = function(){
    salarioComAjuste();
}