// // sempre vamos utilizar em desenvolvimento a pasta App, e depois vamos converter para js
// import {Negociacao} from "./models/negociacao.js";
import { NegociacaoController } from "./controllers/negociacao-controller.js";
// // aqui basicamente importamos a classe Negociacao, criamos uma constante, demos a ela o new para uma nova negociação e passamos os paramentros que ela pede, data, quantidade e valor.
// const negociacao = new Negociacao (new Date(), 10, 100);
// console.log(negociacao.volume);
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
