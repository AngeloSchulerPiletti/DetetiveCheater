import {Jogo} from "./classes/Jogo.js";
import {Jogador} from "./classes/Jogador.js";

const partida = new Jogo();

const jogador1 = new Jogador(partida, [0,1,2,3,4,5,6,7,8,9]);
const jogador2 = new Jogador(partida);
const jogador3 = new Jogador(partida);

// jogador1.removendoPossivelCarta('arma', 7);
// jogador2.removendoPossivelCarta('arma', 7);
// jogador3.removendoPossivelCarta('arma', 7);


partida.checarCartasPossiveis();
partida.checarResultadoDasCartas();

