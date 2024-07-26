export const Ejercicio1 = () => {
	const area = (lado: number): number => {
		return lado * lado;
	};

	return (
		<div>
			<h3>Ejercicio 1</h3>
			<br />
			<span>El área del cuadrado es: {area(4)}</span>
		</div>
	);
};
