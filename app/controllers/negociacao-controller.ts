import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
    // aqui declaramos o tipo dos inputs como HTML, eles não devem receber do tipo any.
    // declaramos como HTMLHTMLInputElement pq não sabemos qual vai ser o tipo de dados que irá chegar, isso é função do construtor
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    // aqui vamos pegar inserir no array negoiaçoes
    private negociacoes: Negociacoes = new Negociacoes();

    constructor () {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    // 
    adiciona(): void {
        const negociacao = this.criaNegociacao();
        // aqui dentro do metodo adicona, vamos inserir de fato dentro do array
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista())
        //colocar ao final o metodo this.limparFormulario
        this.limparFormulario()
    }
    
    criaNegociacao(): Negociacao{
        //criamos essa expressão regular para selecionar as ocorrencias de "-"
        const exp = /-/g;
        // criamos essa constante para substituir o "-", por ","
        const date = new Date(this.inputData.value.replace(exp, ','));
        // aqui vamos converter para numero
        const quantidade = parseInt(this.inputQuantidade.value)
        // aqui utilizamos o parseFloat pois pode haver decimais
        const valor = parseFloat(this.inputValor.value)
        // agora pssamos todas essas variaveis pra dentro de negociação
        return new Negociacao(date, quantidade, valor);        
    }

    // aqi criamos um metodo para limpar o formulario
    limparFormulario():void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        //metodo para dar foco
        this.inputData.focus();
    }
}