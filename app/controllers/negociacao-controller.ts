import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
	private _inputData: HTMLInputElement;
	private _inputQuantidade: HTMLInputElement;
	private _inputValor: HTMLInputElement;

	constructor() {
		this._inputData = document.querySelector("#data");
		this._inputQuantidade = document.querySelector("#quantidade");
		this._inputValor = document.querySelector("#valor");
	}

	adiciona(): void {
		const negociacao = this.criaNegociacao();
		console.log(negociacao);
	}

	criaNegociacao(): Negociacao {
		const data = new Date(this._inputData.value.replace(/-/, ","));
		const quantidade = parseInt(this._inputQuantidade.value);
		const valor = parseFloat(this._inputValor.value);
		return new Negociacao(data, quantidade, valor);
	}

	limparFormulario(): void {
		this._inputData.value = "";
		this._inputQuantidade.value = "";
		this._inputValor.value = "";
		this._inputData.focus();
	}
}
