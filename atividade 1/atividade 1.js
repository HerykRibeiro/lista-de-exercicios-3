let med1 = document.querySelector("#med1");
let med2 = document.querySelector("#med2");
let bCalculo = document.querySelector("#bCalculo");
let h3Result = document.querySelector("#h3Result");

function calculos(){
    let md1 = med1.value;
    let md2 = med2.value;
    
    
    let result = (md1 * 2) + (md2 *2);
    h3Result.textContent = "o terreno tem uma area de " + result;
}

bCalculo.onclick = function(){
    calculos()
}