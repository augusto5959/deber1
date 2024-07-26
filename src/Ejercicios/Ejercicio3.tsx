interface Arreglo {
	arreglo: number[];
}

interface NumeroDividido {
	numerosDivididos: number[];
}

export const Ejercicio3 = () => {
	const arregloOriginal: Arreglo = { arreglo: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50] };
	const arregloDividido: NumeroDividido = {
		numerosDivididos: arregloOriginal.arreglo.map((elemento) => elemento / 5),
	};

	return (
		<div>
			<h3>Ejercicio 3</h3>
			<p>Arreglo original: {arregloOriginal.arreglo.join(', ')}</p>
			<p>Arreglo dividido entre 5: {arregloDividido.numerosDivididos.join(', ')}</p>
		</div>
	);
};
