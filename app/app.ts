// // sempre vamos utilizar em desenvolvimento a pasta App, e depois vamos converter para js
// import {Negociacao} from "./models/negociacao.js";

import { NegociacaoController } from "./controllers/negociacao-controller.js"

// // aqui basicamente importamos a classe Negociacao, criamos uma constante, demos a ela o new para uma nova negociação e passamos os paramentros que ela pede, data, quantidade e valor.
// const negociacao = new Negociacao (new Date(), 10, 100);
// console.log(negociacao.volume);

const controller = new NegociacaoController();

const form = document.querySelector('.form');
if (form){
    form.addEventListener('submit', event => {
        event.preventDefault()
        controller.adiciona();
    })
} else {
    throw Error('Não foi possivel inicializar a aplicação. Verifique se o form existe.')
}

// aqui declaramos as a classe NegociacoesView como uma const
// tambem declaramos a função template(), como const

// const negociacoesView = new NegociacoesView
// const template = negociacoesView.template()
// console.log(template)