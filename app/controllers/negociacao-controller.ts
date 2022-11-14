import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
	private inputData: HTMLInputElement;
	private inputQuantidade: HTMLInputElement;
	private inputValor: HTMLInputElement;
	private negociacoes = new Negociacoes();
	private negocicoesView = new NegociacoesView("#negociacoesView");
	private mensagemView = new MensagemView("#mensagemView");

	constructor() {
		this.inputData = document.querySelector("#data");
		this.inputQuantidade = document.querySelector("#quantidade");
		this.inputValor = document.querySelector("#valor");
		this.negocicoesView.update(this.negociacoes);
	}

	public adiciona(): void {
		const negociacao = this.criaNegociacao();
		if (!this.ehDiaUtil(negociacao.data)) {
			this.mensagemView.update(
				"São aceitas apenas negociações em dias úteis"
			);
		}
		this.negociacoes.adiciona(negociacao);
		this.atualizaView();
		this.limparFormulario();
	}

	private ehDiaUtil(date: Date): boolean {
		return (
			date.getDay() > DiasDaSemana.DOMINGO &&
			date.getDay() < DiasDaSemana.SABADO
		);
	}

	private criaNegociacao(): Negociacao {
		const data = new Date(this.inputData.value.replace(/-/, ","));
		const quantidade = parseInt(this.inputQuantidade.value);
		const valor = parseFloat(this.inputValor.value);
		return new Negociacao(data, quantidade, valor);
	}

	private limparFormulario(): void {
		this.inputData.value = "";
		this.inputQuantidade.value = "";
		this.inputValor.value = "";
		this.inputData.focus();
	}

	private atualizaView(): void {
		this.negocicoesView.update(this.negociacoes);
		this.mensagemView.update("Negociação adicionada com sucesso");
	}
}
