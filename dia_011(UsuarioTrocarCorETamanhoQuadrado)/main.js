// tudo o que esta escrito nesse document vai ser o que ele vai pegar do HTML
let box = document.querySelector('.box');

// aqui ele vai puxar do input, so faz isso sem classe se nao tiver mais de um input
let input = document.querySelector('input');

input.addEventListener('input', () => {

    box.style.borderRadius = input.value;

    box.style.background = input.value;

})