
//PARTE DOS CÁLCULOS:

const botaoCalcular = document.querySelector('#botaoCalcular');
botaoCalcular.addEventListener('click', calcular);

function calcular(){

    let valorInicial = Number(document.querySelector('#valorInicial').value);
    let referencia = valorInicial;
    let juros = Number(document.querySelector('#juros').value);
    const porcent = juros/100;
    let dias = Number(document.querySelector('#dias').value);

    let iterador = 1;

    let string = document.querySelector('#string');
    let segundaString = document.querySelector('#segundaString');

    string.textContent = '';
    segundaString.textContent = '';

    while(iterador <= dias){

        valorInicial += (porcent*valorInicial);
        let dif = valorInicial - referencia;
        string.innerHTML += ` A dívida do ${iterador}º dia é R$${((dif).toFixed(2))}. </br>`
        
        console.log(`A porcentagem é ${porcent}.`);
        console.log(`O valor inicial é ${(valorInicial).toFixed(2)}.`);
        console.log(`A diferença é ${(dif).toFixed(2)}.`);
        console.log(`A referencia é ${referencia}.`);
        
        iterador++;
    }

    segundaString.innerHTML = `O valor final a ser pago será R$ ${parseFloat(valorInicial - referencia).toFixed(2)}. </br>`
}
