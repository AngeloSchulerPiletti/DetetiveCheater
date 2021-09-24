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


    constructor( lugares = [], assassinos = [], armas = []) {
        this._id = Jogo.numeroDeJogadores;
        Jogo.numeroDeJogadores++;

        Jogo.jogadores.push(this);

        this.cartas.lugar = lugares;
        this.cartas.assassino = assassinos;
        this.cartas.arma = armas;

        this.possiveisCartas.lugar = Jogo.todasCartas.lugar.filter(n => !this.cartas.lugar.includes(n));
        this.possiveisCartas.assassino = Jogo.todasCartas.assassino.filter(n => !this.cartas.assassino.includes(n));
        this.possiveisCartas.arma = Jogo.todasCartas.arma.filter(n => !this.cartas.arma.includes(n));

    }

    adicionandoCarta(tipoDaCarta, carta) {
        this.cartas[tipoDaCarta].push(carta);
        console.log(`Carta ${carta} adicionada em ${tipoDaCarta} no jogador ${this.id}`);
        Jogo.adicionaCartasTipadaDeUmJogador(this, tipoDaCarta);
    }

    removendoPossivelCarta(tipoDaCarta, carta) {
        let pos =  this.possiveisCartas[tipoDaCarta].indexOf(carta);
        this.possiveisCartas[tipoDaCarta].splice(pos, 1);
    }
}