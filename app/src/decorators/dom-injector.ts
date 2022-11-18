export function domInjector(selector: string) {
	return function (target: any, propertyKey: string) {
		let element: HTMLElement;
		const getter = function () {
			if (!element) {
				element = <HTMLElement>document.querySelector(selector);
				console.log(
					`Buscando elemento no DOM para o seletor ${selector}
                    para injetar em ${propertyKey} `
				);
			}
			return element;
		};
		Object.defineProperty(target, propertyKey, { get: getter });
	};
}
