class Display {
	constructor(displayValorAnterior, displayValorActual) {
		this.displayValorActual = displayValorActual;
		this.displayValorAnterior = displayValorAnterior;
		this.calculator = new Calculadora();
		this.tipoOperacion = undefined;
		this.valorActual = "";
		this.valorAnterior = "";
		this.signos = {
			sumar: "+",
			dividir: "%",
			multiplicar: "x",
			restar: "-"
		}
	}

	agregarNumero(numero) {
		if(numero == "." && this.valorActual.includes("."))return 
		this.valorActual = this.valorActual.toString() + numero;
		this.imprimirValoresEnDisplay();
	}

	agregarOperador(operador) {

	}

	borrarNumero(){
		this.valorActual = this.valorActual.toString().slice(0,-1);
		this.imprimirValoresEnDisplay()
	}

	borrarTodo(){
		this.valorActual = "";
		this.valorAnterior = "";
		this.tipoOperacion = undefined;
		this.imprimirValoresEnDisplay()
	}

	computar(tipo) {
		this.tipoOperacion !== "igual" && this.calcular();
		this.tipoOperacion = tipo;
		this.valorAnterior = this.valorActual || this.valorAnterior; 
		this.valorActual = "";
		this.imprimirValoresEnDisplay()
	}

	imprimirValoresEnDisplay() {
		this.displayValorActual.textContent = this.valorActual;
		this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ""}`;
	}

	calcular() {
		const valorAnterior = parseFloat(this.valorAnterior);
		const valorActual = parseFloat(this.valorActual);

		if(isNaN (valorActual) || isNaN(valorAnterior )) return
		this.valorActual = this.calculator[this.tipoOperacion](valorAnterior,valorActual)
	}
}