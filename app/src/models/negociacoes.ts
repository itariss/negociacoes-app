import { Model } from "./Model.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Model<Negociacoes> {
	// Alternativa: private negociacoes: Negociacao[];
	private negocicacoes: Array<Negociacao> = [];

	adiciona(negociacao: Negociacao): void {
		this.negocicacoes.push(negociacao);
	}

	//Alternativa lista(): readonly Negociacao[] {}

	lista(): ReadonlyArray<Negociacao> {
		return this.negocicacoes;
	}

	public paraTexto(): string {
		return JSON.stringify(this.negocicacoes, null, 2);
	}

	public ehIgual(negociacoes: Negociacoes): boolean {
		return (
			JSON.stringify(this.negocicacoes) === JSON.stringify(negociacoes)
		);
	}
}
