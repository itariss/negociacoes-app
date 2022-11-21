import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
	public obterNegociacoes(): Promise<Array<Negociacao>> {
		return fetch("http://localhost:8080/dados")
			.then(res => res.json())
			.then((dados: Array<NegociacoesDoDia>) => {
				return dados.map(dado => {
					return new Negociacao(
						new Date(),
						dado.vezes,
						dado.montante
					);
				});
			});
	}
}
