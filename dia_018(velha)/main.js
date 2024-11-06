let bloco = document.querySelectorAll("td"); 
let msg = document.querySelectorAll("p");
let reset = document.querySelectorAll("button");
let jogada = "O"; 

bloco.forEach(casa => {
    casa.addEventListener('click', event => {
        if (casa.innerText === "" && jogada === "O") { 
            casa.innerText = jogada; 
            jogada = "X"; 
            msg[0].innerText = `Próximo a jogar: ${jogada}`;
            verificaGanhador(); 

            if (jogada === "X") {
                setTimeout(jogadaIA, 500); 
            }
        }
    });
});

reset[0].addEventListener('click', event => {
    bloco.forEach(casa => {
        casa.innerHTML = "";
    });
    jogada = "O";
    msg[0].innerHTML = `Próximo Jogador: ${jogada}`;
});

function verificaGanhador() {
  
    const combinacoesVitoria = [
        [0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]
    ];

    let vencedor = null;
    for (let combinacao of combinacoesVitoria) {
        const [a, b, c] = combinacao;
        if (bloco[a].innerText !== "" && bloco[a].innerText === bloco[b].innerText && bloco[a].innerText === bloco[c].innerText) {
            vencedor = bloco[a].innerText;
            break;
        }
    }

    if (vencedor) {
        msg[0].innerHTML = `<h1>-JOGADOR ${vencedor}-\nVITORIOSO!</h1>`;
        return;
    }

    let todasPreenchidas = Array.from(bloco).every(casa => casa.innerText !== "");
    if (todasPreenchidas) {
        msg[0].innerHTML = "<h1>EITA</h1>";
    }
}

function jogadaIA() {
    let casasVazias = [];
    for (let i = 0; i < bloco.length; i++) {
        if (bloco[i].innerText === "") {
            casasVazias.push(i); 
        }
    }

    if (casasVazias.length > 0) {
        let indiceAleatorio = casasVazias[Math.floor(Math.random() * casasVazias.length)];
        bloco[indiceAleatorio].innerText = "X"; 
        jogada = "O"; 
        msg[0].innerText = `Próximo a jogar: ${jogada}`;
        verificaGanhador(); 
    }
}
