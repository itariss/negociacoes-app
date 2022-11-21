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
    paraTexto() {
        return JSON.stringify(this.negocicacoes, null, 2);
    }
    ehIgual(negociacoes) {
        return (JSON.stringify(this.negocicacoes) === JSON.stringify(negociacoes));
    }
}
//# sourceMappingURL=negociacoes.js.map