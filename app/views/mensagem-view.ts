// como faço pra criar uma view

import { View } from "./view.js";

//1 - criar e exportar uma classa
// como falado no view, a classe filha que vai declarar qual será o tipo, aqui será uma strings
export class MensagemView extends View<string> {

    // private elemento: HTMLElement
    // constructor(seletor: string){
    //     this.elemento = document.querySelector(seletor);
    // }

    // aqui criamos template para retornar o elemento do DOM
    // declarando abstrat, se torna obrigatorio a declaração de uma template
    protected template(model: string): string {
        return `
            <p class="alert alert-info">${model}</p>
        `
    }
}