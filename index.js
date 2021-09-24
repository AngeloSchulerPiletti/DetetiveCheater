import {Jogo} from "./Jogo.js";
import {Jogador} from "./Jogador.js";

const partida = new Jogo();

const jogador1 = new Jogador(partida);
const jogador2 = new Jogador(partida);
const jogador3 = new Jogador(partida);

jogador1.removendoPossivelCarta('arma', 7);

jogador2.removendoPossivelCarta('arma', 7);

jogador3.removendoPossivelCarta('arma', 7);


partida.checarCartasPossiveis([jogador1, jogador2, jogador3]);
partida.checarResultadoDasCartas([jogador1, jogador2, jogador3]);

