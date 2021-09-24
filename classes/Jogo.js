import { Jogador } from "./Jogador.js";

export class Jogo {
    static numeroDeJogadores = 0;

    static jogadores = [];

    static tiposDeCartas = ['lugar', 'assassino', 'arma'];

    static todasCartas = {
        lugar: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        assassino: [0, 1, 2, 3, 4, 5, 6, 7],
        arma: [0, 1, 2, 3, 4, 5, 6, 7],
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

    static checarCartasPossiveis() {
        Object.keys(Jogo.todasCartas).forEach(tipoDaCarta => {
            var result;
            var todasCartasDeUmTipo = Jogo.todasCartas[tipoDaCarta];

            todasCartasDeUmTipo.filter(carta => {
                var cartaCounter = 0;
                var player;
                Jogo.jogadores.forEach(jogador => {
                    if (jogador.possiveisCartas[tipoDaCarta].includes(carta)) {
                        cartaCounter++;
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
            })
        });
    }

    static checarResultadoDasCartas() {
        Jogo.adicionaTodasCartasDeTodosJogadores();

        Object.keys(Jogo.todasCartas).forEach(tipoDaCarta => {
            if (Jogo.cartasPegas[tipoDaCarta].length == (Jogo.todasCartas[tipoDaCarta].length - 1)) {
                console.log(`Encontramos o ${tipoDaCarta}!`);
                console.log(Jogo.cartasPegas[tipoDaCarta], Jogo.todasCartas[tipoDaCarta]);
                console.log(`O ${tipoDaCarta} é: ${Jogo.todasCartas[tipoDaCarta].filter(carta => !Jogo.cartasPegas[tipoDaCarta].includes(carta))}`);
            }
            console.log(Jogo.cartasPegas[tipoDaCarta]);
            console.log(`${Jogo.cartasPegas[tipoDaCarta].length} cartas pegas e ${Jogo.todasCartas[tipoDaCarta].length} cartas no total para ${tipoDaCarta}`);
        });

    }

    static adicionaTodasCartasDeTodosJogadores() {
        var cartasPegasPelosJogadores = {lugar: [], assassino: [], arma: []};
        Jogo.tiposDeCartas.forEach(tipoDaCarta => {
            Jogo.jogadores.forEach(jogador => {
                cartasPegasPelosJogadores[tipoDaCarta] = [...jogador.cartas[tipoDaCarta], ...cartasPegasPelosJogadores[tipoDaCarta]];
            });
        });
        Jogo.cartasPegas = cartasPegasPelosJogadores;
    }

    static adicionaTodasCartasDeUmJogador(jogador){
        Object.keys(Jogo.cartasPegas).forEach(tipoDaCarta => {
            Jogo.cartasPegas[tipoDaCarta] = [...jogador.cartas[tipoDaCarta], ...Jogo.cartasPegas[tipoDaCarta]];
        });
    }

    static adicionaCartasTipadaDeUmJogador(jogador, tipoDaCarta){
        Jogo.cartasPegas[tipoDaCarta] = [...jogador.cartas[tipoDaCarta], ...Jogo.cartasPegas[tipoDaCarta]];
    }

    static checaSeCartaJaFoiPega(tipoDaCarta, carta){
        var result = false;
        Jogo.cartasPegas[tipoDaCarta].forEach(cartaPega => {
            console.log(`Carta pega: ${cartaPega}, carta: ${carta}`);
            if(carta == cartaPega){
                result = true;
            }
        });
        return result;
    }
}