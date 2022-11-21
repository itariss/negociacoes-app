import { domInjector } from "../decorators/dom-injector.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-services.js";
import { print } from "../utils/print.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
	@domInjector("#data")
	private inputData: HTMLInputElement;
	@domInjector("#quantidade")
	private inputQuantidade: HTMLInputElement;
	@domInjector("#valor")
	private inputValor: HTMLInputElement;
	private negociacoes = new Negociacoes();
	private negocicoesView = new NegociacoesView("#negociacoesView");
	private mensagemView = new MensagemView("#mensagemView");
	private negociacoesService = new NegociacoesService();

	constructor() {
		// Casting explícito
		// this.inputData = document.querySelector("#data") as HTMLInputElement;
		// this.inputQuantidade = document.querySelector(
		// 	"#quantidade"
		// ) as HTMLInputElement;
		// this.inputValor = <HTMLInputElement>document.querySelector("#valor");
		this.negocicoesView.update(this.negociacoes);
	}
	// @inspect
	// @logarTempoDeexecucao(true)
	public adiciona(): void {
		const negociacao = Negociacao.criaDe(
			this.inputData.value,
			this.inputQuantidade.value,
			this.inputValor.value
		);
		if (!this.ehDiaUtil(negociacao.data)) {
			this.mensagemView.update(
				"São aceitas apenas negociações em dias úteis"
			);
		}
		this.negociacoes.adiciona(negociacao);

		print(negociacao, this.negociacoes);
		this.atualizaView();
		this.limparFormulario();
	}

	public importaDados(): void {
		this.negociacoesService
			.obterNegociacoes()
			.then(negociacoes => {
				return negociacoes.filter(negociacaoNaoListada => {
					return !this.negociacoes
						.lista()
						.some(negociacao =>
							negociacao.ehIgual(negociacaoNaoListada)
						);
				});
			})
			.then(negociacoes => {
				for (let negociacao of negociacoes) {
					this.negociacoes.adiciona(negociacao);
				}
			});

		this.negocicoesView.update(this.negociacoes);
	}

	private ehDiaUtil(date: Date): boolean {
		return (
			date.getDay() > DiasDaSemana.DOMINGO &&
			date.getDay() < DiasDaSemana.SABADO
		);
	}

	private limparFormulario(): void {
		this.inputData.value = "";
		this.inputQuantidade.value = "";
		this.inputValor.value = "";
		this.inputData.focus();
	}

	private atualizaView(): void {
		this.negocicoesView.update(this.negociacoes);
		this.mensagemView.update("Negociação adicionanda com sucesso");
	}
}
