import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    // aqui declaramos o tipo dos inputs como HTML, eles não devem receber do tipo any.
    // declaramos como HTMLHTMLInputElement pq não sabemos qual vai ser o tipo de dados que irá chegar, isso é função do construtor
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    // aqui vamos pegar inserir no array negoiaçoes
    private negociacoes: Negociacoes = new Negociacoes();
    // aqui vamos criar um input para onegociacoesView
    // ele espera um argumento, que no caso será o id do elemento do DOM
    private negociacoesView = new NegociacoesView('#negociacoesView', true);
    private mensagemView = new MensagemView('#mensagemView', false)
    private readonly DOMINGO = 0;
    private readonly SABADO = 6;

    constructor () {
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        // aqui passamos o negociacoes como parametro pq será dele que pegaremos as informações
        this.negociacoesView.update(this.negociacoes);
    }

    // 
    public adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        )
        // const negociacao = this.criaNegociacao();
        //logica para verificar se é dia util
        if (!this.ehDiaUtil(negociacao.data)){
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas')
            return;
        }
        // aqui dentro do metodo adicona, vamos inserir de fato dentro do array
        this.negociacoes.adiciona(negociacao);
        // após adicionar  a negociação
        //colocar ao final o metodo this.limparFormulario
        this.limparFormulario()
        this.atualizaView()
    }

    private ehDiaUtil(data: Date){
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }

    // aqi criamos um metodo para limpar o formulario
    private limparFormulario():void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        //metodo para dar foco
        this.inputData.focus();
    }

    private atualizaView(): void{
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso.')
    }
}