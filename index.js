import {Jogo} from "./classes/Jogo.js";
import {Jogador} from "./classes/Jogador.js";

const partida = new Jogo();

const jogador0 = new Jogador([0,1,2,3,4,5,6,7,8,9]);
const jogador1 = new Jogador();
const jogador2 = new Jogador();

jogador0.removendoPossivelCarta('arma', 7);
jogador1.removendoPossivelCarta('arma', 7);
jogador2.removendoPossivelCarta('arma', 7);


Jogo.checarCartasPossiveis();
Jogo.checarResultadoDasCartas();

