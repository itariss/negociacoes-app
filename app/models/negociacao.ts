export class Negociacao {
	constructor(
		private _data: Date,
		private _quantidade: number,
		private _valor: number
	) {}

	get data(): Date {
		const data = new Date(this._data.getTime());
		return data;
	}

	get quantidade(): number {
		return this._quantidade;
	}

	get valor(): number {
		return this._valor;
	}

	get volume(): number {
		return this._quantidade * this._valor;
	}

	public static criaDe(
		dataString: string,
		quantidadeString: string,
		valorString: string
	) {
		const data = new Date(dataString.replace(/-/, ","));
		const quantidade = parseInt(quantidadeString);
		const valor = parseFloat(valorString);
		return new Negociacao(data, quantidade, valor);
	}
}

/*

// Alternativa para classes com metodos getter apenas

export class Negociacao {
	constructor(
		public readonly _data: Date,
		public readonly _quantidade: number,
		public readonly _valor: number
	) {}

	get volume(): number {
		return this._quantidade * this._valor;
	}
}

*/
