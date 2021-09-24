import { Jogo } from "./classes/Jogo.js";
import { Jogador } from "./classes/Jogador.js";

import { checkCheckboxInputs, checkNumeroDeAdversarios } from "./helpers/validateInputs.js";

new Jogo();

var criarJogadoresBtn = document.querySelector('#criar_jogadores_btn');
criarJogadoresBtn.addEventListener('click', function () {
    console.log("clicado");

    var skipOff = false;
    var listaCartasJogador1 = [];
    Jogo.tiposDeCartas.forEach(tipoDaCarta => {
        if(!checkCheckboxInputs(tipoDaCarta)){ 
            skipOff = true;
        } 
        listaCartasJogador1.push(checkCheckboxInputs(tipoDaCarta));
    });

    if(skipOff) return;

    var numeroDeAdversarios = checkNumeroDeAdversarios('adversarios');
    if(!numeroDeAdversarios) return;

    var listaJogadores = [];
    for (let i = 0; i <= numeroDeAdversarios; i++) {
        switch (i) {
            case 0:
                listaJogadores.push(new Jogador(listaCartasJogador1[0], listaCartasJogador1[1], listaCartasJogador1[2]));
                break;

            default:
                listaJogadores.push(new Jogador());
                break;
        }
    }

    Jogo.jogadores.forEach(jogador => {
        console.log(jogador);
    });
});


// const jogador0 = new Jogador([0,1,2,3]);
// const jogador1 = new Jogador();
// const jogador2 = new Jogador();


// console.log(jogador0);
// console.log(jogador1);
// console.log(jogador2);

