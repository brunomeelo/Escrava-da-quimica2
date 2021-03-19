let inputVolume = document.getElementById("volume");
let inputMassa = document.getElementById("massa");
let inputMassamolar = document.getElementById("massamolar");

let resultado = document.getElementById("resultado");

function calcular(){

    let volume = inputVolume.value;
    let massa = inputMassa.value;
    let mmolar = inputMassamolar.value;
    let vvm = mmolar * volume;           

    let molaridade1 = massa / vvm;
    let molaridade = parseFloat(molaridade1.toFixed(3));
    console.log(molaridade)

    resultado.innerHTML = `<p>A Molaridade é = ${molaridade}</p>`







}