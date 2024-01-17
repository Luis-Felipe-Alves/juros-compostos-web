
let valorUsado = 1025;
let valorInicial = valorUsado;
let juros = 0.23; // REPRESENTE O VALOR DO JUROS SEM A NOTAÇÃO DE PORCENTAGEM!
let jp = juros/100;
let iterador = 1;
let dias = 5;

console.log(`0.23% de ${valorUsado} é ${parseFloat(jp*valorInicial)}`)

while(iterador <= dias){
    valorUsado += jp*valorUsado;
    let diferenca = valorUsado - valorInicial;
    console.log(`A dívida do ${iterador}º dia é R$${parseFloat(diferenca).toFixed(2)}.`);
    console.log(`O valor atual com a correção é ${parseFloat(valorUsado).toFixed(2)}.`);
    iterador++;
}

let valorPago = valorUsado - valorInicial
console.log(`O valor a ser pago será R$ ${parseFloat(valorPago).toFixed(2)}.`);
