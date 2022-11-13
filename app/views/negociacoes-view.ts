import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {
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
}
