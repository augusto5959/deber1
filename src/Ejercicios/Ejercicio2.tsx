interface tipoArreglo {
	numeros: number[];
}

interface Resultado {
	suma: number;
}

export const Ejercicio2 = () => {
	const arreglo: tipoArreglo = { numeros: [10, 5, 18, 9, 42] };
	const sumarElementos = (arreglo: tipoArreglo): Resultado => {
		const suma: number = arreglo.numeros.reduce((suma, elemento) => suma + elemento, 0);
		return { suma };
	};

	const resultado: Resultado = sumarElementos(arreglo);

	return (
		<div>
			<h3>Ejercicio 2</h3>
			<p>La suma de los elementos del arreglo es: {resultado.suma}</p>
		</div>
	);
};
