export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const data = new Date(dataString.replace(/-/, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
    paraTexto() {
        return `
				Data: ${this.data},
				Quantidade: ${this.quantidade},
				Valor: ${this.valor}
			`;
    }
    ehIgual(negociacao) {
        return this.data.getTime() === negociacao.data.getTime();
    }
}
//# sourceMappingURL=negociacao.js.map