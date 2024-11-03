// aqui a gente vai criar algo para deixar o site atualizando

// aqui  a cada 1000 milisegundos ele vai atualizar a funçao  relogio
setInterval(relogio,1000);


// aqui a gente vai fazer um codigo para puxar o relogio do jogo

function relogio(){

    var data = new Date();
    var horas = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();

    if(horas < 10){

        horas = "0" + horas; 
    }

    if(minutos < 10){

        minutos = "0" + minutos; 
    }

    if(segundos < 10){

        segundos = "0" + segundos; 
    }

    var relogioDigital = horas + ":" + minutos + ":" + segundos;

    document.getElementById("clock").innerHTML = relogioDigital


}

relogio();