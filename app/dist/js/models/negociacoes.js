export class Negociacoes {
    constructor() {
        this.negocicacoes = [];
    }
    adiciona(negociacao) {
        this.negocicacoes.push(negociacao);
    }
    lista() {
        return this.negocicacoes;
    }
}
