import {Jogo} from "./classes/Jogo.js";
import {Jogador} from "./classes/Jogador.js";

import { checkCheckboxInputs } from "./helpers/validateInputs.js";

new Jogo();

var criarJogadoresBtn = document.querySelector('#criar_jogadores_btn');
criarJogadoresBtn.addEventListener('click', function(){
    console.log("clicado");
    console.log(checkCheckboxInputs('lugar'));
});

// const jogador0 = new Jogador([0,1,2,3]);
// const jogador1 = new Jogador();
// const jogador2 = new Jogador();


// console.log(jogador0);
// console.log(jogador1);
// console.log(jogador2);

