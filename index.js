import { Jogo } from "./classes/Jogo.js";
import { Jogador } from "./classes/Jogador.js";

import { checkCheckboxInputs, checkNumeroDeAdversarios } from "./helpers/validateInputs.js";

new Jogo();

var criarJogadoresBtn = document.querySelector('#criar_jogadores_btn');
criarJogadoresBtn.addEventListener('click', function () {
    console.log("clicado");

    var skipOff = false;
    var listaCartasJogador1 = {lugar: [], assassino: [], arma: []};
    Jogo.tiposDeCartas.forEach(tipoDaCarta => {
        if(!checkCheckboxInputs(tipoDaCarta)){ 
            skipOff = true;
        } 
        listaCartasJogador1[tipoDaCarta] = checkCheckboxInputs(tipoDaCarta);
    });

    if(skipOff) return;

    var numeroDeAdversarios = checkNumeroDeAdversarios('adversarios');
    if(!numeroDeAdversarios) return;

    var listaJogadores = [];
    for (let i = 0; i <= numeroDeAdversarios; i++) {
        switch (i) {
            case 0:
                listaJogadores.push(new Jogador(listaCartasJogador1.lugar, listaCartasJogador1.assassino, listaCartasJogador1.arma));
                break;

            default:
                listaJogadores.push(new Jogador());
                break;
        }
    }

    Jogo.jogadores.forEach(jogador => {
        console.log(jogador);
    });

    var section1 = document.querySelector('#sec1');
    section1.style.display = "none";
    var section2 = document.querySelector('#sec2'),
    formOutrosJogadores = document.querySelector('#form_outros_jogadores');

    section2.style.display = "block";
    var inputs = {
        adversarios: formOutrosJogadores.querySelector('#adversarios2'), 
        tipoDaCarta: formOutrosJogadores.querySelector('#tipodacarta2'), 
        carta: formOutrosJogadores.querySelector('#carta2')
    };

});


// const jogador0 = new Jogador([0,1,2,3]);
// const jogador1 = new Jogador();
// const jogador2 = new Jogador();


// console.log(jogador0);
// console.log(jogador1);
// console.log(jogador2);

