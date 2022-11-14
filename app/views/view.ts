export abstract class View<T> {
	protected element: HTMLElement;
	private scape = false;

	constructor(selector: string, scape?: boolean) {
		this.element = document.querySelector(selector);
	}

	protected abstract template(model: T): string;

	update(model: T): void {
		let template = this.template(model);
		this.scape
			? (template = template.replace(/<script>[\s\S]*?<\/script>/, ""))
			: null;
		this.element.innerHTML = template;
	}
}
