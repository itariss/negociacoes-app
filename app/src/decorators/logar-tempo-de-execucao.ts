export function logarTempoDeexecucao(emSegundos: boolean = false) {
	return (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) => {
		const metodoOriginal = descriptor.value;
		descriptor.value = function (...args: Array<any>) {
			let divisor = 1;
			let unidade = "milisegundos";
			if (emSegundos) {
				divisor = 1000;
				unidade = "segundos";
			}

			const t1 = performance.now();
			///metodo original()
			const retorno = metodoOriginal.apply(this, args);
			const t2 = performance.now();

			console.log(
				`${propertyKey}, tempo de execução: ${
					(t2 - t1) / divisor
				} ${unidade}`
			);
			return retorno;
		};
		return descriptor;
	};
}
