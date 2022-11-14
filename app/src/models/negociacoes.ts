import { Negociacao } from "./negociacao.js";

export class Negociacoes {
	// Alternativa: private negociacoes: Negociacao[];
	private negocicacoes: Array<Negociacao> = [];

	adiciona(negociacao: Negociacao): void {
		this.negocicacoes.push(negociacao);
	}

	//Alternativa lista(): readonly Negociacao[] {}

	lista(): ReadonlyArray<Negociacao> {
		return this.negocicacoes;
	}
}
