import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {
	private elemento: HTMLElement;
	constructor(seletor: string) {
		this.elemento = document.querySelector(seletor);
	}
	template(model: Negociacoes): string {
		return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        ${model
							.lista()
							.map(negociacao => {
								return `
                                <tr>
                                    <td>${negociacao.data.toLocaleDateString()}</td>
                                    <td>${negociacao.quantidade}</td>
                                    <td>${negociacao.valor}</td>
                                </tr>
                            `;
							})
							.join("")}
                    </tr>
                </tbody>
            </table>
        `;
	}

	update(model: Negociacoes): void {
		this.elemento.innerHTML = this.template(model);
	}
}
