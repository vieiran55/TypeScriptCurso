// aqui vamos criar um array para receber as informações
export class Negociacoes {
    constructor() {
        // declamramos como privado e dammos o tipo Array, mas nao qualquer arrray, Array que virá de Negociacao
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // aqui vamos colocar o metodo ReadonlyArray, que é  bem parecido com array, a diferença é que ele naotem propriedades qe podem altera-lo
    lista() {
        return this.negociacoes;
    }
}
