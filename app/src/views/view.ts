export abstract class View<T> {
	protected element: HTMLElement;
	private scape = false;

	constructor(selector: string, scape?: boolean) {
		const element = document.querySelector(selector);
		if (element) {
			this.element = element as HTMLElement;
		} else {
			throw Error(`Seletor ${selector} não encontrado no DOM`);
		}
		if (scape) {
			this.scape = scape;
		}
	}

	protected abstract template(model: T): string;

	update(model: T): void {
		let template = this.template(model);
		if (this.scape) {
			template = template.replace(/<script>[\s\S]*?<\/script>/, "");
		}

		this.element.innerHTML = template;
	}
}
