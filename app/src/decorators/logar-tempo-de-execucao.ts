export function logarTempoDeexecucao() {
	return (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) => {
		const metodoOriginal = descriptor.value;
		descriptor.value = function (...args: Array<any>) {
			const t1 = performance.now();
			///metodo original()

			const t2 = performance.now();

			console.log(
				`${propertyKey}, tempo de execução: ${(t2 - t1) / 100} segundos`
			);
		};
		return descriptor;
	};
}
