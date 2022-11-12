export class Negociacoes {
    constructor() {
        // Alternativa: private negociacoes: Negociacao[];
        this.negocicacoes = [];
    }
    adiciona(negociacao) {
        this.negocicacoes.push(negociacao);
    }
    //Alternativa lista(): readonly Negociacao[] {}
    lista() {
        return this.negocicacoes;
    }
}
