import { Negociacao } from "./negociacao.js";

export class Negociacoes {
	private negocicacoes: Array<Negociacao> = [];

	adicionar(negociacao: Negociacao): void {
		this.negocicacoes.push(negociacao);
	}

	lista(): Array<Negociacao> {
		return this.negocicacoes;
	}
}
