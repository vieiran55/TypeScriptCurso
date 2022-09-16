// definimos viw como uma class abstrata,
// podemos colocar qualquer letra, pois qm vai definir isso vai ser a filha
// nao vai ser possivel criar um new atraves do classe view

export abstract class View<T>{

    protected elemento: HTMLElement;

    private escapar: boolean = false;

    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLInputElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM`)
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }


        // criamos o update para trabalhar por debaixo dos panos
        public update(model: T): void {
            let template = this.template(model)
            if (this.escapar){
                // vamos criar uma expressão regular para capturar o a tag script
                template = template.replace(/<script>[\s\S]*?<\/script>/,'')
            }
            this.elemento.innerHTML = template;
        }

            // aqui criamos template para retornar o elemento do DOM
            //colocamos abstrato no modulo forçando as filhas a criarem o metodo abstract template
   protected abstract template(model: T): string
}