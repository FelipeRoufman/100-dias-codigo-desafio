const prompt = require('prompt-sync')()

let n = Number(prompt('Me diga qual numero voce quer verificar se é par ou impa: '))

if (n % 2 === 0) {
    console.log(`${n} é um número par.`);
  } else {
    console.log(`${n} é um número ímpar.`);
  }