import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
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
                                    <td>${this.formataData(negociacao.data)}}</td>
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
    formataData(data) {
        return data.toLocaleDateString();
    }
}
