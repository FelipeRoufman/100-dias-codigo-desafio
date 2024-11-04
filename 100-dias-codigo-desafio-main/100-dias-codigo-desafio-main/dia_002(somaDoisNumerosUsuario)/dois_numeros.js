const prompt = require('prompt-sync')()

let n1 = Number(prompt('Me diga o primeiro numero: '))
let n2 = Number(prompt('Me diga o segundo numero: '))

n1 += n2

console.log(`O resutado da soma deles dois é ${n1}`)