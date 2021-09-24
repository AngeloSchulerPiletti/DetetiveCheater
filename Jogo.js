import { Jogador } from "./Jogador.js";

export class Jogo {
    static numeroDeJogadores = 0;
    get numeroDeJogadores() {
        return Jogo.numeroDeJogadores;
    }

    _todasCartas = {
        lugar: [],
        assassino: [],
        arma: [],
    }
    get todasCartas() {
        return this._todasCartas;
    }

    cartasPegas = {
        lugar: [],
        assassino: [],
        arma: [],
    }

    constructor(lugares = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], assassinos = [0, 1, 2, 3, 4, 5, 6, 7], armas = [0, 1, 2, 3, 4, 5, 6, 7]) {
        this.todasCartas.lugar = lugares;
        this.todasCartas.assassino = assassinos;
        this.todasCartas.arma = armas;
    }

    checarCartasPossiveis(arrJogadores) {
        Object.keys(this.todasCartas).forEach(tipoDaCarta => {
            var result;
            var todasCartasDeUmTipo = this.todasCartas[tipoDaCarta];

            console.log(`${todasCartasDeUmTipo.filter(carta => {
                var cartaCounter = 0;
                arrJogadores.forEach(jogador => {
                    if(jogador.possiveisCartas[tipoDaCarta].includes(carta)){
                        cartaCounter ++;
                    }
                });
                switch (cartaCounter) {
                    case 0:
                        console.log(`Para o tipo ${tipoDaCarta}, a carta ${carta} é a resposta!`);    
                        break;
                
                    case 1:
                        console.log(`A carta ${carta}, ainda está no jogo!`);
                        break;
                    default:
                        break;
                }
            })}`);
            console.log('\n\n\n\n');

        });
    }

    checarResultadoDasCartas(arrJogadores) {
        Object.keys(this.cartasPegas).forEach(tipoDaCarta => {
            arrJogadores.forEach(jogador => {
                // console.log(`cartas ${tipoDaCarta} do jogador ${jogador.id}: ${jogador.cartas[tipoDaCarta]}`);
                this.cartasPegas[tipoDaCarta] = [...jogador.cartas[tipoDaCarta], ...this.cartasPegas[tipoDaCarta]];
                // console.log(`Resultado das cartas ${tipoDaCarta} pegas: ${this.cartasPegas[tipoDaCarta].length} \n\n`);
            });
        });

        // console.log('\n\n\n\n\n');

        Object.keys(this.todasCartas).forEach(tipoDaCarta => {
            if (this.cartasPegas[tipoDaCarta].length == (this.todasCartas[tipoDaCarta].length - 1)) {
                console.log(`Encontramos o ${tipoDaCarta}!`);
                console.log(this.cartasPegas[tipoDaCarta], this.todasCartas[tipoDaCarta]);
                console.log(`O ${tipoDaCarta} é: ${this.todasCartas[tipoDaCarta].filter(carta => !this.cartasPegas[tipoDaCarta].includes(carta))}`);
            }
            console.log(`${this.cartasPegas[tipoDaCarta].length} cartas pegas e ${this.todasCartas[tipoDaCarta].length} cartas no total para ${tipoDaCarta}`);
        });

    }
}