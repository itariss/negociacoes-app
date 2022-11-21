import { Printable } from "../utils/printable.js";
export class Negociacoes extends Printable {
    constructor() {
        super(...arguments);
        this.negocicacoes = [];
    }
    adiciona(negociacao) {
        this.negocicacoes.push(negociacao);
    }
    lista() {
        return this.negocicacoes;
    }
    paraTexto() {
        return JSON.stringify(this.negocicacoes, null, 2);
    }
}
