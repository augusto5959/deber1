interface Alumno {
	nombre: string;
	edad: number;
	calificacion: number;
}

interface Promedio {
	promedio: number;
}

export const Ejercicio4 = () => {
	const alumnos: Alumno[] = [
		{
			nombre: 'Viviana',
			edad: 19,
			calificacion: 10,
		},
		{
			nombre: 'Wendy',
			edad: 20,
			calificacion: 8,
		},
		{
			nombre: 'Gerson',
			edad: 18,
			calificacion: 9,
		},
	];

	const calcularPromedio = (): Promedio => {
		const sumCalificaciones = alumnos.reduce((acc, alumno) => acc + alumno.calificacion, 0);
		const promedio = sumCalificaciones / alumnos.length;
		return { promedio };
	};

	const { promedio } = calcularPromedio();

	return (
		<div>
			<h3>Ejercicio 4</h3>
			<p>Alumnos: {alumnos.map((alumno) => `${alumno.nombre} - Calificación: ${alumno.calificacion}`).join('; ')}</p>
			<p>Promedio de calificaciones: {promedio}</p>
		</div>
	);
};
