import { Negociacao } from "./negociacao.js";

// aqui vamos criar um array para receber as informações
export class Negociacoes {
    // declamramos como privado e dammos o tipo Array, mas nao qualquer arrray, Array que virá de Negociacao
    private negociacoes: Array<Negociacao> = [];
    
    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    // aqui vamos colocar o metodo ReadonlyArray, que é  bem parecido com array, a diferença é que ele naotem propriedades qe podem altera-lo
    public lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}