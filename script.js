
const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");

const botonesDeNumeros = document.querySelectorAll(".numero");
const botonesDeOperadores = document.querySelectorAll(".operador");

const display = new Display(displayValorAnterior,displayValorActual);

botonesDeNumeros.forEach(boton => {
	boton.addEventListener("click" , () => {
		display.agregarNumero(boton.innerHTML);
	})
});

botonesDeOperadores.forEach(boton => {
	boton.addEventListener("click" , () => {
		display.computar(boton.value)
	})
})


