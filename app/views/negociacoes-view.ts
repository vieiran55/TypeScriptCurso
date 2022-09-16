import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

// como falado no view, a classe filha que vai declarar qual será o tipo, aqui será Negociações
export class NegociacoesView extends View<Negociacoes>{

    // private elemento: HTMLElement;
    // constructor(seletor: string) {
    // this.elemento = document.querySelector(seletor)
    // }

    // criou uma função e colocou o tipo
    // criamos o parametro model que vai receber as informações de Negociacoes
        // declarando abstrat, se torna obrigatorio a declaração de uma template
    protected template(model: Negociacoes): string {
        // return é obrigatorio, entao nesse return colocou html
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao => {
                    return `
                        <tr>
                            <td>${this.formatar(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
        `;
    }

    private formatar(data: Date): string{
        return new Intl.DateTimeFormat().format(data)
    }

    // aqui utilizaremos a função update para renderizar na tela o que será passado no template
    // dentro de update tambem passamos como modelo oque foi inromado em negociações
    // update(model: Negociacoes): void{
    //     // colocamos dentro de template o parametro model
    //     const template = this.template(model)
    //     this.elemento.innerHTML = template
    // }
}