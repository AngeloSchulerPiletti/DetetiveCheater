import {Jogo} from "./Jogo.js";

export class Jogador {
    _id;
    get id() {
        return this._id;
    }

    cartas = {
        lugar: [],
        assassino: [],
        arma: [],
    };

    possiveisCartas = {
        lugar: [],
        assassino: [],
        arma: [],
    }


    constructor(partida, lugares = [], assassinos = [], armas = []) {
        this._id = Jogo.numeroDeJogadores;
        Jogo.numeroDeJogadores++;

        Jogo.jogadores.push(this);

        this.cartas.lugar = lugares;
        this.cartas.assassino = assassinos;
        this.cartas.arma = armas;

        this.possiveisCartas.lugar = partida.todasCartas.lugar.filter(n => !this.cartas.lugar.includes(n));
        this.possiveisCartas.assassino = partida.todasCartas.assassino.filter(n => !this.cartas.assassino.includes(n));
        this.possiveisCartas.arma = partida.todasCartas.arma.filter(n => !this.cartas.arma.includes(n));

    }


    adicionandoCarta(tipoDaCarta, carta) {
        this.cartas[tipoDaCarta].push(carta);
    }

    removendoPossivelCarta(tipoDaCarta, carta) {
        let pos =  this.possiveisCartas[tipoDaCarta].indexOf(carta);
        this.possiveisCartas[tipoDaCarta].splice(pos, 1);
    }
}