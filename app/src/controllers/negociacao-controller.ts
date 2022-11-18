import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoDeexecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
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

	constructor() {
		// Casting explícito
		// this.inputData = document.querySelector("#data") as HTMLInputElement;
		// this.inputQuantidade = document.querySelector(
		// 	"#quantidade"
		// ) as HTMLInputElement;
		// this.inputValor = <HTMLInputElement>document.querySelector("#valor");
		this.negocicoesView.update(this.negociacoes);
	}
	@inspect
	@logarTempoDeexecucao(true)
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
		this.atualizaView();
		this.limparFormulario();
	}

	public importaDados(): void {
		const buscaDados = fetch("http://localhost:8080/dados")
			.then(res => res.json())
			.then((dados: Array<any>) => {
				return dados.map(dado => {
					return new Negociacao(
						new Date(),
						dado.vezes,
						dado.montante
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
		this.mensagemView.update("Negociação adicionada com sucesso");
	}
}
