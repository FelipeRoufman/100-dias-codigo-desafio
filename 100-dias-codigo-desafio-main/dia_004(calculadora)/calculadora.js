const prompt = require('prompt-sync')()

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

let opera = parseInt(prompt("Me diga qual operaçao quer se feita\n1. Somar\n2. Subtruir\n3. Multiplicacao\n4. Divisao\n"));

switch(opera){

    case 1:
        let soma = num1 + num2;
        console.log("Soma: " + soma);
        break;
    case 2:
        let subtracao = num1 - num2;
        console.log("Subtração: " + subtracao);
        break;
    case 3:
        let multiplicacao = num1 * num2;
        console.log("Multiplicação: " + multiplicacao);
        break;
    case 4:
        let divisao = num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero!";
        console.log("Divisão: " + divisao);
        break;
    default:
        console.log("Numero invalido para as operacoes\n");

}

