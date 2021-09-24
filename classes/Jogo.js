import { Jogador } from "./Jogador.js";

export class Jogo {
    static numeroDeJogadores = 0;

    static jogadores = [];


    static todasCartas = {
        lugar: [],
        assassino: [],
        arma: [],
    }

    static cartasPegas = {
        lugar: [],
        assassino: [],
        arma: [],
    }

    static cartasResposta = {
        lugar: [],
        assassino: [],
        arma: [],
    }

    constructor(lugares = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], assassinos = [0, 1, 2, 3, 4, 5, 6, 7], armas = [0, 1, 2, 3, 4, 5, 6, 7]) {
        Jogo.todasCartas.lugar = lugares;
        Jogo.todasCartas.assassino = assassinos;
        Jogo.todasCartas.arma = armas;
    }

    static checarCartasPossiveis() {
        Object.keys(Jogo.todasCartas).forEach(tipoDaCarta => {
            var result;
            var todasCartasDeUmTipo = Jogo.todasCartas[tipoDaCarta];

            console.log(`${todasCartasDeUmTipo.filter(carta => {
                var cartaCounter = 0;
                var player;
                Jogo.jogadores.forEach(jogador => {
                    if(jogador.possiveisCartas[tipoDaCarta].includes(carta)){
                        cartaCounter ++;
                        player = jogador;
                    }
                });
                switch (cartaCounter) {
                    case 0:
                        console.log(`Para o tipo ${tipoDaCarta}, a carta ${carta} é a resposta!`);    
                        break;
                
                    case 1:
                        console.log(`A carta ${carta}, só pode estar com ${player.id} ou ser a resposta!`);
                        break;
                    default:
                        break;
                }
            })}`);
            console.log('\n\n\n\n');

        });
    }

    static checarResultadoDasCartas() {
        Object.keys(Jogo.cartasPegas).forEach(tipoDaCarta => {
            Jogo.jogadores.forEach(jogador => {
                // console.log(`cartas ${tipoDaCarta} do jogador ${jogador.id}: ${jogador.cartas[tipoDaCarta]}`);
                Jogo.cartasPegas[tipoDaCarta] = [...jogador.cartas[tipoDaCarta], ...Jogo.cartasPegas[tipoDaCarta]];
                // console.log(`Resultado das cartas ${tipoDaCarta} pegas: ${Jogo.cartasPegas[tipoDaCarta].length} \n\n`);
            });
        });

        // console.log('\n\n\n\n\n');

        Object.keys(Jogo.todasCartas).forEach(tipoDaCarta => {
            if (Jogo.cartasPegas[tipoDaCarta].length == (Jogo.todasCartas[tipoDaCarta].length - 1)) {
                console.log(`Encontramos o ${tipoDaCarta}!`);
                console.log(Jogo.cartasPegas[tipoDaCarta], Jogo.todasCartas[tipoDaCarta]);
                console.log(`O ${tipoDaCarta} é: ${Jogo.todasCartas[tipoDaCarta].filter(carta => !Jogo.cartasPegas[tipoDaCarta].includes(carta))}`);
            }
            console.log(`${Jogo.cartasPegas[tipoDaCarta].length} cartas pegas e ${Jogo.todasCartas[tipoDaCarta].length} cartas no total para ${tipoDaCarta}`);
        });

    }
}