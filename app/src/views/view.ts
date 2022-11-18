import { escape } from "../decorators/escape.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoDeexecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {
	protected element: HTMLElement;

	constructor(selector: string) {
		const element = document.querySelector(selector);
		if (element) {
			this.element = element as HTMLElement;
		} else {
			throw Error(`Seletor ${selector} não encontrado no DOM`);
		}
	}

	// @inspect
	// @logarTempoDeexecucao(true)
	update(model: T): void {
		let template = this.template(model);

		this.element.innerHTML = template;
	}

	protected abstract template(model: T): string;
}
