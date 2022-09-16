export class Negociacao {

   constructor(
      private _data: Date,
      private _quantidade: number,
      private _valor: number
      ){}
      
   get data(): Date {
      return this._data
   }

   get quantidade(): number {
      return this._quantidade
   }

   get valor(): number {
      return this._valor
   }

   get volume(): number {
      return this._quantidade * this._valor;
   }

   public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao{
        //criamos essa expressão regular para selecionar as ocorrencias de "-"
        const exp = /-/g;
        // criamos essa constante para substituir o "-", por ","
        const date = new Date(dataString.replace(exp, ','));
        // aqui vamos converter para numero
        const quantidade = parseInt(quantidadeString)
        // aqui utilizamos o parseFloat pois pode haver decimais
        const valor = parseFloat(valorString)
        // agora pssamos todas essas variaveis pra dentro de negociação
        return new Negociacao(date, quantidade, valor);     
   }
}