const textarea = document.querySelector('textarea');
const count = document.querySelector('.contador');

textarea.addEventListener('keyup', conta);

function conta() {

    const tamanho = textarea.value.length;
    count.innerText = `${tamanho}`;
}
